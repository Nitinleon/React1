import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      // sx={{
      //   backgroundColor: (theme) =>
      //     theme.palette.mode === "light"
      //       ? theme.palette.grey[200]
      //       : theme.palette.grey[800],
      //   p: 6,
      // }}
      sx={{
        backgroundColor: "#000000", // Set the background color to black
        p: 6,
        color: "#ffffff", // Set the text color to white
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="white">
              {/* We are XYZ company, dedicated to providing the best service to our
              customers. */}
              
          <ul>
         <li>Home</li>
         <li>Manage Events</li>
       <li>Faqs</li>
        
        </ul>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
              Event management
            </Typography>
            <Typography variant="body2" color="white">
              {/* We are XYZ company, dedicated to providing the best service to our
              customers. */}
              <ul>
           <li>Enjoy the raid</li>
<li>Conducting events</li>
<li>NGO's</li>
</ul>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
             Account & Policies
             </Typography>
             <Typography  variant="body2" color="white">
            <ul>

<li>Create an account</li>
<li>Sign in</li>
<li>Contact us</li>
<li>Privacy Statement</li>
<li>Legal</li>
<li>CA Supply Chain Transparency Act</li>
<li>Modern Slavery Act</li>
<li>Accessibility</li>
<li>Cookies Notice</li>
<li>AdChoices</li>
</ul>
            </Typography>
            <Typography variant="body2" color="white">
              15,Paul's street,Chennai.
            </Typography>
            <Typography variant="body2" color="white">
              Email: info@example.com
            </Typography>
            <Typography variant="body2" color="white">
              Phone:+91 9655478666
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="white" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}