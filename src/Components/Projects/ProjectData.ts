export interface Project {
    title: string;
    description: string;
    image: string;
    github?: string;
    demo?: string;
  }
  
 
  import netflixImg from '../../assets/netflixImg.png';
  import pixelImg from '../../assets/pixelImg.png';
  import orguImg from '../../assets/orguImg.png';
  import taxiImg from '../../assets/taxiImg.png';
  import todoImg from '../../assets/todoImg.png';
  import quizImg from '../../assets/quizImg.png';
  
  export const projectList: Project[] = [
    {
      image: netflixImg,
      title: 'Netflix Clone',
      description: 'React + Firebase ile yapılmış bir film platformu.',
      github: 'https://github.com/denizpiyala/netflix.git',
      demo: 'https://netflix-clone.vercel.app'
    },
    {
      image: pixelImg,
      title: 'Pixel Art Oyunu',
      description: 'Canvas ile geliştirilmiş basit piksel oyunu.',
      github: 'https://github.com/denizpiyala/pixel-art.git',
    },
    {
      image: orguImg,
      title: 'Örgü E-Ticaret Sitesi',
      description: 'Annem için yapılan butik e-ticaret sitesi.',
      github: 'https://github.com/denizpiyala/orgu-sitesi.git',
      demo: 'https://orgu-sitesi.vercel.app'
    },
    {
      image: taxiImg,
      title: 'Taksi Sitesi',
      description: 'Responsive web tasarım çalışması.',
    },
    {
      image: todoImg,
      title: 'To-Do List App',
      description: 'Kullanıcı arayüzü ve veri yönetimi odaklı uygulama.',
      github: 'https://github.com/denizpiyala/todo-list-app.git',
    },
    {
      image: quizImg,
      title: 'Quiz App',
      description: 'Sorular hazırlayıp puanlama sistemiyle çalışan uygulama.',
      github: 'https://github.com/denizpiyala/Quiz-APP.git',
    }
  ];
  