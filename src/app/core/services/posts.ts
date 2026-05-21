import { Injectable } from '@angular/core';
import {
  Post, Recomendado, ValorCard,
  MisionCard, CarouselSlide, Sugerencia
} from '../models/post.model';

@Injectable({ providedIn: 'root' })
export class PostsService {
  getSlides(): CarouselSlide[] {
    return [
      {
        id: 1,
        img: '/assets/images/slide-1.jpg',
        titulo: 'Explora nuevas fronteras',
        subtitulo: 'Conecta la ciencia con la investigación aplicada'
      },
      {
        id: 2,
        img: '/assets/images/slide-2.jpg',
        titulo: 'Conecta comunidades',
        subtitulo: 'Comparte hallazgos y propón soluciones reales'
      },
      {
        id: 3,
        img: '/assets/images/slide-3.jpg',
        titulo: 'Impulsa el cambio',
        subtitulo: 'Investiga y comparte ideas para un futuro sostenible'
      },
      {
        id: 4,
        img: '/assets/images/pub-hands.jpg',
        titulo: 'Colabora en el territorio',
        subtitulo: 'Transforma la investigación en impacto local'
      }
    ];
  }

  getPosts(): Post[] {
    return [
      {
        id: 1,
        img: 'https://picsum.photos/seed/agro1/600/340',
        titulo: 'Avances en agricultura sostenible en el Eje Cafetero',
        desc: 'Un recorrido por nuevas técnicas de cultivo y biotecnología aplicadas al territorio colombiano. Investigadores de la región presentan resultados preliminares del uso de bioestimulantes en cultivos de café.',
        votos: 230,
        comentarios: 42,
        categoria: 'AGROECOLOGÍA',
        categoriaColor: '#e0f0ea',
        autor: 'Dr. Carlos Rivas',
        avatar: 'https://picsum.photos/seed/autor1/40/40',
        tiempo: 'Hace 1 hora'
      },
      {
        id: 2,
        img: 'https://picsum.photos/seed/agro2/600/340',
        titulo: 'Biología sintética y agroecosistemas: el futuro del campo',
        desc: 'Cómo la biología sintética impulsa soluciones innovadoras para el campo colombiano. Un análisis de los proyectos en marcha en universidades del país y su impacto potencial en la seguridad alimentaria.',
        votos: 178,
        comentarios: 31,
        categoria: 'BIOTECNOLOGÍA',
        categoriaColor: '#e8f4fd',
        autor: 'Ana Milena Torres',
        avatar: 'https://picsum.photos/seed/autor2/40/40',
        tiempo: 'Hace 3 horas'
      },
      {
        id: 3,
        img: 'https://picsum.photos/seed/agro3/600/340',
        titulo: 'Uso de drones en monitoreo de cultivos andinos',
        desc: 'La tecnología de drones con sensores multiespectrales permite detectar plagas y deficiencias nutricionales en tiempo real, reduciendo el uso de agroquímicos hasta en un 40% en parcelas piloto.',
        votos: 154,
        comentarios: 27,
        categoria: 'TECNOLOGÍA',
        categoriaColor: '#fef0e0',
        autor: 'Ing. Pedro Morales',
        avatar: 'https://picsum.photos/seed/autor3/40/40',
        tiempo: 'Hace 5 horas'
      }
    ];
  }

  getRecomendados(): Recomendado[] {
    return [
      {
        id: 1,
        img1: '/assets/images/reco-1a.jpg',
        img2: '/assets/images/reco-1b.jpg',
        titulo: 'Tecnologías emergentes',
        desc: 'Explora métodos avanzados en investigación aplicada al agro.',
        likes: '102',
        shares: '19',
        comments: '8'
      },
      {
        id: 2,
        img1: '/assets/images/reco-2a.jpg',
        img2: '/assets/images/reco-2b.jpg',
        titulo: 'Redes de investigación',
        desc: 'Conecta investigadores y proyectos en todo el país.',
        likes: '85',
        shares: '14',
        comments: '5'
      }
    ];
  }

  getSugerencias(): Sugerencia[] {
    return [
      {
        id: 1,
        autor: 'Dr. Julian V.',
        avatar: 'https://picsum.photos/seed/doc1/40/40',
        tiempo: 'Hace 2 horas',
        categoria: 'BIOTECNOLOGÍA',
        categoriaColor: '#e0f0ea',
        titulo: 'La importancia de la biotecnología en la seguridad alimentaria global',
        desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit ante dictumst at, augue venenatis habitasse convallis ut sagittis inceptos eget a sollicitudin, arcu etiam',
        votos: 124,
        comentarios: 48
      },
      {
        id: 2,
        autor: 'Sarah Chen',
        avatar: 'https://picsum.photos/seed/doc2/40/40',
        tiempo: 'Hace 5 horas',
        categoria: 'INVESTIGACIÓN',
        categoriaColor: '#e0eaf5',
        titulo: 'Metodologías emergentes en la secuenciación de nanoporos',
        desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit ante dictumst at, augue venenatis habitasse convallis ut sagittis inceptos eget a sollicitudin, arcu etiam',
        votos: 89,
        comentarios: 22
      },
      {
        id: 3,
        autor: 'María López',
        avatar: 'https://picsum.photos/seed/doc3/40/40',
        tiempo: 'Hace 8 horas',
        categoria: 'INNOVACIÓN',
        categoriaColor: '#fef0e0',
        titulo: 'Nuevas aplicaciones de CRISPR-Cas9 en el tratamiento de enfermedades raras',
        desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit ante dictumst at, augue venenatis habitasse convallis ut sagittis inceptos eget a sollicitudin, arcu etiam',
        votos: 67,
        comentarios: 15
      }
    ];
  }

  getMisiones(): MisionCard[] {
    return [
      {
        id: 1,
        img: '/assets/images/mision-1.jpg',
        titulo: 'Investigación aplicada',
        desc: 'Transformar hallazgos científicos en soluciones tangibles para el campo.'
      },
      {
        id: 2,
        img: '/assets/images/mision-2.jpg',
        titulo: 'Impacto territorial',
        desc: 'Conectar la ciencia con las comunidades rurales y la sostenibilidad ambiental.'
      }
    ];
  }

  getValores(): ValorCard[] {
    return [
      {
        id: 1,
        icono: '🌱',
        titulo: 'Sostenibilidad',
        desc: 'Priorizamos soluciones que cuiden el medio ambiente y el futuro del agro.',
        likes: '52',
        shares: '11',
        comments: '4'
      },
      {
        id: 2,
        icono: '🔬',
        titulo: 'Innovación',
        desc: 'Impulsamos nuevas ideas científicas para resolver problemas reales.',
        likes: '69',
        shares: '16',
        comments: '7'
      }
    ];
  }
}