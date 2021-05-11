
const moodal = {
    open() {
        document.querySelector('.modal-overlay').classList.add('active')
    },
    close() {
        document.querySelector('.modal-overlay').classList.remove('active')
    },
}

const transactions = [
    {
        id: 1,
        description: "luz",
        amount: -50025,
        date: '23/03/2021',
    },
    {
        id: 2,
        description: "venda",
        amount: 100025,
        date: '23/03/2021',
    },
]

const balanceUpdate = {
    incomes() {},
    expenses() {},
    total() {},
}

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = dom.innerHTMLTransaction(transaction)
    },

    innerHTMLTransaction() {
        const CSSclas = transaction.amount >0 ? "income" : "expense"

        const amount = Utils.formatCurrency(transaction.amount)

        const html = `
        <tr>
            <td class='description'>${transaction.description}</td>
            <td class='${CSSclas}'>${amount}</td>
            <td class='date'>${transaction.date}</td>
            <td><img src='./assets/minus.svg' alt='Remover transação'></td>
        </tr>
        `

        return html
    }
}

const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""

        value = String(value).replace(/\D/g, "")

        value = Number(value) / 100

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        return signal + value
    }
}

transactions.forEach(function(transaction){
    DOM.addTransaction(transaction)
})