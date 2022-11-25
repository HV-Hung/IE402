import React from "react";
import { Layout, Menu, Avatar, Dropdown } from "antd";
import { useLocation, useNavigate, Link } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const keyMenu = location.pathname.split("/")[1];
  const navigate = useNavigate();
  const items = [
    {
      label: (
        <Link
          to={"/"}
          className="items-center space-x-1 text-black font-bold text-[20px]"
        >
          TRANG CHỦ
        </Link>
      ),
      key: "",
    },
    {
      label: (
        <Link
          to={"/bando"}
          className="items-center space-x-1 text-black font-bold text-[20px]"
        >
          BẢN ĐỒ 3D
        </Link>
      ),
      key: "bando",
    },
    {
      label: (
        <Link
          to={"/thamquan"}
          className="items-center space-x-1 text-black font-bold text-[20px]"
        >
          THAM QUAN
        </Link>
      ),
      key: "thamquan",
    },
    {
      label: (
        <Link
          to={"/lienhe"}
          className="items-center space-x-1 text-black font-bold text-[20px]"
        >
          LIÊN HỆ
        </Link>
      ),
      key: "lienhe",
    },
  ];
  const email = localStorage.getItem("email");
  const logout = {
    title: "Logout",
    cb: () => {
      window.localStorage.removeItem("email");

      navigate("/dangnhap");
    },
  };
  const ProfileMenu = () => {
    return (
      <Menu>
        <Menu.Item onClick={logout.cb}>{logout.title}</Menu.Item>
      </Menu>
    );
  };
  return (
    <Layout.Header
      style={{
        backgroundColor: "#D1D6C2",
        height: "77px",
        color: "black",
        zIndex: "10",
      }}
    >
      <div className="flex items-center w-full  justify-between mt-3">
        <Menu
          style={{
            backgroundColor: "#D1D6C2",
            color: "black",
            marginRight: "50px",
            border: "none",
            width: "75%",
          }}
          selectedKeys={[keyMenu]}
          mode="horizontal"
          items={items}
        />
        <div>
          {email ? (
            <Dropdown overlay={ProfileMenu}>
              <h3 className="items-center space-x-1 text-black text-[20px] cursor-pointer">
                <Avatar
                  size={48}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1920px-Flag_of_Vietnam.svg.png"
                />{" "}
                {email}
              </h3>
            </Dropdown>
          ) : (
            <Link
              to={"/dangky"}
              className="items-center space-x-1 text-black font-bold text-[20px] cursor-pointer"
            >
              ĐĂNG KÝ
            </Link>
          )}
        </div>
      </div>
    </Layout.Header>
  );
};
