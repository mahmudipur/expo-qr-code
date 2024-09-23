import { TProfile } from "@/utils/Profile";

const person_one: Array<TProfile> = [
  { label: "نام", value: "محمد", whoCanSee: [0, 1, 2, 3, 4, 5, 6, 7] },
  { label: "نام خانوادگی", value: "محمودی پور", whoCanSee: [0, 1, 2, 3, 4, 5, 6, 7] },
  { label: "ملیت", value: "ایرانی", whoCanSee: [0, 3, 4, 5, 6, 7] },
  { label: "شناسه یکتا", value: "9347654876", whoCanSee: [0, 1, 2] },
  { label: "تردد", value: "از 1403/3/3 تا 1403/6/3 ", whoCanSee: [0, 1] },
  { label: "شهر مبدا", value: "مشهد", whoCanSee: [0, 1] },
  { label: "شهر مقصد", value: "شیراز", whoCanSee: [0, 1] },
  { label: "شماره حساب", value: "3130070050310", whoCanSee: [0, 2] },
  { label: "شماره کارت", value: "5892 1014 8577 5164", whoCanSee: [0, 2] },
  { label: "موجودی", value: "23,000,000 ریال", whoCanSee: [0, 2] },
];

const person_two: Array<TProfile> = [
  { label: "نام", value: "محمد", whoCanSee: [0, 1, 2] },
  { label: "نام خانوادگی", value: "محمودی پور", whoCanSee: [0, 1, 2] },
  { label: "ملیت", value: "ایرانی", whoCanSee: [0] },
  { label: "شناسه یکتا", value: "9347654876", whoCanSee: [0, 1, 2] },
];
const person_three: Array<TProfile> = [
  { label: "تردد", value: "از 1403/3/3 تا 1403/6/3 ", whoCanSee: [0, 1] },
  { label: "شهر مبدا", value: "مشهد", whoCanSee: [0, 1] },
  { label: "شهر مقصد", value: "شیراز", whoCanSee: [0, 1] },
];

const person_four: Array<TProfile> = [
  { label: "شماره حساب", value: "3130070050310", whoCanSee: [0, 2] },
  { label: "شماره کارت", value: "5892 1014 8577 5164", whoCanSee: [0, 2] },
  { label: "موجودی", value: "23,000,000 ریال", whoCanSee: [0, 2] },
];

export { person_one, person_two, person_three, person_four };
