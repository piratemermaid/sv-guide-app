import create from "zustand";

const useStore = create((set) => ({
  selectedCharacterId: null,
  setSelectedCharacterId: (id) =>
    set((state) => ({
      selectedCharacterId: state.selectedCharacterId === id ? null : id
    }))
}));

export default useStore;
