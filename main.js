
class DisadvantageSummary extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const disadvantages = JSON.parse(this.getAttribute('data-disadvantages'));
    const summaryTitle = this.getAttribute('summary-title');

    const style = document.createElement('style');
    style.textContent = `
      h2 {
        font-size: 1.5em;
        color: #333;
        margin-bottom: 15px;
      }
      ul {
        list-style-type: none;
        padding: 0;
      }
      li {
        background-color: #f9f9f9;
        padding: 15px;
        border-radius: 8px;
        margin-bottom: 10px;
        border-left: 4px solid #dc3545;
        font-size: 1.1em;
      }
    `;

    const wrapper = document.createElement('div');
    const title = document.createElement('h2');
    title.textContent = summaryTitle;
    wrapper.appendChild(title);

    const list = document.createElement('ul');
    disadvantages.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      list.appendChild(listItem);
    });
    wrapper.appendChild(list);

    this.shadowRoot.append(style, wrapper);
  }
}

customElements.define('disadvantage-summary', DisadvantageSummary);

document.getElementById('analyze-button').addEventListener('click', () => {
  const productLink = document.getElementById('product-link').value;
  if (productLink.trim() === '') {
    alert('쿠팡 상품 링크를 입력해주세요.');
    return;
  }

  // AI 분석 시뮬레이션
  const dummyDisadvantages = [
    '배터리가 너무 빨리 닳아요.',
    '생각보다 크기가 작아서 실망했어요.',
    '마감이 부실하고, 곳곳에 흠집이 있네요.',
    '배송이 너무 느렸어요.',
    '가격에 비해 성능이 아쉬워요.',
  ];

  const summaryContainer = document.getElementById('summary-container');
  summaryContainer.innerHTML = ''; // 이전 결과 삭제

  const summaryElement = document.createElement('disadvantage-summary');
  summaryElement.setAttribute('summary-title', 'AI가 분석한 주요 단점');
  summaryElement.setAttribute('data-disadvantages', JSON.stringify(dummyDisadvantages));

  summaryContainer.appendChild(summaryElement);
});
