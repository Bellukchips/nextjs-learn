import React from "react";
import Image from "next/image";

async function getDataRepos(slug: string) {
  const rest = await fetch(`https://api.github.com/users/${slug}/repos`);
  // add delay
  await new Promise((r) => setTimeout(r, 2000));
  return rest.json();
}

const RepoList = async ({ repos }: any) => {
  const dataRepos = await getDataRepos(repos);

  return (
    <>
      <p>Repository List</p>
      <div>
        {dataRepos &&
          dataRepos.map((rep: any, index: number) => {
            return (
              <div key={rep.id} className="inline-flex w-full">
                <Image
                  src={rep.owner.avatar_url}
                  width={100}
                  height={100}
                  alt={"img"}
                  className="rounded-md mr-10"
                />
                <ul>
                  <li className="font-bold">{rep.name}</li>
                </ul>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default RepoList;
