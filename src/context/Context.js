import { createContext, useState } from 'react';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBezierCurve, faEarthAmericas, faBrush, faBullhorn, faBox, faCode } from '@fortawesome/free-solid-svg-icons';

import Green from '../assets/portfolio/grow-green.jpg';
import Green2 from '../assets/portfolio/grow-green@2x.jpg';
import Guitarist from '../assets/portfolio/guitarist.jpg';
import Guitarist2 from '../assets/portfolio/guitarist@2x.jpg';
import Lady from '../assets/portfolio/lady-shutterbug.jpg';
import Lady2 from '../assets/portfolio/lady-shutterbug@2x.jpg';
import Palmeira from '../assets/portfolio/palmeira.jpg';
import Palmeira2 from '../assets/portfolio/palmeira@2x.jpg';
import Beetle from '../assets/portfolio/the-beetle.jpg';
import Beetle2 from '../assets/portfolio/the-beetle@2x.jpg';
import Woodcraft from '../assets/portfolio/woodcraft.jpg';
import Woodcraft2 from '../assets/portfolio/woodcraft@2x.jpg';

import Apple from '../assets/icons-slider/apple.png';
import Atom from '../assets/icons-slider/atom.png';
import Blackberry from '../assets/icons-slider/blackberry.png';
import Dropbox from '../assets/icons-slider/dropbox.png';
import Envato from '../assets/icons-slider/envato.png';
import Firefox from '../assets/icons-slider/firefox.png';
import Joomla from '../assets/icons-slider/joomla.png';
import Magento from '../assets/icons-slider/magento.png';
import Mozilla from '../assets/icons-slider/mozilla.png';
import Redhat from '../assets/icons-slider/redhat.png';
import Ubuntu from '../assets/icons-slider/ubuntu.png';
import Wordpress from '../assets/icons-slider/wordpress.png';

import User1 from '../assets/users/user-01.jpg';
import User2 from '../assets/users/user-02.jpg';
import User3 from '../assets/users/user-03.jpg';
import User4 from '../assets/users/user-04.jpg';
import User5 from '../assets/users/user-05.jpg';

const socialInfoData = [
  { 
    title: 'Facebook',
    icon: faFacebook,
  },
  { 
    title: 'Twitter',
    icon: faTwitter,
  },
  { 
    title: 'Instagram',
    icon: faInstagram,
  },
  { 
    title: 'Linkedin',
    icon: faLinkedin,
  },
  { 
    title: 'Github',
    icon: faGithub,
  }, 
]

const sideMenuLinksData = [ 
  {
    title: 'Home',
    link: '#home' 
  },
  {
    title: 'About',
    link: '#about' 
  }, 
  {
    title: 'Services',
    link: '#services' 
  }, 
  {
    title: 'Works',
    link: '#works' 
  }, 
  {
    title: 'Clients',
    link: '#clients' 
  }, 
  {
    title: 'Contact',
    link: '#contact' 
  } 
];

const statsData = [
  {
    value: '127',
    title: 'Awards Received'
  },
  {
    value: '1505',
    title: 'Cups of Coffee'
  },
  {
    value: '109',
    title: 'Projects Completed'
  },
  {
    value: '102',
    title: 'Happy Clients'
  }
];

