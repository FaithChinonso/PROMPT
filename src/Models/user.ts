class UserType {
  email: string | null;
  uid: string | null;
  phone: string | null;
  photo: string | null;
  creationTime: string | null | undefined;
  lastLogin: string | null | undefined;
  name: string | null;

  constructor(
    email: string,
    uid: string,
    phone: string,
    photo: string,
    creationTime: string,
    lastLogin: string,
    name: string
  ) {
    this.email = email;
    this.uid = uid;
    this.phone = phone;
    this.photo = photo;
    this.creationTime = creationTime;
    this.lastLogin = lastLogin;
    this.name = name;
  }
}
export default UserType;
