import WAValidator from 'multicoin-address-validator';

const isValid = WAValidator.validate('0xaddress', 'ETH');
console.log(isValid);

export function setupCounter(element) {
    let counter = 0
    const setCounter = (count) => {
      counter = count
      element.innerHTML = `count is ${counter}`
    }
    element.addEventListener('click', () => setCounter(++counter))
    setCounter(0)
  }
  