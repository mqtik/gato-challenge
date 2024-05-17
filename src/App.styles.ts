import { TextField, TextFieldProps } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 20px 90px 20px 10px;

  svg {
    position: fixed;
    top: 20px;
    right: 26px;
  }
`;

export const SearchBar = styled(TextField)<TextFieldProps>(() => ({
  "& .Mui-InputBase, & .MuiInputBase-input-MuiOutlinedInput-input": {
    fontWeight: "bold",
    fontSize: "22px",
    background: "#c9c9c9",
    color: "#fff",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#555",
  },
  "& input, & .MuiFormLabel-root-MuiInputLabel-root": {
    color: "#fff",
  },
  "& .MuiInputLabel-shrink": {
    color: "#e5f68c",
  },
}));
