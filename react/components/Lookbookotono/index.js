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
                className="img1"
                style={{ width: "600px", height: "817px" }}
                src="/arquivos/01-LOOK BOOKFW22.jpg"
              />
              <a
                className="showMore01"
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "38%",
                  left: "28.1%",
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
                src="/arquivos/02-LOOK BOOKFW22.jpg
                "
              />
              <a
                className="showMore02"
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "39%",
                  left: "16.5%",
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
                className="showMore03"
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "40%",
                  left: "21.5%",
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
                src="/arquivos/03-LOOK BOOKFW22.jpg"
              />
              <a
                className="showMore04"
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "40%",
                  left: "11.5%",
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
                className="showMore05"
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "66%",
                  left: "13%",
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
                src="/arquivos/04-LOOK BOOKFW22.jpg"
              />
              <a
                className="showMore06"
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "39%",
                  left: "8.1%",
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
                className="showMore07"
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "64%",
                  left: "6.6%",
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
                src="/arquivos/05-LOOK BOOKFW22.jpg"
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
                className="showMore08"
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "40%",
                  left: "1.5%",
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
                src="/arquivos/06-LOOK BOOKFW22.jpg"
              />
              <a
                className="showMore09"
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "38%",
                  left: "71.4%",
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
                src="/arquivos/07-LOOK BOOKFW22.jpg"
              />
              <a
                className="showMore10"
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
                className="showMore11"
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "49%",
                  left: "68.3%",
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
                src="/arquivos/08-LOOK BOOKFW22.jpg"
              />
              <a
                className="showMore12"
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "39%",
                  left: "61.5%",
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
                className="showMore13"
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
                src="/arquivos/09-LOOK BOOKFW22.jpg"
              />
              <a
                className="showMore14"
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "39%",
                  left: "52.9%",
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
                className="showMore15"
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "46%",
                  left: "58.2%",
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
                src="/arquivos/10-LOOK BOOKFW22.jpg"
              />
              <a
                className="showMore16"
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "39%",
                  left: "48.0%",
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
                className="showMore17"
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "60%",
                  left: "51.5%",
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
                src="/arquivos/11-LOOK BOOKFW22.jpg"
              />
              <a
                className="showMore18"
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "64%",
                  left: "46.4%",
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
                src="/arquivos/12-LOOK BOOKFW22.jpg"
              />
              <a
                className="showMore19"
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "38%",
                  left: "41.7%",
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
                src="/arquivos/13-LOOK BOOKFW22.jpg"
              />
              <a
                className="showMore20"
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "65%",
                  left: "36.6%",
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
                className="showMore21"
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "43%",
                  left: "38.1%",
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
                src="/arquivos/14-LOOK BOOKFW22.jpg"
              />
              <a
                className="showMore22"
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "68%",
                  left: "31.6%",
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
                className="showMore23"
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "43%",
                  left: "33.1%",
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
                src="/arquivos/15-LOOK BOOKFW22.jpg"
              />
              <a
                className="showMore24"
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "40%",
                  left: "78%",
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
                src="/arquivos/16-LOOK BOOKFW22.jpg"
              />
              <a
                className="showMore25"
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "39%",
                  left: "82.9%",
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
                className="showMore26"
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "67%",
                  left: "81.4%",
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
                src="/arquivos/17-LOOK BOOKFW22.jpg"
              />
              <a
                className="showMore27"
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "38%",
                  left: "86.6%",
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
                className="showMore28"
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "67%",
                  left: "87.9%",
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
                src="/arquivos/18-LOOK BOOKFW22.jpg"
              />
              <a
                className="showMore29"
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "70%",
                  left: "96.8%",
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
            <div style={{ width: "600px", height: "817px" }}>
              <img
                style={{ width: "600px", height: "817px" }}
                src="/arquivos/19-LOOK BOOKFW22.jpg"
              />
              <a
                className="showMore30"
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "69%",
                  left: "92.9%",
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
            <div style={{ width: "600px", height: "817px" }}>
              <img
                style={{ width: "600px", height: "817px" }}
                src="/arquivos/20-LOOK BOOKFW22.jpg"
              />
              <a
                className="showMore31"
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "37%",
                  left: "91.5%",
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
                className="showMore32"
                style={{
                  width: "70px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: "39%",
                  left: "98%",
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