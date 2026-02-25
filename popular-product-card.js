class PopularProductCard extends HTMLElement {
    constructor() {
        super();
        // Shadow DOM을 초기화합니다.
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        // 컴포넌트가 DOM에 추가될 때 렌더링을 수행합니다.
        this.render();
    }

    static get observedAttributes() {
        // 변경을 감지할 속성들을 반환합니다.
        return ['name', 'image', 'price', 'link', 'product-id'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // 속성이 변경될 때마다 렌더링을 다시 수행합니다.
        if (oldValue !== newValue) {
            this.render();
        }
    }

    render() {
        // 속성 값들을 가져옵니다.
        const name = this.getAttribute('name') || '상품명 없음';
        const image = this.getAttribute('image') || '';
        const price = this.getAttribute('price') || '가격 정보 없음';
        const link = this.getAttribute('link') || '#';
        const productId = this.getAttribute('product-id');

        // Shadow DOM 내부의 HTML과 스타일을 설정합니다.
        this.shadowRoot.innerHTML = `
            <style>
                .product-card {
                    background-color: #fff;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    overflow: hidden;
                    text-align: center;
                    transition: transform 0.2s, box-shadow 0.2s;
                    text-decoration: none;
                    color: inherit;
                    display: block;
                }
                .product-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                }
                .product-card img {
                    width: 100%;
                    height: 180px;
                    object-fit: cover;
                }
                .product-info {
                    padding: 15px;
                }
                .product-info h3 {
                    margin: 0 0 10px;
                    font-size: 1rem;
                }
                .product-info p {
                    margin: 0;
                    color: #555;
                    font-weight: bold;
                }
                .review-button {
                    display: inline-block;
                    margin-top: 10px;
                    padding: 8px 16px;
                    background-color: #007bff;
                    color: white;
                    border-radius: 5px;
                    text-decoration: none;
                    font-size: 0.9rem;
                }
            </style>
            <a href="${link}" class="product-card" target="_blank">
                <img src="${image}" alt="${name}">
                <div class="product-info">
                    <h3>${name}</h3>
                    <p>${price}</p>
                </div>
            </a>
            <a href="#reviews?productId=${productId}" class="review-button">리뷰 보기</a>
        `;
    }
}

customElements.define('popular-product-card', PopularProductCard);