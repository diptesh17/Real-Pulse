import React from "react";
import Image from "next/image";

const PropertyHeaderimage = ({ image }) => {
  return (
    <>
      <section>
        <div className="container-xl m-auto">
          <div className="grid grid-cols-1">
            <Image
              // src={`images/properties/${image}`}
              src={`/images/properties/${image}`}
              alt=""
              className="object-cover h-[400px] w-full"
              width={0}
              height={0}
              sizes="100vw"
              priority={true}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyHeaderimage;
