import React from "react";
import { PackageProps } from "../app/types";

interface PackageItemProps {
  item: PackageProps;
  selectedPackage: PackageProps | null;
  onClickPackage: (packageData: PackageProps) => void;
}
const Package: React.FC<PackageItemProps> = ({
  item,
  selectedPackage,
  onClickPackage,
}) => {
  return (
    <div
      className="bg-gray-900 py-4 px-8 flex flex-col justify-center items-center rounded-lg "
      style={{
        border:
          selectedPackage?.type === item?.type
            ? "solid oklch(72.3% 0.219 149.579)"
            : undefined,
      }}
      onClick={() => onClickPackage(item)}
    >
      <div
        className={`flex flex-col relative items-center border w-fit p-3  rounded-2xl max-w-[320px]`}
        style={{ borderColor: item.color }}
      >
        <span
          className={`absolute -top-6 bg-gray-900 text-xl  px-3 mt-3 text-center`}
          style={{ color: item.color }}
        >
          {item?.title}
        </span>
        <div className="flex flex-col py-2 px-3 gap-2">
          <span className="text-white text-lg border-b border-neutral-500 text-center font-medium">
            {item?.month} САР - {item?.price} ТӨГРӨГ
          </span>
          <div className="flex flex-col items-center justify-center text-center">
            <span className="text-neutral-400 text-sm">
              {item?.description}
            </span>
            {item?.plusDescription && (
              <div className="flex items-center gap-0 justify-center flex-col">
                <span className="text-neutral-400 text-lg">+</span>
                <span className="text-neutral-400 text-sm text-center">
                  {item?.plusDescription}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
