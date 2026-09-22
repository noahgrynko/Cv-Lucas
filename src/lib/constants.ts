// Real, verified information only. Nothing in this file may be invented —
// see project README for the source-of-truth rule.

export const PERSON = {
  name: 'Lucas Arnoult',
  firstName: 'Lucas',
  lastName: 'Arnoult',
  formation: 'Seconde MTNE',
  address: '6 Hameau Parc Er Mare',
  phoneDisplay: '07 70 25 05 03',
  phoneHref: 'tel:0770250503',
  email: 'lucasarnoult1@gmail.com',
  emailHref: 'mailto:lucasarnoult1@gmail.com',
  goal: 'Stage en cybersécurité',
} as const

export const INTERESTS = [
  { key: 'cyber', label: 'Cybersécurité' },
  { key: 'programming', label: 'Programmation' },
  { key: 'it', label: 'Informatique' },
  { key: 'gaming', label: 'Jeux vidéo' },
  { key: 'tech', label: 'Nouvelles technologies' },
  { key: 'travel', label: 'Voyage' },
] as const

// From Lucas's own CV.
export const LANGUAGES = [
  { label: 'Anglais', level: 'LV1' },
  { label: 'Espagnol', level: 'LV2' },
] as const

export const CERTIFICATIONS = ['Pix', 'Brevet', 'ASSR 1 & 2'] as const

export const PAST_EXPERIENCE = [
  { label: "Stage d'observation", field: 'Cybersécurité' },
  { label: "Stage d'observation", field: 'Menuiserie' },
] as const

export const QUALITIES = ['CURIOUS', 'SERIOUS', 'MOTIVATED', 'LEARNING'] as const

export const MISSION_STEPS = [
  { index: '01', label: 'DISCOVER', word: 'Découvrir' },
  { index: '02', label: 'LEARN', word: 'Apprendre' },
  { index: '03', label: 'PRACTICE', word: 'Pratiquer' },
  { index: '04', label: 'GROW', word: 'Progresser' },
] as const

export const WHY_CYBER_WORDS = [
  'SECURITY',
  'CURIOSITY',
  'TECHNOLOGY',
  'PROBLEM SOLVING',
  'LEARNING',
] as const

export const NAV_LINKS = [
  { href: '#profile', label: 'ABOUT' },
  { href: '#interests', label: 'INTERESTS' },
  { href: '#mission', label: 'MISSION' },
  { href: '#contact', label: 'CONTACT' },
] as const

export const CV_PATH = './assets/CV-Lucas-Arnoult.pdf'
