import phImp from "../png/ph_imp.png";
import ad from "../png/ad.png";
import old_road from "../png/old_road.png";
import krugo from "../png/krugo.png";

const routes = [
  {
    key: 1,
    title: 'Тропой императоров',
    region: 'р. Дагестан',
    distance: '5 км',
    duration: '2-3 ч',
    img: phImp
  },
  {
    key: 2,
    title: 'Большой Тхач',
    region: 'р. Адыгея',
    distance: '55 км',
    duration: '5-7 д',
    img: ad
  },
  {
    key: 3,
    title: 'Старая дорога',
    region: 'Краснодарский к.',
    distance: '2.4 км',
    duration: '2-3 ч',
    img: old_road
  },
  {
    key: 4,
    title: 'Кругозор Аишха',
    region: 'Краснодарский к.',
    distance: '5 км',
    duration: '1 д',
    img: krugo
  }
]

export default routes;