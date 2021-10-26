  const NAME = 'Владислав';
  const FAMILY = 'Городецкий';
  const DATE_OF_BIRTH = new Date(1979, 11, 26);
  let   age = Math.floor((new Date() - DATE_OF_BIRTH)/(1000 * 3600 * 24 * 365.25));
  let   height = 
  
  console.log('Имя: ' + NAME + '\n',
              'Фамилия: ' + FAMILY + '\n',
              'Дата рождения: ' + DATE_OF_BIRTH.getDate() + '.' + DATE_OF_BIRTH.getMonth() + '.' + DATE_OF_BIRTH.getFullYear() + '\n',
              'Возраст: ' + age)
