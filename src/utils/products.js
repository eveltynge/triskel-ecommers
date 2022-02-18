const products = [
    {
      id: 1,
      title: "Almohadón Teseo",
      stock: 3,
      price: 2000,
      description: "Almohadón de 40x40cm, en hilo de algodón color crema.",
      image_url: "https://placekitten.com/400/300",
      category_id: 4,
      category: {
        name: "Accesorios",
        id: 4,
      }
    },
    {
      id: 2,
      title: "Lámpara Sáuco",
      stock: 4,
      price: 3000,
      description: "Los aros de madera le dan la estructura, y el hilo en tono crema la textura.",
      image_url: "https://placekitten.com/300/300",
      category_id:4,
      category: {
        name: "Accesorios",
        id: 4,
      }
    },
    {
      id: 3,
      title: "Tapiz Selene",
      stock: 4,
      price: 4000,
      description: "Hecho sobre madera recuperada, hermoso y sencillo tapiz de cuerda de algodón.",
      image_url: "https://placekitten.com/300/400",
      category_id: 3,
      category: {
        name: "Tapiz",
        id: 3,
      }
    }
]

export default products;