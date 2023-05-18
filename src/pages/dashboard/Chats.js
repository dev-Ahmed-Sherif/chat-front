import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import {
  ArchiveBox,
  CircleDashed,
  MagnifyingGlass,
  Users,
} from "phosphor-react";
import { SimpleBarStyle } from "../../components/Scrollbar";
import useResponsive from "../../hooks/useResponsive";
import { useTheme } from "@mui/material/styles";
import { ChatList } from "../../data";

function Chats() {
  const theme = useTheme();
  const [openDialog, setOpenDialog] = useState(false);
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: 320,
        backgroundColor:
          theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background,
        boxShadow: "0px 0px 2px rgba(0,0,0,.25)",
      }}
    >
      <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="h5">Chats</Typography>

          <Stack direction={"row"} alignItems="center" spacing={1}>
            <IconButton
              onClick={() => {
                handleOpenDialog();
              }}
              sx={{ width: "max-content" }}
            >
              <Users />
            </IconButton>
            <IconButton sx={{ width: "max-content" }}>
              <CircleDashed />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Chats;
