import Image from "next/image";

import gold from "../../../assets/gold.svg";
import silver from "../../../assets/silver.svg";
import cooper from "../../../assets/cooper.svg";

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="font-heading text-gray-200 font-semibold text-xl leading-none">
        Ranking de indicações
      </h2>
      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1</span> | Guilherme Lima
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>
          <Image className="absolute right-8 top-0" src={gold} alt="" />
        </div>
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2</span> | Guilherme Lima
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>

          <Image className="absolute right-8 top-0" src={silver} alt="" />
        </div>
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3</span> | Guilherme Lima
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>

          <Image className="absolute right-8 top-0" src={cooper} alt="" />
        </div>
      </div>
    </div>
  );
}
