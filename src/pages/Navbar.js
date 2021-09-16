import React from "react";
import { Nav, NavDropdown, Navbar, Container, NavLink } from "react-bootstrap";
import { GoHome } from "react-icons/go";
const NavbarPage = () => {
  return (
    <>
      <Navbar variant="dark" bg="dark" expand="lg" className="px-5">
        <Container fluid>
          <Navbar.Brand href="#home">
            <h3>
              <GoHome />
            </h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="เกี่ยวกับเรา"
                menuVariant="dark"
                className='mx-3'
              >
                <NavDropdown.Item href="#action/3.1">
                  ประวัติหน่วยงาน
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  วิสัยทัศน์ พันธกิจ
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  โครงสร้างหน่วยงาน
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">บุคคลากร</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  คู่มือปฎิบัติงาน
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="บริการงานวิจัย"
                menuVariant="dark"
                className='mx-3'
              >
                <NavDropdown.Item href="#action/3.1">
                  เอกสารการขอทุนวิจัย
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  แหล่งทุนวิจัย
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  ฐานข้อมูลวารสาระดับชาติและนานาชาติ
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">ตำสั่ง</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">
                  กำหนดการเปิดรับข้อเสนอโครงการ
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">
                  แนวทางปฎิบัติการทำวิจัยโดยใช้ทุนส่วนตัว พ.ศ.2564
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7">
                  การจัดการองค์ความรู้
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="บริการวิชาการ"
                menuVariant="dark"
                className='mx-3'
              >
                <NavDropdown.Item href="#action/3.1">
                  คู่มือการบริการวิชาการแก่สังคม มหาวิทยาลัยเจ้าพระยา
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  โครงการวิจัยและบริการวิชาการ
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  แผนบริการวิชาการแก่สังคม
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">แบบฟอร์ม</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link  className='mx-3'>ระบบฐานข้อมูลวิจัย</Nav.Link>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="จริยธรรมการวิจัยในคน"
                menuVariant="dark"
                className='mx-3'
              >
                <NavDropdown.Item href="#action/3.1">
                  คณะกรรมการ
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  แนวทางวิธีการดำเนินการมาตราฐาน (Standard Operating Procedures
                  :SOPs)
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  ขั้นตอนการพิจารณาจริยธรรมการวิจัยในคน
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  แบบฟอร์ม/ขั้นตอนการดำเนินงาน
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">
                  ประกาศอัตราค่าธรรมเนียม (Announcement of free rates)
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">
                  การอบรมจริยธรรมการวิจัยในคนผ่านระบบออนไลน์ (Online training research ethics)
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarPage;
