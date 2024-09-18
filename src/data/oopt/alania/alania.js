const importImages = (context) => context.keys().map(context);

export const oopt_10_images = importImages(require.context('./img', false, /\.(jpg)$/));
export const img_galdorion = importImages(require.context('./img_galdorion', false, /\.(jpg)$/));
export const img_tana= importImages(require.context('./img_tana', false, /\.(jpg)$/));
export const img_boloto = importImages(require.context('./img_boloto', false, /\.(jpg)$/));
export const img_bairadi = importImages(require.context('./img_bairadi', false, /\.(jpg)$/));
export const img_kubus = importImages(require.context('./img_kubus', false, /\.(jpg)$/));

export const oopt_10_routes = [
  {
    key: 1,
    title: 'К водопаду Галдоридон',
    type: "маршрут",
    region: 'р. Северная Осетия - Алания',
    distance: '4,1 км',
    duration: '2 ч',
    wayType: "пеший",
    images: img_galdorion,
    level: 'легкий',
    line: 'левобережная терраса р. Харесидон - водопад Галдоридон',
    way: 'Доехать до водопада Жемчужина можно разными способами — на автобусе, машине и такси. \nНа автобусе. Из Владикавказа можно добраться до села Стур-Дигора, которое находится в 10 км от водопада. Автобус «Владикавказ — Дзинага» отправляется с автовокзала № 1 один раз в сутки и следует через Стур-Дигору. Если ехать автобусом из Нальчика, сначала нужно добраться до села Чикола, затем пересесть на автобус до Стур-Дигоры. Также в Чиколе находится туристический офис национального парка «Алания», где предоставляют трансфер к водопаду.\nНа машине. Расстояние от Владикавказа до водопада составляет 150 км. Следуйте по Архонскому шоссе и трассе 90К-001 через Диголу, Чиколу, Ахсарисао до Стур-Дигоры. От Нальчика до водопада Жемчужина расстояние составляет 120 км. Направляйтесь по Владикавказскому шоссе и Е50, затем сверните на трассу 90К-004 и едьте до Стур-Дигоры.\nНа такси. Такси из Владикавказа до водопада Жемчужина обойдется недешево. Чтобы сэкономить, можно заказать поездку с помощью приложений Uber, Яндекс. Такси, Максим или Везет.',
    safety: 'Путь к Жемчужине несложен, его без труда преодолевают семьи с маленькими детьми. Необходима: спортивная обувь и теплые вещи (на случай резкой смены температуры), дождевик, головной убор, наличие индивидуальной аптечки.',
    comfort: 'На маршруте имеются указатели направления движения, предупреждающие запрещающие и информационные знаки, есть скамейки и оборудованы зоны отдыха. Также на маршруте есть детская площадка и расставлены урны для мусора.',
    description: 'В Ирафском районе Северной Осетии находится удивительной красоты водопад Галдоридон. Он раскинулся в Дигорском ущелье, что в национальном парке «Алания». Водопад тянется с Суганского массива и ниспадает в расщелину, окруженную скалами, образованными из черных сланцев. Дно усеяно светлыми гранитами, которые придают удивительный цвет водному потоку, поэтому Галдоридон называют «Жемчужиной». Еще известен как «Водопад Крошкина» — это название ему дали в честь имени погибшего здесь молодого альпиниста.\nВодопад Галдоридон — самая популярная природная достопримечательность региона. Несмотря на нахождение в заповедной зоне, маршрут к Жемчужине бесплатный. Оптимальное время для посещения водопада — с мая по октябрь, когда природа предстает во всей своей красе.\nОсобенность водопада заключается в том, что он никогда не пересыхает. Даже в самые знойные месяцы, когда нет осадков, он остается полноводным. В зимнее время, отличие от других водопадов, не замерзает полностью. Это обусловлено тем, что питающая его река берет исток у ледников. Зимой Жемчужина уменьшается в размерах и закутывается по бокам в снежное покрывало.\nПо дороге к водопаду встречаются информационные стенды, рассказывающие о местной фауне и флоре, и указатели, благодаря которым невозможно заблудиться. Всего на тропе находится 10 обзорных точек. Одна из остановок, заслуживающая особого внимания, — Кошара, где в далеком прошлом местные держали скот. За ней тянется древняя дорога, где предки гнали коров и овец. Маршрут к водопаду включает смотровую площадку, напоминающую по форме гнездо. С высоты около 2000 метров открывается изумительный вид на окрестности.',
    // карта
  },
  {
    key: 2,
    title: 'К леднику Тана',
    type: "маршрут",
    region: 'р. Северная Осетия - Алания',
    distance: '6 км',
    duration: '8 ч',
    wayType: "пеший",
    images: img_tana,
    level: 'легкий',
    line: 'турбаза Ростсельмаш - ледник Тана',
    way: 'На автобусе. Из Владикавказа можно добраться до села Стур-Дигора. Автобус «Владикавказ — Дзинага» отправляется с автовокзала № 1 один раз в сутки и следует через Стур-Дигору. Если ехать автобусом из Нальчика, сначала нужно добраться до села Чикола, затем пересесть на автобус до Стур-Дигоры. Также в Чиколе находится туристический офис национального парка «Алания», где предоставляют трансфер к точке старта.\nНа машине. Расстояние от Владикавказа до водопада составляет 150 км. Следуйте по Архонскому шоссе и трассе 90К-001 через Диголу, Чиколу, Ахсарисао до Стур-Дигоры. От Нальчика расстояние составляет 120 км. Направляйтесь по Владикавказскому шоссе и Е50, затем сверните на трассу 90К-004 и едьте до Стур-Дигоры.\nНа такси. Такси из Владикавказа обойдется недешево. Чтобы сэкономить, можно заказать поездку с помощью приложений Uber, Яндекс. Такси, Максим или Везет.',
    safety: 'Необходима: спортивная обувь и теплые вещи (на случай резкой смены температуры), дождевик, головной убор, наличие индивидуальной аптечки.',
    comfort: 'На маршруте имеются указатели направления движения, предупреждающие запрещающие и информационные знаки.',
    description: 'Главный Водораздельный хребет, часть которого приходится на Дигорию, прячет среди своих склонов множество наледей. Самые крупные из них – Тана-цете и Мосота. Поговорим о первом более подробно.\nЛедник Тана (Северная Осетия) образовался, как и остальные, с помощью многовековых нагромождений снега в зоне вечной мерзлоты (в горах Дигории она начинается примерно с 3 600 метров). Учитывая довольно ошлифованные склоны здешних отрогов и склонов, можно сделать вывод о том, что некогда на этом месте было одно глобальное оледенение, со временем разделившееся на несколько фирновых лап.\nТана находится в окружении восхитительных вершин, среди которых особенно выделяется гора Лабода, чей пик возвышается над местными красотами на 4 314 метров. Снежный язык дает жизнь полноводному водоему под названием река Танадон. Она, в свою очередь, впадает в Харес, чья долина славится большим количеством целебных минеральных источников.\nЛедник Тана-цете представляет собой тройной цирк общей протяженностью около 8 км. Еще в тридцатые годы прошлого столетия это был один сплошной снежный поток, но постепенно произошел его раскол. На данный момент площадь наледи – 3,4 кв. км. В широкой части Тана-цете достигает полутора километра. Затем он сужается до 170 метров и оканчивается этот ледник Дигории серебристыми струями восхитительных водопадов.\nСогласно отзывам туристов, посещающих это удивительное место, здесь человека преследует поразительное чувство нереальности происходящего, мистического единения с окружающими пейзажами и ощущение полнейшего одиночества. В этом холодном царстве льда и камня, колоссов скал и лабиринтов ущелий, кажется, нет места человеку. Воистину – белое безмолвие…',
    // карта
  },
  {
    key: 3,
    title: 'На болото Чифандзар',
    type: "маршрут",
    region: 'р. Северная Осетия - Алания',
    distance: '8 км',
    duration: '6 ч',
    wayType: "пеший",
    images: img_boloto,
    level: 'средний',
    line: 'Альплагерь Комы-Арт - водопад «Галдоридон» - болото Чифандзар',
    way: 'На автобусе. Из Владикавказа можно добраться до села Стур-Дигора. Автобус «Владикавказ — Дзинага» отправляется с автовокзала № 1 один раз в сутки и следует через Стур-Дигору. Если ехать автобусом из Нальчика, сначала нужно добраться до села Чикола, затем пересесть на автобус до Стур-Дигоры. Также в Чиколе находится туристический офис национального парка «Алания», где предоставляют трансфер к точке старта.\nНа машине. Расстояние от Владикавказа до водопада составляет 150 км. Следуйте по Архонскому шоссе и трассе 90К-001 через Диголу, Чиколу, Ахсарисао до Стур-Дигоры. От Нальчика расстояние составляет 120 км. Направляйтесь по Владикавказскому шоссе и Е50, затем сверните на трассу 90К-004 и едьте до Стур-Дигоры.\nНа такси. Такси из Владикавказа обойдется недешево. Чтобы сэкономить, можно заказать поездку с помощью приложений Uber, Яндекс. Такси, Максим или Везет.',
    safety: 'Необходима: спортивная обувь и теплые вещи (на случай резкой смены температуры), дождевик, головной убор, наличие индивидуальной аптечки.',
    comfort: 'На маршруте имеются указатели направления движения, предупреждающие запрещающие и информационные знаки.',
    description: 'Начинаясь у водопада Галдоридон, маршрут проходит по склону над р. Харесидон, перепад высот – 1800-2450 м над ур. м. На протяжении пути в 10 км до болота Чифандзар прослеживается хорошо сохранившаяся дорога эпохи Средневековья. Сразу за Минеральным источником «Аставдорт»,тропу пересекает ручей, после которого начинается крутой подъем на Чифандзарский завал. Открывается обзор на  пик Галдор, и черные сланцевые поля перевала Штулу (3300 м), который соединяет Суганский массив и Главный Кавказский хребет и является гра­ницей между РСО–Алания  и Кабардино-Балкарской Республикой. Каменная глыба в виде головы льва – Страж болота Чифандзар одно из главных природных достопримечательностей тропы. Каменные глыбы образовали в древности плотину на р. Харесидон, выше которой образовалось запрудное озеро, которое впоследствии превратилось в болото Чифандзар. Чифандзар – горное торфяное болото озерного происхождения – памятник природы Национального парка «Алания».',
    // карта
  },
  {
    key: 4,
    title: 'К водопаду Байради',
    type: "маршрут",
    region: 'р. Северная Осетия - Алания',
    distance: '<1 км',
    duration: '<1 ч',
    wayType: "пеший",
    images: img_bairadi,
    level: 'легкий',
    line: 'Турбаза Ростсельмаш - водопад Байради',
    way: 'На автобусе. Из Владикавказа можно добраться до села Стур-Дигора. Автобус «Владикавказ — Дзинага» отправляется с автовокзала № 1 один раз в сутки и следует через Стур-Дигору. Если ехать автобусом из Нальчика, сначала нужно добраться до села Чикола, затем пересесть на автобус до Стур-Дигоры. Также в Чиколе находится туристический офис национального парка «Алания», где предоставляют трансфер к точке старта.\nНа машине. Расстояние от Владикавказа до водопада составляет 150 км. Следуйте по Архонскому шоссе и трассе 90К-001 через Диголу, Чиколу, Ахсарисао до Стур-Дигоры. От Нальчика расстояние составляет 120 км. Направляйтесь по Владикавказскому шоссе и Е50, затем сверните на трассу 90К-004 и едьте до Стур-Дигоры.\nНа такси. Такси из Владикавказа обойдется недешево. Чтобы сэкономить, можно заказать поездку с помощью приложений Uber, Яндекс. Такси, Максим или Везет.',
    safety: 'Необходима: спортивная обувь и теплые вещи (на случай резкой смены температуры), дождевик, головной убор, наличие индивидуальной аптечки.',
    comfort: 'На маршруте имеются указатели направления движения, предупреждающие запрещающие и информационные знаки.',
    description: 'Водопады Дигорского ущелья значительно осиротеют без Байради – стремительного, жизнерадостного каскада. Его питает река Хуракомидон, поэтому порой поток, не мудрствуя лукаво, называют так же. А местное население его величает «Шумным» за мощные децибелы, которые Байради распространяет вокруг. Иногда можно услышать перевод названия – «радостный водопад», что также соответствует действительности, поскольку перламутровый, кипенно-белый поток своим присутствием повышает туристам настроение.\nВысота каскада – примерно 20 метров. Таким образом река Хуракомидон, левый приток Хареса, покидает лесистый Суганский хребет и низвергается в глубокий, каменистый каньон.\nВеликолепен Байради и зимой – он застывает в настолько причудливые фигуры, что никогда не угадаешь, на что будет похож замерзший поток на этот раз.',
    // карта
  },
  {
    key: 5,
    title: 'На гору Кубус',
    type: "маршрут",
    region: 'р. Северная Осетия - Алания',
    distance: '3 км',
    duration: '4 ч',
    wayType: "пеший",
    images: img_kubus,
    level: 'легкий',
    line: 'Турбаза Ростсельмаш - г. Кубус',
    way: 'На автобусе. Из Владикавказа можно добраться до села Стур-Дигора. Автобус «Владикавказ — Дзинага» отправляется с автовокзала № 1 один раз в сутки и следует через Стур-Дигору. Если ехать автобусом из Нальчика, сначала нужно добраться до села Чикола, затем пересесть на автобус до Стур-Дигоры. Также в Чиколе находится туристический офис национального парка «Алания», где предоставляют трансфер к точке старта.\nНа машине. Расстояние от Владикавказа до водопада составляет 150 км. Следуйте по Архонскому шоссе и трассе 90К-001 через Диголу, Чиколу, Ахсарисао до Стур-Дигоры. От Нальчика расстояние составляет 120 км. Направляйтесь по Владикавказскому шоссе и Е50, затем сверните на трассу 90К-004 и едьте до Стур-Дигоры.\nНа такси. Такси из Владикавказа обойдется недешево. Чтобы сэкономить, можно заказать поездку с помощью приложений Uber, Яндекс. Такси, Максим или Везет.',
    safety: 'Необходима: спортивная обувь и теплые вещи (на случай резкой смены температуры), дождевик, головной убор, наличие индивидуальной аптечки.',
    comfort: 'На маршруте имеются указатели направления движения, предупреждающие запрещающие и информационные знаки.',
    description: 'Гора Кубус имеет пирамидальный силуэт, является завершающим дочерним отрогом хребта Гурмастента, в своей основе сложен гнейсами – самыми древними метаморфическими породами Кавказа. На горе Кубус расположен реликтовый сосновый бор,  возраст  которого составляет 300–350 лет. Подъем на гору начинается с Кубусского торфяника, на месте которого 8 тысяч лет назад было озеро. На подходе к вершине внизу виднеется долина реки Харесидон, живописные отроги Суганского хребта – Суганские Альпы. Тропа на Кубус поросла родоретами – большими зарослями вечнозеленого растения, эндемика Кавказа, рододендрона кавказского. С вершины горы Кубус хороший обзор открывается в северном направлении – на гору Дашихонх и на Таймазинский ледник с прекрасным видом на три Таймазинских водопада.\nМного веков подряд Кубус считалась локацией ритуальных собраний, а позже – своеобразной площадкой для решения вопросов, касающихся существования местных общин. Именно здесь старейшины обсуждали нюансы обороны селений от врагов и прочие насущные моменты общественной жизни.\nКубус священный и сейчас дарит путешественникам особенное удовольствие – взобраться на пологий склон, обратиться к небесам и загадать самое заветное желание. Туристы утверждают, что это не просто местная легенда – задуманное действительно сбывается! Видимо, волшебная энергия древних обрядов, столетиями витавшая здесь, не испарилась полностью и продолжает работать.\nВторое имя Кубуса – Медвежья гора. Кто знает, почему ее так назвали: возможно, по той причине, что здесь когда-то водились медведи. А может, из-за внешнего сходства – лесные заросли, покрывающие гору, отдаленно напоминают мохнатую, медвежью шерсть.\nВысота Кубуса 2 340 метров, и это довольно немного на фоне таких вершин, как Таймази, Лабода или Айхва. Кстати, их можно отчетливо увидеть с территории чуть сплющенной площадки, венчающей гору. Вообще, панорама отсюда отрывается великолепная – видно глубокое лесистое ущелье, горные пики и громады ледников, а по дороге туриста ожидают интересные места, которые непременно стоит посетить.',
    // карта
  },
]