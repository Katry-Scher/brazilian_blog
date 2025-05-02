function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }


  const API_KEY = 'bb2651984ffd015e97f2293a3d9f32c2'; // Substitua pela sua chave
  const API_URL = `https://data.fixer.io/api/latest?access_key=${API_KEY}&symbols=GBP,BRL`;
  
  // Função para obter a cotação
  async function getExchangeRate() {
      try {
          const response = await fetch(API_URL);
          const data = await response.json();
  
          if (data.success) {
              const brlToGbp = (1 / data.rates.BRL) * data.rates.GBP;
              document.getElementById("exchange-rate").innerText = `1 BRL = ${brlToGbp.toFixed(2)} GBP`;
          } else {
              console.error("Erro ao obter dados de câmbio:", data.error);
          }
      } catch (error) {
          console.error("Erro na requisição:", error);
      }
  }
  
  // Chame a função ao carregar a página
  getExchangeRate();