// Разрешаем только цифры и управляющие клавиши
export const handlePhoneKeyPress = (e: KeyboardEvent) => {
  const allowedKeys = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'Backspace',
    'Delete',
    'Tab',
    'ArrowLeft',
    'ArrowRight',
    'ArrowUp',
    'ArrowDown',
    'Home',
    'End',
  ]

  if (!allowedKeys.includes(e.key)) {
    e.preventDefault()
    return false
  }

  return true
}

// Проверка на HTML-теги
export const hasHtmlTags = (text: string): boolean => {
  return /<[^>]*>/g.test(text)
}

// Очистка от HTML-тегов
export const sanitizeInput = (text: string): string => {
  return text.replace(/<[^>]*>/g, '')
}


// Очистка и форматирование телефона
export const processPhoneInput = (input: string): string => {
  let cleanPhone = input.replace(/\D/g, '')

  if (cleanPhone.startsWith('7')) {
    cleanPhone = cleanPhone.substring(1)
  }

  if (cleanPhone.length > 10) {
    cleanPhone = cleanPhone.substring(0, 10)
  }

  return cleanPhone
}

// Форматирование телефона
export const formatPhone = (phone: string): string => {
  const cleanPhone = phone.replace(/\D/g, '')

  if (!cleanPhone) return ''

  let formatted = ''
  if (cleanPhone.length > 0) formatted = `(${cleanPhone.substring(0, 3)}`
  if (cleanPhone.length > 3) formatted += `) ${cleanPhone.substring(3, 6)}`
  if (cleanPhone.length > 6) formatted += `-${cleanPhone.substring(6, 8)}`
  if (cleanPhone.length > 8) formatted += `-${cleanPhone.substring(8, 10)}`

  return formatted
}
