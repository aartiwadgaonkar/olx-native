import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLogoutAdminMutation } from "../redux/apis/authApi";
import { toast } from "react-toastify";

const Navbar = () => {
  const { admin } = useSelector((state) => state.auth);
  const [logoutAdmin,{isSuccess}]= useLogoutAdminMutation()
  useEffect(() => {
    if (isSuccess) {
       toast.success("admin logout success") 
    }
  }, [isSuccess])
  
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to={"/admin/adds"} class="nav-link active">
              adds
            </Link>
            <Link to={"/admin/users"} class="nav-link">
              Users
            </Link>
          </div>
          <div class="dropdown">
            <button
              class="btn btn-light dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
            >
                <i className="bi bi-person me-1"></i>
              Welcome{" "}
              <span className="text-uppercase">{admin && admin.name}</span>
            </button>
            <ul class="dropdown-menu">
              <li>
                <Link to={"/admin/profile"} class="dropdown-item">
                  {" "}
                  <i className="bi bi-person me-2"></i>Profile
                </Link>
              </li>
              <li>
                <Link to={"/admin/account-history"} class="dropdown-item">
                  {" "}
                  <i className="bi bi-clock-history me-2"></i>Account History{" "}
                </Link>
              </li>
              <li>
                <button class="dropdown-item" onClick={logoutAdmin}>
                  {" "}
                  <i className="bi bi-box-arrow-right me-2"></i> Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
