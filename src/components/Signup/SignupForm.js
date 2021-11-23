import Input from "../../common/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./SignupForm.css";
import { Link, withRouter } from "react-router-dom";
import signupUser from "../../services/signupService";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAuthActions } from "../../Context/AuthProvider";
const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  PasswordConfirmation: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(1, "Namw lenth is not valid"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .required("Phone Number is required")
    .matches(/^[0-9]{11}$/, "Invalid Phone Number"),
  password: Yup.string().required("Password is required"),
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
  //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  // ),
  PasswordConfirmation: Yup.string()
    .required("Password Confirmation is Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const SignupForm = ({ history }) => {
  const setAuth = useAuthActions();
  const [error, setError] = useState(null);
  const onSubmit = async (values) => {
    const { name, password, email, phoneNumber } = values;
    const userData = {
      name,
      password,
      email,
      phoneNumber,
    };
    try {
      const { data } = await signupUser(userData);
      setAuth(data);
      // localStorage.setItem("authState", JSON.stringify(data));
      setError(null);
      history.push("/");
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
        toast.error(error.response.data.message);
      }
    }
  };
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="formContainer">
      <form onSubmit={formik.handleSubmit}>
        <Input formik={formik} label="Name" name="name" />
        <Input formik={formik} label="Email" name="email" type="email" />
        <Input
          formik={formik}
          label="phone Number"
          name="phoneNumber"
          type="tel"
        />
        <Input
          formik={formik}
          label="Password"
          name="password"
          type="password"
        />
        <Input
          formik={formik}
          label="Password Confirmation"
          name="PasswordConfirmation"
          type="password"
        />
        <button
          style={{ width: "100%" }}
          type="submit"
          disabled={!formik.isValid}
          className="btn primary"
        >
          Signup
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}

        <Link to="/login">
          <p style={{ marginTop: "15px" }}>Already login?</p>
        </Link>
      </form>
    </div>
  );
};

export default withRouter(SignupForm);
