(function(window, document) {
  let curItem = null;
  const menuButton = document.querySelector('#menu-button');
  const sideMenu = document.querySelector('#side-menu');
  const main = document.querySelector('main');

  menuButton.addEventListener('click', e => {
    sideMenu.classList.toggle('open');
    e.stopPropagation();
  });

  main.addEventListener('click', () => {
    sideMenu.classList.remove('open');
  });

  const dataArray = [
    {
      title: 'Kyiv',
      content: {
        images: [
          {
            path: 'img/kyiv/1.jpg',
            link:
              'https://ru.wikipedia.org/wiki/%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_%D0%97%D0%BB%D0%B0%D1%82%D0%BE%D0%B2%D0%B5%D1%80%D1%85%D0%B8%D0%B9_%D0%BC%D0%BE%D0%BD%D0%B0%D1%81%D1%82%D1%8B%D1%80%D1%8C',
            desc:
              'Миха́йловский Златове́рхий монасты́рь (укр. Михайлівський золотоверхий монастир) — действующий монастырь в Киеве, воссозданный в 1997—1998 годах в формах разрушенного в 1930-х годах соборного храма в честь Архангела Михаила.',
          },
          {
            path: 'img/kyiv/2.jpg',
            link:
              'https://ru.wikipedia.org/wiki/%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_%D0%BA%D0%BE%D1%81%D1%82%D1%91%D0%BB_(%D0%9A%D0%B8%D0%B5%D0%B2)',
            desc:
              'Церковь св. Николая, Дом органной и камерной музыки (укр. Костел Святого Миколая, Будинок органної та камерної музики) — римско-католический костёл Святого Николая в Киеве, используемый с 1980 года в качестве Дома органной и камерной музыки. ',
          },
          {
            path: 'img/kyiv/3.jpg',
            link:
              'https://ru.wikipedia.org/wiki/%D0%90%D0%BD%D0%B4%D1%80%D0%B5%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_%D1%81%D0%BF%D1%83%D1%81%D0%BA',
            desc:
              'Андре́евский спуск (укр. Андріївський узвіз) — один из старинных путей, соединяющих Верхний город, его центральную часть, с торговым Подолом. Пролегает от Контрактовой площади до Десятинной и Владимирской улиц.',
          },
          {
            path: 'img/kyiv/4.jpg',
            link:
              'https://ru.wikipedia.org/wiki/%D0%9D%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BC%D1%83%D0%B7%D1%8B%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%B0%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D0%B8%D1%8F_%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D1%8B_%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8_%D0%9F._%D0%98._%D0%A7%D0%B0%D0%B9%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE',
            desc:
              'Национальная музыкальная академия Украины имени П. И. Чайковского, неофициально — Киевская консерватория, укр. Національна музична академія України імені П. І. Чайковського (Київська консерваторія) — высшее государственное музыкальное учебное заведение Украины IV степени аккредитации.',
          },
          {
            path: 'img/kyiv/5.jpg',
            link:
              'https://ru.wikipedia.org/wiki/%D0%90%D0%BD%D0%B4%D1%80%D0%B5%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D1%86%D0%B5%D1%80%D0%BA%D0%BE%D0%B2%D1%8C_(%D0%9A%D0%B8%D0%B5%D0%B2)',
            desc:
              'Андре́евская це́рковь (укр. Андріївська церква) в Киеве — православный храм в честь апостола Андрея Первозванного; построен в стиле барокко по проекту архитектора Бартоломео Растрелли в 1754 году на Андреевской горе',
          },
          {
            path: 'img/kyiv/6.jpg',
            link:
              'https://ru.wikipedia.org/wiki/%D0%A0%D0%B5%D1%87%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%BA%D0%B7%D0%B0%D0%BB_(%D0%9A%D0%B8%D0%B5%D0%B2)',
            desc:
              'Киевский речной порт и вокзал (укр. Київський Річковий Порт та Вокзал) — бывший главный речной порт Киева, расположенный на правом берегу Днепра на Подоле, исторической части города.',
          },
          {
            path: 'img/kyiv/7.jpg',
            link:
              'https://ru.wikipedia.org/wiki/%D0%9F%D0%B0%D0%BC%D1%8F%D1%82%D0%BD%D0%B8%D0%BA_%D0%91%D0%BE%D0%B3%D0%B4%D0%B0%D0%BD%D1%83_%D0%A5%D0%BC%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D0%BA%D0%BE%D0%BC%D1%83_(%D0%9A%D0%B8%D0%B5%D0%B2)',
            desc:
              'Памятник Богдану Хмельницкому — памятник гетману Украины Богдану Хмельницкому. Торжественно открыт 23 июля (11 июля по старому стилю) 1888 года на Софийской площади в Киеве в рамках празднования 900-летия Крещения Руси. Является одним из символов Киева, произведением искусства XIX века.',
          },
        ],
        text: 'text1',
      },
    },
    {
      title: 'Odesa',
      content: {
        images: [
          {
            path: 'img/odesa/1.jpg',
            link:
              'https://ru.wikipedia.org/wiki/%D0%9B%D1%8E%D1%82%D0%B5%D1%80%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D1%86%D0%B5%D1%80%D0%BA%D0%BE%D0%B2%D1%8C_(%D0%9E%D0%B4%D0%B5%D1%81%D1%81%D0%B0)',
            desc:
              'Кирха Св. Павла — лютеранский кафедральный собор Святого Павла Немецкой Евангелическо-лютеранской Церкви Украины, религиозный центр лютеран Украины немецкой церковной традиции — историческое здание и архитектурный памятник государственного значения, в котором размещается кафедра Епископа всей Церкви Украины.',
          },
          {
            path: 'img/odesa/2.jpg',
            link:
              'https://ru.wikipedia.org/wiki/%D0%9E%D0%B4%D0%B5%D1%81%D1%81%D0%BA%D0%B8%D0%B9_%D1%82%D0%B5%D0%B0%D1%82%D1%80_%D0%BE%D0%BF%D0%B5%D1%80%D1%8B_%D0%B8_%D0%B1%D0%B0%D0%BB%D0%B5%D1%82%D0%B0',
            desc:
              'Одесский национальный академический театр оперы и балета — первый театр в Одессе по времени постройки, значению и известности. Первое здание было открыто в 1810 и сгорело в 1873 году. Современное здание построено в 1887 году архитекторами Фельнером и Гельмером в стиле нового венского барокко. Интерьер зрительного зала стилизован под архитектуру позднего французского рококо.',
          },
          {
            path: 'img/odesa/3.jpg',
            link:
              'https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D1%82%D1%91%D0%BC%D0%BA%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BB%D0%B5%D1%81%D1%82%D0%BD%D0%B8%D1%86%D0%B0',
            desc:
              'Потёмкинская лестница (укр. Потьомкінські сходи) — бульварная лестница, ведущая к морю в Одессе. Архитектурное сооружение в стиле классицизма является памятником архитектуры первой половины XIX века и одной из главных достопримечательностей города. С верхних ступеней лестницы открывается широкая панорама морского порта, гавани и Одесского залива.',
          },
          {
            path: 'img/odesa/4.jpg',
            link:
              'https://ru.wikipedia.org/wiki/%D0%9F%D0%B0%D0%BC%D1%8F%D1%82%D0%BD%D0%B8%D0%BA_%D0%B4%D1%8E%D0%BA%D1%83_%D0%B4%D0%B5_%D0%A0%D0%B8%D1%88%D0%B5%D0%BB%D1%8C%D1%91',
            desc:
              'Памятник дюку (герцогу) де Ришельё в Одессе (также известен как бронзовый дюк) — бронзовый монумент в полный рост, посвящённый Арману Эмманюэлю дю Плесси, герцогу де Ришельё, открыт в 1828 году. Первый памятник, установленный в Одессе.',
          },
          {
            path: 'img/odesa/5.jpg',
            link:
              'https://ru.wikipedia.org/wiki/%D0%93%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D0%BA%D0%BE%D0%B9_%D1%81%D0%B0%D0%B4_(%D0%9E%D0%B4%D0%B5%D1%81%D1%81%D0%B0)',
            desc:
              'Городской сад — парк, расположенный в центре города Одесса, на улице Дерибасовской. Старейший общественный парк в городе. Сад был разбит Феликсом Де Рибасом (брат основателя Одессы Иосифа Де Рибаса) в 1803 году на ему принадлежащем участке городской земли прямо в центре молодого города.',
          },
        ],
        text: 'text3',
      },
    },
    {
      title: 'Kharkiv',
      content: {
        images: [
          {
            path: 'img/kharkiv/1.jpg',
            link:
              'https://ru.wikipedia.org/wiki/%D0%91%D0%BB%D0%B0%D0%B3%D0%BE%D0%B2%D0%B5%D1%89%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80_(%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2)',
            desc:
              'Свято-Благовещенский кафедральный собор - крупнейший кафедральный собор Восточной Европы. Первая церковь во имя Благовещения Пресвятой Богородицы основана около 1655 г.',
          },
          {
            path: 'img/kharkiv/2.jpg',
            link:
              'https://ru.wikipedia.org/wiki/%D0%93%D0%BE%D1%81%D0%BF%D1%80%D0%BE%D0%BC',
            desc:
              'Госпро́м (Дом Государственной промышленности) — один из первых советских небоскрёбов, построенный в 1925—1928 годах на самой большой площади Харькова — площади Дзержинского (с 1996 года — площадь Свободы)',
          },
          {
            path: 'img/kharkiv/3.jpg',
            link:
              'https://ru.wikipedia.org/wiki/%D0%9F%D0%B0%D0%BC%D1%8F%D1%82%D0%BD%D0%B8%D0%BA_%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F%D0%BC_%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2%D0%B0',
            desc:
              'Памятник казаку Харько — по легенде, Харько был основателем города. Высота пьедестала (красный гранит) — 8,5 м, конной статуи (бронза) — около 4 м, вес монумента свыше 70 тонн.',
          },
          {
            path: 'img/kharkiv/4.jpg',
            link:
              'https://ru.wikipedia.org/wiki/%D0%A3%D1%81%D0%BF%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80_(%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2)',
            desc:
              'Собор Успения Пресвятой Богородицы — один из старейших православных храмов Харькова. Пятый из двенадцати официальных символов города.Соборная колокольня (89,5 м) — десятое по высоте каменное здание Харькова и вторая по высоте колокольня Украины.',
          },
        ],
        text: 'text4',
      },
    },
    {
      title: 'Lviv',
      content: {
        images: [
          {
            path: 'img/lviv/1.jpg',
            link:
              'https://ru.wikipedia.org/wiki/%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_%D0%BE%D0%BF%D0%B5%D1%80%D0%BD%D1%8B%D0%B9_%D1%82%D0%B5%D0%B0%D1%82%D1%80',
            desc:
              'Львовский оперный театр - театр оперы и балета, расположенный в историческом центре города на проспекте Свободы, и назван в честь известной украинской оперной певицы Соломии Крушельницкой.',
          },
          {
            path: 'img/lviv/2.jpg',
            link:
              'https://ru.wikipedia.org/wiki/%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D1%80%D0%B0%D1%82%D1%83%D1%88%D0%B0',
            desc:
              'Львовская ратуша — здание городской администрации. Расположена на площади Рынок, Ратуша в течение всего времени своего существования была местом пребывания центральной городской власти Львова. Памятник архитектуры национального значения, относящийся к Всемирному наследия ЮНЕСКО. Современная башня львовской ратуши имеет высоту 65 метров, что делает её самой высокой в Украине.',
          },
          {
            path: 'img/lviv/3.jpg',
            link:
              'https://ru.wikipedia.org/wiki/%D0%92%D1%8B%D1%81%D0%BE%D0%BA%D0%B8%D0%B9_%D0%B7%D0%B0%D0%BC%D0%BE%D0%BA_(%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2)',
            desc:
              'Высокий Замок - замок, построенный под руководством Короля Руси Льва Даниловича, затем - польского короля Казимира III на Замковой горе во Львове. Почти полностью разобран в течение XIX века.',
          },
          {
            path: 'img/lviv/4.jpg',
            link:
              'https://ru.wikipedia.org/wiki/%D0%94%D0%B2%D0%BE%D1%80%D0%B5%D1%86_%D0%9F%D0%BE%D1%82%D0%BE%D1%86%D0%BA%D0%B8%D1%85_(%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2)',
            desc:
              'Дворе́ц Пото́цких — памятник архитектуры. Дворец был построен в 1880 году по проекту французского архитектора Людвига де Верни при участии польского архитектора Юлиана Цибульского на месте небольшой усадьбы, ранее принадлежавшей Альфреду Юзефу Потоцкому.',
          },
          {
            path: 'img/lviv/5.jpg',
            link:
              'https://ru.wikipedia.org/wiki/%D0%A7%D0%B0%D1%81%D0%BE%D0%B2%D0%BD%D1%8F_%D0%91%D0%BE%D0%B8%D0%BC%D0%BE%D0%B2',
            desc:
              'Часовня Бои́мов (укр. Каплиця Боїмів) — памятник львовской архитектуры. Была выстроена архитектором и скульптором А. Бемером, как склеп в 1609—1617 для купеческой семьи Боимов.',
          },
          {
            path: 'img/lviv/6.jpg',
            link:
              'https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%81%D1%82%D1%91%D0%BB_%D0%A1%D0%B2%D1%8F%D1%82%D0%BE%D0%B9_%D0%AD%D0%BB%D1%8C%D0%B6%D0%B1%D0%B5%D1%82%D1%8B_(%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2)',
            desc:
              'Костёл Свято́й Эльжбе́ты — собор в неоготическом стиле. По преданию костёл был назван в честь популярной в народе императрицы Елизаветы (Сиси) Габсбург, супруги императора Австро-Венгрии Франца-Иосифа I. Находится в собственности украинской греко-католической церкви и именуется храмом святых Ольги и Елизаветы.',
          },
        ],
        text: 'text5',
      },
    },
    {
      title: 'Chernivtsi',
      content: {
        images: [
          {
            path: 'img/chernivtsi/1.jpg',
            link:
              'https://ru.wikipedia.org/wiki/%D0%A0%D0%B5%D0%B7%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D1%8F_%D0%BC%D0%B8%D1%82%D1%80%D0%BE%D0%BF%D0%BE%D0%BB%D0%B8%D1%82%D0%BE%D0%B2_%D0%91%D1%83%D0%BA%D0%BE%D0%B2%D0%B8%D0%BD%D1%8B_%D0%B8_%D0%94%D0%B0%D0%BB%D0%BC%D0%B0%D1%86%D0%B8%D0%B8',
            desc:
              'Резиденция митрополитов Буковины и Далмации — главная достопримечательность города Черновцы, Украина. 28 июня 2011 года на 35-й сессии комитета ЮНЕСКО включена в список Всемирного наследия.',
          },
          {
            path: 'img/chernivtsi/2.jpg',
            link:
              'https://ru.wikipedia.org/wiki/%D0%A6%D0%B5%D1%80%D0%BA%D0%BE%D0%B2%D1%8C_%D0%A1%D0%B2%D1%8F%D1%82%D1%8B%D1%85_%D0%9F%D0%B0%D0%B2%D0%BB%D0%B0_%D0%B8_%D0%9F%D0%B5%D1%82%D1%80%D0%B0_(%D0%95%D1%80%D0%B5%D0%B2%D0%B0%D0%BD)',
            desc:
              'Армянская церковь Святых апостолов Петра и Павла — армянская католическая церковь восточного обряда в городе Черновцы. Построена и освящена в 1875 году. Занесена в список зданий, которые охраняются государством.',
          },
          {
            path: 'img/chernivtsi/3.jpg',
            link:
              'https://uk.wikipedia.org/wiki/%D0%A7%D0%B5%D1%80%D0%BD%D1%96%D0%B2%D0%B5%D1%86%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BC%D1%83%D0%B7%D0%B8%D1%87%D0%BD%D0%BE-%D0%B4%D1%80%D0%B0%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%BD%D0%B8%D0%B9_%D1%82%D0%B5%D0%B0%D1%82%D1%80_%D1%96%D0%BC%D0%B5%D0%BD%D1%96_%D0%9E%D0%BB%D1%8C%D0%B3%D0%B8_%D0%9A%D0%BE%D0%B1%D0%B8%D0%BB%D1%8F%D0%BD%D1%81%D1%8C%D0%BA%D0%BE%D1%97',
            desc:
              'Черновицкий городской театр - построено в 1905 году памятник архитектуры национального значения, расположенная в историческом центре Черновцов, в которой сейчас размещается Черновицкий музыкально-драматический театр имени Ольги Кобылянской.',
          },
          {
            path: 'img/chernivtsi/4.jpg',
            link:
              'https://uk.wikipedia.org/wiki/%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BB_%D0%9F%D1%80%D0%B5%D1%87%D0%B8%D1%81%D1%82%D0%BE%D0%B3%D0%BE_%D0%A1%D0%B5%D1%80%D1%86%D1%8F_%D0%86%D1%81%D1%83%D1%81%D0%B0_(%D0%A7%D0%B5%D1%80%D0%BD%D1%96%D0%B2%D1%86%D1%96)',
            desc:
              'Костёл иезуитов — памятник архитектуры, одно из наибольших культовых сооружений Львова: длина 41 метр, ширина 22,5 метра, высота — 26 метров.',
          },
        ],
        text: 'text6',
      },
    },
  ];

  function createImgContent(img) {
    const imgContent = document.createElement('div');
    imgContent.classList.add('responsive');

    const gallery = document.createElement('div');
    gallery.classList.add('gallery');
    imgContent.appendChild(gallery);

    const link = document.createElement('a');
    link.setAttribute('href', img.link);
    gallery.append(link);

    const image = document.createElement('img');
    image.setAttribute('src', img.path);
    image.setAttribute('alt', '');
    link.append(image);

    const desc = document.createElement('div');
    desc.classList.add('desc');
    desc.textContent = img.desc;
    gallery.appendChild(desc);
    return imgContent;
  }

  function createItemContent(itemContent) {
    const content = document.createElement('div');
    content.classList.add('content');

    itemContent.images.forEach(item => {
      content.appendChild(createImgContent(item));

      const text = document.createElement('p');
      text.textContent = item.text;
      content.appendChild(text);
    });

    let prevCont = document.querySelector('.content');
    if (prevCont) {
      prevCont.replaceWith(content);
    } else {
      main.appendChild(content);
    }
  }

  function createMenuItem(item, showContent) {
    const itemTitle = document.createElement('li');
    itemTitle.textContent = item.title;

    itemTitle.addEventListener('mouseover', () => {
      if (curItem === item) return;

      createItemContent(item.content);
      curItem = item;
    });

    if (showContent) {
      createItemContent(item.content);
      curItem = item;
    }
    return itemTitle;
  }

  function init() {
    const menuFragment = document.createDocumentFragment();

    dataArray.forEach((item, index) => {
      menuFragment.appendChild(createMenuItem(item, !index));
    });

    menuFragment.appendChild(document.createElement('ul'));
    sideMenu.appendChild(menuFragment);
  }

  init();
})(window, document);
