import one from '../../assets/images/1.jpg'
import ten from '../../assets/images/10.jpg'
import two from '../../assets/images/2.jpg'
import three from '../../assets/images/3.jpeg'
import four from '../../assets/images/4.jpg'
import five from '../../assets/images/5.jpg'
import six from '../../assets/images/6.jpg'
import seven from '../../assets/images/7.jpg'
import  eight from '../../assets/images/8.jpg'
import nine from '../../assets/images/9.jpg'
import Dano from '../../assets/images/dano.png'
import Rush from '../../assets/images/rush.jpeg'
import TV3 from '../../assets/images/tv3.jpg'
interface contestant {
    name: string;
    picture:unknown;
    shortCode:string;
  }

interface AD {
    name:string;
    Pic:unknown;
}

const Data:contestant[] =[
    {
        name:'Julius Sed',
        shortCode:'447',
        picture: one
    },
    {
        name:'Ben White',
        shortCode:'447',
        picture:two
    },
    {
        name:'Chris Man',
        shortCode:'447',
        picture:three
    },
    {
        name:'Edna Mel',
        shortCode:'447',
        picture:four
    },
    {
        name:'Bull Rock',
        shortCode:'447',
        picture:five
    },
    {
        name:'Lisa Qwam',
        shortCode:'447',
        picture:six
    },
    {
        name:'Jil Fed',
        shortCode:'447',
        picture:seven
    },
    {
        name:'Billy Mac Joe',
        shortCode:'447',
        picture:eight
    },
    {
        name:'Franka Del',
        shortCode:'447',
        picture:nine
    },
    {
        name:'Ver Nica',
        shortCode:'447',
        picture:ten
    },
]

const sponsors :AD[] =[
    {
        name:'Dano Milk',
        Pic:''
    },
    {
        name:'TV3',
        Pic:''
    },
    {
        name:'Rush',
        Pic:''
    },
]

export {Data,sponsors}