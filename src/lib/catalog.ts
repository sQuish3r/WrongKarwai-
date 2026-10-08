export const categoryLabels = {
  slime: 'СЛИЗЬ И ВЫДЕЛЕНИЯ',
  biotech: 'БИОТЕХ',
  gear: 'СНАРЯЖЕНИЕ',
  food: 'ПРОВИАНТ',
  souvenir: 'СУВЕНИРЫ',
  synthetic: 'СИНТЕТИКИ',
} as const;

export const hazardLabels = ['', 'БЕЗОПАСНО*', 'ТЕРПИМО', 'НЕПРИЯТНО', 'СМЕРТЕЛЬНО', 'ЭВАКУАЦИЯ СЕКТОРА'];

export const formatPrice = (n: number) => `₡ ${n.toLocaleString('ru-RU')}`;

/** Ссылка с учётом base (нужно для GitHub Pages). */
export const url = (path = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
