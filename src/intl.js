/* eslint-disable import/first */
/* eslint-disable no-param-reassign */
import { addLocaleData } from 'react-intl'

import enLocaleData from 'react-intl/locale-data/en'
import enMessages from './translations/en'

import frLocaleData from 'react-intl/locale-data/fr'
import frMessages from './translations/fr'

const supportedLanguages = {
  en: 'English',
  fr: 'Français'
}
const messages = {}

const flattenMessages = (nestedMessages = {}, prefix = '') => {
  return Object.keys(nestedMessages).reduce((flattenedMessages, key) => {
    const value = nestedMessages[key]
    const prefixedKey = prefix ? `${prefix}.${key}` : key

    if (typeof value === 'string') {
      flattenedMessages[prefixedKey] = value
    } else {
      Object.assign(flattenedMessages, flattenMessages(value, prefixedKey))
    }

    return flattenedMessages
  }, {})
}

addLocaleData(enLocaleData)
messages.en = flattenMessages(enMessages)

addLocaleData(frLocaleData)
messages.fr = flattenMessages(frMessages)

export { supportedLanguages, messages }
