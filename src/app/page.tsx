"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Package from "../components/Package";
import data from "../lib/constant";
import { PackageProps } from "./types";

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState<PackageProps | null>(
    null
  );

  const onClickPackage = (packageData: PackageProps) => {
    setSelectedPackage(packageData);
  };

  return (
    <div className="flex flex-col bg-black px-6 py-8 gap-4 mx-auto w-fit">
      {data.map((item: PackageProps, index: number) => (
        <Package
          key={index}
          item={item}
          selectedPackage={selectedPackage}
          onClickPackage={onClickPackage}
        />
      ))}
      <Dialog>
        <DialogTrigger asChild>
          <button className="bg-gray-800 mt-4 p-4 rounded-lg font-semibold text-white">
            Төлөх
          </button>
        </DialogTrigger>
        <DialogContent
          className="sm:max-w-[425px] bg-gray-900"
          showCloseButton={true}
          iconClassName="text-white"
        >
          <DialogHeader className="flex flex-col items-start">
            <DialogTitle
              className="
            text-neutral-300"
            >
              Бүртгэлтэй хаяг оруулах
            </DialogTitle>
            <DialogDescription className="text-left text-neutral-400 mt-3">
              Анхааруулга : Оруулсан цахим хаяг заавал ORI дээр бүртгэлтэй хаяг
              байна.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 mt-2">
            <span className="text-white font-medium">Цахим хаяг</span>
            <Input
              id="name-1"
              name="name"
              placeholder="oristudio@gmail.com"
              className="placeholder:text-neutral-400 text-white"
            />
          </div>
          <DialogFooter className="flex flex-row justify-end gap-3">
            <DialogClose asChild>
              <button className="px-5 py-3 rounded-lg font-semibold text-gray-400 border border-gray-900">
                Хаах
              </button>
            </DialogClose>
            <DialogClose asChild>
              <button className="px-5 py-3 rounded-lg font-semibold bg-gray-800 text-white">
                Оруулах
              </button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
