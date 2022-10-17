import Image from "next/image";

export default function Skills({ img }) {
  return (
    <>
      <div>
        <Image src={img} width={100} height={100} />
      </div>
    </>
  );
}
