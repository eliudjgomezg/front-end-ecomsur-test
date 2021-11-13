const locale = 'en'
const options = { style: 'currency', currency: 'CLP', maximumFractionDigits: 2 }

export const formatNum = (num: number) => {
  return Intl.NumberFormat(locale, options).format(num)
}
