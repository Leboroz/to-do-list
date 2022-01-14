const checkHandler = (e, input) => {
  //* if checkbox is checked input is disabled
  if (e.target.checked) input.setAttribute('disabled', 'true');
  //* if checkbox is not checked input is enabled
  else if (!e.target.checked) input.removeAttribute('disabled');
};
export default checkHandler;
