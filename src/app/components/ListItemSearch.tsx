import Link from "next/link";
import Image from "next/image";
interface Props {
  name: string;
  img: string;
  url: string;
}
const ListItemSearch = ({ name, img, url }: Props) => {
  return (
    <div className="inline-flex w-full">
      <Image src={img} width={100} height={100} alt={"img"} className="rounded-md mr-10" />
      <ul>
        <li>
          <Link href={`/search/${name}`}>{name}</Link>
        </li>
        <li>
          <Link href={url}>Repository</Link>
        </li>
      </ul>
    </div>
  );
};

export default ListItemSearch;
