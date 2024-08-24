import '../styles/style.css';
import fisht from '../png/fisht.png';
import arrWh from "../svg/arr_wh.svg";
import timeWh from "../svg/time_wh.svg";
import human from "../svg/human.svg";
import gallery from "../png/gallery.png";
import levels from "../svg/levels.svg";
import point from "../svg/point.svg";
import bear from "../svg/bear.svg";
import bag from "../svg/bag.svg";
import timer from "../svg/timer.svg";
import home from "../svg/home.svg";
import people from "../svg/people.svg";
import screenshot from "../png/Screenshot 2024-05-07 at 16.32 1.png";

const RouteInfo = () => {
  return (
    <>
      <div>
        <img
          src={fisht}
          alt=""
          style={{ width: "100vw", filter: "blur(3px) brightness(70%)" }}
        />
      </div>
      <div className="info_wrap">
        <div className="info_flex">
          <div className="main_rt">№30 В "К приюту Фишт через озеро Псенодах"</div>
          <div className="type_rt">маршрут</div>
          <div style={{ height: "13vw" }}></div>
          <div className="foot_rt">
            <div><img src={arrWh} alt="" style={{ width: "1.5vw" }} /></div>
            <div style={{ width: "6vw", marginLeft: "0.7vw" }}>48 км</div>
            <div style={{ width: "3vw" }}></div>
            <div><img src={timeWh} alt="" style={{ width: "1.5vw" }}/></div>
            <div style={{ marginLeft: "0.7vw" }}>4 д</div>
            <div style={{ width: "3vw" }}></div>
            <div><img src={human} alt="" style={{ width: "1vw" }} /></div>
            <div style={{ marginLeft: "0.7vw" }}>пеший, конный</div>
          </div>
        </div>
      </div>
      <div style={{ height: "2vw" }}></div>
      <div><img src={gallery} alt="" style={{ width: "100vw" }}/></div>
      <div style={{ height: "2vw" }}></div>
      <div className="foot_und" style={{ color: "#1e444b" }}>
        <div>
          <img
            src={levels}
            alt=""
            style={{ width: "1vw", marginBottom: "0.2vw" }}
          />
        </div>
        <div style={{ width: "17vw", fontSize: "1vw", marginLeft: "0.5vw" }}>
          Средний уровень сложности
        </div>
        <div style={{ width: "3vw" }}></div>
        <div>
          <img
            src={point}
            alt=""
            style={{ width: "0.8vw", marginBottom: "0.2vw" }}
          />
        </div>
        <div style={{ fontSize: "1vw", marginLeft: "0.5vw" }}>
          Краснодарский край
        </div>
        <div style={{ width: "3vw" }}></div>
        <div>
          <img
            src={bear}
            alt=""
            style={{ width: "1.4vw", marginBottom: "0.2vw" }}
          />
        </div>
        <div style={{ fontSize: "1vw", marginLeft: "0.5vw" }}>
          Кавказский заповедник
        </div>
      </div>
      <div style={{ height: "2vw" }}></div>
      <div className="rtinfo_flex">
        <div className="rtinfo1">Важно</div>
        <div style={{ height: "1vw" }}></div>
        <div className="rtinfo2">
          При оформлении пропуска онлайн установлено ограничение выхода на маршрут
          до 1 ноября. Вся актуальная информация будет появляться на сайте
          заповедника.
        </div>
        <div style={{ height: "1vw" }}></div>
        <div className="rtinfo1">Нитка маршрута</div>
        <div style={{ height: "1vw" }}></div>
        <div className="rtinfo2">
          КПП Лагонаки – перевал Абадзешский – верховье реки Цице –приют Фишт –
          перевал Армянский – перевал Гузерипльский – КПП Лагонаки
        </div>
        <div style={{ height: "1vw" }}></div>
        <div className="rtinfo1">Схема переходов</div>
        <div style={{ height: "1vw" }}></div>
        <div className="rtinfo2">
          1 день: пер. Азишский (КПП Лагонаки) – перевал Абадзешский – верховье
          реки Цице (16 км) <br />2 день: верховье реки Цице – перевал
          Фишт-Оштенский- приют Фишт (12 км) <br />3 день: дневка на приюте Фишт
          (радиальный выход) <br />
          4 день: приют Фишт – перевал Армянский – перевал Гузерипльский – КПП
          Лагонаки (20 км)
        </div>
        <div style={{ height: "1vw" }}></div>
        <div className="rtinfo1">Способ подъезда к месту начала маршрута</div>
        <div style={{ height: "1vw" }}></div>
        <div className="rtinfo2">
          Туристы самостоятельно добираются до начала и окончания маршрута на КПП
          Лагонаки.
        </div>
        <div style={{ height: "1vw" }}></div>
        <div className="rtinfo1">Места стоянок (ночевок)</div>
        <div style={{ height: "1vw" }}></div>
        <div className="rtinfo2">
          Приют Фишт, верховье реки Цице. Стоянка в неустановленных местах
          запрещена.
        </div>
        <div style={{ height: "5vw" }}></div>
        <div className="rtinfo3">
          <div className="inf3it">
            <img src={bag} alt="" style={{ width: "5vw" }}/>
          </div>
          <div
            className="inf3it"
            style={{ 
              marginLeft: "1.5vw",
              width: "30vw",
              marginRight: "10vw",
              textAlign: "justify",
            }}
          >
            <span style={{ fontSize: "2vw", fontFamily: "Rubik-EB" }}>Безопасность</span>
            <br />

            Для прохождения маршрутов не требуется специальной технической и
            физической подготовки. Нитка маршрута проходит по подготовленной,
            маркированной тропе. На маршруте частично присутствует мобильная
            связь, для устойчивой связи рекомендуется использовать спутниковую
            связь. До выхода на маршрут рекомендуется проинформировать
            территориальный орган МЧС России о своем передвижении по маршруту.
            Оставьте заявку онлайн на сайте или сообщите по тел.: 8 (862) 24 32
            308.
          </div>
          <div className="inf3it">
            <img src={timer} alt="" style={{ width: "5vw" }} />
          </div>
          <div
            className="inf3it"
            style={{ 
              marginLeft: "1.5vw",
              width: "30vw",
              textAlign: "justify",
              marginRight: "2vw",
            }}
          >
            <span style={{ fontSize: "2vw", fontFamily: "Rubik-EB" }}
              >Режим функционирования</span
            >
            <br />

            Временные рамки посещаемости маршрута ограничены сроком освобождения
            перевалов по пути следования маршрута от сплошного снежного покрова
            и регламентируются Приказами ФГБУ «Кавказский государственный
            заповедник» об открытии и закрытии маршрута, размещенными на сайте
            заповеднике. Как правило, это время с июня по октябрь включительно.
            Точные даты публикуются отдельно.
          </div>
        </div>
        <div style={{ height: "5vw" }}></div>

        <div className="rtinfo3">
          <div className="inf3it">
            <img src={home} alt="" style={{ width: "5vw" }}/>
          </div>
          <div
            className="inf3it"
            style={{ 
              marginLeft: "1.5vw",
              width: "30vw",
              textAlign: "justify",
              marginRight: "10vw"
            }}
          >
            <span style={{ fontSize: "2vw", fontFamily: "Rubik-EB" }}
              >Благоустройство</span
            >
            <br />

            Места стоянок на приютах оборудованы для организации ночёвок. Маршрут
            водообеспечен на всем протяжении.
          </div>
          <div className="inf3it">
            <img src={people} alt="" style={{ width: "5vw" }}/>
          </div>
          <div
            className="inf3it"
            style={{ 
              marginLeft: "1.5vw",
              width: "30vw",
              textAlign: "justify",
              marginRight: "2vw",
            }}
          >
            <span style={{ fontSize: "2vw", fontFamily: "Rubik-EB" }}
              >Рекреационная ёмкость</span
            >
            <br />

            Маршрут рекомендуется к посещению в организованных группах в
            сопровождении квалифицированных гидов-проводников или в индивидуальном
            порядке не менее 3-х человек.   Рекреационная емкость маршрута - до
            800 человек в месяц.
          </div>
        </div>
        <div style={{ height: "5vw" }}></div>
        <div className="rtinfo1">Описание маршрутов</div>
        <div style={{ height: "1vw" }}></div>
        <div className="rtinfo2">
          Маршрут кольцевой, проходит, преимущественно, по Фишт-Оштенскому
          массиву.  Маршрут начинается от КПП Лагонаки по дороге, переходящей в
          маркированную тропу. С перевала Азишский начинается подъем к перевалу
          Абадзеш (2056 м.н.у.м.), соединяющему перемычкой хребет Каменное Море и
          южную оконечность Мурзикал – вершину Абадзеш. Далее тропа идет по долине
          между Каменным морем и хребтом Мурзикал. После непродолжительного
          крутого подъема к Фишт-Оштенскому перевалу начинается спуск к верховьям
          реки Цице (1735 м.н.у.м.). Затем маршрут продолжается вверх по реке с
          переправой на противоположный берег, где тропа начинает подъем к озеру
          Псенодах. Далее, от озера Псенодах, минуя Фишт-Оштенский перевал,
          маркированная тропа спускается к приюту Фишт. Во время дневки на приюте
          Фишт  можно совершить радильный выход на г.Оштен. С приюта Фишт  нитка
          маршрута ведет через перевалы Армянский и Гузерипльский. Минуя перевалы,
          тропа, траверсуя по склону горы Оштен в северо-восточном направлении
          мимо озера Змеиное, спускается к подножию г.Оштен в район урочища Блям.
          От урочища Блям тропа следует  по правому берегу истока реки Армянка 
          вверх до Инструкторской щели.  Далее туристическая тропа идет по долине
          между Каменным морем и хребтом Мурзикал до перевала Абадзешский и
          заканчивается на КПП Лагонаки. <br />
          <br />

          Лагонакское нагорье, включая Фишт-Оштенский массив, является уникальным
          природ-ным комплексом, характеризуется чрезвычайно высоким ландшафтным и
          биологическим разнообразием и по многим показателям не имеет аналогов в
          России. Это самая западная высокогорная часть Главного Кавказского
          хребта, представляющая собой орографически обособленную горную систему,
          расположенную в междуречье ручей Белый, Пшеха и Шахе. <br />
          Своеобразие ландшафтов обусловлено мощным развитием поверхностных и
          подземных форм карста. Здесь насчитывается около 130 пещер, многие
          уникальны для России («Парящая птица», «Абсолютная», рекордная по
          глубине России «Крестик друзей» и др.). Лагонакское нагорье – один из
          самых влажных районов Кавказа, здесь выпадает до 3 тыс. мм осадков в
          год. Это, наряду с существующими карстовыми озерами, в том числе
          под-земными, формирует условия для образования истоков рек, являющихся
          источником питьевой воды для целого региона. На Фишт-Оштенском массиве
          находятся самые западные ледники Большого Кавказа, а также один из самых
          низко расположенных ледников в Европе. <br />
          <br />

          В ботаническом отношении этот район уникален – это один из центров
          формирования видового и формового разнообразия Кавказа. Для
          растительности нагорья характерны высокий эндемизм и богатство флоры,
          что объясняется природной изоляцией, своеобразным известковым
          субстратом, распространенными карстовыми явлениями и геоботаническим
          положением. Здесь зарегистрировано более 700 видов сосудистых растений,
          из которых около 25% являются эндемиками, причем 22 вида –
          узкорегиональные, а 4 – локальные эндемики. Массив является также одним
          из рефугиумов реликтов третичного периода. Видовое богатство альпийских
          фитоценозов нагорья превышает богатство сообществ, описанных на
          аналогичных местообитаниях в других районах заповедника. <br />
        </div>
        <div style={{ height: "1vw" }}></div>
        <div className="rtinfo1">Маршрут на карте</div>
        <div style={{ height: "1vw" }}></div>
        <div>
          <img
            src={screenshot}
            alt=""
            style={{ width: "85vw", height: "70vh" }}
          />
        </div>
        <div style={{ height: "2vw" }}></div>
        <div className="oopt_info2">Правила нахождения на территории</div>
        <div style={{ height: "2vw" }}></div>

        <div
          className="inf3it"
          style={{ 
            marginLeft: "1.5vw",
            width: "30vw",
            textAlign: "justify",
            marginRight: "10vw",
          }}
        >
          <span style={{ fontSize: "2vw", fontFamily: "Rubik-EB" }}
            >Контакты заповедника</span
          >
          <br />
          <br />

          Адрес: г.Сочи, Адлерский р-н, ул. Карла Маркса, 8 <br />тел./факс: +7
          (862) 240-51-36 <br />e-mail: kgpbz@mail.ru <br />
          Официальный сайт: https://www.kavkazzapoved.ru/ <br /><br />
          <span style={{ opacity: "0.5" }}
            >Информация взята с официального сайта заповедника</span
          >
          <br /><br />
          <br />
        </div>
      </div>
    </>
  );
}
 
export default RouteInfo;