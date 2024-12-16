import { SwiperContainer, ImageWrapper, Overlay, Button } from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

export function SectionSlide({ data }) {
  return (
    <section>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <SwiperContainer>
            <ImageWrapper>
              <Image
                src={data.imagem_slide1.url}
                alt={data.imagem_slide1.alt}
                layout="fill"
                objectFit="cover"
              />
            </ImageWrapper>
            <Overlay>
              <h1>{data.titulo_slide}</h1>
              <h2>{data.subtitulo_slide}</h2>
              <Link href="/revendedor">
                <Button>{data.nome_botao}</Button>
              </Link>
            </Overlay>
          </SwiperContainer>
        </SwiperSlide>

        <SwiperSlide>
          <SwiperContainer>
            <ImageWrapper>
              <Image
                src={data.imagem_slide2.url}
                alt={data.imagem_slide2.alt}
                layout="fill"
                objectFit="cover"
              />
            </ImageWrapper>
            <Overlay>
              <h1>{data.titulo_slide}</h1>
              <h2>{data.subtitulo_slide}</h2>
              <Link href="/revendedor">
                <Button>{data.nome_botao}</Button>
              </Link>
            </Overlay>
          </SwiperContainer>
        </SwiperSlide>

        <SwiperSlide>
          <SwiperContainer>
            <ImageWrapper>
              <Image
                src={data.imagem_slide3.url}
                alt={data.imagem_slide3.alt}
                layout="fill"
                objectFit="cover"
              />
            </ImageWrapper>
            <Overlay>
              <h1>{data.titulo_slide}</h1>
              <h2>{data.subtitulo_slide}</h2>
              <Link href="/revendedor">
                <Button>{data.nome_botao}</Button>
              </Link>
            </Overlay>
          </SwiperContainer>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
