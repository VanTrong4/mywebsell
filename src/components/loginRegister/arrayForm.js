export const arrRegister = [
  {
    id: 1,
    name: "name",
    type: "text",
    placeholder: "Name",
    error: "Bạn cần nhập tên và phải nhiều hơn 6 kí tự",
    required: true,
    pattern: "^.{6,}$",
  },
  {
    id: 2,
    name: "email",
    type: "text",
    placeholder: "Email Address",
    error: "Bạn cần nhập email hoặc email bị sai định dạng",
    required: true,
    pattern: "^[^s@]+@[^s@]+.[^s@]+$",
  },
  {
    id: 3,
    name: "password",
    type: "password",
    placeholder: "Password",
    error:
      "Bạn cần nhập Password, phải nhiều hơn 6 kí tự, có số và có 1 kí tự viết hoa",
    required: true,
    pattern: "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$",
  },
  {
    id: 4,
    name: "address",
    type: "text",
    placeholder: "Address",
    error: "Bạn cần nhập địa chỉ",
    required: true,
    pattern: "^.{6,}$",
  },
  {
    id: 5,
    name: "phone",
    type: "number",
    placeholder: "Phone",
    error: "Bạn cần nhập số điện thoại",
    required: true,
    pattern: "^.{6,}$",
  },
];

export const arrLogin = [
  {
    id: 6,
    name: "email",
    type: "text",
    placeholder: "Email Address",
    error: "Bạn cần nhập email hoặc email bị sai định dạng",
    required: true,
    pattern: "^[^s@]+@[^s@]+.[^s@]+$",
  },
  {
    id: 7,
    name: "password",
    type: "password",
    placeholder: "Password",
    error:
      "Bạn cần nhập Password, phải nhiều hơn 6 kí tự và có 1 kí tự viết hoa",
    required: true,
    pattern: "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$",
  },
];
