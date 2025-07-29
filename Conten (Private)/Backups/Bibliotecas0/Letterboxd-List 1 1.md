---
title: Listas de CIne
Component: tue
---
<style>
  .lb-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #111;
    padding: 1rem;
    border-radius: 1rem;
    border: 1px solid #333;
    max-width: 360px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    margin-bottom: 2rem;
  }

  .lb-list a {
    text-decoration: none;
  }

  .poster-list {
    display: flex;
    margin-bottom: 1rem;
    margin-left: -25px; /* Desplaza todo hacia la izquierda */
  }

  .poster-list li {
    list-style: none;
    margin-right: -25px; /* Solapamiento más agresivo */
    position: relative;
    z-index: 1;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.4);
    transition: transform 0.2s ease;
  }

  .poster-list li:hover {
    transform: scale(1.05);
    z-index: 2;
  }

  .poster-list img {
    width: 80px; /* Más grandes */
    height: 120px;
    object-fit: cover;
    display: block;
  }

  .lb-list h2 {
    font-size: 1rem;
    color: #00b0f4;
    margin: 0 0 0.2rem 0;
  }

  .lb-list p {
    margin: 0;
    color: #ccc;
    font-size: 0.85rem;
  }

  .lb-list a:after {
    display: none !important;
  }
</style>

<div class="lb-list">
  <a href="https://letterboxd.com/lukas333/list/espanol/" target="_blank">
    <ul class="poster-list">
      <li><img src="https://a.ltrbxd.com/resized/sm/upload/g4/ie/ev/ab/8oKnNiu7Ijt1ESAEvANYhROGQiv-0-70-0-105-crop.jpg?v=181b839831" alt="Rapture"></li>
      <li><img src="https://a.ltrbxd.com/resized/film-poster/4/7/2/9/3/47293-thesis-0-70-0-105-crop.jpg?v=48f6347cb5" alt="Thesis"></li>
      <li><img src="https://a.ltrbxd.com/resized/film-poster/9/6/6/4/6/7/966467-creatura-0-70-0-105-crop.jpg?v=06178af15c" alt="Creatura"></li>
      <li><img src="https://a.ltrbxd.com/resized/film-poster/2/1/7/2/0/21720-martin-hache--0-70-0-105-crop.jpg?v=3539cd0e22" alt="Martin (Hache)"></li>
      <li><img src="https://a.ltrbxd.com/resized/film-poster/5/1/0/6/8/51068-y-tu-mama-tambien-0-70-0-105-crop.jpg?v=1052852218" alt="Y Tu Mamá También"></li>
    </ul>
    <h2>Español</h2>
    <p>Vistas y pendientes</p>
  </a>
</div>
