// 로딩 화면 전환 로직
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('--Loading').style.opacity = '0';
        document.getElementById('--Loading').style.pointerEvents = 'none';
        document.getElementById('conteudo').style.display = 'block';
    }, 2000);
});

// 드래그 기능 구현
const card = document.querySelector('.pokemon-card');

card.addEventListener('dragstart', (e) => {
    setTimeout(() => {
        e.target.style.opacity = '0.5';
    }, 0);
});

card.addEventListener('dragend', (e) => {
    e.target.style.opacity = '1';
    
    // 마우스 위치로 카드 이동
    const x = e.clientX;
    const y = e.clientY;
    
    card.style.position = 'absolute';
    card.style.left = x - card.offsetWidth / 2 + 'px';
    card.style.top = y - card.offsetHeight / 2 + 'px';
});

// 포켓몬 데이터
const pokemon = [
    {
        name: "Pikachu",
        description: "An Electric-type Pokemon known for its yellow color and lightning-bolt tail.",
        image: "images/pikachu.png",
        hp: "60"
    },
    {
        name: "Psyduck",
        description: "A Water-type Pokemon that constantly suffers from headaches. When its headache becomes too severe, it uses powerful psychic abilities.",
        image: "images/psyduck.jpeg",
        hp: "50"
    },
    {
        name: "Bulbasaur",
        description: "A Grass/Poison-type Pokemon with a plant bulb on its back.",
        image: "images/bulba.jpg",
        hp: "45"
    }
];

// Generate 버튼 기능
document.getElementById('generate-button').addEventListener('click', () => {
    const randomPokemon = pokemon[Math.floor(Math.random() * pokemon.length)];
    
    // 카드 정보 업데이트
    document.getElementById('card-text').textContent = randomPokemon.name;
    document.getElementById('desc').textContent = randomPokemon.description;
    document.getElementById('card-image').src = randomPokemon.image;
    
    // HP 업데이트
    document.querySelector('.hp').textContent = `HP ${randomPokemon.hp}`;
    
    // 카드 색상 랜덤 변경
    const colors = [
        'linear-gradient(145deg, #ffd700, #ffa500)',
        'linear-gradient(145deg, #ff7675, #d63031)',
        'linear-gradient(145deg, #74b9ff, #0984e3)',
        'linear-gradient(145deg, #00b894, #00cec9)'
    ];
    document.querySelector('.pokemon-card').style.background = 
        colors[Math.floor(Math.random() * colors.length)];
});