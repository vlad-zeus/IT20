  const NAME = 'Владислав';
  const FAMILY = 'Городецкий';
  const DATE_OF_BIRTH = new Date(1979, 11, 26);
  let   AGE = Math.Date((new Date()) - DATE_OF_BIRTH);
  
  console.log('Имя: ' + NAME + '\n',
              'Фамилия: ' + FAMILY + '\n',
              'Дата рождения: ' + DATE_OF_BIRTH.getDate() + '.' + DATE_OF_BIRTH.getMonth() + '.' + DATE_OF_BIRTH.getFullYear() + '\n');
              'Возраст: ' + AGE; 
