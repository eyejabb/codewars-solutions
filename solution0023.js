// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent 
// per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see 
// its population greater or equal to p = 1200 inhabitants?

function nbYear(p0, percent, aug, p) {

    var i = 0;
    while (true) {
      if (p0 >= p) {return i;}
      p0 = p0 * (1 + percent/100) + aug; i++;
    }
  }
  nbYear(1000, 2, 50, 1200)