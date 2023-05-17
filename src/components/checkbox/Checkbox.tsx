import {
  FormControlLabel,
  Checkbox as MUICheckbox,
  Typography,
} from "@mui/material";
import { CheckboxStyle } from "./checkbox.style";

type Props = {
  label?: string;
  error?: string;
  register: any;
  name: string;
};

export const Checkbox = (props: Props) => {
  const { label, register, name, error } = props;

  return (
    <CheckboxStyle>
      <FormControlLabel
        control={<MUICheckbox color="primary" {...register(name)} />}
        label={
          label ? (
            <Typography
              className={"typography"}
              variant="body1"
              color="textPrimary"
            >
              {label}
            </Typography>
          ) : null
        }
      />
      {error ? (
        <Typography variant="body2" className={"error"}>
          {error}
        </Typography>
      ) : null}
    </CheckboxStyle>
  );
};
