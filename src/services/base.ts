import { Job } from "../types/base";

// Yeah, I know axios is a thing
export const getJobs = async (): Promise<Job[]> =>
  await (
    await fetch("https://6300ff309a1035c7f8fc2586.mockapi.io/jobposts")
  ).json();
