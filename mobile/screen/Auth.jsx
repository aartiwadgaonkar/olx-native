// import {
//   Dimensions,
//   Pressable,
//   StyleSheet,
//   TextInput,
//   View,
// } from "react-native";
// import React, { useState } from "react";
// import { Button, Card, MD3Colors, Text } from "react-native-paper";

// const Auth = () => {
//   const [showLogin, setShowLogin] = useState(true);

//   return (
//     <View
//       style={{
//         justifyContent: "center",
//         alignItems: "center",
//         height: Dimensions.get("screen").height,
//         backgroundColor: MD3Colors.primary95,
//       }}
//     >
//       {showLogin ? <Login /> : <Register />}

//       {showLogin ? (
//         <Pressable onPress={(e) => setShowLogin(false)}>
//           <Text>Dont Have a account? Create Here</Text>
//         </Pressable>
//       ) : (
//         <Pressable onPress={(e) => setShowLogin(true)}>
//           <Text>Already have a acoount ? Login Here</Text>
//         </Pressable>
//       )}
//     </View>
//   );
// };

// const Login = () => {
//   const [userData, setUserData] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [showForgetPassword, setShowForgetPassword] = useState(false);
//   return (
//     <View>
//       {/* <Text>Login</Text> */}
//       <Card style={{ width: 300 }}>
//         <Card.Title title="Login"></Card.Title>
//         <Card.Content>
//           {showForgetPassword ? (
//             <ForgetPassword />
//           ) : (
//             <>
//               <TextInput mode="outlined" label={"Enter Email"}></TextInput>
//               <TextInput
//                 mode="outlined"
//                 label={"Enter Password"}
//                 secureTextEntry
//                 right={
//                   <TextInput.Icon
//                     icon={showPassword ? "eye" : "eye-of"}
//                     onPress={() => setShowPassword(!showPassword)}
//                   ></TextInput.Icon>
//                 }
//               ></TextInput>
//               <Button mode="contained">Login</Button>
//             </>
//           )}

//           <Pressable onPress={() => {}}>
//             <Text style={{ textAlign: "center", marginTop: 10 }}>
//               Forget Password
//             </Text>
//           </Pressable>
//         </Card.Content>
//       </Card>
//     </View>
//   );
// };
// const Register = () => {
//   return (
//     <View>
//       <Text>Register</Text>
//     </View>
//   );
// };
// const ForgetPassword = () => {
//   return (
//     <View>
//       <TextInput mode="outlined" label="Enter Email"></TextInput>
//       <Button mode="contained" style={{ marginVertical: 15 }}>
//         Proceed
//       </Button>
//       <Text>ForgetPassword</Text>
//     </View>
//   );
// };

// export default Auth;

// const styles = StyleSheet.create({});

import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Button, Card, MD3Colors, Text, TextInput } from "react-native-paper";
import { useFormik } from "formik";
import * as yup from "yup";

const Auth = ({ navigation }) => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: Dimensions.get("screen").height,
        backgroundColor: MD3Colors.primary95,
      }}
    >
      {showLogin ? <Login navigation={navigation} /> : <Register />}
      {showLogin ? (
        <Pressable onPress={(e) => setShowLogin(false)}>
          <Text>Allready Have Account? Create Here</Text>
        </Pressable>
      ) : (
        <Pressable onPress={(e) => setShowLogin(true)}>
          <Text>Already Have Account? Login Here</Text>
        </Pressable>
      )}
    </View>
  );
};
const Login = ({ navigation }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().required("Enter Email"),
      password: yup.string().required("Enter Password"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.warn(formik.values);
      resetForm();
      navigation.navigate("home");
    },
  });
  const [userData, setuserData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showforgatePassword, setShowforgatePassword] = useState(false);
  return (
    <View>
      <Card style={{ width: 300 }}>
        <Card.Title title="login" />
        <Card.Content>
          {showforgatePassword ? (
            <ForgatePassword />
          ) : (
            <>
              <TextInput
                value={formik.values.email}
                onChangeText={formik.handleChange("email")}
                onBlur={formik.handleBlur("email")}
                error={formik.touched.email && formik.errors.email}
                mode="outlined"
                label="Enter Email"
              />
              {formik.touched.email && formik.errors.email && (
                <Text style={{ marginTop: 10, color: MD3Colors.error50 }}>
                  {formik.errors.email}
                </Text>
              )}
              <TextInput
                value={formik.values.password}
                onChangeText={formik.handleChange("password")}
                onBlur={formik.handleBlur("password")}
                error={formik.touched.password && formik.errors.password}
                style={{ marginVertical: 15 }}
                mode="outlined"
                secureTextEntry={showPassword}
                label="Enter Password"
                right={
                  <TextInput.Icon
                    onPress={() => setShowPassword(!showPassword)}
                    icon={showPassword ? "eye-off" : "eye"}
                  />
                }
              />
              {formik.touched.password && formik.errors.password && (
                <Text style={{ marginTop: 10, color: MD3Colors.error50 }}>
                  {formik.errors.password}
                </Text>
              )}

              <Button
                disabled={formik.errors.email || formik.errors.password}
                onPress={formik.handleSubmit}
                mode="contained"
              >
                Login
              </Button>
            </>
          )}

          <Pressable
            onPress={(e) => {
              setShowPassword(!showforgatePassword);
            }}
          >
            <Text style={{ textAlign: "center", marginTop: 10 }}>
              {showforgatePassword ? "cancel" : "Forgate Password"}
            </Text>
          </Pressable>
        </Card.Content>
      </Card>
    </View>
  );
};
const ForgatePassword = () => {
  return (
    <View>
      <TextInput mode="outlined" label="Enter Email" />
      <Button mode="contained" style={{ marginVertical: 15 }}>
        Proceed
      </Button>
    </View>
  );
};
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Card style={{ width: 300 }}>
      <Card.Content>
        <TextInput mode="outlined" label="Enter Name" />
        <TextInput mode="outlined" label="Enter Email" />
        <TextInput
          style={{ marginVertical: 5 }}
          mode="outlined"
          secureTextEntry={showPassword}
          label="Enter Password"
          right={
            <TextInput.Icon
              onPress={() => setShowPassword(!showPassword)}
              icon={showPassword ? "eye-off" : "eye"}
            />
          }
        />
        <TextInput
          style={{ marginVertical: 5 }}
          mode="outlined"
          secureTextEntry={showPassword}
          label="Enter Password"
          right={
            <TextInput.Icon
              onPress={() => setShowPassword(!showPassword)}
              icon={showPassword ? "eye-off" : "eye"}
            />
          }
        />

        <Button mode="contained">Register</Button>
      </Card.Content>
    </Card>
  );
};

export default Auth;

const styles = StyleSheet.create({});
