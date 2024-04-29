import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function formatDate(date: string, dateFormat: string) {
  return format(new Date(date), dateFormat, {
    locale: ptBR,
  })
}
