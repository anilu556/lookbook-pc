import React, { useEffect, useState } from 'react'
import styled, { createGlobalStyle } from "styled-components";

import HorizontalScroll from "../HorizontalScroll";

import "./global.css";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: sans-serif;
  }
`;

const Main = styled.main``;

const HorizontalSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

const BumperSection = styled.section`
  text-align: center;
  padding: 128px 16px;
  background-color: #efefef;
`;

const CardsContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 0 0 0 0px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const SampleCard = styled.div`
  position: relative;
  height: 300px;
  width: 500px;
  background-color: #111f30;
  margin-right: 75px;
  flex-shrink: 0;
`;

const ProductComponentOtono = () => {

  useEffect(() => {
    if (window.innerWidth > 1000) {
      setTimeout(() => {
        document.querySelector(".vtex-sticky-layout-0-x-container--sticky-header").style.position = "sticky";
      }, 300)
    } else {
      setTimeout(() => {
        document.querySelector(".vtex-sticky-layout-0-x-container--custom-sticky-header--mobile").style.position = "sticky";
      }, 300)
    }
  })

  // document.querySelector(".vtex-sticky-layout-0-x-wrapper--sticky-header").style.display = "none";

  return (
    <>
    <GlobalStyle />
    <Main>
      <HorizontalSection>
        <HorizontalScroll>
          <CardsContainer>
          <div style={{ width: "600px", height: "817px" }}>
              <img
                style={{ width: "600px", height: "817px" }}
                src="/arquivos/LOOK BOOK SS22_5.jpg"
              />
              <a
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "40%",
                  left: "25%",
                  textDecoration: "none",
                  background: "white",
                  borderRadius: "2px",
                  color: "grey"
                }}
                href="https://www.aldoconti.com/hombre/ropa/trajes/?O=OrderByReleaseDateDESC"
              >
                Ver más
              </a>
            </div>

            <div style={{ width: "600px", height: "817px" }}>
              <img
                style={{ width: "600px", height: "817px" }}
                src="/arquivos/LOOK BOOK SS22_4.jpg
                "
              />
              <a
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "41%",
                  left: "20%",
                  textDecoration: "none",
                  background: "white",
                  borderRadius: "2px",
                  color: "grey"
                }}
                href="https://aldoconti.myvtex.com/hombre/ropa/pantalones/?O=OrderByReleaseDateDESC"
              >
                Ver más
              </a>
              <a
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "80%",
                  left: "20%",
                  textDecoration: "none",
                  background: "white",
                  borderRadius: "2px",
                  color: "grey"
                }}
                href="https://aldoconti.myvtex.com/hombre/zapatos/casual/"
              >
                Ver más
              </a>
            </div>

            <div style={{ width: "600px", height: "817px" }}>
              <img
                style={{ width: "600px", height: "817px" }}
                src="/arquivos/LOOK BOOK SS22_3.jpg"
              />
              <a
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "40%",
                  left: "14%",
                  textDecoration: "none",
                  background: "white",
                  borderRadius: "2px",
                  color: "grey"
                }}
                href="https://aldoconti.myvtex.com/hombre/ropa/playeras/?O=OrderByReleaseDateDESC"
              >
                Ver más
              </a>
              <a
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "54%",
                  left: "15%",
                  textDecoration: "none",
                  background: "white",
                  borderRadius: "2px",
                  color: "grey"
                }}
                href="https://aldoconti.myvtex.com/hombre/ropa/bermudas/?O=OrderByReleaseDateDESC"
              >
                Ver más
              </a>
            </div>

            <div style={{ width: "600px", height: "817px" }}>
              <img
                style={{ width: "600px", height: "817px" }}
                src="/arquivos/LOOK BOOK SS22_2.jpg"
              />
              <a
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "18%",
                  left: "8.4%",
                  textDecoration: "none",
                  background: "white",
                  borderRadius: "2px",
                  color: "grey"
                }}
                href="https://aldoconti.myvtex.com/hombre/accesorios/lentes/?O=OrderByReleaseDateDESC"
              >
                Ver más
              </a>
              <a
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "64%",
                  left: "7.0%",
                  textDecoration: "none",
                  background: "white",
                  borderRadius: "2px",
                  color: "grey"
                }}
                href="https://aldoconti.myvtex.com/hombre/ropa/traje-de-bano"
              >
                Ver más
              </a>
            </div>


            <div style={{ width: "600px", height: "817px" }}>
              <img
                style={{ width: "600px", height: "817px" }}
                src="/arquivos/LOOK BOOK SS22_1.jpg"
              />
              <p
                className="swipeUp"
                style={{
                  width: "200px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "2%",
                  left: "0.2%",
                  textDecoration: "none",
                  background: "white",
                  borderRadius: "2px",
                  color: "grey",
                  opacity: 0.5
                }}
              >
                Desliza hacia arriba
              </p>
              <a
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "40%",
                  left: "3.5%",
                  textDecoration: "none",
                  background: "white",
                  borderRadius: "2px",
                  color: "grey"
                }}
                href="https://aldoconti.myvtex.com/hombre/ropa/sacos/?O=OrderByReleaseDateDESC"
              >
                Ver más
              </a>
            </div>
            

            <div style={{ width: "600px", height: "817px" }}>
              <img
                style={{ width: "600px", height: "817px" }}
                src="/arquivos/LOOK BOOK SS22_16.jpg"
              />
              <a
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "38%",
                  left: "70.5%",
                  textDecoration: "none",
                  background: "white",
                  borderRadius: "2px",
                  color: "grey"
                }}
                href="https://aldoconti.myvtex.com/hombre/ropa/playeras/?O=OrderByReleaseDateDESC"
              >
                Ver más
              </a>
            </div>


            <div style={{ width: "600px", height: "817px" }}>
              <img
                style={{ width: "600px", height: "817px" }}
                src="/arquivos/LOOK BOOK SS22_15.jpg"
              />
              <a
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "84%",
                  left: "63.7%",
                  textDecoration: "none",
                  background: "white",
                  borderRadius: "2px",
                  color: "grey"
                }}
                href="https://aldoconti.myvtex.com/hombre/zapatos/casual/"
              >
                Ver más
              </a>
              <a
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "64%",
                  left: "69.2%",
                  textDecoration: "none",
                  background: "white",
                  borderRadius: "2px",
                  color: "grey"
                }}
                href="https://www.aldoconti.com/hombre/ropa/jeans/?O=OrderByReleaseDateDESC"
              >
                Ver más
              </a>
            </div>


            <div style={{ width: "600px", height: "817px" }}>
              <img
                style={{ width: "600px", height: "817px" }}
                src="/arquivos/LOOK BOOK SS22_14.jpg"
              />
              <a
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "26%",
                  left: "62%",
                  textDecoration: "none",
                  background: "white",
                  borderRadius: "2px",
                  color: "grey"
                }}
                href="https://aldoconti.myvtex.com/hombre/ropa/gabardinas/?O=OrderByReleaseDateDESC"
              >
                Ver más
              </a>
              <a
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "85%",
                  left: "58.7%",
                  textDecoration: "none",
                  background: "white",
                  borderRadius: "2px",
                  color: "grey"
                }}
                href="https://aldoconti.myvtex.com/hombre/zapatos/formal/"
              >
                Ver más
              </a>
            </div>


            <div style={{ width: "600px", height: "817px" }}>
              <img
                style={{ width: "600px", height: "817px" }}
                src="/arquivos/LOOK BOOK SS22_13.jpg"
              />
              <a
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "27%",
                  left: "52.7%",
                  textDecoration: "none",
                  background: "white",
                  borderRadius: "2px",
                  color: "grey"
                }}
                href="https://aldoconti.myvtex.com/hombre/ropa/sweaters/?O=OrderByReleaseDateDESC"
              >
                Ver más
              </a>
              <a
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "10%",
                  left: "56.9%",
                  textDecoration: "none",
                  background: "white",
                  borderRadius: "2px",
                  color: "grey"
                }}
                href="https://aldoconti.myvtex.com/hombre/accesorios/sombreros/?O=OrderByReleaseDateDESC"
              >
                Ver más
              </a>
            </div>


            <div style={{ width: "600px", height: "817px" }}>
              <img
                style={{ width: "600px", height: "817px" }}
                src="/arquivos/LOOK BOOK SS22_10.jpg"
              />
              <a
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "29%",
                  left: "47.6%",
                  textDecoration: "none",
                  background: "white",
                  borderRadius: "2px",
                  color: "grey"
                }}
                href="https://aldoconti.myvtex.com/hombre/ropa/guayaberas/?O=OrderByReleaseDateDESC"
              >
                Ver más
              </a>
              <a
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "60%",
                  left: "50.9%",
                  textDecoration: "none",
                  background: "white",
                  borderRadius: "2px",
                  color: "grey"
                }}
                href="https://aldoconti.myvtex.com/hombre/ropa/bermudas/?O=OrderByReleaseDateDESC"
              >
                Ver más
              </a>
            </div>
            <div style={{ width: "600px", height: "817px" }}>
              <img
                style={{ width: "600px", height: "817px" }}
                src="/arquivos/LOOK BOOK SS22_9.jpg"
              />
              <a
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "60%",
                  left: "46.3%",
                  textDecoration: "none",
                  background: "white",
                  borderRadius: "2px",
                  color: "grey"
                }}
                href="https://aldoconti.myvtex.com/hombre/ropa/pantalones/?O=OrderByReleaseDateDESC"
              >
                Ver más
              </a>
            </div>

            <div style={{ width: "600px", height: "817px" }}>
              <img
                style={{ width: "600px", height: "817px" }}
                src="/arquivos/LOOK BOOK SS22_8.jpg"
              />
              <a
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "24%",
                  left: "39.8%",
                  textDecoration: "none",
                  background: "white",
                  borderRadius: "2px",
                  color: "grey"
                }}
                 href="https://aldoconti.myvtex.com/hombre/ropa/sacos/?O=OrderByReleaseDateDESC"
              >
                Ver más
              </a>
            </div>
            <div style={{ width: "600px", height: "817px" }}>
              <img
                style={{ width: "600px", height: "817px" }}
                src="/arquivos/LOOK BOOK SS22_7.jpg"
              />
              <a
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "71%",
                  left: "34.7%",
                  textDecoration: "none",
                  background: "white",
                  borderRadius: "2px",
                  color: "grey"
                }}
                href="https://aldoconti.myvtex.com/hombre/ropa/bermudas/?O=OrderByReleaseDateDESC"
              >
                Ver más
              </a>              
              <a
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "26%",
                  left: "34.4%",
                  textDecoration: "none",
                  background: "white",
                  borderRadius: "2px",
                  color: "grey"
                }}
                 href="https://aldoconti.myvtex.com/hombre/ropa/camisas/?O=OrderByReleaseDateDESC"
              >
                Ver más
              </a>
            </div>
            <div style={{ width: "600px", height: "817px" }}>
              <img
                style={{ width: "600px", height: "817px" }}
                src="/arquivos/LOOK BOOK SS22_6.jpg"
              />
              <a
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "61%",
                  left: "29.5%",
                  textDecoration: "none",
                  background: "white",
                  borderRadius: "2px",
                  color: "grey"
                }}
                href="https://aldoconti.myvtex.com/hombre/ropa/traje-de-bano"
              >
                Ver más
              </a>             
              <a
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "29%",
                  left: "29.8%",
                  textDecoration: "none",
                  background: "white",
                  borderRadius: "2px",
                  color: "grey"
                }}
                href="https://aldoconti.myvtex.com/cadena?_q=cadena&map=ft"
              >
                Ver más
              </a>
            </div>
            <div style={{ width: "600px", height: "817px" }}>
              <img
                style={{ width: "600px", height: "817px" }}
                src="/arquivos/LOOK BOOK SS22_19.jpg"
              />
              <a
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "56%",
                  left: "75%",
                  textDecoration: "none",
                  background: "white",
                  borderRadius: "2px",
                  color: "grey"
                }}
                href="https://aldoconti.myvtex.com/hombre/ropa/pantalones/?O=OrderByReleaseDateDESC"
              >
                Ver más
              </a>
            </div>
            <div style={{ width: "600px", height: "817px" }}>
              <img
                style={{ width: "600px", height: "817px" }}
                src="/arquivos/LOOK BOOK SS22_18.jpg"
              />
              <a
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "24%",
                  left: "81.9%",
                  textDecoration: "none",
                  background: "white",
                  borderRadius: "2px",
                  color: "grey"
                }}
                href="https://aldoconti.myvtex.com/hombre/ropa/camisas/?O=OrderByReleaseDateDESC"
              >
                Ver más
              </a>
              <a
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "64%",
                  left: "81.7%",
                  textDecoration: "none",
                  background: "white",
                  borderRadius: "2px",
                  color: "grey"
                }}
                href="https://aldoconti.myvtex.com/hombre/ropa/sudaderas?map=category-1,category-2,category-3,category-3&query=/hombre/ropa/pants/sudaderas&searchState"
              >
                Ver más
              </a>
            </div>
            <div style={{ width: "600px", height: "817px" }}>
              <img
                style={{ width: "600px", height: "817px" }}
                src="/arquivos/LOOK BOOK SS22_22.jpg"
              />
              <a
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "26%",
                  left: "85.8%",
                  textDecoration: "none",
                  background: "white",
                  borderRadius: "2px",
                  color: "grey"
                }}
                href="https://aldoconti.myvtex.com/hombre/ropa/sacos/?O=OrderByReleaseDateDESC"
              >
                Ver más
              </a>
              <a
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "62%",
                  left: "86.9%",
                  textDecoration: "none",
                  background: "white",
                  borderRadius: "2px",
                  color: "grey"
                }}
                href="https://aldoconti.myvtex.com/hombre/ropa/pantalones/?O=OrderByReleaseDateDESC"
              >
                Ver más
              </a>
            </div>
            <div style={{ width: "600px", height: "817px" }}>
              <img
                style={{ width: "600px", height: "817px" }}
                src="/arquivos/LOOK BOOK SS22_21.jpg"
              />
              <a
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "24%",
                  left: "91.0%",
                  textDecoration: "none",
                  background: "white",
                  borderRadius: "2px",
                  color: "grey"
                }}
                href="https://aldoconti.myvtex.com/hombre/accesorios/corbatas-y-set/?O=OrderByReleaseDateDESC"
              >
                Ver más
              </a>
              <a
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "62%",
                  left: "95.6%",
                  textDecoration: "none",
                  background: "white",
                  borderRadius: "2px",
                  color: "grey"
                }}
                href="https://aldoconti.myvtex.com/hombre/ropa/trajes/?O=OrderByReleaseDateDESC"
              >
                Ver más
              </a>
            </div>
          </CardsContainer>
        </HorizontalScroll>
      </HorizontalSection>
    </Main>
  </>

  )

}

export default ProductComponentOtono