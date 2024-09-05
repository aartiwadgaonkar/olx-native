// import clsx from "clsx";
// import { useFormik } from "formik";
// import React from "react";
// import { useLoginAdminMutation } from "../redux/apis/authApi";
// import * as yup from "yup";
// const AdminLogin = () => {
//   const [handleAdminLogin, { isSuccess, isError, isLoading }] =
//     useLoginAdminMutation();
//   const formik = useFormik({
//     initialValues: {
//       password: "",
//       email: "",
//     },
//     validationSchema: yup.object({
//       email: yup.string().required("Enter email"),
//       password: yup.string().required("Enter Password"),
//     }),
//     onSubmit: (values, { resetform }) => {
//       handleAdminLogin(values);
//       resetform();
//     },
//   });

//   const emailClasses = clsx({
//     "form-control my-2": true,
//     "is-valid": formik.touched.email && !formik.errors.email,
//     "is-invalid": formik.touched.email && formik.errors.email,
//   });
//   const passwordClasses = clsx({
//     "form-control my-2": true,
//     "is-valid": formik.touched.password && !formik.errors.password,
//     "is-invalid": formik.touched.password && !formik.errors.password,
//   });
//   return (
//     <div>
//       <div className="container">
//         <div className="row">
//           <div className="col-sm-6 offset-sm-3">
//             <div className="card">
//               <div className="card-header">Login</div>
//               <form onSubmit={formik.handleSubmit}></form>
//               <div className="card-body">
//                 <div>
//                   <label for="email" className="form-label">
//                     First Email
//                   </label>
//                   <input
//                     type="text"
//                     className={emailClasses}
//                     {...formik.getFieldProps("email")}
//                     id="email"
//                     placeholder="Enter Your Email"
//                   />
//                   <div className="valid-feedback">Looks good!</div>
//                   <div className="invalid-feedback">
//                     Please choose a username.
//                   </div>
//                 </div>
//                 <div className="mt-2">
//                   <label for="password" className="form-label">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     className={passwordClasses}
//                     {...formik.getFieldProps("password")}
//                     id="password"
//                     placeholder="Enter Your Password"
//                   />
//                 </div>
//                 <button type="submit" className="btn btn-primary w-100 mt-3">
//                   Login
//                 </button>
//                 <p className="text-center mt-3">
//                   Dont Have Account? <a href="#">Create Account</a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;

import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { clsx } from "clsx";
import {
  useLoginAdminMutation,
  useVerifyAdminOtpMutation,
} from "../redux/apis/authApi";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [
    verifyOtp,
    {isLoading:verifyLoading, isSuccess: verifySuccess, isError: verifyError, error: verifyErrors },
  ] = useVerifyAdminOtpMutation();
  const [handleAdmin, { isSuccess, isError, isLoading }] =
    useLoginAdminMutation();
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
      handleAdmin(values);
      //   resetForm();
    },
  });
  const [otp, setotp] = useState();

  const emailClasses = clsx({
    "form-control my-2": true,
    "is-valid": formik.touched.email && !formik.errors.email,
    "is-invalid": formik.touched.email && formik.errors.email,
  });
  const passwordClasses = clsx({
    "form-control my-2": true,
    "is-valid": formik.touched.password && !formik.errors.password,
    "is-invalid": formik.touched.password && formik.errors.password,
  });
  useEffect(() => {
    if (verifySuccess) {
      navigate("/admin");
    }
  }, [verifySuccess]);

  if (isLoading) {
    return (
      <div>
        <p>
          Please wait...<div className="spinner-border text-primary"></div>
          <div class="spinner-grow text-primary"></div>{" "}
        </p>
      </div>
    );
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-sm-3">
            {isSuccess ? (
              <>
                <div class="card">
                  <div class="card-header">verify Otp</div>
                  <div class="card-body">
                    <div>
                      <label for="name" class="form-label">
                        Enter Otp
                      </label>
                      <input
                        type="text"
                        onChange={(e) => setotp(e.target.value)}
                        class="form-control"
                        id="name"
                        placeholder="Enter Your OTP"
                      />
                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">Please Enter OTP.</div>
                      <button
                        type="submit"
                        disabled={!otp}
                        onClick={(e) =>
                          verifyOtp({ otp, email: formik.values.email })
                        }
                        class="btn btn-primary my-2 w-100"
                      >
                        Verify OTP
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="card">
                <div className="card-header">Login</div>
                <div className="card-body">
                  <form onSubmit={formik.handleSubmit}>
                    <div>
                      <label for="email" className="form-label">
                        First Email
                      </label>
                      <input
                        className={emailClasses}
                        {...formik.getFieldProps("email")}
                        type="text"
                        id="email"
                        placeholder="Enter Your Email"
                      />
                      <div className="valid-feedback">Looks good!</div>
                      <div className="invalid-feedback">
                        Please choose a username.
                      </div>
                    </div>
                    <div className="mt-2">
                      <label for="password" className="form-label">
                        Password
                      </label>
                      <input
                        className={passwordClasses}
                        {...formik.getFieldProps("password")}
                        type="password"
                        id="password"
                        placeholder="Enter Your Password"
                      />
                      <div className="valid-feedback">Looks good!</div>
                      <div className="invalid-feedback">
                        Please choose a username.
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary w-100 mt-3"
                    >
                      Login
                    </button>
                    <p className="text-center mt-3">
                      Dont Have Account? <a href="#">Create Account</a>
                    </p>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
