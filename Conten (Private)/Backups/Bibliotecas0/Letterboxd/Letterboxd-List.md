---
title: Listas de CIne
Component: tue
---
<style>
  .letterboxd-lists {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    padding: 1rem 0;
  }

  .list-card {
    background-color: #111;
    border: 1px solid #333;
    border-radius: 1rem;
    padding: 1.2rem;
    color: #fff;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    transition: transform 0.2s ease, box-shadow 0.3s ease;
  }

  .list-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.4);
  }

  .list-card a {
    text-decoration: none;
    color: #00b0f4;
    font-size: 1.1rem;
    font-weight: 600;
  }

  .list-card p {
    margin-top: 0.4rem;
    font-size: 0.9rem;
    color: #bbb;
  }
</style>

<div class="letterboxd-lists">
  <div class="list-card">
    <a href="https://letterboxd.com/lukas333/list/cine-y-poder/" target="_blank">Cine y poder</a>
    <p>Películas que abordan dinámicas de poder, política o resistencia.</p>
  </div>
  <div class="list-card">
    <a href="https://letterboxd.com/lukas333/list/cine-ensayo/" target="_blank">Cine ensayo</a>
    <p>Películas híbridas entre el documental, la poesía y la reflexión.</p>
  </div>
  <div class="list-card">
    <a href="https://letterboxd.com/lukas333/list/cine-y-espiritualidad/" target="_blank">Cine y espiritualidad</a>
    <p>Exploraciones del alma, la trascendencia y lo sagrado en el cine.</p>
  </div>
  <div class="list-card">
    <a href="https://letterboxd.com/lukas333/list/cine-y-memoria/" target="_blank">Cine y memoria</a>
    <p>Relatos que giran en torno a la historia, la identidad y el recuerdo.</p>
  </div>
  <div class="list-card">
    <a href="https://letterboxd.com/lukas333/list/cine-experimental/" target="_blank">Cine experimental</a>
    <p>Películas que expanden los límites narrativos y visuales del cine.</p>
  </div>
</div>

