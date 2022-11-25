import React from "react";
import { Layout, Row, Col } from "antd";

export const Footer = () => {
  return (
    <Layout.Footer
      className="px-[50px]"
      style={{ backgroundColor: "#D1D6C2", color: "white" }}
    >
      <Row className="">
        <Col span={8} className="p-[10px]">
          <h3 className="text-[#158E89] font-bold text-[22px]">Dinh độc lập</h3>
          <p className="text-black font-bold text-[20px] ">
            Hội trường Thống Nhất là đơn vị sự nghiệp công lập thuộc Văn phòng
            Chính phủ.
          </p>
        </Col>
        <Col span={8} className="p-[10px]">
          <h3 className="text-[#158E89] font-bold text-[22px]">Địa chỉ </h3>
          <p className="text-black text-[20px]">
            TRUNG TÂM HỘI NGHỊ 108 NGUYỄN DU 108 Nguyễn Du, quận 1, TP. HCM
          </p>
        </Col>
        <Col span={8} className="p-[10px]">
          <h3 className="text-[#158E89] font-bold text-[22px]">Liên hệ</h3>
          <p className="text-black  text-[20px]">
            Tel: 080. 82915 – 080. 85315 – 080.85316 Fax: 080. 85066
          </p>
        </Col>
      </Row>
    </Layout.Footer>
  );
};