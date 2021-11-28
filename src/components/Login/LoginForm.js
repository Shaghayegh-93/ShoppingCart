import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../common/Input";
import "./loginForm.css";
import { Link, withRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import loginUser from "../../services/loginService";
import { toast } from "react-toastify";
import { useAuth, useAuthActions } from "../../Context/AuthProvider";
import { useQuery } from "../../hooks/useQuery";
const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  password: Yup.string().required("Password is required"),
});
const LoginForm = ({ history }) => {
  const setAuth = useAuthActions();
  const auth = useAuth();
  const [error, setError] = useState(null);
  const query = useQuery();
  const redirect = query.get("redirect") || "/";
  useEffect(() => {
    if (auth) history.push(redirect);
  }, [auth, redirect]);
  const onSubmit = async (values) => {
    try {
      const { data } = await loginUser(values);
      setAuth(data);

      setError(null);
      history.push(redirect);
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
        <Input formik={formik} label="Email" name="email" type="email" />
        <Input
          formik={formik}
          label="Password"
          name="password"
          type="password"
        />
        <button
          style={{ width: "100%" }}
          type="submit"
          disabled={!formik.isValid}
          className="btn primary"
        >
          Login
        </button>

        <Link to={`/signup?redirect=${redirect}`}>
          <p style={{ marginTop: "15px" }}>Join now</p>
        </Link>
      </form>
    </div>
  );
};

export default withRouter(LoginForm);
