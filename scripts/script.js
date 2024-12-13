function adjustTabPaneHeight() {
  const navbarHeight = document.querySelector('.navbar-top-gw').offsetHeight;
  const floatingMenuHeight = document.querySelector('.floating-menu').offsetHeight;
  const tabPanes = document.querySelectorAll('.tab-pane');

  const availableHeight = window.innerHeight - navbarHeight - floatingMenuHeight - 80;
  tabPanes.forEach(tabPane => {
    tabPane.style.minHeight = `${availableHeight}px`;
  });
}

function showUnavailableToast() {
  const toast = document.createElement('div');
  toast.className = 'toast-unavailable bs-warning';
  toast.innerHTML = `
    Funcionalidade não está disponível.<br>
    Funcionalidades disponíveis para teste:
    <ul>
      <li>Menu de configurações</li>
      <li>Resumo</li>
      <li>Ativos</li>
    </ul>
  `;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

document.querySelectorAll('.chamar-toast').forEach(element => {
  element.addEventListener('click', showUnavailableToast);
});

(async () => {
  // Ajudar altura do tab-pane mais precisamente
  window.addEventListener('resize', adjustTabPaneHeight);
  window.addEventListener('load', adjustTabPaneHeight);

  // configuração de grafico de rentabilidade
  const canvas = document.getElementById('resumoChart');
  canvas.style.width = '100%';
  canvas.height = 250;

  const ctx = canvas.getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['04/24', '05/24', '06/24', '07/24', '08/24', '09/24', '10/24', '11/24', '12/24'],
      datasets: [
        {
          label: 'Carteira',
          borderColor: '#FF914D',
          data: [0, 3, 6, 5, 9, 9, 9, 12, 15],
          fill: false
        },
        {
          label: 'CDI',
          borderColor: '#FFCB31',
          data: [0, 4, 5, 6, 7, 8, 9, 10, 11],
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        x: {
          display: true,
          title: {
            display: true,
          }
        },
        y: {
          display: true,
          title: {
            display: true,
          }
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            usePointStyle: true,
            pointStyle: 'circle',
            generateLabels: function (chart) {
              const data = chart.data;
              return data.datasets.map((dataset, i) => ({
                  text: dataset.label,
                  fillStyle: dataset.borderColor,
                  strokeStyle: dataset.borderColor,
                  index: i,
                  fontColor: "#808080"
              })); 
            }
          }
        }
      }
    }
  });

  // Grafico de composição da carteira
  const canvasPierChart = document.getElementById('myPieChart');
  canvasPierChart.style.width = 220;
  canvasPierChart.height = 220;

  const ctx2 = document.getElementById('myPieChart').getContext('2d');
  new Chart(ctx2, {
      type: 'pie',
      data: {
          labels: ['BDRs', 'Criptos', 'Renda fixa', 'FIIs', 'Ações'],
          datasets: [{
              data: [10.67, 5.57, 46.97, 21.6, 15.01],
              backgroundColor: ['#FF6347', '#87CEEB', '#4682B4', '#32CD32', '#FFD700'],
          }]
      },
      options: {
          responsive: true,
          plugins: {
              legend: false,
              tooltip: {
                  callbacks: {
                      label: function(tooltipItem) {
                          return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                      }
                  }
              },
              datalabels: {
                  color: 'white',
                  font: {
                      weight: 'bold'
                  },
                  formatter: function(value, context) {
                      return context.chart.data.labels[context.dataIndex];
                  }
              }
          }
      },
      plugins: [ChartDataLabels]
  });

  //Info tela ativos
  const optionsAcordion = document.getElementById('ativosAccordion');

  const generateCard = (ativo) => {
    let card = '';
    ativo.lst.forEach(ct => {
      card += `
        <div class="card mb-3" style="width: 18rem; margin-right: 1rem;">
          <img src="${ct.imagem}" class="card-img-top" alt="${ct.nome}">
          <div class="card-body">
            <h5 class="card-title">${ct.codigo}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              Nome: ${ct.nome}
              <span class="position-absolute top-0 translate-middle badge rounded-pill bg-warning" style="left: 95%">
                ${ct.quantidade}
              </span>
            </li>
            <li class="list-group-item">Preço médio: ${ct.precoMedio}</li>
            <li class="list-group-item">Saldo R$:${ct.saldo}</li>
          </ul>
        </div>
      `;
    });

    return card;
  };

  // Adicionar gráfico de evolução de rentabilidade em barra
  const ctxEvolucao = document.getElementById('evolucaoRentabilidadeChart').getContext('2d');
  const evolucaoRentabilidadeChart = new Chart(ctxEvolucao, {
    type: 'bar',
    data: {
      labels: ['04/24', '05/24', '06/24', '07/24', '08/24', '09/24', '10/24', '11/24', '12/24'],
      datasets: [{
        label: 'Rentabilidade',
        data: [12, 6, 3, 5, 2, 3, 7, 10, 16],
        backgroundColor: 'rgba(255, 165, 0, 0.2)',
        borderColor: 'rgba(255, 165, 0, 1)',
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  

  let dataAcordion = '';
  data.ativos.forEach((ativo, idx) => {
    dataAcordion += `
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading${idx}">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${idx}" aria-expanded="${idx == 0 ? true : false}" aria-controls="collapse${idx}">
                <i class="${ativo.icon}"> </i> ${ativo.tipo}
            </button>
        </h2>
        <div id="collapse${idx}" class="accordion-collapse collapse ${idx == 0 ? 'show' : ''}" aria-labelledby="heading${idx}" data-bs-parent="#ativosAccordion">
            <div class="accordion-body">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                    ${generateCard(ativo)}
                </div>
            </div>
        </div>
    </div>`;  
  });
  
  optionsAcordion.innerHTML = dataAcordion;
})();