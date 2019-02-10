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
    number: '44561234905912',
    bank: banks[0],
    kind: :credit_card
  },
  {
    name: 'Quicksilver',
    number: '11223344',
    bank: banks[1],
    kind: :credit_card
  },
  {
    name: '360 Checking',
    number: '3601230593',
    bank: banks[1],
    kind: :checking
  },
  {
    name: 'Amazon',
    number: '2340985019823',
    bank: banks[2],
    kind: :credit_card
  },
  {
    name: 'Sapphire Reserve',
    number: '5512034912395',
    bank: banks[2],
    kind: :credit_card
  },
  {
    name: 'Blue Cash Everyday',
    number: '2340529039563001',
    bank: banks[3],
    kind: :credit_card
  },
  {
    name: 'Corporate Card',
    number: '2340982509812',
    bank: banks[3],
    kind: :credit_card
  },
  {
    name: 'Online Savings',
    number: '2150349201',
    bank: banks[4],
    kind: :savings
  }
])
