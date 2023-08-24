export async function getRecords() {
  const people = [
    {
      name: 'lucas',
      lastName: 'cardozo',
      age: '24',
      date: 'jul 22,2023',
      record: 120,
    },
    {
      name: 'felipe',
      lastName: 'cardozo',
      age: '19',
      date: 'jul 22,2023',
      record: 115,
    },
    {
      name: 'bautista',
      lastName: 'risoli',
      age: '20',
      date: 'jul 22,2023',
      record: 107,
    },
    {
      name: 'enzo',
      lastName: 'rodrigues',
      age: '24',
      date: 'jul 22,2023',
      record: 112,
    },
    {
      name: 'ana',
      lastName: 'valero',
      age: '18',
      date: 'jul 22,2023',
      record: 111,
    },
    {
      name: 'monica',
      lastName: 'asensio',
      age: '52',
      date: 'jul 22,2023',
      record: 102,
    },
    {
      name: 'meli',
      lastName: 'maz',
      age: '28',
      date: 'jul 22,2022',
      record: 119,
    },

    {
      name: 'meli',
      lastName: 'maz',
      age: '28',
      date: 'jul 22,2023',
      record: 115,
    },
    {
      name: 'federico',
      lastName: 'rubilar',
      age: '24',
      date: 'jul 22,2023',
      record: 145,
    },
  ];
  const dateNow = Date.now();
  const lastMonth = people
    .filter((person) => {
      const dateParse = Date.parse(person.date);
      return dateNow - dateParse < 2592000000 && dateNow - dateParse > 0;
    })
    .sort((a, b) => (a.record > b.record ? -1 : 1))
    .reduce((acc, item) => {
      const repeated = acc.filter(
        (person) => person.name == item.name && person.lastName == item.lastName
      );
      if (repeated.length == 0) {
        acc.push(item);
      }
      return acc;
    }, []);

  const winners = lastMonth.slice(0, 3);
  const totalPeople = lastMonth.reduce((acc, item) => {
    if (!winners.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);

  return [winners, totalPeople];
}
