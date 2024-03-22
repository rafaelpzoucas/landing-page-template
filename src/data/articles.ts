import { ArticleType } from '@/model/articles'
import image from '../../public/hero-image.jpg'

export const articles: ArticleType = {
  title: 'Artigos',
  data: [
    {
      id: 1,
      cover_img: image,
      title:
        'Principais Aspectos da Lei de Propriedade Intelectual: Protegendo sua Criatividade',
      summary:
        'Explore os fundamentos da lei de propriedade intelectual e saiba como proteger suas ideias e criações.',
      body: 'A lei de propriedade intelectual é essencial para proteger o trabalho criativo e inovador de indivíduos e empresas. Este artigo explora os conceitos-chave da lei de propriedade intelectual, incluindo direitos autorais, marcas registradas e patentes. Descubra como registrar e proteger suas obras criativas, produtos e invenções. Além disso, saiba como aplicar a lei de propriedade intelectual para evitar violações e proteger seus direitos.',
    },
    {
      id: 2,
      cover_img: image,
      title: 'Os Direitos do Consumidor: O que Você Precisa Saber',
      summary:
        'Descubra seus direitos como consumidor e saiba como agir em caso de problemas com produtos ou serviços.',
      body: 'Como consumidor, é fundamental entender seus direitos para garantir transações justas e seguras. Este artigo explora os direitos do consumidor, incluindo garantias de produtos, práticas comerciais enganosas e direitos de devolução. Saiba como resolver disputas com fornecedores e empresas e como buscar compensação por produtos defeituosos ou serviços inadequados. Conhecendo seus direitos como consumidor, você pode tomar decisões informadas e proteger-se contra práticas comerciais injustas.',
    },
    {
      id: 3,
      cover_img: image,
      title:
        'Guia Completo para Iniciar seu Negócio: Aspectos Legais Essenciais',
      summary:
        'Obtenha orientações sobre os aspectos legais fundamentais ao iniciar um negócio, desde a formação da empresa até contratos e licenças.',
      body: 'Iniciar um negócio envolve uma série de considerações legais que podem parecer complicadas à primeira vista. Este artigo oferece um guia abrangente para os aspectos legais essenciais ao iniciar um negócio. Desde a escolha da estrutura legal adequada até a redação de contratos e a obtenção de licenças e permissões, você encontrará orientações claras e práticas para garantir que seu empreendimento esteja em conformidade com a legislação aplicável e protegido legalmente.',
    },
    {
      id: 4,
      cover_img: image,
      title: 'Direitos Trabalhistas: Entenda seus Direitos e Proteções',
      summary:
        'Conheça seus direitos básicos como trabalhador, incluindo horas de trabalho, salários, férias e segurança no local de trabalho.',
      body: 'Os direitos trabalhistas são fundamentais para garantir condições de trabalho justas e seguras para todos os trabalhadores. Neste artigo, você encontrará informações essenciais sobre seus direitos como trabalhador, incluindo horas de trabalho, salários mínimos, direitos de férias e licença-maternidade. Além disso, saiba como identificar e relatar violações dos seus direitos trabalhistas, e como buscar reparação por práticas ilegais ou injustas por parte do empregador. Entender seus direitos trabalhistas é essencial para garantir um ambiente de trabalho justo e respeitoso.',
    },
  ],
}
