import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import { RiInstagramFill } from "react-icons/ri";

import {
  FooterSection,
  NavLink,
  LogoContainer,
  Para,
  FooterContainer,
  Language,
} from "./styles";


const Footer = ({ t }: { t: TFunction }) => {

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between" gutter={[0, 14]}>
          <Col lg={1} md={1} sm={{order:1, span:1}} xs={{order:2, span:4}}>
              <NavLink to="/">
                <LogoContainer>
                  <SvgIcon
                    src="logo.svg"
                    aria-label="homepage"
                    width="101px"
                    height="64px"
                  />
                </LogoContainer>
              </NavLink>
            </Col>
            <Col lg={16} md={16} sm={12} xs={{order:1, span:24}}>
              <Language>{t("Address")}</Language>
              <Para>Jl. Juraeji No 02 Kampung Mekarsari</Para>
              <Para>Kelurahan Palasari Kecamatan Cibiru</Para>
              <Para>Kota Bandung</Para>
            </Col>
            <Col lg={2} md={2} sm={2} xs={{order:3, span:4}}>
              <FooterContainer>
                <a href="https://www.instagram.com/prekostion" target="_blank" rel="noopener noreferrer"><RiInstagramFill color="#FF9800" size={"3em"} /></a>
              </FooterContainer>
            </Col>
          </Row>
        </Container>
      </FooterSection>
    </>
  );
};

export default withTranslation()(Footer);
