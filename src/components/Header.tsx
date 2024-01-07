import { Box, Typography } from "@mui/material";
import Icon from '@mdi/react';
import { mdiAccountChildCircle } from '@mdi/js';
import { mdiMapMarkerMultipleOutline } from '@mdi/js';
import { mdiEmailArrowRightOutline } from '@mdi/js';
import { mdiPhone } from '@mdi/js';
import Link from "next/link";

export const Header = () => {
  return (
    <header className="header_section">
      <Box className="bg-main contact_nav_container">
        <Box className="container">
          <Box className="contact_nav">
            <Link href="/contact">
              <Icon path={mdiMapMarkerMultipleOutline} size={1.2} className="pl-4 inline" />
              <span>
                <Typography variant="h6" paragraph className="text-sm inline">
                    &nbsp; Address : 123 Awolowo Way, Ikeja, Lagos
                </Typography>
              </span>
            </Link>
            <Link href="">
              <Icon path={mdiEmailArrowRightOutline} size={1.2} className="inline" />
              <span>
                <Typography variant="h6" paragraph className="text-sm mx-auto inline">
                    &nbsp; Email : info@storytimepreschool.com
                </Typography>               
              </span>
            </Link>
            <Link href="">
              <Icon path={mdiPhone} size={1.2} className="inline" />
              <span>
                <Typography variant="h6" paragraph className="text-sm pr-4 inline">
                  &nbsp; Phone Call : +234 818 565 7990
                </Typography>
              </span>
            </Link>
          </Box>
        </Box>
      </Box>
      <Box maxWidth="xl" maxHeight={90}>
        <nav className="flex items-center navbar navbar-expand-lg custom_nav-container">
          <Box className="custom_menu-btn mt-2 pl-4">
            <button>
              <span className="s-1"> </span>
              <span className="s-2"> </span>
              <span className="s-3"> </span>
            </button>
          </Box>
          <Box id="myNav" className="overlay">
            <Box className="menu_btn-style ">
              <button>
                <span className="s-1"> </span>
                <span className="s-2"> </span>
                <span className="s-3"> </span>
              </button>
            </Box>
            <Box className="overlay-content">
              <Link className="active" href="/">
                Home <span className="sr-only">(current)</span>
              </Link>
              <Link className="" href="#about">
                About
              </Link>
              <Link className="" href="#why">
                Why Us{" "}
              </Link>
              <Link className="" href="#team">
                Our Team
              </Link>
              <Link className="" href="#testimonial">
                Testimonial
              </Link>
              <Link className="" href="#">
                Contact Us
              </Link>
            </Box>
          </Box>
          <Link className="navbar-brand" href="/">
            <span>
                <Typography variant="h5" className="text-main font-semibold">
                    Storytime Preschool
                </Typography>
            </span>
          </Link>
          <Box className="user_option">
            <Link href="/login">
              <span><Icon path={mdiAccountChildCircle} size={1.6} className="text-main" /></span>
              <i className="fa fa-user" aria-hidden="true"></i>
            </Link>
            <form className="form-inline">
              <button className="btn nav_search-btn" type="submit">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
          </Box>
        </nav>
      </Box>
    </header>
  );
};
