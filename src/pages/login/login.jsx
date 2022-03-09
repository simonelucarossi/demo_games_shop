import { useState } from "react";
import CentralContainer from "../../components/CentralContainer/centralContainer";
import Logo from "./components/logo";
import FormContainer from "../../components/formContainer/formContainer";
import InputsList from "./components/inputs";
import ButtonsList from "./components/buttons";


const Login = ({ ...props}) => {
  const [username, setUsername] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [invalidUser, setInvalidUser] = useState(false);

  return (
    <CentralContainer {...props}>
      {/* FORM HEADER */}
      <Logo/>
      {/* FORM BODY */}
      <FormContainer>
        {/* MIDDLE PART  */}
        <InputsList 
          password={password} 
          setPassword={setPassword} 
          username={username} 
          setUsername={setUsername} 
          invalidUser={invalidUser} 
          setInvalidUser={setInvalidUser}
        />
        {/* BOTTOM PART */}
        <ButtonsList 
          password={password}  
          username={username} 
          setInvalidUser={setInvalidUser}
        />
      </FormContainer>
    </CentralContainer>
  );
};

export default Login;
