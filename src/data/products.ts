export const products: Products = {
  peliculas: [
    {
      id: 1,
      titulo: "El Padrino",
      genero: "Drama",
      duracion: "175 min",
      image:
        "https://cinematecadebogota.gov.co/sites/default/files/styles/318_x_460/public/afiches/el_padrino-_afiche.jpg?itok=vMLSdQYO",
      clasificacion: "R",
      horarios: [
        {
          hora: "14:00",
          sala: "Sala 1",
          asientos_disponibles: [
            { fila: "A", asientos: [1, 2, 3, 4, 5] },
            { fila: "B", asientos: [1, 2, 3, 4, 5, 6, 7, 8] },
            { fila: "C", asientos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
          ],
        },
        {
          hora: "17:00",
          sala: "Sala 2",
          asientos_disponibles: [
            { fila: "A", asientos: [1, 2, 3, 4, 5, 6, 7, 8] },
            { fila: "B", asientos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
            { fila: "C", asientos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
          ],
        },
      ],
    },
    {
      id: 2,
      titulo: "Interestelar",
      genero: "Ciencia Ficción",
      image:
        "https://play-lh.googleusercontent.com/Kf_1fCIuuy2ufsEBKwv08e9AvzwrSyCItG6Nsk4C2tGurknKjOS0H8k9KldDPC6hfzc",
      duracion: "169 min",
      clasificacion: "PG-13",
      horarios: [
        {
          hora: "15:00",
          sala: "Sala 3",
          asientos_disponibles: [
            { fila: "A", asientos: [1, 2, 3, 4, 5, 6, 7, 8] },
            { fila: "B", asientos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
            { fila: "C", asientos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
          ],
        },
        {
          hora: "18:00",
          sala: "Sala 4",
          asientos_disponibles: [
            { fila: "A", asientos: [1, 2, 3, 4, 5, 6, 7, 8] },
            { fila: "B", asientos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
            { fila: "C", asientos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
          ],
        },
      ],
    },
    {
      id: 3,
      titulo: "El Señor de los Anillos: La Comunidad del Anillo",
      image:
        "https://static.wikia.nocookie.net/bibliotecadelatierramedia/images/2/2c/Lacomunidaddelanillo.jpg/revision/latest?cb=20130713130646&path-prefix=es",
      genero: "Fantasía",
      duracion: "178 min",
      clasificacion: "PG-13",
      horarios: [
        {
          hora: "16:00",
          sala: "Sala 5",
          asientos_disponibles: [
            { fila: "A", asientos: [1, 2, 3, 4, 5, 6, 7, 8] },
            { fila: "B", asientos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
            { fila: "C", asientos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
          ],
        },
        {
          hora: "19:00",
          sala: "Sala 6",
          asientos_disponibles: [
            { fila: "A", asientos: [1, 2, 3, 4, 5, 6, 7, 8] },
            { fila: "B", asientos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
            { fila: "C", asientos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
          ],
        },
      ],
    },
    {
      id: 4,
      titulo: "Titanic",
      image:
        "https://www.movieposters.com/cdn/shop/products/b0f2347bac01abb4b8c4bdb0c460976f_480x.progressive.jpg?v=1573572675",
      genero: "Romance",
      duracion: "195 min",
      clasificacion: "PG-13",
      horarios: [
        {
          hora: "14:30",
          sala: "Sala 7",
          asientos_disponibles: [
            { fila: "A", asientos: [1, 2, 3, 4, 5, 6, 7, 8] },
            { fila: "B", asientos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
            { fila: "C", asientos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
          ],
        },
        {
          hora: "17:30",
          sala: "Sala 8",
          asientos_disponibles: [
            { fila: "A", asientos: [1, 2, 3, 4, 5, 6, 7, 8] },
            { fila: "B", asientos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
            { fila: "C", asientos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
          ],
        },
      ],
    },
    {
      id: 5,
      titulo: "Matrix",
      image:
        "https://www.originalfilmart.com/cdn/shop/products/the_matrix_1999_fr_original_film_art_a_600x.jpg?v=1640646540",
      genero: "Ciencia Ficción",
      duracion: "136 min",
      clasificacion: "R",
      horarios: [
        {
          hora: "15:30",
          sala: "Sala 9",
          asientos_disponibles: [
            { fila: "A", asientos: [1, 2, 3, 4, 5, 6, 7, 8] },
            { fila: "B", asientos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
            { fila: "C", asientos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
          ],
        },
        {
          hora: "18:30",
          sala: "Sala 10",
          asientos_disponibles: [
            { fila: "A", asientos: [1, 2, 3, 4, 5, 6, 7, 8] },
            { fila: "B", asientos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
            { fila: "C", asientos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
          ],
        },
      ],
    },
    {
      id: 6,
      titulo: "Jurassic Park",
      image:
        "https://i.pinimg.com/736x/13/cf/bd/13cfbda98ffcb3b8e4ff4d9850166d6e.jpg",
      genero: "Aventura",
      duracion: "127 min",
      clasificacion: "PG-13",
      horarios: [
        {
          hora: "16:30",
          sala: "Sala 11",
          asientos_disponibles: [
            { fila: "A", asientos: [1, 2, 3, 4, 5, 6, 7, 8] },
            { fila: "B", asientos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
            { fila: "C", asientos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
          ],
        },
        {
          hora: "19:30",
          sala: "Sala 12",
          asientos_disponibles: [
            { fila: "A", asientos: [1, 2, 3, 4, 5, 6, 7, 8] },
            { fila: "B", asientos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
            { fila: "C", asientos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
          ],
        },
      ],
    },
    {
      id: 7,
      titulo: "Forrest Gump",
      image: "https://i.ebayimg.com/images/g/A8sAAOSwMIphZOs6/s-l1200.jpg",
      genero: "Drama",
      duracion: "142 min",
      clasificacion: "PG-13",
      horarios: [
        {
          hora: "14:00",
          sala: "Sala 13",
          asientos_disponibles: [
            { fila: "A", asientos: [1, 2, 3, 4, 5, 6, 7, 8] },
            { fila: "B", asientos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
            { fila: "C", asientos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
          ],
        },
        {
          hora: "17:00",
          sala: "Sala 14",
          asientos_disponibles: [
            { fila: "A", asientos: [1, 2, 3, 4, 5, 6, 7, 8] },
            { fila: "B", asientos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
            { fila: "C", asientos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
          ],
        },
      ],
    },
    {
      id: 8,
      titulo: "Inception",
      image:
        "https://m.media-amazon.com/images/I/71dOgL9VF3L._AC_UF894,1000_QL80_.jpg",
      genero: "Ciencia Ficción",
      duracion: "148 min",
      clasificacion: "PG-13",
      horarios: [
        {
          hora: "15:00",
          sala: "Sala 15",
          asientos_disponibles: [
            { fila: "A", asientos: [1, 2, 3, 4, 5, 6, 7, 8] },
            { fila: "B", asientos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
            { fila: "C", asientos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
          ],
        },
        {
          hora: "18:00",
          sala: "Sala 16",
          asientos_disponibles: [
            { fila: "A", asientos: [1, 2, 3, 4, 5, 6, 7, 8] },
            { fila: "B", asientos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
            { fila: "C", asientos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
          ],
        },
      ],
    },
    {
      id: 9,
      titulo: "El Rey León",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/rey-leon-poster-1551063927.jpeg",
      genero: "Animación",
      duracion: "88 min",
      clasificacion: "G",
      horarios: [
        {
          hora: "16:00",
          sala: "Sala 17",
          asientos_disponibles: [
            { fila: "A", asientos: [1, 2, 3, 4, 5, 6, 7, 8] },
            { fila: "B", asientos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
            { fila: "C", asientos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
          ],
        },
        {
          hora: "19:00",
          sala: "Sala 18",
          asientos_disponibles: [
            { fila: "A", asientos: [1, 2, 3, 4, 5, 6, 7, 8] },
            { fila: "B", asientos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
            { fila: "C", asientos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
          ],
        },
      ],
    },
    {
      id: 10,
      titulo: "Avengers: Endgame",
      image:
        "https://images-cdn.ubuy.co.in/633feb99b0c4240a6e30e463-poster-stop-online-avengers-endgame.jpg",
      genero: "Acción",
      duracion: "181 min",
      clasificacion: "PG-13",
      horarios: [
        {
          hora: "14:00",
          sala: "Sala 19",
          asientos_disponibles: [
            { fila: "A", asientos: [1, 2, 3, 4, 5, 6, 7, 8] },
            { fila: "B", asientos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
            { fila: "C", asientos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
          ],
        },
        {
          hora: "17:00",
          sala: "Sala 20",
          asientos_disponibles: [
            { fila: "A", asientos: [1, 2, 3, 4, 5, 6, 7, 8] },
            { fila: "B", asientos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
            { fila: "C", asientos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
          ],
        },
      ],
    },
  ],
  snacks: [
    {
      id: 1,
      nombre: "Palomitas Grandes",
      precio: 5.99,
      descripcion: "Palomitas de maíz grandes con mantequilla.",
    },
    {
      id: 2,
      nombre: "Refresco Mediano",
      precio: 3.99,
      descripcion: "Refresco mediano de cola.",
    },
    {
      id: 3,
      nombre: "Nachos con Queso",
      precio: 6.99,
      descripcion: "Nachos con queso fundido y jalapeños.",
    },
    {
      id: 4,
      nombre: "Chocolatina",
      precio: 2.99,
      descripcion: "Chocolatina de leche.",
    },
  ],
};

export interface Products {
  peliculas: Pelicula[];
  snacks: Snack[];
}

export interface Pelicula {
  id: number;
  titulo: string;
  image: string;
  genero: string;
  duracion: string;
  clasificacion: string;
  horarios: Horario[];
}

export interface Horario {
  hora: string;
  sala: string;
  asientos_disponibles: AsientosDisponible[];
}

export interface AsientosDisponible {
  fila: string;
  asientos: number[];
}

export interface Snack {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
}
