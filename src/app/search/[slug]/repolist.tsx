import React from "react";
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
              <ul key={rep.id}>
                <li>{rep.name}</li>
              </ul>
            );
          })}
      </div>
    </>
  );
};

export default RepoList;
