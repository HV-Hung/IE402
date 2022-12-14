import React from "react";
import { Layout, Row, Col } from "antd";

export const Footer = () => {
  return (
    <Layout.Footer
      className="px-[50px]"
      style={{
        color: "white",
        height: "567px",
        position: "relative",
      }}
    >
      <Row className="absolute w-full h-[200px] top-[50%] translate-y-[-50%]">
        <Col span={6} className="p-[10px]">
          <h3 className="text-white font-bold text-[36px] font-playfair">
            Nhóm 4
          </h3>
          <p className="text-white mt-2 text-[14px] ">Phan Tan Dat</p>
          <p className="text-white mt-2 text-[14px] ">Pham Ba Vuong</p>
          <p className="text-white mt-2 text-[14px] ">Nguyen Dang Do</p>
          <p className="text-white mt-2 text-[14px] ">Tran Kim Ngan</p>
          <p className="text-white mt-2 text-[14px] ">Le Ngo Quoc Tuan</p>
          <p className="text-white mt-2 text-[14px] ">Hoang Van Hung</p>
        </Col>
        <Col span={6} className="p-[10px] mt-11">
          <p className="text-white mt-2 font-bold text-[14px] ">Dinh Độc Lập</p>
          <p className="text-white mt-2 text-[14px] ">Trang chủ</p>
          <p className="text-white mt-2 text-[14px] ">Bản đồ 3D</p>
          <p className="text-white mt-2 text-[14px] ">Tham quan</p>
          <p className="text-white mt-2 text-[14px] ">Liên hệ</p>
        </Col>
        <Col span={6} className="p-[10px] mt-11">
          <p className="text-white mt-2  text-[14px] ">
            Địa chỉ: 135 Đ. Nam Kỳ Khởi Nghĩa, Phường Bến Thành, Quận 1, Thành
            phố Hồ Chí Minh
          </p>
          <p className="text-white mt-2 text-[14px] ">Tel: 028 3822 3652</p>
          <p className="text-white mt-2 text-[14px] ">Hotline: 190026736</p>
        </Col>
        <Col span={6} className="p-[10px] mt-11">
          <p className="text-white  text-[14px] ">Nhận tin tức</p>
          <input
            className="bg-[transparent] p-3 mt-4 placeholder-white border border-white"
            placeholder="Điền địa chỉ email"
          />
        </Col>
      </Row>
    </Layout.Footer>
  );
};
