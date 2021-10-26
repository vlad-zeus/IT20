  const NAME = 'Владислав';
  const SURNAME = 'Городецкий';
  const DATE_OF_BIRTH = new Date(1979, 11, 26);
  let   age = Math.floor((new Date() - DATE_OF_BIRTH)/(1000 * 3600 * 24 * 365.25));
  let   height = '181 см';
  let   weight = '129 кг';
  const COLOR_OF_EYES = 'зеленый';
  let   color_of_hair = 'седой';
  let   family_status = 'женат'
  let   child = '1';
  let   animals = 'кошка';
  let   profession = 'системный администратор, DBA';
  let   favorite_music_style = 'power metal, trash metal, industrial, darkwave';
  let   favorite_sport = 'силовой тренинг - для себя, Formula1, снукер - посмотреть';
  let   hobby = 'почитать книгу';

  
  console.log('Имя: ' + NAME + '\',
'Фамилия: ' + SURNAME + '\n',
              'Дата рождения: ' + DATE_OF_BIRTH.getDate() + '.' + DATE_OF_BIRTH.getMonth() + '.' + DATE_OF_BIRTH.getFullYear() + '\n',
              'Возраст: ' + age + '\n',
              'Рост: ' + height + '\n',
              'Вест: ' + weight + '\n',
              'Цвет глаз: ' + COLOR_OF_EYES + '\n',
              'Цвет волос: ' + color_of_hair + '\n',
              'Семейное положение: ' + family_status + '\n',
              'Дети: ' + child + '\n',
              'Животные: ' + animals + '\n',
              'Профессия: ' + profession + '\n',
              'Музыкальные предпочтения: ' + favorite_music_style + '\n',
              'Спорт: ' + favorite_sport + '\n',
              'Хобби: ' + hobby + '\n')