const workItem = [
  {
    icon: faBrush,
    title: 'Brand Identity',
    content: `Nemo cupiditate ab quibusdam quaerat impedit magni. \n Earum suscipit ipsum laudantium. Quo delectus est. \n Maiores voluptas ab sit natus veritatis ut. Debitis nulla \n cumque veritatis. Sunt suscipit voluptas ipsa in tempora \n esse soluta sint.`
  }, 
  {
    icon: faBezierCurve,
    title: 'Illustration',
    content: `Nemo cupiditate ab quibusdam quaerat impedit magni. \n Earum suscipit ipsum laudantium. Quo delectus est. \n Maiores voluptas ab sit natus veritatis ut. Debitis nulla \n cumque veritatis. Sunt suscipit voluptas ipsa in tempora \n esse soluta sint.`
  },
  {
    icon: faBullhorn,
    title: 'Brand Identity',
    content: `Nemo cupiditate ab quibusdam quaerat impedit magni. \n Earum suscipit ipsum laudantium. Quo delectus est. \n Maiores voluptas ab sit natus veritatis ut. Debitis nulla \n cumque veritatis. Sunt suscipit voluptas ipsa in tempora \n esse soluta sint.`
  },
  {
    icon: faEarthAmericas,
    title: 'Marketing',
    content: `Nemo cupiditate ab quibusdam quaerat impedit magni. \n Earum suscipit ipsum laudantium. Quo delectus est. \n Maiores voluptas ab sit natus veritatis ut. Debitis nulla \n cumque veritatis. Sunt suscipit voluptas ipsa in tempora \n esse soluta sint.`
  },
  {
    icon: faBox,
    title: 'Web Design',
    content: `Nemo cupiditate ab quibusdam quaerat impedit magni. \n Earum suscipit ipsum laudantium. Quo delectus est. \n Maiores voluptas ab sit natus veritatis ut. Debitis nulla \n cumque veritatis. Sunt suscipit voluptas ipsa in tempora \n esse soluta sint.`
  },
  {
    icon: faCode,
    title: 'Web Development',
    content: `Nemo cupiditate ab quibusdam quaerat impedit magni. \n Earum suscipit ipsum laudantium. Quo delectus est. \n Maiores voluptas ab sit natus veritatis ut. Debitis nulla \n cumque veritatis. Sunt suscipit voluptas ipsa in tempora \n esse soluta sint.`
  },
];

const images = [
  {
    src: Lady,
    thumb: Lady2,
    href: 'img/lady.jpg',
    alt: 'Lady',
    size: "560-560",
    height: '560px',
    text: 'Branding',
    info: '<br><h1>SHUTTERBUG</h1></br><p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p></>'
  }, 
  {
    src: Beetle,
    thumb: Beetle2,
    href: 'img/beetle.jpg',
    alt: 'Beetle',
    size: "560-560",
    height: '560px',
    text: 'Web Design',
    info: '<br><h1>PALMERIA</h1></br><p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p></>'
  },
  {
    src: Guitarist,
    thumb: Guitarist2,
    href: 'img/guitarist.jpg',
    alt: 'Guitarist',
    size: "560-700",
    height: '700px',
    text: 'Web Design',
    info: '<br><h1>GUITARIST</h1></br><p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p></>'
  },
  {
    src: Woodcraft,
    thumb: Woodcraft2,
    href: 'img/woodcraft.jpg',
    alt: 'Woodcraft',
    size: "560-700",
    height: '700px',
    text: 'Web Design',
    info: '<br><h1>WOODCRAFT</h1></br><p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p></>'
  },
  {
    src: Green,
    thumb: Green2,
    href: 'img/green.jpg',
    alt: 'green',
    size: "560-560",
    height: '560px',
    text: 'Branding',
    info: '<br><h1>GROW GREEN</h1></br><p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p></>'
  },
  {
    src: Palmeira,
    thumb: Palmeira2,
    href: 'img/palmeira.jpg',
    alt: 'Palmeira',
    size: "560-560",
    height: '560px',
    text: 'Web Development',
    info: '<br><h1>THE BEETLE</h1></br><p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p></>'
  }
]

const sliderImages = [
  { 
    src: Apple,
    alt: 'Apple'
  },
  { 
    src: Atom,
    alt: 'Atom'
  },
  { 
    src: Blackberry,
    alt: 'Blackberry'
  },
  { 
    src: Dropbox,
    alt: 'Dropbox'
  },
  { 
    src: Envato,
    alt: 'Envato'
  },
  { 
    src: Firefox,
    alt: 'Firefox'
  },
  { 
    src: Joomla,
    alt: 'Joomla'
  },
  { 
    src: Magento,
    alt: 'Magento'
  },
  { 
    src: Mozilla,
    alt: 'Mozilla'
  },
  { 
    src: Redhat,
    alt: 'Redhat'
  },
  { 
    src: Ubuntu,
    alt: 'Ubuntu'
  },
  { 
    src: Wordpress,
    alt: 'Wordpress'
  }
]

