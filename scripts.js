'use strict';

const e = Spreadsheet('#billingsheet');
e.createSpreadsheet(
    {
        'Товар': 'text',
        'Стоимость ($)': 'number',
        'Количество': 'number',
        'Сумма ($)': 'number',
    },
    {
        data: [
            ['TD', '10000', '1000000', '34535'],
            ['RBC', '50000', '325345', '76868'],
            ['AmEx', '10000000', '5644', '76054'],
        ],
    }
);