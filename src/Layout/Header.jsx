import React from "react";
import { Layout, Menu } from "antd";
import { useLocation, Link } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const keyMenu = location.pathname.split("/")[1];

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
    {
      label: (
        <Link
          to={"/dangky"}
          className="items-center space-x-1 text-black font-bold text-[20px]"
        >
          ĐĂNG KÝ
        </Link>
      ),
      key: "dangky",
    },
  ];

  return (
    <Layout.Header style={{ backgroundColor: "#F2F3EB", color: "black" }}>
      <div className="items-center w-full mt-3">
        <Menu
          style={{
            backgroundColor: "#F2F3EB",
            color: "black",
            marginRight: "50px",
            border: "none",
            width: "100%",
            justifyContent: "end",
          }}
          selectedKeys={[keyMenu]}
          mode="horizontal"
          items={items}
        />
      </div>
    </Layout.Header>
  );
};
