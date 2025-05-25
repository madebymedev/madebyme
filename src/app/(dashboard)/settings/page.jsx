'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from "lucide-react";
import { supabase } from '../../../../lib/supabase'
import { useRouter } from 'next/navigation'
import countryData from '../../data/countries.json'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../../../components/ui/select"

const countryList = countryData.map(c => c.name).sort()
const languages = ['English', 'Dutch']

export default function SettingsPage() {
  const router = useRouter()
  const [profile, setProfile] = useState({ full_name: '', phone: '', title: '', country: '', preferred_language: '', avatar_url: '' })
  const [email, setEmail] = useState('')
  const [avatarFile, setAvatarFile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data }) => {
      if (!data.session) return router.push('/login')

      setEmail(data.session.user.email)

      const { data: profileData } = await supabase
        .from('client_profiles')
        .select('*')
        .eq('user_id', data.session.user.id)
        .single()

      setProfile(profileData || {})
      setLoading(false)
    })
  }, [])

  const handleSave = async () => {
    setSaving(true)

    if (avatarFile) {
      const fileExt = avatarFile.name.split('.').pop()
      const fileName = `${profile.id}.${fileExt}`
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(fileName, avatarFile, { upsert: true })

      if (!uploadError) {
        const { data: urlData } = supabase.storage.from('avatars').getPublicUrl(fileName)
        profile.avatar_url = urlData.publicUrl
      }
    }

    await supabase
      .from('client_profiles')
      .update({
        full_name: profile.full_name,
        phone: profile.phone,
        title: profile.title,
        country: profile.country,
        preferred_language: profile.preferred_language,
        avatar_url: profile.avatar_url,
      })
      .eq('id', profile.id)

    const toast = document.createElement('div');
    toast.className = `
     fixed top-6 right-6 z-50 px-6 py-4 min-w-[220px] flex items-center gap-3
     rounded-2xl shadow-xl bg-white/10 backdrop-blur-md border border-white/20
     text-white font-[Quicksand] text-sm animate-fade-in-down
    `;

    toast.innerHTML = `
      <div class="flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
      Profile updated
      </div>
    `;

    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);

    setSaving(false)
  }

  if (loading) return <p className="text-white p-10">Loading...</p>

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="font-[Quicksand] text-[#fef7f1] mt-20"
    >
      <h2 className="text-3xl font-bold mb-4">Settings</h2>
      <p className="text-white/70 mb-10">Manage your account settings and site delivery preferences here.</p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Editable Profile Card with Transparent Glassy Background */}
        <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-8 space-y-6">
          <h3 className="text-2xl font-bold text-white/90">Your Info</h3>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="text-xs uppercase tracking-widest text-white/60 block mb-1">Email (read-only)</label>
              <input className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white/60 " value={email} disabled />
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest text-white/60 block mb-1">Full Name</label>
              <input
                className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#e8ded1] transition-all duration-300 ease-in-out transform focus:scale-[1.02]"
                value={profile.full_name || ''}
                onChange={(e) => setProfile({ ...profile, full_name: e.target.value })}
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest text-white/60 block mb-1">Phone</label>
              <input
                className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#e8ded1] transition-all duration-300 ease-in-out transform focus:scale-[1.02]"
                value={profile.phone || ''}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest text-white/60 block mb-1">Title</label>
              <input
                className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#e8ded1] transition-all duration-300 ease-in-out transform focus:scale-[1.02]"
                value={profile.title || ''}
                onChange={(e) => setProfile({ ...profile, title: e.target.value })}
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest text-white/60 block mb-1">Country / Region</label>
              <Select value={profile.country} onValueChange={(value) => setProfile({ ...profile, country: value })}>
                <SelectTrigger className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white backdrop-blur-md font-[Quicksand]">
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent className="bg-white/10 border border-white/20 text-white backdrop-blur-md font-[Quicksand]">
                  {countryList.map(country => (
                    <SelectItem key={country} value={country}>{country}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest text-white/60 block mb-1">Preferred Language</label>
              <Select value={profile.preferred_language} onValueChange={(value) => setProfile({ ...profile, preferred_language: value })}>
                <SelectTrigger className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white backdrop-blur-md">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent className="font-[Quicksand] bg-white/10 border border-white/20 text-white backdrop-blur-md">
                  {languages.map(lang => (
                    <SelectItem key={lang} value={lang}>{lang}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="col-span-2">
              <label className="text-xs uppercase tracking-widest text-white/60 block mb-1">Upload Avatar</label>
              <input type="file" onChange={(e) => setAvatarFile(e.target.files[0])} className="block text-white/70" />
            </div>
          </div>

          <button
            onClick={handleSave}
            disabled={saving}
            className="w-full py-3 bg-[#e8ded1] text-[#3a2f2b] rounded-xl font-semibold hover:bg-[#fef7f1] transition mt-2"
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>

        {/* Project Status Card (unchanged) */}
        <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-6">
          <h3 className="text-xl font-semibold mb-4">Site Status</h3>
          <p className="text-white/60 text-sm">Current Phase: <span className="text-white font-medium">In Development</span></p>
          <p className="text-white/60 text-sm mt-2">Estimated Delivery: <span className="text-white font-medium">June 2025</span></p>
        </div>
      </div>
    </motion.section>
  )
}
