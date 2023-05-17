import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import {
  FieldType,
  LoginFormMUI,
} from "../../components/login-form/LoginFormMUI";
import { useAppDispatch, useAppSelector } from "../../store/store-hooks";
import {
  selectToken,
  selectUserData,
  setUserData,
} from "../../store/slices/user-slice";
import { updateUser } from "../../API/account/account";
import Alert from "@mui/material/Alert";
import { Button } from "@mui/material";
import { ProfilePageStyle } from "./profile-page.style";

const formSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(3, "Username length should be at least 3 characters"),
  email: yup.string().required("Email is required").email("Email is invalid"),
  newPassword: yup
    .string()
    .notRequired()
    .test("len", "Password must be between 6 and 40 characters", (val) => {
      return val ? val.length >= 6 && val.length <= 40 : true;
    }),
  avatar: yup.string().url().notRequired(),
});

type FormValues = yup.InferType<typeof formSchema>;

const formFields: FieldType[] = [
  {
    label: "Username",
    name: "username",
  },
  {
    label: "Email address",
    name: "email",
  },
  {
    label: "New Password",
    name: "newPassword",
  },
  {
    label: "Avatar image (url)",
    name: "avatar",
  },
];

export const ProfilePage = () => {
  const history = useNavigate();
  const dispatch = useAppDispatch();
  const userData = useAppSelector(selectUserData);
  const token = useAppSelector(selectToken);

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const onSubmit = async (data: FormValues) => {
    if (token) {
      const { email, username, avatar, newPassword } = data;
      const editedFields = {
        email,
        username,
        image: avatar || undefined,
        password: newPassword || undefined,
      };

      const response = await updateUser(editedFields, token);

      if (response.type === "IS_TAKEN") {
        setErrors(response.data.errors);
      } else {
        dispatch(setUserData(response.data.user));

        setShowSuccess(true);

        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
      }
    }
  };

  return (
    <>
      <LoginFormMUI
        mode={"onSubmit"}
        submitHandler={onSubmit}
        title={"Edit Profile"}
        buttonText={"Save"}
        validationSchema={formSchema}
        fieldsData={formFields}
        defaultValues={{
          ...userData,
          newPassword: "",
        }}
        errors={errors}
      />
      {showSuccess && (
        <ProfilePageStyle className="successMessage">
          <Alert severity="success">
            <strong>Success</strong> - Data updated successfully
          </Alert>
          <Button
            onClick={() => history("/articles")}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </ProfilePageStyle>
      )}
    </>
  );
};
