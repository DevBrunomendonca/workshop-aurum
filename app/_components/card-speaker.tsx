import { Clock } from "lucide-react";
import Image from "next/image";
import { modaniBold } from "../fonts";

interface CardSpeakerProps {
  srcProfile: string;
  dataCard: string;
  timeCard: string;
  timeCardTwo?: string
  nameProfile: string;
  description: string;
}

const CardSpeaker = ({
  srcProfile,
  dataCard,
  timeCard,
  timeCardTwo,
  nameProfile,
  description,
}: CardSpeakerProps) => {
  return (
    <div className="flex w-full items-center max-w-[280px] mx-auto flex-col space-y-2 md:items-start">
      <div className="rounded-2xl border-[1px] border-[#F3E902] p-3">
        <Image
          src={srcProfile}
          alt={`Icone Perfil ${nameProfile}`}
          height={144}
          width={144}
          className="w-full "
        />
      </div>
      <h3 className={`${modaniBold.className} text-lg text-[#F3E902]`}>
        {dataCard}
      </h3>
      <div className="flex items-center gap-1">
        <Clock color="#ffffff" size={16} />
        <span className="text-sm text-white">{`${timeCard}`}</span>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-sm text-white">{timeCardTwo}</span>
      </div>
      <h4 className={`${modaniBold.className} text-center text-base text-white md:text-start`}>
        {nameProfile}
      </h4>
      <p className="text-base text-center text-white text-opacity-50 md:text-start">{description}</p>
    </div>
  );
};

export default CardSpeaker;
