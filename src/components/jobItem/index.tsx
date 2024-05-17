import Button from "@mui/material/Button";
import React from "react";
import { Job } from "../../types/base";
import { Wrapper } from "./styles";
import JobModal from "../jobModal";

type Props = {
  item: Job;
};

const Item: React.FC<Props> = ({ item }) => (
  <Wrapper>
    <div className="jobInfo">
      <img src={item.logo} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <JobModal
          item={item}
          trigger={(open) => (
            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={() => open()}
            >
              View Job
            </Button>
          )}
        />
      </div>
    </div>
  </Wrapper>
);

export default Item;
