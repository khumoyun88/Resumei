import React from "react";
import Image from "next/image";

export default function ImageOfMyself() {
  return <div>
<Image src={'/resumei_pic.jpg'}
alt="image of person"
width={300}
height={300}
 />
  </div>;
}
