function mergeIntervals (intervals) {
      // return intervals array if theres only one interval item
      if(intervals.length <= 1) {
            return intervals;
      };

      // sort each interval item
      // for ex: index 2 is [3, 1] so the sort function would change it to [1, 3]
      intervals.sort((a, b) => a[0] - b[0]);

      // this is where we will store our interval sets
      // we start with intervals zero but will amend it in the for loop below if need be
      let mergedIntervals = [intervals[0]];

      for(let i = 1; i < intervals.length; i ++) {
            let currInt = intervals[i];
            let lastMergedInt = mergedIntervals[mergedIntervals.length - 1];

            if(currInt[0] <= lastMergedInt[1]) {
                  lastMergedInt = Math.max(currInt[1], lastMergedInt[1])
            } else {
                  mergedIntervals.push(currInt)
            }
      }

      return mergedIntervals
};

const merged = mergeIntervals([
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18]
]);

console.log(merged);