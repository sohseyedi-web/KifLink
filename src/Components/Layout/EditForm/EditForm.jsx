import "./EditForm.scss";
import { Helmet } from "react-helmet";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewFormData } from "../../../Store/action/kif-action";
import Container from "../../../Container/Container";

const initialValues = {
  username: "",
  fullname: "",
  jobs: "",
  message: "",
};

const validationSchema = Yup.object({
  username: Yup.string()
    .required("مقداری وارد نشده است")
    .min(6, "نام کاربری کوتاه است"),
  fullname: Yup.string().required("مقداری وارد نشده است"),
  jobs: Yup.string().required("مقداری وارد نشده است"),
  message: Yup.string(),
});

const EditForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(addNewFormData(values));
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
    right: 1%;
    bottom: -80%;
    color: #d9376e;
    font-size: 1.1rem;
  `;
  const ErrorText = styled.div`
    position: absolute;
    contnet: "";
    right: 1%;
    bottom: -30%;
    color: #d9376e;
    font-size: 1.1rem;
  `;

  return (
    <Container>
      <Helmet>
        <title>ویرایش اطلاعات</title>
      </Helmet>
      <div className="edit">
        <form className="edit-wrap container" onSubmit={formik.handleSubmit}>
          <div className="edit-wrap__box">
            <input
              type="text"
              id="username"
              placeholder="sohseyedi"
              className="edit-wrap__box-input input-user"
              {...formik.getFieldProps("username")}
            />
            <label htmlFor="username">kif.link/</label>
            {formik.touched.username && formik.errors.username && (
              <Error>{formik.errors.username}</Error>
            )}
          </div>
          <div className="edit-wrap__box" dir="rtl">
            <input
              type="text"
              id="username"
              placeholder="نام و نام خانوادگی ..."
              className="edit-wrap__box-input"
              {...formik.getFieldProps("fullname")}
            />
            {formik.touched.fullname && formik.errors.fullname && (
              <Error>{formik.errors.fullname}</Error>
            )}
          </div>
          <div className="edit-wrap__box" dir="rtl">
            <input
              type="text"
              id="username"
              placeholder="مهارت ..."
              className="edit-wrap__box-input"
              {...formik.getFieldProps("jobs")}
            />
            {formik.touched.jobs && formik.errors.jobs && (
              <Error>{formik.errors.jobs}</Error>
            )}
          </div>
          <div className="edit-wrap__box" dir="rtl">
            <textarea
              placeholder="پیام ..."
              className="edit-wrap__box-input"
              {...formik.getFieldProps("message")}
            ></textarea>
            {formik.touched.message && formik.errors.message && (
              <ErrorText>{formik.errors.message}</ErrorText>
            )}
          </div>
          <button
            className={
              !formik.isValid ? "edit-wrap__btn btn-dis" : "edit-wrap__btn"
            }
            disabled={!formik.isValid}
          >
            ثبت اطلاعات
          </button>
        </form>
      </div>
    </Container>
  );
};

export default EditForm;
