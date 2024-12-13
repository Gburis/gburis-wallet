const data = {
    "ativos": [
        {
            "tipo": "Ações",
            "icon": "fas fa-chart-line",
            "lst": [
                {
                    "nome": "Petrobras",
                    "codigo": "PETR4",
                    "imagem": "https://logodownload.org/wp-content/uploads/2014/05/petrobras-logo.png",
                    "quantidade": 100,
                    "precoMedio": 28.0,
                    "variacoes": [1.2, -0.5, 3.0],
                    "saldo": 2800.0,
                    "porcentagemCarteira": 10,
                    "porcentagemIdeal": 15
                },
                {
                    "nome": "Vale",
                    "codigo": "VALE3",
                    "imagem": "https://logodownload.org/wp-content/uploads/2014/05/vale-logo.png",
                    "quantidade": 50,
                    "precoMedio": 60.0,
                    "variacoes": [0.8, -1.0, 2.5],
                    "saldo": 3000.0,
                    "porcentagemCarteira": 12,
                    "porcentagemIdeal": 15
                },
                {
                    "nome": "Itaú Unibanco",
                    "codigo": "ITUB4",
                    "imagem": "https://logodownload.org/wp-content/uploads/2014/05/itau-logo.png",
                    "quantidade": 80,
                    "precoMedio": 25.0,
                    "variacoes": [1.0, -0.3, 2.0],
                    "saldo": 2000.0,
                    "porcentagemCarteira": 8,
                    "porcentagemIdeal": 10
                },
                {
                    "nome": "Bradesco",
                    "codigo": "BBDC4",
                    "imagem": "https://logodownload.org/wp-content/uploads/2018/09/bradesco-logo-novo-2018.png",
                    "quantidade": 70,
                    "precoMedio": 30.0,
                    "variacoes": [0.5, -0.2, 1.5],
                    "saldo": 2100.0,
                    "porcentagemCarteira": 7,
                    "porcentagemIdeal": 10
                },
                {
                    "nome": "Ambev",
                    "codigo": "ABEV3",
                    "imagem": "https://logodownload.org/wp-content/uploads/2020/01/ambev-logo-0.png",
                    "quantidade": 90,
                    "precoMedio": 18.0,
                    "variacoes": [1.5, -0.4, 2.8],
                    "saldo": 1620.0,
                    "porcentagemCarteira": 6,
                    "porcentagemIdeal": 8
                },
                {
                    "nome": "Magazine Luiza",
                    "codigo": "MGLU3",
                    "imagem": "https://logodownload.org/wp-content/uploads/2014/06/magalu-logo-0.png",
                    "quantidade": 60,
                    "precoMedio": 40.0,
                    "variacoes": [2.0, -1.0, 3.5],
                    "saldo": 2400.0,
                    "porcentagemCarteira": 9,
                    "porcentagemIdeal": 12
                },
                {
                    "nome": "Banco do Brasil",
                    "codigo": "BBAS3",
                    "imagem": "https://logodownload.org/wp-content/uploads/2014/05/banco-do-brasil-logo.png",
                    "quantidade": 110,
                    "precoMedio": 20.0,
                    "variacoes": [0.7, -0.3, 1.8],
                    "saldo": 2200.0,
                    "porcentagemCarteira": 8,
                    "porcentagemIdeal": 10
                },
                {
                    "nome": "Santander",
                    "codigo": "SANB11",
                    "imagem": "https://logodownload.org/wp-content/uploads/2017/05/santander-logo-1.png",
                    "quantidade": 75,
                    "precoMedio": 35.0,
                    "variacoes": [1.3, -0.6, 2.2],
                    "saldo": 2625.0,
                    "porcentagemCarteira": 10,
                    "porcentagemIdeal": 12
                }
            ]
        },
        {
            "tipo": "FIIs",
            "icon": "fas fa-building",
            "lst": [
                {
                    "nome": "CSHG Logística",
                    "codigo": "HGLG11",
                    "imagem": "./img/fii.png",
                    "quantidade": 30,
                    "precoMedio": 150.0,
                    "variacoes": [0.5, 1.0, -0.2],
                    "saldo": 4500.0,
                    "porcentagemCarteira": 8,
                    "porcentagemIdeal": 10
                },
                {
                    "nome": "Kinea Renda Imobiliária",
                    "codigo": "KNRI11",
                    "imagem": "./img/fii.png",
                    "quantidade": 40,
                    "precoMedio": 130.0,
                    "variacoes": [0.3, 0.7, -0.1],
                    "saldo": 5200.0,
                    "porcentagemCarteira": 9,
                    "porcentagemIdeal": 10
                },
                {
                    "nome": "Maxi Renda",
                    "codigo": "MXRF11",
                    "imagem": "./img/fii.png",
                    "quantidade": 50,
                    "precoMedio": 110.0,
                    "variacoes": [0.4, 0.8, -0.3],
                    "saldo": 5500.0,
                    "porcentagemCarteira": 10,
                    "porcentagemIdeal": 12
                },
                {
                    "nome": "XP Malls",
                    "codigo": "XPML11",
                    "imagem": "./img/fii.png",
                    "quantidade": 35,
                    "precoMedio": 140.0,
                    "variacoes": [0.6, 0.9, -0.4],
                    "saldo": 4900.0,
                    "porcentagemCarteira": 9,
                    "porcentagemIdeal": 11
                },
                {
                    "nome": "Vinci Shopping Centers",
                    "codigo": "VISC11",
                    "imagem": "./img/fii.png",
                    "quantidade": 45,
                    "precoMedio": 120.0,
                    "variacoes": [0.7, 1.1, -0.5],
                    "saldo": 5400.0,
                    "porcentagemCarteira": 10,
                    "porcentagemIdeal": 12
                },
                {
                    "nome": "BTG Pactual Fundo...",
                    "codigo": "BCFF11",
                    "imagem": "./img/fii.png",
                    "quantidade": 25,
                    "precoMedio": 160.0,
                    "variacoes": [0.2, 0.5, -0.1],
                    "saldo": 4000.0,
                    "porcentagemCarteira": 7,
                    "porcentagemIdeal": 9
                },
                {
                    "nome": "CSHG Real Estate",
                    "codigo": "HGRE11",
                    "imagem": "./img/fii.png",
                    "quantidade": 20,
                    "precoMedio": 170.0,
                    "variacoes": [0.3, 0.6, -0.2],
                    "saldo": 3400.0,
                    "porcentagemCarteira": 6,
                    "porcentagemIdeal": 8
                },
                {
                    "nome": "RBR Alpha Fundo...",
                    "codigo": "RBRF11",
                    "imagem": "./img/fii.png",
                    "quantidade": 55,
                    "precoMedio": 100.0,
                    "variacoes": [0.4, 0.7, -0.3],
                    "saldo": 5500.0,
                    "porcentagemCarteira": 10,
                    "porcentagemIdeal": 12
                }
            ]
        },
        {
            "tipo": "Criptos",
            "icon": "fas fa-coins",
            "lst": [
                {
                    "nome": "Bitcoin",
                    "codigo": "BTC",
                    "imagem": "https://logodownload.org/wp-content/uploads/2017/06/bitcoin-logo-0-1.png",
                    "quantidade": 0.5,
                    "precoMedio": 200000.0,
                    "variacoes": [5.0, -2.0, 10.0],
                    "saldo": 100000.0,
                    "porcentagemCarteira": 20,
                    "porcentagemIdeal": 25
                },
                {
                    "nome": "Ethereum",
                    "codigo": "ETH",
                    "imagem": "https://logodownload.org/wp-content/uploads/2017/10/ethereum-logo.png",
                    "quantidade": 1.0,
                    "precoMedio": 15000.0,
                    "variacoes": [3.0, -1.5, 7.0],
                    "saldo": 15000.0,
                    "porcentagemCarteira": 5,
                    "porcentagemIdeal": 10
                }
            ]
        },
        {
            "tipo": "BDRs",
            "icon": "fas fa-globe",
            "lst": [
                {
                    "nome": "Apple",
                    "codigo": "AAPL34",
                    "imagem": "https://logodownload.org/wp-content/uploads/2013/12/apple-logo-0.png",
                    "quantidade": 10,
                    "precoMedio": 100.0,
                    "variacoes": [2.0, -1.0, 4.0],
                    "saldo": 1000.0,
                    "porcentagemCarteira": 5,
                    "porcentagemIdeal": 7
                },
                {
                    "nome": "Microsoft",
                    "codigo": "MSFT34",
                    "imagem": "https://logodownload.org/wp-content/uploads/2014/04/microsoft-logo-1.png",
                    "quantidade": 15,
                    "precoMedio": 150.0,
                    "variacoes": [1.5, -0.5, 3.0],
                    "saldo": 2250.0,
                    "porcentagemCarteira": 6,
                    "porcentagemIdeal": 8
                },
                {
                    "nome": "Amazon",
                    "codigo": "AMZO34",
                    "imagem": "https://logodownload.org/wp-content/uploads/2014/04/amazon-logo-0.png",
                    "quantidade": 12,
                    "precoMedio": 200.0,
                    "variacoes": [2.5, -1.2, 5.0],
                    "saldo": 2400.0,
                    "porcentagemCarteira": 8,
                    "porcentagemIdeal": 10
                },
                {
                    "nome": "Google",
                    "codigo": "GOGL34",
                    "imagem": "https://logodownload.org/wp-content/uploads/2017/05/google-chrome-logo-0.png",
                    "quantidade": 8,
                    "precoMedio": 250.0,
                    "variacoes": [3.0, -1.5, 6.0],
                    "saldo": 2000.0,
                    "porcentagemCarteira": 7,
                    "porcentagemIdeal": 9
                },
                {
                    "nome": "Facebook",
                    "codigo": "FBOK34",
                    "imagem": "https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-0.png",
                    "quantidade": 20,
                    "precoMedio": 120.0,
                    "variacoes": [1.8, -0.8, 3.5],
                    "saldo": 2400.0,
                    "porcentagemCarteira": 8,
                    "porcentagemIdeal": 10
                },
                {
                    "nome": "Tesla",
                    "codigo": "TSLA34",
                    "imagem": "https://logodownload.org/wp-content/uploads/2020/07/tesla-logo-8.png",
                    "quantidade": 5,
                    "precoMedio": 300.0,
                    "variacoes": [4.0, -2.0, 8.0],
                    "saldo": 1500.0,
                    "porcentagemCarteira": 5,
                    "porcentagemIdeal": 7
                }
            ]
        }
    ]
}
