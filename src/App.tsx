import LinearProgress from "@mui/material/LinearProgress";
import Grid from "@mui/material/Grid";
import { SearchBar, Wrapper } from "./App.styles";
import type { Job } from "./types/base";
import JobItem from "./components/jobItem";
import { getJobs } from "./services/base";
import { useQuery } from "react-query";
import { Typography } from "@mui/material";
import Logo from "./components/logo";
import { useMemo, useState } from "react";

const App = () => {
  const [searchValue, setSearchValue] = useState<string>();
  const {
    data: jobList,
    isLoading: isLoadingJobs,
    error: errorJobs,
  } = useQuery<Job[]>("jobs", getJobs);

  const filteredJobs = useMemo(() => {
    if (searchValue) {
      return jobList?.filter((x) =>
        Object.values(x)
          .join(" ")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );
    }
    return jobList;
  }, [jobList, searchValue]);

  if (isLoadingJobs) return <LinearProgress />;
  if (errorJobs)
    return (
      <Typography>Alright, something went wrong. Mind refreshing?</Typography>
    );

  return (
    <Wrapper>
      <Logo />
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          <SearchBar
            fullWidth
            label="Search"
            id="search"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSearchValue(event.target.value);
            }}
          />
        </Grid>
        {filteredJobs?.map((item) => (
          <Grid item key={item.id} xs={12} sm={12}>
            <JobItem item={item} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
