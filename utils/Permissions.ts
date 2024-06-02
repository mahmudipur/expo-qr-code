interface IPermission {
  id: number;
  label: string;
  value: string;
}

class Permission {
  protected permissions = [
    { id: 0, label: "سوپر ادمین", value: "superAdmin" },
    { id: 1, label: "ادمین", value: "admin" },
    { id: 2, label: "کاربر معمولی", value: "user" },
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
