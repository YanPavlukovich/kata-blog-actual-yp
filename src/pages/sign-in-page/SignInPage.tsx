import { useState } from "react";
import * as yup from "yup";
import {
  FieldType,
  LoginFormMUI,
} from "../../components/login-form/LoginFormMUI";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../store/store-hooks";
import { signInUser } from "../../API/account/account";
import { setUserData } from "../../store/slices/user-slice";

const formSchema = yup.object().shape({
  password: yup.string().required("Password is required"),
  email: yup.string().required("Email is required").email("Email is invalid"),
});

type FormValues = yup.InferType<typeof formSchema>;

const formFields: FieldType[] = [
  {
    label: "Email address",
    name: "email",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
  },
];

export const SignInPage = () => {
  const dispatch = useAppDispatch();
  const [errors, setErrors] = useState({});

  const onSubmit = async (data: FormValues) => {
    const { email, password } = data;

    const response = await signInUser(email, password);

    if (response.type === "AUTH_ERROR") {
      setErrors({
        email: "invalid email or password",
        password: "invalid email or password",
      });
    } else {
      dispatch(setUserData(response.data.user));
    }
  };

  return (
    <div>
      <LoginFormMUI
        submitHandler={onSubmit}
        title={"Sign In"}
        buttonText={"Login"}
        validationSchema={formSchema}
        fieldsData={formFields}
        helpText={
          <>
            Don’t have an account? <Link to={"/sign-up-page"}>Sign Up</Link>.
          </>
        }
        errors={errors}
      />
    </div>
  );
};
