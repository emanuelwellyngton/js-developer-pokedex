class PokemonCard extends HTMLElement{
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});

        shadow.appendChild(this.buid());
        shadow.appendChild(this.style());
    }

    buid() {
        const lista = document.getElementById("lista");
        const item = document.createElement("li");
        lista.appendChild(item);
        item.setAttribute("class", "pokemon");

        const numero = document.createElement("span");
        item.appendChild(numero);
        numero.setAttribute("class", "number");
        numero.textContent = "#" + this.getAttribute("numero");

        const nome = document.createElement("span")
        item.appendChild(nome);
        nome.setAttribute("class", "name");
        nome.textContent = this.getAttribute("nome");

        item.appendChild(this.detalhes());

        return item;
    };
    
    style() {
        const style = document.createElement("style");
        style.textContent = `
        .pokemon {
            display: flex;
            flex-direction: column;
            margin: .5rem;
            padding: 1rem;
            border-radius: 1rem;
            background-color: #49d0b0;
        }

        .pokemon .number {
            color: #000;
            opacity: .3;
            text-align: right;
            font-size: .625rem;
        }
        
        .pokemon .name {
            color: #fff;
            margin-bottom: .25rem;
        }
        
        .pokemon .detail {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
        
        .pokemon .detail .types {
            padding: 0;
            margin: 0;
            list-style: none;
        }
        
        .pokemon .detail .types .type {
            background-color: #61e1ca;
            color: #fff;
            padding: .25rem .5rem;
            margin: .25rem 0;
            font-size: .625rem;
            border-radius: 1rem;
        }
        
        .pokemon .detail img {
            max-width: 100%;
            height: 70px;
        }
        
        @media screen and (min-width: 380px) {
            .pokemons {
                grid-template-columns: 1fr 1fr;
            }
        }
        
        @media screen and (min-width: 576px) {
            .pokemons {
                grid-template-columns: 1fr 1fr 1fr;
            }
        }
        `

        return style;
    };

    detalhes() {
        const detalhes = document.createElement("div");
        detalhes.setAttribute("class", "detail");

        detalhes.appendChild(this.tipos());

        const capa = document.createElement("img");
        detalhes.appendChild(capa)
        capa.src = this.getAttribute("capa");

        return detalhes;
    }

    tipos() {
        const lista = document.createElement("ol");
        lista.setAttribute("class", "types");

        const item1 = document.createElement("li");
        lista.append(item1);
        item1.setAttribute("class", "type");
        item1.textContent = this.getAttribute("tipo1");

        const item2 = document.createElement("li");
        lista.appendChild(item2);
        item2.setAttribute("class", "type");
        item2.textContent = this.getAttribute("tipo2");

        return lista;
    }
}

customElements.define("pokemon-card", PokemonCard)