import React from "react";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "15px",
};

export default function OrderButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const StyledButton = styled(Button)`
    background-color: #f2a22c;
    color: #fff;
    padding: 6px 12px;
    &:hover {
      background-color: #a37026;
    }
    &:focus {
      background-color: #a83e14;
    }
  `;

  return (
    <div>
      <StyledButton
        variant="contained"
        onClick={handleOpen}
        sx={{
          backgroundColor: "#f2a22c",
          minWidth: "20rem",
          padding: ".65rem",
          borderRadius: 3,
          fontWeight: "bold",
        }}
      >
        Order Now
      </StyledButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign="center"
          >
            Sorry...
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            textAlign="center"
          >
            We sold out!
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
