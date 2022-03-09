import { Image } from "@chakra-ui/react";

const Logo = ({...props}) => {
  return (
    <Image {...props} src={'/logo_game_shop.png'} h={100}/>
  );
}

export default Logo;