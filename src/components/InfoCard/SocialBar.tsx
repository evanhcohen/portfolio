import React from "react";
import "./InfoCard.css";
import { Box, IconButton, Tooltip } from "@mui/material";
import { LinkedIn, Email, GitHub } from "@mui/icons-material";

const SocialBar = () => {
	const socials = [
    {
      name: "LinkedIn",
      src: "https://www.linkedin.com/in/evancohen/",
      icon: <LinkedIn />,
    },
    {
      name: "Email",
      src: "mailto:evcohen@umich.edu",
      icon: <Email />,
    },
    {
      name: "GitHub",
      src: "https://github.com/evanhcohen",
      icon: <GitHub />,
    },
  ];

	return (
    <Box display={"flex"} justifyContent="space-evenly" alignItems="center">
      {socials.map((social) => (
        <Tooltip title={social.name}>
          <IconButton
            aria-label={social.name}
            href={social.src}
            className="SocialButton"
          >
            {social.icon}
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  );
};

export default SocialBar;
