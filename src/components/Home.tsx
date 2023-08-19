import { useForm } from "react-hook-form";
import { TextField, Button, Alert } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { NavigateFunction} from "@remix-run/router/utils";

type FormData = {
  name: string;
  phone: number;
  email: string;
};
const Home: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    localStorage.setItem("formData", JSON.stringify(data));
    navigate("/tableComp");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          spacing={4}
          direction="column"
          alignItems="center"
          justifyContent="space-between"
          margin="auto"
          sx={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            border: "1px solid black",
            borderRadius: "20px",
          }}
          p={2}
          width="300px"
        >
          <Typography variant="h5" align="center">
            Please Enter The Credentials
          </Typography>
          <TextField
            label="Name"
            {...register("name", { required: true })}
            error={!!errors.name}
            helperText={errors.name ? "Name is required" : ""}
          />
          <TextField
            label="Phone"
            {...register("phone", { required: true })}
            error={!!errors.phone}
            helperText={errors.phone ? "Phone is required" : ""}
          />
          <TextField
            label="Email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            error={!!errors.email}
            helperText={
              errors.email
                ? errors.email.type === "required"
                  ? "Email is required"
                  : "Email is invalid"
                : ""
            }
          />
          <Button type="submit" variant="contained" disabled={!isValid}>
            Submit
          </Button>
          {!isValid && (
            <Alert severity="error">
              Please fill out all fields correctly.
            </Alert>
          )}
        </Stack>
      </form>
    </>
  );
};

export default Home;
