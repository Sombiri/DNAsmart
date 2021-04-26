// https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/string/hamming-distance/hammingDistance.js
export function calculateHammingDistance(a, b) {
    let distance = 0;
    for (let i = 0; i < a.length; i += 1) {
      if (a[i] !== b[i]) {
        distance += 1;
      }
    }
    return distance;
  }
  