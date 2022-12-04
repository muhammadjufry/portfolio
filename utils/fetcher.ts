import { projectsData } from "../types";

const fetcher = async () => {
  const res = await fetch("/api/projects", { cache: 'force-cache' });
  const data: projectsData[] = await res.json();
  return data;
}

export default fetcher