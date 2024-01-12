import * as Yup from "yup";

const nftSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, "حداقل طول عنوان باید 3 کاراکتر باشد")
    .max(40, "حداکثر طول عنوان باید 40 کاراکتر باشد")
    .required("عنوان الزامی است"),
  price: Yup.number().min(2).max(20).required("نام قیمت است"),
  description: Yup.string()
    .min(3, "حداقل طول توضیحات باید 3 کاراکتر باشد")
    .max(200, "حداکثر طول توضیحات باید 200 کاراکتر باشد")
    .required("توضیحات الزامی است"),
  password: Yup.string()
    .matches(
      /^[A-Za-z]{2}@\d{6}$/,
      "رمزعبور باید شامل حروف بزرگ، حروف کوچک، عدد و نماد باشد و طول آن بین 8 تا 20 کاراکتر باشد"
    )
    .required("رمزعبور الزامی است"),
});

export { nftSchema };
