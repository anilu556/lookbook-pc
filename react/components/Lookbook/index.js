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

const ProductComponent = () => {

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
            <div style={{ width: "1229px", height: "817px" }}>
              <img
                style={{ width: "1229px", height: "817px" }}
                src="/arquivos/lookbook-img1.jpg"
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
                  top: "5%",
                  left: "0.5%",
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
                  left: "10%",
                  textDecoration: "none",
                  background: "white",
                  borderRadius: "2px",
                  color: "grey"
                }}
                href="https://www.aldoconti.com/hombre/ropa/sweaters/?O=OrderByReleaseDateDESC"
              >
                Ver más
              </a>
            </div>
            <div style={{ width: "1300px", height: "817px" }}>
              <img
                style={{ width: "1300px", height: "817px" }}
                src="/arquivos/lookbook-img2.jpg"
              />
              <a
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "28%",
                  left: "16.4%",
                  textDecoration: "none",
                  background: "white",
                  borderRadius: "2px",
                  color: "grey"
                }}
                href="https://www.aldoconti.com/hombre/ropa/camisas/camisas-bambu"
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
                  top: "24%",
                  left: "23%",
                  textDecoration: "none",
                  background: "white",
                  borderRadius: "2px",
                  color: "grey"
                }}
                href="https://www.aldoconti.com/hombre/ropa/camisas/?O=OrderByReleaseDateDESC"
              >
                Ver más
              </a>
            </div>
            <div style={{ width: "1038px", height: "817px" }}>
              <img
                style={{ width: "1038px", height: "817px" }}
                src="/arquivos/lookbook-img3.jpg"
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
                  left: "30%",
                  textDecoration: "none",
                  background: "white",
                  borderRadius: "2px",
                  color: "grey"
                }}
                href="https://www.aldoconti.com/hombre/ropa/guayaberas/?O=OrderByReleaseDateDESC"
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
                  top: "46%",
                  left: "34.2%",
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
            <div style={{ width: "1183px", height: "817px" }}>
              <img
                style={{ width: "1183px", height: "817px" }}
                src="/arquivos/lookbook-img4.jpg"
              />
              <a
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "20%",
                  left: "40.6%",
                  textDecoration: "none",
                  background: "white",
                  borderRadius: "2px",
                  color: "grey"
                }}
                href="https://www.aldoconti.com/hombre/ropa/bermudas/?O=OrderByReleaseDateDESC"
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
                  top: "25%",
                  left: "46.2%",
                  textDecoration: "none",
                  background: "white",
                  borderRadius: "2px",
                  color: "grey"
                }}
                href="https://www.aldoconti.com/hombre/ropa/playeras/?O=OrderByReleaseDateDESC"
              >
                Ver más
              </a>
            </div>
            <div style={{ width: "604px", height: "817px" }}>
              <img
                style={{ width: "604px", height: "817px" }}
                src="/arquivos/lookbook-img5.jpg"
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
                  left: "50.3%",
                  textDecoration: "none",
                  background: "white",
                  borderRadius: "2px",
                  color: "grey"
                }}
                href="https://www.aldoconti.com/hombre/ropa/sacos/?O=OrderByReleaseDateDESC"
              >
                Ver más
              </a>
            </div>
            <div style={{ width: "1004px", height: "817px" }}>
              <img
                style={{ width: "100%", height: "817px" }}
                src="/arquivos/lookbook-img6.jpg"
              />
                            <a
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "25%",
                  left: "59%",
                  textDecoration: "none",
                  background: "grey",
                  borderRadius: "2px",
                  color: "#fff"
                }}
                href="https://www.aldoconti.com/hombre/ropa/pantalones/?O=OrderByReleaseDateDESC"
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
                  top: "23%",
                  left: "61.8%",
                  textDecoration: "none",
                  background: "grey",
                  borderRadius: "2px",
                  color: "#fff"
                }}
                href="https://www.aldoconti.com/hombre/ropa/chalecos/?O=OrderByReleaseDateDESC"
              >
                Ver más
              </a>
            </div>
            <div style={{ width: "1011px", height: "817px" }}>
              <img
                style={{ width: "1011px", height: "817px" }}
                src="/arquivos/lookbook-img7.jpg"
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
                  left: "69.7%",
                  textDecoration: "none",
                  background: "grey",
                  borderRadius: "2px",
                  color: "#fff"
                }}
                href="https://www.aldoconti.com/hombre/ropa/traje-de-bano"
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
                  left: "73.5%",
                  textDecoration: "none",
                  background: "grey",
                  borderRadius: "2px",
                  color: "#fff"
                }}
                href="https://www.aldoconti.com/hombre/ropa/trajes/?O=OrderByReleaseDateDESC"
              >
                Ver más
              </a>
            </div>
            <div style={{ width: "589px", height: "817px" }}>
              <img
                style={{ width: "589px", height: "817px" }}
                src="/arquivos/lookbook-img8.jpg"
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
                  left: "81.3%",
                  textDecoration: "none",
                  background: "grey",
                  borderRadius: "2px",
                  color: "#fff"
                }}
                href="https://www.aldoconti.com/hombre/ropa/camisas/?O=OrderByReleaseDateDESC"
              >
                Ver más
              </a>
            </div>
            <div style={{ width: "1690px", height: "817px" }}>
              <img
                style={{ width: "1690px", height: "817px" }}
                src="/arquivos/lookbook-img9.jpg"
              />
              <a
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "48%",
                  left: "86.1%",
                  textDecoration: "none",
                  background: "grey",
                  borderRadius: "2px",
                  color: "#fff"
                }}
                href="https://www.aldoconti.com/hombre/accesorios/?O=OrderByReleaseDateDESC"
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
                  top: "42%",
                  left: "91.6%",
                  textDecoration: "none",
                  background: "grey",
                  borderRadius: "2px",
                  color: "#fff"
                }}
                href="https://www.aldoconti.com/hombre/zapatos/?O=OrderByReleaseDateDESC"
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
                  top: "32%",
                  left: "94.6%",
                  textDecoration: "none",
                  background: "grey",
                  borderRadius: "2px",
                  color: "#fff"
                }}
                href="https://www.aldoconti.com/hombre/ropa/chamarras/?O=OrderByReleaseDateDESC"
              >
                Ver más
              </a>
              <p
                className="blink-2"
                style={{
                  width: "200px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "80%",
                  left: "97.7%",
                  textDecoration: "none",
                  background: "white",
                  borderRadius: "2px",
                  color: "grey",
                  opacity: 0.5
                }}
              >
                Desliza hacia abajo
              </p>
            </div>
          </CardsContainer>
        </HorizontalScroll>
      </HorizontalSection>
    </Main>
  </>

  )

}

export default ProductComponent