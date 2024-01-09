import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, "حداقل طول ایمیل باید 3 کاراکتر باشد")
    .max(40, "حداکثر طول ایمیل باید 40 کاراکتر باشد")
    .required("ایمیل الزامی است")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "فرمت ایمیل وارد شده صحیح نیست"),
  password: Yup.string()
    .min(8, "حداقل طول رمزعبور باید 8 کاراکتر باشد")
    .max(30, "حداکثر طول رمزعبور باید 30 کاراکتر باشد")
    .required("رمزعبور الزامی است"),
});

export { loginSchema };
