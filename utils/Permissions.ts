interface IPermission {
  id: number;
  label: string;
  value: string;
}

class Permission {
  protected permissions = [
    { id: 0, label: "سازمان ملی مهاجرت", value: "Mohajer", logo: require("@/assets/images/logo/Mohajer.png") },
    { id: 1, label: "پلیس فراجا", value: "faraja", logo: require("@/assets/images/logo/faraja.png") },
    { id: 2, label: "بانک سپه", value: "sepah", logo: require("@/assets/images/logo/sepah.png") },
    { id: 3, label: "آموزش و پرورش", value: "amoozesh", logo: require("@/assets/images/logo/amoozesh.png") },
    { id: 4, label: "بانک مرکزی", value: "CBI", logo: require("@/assets/images/logo/CBI.png") },
    { id: 5, label: "امیدبوم", value: "omidboom", logo: require("@/assets/images/logo/omidboom.png") },
    { id: 6, label: "وزارت تعاون کار و رفاه اجتماعی", value: "refah", logo: require("@/assets/images/logo/refah.png") },
    { id: 7, label: "وزارت امور خارجه", value: "vezarat", logo: require("@/assets/images/logo/vezarat.png") },
  ];

  constructor() {}

  selectAll() {
    return this.permissions;
  }

  selectById(id: number) {
    const permission = this.permissions.find((item) => item.id === id);

    if (permission === undefined) {
      throw new Error("no permission found with the given id");
    }
    return permission;
  }
  selectPermissionLables(ids: Array<number>) {
    return ids.map(id => {
        const permission = this.permissions.find(permission => permission.id === id)
        return permission ? permission.label : "نقشی با این شناسه یافت نشد"
    })
  }
}

export default Permission;
export type { IPermission }
