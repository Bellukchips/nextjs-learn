import Link from "next/link";
import React from "react";
import useSWR from "swr";

interface Props {
  query: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function SectionResult({ query }: Props) {
  const { data, error } = useSWR(
    "https://api.github.com/search/users?q=" + query,
    fetcher
  );
  var loading = !data && !error;
  return (
    <div style={{ marginTop: "20px" }}>
      <p>Hasil Pencarian : {query}</p>
      {loading && "Tunggu...."}
      {data &&
        data.items.map((user: any, index: number) => {
          return (
            <ul key={index}>
              <li>
                <Link href={`/search/${user.login}`}>{user.login}</Link>
              </li>
              <li>
                <Link href={user.repos_url}>Repository</Link>
              </li>
            </ul>
          );
        })}
    </div>
  );
}
