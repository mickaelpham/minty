banks = Bank.create([
  { name: 'Wells Fargo', website: 'https://www.wellsfargo.com/' },
  { name: 'Capital One', website: 'https://www.capitalone.com/' },
  { name: 'Chase', website: 'https://www.chase.com/' },
  { name: 'American Express', website: 'https://www.americanexpress.com/' },
  { name: 'Ally', website: 'https://www.ally.com/' }
])

Account.create([
  {
    name: 'Platinum Card',
    number: '4456111122223333',
    bank: banks[0],
    kind: :credit_card
  },
  {
    name: 'Quicksilver',
    number: '4410999988887777',
    bank: banks[1],
    kind: :credit_card
  },
  {
    name: '360 Checking',
    number: '3602222333444',
    bank: banks[1],
    kind: :checking
  },
  {
    name: 'Amazon',
    number: '4430123412341234',
    bank: banks[2],
    kind: :credit_card
  },
  {
    name: 'Sapphire Reserve',
    number: '5510345634563456',
    bank: banks[2],
    kind: :credit_card
  },
  {
    name: 'Blue Cash Everyday',
    number: '5556987698769876',
    bank: banks[3],
    kind: :credit_card
  },
  {
    name: 'Corporate Card',
    number: '5570123412341234',
    bank: banks[3],
    kind: :credit_card
  },
  {
    name: 'Online Savings',
    number: '21500011112',
    bank: banks[4],
    kind: :savings
  }
])
