let Cities = {
  'SanAntonio': [],
  'Houston': [],
  'Austin': [],
  'Dallas': [],
  'Lubbock': []
}

let People = {
  'Kyle': 'San Antonio',
  'Sam': 'Dallas',
  'Charles': 'Austin',
  'Jimmy': 'Lubbock',
  'Stephanie': 'Houston',
  'Otis': 'Houston',
  'Aleya': 'Austin',
}

function FindCommonCities(cities, people) {
  Object.entries(people).forEach(([property, value]) => {
    if (cities[value]) {
      cities[value].push(property)
    }
  })

  return cities
}

FindCommonCities(Cities, People)