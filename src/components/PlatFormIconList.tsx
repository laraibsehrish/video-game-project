import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";

import {MdPhoneIphone} from 'react-icons/md'
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";

import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platfroms: Platform[];
}
const PlatFormIconList = ({ platfroms }: Props) => {
    const iconMap : {[key: string]:IconType}={
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        mac: FaApple,
        linux: FaLinux,
        nintendo: SiNintendo,
        web: BsGlobe,
        ios: MdPhoneIphone,
        
        android: FaAndroid
    }
  return (
    <HStack marginY={1 }>
      {platfroms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color={"gray.500"} key={platform.id} />
      ))}
    </HStack>
  );
};

export default PlatFormIconList;
