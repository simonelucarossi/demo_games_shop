import CentralContainer from "../CentralContainer/centralContainer";
import { useContext } from "react";
import { Context } from "../../context/context";
import { TailSpin } from "react-loader-spinner";


const LoaderSpinner = () => {
  const {
    promiseInProgress
  } = useContext(Context);

  return(
    <>
      {
          <CentralContainer 
            backgroundColor={'black'} 
            zIndex={'9999'}
            position={'fixed'}
            top={0}
            left={0}
            width={'100vw'}
            height={'100vh'}
            opacity={'0.7'}
            display={promiseInProgress ? 'flex' : 'none'}
          >
            <TailSpin
              height="150"
              width="150"
              color='red'
              ariaLabel='loading'
            />
          </CentralContainer>
      }
    </>
  )
};
export default LoaderSpinner;