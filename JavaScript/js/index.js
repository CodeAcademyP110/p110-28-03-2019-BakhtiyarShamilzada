"use strict"

// Task 1:

    // 1-ci variant:

// function findSpaceCount(userText, space)
// {
//   let spacecount = 0;
//   let pos = -1;
//   while ((pos = userText.indexOf(space, pos + 1)) != -1)
//   {
//   spacecount++;
//   }
//   return spacecount;
// }
// alert(findSpaceCount("Salam Necesen ? Ne var ne yox ?", " "));

    // 2-ci variant

// function findSpaceCount(userText, space)
// {
//   let spacecount = 0;
//   for(const character of userText)
//   {
//       if(character == space)
//       {
//           spacecount++;
//       }
//   }
//   return spacecount;
// }

// alert(findSpaceCount("Salam Necesen ? Ne var ne yox ?", " "));

// Task 2:

// let arr = [1, 2, 3, 4, 5];
// function calcMiddleNumber(arr)
// {
//     let sum = 0;
//     for(const number of arr)
//     {
//         sum+=number;
//     }
//     return sum/arr.length;
// }
// 

// Task 3

// let arr = [1, 2, 3, 4, 5];
// function findEvensNumber(arr)
// {
//     let evenNumbers = [];
//     for(const number of arr)
//     {
//        if(number % 2 == 0)
//        {
//             evenNumbers.push(number);
//        }
//     }
//     return evenNumbers;
// }
// alert(findEvensNumber(arr));

// Task 4

// let arr = [1, 2, 3, 4, 5];
// function middleNumberGreater(arr)
// {
//     let middleGreatherNumber = []
//     let middleNumber = 0;
//     let sum = 0;
//         for(const number of arr)
//         {
//             sum+=number;
//         }
//         middleNumber = sum/arr.length;
//         for(const number of arr)
//         {
//             if(middleNumber < number)
//             {
//                 middleGreatherNumber.push(number);
//             }
//         }
//        return middleGreatherNumber;
// }
// alert(middleNumberGreater(arr));

// Task 5

// let arr = ["HTML", "CSS", "JavaScript", "C#"];

// function combineWords(arr)
// {
//     let wordsCombine = "";
//     for(const word of arr)
//         {
//            wordsCombine += word;
//         }
//         return wordsCombine;
// }
// alert(combineWords(arr));

// Task 6

// let arr = ["HTML", "CSS", "JavaScript", "C#"];

// function getReverseWords(arr)
// {
//     let reverseWords = [];
//     for(let i = arr.length-1; i >= 0; i--)
//         {
//            reverseWords.push(arr[i]);
//         }
//         return reverseWords;
// }
// alert(getReverseWords(arr));

// Task 7

// let arr1 = ["HTML", "CSS", "JavaScript", "C#", "Java"];
// let arr2 = ["Java", "C#", "Ruby", "PHP", "JavaScript"];

// function getCommonWords(arr1, arr2)
// {
//     let commonWords = [""];
//     for(const word1 of arr1)
//         {
//            for(const word2 of arr2)
//            {
               
//                if(word1 == word2)
//                {
//                    commonWords.push(word1);
//                }
//            }
//         }
//         return commonWords;
// }
// alert(getCommonWords(arr1, arr2));

// Task 8

// let arr = ["HTML", "CSS", "JavaScript", "C#", "Java"];
// function startLetterWords(arr, letter)
// {
//     let letterWords = [""];
//     for(const word of arr)
//         {
//           if(word[0] == letter)
//           {
//               letterWords.push(word);
//           }
//         }
//         return letterWords;
// }
// alert(startLetterWords(arr, "C"));

// Task 9

function findLetterWord(word)
{
    
}
console.log(findLetterWord("Salam"));

