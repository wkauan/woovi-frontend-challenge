export const paymentOptions = [
  {
    type: "Pix",
    installments: [
      {
        value: 1,
        amount: "R$ 30.500,00",
        total: "R$ 30.500,00",
        bestOption: false,
      },
    ],
  },
  {
    type: "Pix Parcelado",
    installments: [
      {
        value: 2,
        amount: "R$ 15.300,00",
        total: "R$ 30.600,00",
        bestOption: false,
      },
      {
        value: 3,
        amount: "R$ 10.196,66",
        total: "R$ 30.620,00",
        bestOption: false,
      },
      {
        value: 4,
        amount: "R$ 7.725,00",
        total: "R$ 30.900,00",
        bestOption: true,
      },
      {
        value: 5,
        amount: "R$ 6.300,00",
        total: "R$ 31.500,00",
        bestOption: false,
      },
      {
        value: 6,
        amount: "R$ 5.283,33",
        total: "R$ 31.699,98",
        bestOption: false,
      },
      {
        value: 7,
        amount: "R$ 4.542,85",
        total: "R$ 31.800,00",
        bestOption: false,
      },
    ],
  },
];
