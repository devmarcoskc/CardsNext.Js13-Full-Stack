"use client";
import { useState, useEffect } from 'react'
import PromptCardList from '@components/PromptCardList';

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);
  const [searchedTags, setSearchedTags] = useState([]);

  const handleSubmitSearch = async (e) => {
    e.preventDefault();
    if(searchText !== '') {
      const response = await fetch(`/api/search/${searchText}`);
      const data = response.json();

      console.log(data);
    }
  }


  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();
      setPosts(data);
    }
    
    fetchPosts();
  }, []);

  return (
    <section className="feed">

    {searchText !== '' && searchedTags.length > 0 ? (
      <PromptCardList
        data={searchedTags}
        handleTagClick={() => {}}
      />
    ): (
      <PromptCardList
        data={posts}
        handleTagClick={() => {}}
      />
    )}
      
    </section>
  )
}

export default Feed