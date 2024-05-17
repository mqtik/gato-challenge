import React, { ReactNode, useState } from "react";
import { Job } from "../../types/base";
import { Wrapper, modalContentBox } from "./styles";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";

type Props = {
  item: Job;
  trigger?: (open: () => void) => ReactNode;
};

const JobModal: React.FC<Props> = ({ item, trigger }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      {trigger?.(openModal)}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Wrapper>
          <Box sx={modalContentBox}>
            <div className="title">
              <Typography>{item.title}</Typography>
              <IconButton onClick={() => setModalOpen(false)}>
                <Close style={{ color: "#fff" }} />
              </IconButton>
            </div>
            <Box sx={{ overflow: "auto", maxHeight: 400, padding: 2 }}>
              {item.details}
            </Box>
          </Box>
        </Wrapper>
      </Modal>
    </>
  );
};

export default JobModal;
