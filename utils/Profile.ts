import Permission from "./Permissions";

type TProfile = {
  label: string;
  value: string;
  whoCanSee: Array<number>;
};
class Profile {
  private profile: Array<TProfile>;
  constructor(profile: Array<TProfile>) {
    this.profile = profile;
  }
  getProfile() {
    return this.profile;
  }
  getProfileWithPermission(permissionId: number) {
    const permissions = new Permission();
    const mappedProfile = this.profile.map((item) => {
      if (item.whoCanSee.includes(permissionId)) {
        return item;
      }
      const permissionLables = permissions
        .selectPermissionLables(item.whoCanSee)
        .join(" و ");
      return { ...item, value: `قابل نمایش برای ${permissionLables}` };
    });
    return mappedProfile;
  }
}
export default Profile;
export type { TProfile };
