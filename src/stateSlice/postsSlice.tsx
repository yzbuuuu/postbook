import {createSlice} from "@reduxjs/toolkit";

const initialPosts = [
    {
      id: 1,
      isFavorited: false,
      title: 'Homenaje a la Neurocirugía by Marta Colvin Andrade',
      context:
        'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',
    },
    {
      id: 2,
      isFavorited: false,
      title: 'Floralis Genérica by Eduardo Catalano',
      context:
        'This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.',
    },
    {
      id: 3,
      isFavorited: false,
      title: 'Eternal Presence by John Woodrow Wilson',
      context:
        'Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind. This massive (7ft. or 2,13m) bronze represents what he described as "a symbolic Black presence infused with a sense of universal humanity."',
    },
    {
      id: 4,
      isFavorited: false,
      title: 'Moai by Unknown Artist',
      context:
        'Located on the Easter Island, there are 1,000 moai, or extant monumental statues, created by the early Rapa Nui people, which some believe represented deified ancestors.',
    },
    {
      id: 5,
      isFavorited: false,
      title: 'Blue Nana by Niki de Saint Phalle',
      context:
        'The Nanas are triumphant creatures, symbols of femininity and maternity. Initially, Saint Phalle used fabric and found objects for the Nanas, and later on introduced polyester to achieve a more vibrant effect.',
    },
    {
      id: 6,
      isFavorited: false,
      title: 'Ultimate Form by Barbara Hepworth',
      context:
        'This abstract bronze sculpture is a part of The Family of Man series located at Yorkshire Sculpture Park. Hepworth chose not to create literal representations of the world but developed abstract forms inspired by people and landscapes.',
    },
    {
      id: 7,
      isFavorited: false,
      title: 'Cavaliere by Lamidi Olonade Fakeye',
      context:
        "Descended from four generations of woodcarvers, Fakeye's work blended traditional and contemporary Yoruba themes.",
    },
    {
      id: 8,
      isFavorited: false,
      title: 'Big Bellies by Alina Szapocznikow',
      context:
        'Szapocznikow is known for her sculptures of the fragmented body as a metaphor for the fragility and impermanence of youth and beauty. This sculpture depicts two very realistic large bellies stacked on top of each other, each around five feet (1,5m) tall.',
    },
    {
      id: 9,
      isFavorited: false,
      title: 'Terracotta Army by Unknown Artist',
      context:
        'This abstract bronze sculpture is a part of The Family of Man series located at Yorkshire Sculpture Park. Hepworth chose not to create literal representations of the world but developed abstract forms inspired by people and landscapes.',
    },
    {
      id: 10,
      isFavorited: false,
      title: 'Lunar Landscape by Louise Nevelson',
      context:
        'Nevelson was known for scavenging objects from New York City debris, which she would later assemble into monumental constructions. In this one, she used disparate parts like a bedpost, juggling pin, and seat fragment, nailing and gluing them into boxes that reflect the influence of Cubism’s geometric abstraction of space and form.',
    },
    {
      id: 11,
      isFavorited: false,
      title: 'Aureole by Ranjani Shettar',
      context:
        'Shettar merges the traditional and the modern, the natural and the industrial. Her art focuses on the relationship between man and nature. Her work was described as compelling both abstractly and figuratively, gravity defying, and a "fine synthesis of unlikely materials."',
    },
    {
      id: 12,
      isFavorited: false,
      title: 'Hippos by Taipei Zoo',
      context:
        'The Taipei Zoo commissioned a Hippo Square featuring submerged hippos at play.',
    },
  ];

const postsSlice = createSlice({
    name: 'posts',
    initialState: initialPosts,
    reducers: {
      deletePost: (state, action) =>
        state.filter(post => post.id !== action.payload),
      addPost: (state, action) => {
        const newPost = {
          id: Date.now(),
          isFavorited: false,
          title: action.payload.title,
          context: action.payload.content,
        };
        state.push(newPost);
      },
      updatePost:(state, action) => {
          const index = state.findIndex(post => post.id === action.payload.id);
          if (index !== -1) {
            state[index] = { ...state[index], ...action.payload };
          }
      },
    },
  });

export const{deletePost,addPost,updatePost}=postsSlice.actions
export default postsSlice.reducer