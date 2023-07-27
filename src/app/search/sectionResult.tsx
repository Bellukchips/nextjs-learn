import Link from "next/link";
import React from "react";
import useSWR from "swr";
import ListItemSearch from "../components/ListItemSearch";

interface Props {
  query: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function SectionResult({ query }: Props) {
  const { data, error } = useSWR(
    "https://api.github.com/search/users?q=" + query,
    fetcher
  );
  let loading = !data && !error;
  return (
    <div style={{ marginTop: "20px" }}>
      <p className="text-lg font-bold">Hasil Pencarian : {query}</p>
      {loading && "Tunggu...."}
      {data &&
        data.items.map((user: any, index: number) => {
          return (
            <ListItemSearch
              key={index}
              img={user.avatar_url}
              name={user.login}
              url={user.repos_url}
            />
          );
        })}
    </div>
  );
}
