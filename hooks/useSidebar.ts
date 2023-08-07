import { create } from "zustand";

interface SidebarProps{
    isOpen: boolean,
    onClose: () => void,
    onOpen: () => void
}

const useSidebar = create<SidebarProps>((set)=>({
    isOpen: false,
    onClose: () => set({isOpen: false}),
    onOpen: () => set({isOpen: true})
}))

export default useSidebar