const NUMBER_SYMBOLS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

  // Handle binary, octal, decimal, hexadecimal
  export function numberToBase(n, base, min_length = 1) {
    if (n === 0) {
      return '0'
    }
    let output = ''
    while(n != 0) {
      const offset = n % base
      output = NUMBER_SYMBOLS.charAt(offset) + output
      n = Math.floor(n / base)
    }
    //output = output.rjust(min_length, '0')
    return output
}
