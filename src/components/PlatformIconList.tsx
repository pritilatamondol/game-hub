import { FaWindows, FaPlaystation,FaXbox, FaApple, FaLinux, FaAndroid} from'react-icons/fa'
import { MdPhoneIphone} from 'react-icons/md'
import { SiNintendo } from 'react-icons/si';

import {BsGlobe } from 'react-icons/bs'
import { HStack, Icon, Text} from '@chakra-ui/react';
import { Platform } from '../hooks/useGames';
import { IconType } from 'react-icons';

type Props ={
    platforms: Platform[],
}
function PlatformIconList( {platforms} : Props) {
const iconMap: { [key: string] : IconType}= {
    pc: FaWindows,
    playStation: FaPlaystation,
    linux: FaLinux,
    android: FaAndroid,
    web: BsGlobe,
    xbox: FaXbox,
    mac: FaApple,
    nintendo: SiNintendo

}

  return (
    <HStack marginY='1'>
      { platforms.map( platform=> (
        <Icon key={platform.id} color='gray-500' as={ iconMap[platform.slug] } />)) 
      }
    </HStack>
  )
}

export default PlatformIconList
