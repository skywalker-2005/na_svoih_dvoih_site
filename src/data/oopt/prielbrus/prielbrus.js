const importImages = (context) => context.keys().map(context);

export const oopt_7_images = importImages(require.context('./img', false, /\.(jpg)$/));
export const img_devichi = importImages(require.context('./img_devichi', false, /\.(jpg)$/));
export const img_donguz = importImages(require.context('./img_donguz', false, /\.(jpg)$/));
export const img_adilsu = importImages(require.context('./img_adilsu', false, /\.(jpg)$/));
export const img_ekotropa = importImages(require.context('./img_ekotropa', false, /\.(jpg)$/));
export const img_terskol = importImages(require.context('./img_terskol', false, /\.(jpg)$/));
export const img_adirsu = importImages(require.context('./img_adirsu', false, /\.(jpg)$/));

export const oopt_7_routes = [
  {
    key: 1,
    title: 'Водопад “Девичьи косы”',
    type: "маршрут",
    region: 'Кабардино-Балкарская р.',
    distance: '5 км',
    duration: '6 ч',
    wayType: "пеший",
    images: img_devichi,
    level: 'средний',
    line: 'г. Терскол - Водопад “Девичьи косы”',
    way: 'Ближайший к Терсколу крупный транспортный узел — Минеральные Воды. Там есть аэропорт, ж/д вокзал и автовокзал. Однако оттуда не существует прямых рейсов в Терскол, доехать можно с одной пересадкой.\nДля начала нужно будет добраться в Нальчик, удобнее всего это сделать на автобусе Минеральные Воды — Нальчик, в течение дня есть множество рейсов. Если вы планируете добраться до Терскола за один день, то выехать из Минеральных вод необходимо до 10 часов утра, тогда возможно успеть на автобус из Нальчика до Терскола. Путь от Минвод до Нальчик автобус преодолевает за 2–2,5 часа.\nВторой вариант добраться от Нальчика маршрутным такси до поселка Тырныауз, и далее на местном автобусе до Терскола.',
    safety: 'Маршрут не требует особой физической подготовки. Лучше взять удобную спортивную обувь, куртку или рубашку с длинными рукавами, головной убор.',
    comfort: 'Установлены места для отдыха, указатели, информационные стенды.',
    shedule: 'май - ноябрь',
    description: 'Водопад Девичьи косы – это одна из уникальных достопримечательностей национального парка «Приэльбрусье», расположенная почти на 2800 метрах над уровнем моря.\nВ туристических путеводителях и на картах его обозначают как Чыранбаши-Суу, что в переводе с карачаево-балкарского означает «девичьи косы». Вода здесь ниспадает по особо твердым базальтовым скалам, которые не позволяют ей пробить даже небольшой желоб. Поток рассыпается струями, напоминая образ длинноволосой красавицы – черкешенки.\nВысота Девичьих кос составляет 30 метров, а ширина достигает почти 15 метров. Поток питается талыми водами ледника Гарабаши, наполняясь наибольшей силой летом, и впадает в реку Гара-Суу.\nЗа водопадом есть грот. Вы можете туда зайти, но будьте осторожны – со свода пещеры нередко осыпаются небольшие камушки.\nМаксимальная высота 2790м\nМинимальная высота 2160м\nПерепад высот 630м',
    // карта
  },
  {
    key: 2,
    title: 'Озеро Донгуз Орун-кел',
    type: "маршрут",
    region: 'Кабардино-Балкарская р.',
    distance: '7 км',
    duration: '6 ч',
    wayType: "пеший",
    images: img_donguz,
    level: 'легкий',
    line: 'Поляна Чегет -  Озеро Донгуз Орун-кел',
    way: 'В Приэльбрусье общественным транспортом без пересадок можно уехать только из Нальчика и Тырныауза. Если Вы хотите добраться из какого-то другого города, необходимо сначала приехать в Нальчик. Или сначала в какой-нибудь из городов откуда можно добраться в Нальчик и только потом в Приэльбрусье. \nБлижайшие аэропорты и вокзалы находятся в Минеральных водах и Нальчике. Для того чтобы добраться оттуда в Приэльбрусье, многие предпочитают воспользоваться трансфером, так как это максимально легкий способ попасть на курорт.\nБлижайший к поляне Азау и Чегет посёлок – Терскол. Именно сюда приходит общественный транспорт. Маршрутка из Нальчика ходит два раза в день и в Терсколе останавливается около кафе «Купол».',
    safety: 'Маршрут не требует особой физической подготовки. Лучше взять удобную спортивную обувь, куртку или рубашку с длинными рукавами, головной убор.',
    comfort: 'Установлены места для отдыха, указатели, информационные стенды.',
    shedule: 'май - октябрь',
    description: 'Ледниковое озеро Донгуз-орун-кель (Донгуз-свинья, орун-загон, кель-озеро, озеро рядом со свиным загоном) образовалась от таяния ледников, расположенных на и под вершинами Донгуз-орун-баши (4450 м) и Накра-тау (4228 м). Текущая вода размывает склоны гор и вся эта взвесь стекает в озеро, поэтому вода в нём постепенно заболачивается и красиво расцвечена палитрой красок. Прогулку на озеро обычно проводят, начиная от верхней станции однокресельной канатной дороги (КД) первой очереди, куда можно подняться пешком по тропе средней крутизны или в кресле КД с поляны Чегет (2100 м). Поворот с Баксанского шоссе на поляну Чегет на 100-м км.\nТропа начинается здесь и идет почти по горизонтали до самого озера. После 40-50 минут ходьбы показывается озеро. Вы выходитесь метров на 100 выше озера, к которому можно спуститься по травянистым склонам средней крутизны. Можно подойти к устью речки Медвежьей. В этом месте она течет в небольшом по протяжённости каньоне и заканчивается красивым невысоким водопадом. Берега озера болотистые, поэтому близко к воде не подходите.\nВо все время движения тропа пересекает альпийские луга с богатейшим разнотравьем. Много лекарственных растений: буквица, чабрец, шалфей…\nВ конце весны и начале лета с запада от поляны Чегет в сосновом лесу много черемши – витаминизированной палочки-выручалочки местных лесов. Ее можно употреблять в пищу во всяком виде, можно засушивать впрок. В некоторых местах можно встретить эндемик горы Чегет черный тюльпан.\nДальше путь по тропе закрыт, так как впереди расположена пограничная застава и проходит государственная граница между суверенными государствами Россией и Грузией.\nОбратно к верхней станции канатной дороги возвращаетесь по той же тропе.\nПуть к озеру пешком с поляны Чегет (2100 м) начинается на горнолыжном выкате и также проходит по альпийским лугам, но длятся гораздо дольше, чем от станции канатной дороги. Этот путь для здорового человека с хорошими физическими кондициями займёт в обе стороны с отдыхом и спуском к озеру не менее 5 часов, ведь.\nПутешествие к озеру Донгуз-орун-кёль может служить прекрасным дополнением к посещению комплекса канатных дорог «Чегет».',
    // карта
  },
  {
    key: 3,
    title: 'Ущелье Адыл-Су',
    type: "маршрут",
    region: 'Кабардино-Балкарская р.',
    distance: '7 км',
    duration: '5 ч',
    wayType: "пеший",
    images: img_adilsu,
    level: 'средний',
    line: 'Развилка дорог у ущ. Адыл-Суу — мост у а\n «Шхельда» -  Мост у а\n «Шхельда» — а\n «Джан-Тууган» - А\n «Джан-Тууган» — база МВТУ - База МВТУ-поляна кошей',
    way: 'Доехать сюда можно исключительно на автомобиле. Конечные точки, где автодорога заканчивается – альпинистские лагеря «Шхельда» и «Джантуган».\nУщелье находится в пограничной зоне, поэтому всем его посетителям необходимо иметь пропуск в погранзону. Граждане иностранных государств должны оформить пропуск заранее в г. Нальчик, срок оформления займет 30 рабочих дней.\nГраждане РФ по паспорту могут проехать в ущелье. Но если возникнет желание сходить на маршрут Улыбка Шхельды или озера Башкара, при себе следует иметь пропуск в погранзону. Его можно оформить заранее в г. Нальчик (оформление займет 15 рабочих дней). Также можно оформить пропуск в альплагере «Адыл-Су» или «Шхельда». Для оформления пропуска при себе следует иметь паспорт РФ, услуга стоит 150 руб.',
    safety: 'Маршрут не требует особой физической подготовки. Лучше взять удобную спортивную обувь, куртку или рубашку с длинными рукавами, головной убор.',
    comfort: 'Установлены места для отдыха, указатели, информационные стенды.',
    shedule: 'май - октябрь',
    description: 'За селением Эльбрус влево уходит боковое ущелье Адыл-Су (старотюркское – «Красная вода»), названное так из-за нарзанных источников в верховьях речки, оставляющих оранжевый «ржавый» след на камнях из-за наличия большого количества железа в напитке (один из вариантов перевода; другой вариант — «Адыл» — по-балкарски – «красивый,красивая», «Су»-«вода, горная река»), — одно из красивейших мест Приэльбрусья. Река Адыл-Су – правый приток Баксана, впадающая в него у села Эльбрус. И река и ущелье полностью оправдывают свое название. Правые (по ходу вверх) склоны ущелья покрыты сосновыми лесами, где встречаются густые заросли крыжовника, шиповника, малинника, брусники.\nКрасота ущелья Адыл-Су, его доступность, обилие разнообразных горных маршрутов создали ущелью славу «Мекки» альпинизма. Ущелье Адыл-Су – столица отечественного альпинизма, давшая миру созвездие имен восходителей на сложнейшие вершины Кавказа, Памира и Гималаев.\nИтак, туристический маршрут по ущелью начинается от кафе «Сакля», от автомобильной дороги Баксан — Азау.\nВ этом ущелье расположено большинство альпинистских баз Кабардино-Балкарии (три), пансионат и база отдыха. В 200 метрах от развилки в сосновом бору построена альпбаза «Адыл-Су», принадлежащая ранее спортивному обществу «Локомотив». За базой находится открытый горный склон, на котором в зимнее время активно тренируются начинающие горнолыжники.\nВыше по ущелью дорога идет по лесу: сосновый лес местами сменяется лиственным (береза, клен, рябина, черемуха), где встречаются подберезовики, белый гриб, маслята, рыжики, смородина, костяника и др.\nЗимой здесь на определенном участке лавиноопасно.\nЧерез три километра от развилки на крутом склоне приютилась альпбаза «Шхельда», принадлежавшая раньше спортивному обществу «Спартак»- колыбель отечественного альпинизма, взрастившая не одно поколение выдающихся горовосходителей страны.\nРека Шхельда, левый приток Адыл-Су, впадает в нее  сразу за альплагерем.\nСразу за альпбазой (вправо) – короткое, но суровое  ущелье Шхельды (ссылка) с речкой Шхельда (с балкарского – «брусника»), начинающейся на ледниках вершины Шхельда-Тау (4368 м). Это даже не одна вершина, а массивная стена с 4 вершинами в Главном Кавказском хребте.\nУ туристов очень популярен  маршрут к леднику Шхельда до поляны «Улыбка Шхельды». Он проходит левому берегу реки и для начинающих туристов заканчивается на «Золотом пляже» недалеко от ледника Шхельда. Здесь можно наблюдать исключительно любопытное явление природы – вся конечная часть ледника несет на себе толстый слой продуктов разрушения горных пород (поверхность ледника была засыпана обломками скал в результате грандиозного обвала, произошедшего в 60-х годах 19 века).\nКаменный настил защищает ледник от таяния, и поэтому он не отступает, как все ледники Приэльбрусья. На этом наносе выросли большие сосны, достигающие своими  корнями поверхности скрытого под землей ледника. По морене ледника идут маршруты, популярные у альпинистов: на вершины Шхельды и Ушбы, к пику Щуровского, на Чатын-Тау. «Одной из наиболее величественных и красивых по своим очертаниям гор Кавказа является Ушба, которая заканчивается двумя вершинами», — отмечается в «Путеводителе по горам Кавказа 1904 года». «Обе вершины имеют форму трехгранных пирамид и удивительно красивы. Более высокая из них… отличается более пологими склонами, вторая наоборот, более крутыми. Почти до последнего времени Ушба считалась совершенно недоступной для восхождений. В 1888 году англичанин И.Г.Коккин сделал первую успешную попытку взобраться на северную вершину. В 1903 году пять немецких альпинистов… взошли на еще более недоступную южную вершину».\nА вверх по ущелью Адыл-Су дорога через один километр, перейдя по мосту через реку Шхельда, приводит серпантином к развилке. Одна дорога, уходящая вправо в ущелье Шхельда, приводит к пансионату «Приэльбрусье» — шикарному трехэтажному зданию, принадлежащему Управлению делами Президента РФ. Но пансионат принимает, кроме высокопоставленных, и обычных туристов, и отдохнуть здесь, безусловно, приятно и престижно.\nДорога же по ущелью Адыл-Су приводит к учебно-методическому центру (УМЦ) «Эльбрус» (ранее альплагерь принадлежал украинскому спортивному обществу «Шахтер»), расположенному, как и другие альпбазы, на левом берегу реки Адыл-Су, на уютной поляне, опоясанной соснами, осинами, березками и черемухой. Раньше центр работал по подготовке инструкторов альпинизма, специалистов для промышленного альпинизма, а теперь все чаще работает как обычный альплагерь. Здесь же  проводят сборы пограничники, служащие в горах и осваивающие для своей службы альпинистскую технику.\nДалее следует крутой подъем, а перед нами — открытая площадка, на которой, расположен ряд кафе и шашлычных, где можно сделать привал. На этой площадке всегда многолюдно, рядами выстраиваются экскурсионные автобусы.\nУ УМЦ «Эльбрус» асфальтированная дорога заканчивается и уже в виде гравийной переходит через мост на правый берег Адыл-Су. Здесь открывается прекрасный вид на гору Шхельда и на цепь вершин в ущелье Адыл-Су. Обзорной точкой может служить также площадка у противолавинного орудия. Дорога же круто, по альпийским лугам, поднимается до базы отдыха «Джантуган», находящейся  на лесной поляне в 7 км от развилки Баксанского ущелья. На базу по дороге  спокойно поднимаются легковые автомашины.\nДо «Джантугана» можно идти и по нижней пешеходной тропе,  здесь — у реки пробивается между камней источник нарзана.\nРаньше «Джантуган» (с тюрского – «Душа Тугана») был альпинистским лагерем. Принадлежит Московскому государственному  техническому университету (МГТУ) имени Н.Э.Баумана. Студенты и преподаватели университета в «Джантугане» не только отдыхают, но и совершенствуют свое туристское и альпинистское мастерство.\nС дороги, напротив «Джантугана», хорошо смотрятся «ледовая лаборатория» всех альпбаз – ледник Кашка-Таш (с балкарского – «лысые камни») и вершины: пик Гермагенова – 3993 м; Уллу Кара (с балкарского – «Большой черный) – 4302 м; Бжедух (с кабардинского – «Укравший рог»)-4279 м; пик Вольной Испании.  За альпбазой видна вершина Джантуган – 3991 м. В «Джантугане» автомобильная дорога заканчивается, и только по тропе, извивающейся между скальными выступами, осыпями и каменными глыбами, через 1,5 часа ходьбы можно добраться до ледникового Башкаринского озера. За озером отчетливо видны вершины Джантуган и Башкара. Справа нависает ледник Джан-Куат.\nРядом озера поменьше, образованные ледником Джан-Куат. Вдали можно увидеть белеющие вершины Эльбруса. Через  2-2,5 часа — мы у  альпинистского приюта, называемого «Зеленой гостиницей».  «Зеленая гостиница» — это большая поляна, покрытая летом густой травой, с хижиной на 20 мест. С поляны уходят тропы на перевалы Гумачи и Кой-ауган-ауш, ведущие в соседнее ущелье Адыр-Су (ссылка) и на перевал Джантуган, ведущий в Сванетию (Грузию).\nНа всем протяжении ущелья Адыл-Су в русле реки бьют до десятка небольших нарзанных источников, что является приятным сюрпризом для туристов, проделавших долгий путь, особенно в жаркую пору, которая бывает в горах (обычно: июль- середина августа). Продолжительность движения от начала маршрута до «Зеленой гостиницы» около 5 часов, обратный путь потребует 3 часа.',
    // карта
  },
  {
    key: 4,
    title: 'Экотропа Эльбрус - Азау - Чегет',
    type: "маршрут",
    region: 'Кабардино-Балкарская р.',
    distance: '5,3 км',
    duration: '6 ч',
    wayType: "пеший",
    images: img_ekotropa,
    level: 'легкий',
    line: 'Поляна нарзанов - Поляна Чегет',
    way: 'Экотропа Поляна нарзанов - объект, который довольно-таки легко отыскать. На экотропу есть несколько входов:\nСтарт - канатная дорога на Эльбрус, станция «Азау». Необходимо обойти кассы Эльбруса справа и пройти 300 м вниз до указателя «Экотропа».\nСтарт - палаточный лагерь «Бивуак». Если двигаться со стороны Эльбруса, то при въезде в поселок Терскол, справа от трассы, увидите указатель «Бивуак».\nГора Чегет. Если двигаться от сувенирного рынка Чегет в сторону трассы, нужно пройти около 300-400 м и справа увидите указатель «Экотропа».\nПоляна нарзанов. Если выйти с поляны и двигаться по трассе, то через 200 метров слева будет установлен указатель, направляющий путников к экотропе Эльбрус-Азау-Чегет.',
    safety: 'Маршрут не требует особой физической подготовки. Лучше взять удобную спортивную обувь, куртку или рубашку с длинными рукавами, головной убор.',
    comfort: 'На тропе установлены места для отдыха, указатели, информационные стенды, также есть сувениры, нарзаны, национальная кухня, по сезону земляника, малина, грибы.',
    shedule: 'Круглогодично',
    description: 'В октябре 2018 года экологическая тропа впервые появилась в парке «Приэльбрусье». Её оборудовали по последнему слову обустройства туристических объектов. На всём протяжении установлены лавочки и места для отдыха, причем как для активного, так и пассивного. При желании можно разместиться в уютных беседках, где есть деревянные столики.\nНи один путешественник не сможет пожаловаться на недостаток информации: экологическая тропа Азау - Чегет пестрит разнообразными щитами, на которых размещены полезные сведения для туристов.\nНемало здесь и смотровых площадок, откуда открываются просто божественные виды, ведь совсем рядом возвышается Эльбрус с его узнаваемой двуглавой вершиной, а также часть величественного Кавказского хребта.\nТропа идет по широкой долине реки Баксан, вдоль горы Чегет. Издалека виден массив Когутай, а также вершина пика Терскол. Совет: обязательно в дорогу возьмите с собой бинокль - не исключено, что вам повезет понаблюдать за огромными, медлительными турами, мерно кочующими с горы на гору.\nЗаблудиться на тропе невозможно, поскольку везде расставлены указатели. О естественных потребностях туристов устроители также подумали - в удобных местах установлены туалеты.\nЕсли начинать путь от упомянутой горы Эльбрус, то вначале дорога идет сквозь сосновый лес, который постепенно сменяется белоснежной акварелью березняка.\nЗатем тропа снова нырнет в хвойный лес. По пути экотропа выведет к большому мосту через реку Баксан, чуть дальше совсем ненадолго приведет к асфальтированной дороге возле горы Чегет. А все остальное время тропа ведет по потрясающему, хвойному лесу!\nИногда на тропе Эльбрус – Азау – Чегет можно встретить не только пеших туристов, но и проезжающих верхом или на более современных, железных лошадях - квадроциклах.\nЭкотропа Приэльбрусья доступна как летом, так и зимой, хотя пейзажи, конечно, будут разительно отличаться. В первую очередь преображается река Баксан, извилистое течение которой сопровождает туристов почти на всём протяжении пути. Зимой в ущелье трещат морозы, поэтому поток замерзает, а вот в тёплое время года его гулкий шум разносится на многие километры вокруг.\nОдин только хвойный лес одинаково радует пронзительным малахитом и благоуханием.\nПокрытая белоснежной периной, экотропа Азау - Чегет зимой невероятно прекрасна! Белый снег ежедневно утаптывают сотни проходящих туристов.\nНо всё-таки летом экотропа представляет собой еще более восхитительное зрелище: по дороге можно увидеть кусты земляники и прочих ягод, соблазнительно выглядывающих из-под свежей травы, а также удивительные цветы, произрастающие исключительно на просторах горных лугов.',
    // карта
  },
  {
    key: 5,
    title: 'Ущелье Терскол',
    type: "маршрут",
    region: 'Кабардино-Балкарская р.',
    distance: '4 км',
    duration: '3 ч',
    wayType: "пеший",
    images: img_terskol,
    level: 'легкий',
    line: 'Пос. Терскол - поляна кошей - верхнее ущ. Терскол - поляна кошей - пос. Терскол',
    way: 'Отправная точка находится в поселке Терскол, недалеко от мечети. Сойдя с асфальта на грунтовую дорогу, через 10 минут на пути будет развилка. Чтобы попасть в Терсколькое ущелье, надо повернуть направо, а левая тропа ведет к водопаду Девичьи косы.',
    safety: 'Маршрут не требует особой физической подготовки. Лучше взять удобную спортивную обувь, куртку или рубашку с длинными рукавами, головной убор.',
    comfort: 'Установлены места для отдыха, указатели, информационные стенды.',
    shedule: 'Круглогодично',
    description: 'Ущелье Терскол расположено между двумя отрогами Эльбруса: юго-восточным Терскольским отрогом и восточным отрогом хребтом Тегенекли. Над верхней частью ущелья висит ледник Терскол, сползающий со склонов Эльбруса и дающий начало реке Терскол.\nУщелье Терскол расположено на севере от пос. Терскол. Сначала перейти по мосту через р. Терскол, ниже скотных дворов, затем идти по тропе, по левому склону ущелья над рекой Терскол. Пройдя скотные дворы, расположенные на противоположной стороне реки, спуститься по тропе на дно ущелья и выйти на дорогу в 100 метров выше верхнего моста.\nДальнейший путь идет по дну ущелья, сначала по дороге, а затем по тропе. Справа по ходу-склон хребта Тегенекли, слева река Терскол, и за ней склон Терскольского отрога Эльбруса. Путь проходит мимо поляны кошей. На поляне кошей группа останавливается на отдых. Дальнейший путь в верховья ущелья, к левобережной морене. Здесь конец маршрута. Конец языкообразного ледника висит на крутых «бараньих лбах». В любое время возможен обвал льда. Поэтому подходить к «бараньим лбам» ближе 300 метров не следует.',
    // карта
  },
  {
    key: 6,
    title: 'Ущелье Адыр-Су',
    type: "маршрут",
    region: 'Кабардино-Балкарская р.',
    distance: '12 км',
    duration: '8 ч',
    wayType: "пеший",
    images: img_adirsu,
    level: 'средний',
    line: 'Пос. Верхний Баксан - Ущелье Адыр-Су',
    way: 'Из Нальчика и Минеральных Вод ходят рейсовые автобусы и маршрутки в село Верхний Баксан, откуда начинается дорога в ущелье Адыр-Су. Выйти следует перед Верхним Баксаном на повороте к ущелью, до которого полукилометра по асфальтированной дороге. Вход в ущелье закрывает скала под названием Докторский перевал. Чтобы попасть в Адыр-Су на автомобиле, придётся воспользоваться подъёмником. Он представляет собой платформу, которая поднимается по рельсам под углом 45 градусов. Длина подъёма — 60 м. Это устройство способно поднять даже небольшой автобус. Люди поднимаются по металлической лестнице. Наверх ведёт три сотни ступеней.',
    safety: 'Маршрут не требует особой физической подготовки. Лучше взять удобную спортивную обувь, куртку или рубашку с длинными рукавами, головной убор.',
    comfort: 'Установлены места для отдыха, указатели, информационные стенды.',
    shedule: 'Круглогодично',
    description: 'Ущелье Адыр-Су является одним из прекраснейших уголков Кабардино-Балкарии, его название переводится как «сильная вода».\nИзумрудная зелень лесов контрастирует с белоснежными вершинами ледников.\nДорога в Адыр-Су ответвляется от трассы  напротив селения Верхний Баксан. Через 500 метров после поворота дорога упирается в скалу, известную под названием «Докторский перевал». Именно здесь берет свое начало ущелье.\nАвтомобили попадают в долину с помощью подъемника (60 метров по рельсам, под углом 45 градусов), установленного на скальной ступени Докторского перевала, а люди — по металлической лестнице.\nСлева от подъемника шумит речка Адыр-Су, вырываясь из своего ущелья через узкий каньон в скале.\nПротяженность ущелья Адыр-Су — около 12 километров.\nОдна из особенностей ущелья Адыр-Су: узкое с крутыми склонами, оно в верховье становится широким, с плоским дном, по которому река разливается на много постоянно изменяющихся русел.\nВ 10 километрах от подъемника с правой стороны ущелья Адыр-Су расположен поисково-спасательный пункт «Адыр-Су», а с левой — территория альплагеря «Джайлык».\nВыше альплагеря «Джайлык» стоит альплагерь «Уллу-Тау». Сразу за ним зона леса заканчивается и начинаются каменистые склоны, изредка покрытые альпийскими травами, зарослями малины, можжевельником и низкорослыми кустами кавказского рододендрона.\nОт моста через реку Адыр-Су, расположенного на территории альплагеря, начинаются подходы к перевалам Гарваш, Украина и Гумачи. Здесь есть чем заняться альпинистам любого уровня: маршруты от 1Б до 6А категории сложности. Высшая точка района — вершина Джайлык (4533 метра).\nВ ущелье Адыр-Су много заповедных мест, где спокойно пасутся туры, водятся медведи и горные индейки — улары.',
    // карта
  },
]