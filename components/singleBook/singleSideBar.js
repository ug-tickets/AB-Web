import React from "react";
import Image from "next/image";
import Link from "next/link";

const SingleSideBar = ({ crossSales }) => {
  if (!crossSales) return null;
  if (crossSales.length > 0)
    return (
      <div className="pl-10 py-0 font-light">
        <div className="hidden md:block leading-10 text-xs">
          <div className="font-semibold uppercase">Readers also enjoyed</div>
          {crossSales.map((bk, indx) => {
            if (indx < 4) {
              return (
                <Link href={`/book/${bk.bookId}`}>
                  <div
                    key={indx}
                    className="flex mb-3 text-[10px] cursor-pointer"
                  >
                    <div className="w-[90px] h-[120px] border mr-2 overflow-hidden">
                      <Image src={bk.imgUrl} height="140px" width="100px" />
                    </div>
                    <div className="flex-1 leading-5 pt-1">
                      <div className="font-bold">{bk.title}</div>
                      <div>{bk.author}</div>
                      <div>{`${bk.rating && bk.rating > 0 && bk.rating}`}</div>
                      <div className="font-semibold text-[#257BC7]">
                        {bk.price}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            }
          })}
        </div>
      </div>
    );
};

export { SingleSideBar };
