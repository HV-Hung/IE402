import { Carousel, Row, Col } from "antd";
import React from "react";
import { Layout } from "../Layout/Layout";
import dinhDocLapImg18 from "../asset/images/dinhdoclap18.webp";
import dinhDocLapImg19 from "../asset/images/dinhdoclap19.webp";
import dinhDocLapImg2 from "../asset/images/dinhdoclap2.png";
import dinhDocLapImg3 from "../asset/images/dinhdoclap3.png";
import dinhDocLapImg4 from "../asset/images/dinhdoclap4.png";
import dinhDocLapImg5 from "../asset/images/dinhdoclap5.png";
import dinhDocLapImg6 from "../asset/images/dinhdoclap6.png";
import dinhDocLapImg7 from "../asset/images/dinhdoclap7.png";
import dinhDocLapImg8 from "../asset/images/dinhdoclap8.png";
import dinhDocLapImg9 from "../asset/images/dinhdoclap9.png";
import dinhDocLapImg16 from "../asset/images/dinhdoclap16.jpg";
import dinhDocLapImg17 from "../asset/images/dinhdoclap17.jpg";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export const Home = () => {
  const slider = React.useRef();

  return (
    <Layout>
      <div className="p-0 m-0">
        <div className="relative mt-5 overflow-hidden">
          <Carousel
            ref={(ref) => {
              slider.current = ref;
            }}
            autoplay
            className="h-screen w-screen"
          >
            <div className="bg-black relative">
              <img
                className="w-full h-full object-cover object-center opacity-75"
                src={dinhDocLapImg16}
                alt="dinhDocLapImg2"
              />
              <div className="w-[830px] text-center absolute right-0 left-0 m-auto top-[250px]">
                <h1 className="text-[#158E89] text-[48px] font-bold">
                  DINH ĐỘC LẬP
                </h1>
                <p className="text-[28px] font-bold text-white troke">
                  Dinh Độc Lập hay Hội trường Thống Nhất (tên gọi trước đây là
                  dinh Norodom) là một công trình kiến trúc, tòa nhà ở Thành phố
                  Hồ Chí Minh. Đây từng là nơi ở và làm việc của Tổng thống Việt
                  Nam Cộng hòa. Hiện nay, dinh đã được Chính phủ Việt Nam xếp
                  hạng là di tích quốc gia đặc biệt.
                </p>
              </div>
            </div>
            <div>
              <img
                className="w-full h-full object-cover object-center"
                src={dinhDocLapImg19}
                alt="dinhDocLapImg2"
              />
            </div>
            <div>
              <img
                className="w-full h-full object-cover object-center"
                src={dinhDocLapImg17}
                alt="dinhDocLapImg2"
              />
            </div>
            <div>
              <img
                className="w-full h-full object-cover object-center"
                src={dinhDocLapImg18}
                alt="dinhDocLapImg2"
              />
            </div>
          </Carousel>
          <div className="absolute top-[50%] left-[20px] w-[40px] h-[40px] rounded-full bg-white shadow-sm flex justify-center items-center">
            <LeftOutlined
              className="text-[20px]"
              onClick={() => slider.current.prev()}
            />
          </div>
          <div className="absolute top-[50%] right-[20px] w-[40px] h-[40px] rounded-full bg-white shadow-sm flex justify-center items-center">
            <RightOutlined
              className="text-[20px]"
              onClick={() => slider.current.next()}
            />
          </div>
        </div>

        <div className="h-[302px] my-10 mx-[50px] flex flex-wrap justify-center">
          <img className="h-full" src={dinhDocLapImg2} alt="dinhDocLapImg2" />
          <div className=" p-10 w-[750px]">
            <h3 className="text-[18px] font-bold ">
              Tập thể nhân viên luôn đề cao tinh thần trách nhiệm để gìn giữ nét
              văn hóa.
            </h3>
            <p className="mt-5 text-[18px] text-justify">
              Trong nhiều năm qua, tập thể cán bộ, nhân viên Hội trường Thống
              Nhất luôn đoàn kết nhất trí cao, phát huy cao ý thức trách nhiệm
              đối với công việc, chủ động, sáng tạo hoàn thành tốt công tác quản
              lý, bảo tồn và phát huy giá trị Di tích lịch sử Dinh Độc Lập và
              hoàn thành xuất sắc các nhiệm vụ do lãnh đạo Văn phòng Chính phủ
              giao. Năm 2010, Hội trường Thống Nhất đã vinh dự nhận Cờ thi đua
              của Chính phủ và được Chủ tịch nước Cộng hòa Xã hội Chủ nghĩa Việt
              Nam tặng thưởng Huân chương Lao động hạng I.
            </p>
          </div>
        </div>
        <div className="text-center flex justify-center flex-wrap">
          <img
            className="w-screen	 h-[364px] mx-auto"
            src={dinhDocLapImg2}
            alt="dinhDocLapImg2"
          />
          <div className="w-[830px]">
            <h1 className="text-[#158E89] mt-10 text-[48px] font-bold">
              THAM QUAN
            </h1>
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
          <Row className="mt-10">
            <Col
              className="items-center justify-end flex flex-wrap border-dashed  border-r-[2px] border-r-[#626262] "
              span={12}
            >
              <img
                className="h-[300px] m-10"
                src={dinhDocLapImg3}
                alt="dinhDocLapImg2"
              />
              <img
                className="h-[300px] m-10"
                src={dinhDocLapImg4}
                alt="dinhDocLapImg2"
              />
            </Col>
            <Col className="items-center" span={12}>
              <img
                className="h-[300px] m-10 mt-0"
                src={dinhDocLapImg5}
                alt="dinhDocLapImg2"
              />
              <img
                className="h-[300px] m-10"
                src={dinhDocLapImg6}
                alt="dinhDocLapImg2"
              />
              <img
                className="h-[300px] m-10"
                src={dinhDocLapImg2}
                alt="dinhDocLapImg2"
              />
            </Col>
          </Row>
          <div className="w-[830px] m-10">
            <h1 className="text-[#158E89] mt-10 text-[48px] font-bold">
              MỘT SỐ HOẠT ĐỘNG
            </h1>
            <p className="text-[16px]">
              Dinh Độc Lập được công nhận là Di tích lịch sử văn hóa quốc gia
              bằng Quyết định số 77A/VHQĐ ngày 25/6/1976 của Bộ trưởng Bộ Văn
              hóa. Ngày 12 tháng 8 năm 2009, Thủ tướng Chính phủ nước Cộng hòa
              Xã hội Chủ nghĩa Việt Nam đã ký Quyết định số 1272/QĐ-TTg xếp hạng
              Di tích lịch sử Dinh Độc Lập là một trong 10 di tích quốc gia đặc
              biệt đầu tiên của cả nước.
            </p>
          </div>
          <div className="flex flex-wrap">
            <img
              className="h-[209px] m-10"
              src={dinhDocLapImg7}
              alt="dinhDocLapImg2"
            />
            <img
              className="h-[209px] m-10"
              src={dinhDocLapImg8}
              alt="dinhDocLapImg2"
            />
            <img
              className="h-[209px] m-10"
              src={dinhDocLapImg9}
              alt="dinhDocLapImg2"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
