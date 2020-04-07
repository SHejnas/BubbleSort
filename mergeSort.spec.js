describe('Split Array function', function() {
  xit('returns empty Array', function() {
    expect (split([])).toEqual([[],[]])
  });
  xit('is able to split an array into two halves', function() {
    expect (split([1, 5, 6, 9])).toEqual([[1,5], [6,9]])
  });
  xit('is able to split an array into two halves', function() {
    expect (split([1, 5])).toEqual([[1], [5]])
  });
   xit('is able to split an array into two halves', function() {
    expect (split([1, 5, 6, 9, 10])).toEqual([[1, 5, 6], [9, 10]])
  });
});
describe('Merge function', function(){
  xit('is able to merge two empty arrays', function(){
    expect (merge([[], []])).toEqual([])
  });
  xit('is able to merge two sorted arrays into one sorted array', function(){
    expect (merge([[1,5], [6,9]])).toEqual([1, 5, 6, 9])
  });
  xit('is able to merge two different length arrays', function(){
    expect (merge([[1, 5, 4], [6,9]])).toEqual([1, 5, 4, 6, 9])
  });
});

describe('MergeSort function', function() {
  xit('is able to handle and return empty arrays', function(){
    expect (mergeSort([])).toEqual([])
  });
  xit('is able to handle and return empty arrays', function(){
    expect (mergeSort([1])).toEqual([1])
  });
  xit('is able to sort a ', function(){
    expect (mergeSort([3, 1])).toEqual([1, 3])
  });
  xit('is able to sort a ', function(){
    expect (mergeSort([3, 1, 5, 8])).toEqual([1, 3, 5, 8])
  });
  it('is able to sort a ', function(){
    expect (mergeSort([ 3, 6, 9, 1, 5, 8, 2, 7, 4])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  });
})
