import React, { useState } from "react";
import "../Login/Login.css";
import image from "../../Assets/backimg.jpg";
import { Card, Snackbar, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorEmail, setErrorEmail] = useState();
  const [errorPass, setErrorPass] = useState();
  const [error, setError] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [severity, setSeverity] = useState("error");
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    const regexEmail =
      /[a-zA-Z0-9]+([\_\.\-{1}])?[a-zA-Z0-9]+\@[a-zA-Z0-9]+(\.[a-zA-Z\.]+)/g;
    if (!regexEmail.test(email)) {
      setErrorEmail("Enter valid Email id ");
      setError(true);
      return;
    } else {
      setErrorEmail("");
      setError(false);
    }
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value == "") {
      setErrorPass("Please Enter Your Password");
      setError(true);
    } else {
      setErrorPass("");
      setError(false);
    }
  };
  const handleLogin = (e) => {
    e.preventDefault();
    var data = { email, password };
    if (data.email == "netflex@gmail.com" && data.password == "123") {
      navigate("/Homepage");
    } else {
      setErrorEmail("Enter Valid Email id");
      setErrorPass("Enter valid Password");
      setError(true);
    }
  };
  const handleClose = () => {
    setOpenSnackbar(false);
  };
  // css
  const textStyles = {
    fontFamily: "Inter Serif, sans-serif",
    color: "white",
  };
  const linkStyle = {
    color: "white",
    textDecoration: "none",
  };
  const linkStyle1 = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleClose}
      ></Snackbar>
      <Card
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "900px",
        }}
      >
        <Stack alignItems={"center"} marginBottom={"100px"} marginTop={"30px"}>
          <Box
            sx={{
              backgroundColor: "#000",
              width: "600px",
              height: "650px",
              borderRadius: 2,
            }}
            justifyContent={"center"}
          >
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  component="h1"
                  fontSize={"34px"}
                  sx={{ fontWeight: "700", m: 1, mt: 5 }}
                  style={textStyles}
                >
                  Log In
                </Typography>
                <Box noValidate sx={{ mt: 1, fontSize: "13px", color: "grey" }}>
                  <Box marginBottom={"20px"}>
                    <label
                      for="password"
                      style={{ fontSize: "15px", color: "white" }}
                    >
                      Email address*
                    </label>

                    <TextField
                      required
                      fullWidth
                      className="netflex"
                      id="email"
                      name="email"
                      placeholder="enter Your Email"
                      error={error}
                      autoComplete="email"
                      value={email}
                      onChange={(e) => handleChangeEmail(e)}
                    />
                    {<div className="error">{errorEmail}</div>}
                    <label
                      for="password"
                      style={{
                        marginTop: "30px",
                        fontSize: "15px",
                        color: "white",
                      }}
                    >
                      Password*
                    </label>
                    <TextField
                      required
                      fullWidth
                      className="netflex"
                      placeholder="Enter you Password"
                      error={error}
                      name="password"
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => handleChangePassword(e)}
                      autoComplete="current-password"
                    />
                    {<div className="error">{errorPass}</div>}
                  </Box>
                  <Grid
                    container
                    sx={{ display: "flex", flexGrow: "1" }}
                    justifyContent={"space-between"}
                  >
                    <Box>
                      <Link
                        href="#"
                        variant="body1"
                        underline="none"
                        style={linkStyle}
                        to="/forgotpassword"
                      >
                        <Typography paddingTop={"10px"}>
                          Forgot password?
                        </Typography>
                      </Link>
                    </Box>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      bgcolor: "#AE1B9A",
                      borderRadius: "32px",
                      height: "60px",
                      width: "500px",
                      fontFamily: "Inter Serif",
                      fontWeight: "400",
                    }}
                    onClick={handleLogin}
                  >
                    Log In
                  </Button>
                  <Box
                    justifyContent={"center"}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      flexGrow: "1",
                      mt: "6",
                    }}
                  >
                    <Box>
                      <Typography sx={{ color: "grey" }} align="justify">
                        Don't have an account ?
                        <Link
                          to="/Signup"
                          variant="body1"
                          underline="none"
                          style={linkStyle1}
                          marginLeft={"5px"}
                        >
                          Sign Up Free
                        </Link>
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Container>
          </Box>
        </Stack>
      </Card>
    </div>
  );
};
export default Login;
