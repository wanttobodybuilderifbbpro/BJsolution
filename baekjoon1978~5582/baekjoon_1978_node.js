/*
문제 : 주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을
작성하세요.

입력: 첫 줄에 수의 개수 N이 주어집니다. N은 100 이하입니다.
다음으로 N개의 수가 주어지는데 수는 1,000 이하의 자연수입니다.

출력
주어진 수들 중 소수(素數)의 개수를 출력한다.

e.g)
Input 
4
1 3 5 7

Output 
3
*/

var fs = require('fs');
var inputs = fs.readFileSync('dev/stdnin').toString().split('\n');
var cases = Number(inputs[0]);
var splited = inputs[1].split(' ').map((item) => Number(item));
var answer = 0;

for(var i = 0; i < splited.length; i++)
{
    if(splited[i] ===1)
    {
        continue;
    }
    else
    {
        var count = 0;
        for(var j = 2; j < splited[i]; j++)
        {
            if(splited[i]%j ===0)
            {
                count++;
            }
        }
        if(count ===0)
        {
            answer++;
        }
    }
}
console.log(answer);