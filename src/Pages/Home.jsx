import { Carousel, Row, Col, Space, Button } from "antd";
import React from "react";
import { Layout } from "../Layout/Layout";
import dinhDocLapImg18 from "../asset/images/dinhdoclap18.webp";
import dinhDocLapImg19 from "../asset/images/dinhdoclap19.webp";
import dinhDocLapImg2 from "../asset/images/dinhdoclap2.png";
import dinhDocLapImg99 from "../asset/images/dinhdoclap99.png";
import dinhDocLapImg3 from "../asset/images/dinhdoclap3.png";
import dinhDocLapImg4 from "../asset/images/dinhdoclap4.png";
import dinhDocLapImg5 from "../asset/images/dinhdoclap5.png";
import dinhDocLapImg6 from "../asset/images/dinhdoclap6.png";
import dinhDocLapImg7 from "../asset/images/dinhdoclap7.png";
import dinhDocLapImg8 from "../asset/images/dinhdoclap8.png";
import dinhDocLapImg9 from "../asset/images/dinhdoclap9.png";
import dinhDocLapImg17 from "../asset/images/dinhdoclap17.jpg";
import dinhDocLapImg90 from "../asset/images/dinhdoclap90.png";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export const Home = () => {
  const slider = React.useRef();
  const images = [
    dinhDocLapImg99,
    dinhDocLapImg19,
    dinhDocLapImg17,
    dinhDocLapImg18,
  ];
  return (
    <Layout>
      <div className="p-0 m-0">
        <div className="relative overflow-hidden">
          <Carousel
            ref={(ref) => {
              slider.current = ref;
            }}
            autoplay
            className=""
          >
            {images.map((image) => {
              return (
                <div className="bg-black relative w-screen">
                  <img
                    className="w-screen h-screen   object-cover object-center opacity-75"
                    src={image}
                    alt="dinhDocLapImg2"
                  />
                  <div className="w-[80%] text-center absolute right-0 left-0 m-auto top-[250px]">
                    <h1 className="text-white text-[32px] font-bold">
                      Chào mừng Quý khách đến tham quan Dinh Độc Lập
                    </h1>
                    <p className="text-[20px] font-bold text-white troke">
                      Dinh Độc Lập hay Hội trường Thống Nhất (tên gọi trước đây
                      là dinh Norodom) là một công trình kiến trúc, tòa nhà ở
                      Thành phố Hồ Chí Minh. Đây từng là nơi ở và làm việc của
                      Tổng thống Việt Nam Cộng hòa. Hiện nay, dinh đã được Chính
                      phủ Việt Nam xếp hạng là di tích quốc gia đặc biệt.
                    </p>
                  </div>
                </div>
              );
            })}
          </Carousel>
          <div className="absolute opacity-50 top-[50%] left-[20px] w-[40px] h-[40px] rounded-full bg-white shadow-sm flex justify-center items-center">
            <LeftOutlined
              className="text-[20px]"
              onClick={() => slider.current.prev()}
            />
          </div>
          <div className="absolute opacity-50 top-[50%] right-[20px] w-[40px] h-[40px] rounded-full bg-white shadow-sm flex justify-center items-center">
            <RightOutlined
              className="text-[20px] "
              onClick={() => slider.current.next()}
            />
          </div>
        </div>

        <div className="text-center flex justify-center flex-wrap w-full">
          <div className="w-[70%]">
            <h1 className="mt-10 text-[48px] font-bold">THAM QUAN</h1>
            <p className="text-[16px]">
              Dinh được kiến trúc sư Ngô Viết Thụ thiết kế xây dựng trên diện
              tích 4.500 m², diện tích sử dụng 20.000 m², gồm 3 tầng chính, 2
              gác lửng, tầng nền, 2 tầng hầm và 1 sân thượng cho máy bay trực
              thăng đáp xuống. Hơn 100 căn phòng của Dinh được trang trí theo
              phong cách khác nhau tùy theo mục đích sử dụng bao gồm các phòng
              khánh tiết, phòng họp hội đồng nội các, phòng làm việc của Tổng
              thống và của Phó Tổng thống, phòng trình ủy nhiệm thư, phòng đại
              yến,...
            </p>
          </div>
          <Row className="mt-10 flex flex-wrap">
            <Col
              className="items-center justify-end flex flex-wrap border-dashed  border-r-[2px] border-r-[#626262] "
              span={12}
            >
              <Space direction="vertical">
                <img
                  className=" w-[40vw]  m-10 ml-0"
                  src={dinhDocLapImg3}
                  alt="dinhDocLapImg2"
                />
                <img
                  className="w-[40vw]  m-10 ml-0"
                  src={dinhDocLapImg4}
                  alt="dinhDocLapImg2"
                />
              </Space>
            </Col>
            <Col className="items-center" span={12}>
              <img
                className="w-[40vw]  m-10 mt-0"
                src={dinhDocLapImg5}
                alt="dinhDocLapImg2"
              />
              <img
                className="w-[40vw]  m-10  my-20"
                src={dinhDocLapImg6}
                alt="dinhDocLapImg2"
              />
              <img
                className="w-[40vw]  m-10  mt-20"
                src={dinhDocLapImg2}
                alt="dinhDocLapImg2"
              />
            </Col>
          </Row>

          <div className="w-screen m-10">
            <Button
              type="primary"
              className="bg-[#1063B8] text-[16px] px-3 rounded h-8"
            >
              Xem thêm
            </Button>

            <div className=" relative w-screen mt-10">
              <img
                className="w-screen h-screen   object-cover object-center"
                src={dinhDocLapImg90}
                alt="dinhDocLapImg2"
              />
              <div className="bg-text w-[80%] text-center absolute right-0 left-0 m-auto bottom-[30%] border border-white pb-[150px] px-[10%]">
                <h1 className="text-white mt-10 text-[64px] font-bold ">
                  MỘT SỐ HOẠT ĐỘNG
                </h1>
                <p className="text-[16px] text-white">
                  Dinh Độc Lập được công nhận là Di tích lịch sử văn hóa quốc
                  gia bằng Quyết định số 77A/VHQĐ ngày 25/6/1976 của Bộ trưởng
                  Bộ Văn hóa. Ngày 12 tháng 8 năm 2009, Thủ tướng Chính phủ nước
                  Cộng hòa Xã hội Chủ nghĩa Việt Nam đã ký Quyết định số
                  1272/QĐ-TTg xếp hạng Di tích lịch sử Dinh Độc Lập là một trong
                  10 di tích quốc gia đặc biệt đầu tiên của cả nước.
                </p>

                <div className="absolute w-[90%] bottom-0 translate-y-[50%] left-[50%] translate-x-[-50%]">
                  <div className="flex flex-wrap justify-between">
                    <img
                      className="w-[30%]"
                      src={dinhDocLapImg7}
                      alt="dinhDocLapImg2"
                    />
                    <img
                      className="w-[30%]"
                      src={dinhDocLapImg8}
                      alt="dinhDocLapImg2"
                    />
                    <img
                      className="w-[30%]"
                      src={dinhDocLapImg9}
                      alt="dinhDocLapImg2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
