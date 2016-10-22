import ScholarshipFoundation from 'containers/ScholarshipFoundation'
import FAQ from 'containers/FAQ'

export const routes = [
  {
    exactly: true,
    pattern: '/scholarship-foundation',
    component: ScholarshipFoundation,
  },{
    exactly: true,
    pattern: '/faq',
    component: FAQ,
  }
]

export const links = [
  {
    to: '/scholarship-foundation',
    text: 'Scholarship Foundation',
  },{
    to: '/faq',
    text: 'FAQ',
  }
]