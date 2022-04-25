import React from "react";
import Button from "@mui/material/Button";

export default function OrderButton() {
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#f2a22c",
          minWidth: "20rem",
          padding: ".65rem",
          borderRadius: 3,
          fontWeight: "bold",
        }}
      >
        Order Now
      </Button>
    </div>
  );
}
