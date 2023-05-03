import React, { useEffect, useState } from 'react';
import './qoute.css';

const Qoute = () => {
  const [post, setPost] = useState(null);
  const [loading, setLodaing] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLodaing(true);
    fetch('https://api.api-ninjas.com/v1/quotes?category=learning', {
      headers: { 'X-Api-Key': '84YS7bLMpfxrGyx4C7aVBg==Jolxl4TmPSqtVMu7' },
    })
      .then((response) => response.json())
      .then((data) => {
        const body = `${data[0].quote} - by ${data[0].author}`;
        setPost(body);
        setLodaing(false);
        setError(null);
      })
      .catch(() => {
        setError('error fetching.');
        setLodaing(false);
      });
  }, []);
  return (
    <div className="qoute_container">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <div className="qoute_paragraph">
          <p>{post}</p>
        </div>
      )}
    </div>
  );
};

export default Qoute;
