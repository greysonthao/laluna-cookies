import React from "react";
import Box from "@mui/material/Box";

export default function Video() {
  return (
    <Box margin="6rem 0 6rem 0" display="flex" justifyContent="center">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/TMFV5LX8TY4"
        title="YouTube video player"
        // eslint-disable-next-line react/no-unknown-property
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        // eslint-disable-next-line react/no-unknown-property
        allowFullScreen
      ></iframe>
    </Box>
  );
}
