import Link from "next/link";
import React, { Suspense } from "react";
import RepoList from "./repolist";

async function getData(slug: string) {
  const rest = await fetch(`https://api.github.com/users/${slug}`);
  return rest.json();
}

export default async function DeatailCari({
  params,
}: {
  params: { slug: string };
}) {
  // parallize
  const data = await getData(params.slug);

  return (
    <div>
      <p>Datail user : {params.slug}</p>
      <div>
        {JSON.stringify(data)}
        <ul>
          <li>{data.login}</li>
          <li>
            <Link href={data.html_url} target="blank">
              Github
            </Link>
          </li>
        </ul>
        {/* Squential */}
        <Suspense fallback={<div>Loading...</div>}>
          <RepoList repos={params.slug} />
        </Suspense>
      </div>
    </div>
  );
}
