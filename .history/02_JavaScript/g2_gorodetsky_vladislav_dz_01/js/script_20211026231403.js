  const NAME = 'Владислав';
  const SURNAME = 'Городецкий';
  const DATE_OF_BIRTH = new Date(1979, 11, 26);
  let   age = Math.floor((new Date() - DATE_OF_BIRTH)/(1000 * 3600 * 24 * 365.25));
  let   height = '181 см';
  let   weight = '129 кг';
  const COLOR_OF_EYES = 'зеленый';
  let   color_of_hair = 'седой';
  let   child = '1';
  let   animals = 'кошка';

  
  console.log('Имя: ' + NAME + '\n',
              'Фамилия: ' + FAMILY + '\n',
              'Дата рождения: ' + DATE_OF_BIRTH.getDate() + '.' + DATE_OF_BIRTH.getMonth() + '.' + DATE_OF_BIRTH.getFullYear() + '\n',
              'Возраст: ' + age)
