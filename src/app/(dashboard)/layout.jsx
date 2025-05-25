'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { supabase } from '../../../lib/supabase'
import { LayoutDashboard, BarChart2, Settings, LogOut } from 'lucide-react'

export default function DashboardLayout({ children }) {
    const router = useRouter()
    const [checkingSession, setCheckingSession] = useState(true)
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        supabase.auth.getSession().then(async ({ data }) => {
            if (!data.session) {
                router.push('/login');
            } else {
                const { data: profileData } = await supabase
                    .from('client_profiles')
                    .select('full_name, avatar_url')
                    .eq('user_id', data.session.user.id)
                    .single();

                setProfile(profileData);
                setCheckingSession(false);
            }
        });
    }, []);


    useEffect(() => {
        supabase.auth.getSession().then(({ data }) => {
            if (!data.session) router.push('/login')
            else setCheckingSession(false)
        })
    }, [])

    if (checkingSession) {
        return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>
    }

    return (
        <div className="min-h-screen flex font-[Quicksand] text-[#fef7f1]">
            {/* Sidebar */}
            <aside className="hidden md:flex flex-col bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-3xl shadow-xl mt-24 ml-6 w-64 h-[85vh]">
                <div className="flex flex-col justify-between flex-1">
                    <div className="space-y-10">
                        {/* Profile Section */}
                        {profile && (
                            <div className="flex items-center gap-3 mb-4">
                                <img
                                    src={profile.avatar_url || '/default-avatar.png'}
                                    alt="Avatar"
                                    className="w-10 h-10 rounded-full object-cover border border-white/20"
                                />
                                <div>
                                    <p className="text-sm font-semibold text-white">{profile.full_name}</p>
                                    <p className="text-xs text-white/50">Client</p>
                                </div>
                            </div>
                        )}

                        {/* Logo */}
                        <h1 className="text-2xl font-bold">
                            madebyme<span className="text-[#d1b5aa]">.dev</span>
                        </h1>

                        {/* Navigation Links */}
                        <nav className="flex flex-col gap-4 text-white/80 text-sm">
                            <SidebarLink icon={<LayoutDashboard size={18} />} label="Dashboard" href="/dashboard" />
                            <SidebarLink icon={<BarChart2 size={18} />} label="Analytics" href="/analytics" />
                            <SidebarLink icon={<Settings size={18} />} label="Settings" href="/settings" />
                        </nav>
                    </div>

                    <button
                        onClick={async () => {
                            await supabase.auth.signOut();
                            router.push('/login');
                        }}
                        className="flex items-center gap-2 text-red-400 hover:text-red-300 transition text-sm"
                    >
                        <LogOut size={18} /> Log out
                    </button>
                </div>
            </aside>






            {/* Main content */}
            <main className="flex-1 p-6 md:p-10 bg-transparent">
                {children}
            </main>
        </div>
    )
}

function SidebarLink({ icon, label, href = "#" }) {
    return (
        <a
            href={href}
            className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-white/10 transition"
        >
            {icon}
            {label}
        </a>
    )
}

