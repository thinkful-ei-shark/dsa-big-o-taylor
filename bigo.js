/* 1. What Is The Big O For This?

        1) Determine the Big O for the following algorithm: 
        You are sitting in a room with 15 people. 
        You want to find a playmate for your dog, preferably of the same breed. 
        So you want to know if anyone out of the 15 people have the same breed as your dog. 
        You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. 
        Someone yells - "I do, be happy to bring him over"

        A. CONSTANT TIME 0(1) 
            - You only need to run one operation.

        2) Determine the Big O for the following algorithm: 
        You are sitting in a room with 15 people. 
        You want to find a playmate for your dog who is of the same breed. 
        So you want to know if anyone out of the 15 people have the same breed as your dog. 
        You start with the first person and ask him if he has a golden retriever. 
        He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.

        A. LINEAR TIME 0(n)
            - You're running the same operation on each person in the array.
*/

/* 2. Even Or Odd 
    What is the Big O of the following algorithm? Explain your answer.

       function isEven(value) {
            if (value % 2 === 0) {
                return true;
            }
            else {
                return false;
            }
        }

        A. CONSTANT TIME 0(1)
            - Only taking in one value and does one check on that value.
*/

/* 3. Are You Here? 
    What is the Big O of the following algorithm? Explain your answer.

       function areYouHere(arr1, arr2) {
            for (let i = 0; i < arr1.length; i++) {
                const el1 = arr1[i];
                for (let j = 0; j < arr2.length; j++) {
                    const el2 = arr2[j];
                    if (el1 === el2) return true;
                }
            }
            return false;
        }

        A. Polynomial Time 0(n^2)
            - It utilizes two nested loops.
*/

/* 4. Doubler 
    What is the Big O of the following algorithm? Explain your answer.

        function doubleArrayValues(array) {
           for (let i = 0; i < array.length; i++) {
                array[i] *= 2;
            }
            return array;
        }

        A. LINEAR TIME 0(n)
            - Because each item in the array has one operation done on it. 
*/

/* 5. Naive Search 
    What is the Big O of the following algorithm? Explain your answer.

        function naiveSearch(array, item) {
            for (let i = 0; i < array.length; i++) {
                if (array[i] === item) {
                    return i;
                }
            }
        }
*****
        A. LINEAR TIME 0(n)
            - Performing the function for each item in the array. 
*/

/* 6. Creating Pairs 
    What is the Big O of the following algorithm? Explain your answer.

           function createPairs(arr) {
                for (let i = 0; i < arr.length; i++) {
                    for(let j = i + 1; j < arr.length; j++) {
                        console.log(arr[i] + ", " +  arr[j] );
                    }
                }
            }
            A. Polynomial Time 0(n^2)
                - It utilizes a nested loop.
*/

/* 7. Compute The Sequence 
    What does the following algorithm do? What is its runtime complexity? Explain your answer.

            function compute(num) {
                let result = [];
                for (let i = 1; i <= num; i++) {

                    if (i === 1) {
                        result.push(0);
                    }
                    else if (i === 2) {
                        result.push(1);
                    }
                    else {
                        result.push(result[i - 2] + result[i - 3]);
                    }
                }
                return result;
            }
            
            A. LINEAR TIME 0(n)
                - Fibonacci Sequence.
*/

/* 8. An Efficient Search 
    In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. 
    Assume that the input array is always sorted. 
    What is the Big O of the following algorithm? 
    Explain your answer.

            function efficientSearch(array, item) {
                let minIndex = 0;
                let maxIndex = array.length - 1;
                let currentIndex;
                let currentElement;

                while (minIndex <= maxIndex) {
                    currentIndex = Math.floor((minIndex + maxIndex) / 2);
                    currentElement = array[currentIndex];

                    if (currentElement < item) {
                        minIndex = currentIndex + 1;
                    }
                    else if (currentElement > item) {
                        maxIndex = currentIndex - 1;
                    }
                    else {
                        return currentIndex;
                    }
                }
                return -1;
            }

            A. LOGARITHMIC 0(log(n))
                - it cuts the problem in half by dividing by 2
*/

/* 9. Random Element 
    What is the Big O of the following algorithm? Explain your answer.

            function findRandomElement(arr) {
                return arr[Math.floor(Math.random() * arr.length)];
            }
            
            A. CONSTANT 0(1)
                - because it always returns an output of a random index
*/

/* 10. What Am I? 
    What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer.

            function isWhat(n) {
                *takes a parameter of number 'n'
               if (n < 2 || n % 1 !== 0) {
                   * if 'n' is less than 2 or 'n' % 1 does not equal 0 
                   * return false
                    return false;
                }
                for (let i = 2; i < n; ++i) {
                    * loops through the 'n' numbers given
                    if (n % i === 0) return false;
                }
                return true;
            }
            A. Finds prime numbers - LINEAR TIME 0(1) 
                - The number of ticks is directly proportional to the size of 'n'.
*/

/* 11. Tower Of Hanoi 
    The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes:

    There are three rods and a number of disks of different sizes which can slide onto any rod. 
    The puzzle starts with the disks neatly stacked in ascending order of size on one rod, 
    the smallest disk at the top (making a conical shape). 
    The other two rods are empty to begin with.
    The goal of the puzzle is to move the entire stack of rods to another rod 
    (can't be the original rod where it was stacked before) 
    where it will be stacked in the ascending order as well. 
    This should be done obeying the following rules: 
            i) Only one disk may be moved at a time 
            ii) Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, 
                on top of the other disks that may already be present on that rod. 
            iii) A larger disk may not placed on top of a smaller disk

***Input:***

        Rod A	Rod B	Rod C
        ----		
        ---------		
        -------------		
***Output:***

        Rod A	Rod B	Rod C
        ----
        ---------
        -------------

Derive an algorithm to solve the Tower of Hanoi puzzle.
Implement your algorithm using recursion. 
Your program should display each movement of the disk from one rod to another.
If you are given 5 disks, how do the rods look like after 7 recursive calls?
How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
What is the runtime of your algorithm?
*/

/* 12. Iterative Version 
    Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively.
*/

const countingSheep = sheep => {
  for (let i = 0; i < sheep; i++) {
    if (i < sheep) {
      console.log(`${sheep}: Another sheep jumps over the fence`);
    }
  }
};

const powerCalculator = (base, exp) => {
  let answer = base * (base * exp);
  return Math.abs(answer);
};

powerCalculator(10, 2); // 100
powerCalculator(10, -2); // 100
powerCalculator(-10, -2); // 100
powerCalculator(10, 0); // 0

const olSwitchAroo = string => {
  let str = string.split('').reverse().join('');
  return str;
};

olSwitchAroo('goodbye');

const triangleNumber = n => {};

/* 13. Recursive Big O 
    Take your solutions from the recursive exercises 
    that you completed in the previous checkpoint 
    and identify the time complexities (big O) of each of them.
*/

/* 14. Iterative Big O 
    Take your solutions from the iterative exercises today and identify the time complexities (big O) of each of them.
*/
