import {
  Button,
} from "@chakra-ui/react";
import { useContext } from "react";
import { Context } from "../../../context/context";
import { ApiWrapper } from "../../../utils/api/apiWrapper";

const ButtonsList = ({username, password, setInvalidUser, ...props}) => {

  const {
    setUser,
    history,
    NetComLib
  } = useContext(Context);

  const login = () => ApiWrapper(NetComLib.Authorization.login(
    { 
      username: username, 
      password: password 
    }, 
    (response) => {
      setUser(response.data.user);
      localStorage.setItem('user', JSON.stringify(response.data?.user))
      history('/');
    },  
    (error) => {
      if(error.response.status === 401) { setInvalidUser(true) }
    }
  ), ``, '', false, false);

  return (
    <>
      <Button
        borderRadius={3}
        variant="solid"
        color={'white'}
        bg={'orange.400'}
        width="full"
        onClick={ () => login()}
        {...props}
      >
        Login
      </Button>
      <Button
        borderRadius={3}
        onClick={() => history(-1)}
        variant="solid"
        bg={'gray.200'}
        color={'gray.300'}
        width="full"
        _hover={{ bg: 'gray.300', color: 'gray.400'}}
        {...props}
      >
        Cancel
      </Button>
    </>
  )
}

export default ButtonsList;