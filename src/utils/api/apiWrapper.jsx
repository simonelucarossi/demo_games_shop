export const ApiWrapper = (apiFunction, toast, successMessage, errorMessage, sendSuccessMessage = true, sendErrorMessage = true) => {

  // toast alerts
  const toastSuccessMessage = {
    title: `Operation Success`,
    description: successMessage ?? "Operation completed!",
    status: 'success',
    duration: 9000,
    isClosable: true,
    position: 'top-left',
  };
  const toastErrorMessage = {
    title: `Operation Failed`,
    description: errorMessage ?? "Generic Error",
    status: 'error',
    duration: 9000,
    isClosable: true,
    position: 'top-left',
  }


  try {
    apiFunction();
    if(sendSuccessMessage) {
      toast(toastSuccessMessage);
    }
  } catch (error) {
    if(sendErrorMessage) {
      console.info(error);
      toast(toastErrorMessage);
    }
  }
};