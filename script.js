var chatResult = document.getElementById('chatResult');
var refreshBtn = document.getElementById('refresh');

refreshBtn.addEventListener('click', function(){
    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'refreshBtn.php');

    xhr.addEventListener('readystatechange', function(){
        if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200){
            chatResult.innerHTML = xhr.responseText;
        }
    })
    xhr.send(null);
})


var showMore = document.getElementById('showMore');
var count = 5;
showMore.addEventListener('click',function(){
    let xhr = new XMLHttpRequest();

    count += 5;

    xhr.open('GET', 'refreshBtn.php?showMore=' + count);

    xhr.addEventListener('readystatechange', function(){
        if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200){
            chatResult.innerHTML = xhr.responseText;
        }
    })
    xhr.send(null);
});

ranges = document.querySelectorAll('input[name=range]');
console.log(ranges);

var inputTen = document.getElementById('ten');
console.log(inputTen);
var inputTwenty = document.getElementById('twenty');
console.log(inputTwenty);
var inputAll = document.getElementById('all');
console.log(inputAll);

for(let i=0; i<ranges.length; i++){
    ranges[i].addEventListener('change', function(){
        let url = 'refreshBtn.php';

        if (inputTen.checked){
            url += '?showMore=10';
        } else if(inputTwenty.checked){
            url += '?showMore=20';
        } else if (inputAll.checked){
            url += '?showMore=2000';
        }

        let xhr = new XMLHttpRequest();
        
        xhr.open('GET', url);

        xhr.addEventListener('readystatechange', function(){
            if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200){
                chatResult.innerHTML = xhr.responseText;
            }
        })
        xhr.send(null);
    });
}

// inputTen.addEventListener('change', function(){
//     if (inputTen.checked){
//         let xhr = new XMLHttpRequest();
//         showTen = 10;
//         xhr.open('GET', 'refreshBtn.php?showMore=' + showTen);

//         xhr.addEventListener('readystatechange', function(){
//             if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200){
//                 chatResult.innerHTML = xhr.responseText;
//             }
//         })
//         xhr.send(null);
//     }
// });

// inputTwenty.addEventListener('change', function(){
//     if (inputTwenty.checked){
//         let xhr = new XMLHttpRequest();
//         // showTwenty = 20;
//         xhr.open('GET', 'refreshBtn.php?showMore=20');

//         xhr.addEventListener('readystatechange', function(){
//             if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200){
//                 chatResult.innerHTML = xhr.responseText;
//             }
//         })
//         xhr.send(null);
//     }
// });

// inputAll.addEventListener('change', function(){
//     if(inputAll.checked){
//         let xhr = new XMLHttpRequest();

//         xhr.open('GET', 'refreshBtn.php?showMore=2000');

//         xhr.addEventListener('readystatechange', function(){
//             if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200){
//                 chatResult.innerHTML = xhr.responseText;
//             }
//         })
//         xhr.send(null);
//     }
// });