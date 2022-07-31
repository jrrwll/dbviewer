import { invoke } from '@tauri-apps/api'

export function load_profiles(cb: (profiles: string) => void) {
    invoke('load_profiles').then((res) => cb(res as string))
}

export function store_profiles(profiles: string, cb: (msg: string) => void) {
    invoke('store_profiles', { content: profiles }).then((msg) => cb(msg as string))
}
