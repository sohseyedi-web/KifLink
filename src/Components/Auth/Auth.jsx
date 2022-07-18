import "./Auth.scss";
import { FiTwitter, FiGithub, FiChrome, FiLock, FiMail } from "react-icons/fi";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Container from "../../Container/Container";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .required("مقداری وارد نشده است")
    .email("آدرس ایمیل صحیح نیست"),
  password: Yup.string()
    .required("مقداری وارد نشده است")
    .min(8, "رمز عبور کوتاه است"),
});

const Auth = () => {
  const navigate = useNavigate();

  const onSubmit = (values) => {
    console.log(values);
    navigate("/account");
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  const Error = styled.div`
    position: absolute;
    contnet: "";
    right: 0;
    bottom: -10%;
    color: #d9376e;
    font-size: 1.1rem;
  `;

  return (
    <Container>
      <section className="auth">
        <form
          className="container auth-container"
          onSubmit={formik.handleSubmit}
        >
          <h3 className="auth-container__title">KifLink</h3>
          <p className="auth-container__subtitle">
            لطفا برای ادامه وارد حساب خود شوید
          </p>
          <div className="auth-container__box">
            <span className="auth-container__box-icon">
              <FiMail size={28} />
            </span>
            <input
              type="email"
              className="auth-container__box-input"
              id="email"
              name="email"
              autocomplete="off"
              placeholder="Example@gmail.com"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <Error>!{formik.errors.email}</Error>
            )}
          </div>
          <div className="auth-container__box">
            <span className="auth-container__box-icon">
              <FiLock size={28} />
            </span>
            <input
              type="text"
              className="auth-container__box-input"
              id="pass"
              name="pass"
              placeholder="A-z"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password && (
              <Error>!{formik.errors.password}</Error>
            )}
          </div>
          <button
            className={
              !formik.isValid
                ? "auth-container__footer btn-dis"
                : "auth-container__footer"
            }
            disabled={!formik.isValid}
          >
            ورود به سایت
          </button>
          <div className="auth-container__line">یا</div>
          <div className="auth-container__social">
            <span>
              <FiTwitter size={32} />
            </span>
            <span>
              <FiChrome size={32} />
            </span>

            <span>
              <FiGithub size={32} />
            </span>
          </div>
        </form>
      </section>
    </Container>
  );
};

export default Auth;
