'use strict';

const e = Spreadsheet('#billingsheet');
e.createSpreadsheet(
    {
        'Товар': 'text',
        'Стоимость (₽)': 'number',
        'Количество': 'number',
        'Сумма (₽)': 'number',
    },
    {
        data: [
            ['nVidia RTX 3060', '100000', '2', '200000'],
            ['Samsung EVO 980 PRO', '25000', '3', '75000'],
            ['Logitech G Pro X', '10000', '1', '10000'],
        ],
    }
);
