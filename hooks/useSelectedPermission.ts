import { IPermission } from "@/utils/Permissions";
import { create } from "zustand";

type Store = {
  selectedPermission: IPermission | null;
  setSelectedPermission: (i: IPermission) => void;
};

const useSelectedPermission = create<Store>()((set) => ({
  selectedPermission: null,
  setSelectedPermission: (selectedPermission) =>
    set(() => ({ selectedPermission })),
}));
export default useSelectedPermission