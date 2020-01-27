/*
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*/

const medianArray = (arr1, arr2) => {
  const totalArray = arr1.concat(arr2).sort((a, b) => a - b);

  if (totalArray.length % 2 === 0) {
    return (totalArray[(totalArray.length/2)-1] + totalArray[((totalArray.length)/2)])/2
  }
    else {
      return totalArray[Math.ceil((totalArray.length/2)-1)]
    }
}

console.log(medianArray([1,2], [3,4]));
console.log(medianArray([1,3], [2]));

/*
var findMedianSortedArrays = function(nums1, nums2) {
    let arrcat = nums1.concat(nums2)
    let arrsort = arrcat.sort((a,b)=> {
        return   a < b ? -1 : a > b ? 1 : 0
    })
    if(arrsort.length % 2 === 1) {
        let middle = Math.ceil(arrsort.length / 2) -1 
        return parseFloat(arrsort[middle])
    }else{
        let middle1 = Math.ceil(arrsort.length / 2) -1 
        let middle2 = Math.ceil(arrsort.length / 2) 
        return parseFloat((arrsort[middle1] + arrsort[middle2]) /2) 
    }
};
*/