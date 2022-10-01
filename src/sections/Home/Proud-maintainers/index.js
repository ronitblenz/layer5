import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import Envoy from "../../../assets/images/service-mesh-icons/envoy/horizontal/color/envoy-horizontal-white-text.svg";
import Traefik from "../../../assets/images/service-mesh-icons/helm.svg";
import Istio from "../../../assets/images/service-mesh-icons/istio.svg";
import OSM from "../../../assets/images/service-mesh-icons/open-service-mesh/stacked/white/openservicemesh-stacked-white.svg";
import SMI from "../../../assets/images/service-mesh-icons/service-mesh-interface/horizontal-stackedtext/color/servicemeshinterface-horizontal-stackedtext-color.svg";
import ImageHub from "../../../assets/images/image-hub/layer5-image-hub.svg";
import OAM from "../../../assets/images/meshmap/opa.svg";
import ProjectItemWrapper from "./proudMaintainers.style";

const ProudMaintainers = () => {
  return (
    <ProjectItemWrapper>
      <Container >
        <Row className="project-title">

          <SectionTitle UniWidth="100%">
            <h4>Proudly maintaining and contributing</h4>
            <h2>
              <span>Open Source and Community First</span>.
            </h2>
          </SectionTitle>

          <p className="project-text">
            We are the world’s largest collection of service mesh practitioners
            and maintainers of leading open source projects.
          </p>

        </Row>
      </Container>
      <Row className="row">
        <Col xs={3} sm={3} md={3} lg={3} className="proj_row_1_col">
          <div className="proj_icon_1">
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="-2.82 -4.07 419.64 80.14"><style></style><path d="M101.2 32c3.3 0 5.9-1.3 8-3.9l4.2 4.4c-3.4 3.8-7.3 5.7-11.9 5.7-4.6 0-8.3-1.4-11.3-4.3s-4.4-6.5-4.4-10.9 1.5-8.1 4.5-11c3-2.9 6.7-4.4 11.1-4.4 4.9 0 9 1.9 12.2 5.6l-4.1 4.7c-2.1-2.6-4.7-3.9-7.8-3.9-2.5 0-4.6.8-6.4 2.4-1.8 1.6-2.7 3.8-2.7 6.6s.8 5 2.5 6.7c1.7 1.4 3.7 2.3 6.1 2.3zm17.5 5.8V8.1h6.6v23.8H138v5.9zm48.3-4.1c-3 2.9-6.7 4.4-11.1 4.4-4.4 0-8.1-1.5-11.1-4.4-3-2.9-4.5-6.6-4.5-10.9s1.5-8 4.5-10.9c3-2.9 6.7-4.4 11.1-4.4 4.4 0 8.1 1.5 11.1 4.4 3 2.9 4.5 6.6 4.5 10.9s-1.5 8-4.5 10.9zm-2.3-10.9c0-2.6-.9-4.9-2.5-6.8-1.7-1.9-3.8-2.8-6.3-2.8s-4.6.9-6.3 2.8c-1.7 1.9-2.6 4.1-2.6 6.8s.9 4.9 2.6 6.8c1.7 1.9 3.8 2.8 6.3 2.8s4.6-.9 6.3-2.8 2.5-4.1 2.5-6.8zm20.3 7.4c1.1 1.4 2.6 2.1 4.5 2.1s3.4-.7 4.4-2.1c1.1-1.4 1.6-3.3 1.6-5.6V8.1h6.6v16.6c0 4.3-1.2 7.6-3.6 9.9-2.4 2.3-5.4 3.5-9.1 3.5-3.7 0-6.8-1.2-9.2-3.5-2.4-2.3-3.6-5.6-3.6-9.9V8.1h6.6v16.4c.1 2.4.7 4.3 1.8 5.7zM231.7 12c2.8 2.6 4.3 6.2 4.3 10.8s-1.4 8.3-4.1 11c-2.8 2.7-7 4-12.6 4H209V8.1h10.5c5.3 0 9.4 1.3 12.2 3.9zm-4.8 17.7c1.6-1.5 2.4-3.8 2.4-6.7 0-2.9-.8-5.2-2.4-6.7-1.6-1.6-4.1-2.4-7.5-2.4h-3.7V32h4.2c3 0 5.3-.8 7-2.3zm46.8-21.6h6.7v29.7h-6.7l-14.1-18.6v18.6h-6.7V8.1h6.3l14.5 19.2zm35.1 29.7l-2.8-6.4h-12.5l-2.8 6.4h-7.1l12.8-29.7h6.4l12.8 29.7h-6.8zM299.9 17l-3.7 8.6h7.4l-3.7-8.6zm29.9-3.1v23.9h-6.7V13.9h-8.4V8.1h23.5v5.8zM343 8.1h6.6v29.7H343zM367.9 27l7.6-18.9h7.2l-12 29.7h-5.6L353.2 8.1h7.2zm39.7-18.9V14h-14.8v6.2h13.3v5.6h-13.3V32h15.3v5.8h-21.9V8.1zm-314 55c1.8 0 3.3-.7 4.5-2.2l2.4 2.5c-1.9 2.1-4.1 3.2-6.7 3.2s-4.7-.8-6.3-2.4c-1.7-1.6-2.5-3.7-2.5-6.1 0-2.5.8-4.5 2.5-6.2s3.8-2.5 6.2-2.5c2.7 0 5 1 6.9 3.1l-2.3 2.6c-1.2-1.5-2.6-2.2-4.4-2.2-1.4 0-2.6.5-3.6 1.4-1 .9-1.5 2.1-1.5 3.7s.5 2.8 1.4 3.7c.9 1 2.1 1.4 3.4 1.4zm23.4 1c-1.7 1.6-3.8 2.5-6.2 2.5s-4.5-.8-6.2-2.5c-1.7-1.6-2.5-3.7-2.5-6.1s.8-4.5 2.5-6.1c1.7-1.6 3.8-2.5 6.2-2.5s4.5.8 6.2 2.5c1.7 1.6 2.5 3.7 2.5 6.1s-.8 4.5-2.5 6.1zm-1.2-6.1c0-1.5-.5-2.8-1.4-3.8-1-1-2.1-1.6-3.5-1.6s-2.6.5-3.5 1.6c-1 1-1.4 2.3-1.4 3.8s.5 2.7 1.4 3.8c1 1 2.1 1.6 3.5 1.6s2.6-.5 3.5-1.6c.9-1 1.4-2.3 1.4-3.8zm21.8-2.1l-4.5 9.2h-2.2l-4.5-9.2v10.5h-3.7V49.8h5l4.3 9.1 4.3-9.1h5v16.6h-3.7zm19.3-4.6c1.2 1 1.8 2.5 1.8 4.6s-.6 3.6-1.8 4.5c-1.2 1-3 1.4-5.5 1.4h-2.2v4.6h-3.7V49.8h5.9c2.5 0 4.3.5 5.5 1.5zm-2.7 6.5c.4-.5.7-1.2.7-2.2s-.3-1.6-.9-2c-.6-.4-1.5-.6-2.7-.6h-2.1v5.6h2.5c1.2 0 2-.3 2.5-.8zm11.8 4.3c.6.8 1.5 1.2 2.5 1.2s1.9-.4 2.5-1.2c.6-.8.9-1.8.9-3.2v-9.2h3.7V59c0 2.4-.7 4.3-2 5.6-1.3 1.3-3 1.9-5.1 1.9s-3.8-.7-5.1-2-2-3.2-2-5.6v-9.3h3.7V59c0 1.3.3 2.4.9 3.1zm20.5-9.1v13.4h-3.7V53h-4.7v-3.2h13.1V53zm7.5-3.2h3.7v16.7H194zm19.4 0h3.7v16.6h-3.7L205.5 56v10.4h-3.7V49.8h3.4l8.2 10.7zm18.7 8.2h3.7v5.9c-1.7 1.8-3.9 2.8-6.9 2.8-2.4 0-4.5-.8-6.2-2.4-1.7-1.6-2.5-3.7-2.5-6.1 0-2.5.8-4.5 2.5-6.2s3.7-2.5 6.1-2.5c2.4 0 4.5.8 6.2 2.4l-1.9 2.8c-.7-.7-1.4-1.1-2.1-1.3-.6-.2-1.3-.4-2-.4-1.4 0-2.6.5-3.6 1.4-1 1-1.5 2.2-1.5 3.8 0 1.6.5 2.8 1.4 3.8.9.9 2 1.4 3.3 1.4 1.3 0 2.4-.2 3.2-.7l.3-4.7zm24.7-8.2V53h-7.7v3.6h7.4v3.3h-7.4v6.5h-3.7V49.8zM274 64.1c-1.7 1.6-3.8 2.5-6.2 2.5-2.5 0-4.5-.8-6.2-2.5-1.7-1.6-2.5-3.7-2.5-6.1s.8-4.5 2.5-6.1c1.7-1.6 3.8-2.5 6.2-2.5 2.5 0 4.5.8 6.2 2.5 1.7 1.6 2.5 3.7 2.5 6.1s-.8 4.5-2.5 6.1zm-1.3-6.1c0-1.5-.5-2.8-1.4-3.8-1-1-2.1-1.6-3.5-1.6s-2.6.5-3.5 1.6c-1 1-1.4 2.3-1.4 3.8s.5 2.7 1.4 3.8c1 1 2.1 1.6 3.5 1.6s2.6-.5 3.5-1.6c1-1 1.4-2.3 1.4-3.8zm11.4 4.1c.6.8 1.5 1.2 2.5 1.2s1.9-.4 2.5-1.2c.6-.8.9-1.8.9-3.2v-9.2h3.7V59c0 2.4-.7 4.3-2 5.6-1.3 1.3-3 1.9-5.1 1.9s-3.8-.7-5.1-2c-1.3-1.3-2-3.2-2-5.6v-9.3h3.7V59c-.1 1.3.3 2.4.9 3.1zm25.1-12.3h3.7v16.6h-3.7L301.3 56v10.4h-3.7V49.8h3.4l8.2 10.7zm20.5 2.2c1.6 1.5 2.4 3.5 2.4 6.1 0 2.6-.8 4.6-2.3 6.1-1.5 1.5-3.9 2.3-7.1 2.3H317V49.8h5.9c3 0 5.3.7 6.8 2.2zm-2.7 9.9c.9-.9 1.4-2.1 1.4-3.7s-.5-2.9-1.4-3.8c-.9-.9-2.3-1.3-4.2-1.3h-2.1v10.1h2.4c1.7-.1 3-.5 3.9-1.3zm19.7 4.5l-1.5-3.6h-7l-1.5 3.6h-4l7.2-16.7h3.6l7.2 16.7h-4zm-5-11.7l-2.1 4.8h4.2l-2.1-4.8zm16.8-1.7v13.4h-3.8V53H350v-3.2h13.2V53zm7.4-3.2h3.7v16.7h-3.7zm21.8 14.3c-1.7 1.6-3.8 2.5-6.2 2.5-2.5 0-4.5-.8-6.2-2.5-1.7-1.6-2.5-3.7-2.5-6.1s.8-4.5 2.5-6.1c1.7-1.6 3.8-2.5 6.2-2.5 2.5 0 4.5.8 6.2 2.5 1.7 1.6 2.5 3.7 2.5 6.1s-.8 4.5-2.5 6.1zm-1.2-6.1c0-1.5-.5-2.8-1.4-3.8-1-1-2.1-1.6-3.5-1.6s-2.6.5-3.5 1.6c-1 1-1.4 2.3-1.4 3.8s.5 2.7 1.4 3.8c1 1 2.1 1.6 3.5 1.6s2.6-.5 3.5-1.6c.9-1 1.4-2.3 1.4-3.8zm18.5-8.2h3.8v16.6H405L397.1 56v10.4h-3.7V49.8h3.5l8.1 10.7z" className="CNCFText" /><path fill="#446ca9" d="M14.5 46.7H5.4v21.4h21.3v-9.2H14.5zm45.8.1v12.1H48.1v-.1 9.3h21.3V46.7h-9.2zM5.4 25.4h9.2l-.1-.1V13.2h12.2V4H5.4zM48.1 4v9.2h12.2v12.2h9.1V4z" /><path fill="#76c4d5" d="M46.9 25.4L34.7 13.2h13.4V4H26.7v9.2l12.2 12.2zm-11 21.3h-8L38 56.8l2 2.1H26.7v9.2h21.4v-9.3l-6.1-6zm24.4-21.3v13.3l-2.1-2.1-10.1-10.1v8.1l6 6 6.1 6.1h9.2V25.4zM26.7 37.5L14.6 25.4H5.4v21.3h9.1V33.4l12.2 12.2z" /></svg>   </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} className="proj_row_1_col">
          <div className="proj_icon_1">
            <img src={Envoy} alt="Envoy" />
          </div>
  </Col>
        <Col xs={3} sm={3} md={3} lg={3} className="proj_row_1_col">
          <div className="proj_icon_1">
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="-19.02 -16.02 1093.04 272.04"><style></style><style></style><path d="M303.1 168.8v-97c0-4.6 3.9-8.5 8.7-8.5 4.6 0 8.4 3.9 8.4 8.5v91.1H365c4.1 0 7.7 3.2 7.7 7.3 0 4.3-3.6 7.7-7.7 7.7h-52.7c-6-.1-9.2-3.3-9.2-9.1zm102.8 1.3V71.8c0-4.6 3.9-8.5 8.7-8.5 4.6 0 8.4 3.9 8.4 8.5v98.4c0 4.6-3.8 8.5-8.4 8.5-4.8 0-8.7-4-8.7-8.6zm135.2 4.1l-60.4-83.7v79.6c0 4.6-3.8 8.5-8.4 8.5-4.8 0-8.7-3.9-8.7-8.5V74.5c0-6.1 4.9-11.3 11.3-11.3 3.6 0 7 1.7 9 4.6l59.2 81.5V71.8c0-4.6 3.8-8.5 8.4-8.5 4.8 0 8.7 3.9 8.7 8.5v96.3c0 5.8-4.8 10.6-10.6 10.6-3.6 0-6.6-1.6-8.5-4.5zm144.8-3.7c0 4.4-3.4 8.2-7.8 8.2-2.2 0-4.3-.5-6-2.4l-43.3-47.6-10.9 11.6v29.8c0 4.6-3.8 8.5-8.5 8.5-4.6 0-8.5-3.9-8.5-8.5V71.8c0-4.6 3.9-8.5 8.5-8.5 4.8 0 8.5 3.9 8.5 8.5v49.1L668 65.8c1.7-1.9 3.8-2.6 6-2.6 4.3 0 8 3.4 8 7.8 0 2-.5 3.9-2.2 5.5l-39.6 42.1 43.5 46.4c1.3 1.6 2.2 3.6 2.2 5.5zm34.4-1.7V73.1c0-5.8 3.2-9 9.2-9h60.4c4.1 0 7.7 3.4 7.7 7.7 0 4.1-3.6 7.3-7.7 7.3h-52.5v33.3h51.3c4.1 0 7.7 3.2 7.7 7.3 0 4.3-3.6 7.7-7.7 7.7h-51.3v35.5h52.5c4.1 0 7.7 3.2 7.7 7.3 0 4.3-3.6 7.7-7.7 7.7h-60.4c-5.9-.1-9.2-3.3-9.2-9.1zm197.8 2c0 3.6-3.2 7.8-8 7.8-2.9 0-5.6-1.4-7.2-3.6l-28.4-41h-24v36.2c0 4.6-3.8 8.5-8.4 8.5-4.8 0-8.7-3.9-8.7-8.5v-97c0-5.8 3.2-9 9.2-9h38.7c21.7 0 36.5 14 36.5 35 0 19.1-11.9 30-25.4 32.7l24 33.8c1 1 1.7 2.4 1.7 5.1zM850.4 119H879c12.3 0 21.1-8 21.1-20 0-11.9-8.9-20-21.1-20h-28.6v40zm103.7 49.8V73.1c0-5.8 3.2-9 9.2-9h31.4c35.5 0 59 24.2 59 57 0 32.9-23.5 56.8-59 56.8h-31.4c-6-.1-9.2-3.3-9.2-9.1zm40.6-6c26.3 0 41.4-18.8 41.4-41.8 0-23.4-14.7-41.9-41.4-41.9h-23.5v83.7h23.5z" className="LinkerdText" /><linearGradient id="SVGID_1_" x1="242.133" x2="242.133" y1="48.383" y2="151.866" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2beda7" /><stop offset="1" stopColor="#018afd" /></linearGradient><path fill="url(#SVGID_1_)" d="M233.5 48.4v93.5l17.3 10V58.3z" /><linearGradient id="SVGID_2_" x1="11.026" x2="11.026" y1="48.385" y2="151.872" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2beda7" /><stop offset="1" stopColor="#018afd" /></linearGradient><path fill="url(#SVGID_2_)" d="M2.4 151.9l17.2-10V48.4L2.4 58.3z" /><path d="M86.9 151l79.3 45.8v-20L92 134l-5.1 2.9zm83.9 72.3l-83.9-48.4v19.9l22.4 12.9-27 15.6c-1.8 1-1.8 3.7 0 4.7l13.2 7.6 31-17.9 31 17.9 13.2-7.6c1.9-1.1 1.9-3.7.1-4.7z" className="st2" /><linearGradient id="SVGID_3_" x1="242.133" x2="242.133" y1="94.192" y2="189.792" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2beda7" /><stop offset="1" stopColor="#018afd" /></linearGradient><path fill="url(#SVGID_3_)" d="M233.5 104.1V187c0 2.1 2.3 3.4 4.1 2.4l11.8-6.8c.8-.5 1.4-1.4 1.4-2.4v-86l-17.3 9.9z" /><linearGradient id="SVGID_4_" x1="204.188" x2="204.188" y1="116.099" y2="211.699" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2beda7" /><stop offset="1" stopColor="#018afd" /></linearGradient><path fill="url(#SVGID_4_)" d="M199.6 211.3l11.1-6.4c1.3-.7 2-2.1 2-3.5v-85.3l-17.2 10V209c.1 2.1 2.3 3.4 4.1 2.3z" /><linearGradient id="SVGID_5_" x1="166.244" x2="166.244" y1="138.004" y2="235.593" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2beda7" /><stop offset="1" stopColor="#018afd" /></linearGradient><path fill="url(#SVGID_5_)" d="M157.6 235.6l15.9-9.2c.8-.5 1.4-1.4 1.4-2.4v-86l-17.2 10v87.6z" /><linearGradient id="SVGID_6_" x1="86.923" x2="86.923" y1="138.004" y2="235.592" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2beda7" /><stop offset="1" stopColor="#018afd" /></linearGradient><path fill="url(#SVGID_6_)" d="M79.7 226.4l15.9 9.2V148l-17.2-10v86.1c-.1.9.4 1.8 1.3 2.3z" /><linearGradient id="SVGID_7_" x1="48.979" x2="48.979" y1="116.098" y2="211.699" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2beda7" /><stop offset="1" stopColor="#018afd" /></linearGradient><path fill="url(#SVGID_7_)" d="M42.4 204.9l11.1 6.4c1.8 1 4.1-.3 4.1-2.4V126l-17.2-10v85.3c0 1.5.7 2.9 2 3.6z" /><linearGradient id="SVGID_8_" x1="11.035" x2="11.035" y1="94.191" y2="189.791" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2beda7" /><stop offset="1" stopColor="#018afd" /></linearGradient><path fill="url(#SVGID_8_)" d="M4.5 183l11.1 6.4c1.8 1 4.1-.3 4.1-2.4v-82.9l-17.2-10v85.3c-.1 1.5.7 2.9 2 3.6z" /><path d="M250.8 58.3l-17.3-10-31 17.9-20.7-11.9 27-15.6c1.8-1 1.8-3.7 0-4.7l-11.1-6.4c-1.3-.7-2.8-.7-4.1 0l-29 16.7-20.7-11.9 27-15.6c1.8-1 1.8-3.7 0-4.7l-11.1-6.4c-1.3-.7-2.8-.7-4.1 0l-29 16.7-29-16.8c-1.3-.7-2.8-.7-4.1 0L82.5 12c-1.8 1-1.8 3.7 0 4.7L233.6 104l17.2-10-31-17.9 31-17.8zM55.6 27.7l-11.1 6.4c-1.8 1-1.8 3.7 0 4.7l151.1 87.3 17.3-10L59.6 27.7c-1.2-.8-2.8-.8-4 0zM2.4 58.3l31.1 18L2.4 94.2l17.3 10 31-18 20.7 12-31 17.9 17.2 10 31-18 20.7 12-31 17.9 17.2 10 31.1-18 31 18 17.3-10L19.6 48.4z" className="st2" /></svg>                   </div>
        </Col>
        {/* <Col xs={3} sm={3} md={3} lg={2}>
          <div className="proj_icon_2">
            <img src={ServiceMesh} alt="Service Mesh" />
            <h4>Service Mesh</h4>
          </div>
        </Col> */}
        <Col xs={3} sm={3} md={3} lg={3} className="proj_row_1_col">
          <div className="proj_icon_1">
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 379.08 80.17"><defs><style></style></defs><title>meshery-logo-light-text-side</title><polygon points="41.26 18.9 41.26 38.04 57.86 28.43 41.26 18.9" className="cls-1" /><polygon points="41.26 42.05 41.26 61.29 58.01 51.71 41.26 42.05" className="cls-1" /><polygon points="38.87 37.91 38.87 19.06 22.48 28.45 38.87 37.91" className="cls-2" /><path d="M6,61.22A40.35,40.35,0,0,0,18.71,74V53.86Z" className="cls-2" /><polygon points="38.87 61.2 38.87 42.19 22.44 51.7 38.87 61.2" className="cls-2" /><polygon points="21.1 72.81 37.74 63.3 21.1 53.68 21.1 72.81" className="cls-1" /><polygon points="59.15 72.92 59.15 53.81 42.53 63.31 59.15 72.92" className="cls-2" /><path d="M75.42,59a39.88,39.88,0,0,0,4.71-17.18l-17.32,9.9Z" className="cls-2" /><polygon points="61.54 49.7 78.23 40.15 61.54 30.55 61.54 49.7" className="cls-1" /><polygon points="59.15 26.42 59.15 7.43 42.61 16.91 59.15 26.42" className="cls-2" /><polygon points="59.15 49.61 59.15 30.45 42.57 40.05 59.15 49.61" className="cls-2" /><polygon points="40.07 80.17 40.07 80.17 40.07 80.17 40.07 80.17" className="cls-2" /><polygon points="21.1 30.41 21.1 49.72 37.8 40.05 21.1 30.41" className="cls-1" /><path d="M38.87,0A40,40,0,0,0,21.28,4.65L38.87,14.77Z" className="cls-2" /><polygon points="21.1 7.31 21.1 26.49 37.81 16.91 21.1 7.31" className="cls-1" /><path d="M18.71,6.14A40.28,40.28,0,0,0,6,18.94l12.72,7.34Z" className="cls-2" /><path d="M59,4.74A40,40,0,0,0,41.26,0V14.93Z" className="cls-1" /><path d="M0,41.48A40,40,0,0,0,4.79,59.16L17.67,51.7Z" className="cls-1" /><path d="M4.79,21A40,40,0,0,0,0,38.58L17.69,28.45Z" className="cls-1" /><path d="M21.24,75.49a39.88,39.88,0,0,0,17.63,4.66V65.41Z" className="cls-2" /><path d="M74.17,19A40.24,40.24,0,0,0,61.54,6.21v20.1Z" className="cls-1" /><path d="M61.54,74A40.34,40.34,0,0,0,74.23,61.07L61.54,53.75Z" className="cls-1" /><path d="M80.13,38.48a39.88,39.88,0,0,0-4.76-17.42L62.64,28.43Z" className="cls-2" /><path d="M41.26,80.15a39.79,39.79,0,0,0,17.59-4.64L41.26,65.34Z" className="cls-1" /><polygon points="18.71 49.54 18.71 30.61 2.27 40.04 18.71 49.54" className="cls-2" /><polygon points="269.94 29.39 269.94 30.89 269.94 37.93 269.94 46.53 269.94 59.08 303.36 59.08 303.36 52.03 276.99 52.03 276.99 46.53 276.99 44.98 297.25 44.98 297.25 37.93 276.99 37.93 276.99 30.89 303.36 30.89 303.36 23.84 269.94 23.84 269.94 29.39" className="cls-3" /><polygon points="141.41 29.39 141.41 30.89 141.41 37.93 141.41 46.53 141.41 59.08 174.83 59.08 174.83 52.03 148.46 52.03 148.46 46.53 148.46 44.98 168.72 44.98 168.72 37.93 148.46 37.93 148.46 30.89 174.83 30.89 174.83 23.84 141.41 23.84 141.41 29.39" className="cls-3" /><path d="M221.08,49.87a8.74,8.74,0,0,1-.73,3.57,9,9,0,0,1-2,2.94,9.5,9.5,0,0,1-2.93,2,9,9,0,0,1-3.6.73h-33V51.66h33a1.78,1.78,0,0,0,1.79-1.79V47a1.76,1.76,0,0,0-.52-1.27,1.73,1.73,0,0,0-1.27-.51H188.09a8.74,8.74,0,0,1-3.57-.73,9.4,9.4,0,0,1-5-5,8.9,8.9,0,0,1-.73-3.57V33.09a9.11,9.11,0,0,1,.73-3.59,9.58,9.58,0,0,1,2-2.94,9.32,9.32,0,0,1,3-2,8.9,8.9,0,0,1,3.57-.72h33v7.47h-33a1.78,1.78,0,0,0-1.79,1.78V36a1.78,1.78,0,0,0,1.79,1.79h23.73a9.11,9.11,0,0,1,3.6.72,9.59,9.59,0,0,1,2.93,2,9.41,9.41,0,0,1,2,2.94,8.9,8.9,0,0,1,.73,3.59Z" className="cls-3" /><path d="M265.54,59.08h-6.73V45.22H232.6V59.08h-6.72V37.75h32.93V23.84h6.73ZM232.6,34.44h-6.72V23.84h6.72Z" className="cls-3" /><polygon points="361.45 36.17 352.64 23.84 343.83 23.84 357.93 44.98 357.93 59.08 364.98 59.08 364.98 44.98 379.08 23.84 370.38 23.84 361.45 36.17" className="cls-3" /><path d="M315.35,30.56h18.07v7.33H318.86v6.72h3.34L335,59.08h8.7L330.9,44.61h5a5.48,5.48,0,0,0,5.48-5.48V29.31a5.47,5.47,0,0,0-5.48-5.47H308.44V59.08h7.05Z" className="cls-3" /><path d="M136,59.08h-7.47V33.38a1.94,1.94,0,0,0-.16-.8,2.15,2.15,0,0,0-1.11-1.11,1.94,1.94,0,0,0-.8-.16H91.91V23.84h34.54a9.22,9.22,0,0,1,3.69.75,9.38,9.38,0,0,1,5.1,5.1,9.22,9.22,0,0,1,.75,3.69Zm-36.6,0H91.91V31.31l7.48-2Zm18.28,0h-7.48V35.22h7.48Z" className="cls-3" /></svg>          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} className="proj_row_1_col">
          <div className="proj_icon_1">
            <img src={OAM} alt="OAM" />
          </div>
        </Col>
      </Row>
      <Row className="row row_2">
        <Col xs={3} sm={3} md={3} lg={2} className="proj_row_2_col">
          <div className="proj_icon_2">
            <img src={Istio} alt="Istio" />
            <h4>Istio</h4>
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2} className="proj_row_2_col">
          <div className="proj_icon_1">
            <img src={OSM} alt="OSM" />
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2} className="proj_row_2_col">
          <div className="proj_icon_1">
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 550 225"><defs><style></style></defs><title>smp-dark-text-side</title><g id="Title"><path d="M459.23,139.25H447.91V100.13a2.47,2.47,0,0,0-.19-1.15,1.89,1.89,0,0,0-.77-1,4.14,4.14,0,0,0-.95-.76,2.36,2.36,0,0,0-1.15-.2H392.5V85.75h52.15a13.67,13.67,0,0,1,5.56,1.15A15.06,15.06,0,0,1,454.82,90a14.8,14.8,0,0,1,3.06,4.6,13.71,13.71,0,0,1,1.15,5.56v39.12Zm-55.42,0H392.5V97.06h11.31Zm27.23,0H419.73V103H431Z" className="clss-1" /><path d="M382.91,125.25a12.83,12.83,0,0,1-1.15,5.37,12.19,12.19,0,0,1-3.07,4.41,14.07,14.07,0,0,1-4.41,3.07,12.8,12.8,0,0,1-5.37,1.15h-50V127.94h50a2.49,2.49,0,0,0,1.92-.77,2.46,2.46,0,0,0,.77-1.92v-4.41a2.46,2.46,0,0,0-.77-1.92,2.48,2.48,0,0,0-1.92-.76H332.86a13,13,0,0,1-5.37-1.15,12.27,12.27,0,0,1-4.41-3.07,16.52,16.52,0,0,1-3.06-4.41,12.83,12.83,0,0,1-1.15-5.37V99.75A12.19,12.19,0,0,1,320,94.38,12,12,0,0,1,323.08,90a17,17,0,0,1,4.41-3.07,12.86,12.86,0,0,1,5.37-1.15h50.05V97.06H332.86a2.63,2.63,0,0,0-2.68,2.69v4.41a2.61,2.61,0,0,0,2.68,2.68h36.05a12.33,12.33,0,0,1,5.37,1.15,12.19,12.19,0,0,1,4.41,3.07,14.18,14.18,0,0,1,3.07,4.41,12.83,12.83,0,0,1,1.15,5.37Z" className="clss-1" /><path d="M511.77,117.2h.76a8.19,8.19,0,0,0,8.25-8.25V94a8.19,8.19,0,0,0-8.25-8.25h-41.8v53.5h10.74l-.19-43.34H508.7v10.93H486.65V117.2" className="clss-1" /></g><g id="Needle"><path d="M148.46,129.45a13.23,13.23,0,1,0,12.12,14.25A13.24,13.24,0,0,0,148.46,129.45ZM147,148.08a5.46,5.46,0,1,1,5.87-5A5.5,5.5,0,0,1,147,148.08Z" className="clss-2" /><path d="M189.21,72.2c-1.63,1.13-3.13,2.32-4.69,3.5L178.71,85,167,103.39l-11.69,18.44-2.94,4.62L151,128.77a7.29,7.29,0,0,1-.75,1.12,3.1,3.1,0,0,0-.75,1.13c-.44,1.87-.82,3.75-1.19,5.68a1.85,1.85,0,0,0-.06.57A5.37,5.37,0,0,1,152,139.7a4,4,0,0,1,.5-.31c1.63-1.12,3.13-2.31,4.69-3.5a2.9,2.9,0,0,0,.69-1.19,10.2,10.2,0,0,1,.68-1.18L160,131.2l2.94-4.62,11.69-18.44L186.33,89.7l5.82-9.25c.43-1.87.81-3.81,1.18-5.75s.63-3.87.88-5.87C192.46,70,190.77,71,189.21,72.2Z" className="clss-2" /></g><g id="Gauge"><path d="M78.94,67.33a176.47,176.47,0,0,1,19.87-9L97.12,50A203.06,203.06,0,0,0,76.19,61.89Z" className="clss-3" /><path d="M206.87,53.77l17.19-19.38a196.79,196.79,0,0,0-33.56-4.31l-10,18.25A186,186,0,0,1,206.87,53.77Z" className="clss-4" /><path d="M75,69.39l-2.5-5.06C67.31,67.89,62.25,71.7,57.44,75.7l2.62,3.13C64.94,75.45,69.94,72.33,75,69.39Z" className="clss-3" /><path d="M240.13,67.2,265.88,49a184.81,184.81,0,0,0-36.94-13.5L211.5,55.14A180.65,180.65,0,0,1,240.13,67.2Z" className="clss-5" /><path d="M56.5,81.39l-2.38-2.87A167.34,167.34,0,0,0,41.25,90.77l1.87,1.5C47.44,88.45,51.88,84.83,56.5,81.39Z" className="clss-2" /><path d="M270.25,51.27,244.44,69.52a189,189,0,0,1,31.31,22.31l33.56-13.06A186.84,186.84,0,0,0,270.25,51.27Z" className="clss-5" /><path d="M38.12,94A212.44,212.44,0,0,0,20,116.77a184.66,184.66,0,0,1,19.81-21.5Z" className="clss-2" /><path d="M128.94,37.64,128.25,50a170.56,170.56,0,0,1,19.88-2.5l4.31-15.13A208.3,208.3,0,0,0,128.94,37.64Z" className="clss-6" /><path d="M152.75,47.27c2.25-.07,4.56-.13,6.87-.13,5.44,0,10.88.25,16.19.75L185.56,30a194.16,194.16,0,0,0-28.44,1.68Z" className="clss-4" /><path d="M102.87,56.77a170,170,0,0,1,20.94-5.88L124.5,39a187.49,187.49,0,0,0-23.31,9.06Z" className="clss-6" /></g></svg>          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2} className="proj_row_2_col">
          <div className="proj_icon_2">
            <img src={ImageHub} alt="ImageHub" />
            <h4>Image Hub</h4>
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2} className="proj_row_2_col">
          <div className="proj_icon_1">
            <img src={SMI} alt="SMI" />
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2} className="proj_row_2_col">
          <div className="proj_icon_2">
            <img src={Traefik} alt="Traefik" />
            <h4>Traefik Mesh</h4>
          </div>
        </Col>
      </Row>
    </ProjectItemWrapper>
  );
};

export default ProudMaintainers;