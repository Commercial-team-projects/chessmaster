import { CountUp } from 'countup.js';

const options = {
  duration: 3,
  separator: ' ',
  suffix: '+',
  enableScrollSpy: true,
};

const counters = [
  { id: 'years', endValue: 15 },
  { id: 'students', endValue: 100 },
  { id: 'hours', endValue: 17000 },
  { id: 'games', endValue: 50000 },
];
counters.forEach(({ id, endValue }) => {
  const countUp = new CountUp(id, endValue, options);
  if (!countUp.error) {
    countUp.start();
  } else {
    console.error(countUp.error);
  }
});
