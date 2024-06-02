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
    const mappedProfile = this.profile.map((item) => {
      if (item.whoCanSee.includes(permissionId)) {
        return item;
      }
      return null
    });
    return mappedProfile.filter(item => item !== null);
  }
}
export default Profile;
export type { TProfile };
