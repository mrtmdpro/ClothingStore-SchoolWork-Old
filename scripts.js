'use strict';

const e = Spreadsheet('#billingsheet');
e.createSpreadsheet(
    {
        bank: 'text',
        'cash ($)': 'number',
        'credit debt ($)': 'number',
        'investment portfolio ($)': 'number',
        city: 'text',
        'dated opened': 'date',
    },
    {
        data: [
            ['TD', '10000', '1000000', '34535', 'Toronto', '2021-04-06'],
            ['RBC', '50000', '325345', '76868', 'Markham', '2020-06-22'],
            ['AmEx', '10000000', '5644', '76054', 'New York City', '2020-07-06'],
        ],
    }
);