// src/constants/horarios.js
//
// Grade de horários do semestre 2026.2, conforme
// `src/assets/tables/Horarios 2026_2.ods`.
//
// Estrutura:
// - DIAS: colunas da tabela, na ordem em que aparecem.
// - GRADE: linhas; em cada linha, `aulas[i]` corresponde a `DIAS[i]`.
//   Use `null` quando não houver aula naquele dia/horário.
//
// Cada aula segue o formato { disciplina, local }. A planilha usa
// "Disciplina – Local"; quando não há separador, o texto vira `disciplina`
// e `local` fica vazio.

export const SEMESTRE = '2026.2'

export const DIAS = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta']

export const GRADE = [
  {
    faixa: '07:00 – 08:00',
    aulas: [{ disciplina: 'Farmacotec I (T)', local: 'PCA 205' }, null, null, null, null],
  },
  {
    faixa: '08:00 – 09:00',
    aulas: [
      { disciplina: 'Farmacotec I (T)', local: 'PCA 205' },
      null,
      null,
      null,
      { disciplina: 'Intro Orgânica', local: 'V 302' },
    ],
  },
  {
    faixa: '09:00 – 10:00',
    aulas: [
      { disciplina: 'Fitoterapia', local: 'PCA 204' },
      { disciplina: 'Extensão', local: 'Lar S.Vincente' },
      null,
      null,
      { disciplina: 'Operações Unitárias', local: 'PCA 301' },
    ],
  },
  {
    faixa: '10:00 – 11:00',
    aulas: [
      { disciplina: 'Fitoterapia', local: 'PCA 204' },
      { disciplina: 'Extensão', local: 'Lar S.Vincente' },
      null,
      null,
      { disciplina: 'Operações Unitárias', local: 'PCA 301' },
    ],
  },
  {
    faixa: '11:00 – 12:00',
    aulas: [null, null, { disciplina: 'Terapia', local: 'Casa' }, null, null],
  },
  {
    faixa: '12:00 – 13:00',
    aulas: [null, null, null, null, null],
  },
  {
    faixa: '13:00 – 14:00',
    aulas: [
      { disciplina: 'Estágio', local: 'FarUni' },
      { disciplina: 'Fitoterapia', local: 'V 203' },
      { disciplina: 'Farmacotec I (P)', local: 'D 206' },
      null,
      { disciplina: 'CIFar II', local: 'PCA 203' },
    ],
  },
  {
    faixa: '14:00 – 15:00',
    aulas: [
      { disciplina: 'Estágio', local: 'FarUni' },
      { disciplina: 'Fitoterapia', local: 'V 203' },
      { disciplina: 'Farmacotec I (P)', local: 'D 206' },
      null,
      { disciplina: 'CIFar II', local: 'PCA 203' },
    ],
  },
  {
    faixa: '15:00 – 16:00',
    aulas: [
      { disciplina: 'Estágio', local: 'FarUni' },
      null,
      { disciplina: 'Farmacoepidemio', local: 'PCA 301' },
      null,
      null,
    ],
  },
  {
    faixa: '16:00 – 17:00',
    aulas: [
      { disciplina: 'Estágio', local: 'FarUni' },
      null,
      { disciplina: 'Farmacoepidemio', local: 'PCA 301' },
      null,
      null,
    ],
  },
]
