import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from '@mui/material';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from './containers/HomeContainer'
import Post from './containers/PostContainer'
import PostDetail from './containers/PostDetailContainer'
import TopNavigator from './containers/TopNavigatorContainer'
import Tag from './containers/TagContainer'
import Categories from './containers/CategoriesContainer'
import Author from './containers/AuthorContainer'

const App: React.FC = () => {
  return (

    <div style={{ backgroundColor: '#FAFAFA' }} >
      <TopNavigator />
      <Container maxWidth="sm" style={{ backgroundColor: 'white' }}>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tag" element={<Tag />} />
            <Route path="/tag/post/:tags_params" element={<Post />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/post/:categories_params" element={<Post />} />
            <Route path="/author" element={<Author />} />
            <Route path="/author/post/:author_params" element={<Post />} />
            <Route path="/post" element={<Post />} />
            <Route path="/post/detail/:post_id_params" element={<PostDetail />} />

          </Routes>
        </BrowserRouter>

      </Container>
    </div>

  );
}

export default App;
