import { create } from 'zustand';

interface NodeState {
  selectedNode: string | null;
  setSelectedNode: (id: string | null) => void;
}

export const useNodeStore = create<NodeState>((set) => ({
  selectedNode: null,
  setSelectedNode: (id) => set({ selectedNode: id }),
}));
