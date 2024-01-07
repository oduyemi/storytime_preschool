"use client";
import { useState } from "react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "@mui/material";
import Link from "next/link";
import "swiper/swiper-bundle.css";

SwiperCore.use([Pagination, Autoplay]);

interface BannerProps {}

export const Banner: React.FC<BannerProps> = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const settings = {
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
    onSlideChange: (swiper: SwiperCore) => setCurrentSlide(swiper.realIndex),
  };

  return (
    <Box className="slider_section position-relative">
      <Swiper {...settings}>
            <SwiperSlide>
            <Box className="carousel-item">
                <Box className="box">
                <Box className="baby_detail">
                    <Box className="baby_text">
                    <h2>
                        Infant <br />
                        Care center
                    </h2>
                    </Box>
                    <Link href="" className="text-black hover:text-white">Read More</Link>
                </Box>
                <Box className="care_detail">
                    <Link href="" className="text-black hover:text-white">Contact Us</Link>
                    <Box className="care_text">
                    <h2>
                        We will take <br />
                        Care of <br />
                        your Baby
                    </h2>
                    </Box>
                </Box>
                </Box>
            </Box>
            </SwiperSlide>
            <SwiperSlide>
            <Box className="carousel-item">
                <Box className="box">
                <Box className="baby_detail">
                    <Box className="baby_text">
                    <h2>
                        Toddler <br />
                        Care center
                    </h2>
                    </Box>
                    <Link href="" className="text-black hover:text-white">Read More</Link>
                </Box>
                <Box className="care_detail">
                    <Link href="" className="text-black hover:text-white">Contact Us</Link>
                    <Box className="care_text">
                    <h2>
                        We will take <br />
                        Care of <br />
                        your Baby
                    </h2>
                    </Box>
                </Box>
                </Box>
            </Box>
            </SwiperSlide>

            <SwiperSlide>
            <Box className="carousel-item">
                <Box className="box">
                <Box className="baby_detail">
                    <Box className="baby_text">
                    <h2>
                        Pre-Scchool <br />
                        Care center
                    </h2>
                    </Box>
                    <Link href="" className="text-black hover:text-white">Read More</Link>
                </Box>
                <Box className="care_detail">
                    <Link href="" className="text-black hover:text-white">Contact Us</Link>
                    <Box className="care_text">
                    <h2>
                        We will take <br />
                        Care of <br />
                        your Baby
                    </h2>
                    </Box>
                </Box>
                </Box>
            </Box>
            </SwiperSlide>

            <SwiperSlide>
            <Box className="carousel-item">
                <Box className="box">
                <Box className="baby_detail">
                    <Box className="baby_text">
                    <h2>
                        Pre-Kindergarten <br />
                        Care center
                    </h2>
                    </Box>
                    <Link href="" className="text-black hover:text-white">Read More</Link>
                </Box>
                <Box className="care_detail">
                    <Link href="" className="text-black hover:text-white">Contact Us</Link>
                    <Box className="care_text">
                    <h2>
                        We will take <br />
                        Care of <br />
                        your Baby
                    </h2>
                    </Box>
                </Box>
                </Box>
            </Box>
            </SwiperSlide>
            <SwiperSlide>
            <Box className="carousel-item">
                <Box className="box">
                <Box className="baby_detail">
                    <Box className="baby_text">
                    <h2>
                        Before &amp; After<br />
                        School center
                    </h2>
                    </Box>
                    <Link href="" className="text-black hover:text-white">Read More</Link>
                </Box>
                <Box className="care_detail">
                    <Link href="" className="text-black hover:text-white">Contact Us</Link>
                    <Box className="care_text">
                    <h2>
                        We will take <br />
                        Care of <br />
                        your Baby
                    </h2>
                    </Box>
                </Box>
                </Box>
            </Box>
            </SwiperSlide>
            <SwiperSlide>
            <Box className="carousel-item">
                <Box className="box">
                <Box className="baby_detail">
                    <Box className="baby_text">
                    <h2>
                        Summer <br />
                        Camp
                    </h2>
                    </Box>
                    <Link href="" className="text-black hover:text-white">Read More</Link>
                </Box>
                <Box className="care_detail">
                    <Link href="" className="text-black hover:text-white">Contact Us</Link>
                    <Box className="care_text">
                    <h2>
                        We will take <br />
                        Care of <br />
                        your Baby
                    </h2>
                    </Box>
                </Box>
                </Box>
            </Box>
            </SwiperSlide>
        </Swiper>
    </Box>
  );
};
