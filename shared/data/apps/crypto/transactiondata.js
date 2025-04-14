
export const Invoiceseries = [{
    data: [400, 540, 580, 690]
}]
export const Invoiceoptions = {
    chart: {
        type: 'bar',
        height: 200,
        toolbar: {
            show: false,
        }
    },
    colors: ['#00ffbe', '#ebf748', '#48f768', '#00e3d2'],
    plotOptions: {
        bar: {
            borderRadius: 1,
            horizontal: true,
            barHeight: '40%',
            dataLabels: {
                position: 'top'
            },
            distributed: true,
        }
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: ["New", "Completed", "Pending", "Ongoing"],
    },
}

//History
export const Historydata = [
    { id: 1, src2: "../../../assets/images/crypto-currencies/regular/Bitcoin.svg", class: 'up', color1: 'danger', name: 'Withdrawal', cell: 'TXN123456789', coin: 'Bitcoin(BTC)', date: '	24,Jul 2023 - 4:23PM', amount: '0.5 BTC', text1: 'Completed', text2: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', color2: 'primary', color3: "primary" },
    { id: 2, src2: "../../../assets/images/crypto-currencies/regular/Ethereum.svg", class: 'down', color1: 'success', name: 'Deposit', cell: 'TXN987654321', coin: 'Etherium(ETH)', date: '20,Jul 2023 - 12:47PM', amount: '10.0 ETH', text1: 'Pending', text2: '0x32Be343B94f860124dC4fEe278FDCBD38C102D88', color2: 'success', color3: "primary3" },
    { id: 3, src2: "../../../assets/images/crypto-currencies/regular/litecoin.svg", class: 'up', color1: 'info', name: 'Buy', cell: 'TXN567890123', coin: 'Litecoin(LTC)', date: '14,Aug 2023 - 10:25AM', amount: '50.0 LTC', text1: 'Completed', text2: 'MV3rLMY1Tep6Rhbt4x8fZ2rERKx1CBYKFz', color2: 'info', color3: "primary" },
    { id: 4, src2: "../../../assets/images/crypto-currencies/regular/Ripple.svg", class: 'up', color1: 'secondary ', name: 'Sell', cell: 'TXN246801357', coin: 'Ripple(XRP)', date: '10,Jul 2023 - 4:14PM', amount: '1000 XRP', text1: 'Failed', text2: 'rEb8TK3gBgk5auZkwc6sHnwrGVJH8DuaLh', color2: 'secondary', color3: "primary1" },
    { id: 5, src2: "../../../assets/images/crypto-currencies/regular/Bitcoin.svg", class: 'up', color1: 'warning', name: 'Transfer', cell: 'TXN123456789', coin: 'Bitcoin(BTC)', date: '19,Aug 2023 - 11:35AM', amount: '1.2 BTC', text1: 'Completed', text2: '3BbDtxBSjgfTRxaBUgRqAeW1XVo8JpEzYy', color2: 'warning', color3: "primary" },
    { id: 6, src2: "../../../assets/images/crypto-currencies/regular/Ethereum.svg", class: 'down', color1: 'danger', name: 'Withdrawal', cell: 'TXN987654321', coin: 'Etherium(ETH)', date: '12,Jun 2023 - 2:45PM', amount: '5.5 ETH', text1: 'Pending', text2: '0x1dF62f291b2E969f6B5e158bcCC90eD80720D82e', color2: 'danger', color3: "primary3" },
    { id: 7, src2: "../../../assets/images/crypto-currencies/regular/Bitcoin.svg", class: 'up', color1: 'success', name: 'Deposit', cell: 'TXN123456789', coin: 'Bitcoin(BTC)', date: '27,Jul 2023 - 10:18AM', amount: '0.8 BTC', text1: 'Completed', text2: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX', color2: 'success', color3: "primary" },
    { id: 8, src2: "../../../assets/images/crypto-currencies/regular/litecoin.svg", class: 'up', color1: 'secondary', name: 'Sell', cell: 'TXN567890123', coin: 'Litecoin(LTC)', date: '16,Aug 2023 - 9:25PM', amount: '25.0 LTC', text1: 'Completed', text2: 'LPnPZ8qY2TAnYXUTtrBMHK5h8BQ4mP51sU', color2: 'secondary', color3: "primary" },
    { id: 9, src2: "../../../assets/images/crypto-currencies/regular/Ripple.svg", class: 'down', color1: 'danger', name: 'Buy', cell: 'TXN246801357', coin: 'Ripple(XRP)', date: '24,Jul 2023 - 12:47PM', amount: '500 XRP', text1: 'Pending', text2: 'rw2ciyaNshpHe7bCHo4bRWq6pqqynnWKQg', color2: 'danger', color3: "primary3" },
    { id: 10, src2: "../../../assets/images/crypto-currencies/regular/Bitcoin.svg", class: 'up', color1: 'warning', name: 'Transfer', cell: 'TXN123456789', coin: 'Bitcoin(BTC)', date: '24,Jul 2023 - 12:47PM', amount: '1.0 BTC', text1: 'Completed', text2: '3CwTjvdAx2T1ZCFjHoUYaX6jTEy4d8BQsE', color2: 'warning', color3: "primary" },
];

