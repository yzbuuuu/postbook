import React, {useState, createContext} from 'react';

interface PostType {
  id:number,
  title: string;
  context: string;
}

export const PostContext = createContext<PostType[]>([]);
