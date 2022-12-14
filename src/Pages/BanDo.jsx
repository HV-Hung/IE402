import React from "react";
import { Layout } from "../Layout/Layout";
import dinhDocLapImg15 from "../asset/images/dinhdoclap15.png";
import { Link } from "react-router-dom";
import { Button } from "antd";

export const BanDo = () => {
  return (
    <Layout>
      <div className="p-0 mt-[72px]">
        <div className="relative mt-5">
          <img
            className="w-full h-full object-cover"
            src={dinhDocLapImg15}
            alt="dinhDocLapImg2"
          />
          <div
            style={{
              background: "rgba(171, 173, 133, 0.75)",
              borderRadius: "10px",
            }}
            className="w-[288px]  absolute z-50 right-5 top-10 p-[19px] flex flex-wrap justify-center"
          >
            <h3 className="text-[18px] font-bold ">XEM DINH ĐỘC LẬP</h3>
            <p className="mt-5 text-[18px] text-justify">
              135 Đ. Nam Kỳ Khởi Nghĩa, Phường Bến Thành, Quận 1, Thành phố Hồ
              Chí Minh
            </p>

            <div className="w-[25px0] h-[101px] p-2 bg-[#f2f3eb] rounded-lg mt-5">
              <h3 className="text-[16px] font-bold ">Xem thông tin dinh thự</h3>
              <p className="mt-1 text-[12px] text-justify">
                Có rất nhiều điều hay ho về dinh thự. hãy cùng khám phá nhé!
              </p>
              <Link href="/" className="text-[#118EBD] underline">
                Xem bản đồ 3D
              </Link>
            </div>
            <div className="w-[25px0] h-[101px] p-2 bg-[#f2f3eb] rounded-lg mt-5">
              <h3 className="text-[16px] font-bold ">Xem thông tin tầng</h3>
              <p className="mt-1 text-[12px] text-justify">
                Có rất nhiều tầng tại dinh thự. Hãy cùng khám phá nhé!
              </p>
              <Link href="/" className="text-[#118EBD] underline">
                Xem bản đồ 3D
              </Link>
            </div>
            <div className="w-[25px0] h-[101px] p-2 bg-[#f2f3eb] rounded-lg mt-5">
              <h3 className="text-[16px] font-bold ">
                Xem dinh thự trên bản đồ 3D
              </h3>
              <p className="mt-1 text-[12px] text-justify">
                Cùng trực quan hóa dinh thự nào. hãy cùng khám phá nhé!
              </p>
              <Link href="/" className="text-[#118EBD] underline">
                Xem bản đồ 3D
              </Link>
            </div>
            <div className="mt-3 flex flex-wrap justify-center">
              <Button className=" font-bold text-[14px] text-white bg-[#158E89] rounded-lg">
                <Link to={"/bando"}>Xem</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
