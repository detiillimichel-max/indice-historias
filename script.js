// Banco de dados estruturado das histórias
const storiesData = [
    {
        file: "1000049424.png",
        title: "Jesus ensinando a multidão",
        type: "Imagem"
    },
    {
        file: "1000049425.mp4",
        title: "O Rei Herodes demonstrando fúria",
        type: "Vídeo"
    },
    {
        file: "1000049426.mp4",
        title: "Jesus abençoando as crianças",
        type: "Vídeo"
    },
    {
        file: "1000049427.mp4",
        title: "João Batista pregando no deserto",
        type: "Vídeo"
    },
    {
        file: "1000049428.mp4",
        title: "Batismo de Jesus por João Batista",
        type: "Vídeo"
    },
    {
        file: "1000049429.png",
        title: "Descida do Espírito Santo em forma de pomba",
        type: "Imagem"
    },
    {
        file: "1000049430.mp4",
        title: "Luz divina sobre Jesus no Batismo",
        type: "Vídeo"
    },
    {
        file: "1000049431.mp4",
        title: "Encontro de Jesus com João Batista no Rio Jordão",
        type: "Vídeo"
    },
    {
        file: "1000049432.mp4",
        title: "Menino Jesus no Templo com os mestres da lei",
        type: "Vídeo"
    }
];

const storyGrid = document.getElementById('storyGrid');
const searchInput = document.getElementById('searchInput');

// Função para renderizar os cards na tela
function renderStories(stories) {
    storyGrid.innerHTML = ''; // Limpa o grid antes de renderizar
    
    stories.forEach(story => {
        const card = document.createElement('div');
        card.className = 'glass-card';
        
        card.innerHTML = `
            <span class="card-file">${story.file}</span>
            <h3 class="card-title">${story.title}</h3>
            <span class="card-type">${story.type}</span>
        `;
        
        storyGrid.appendChild(card);
    });
}

// Renderiza todas as histórias ao carregar a página
renderStories(storiesData);

// Adiciona funcionalidade de busca dinâmica
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    const filteredStories = storiesData.filter(story => 
        story.title.toLowerCase().includes(searchTerm) || 
        story.file.toLowerCase().includes(searchTerm)
    );
    
    renderStories(filteredStories);
});
