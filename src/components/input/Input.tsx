import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { Message } from "react-hook-form/dist/types/errors";

type Props = {
  error?: Message;
  name: string;
  register: any;
  label?: string;
  placeholder?: string;
  type?: "textarea" | "text" | "password";
};

export const Input = (props: Props) => {
  const { error, name, register, label, placeholder, type } = props;
  const [errorStr, setErrorStr] = useState<string>("");

  useEffect(() => {
    setErrorStr(error || "");
  }, [error]);

  return (
    <div>
      <TextField
        size={name !== "text" ? "small" : "middle"}
        style={{ width: "100%", marginTop: "15px" }}
        label={label}
        placeholder={placeholder || label || null}
        variant="outlined"
        error={!!error}
        helperText={errorStr}
        multiline={type === "textarea"}
        {...register(name)}
      />
    </div>
  );
};
