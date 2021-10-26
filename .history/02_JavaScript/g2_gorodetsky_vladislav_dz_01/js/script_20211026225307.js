  const NAME = 'Владислав';
  const FAMILY = 'Городецкий';
  const DATE_OF_BIRTH = new Date(1979, 11, 26);
  let   age = Math.abs((new Date()) - DATE_OF_BIRTH);
  let   now_time = moment().format('YYYY MMMM DD');
  
  console.log('Имя: ' + NAME + '\n',
              now_time,
              'Фамилия: ' + FAMILY + '\n',
              'Дата рождения: ' + DATE_OF_BIRTH.getDate() + '.' + DATE_OF_BIRTH.getMonth() + '.' + DATE_OF_BIRTH.getFullYear() + '\n');
              'Возраст: ' + age; 