const usersData = [
  {
    src: User1,
    alt: 'User1',
    name: 'Tim Cook',
    title: 'CEO, Apple',
    content: 'Qui ipsam temporibus quisquam vel. Maiores eos cumque distinctio nam accusantium ipsum. Laudantium quia consequatur molestias delectus culpa facere hic dolores aperiam. Accusantium quos qui praesentium corpori. Excepturi nam cupiditate culpa doloremque deleniti repellat.'
  },
  {
    src: User2,
    alt: 'User2',
    name: 'Satya Nadella',
    title: 'CEO, Microsoft',
    content: 'Repellat dignissimos libero. Qui sed at corrupti expedita voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam. Autem eaque officia cum exercitationem sunt voluptatum accusamus. Quasi voluptas eius distinctio.'
  },
  {
    src: User3,
    alt: 'User3',
    name: 'John Doe',
    title: 'CEO, Tesla',
    content: 'Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci. Nisi eaque consequatur. Quasi voluptas eius distinctio. Atque eos maxime. Qui ipsam temporibus quisquam vel.'
  },
  {
    src: User4,
    alt: 'User4',
    name: 'Walter White',
    title: 'CEO, Amazon',
    content: 'Qui ipsam temporibus quisquam vel. Maiores eos cumque distinctio nam accusantium ipsum. Laudantium quia consequatur molestias delectus culpa facere hic dolores aperiam. Accusantium quos qui praesentium corpori. Excepturi nam cupiditate culpa doloremque deleniti repellat.'
  },
  {
    src: User5,
    alt: 'User5',
    name: 'Sundar Pichai',
    title: 'CEO, Google',
    content: "Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci. Nisi eaque consequatur. Quasi voluptas eius distinctio. Atque eos maxime. Qui ipsam temporibus quisquam vel." 
  },
]

const contactFormInfo = [
  { 
    className: 'contact-form-info-about',
    title: 'Where to Find Us',
    text: '1600 Amphitheatre Parkway \n Mountain View, CA \n 94043 US'
  },
  { 
    className: 'contact-form-info-about',    
    title: 'Email Us At',
    text: 'contact@glintsite.com \n info@glintsite.com'
  },
  { 
    className: 'contact-form-info-about',    
    title: 'Call Us At',
    text: 'Phone: (+63) 555 1212 \n Mobile: (+63) 555 0100 \n Fax: (+63) 555 0101'
  }
]

export const Context = createContext();

const DataProvider = ({ children }) => {

    const [ switchMenu, setSwitchMenu ] = useState(false);
    const [ socialInfo, setSocialInfo ] = useState(socialInfoData)
    const [ sideMenuLinks, setSideMenuLinks ] = useState(sideMenuLinksData)
    const [ statsInfo, setRate ] = useState(statsData);
    const [ value, setValue ] = useState(200);
    const [ workItemInfo, setWorkItemInfo ] = useState(workItem);
    const [ imagesInfo, setImagesInfo ] = useState(images);
    const [ loading, setLoading ] = useState(false);
    const [ loadingContent, setLoadingContent ] = useState(true);
    const [ footerSubscribe, setFooterSubscribe ] = useState(false);

    const onMenuToggle = () => setSwitchMenu(!switchMenu);

    const formatValue = value => value.toFixed(0);

    const switchMenuOff = () => {
      switchMenu && setSwitchMenu(false)
    }

    return (
        <Context.Provider 
          value={{ 
            switchMenu, onMenuToggle, socialInfo,
            sideMenuLinks, value, formatValue, 
            statsInfo, workItemInfo, imagesInfo,
            sliderImages, usersData, contactFormInfo,
            loading, setLoading, loadingContent, setLoadingContent,
            switchMenuOff, footerSubscribe, setFooterSubscribe
          }}
        >
          { children }
        </Context.Provider>
      )
}

export default DataProvider