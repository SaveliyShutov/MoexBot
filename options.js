module.exports = {
     investOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Сбер', callback_data: 'sber'}],
                [{text: 'Лукойл', callback_data: 'sber'}],
                [{text: 'Газпром', callback_data: 'sber'}],
                [{text: 'ФСК ЕС', callback_data: 'sber'}],
                [{text: 'ГОВНО', callback_data: 'sber'}],
            ]
        })
    }
}
