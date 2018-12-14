window.addEventListener('DOMContentLoaded', function () {
    function pxToNumber(str) {
        if (str == '') {
            return 0;
        } else {
            // We assumed that the str is formatted as '???px'
            let removePX = str.slice(0, -2);
            return Number(removePX);
        }
    }

    window.addEventListener("wheel", function (event) {
        let step = 50; // amount of px to move per scroll event
        let ismovingDown = (event.deltaY > 0) ? true : false;
        // 3 screen width so we change starting at 2 
        let maxLeft = document.documentElement.clientWidth * -2;
        let fullPage = document.getElementById('fullPage');
        let leftPos = pxToNumber(fullPage.style.left);
        let newLeftPos = String(leftPos - step) + 'px';
        let leftPosInverse = String(leftPos + step) + 'px';
        let maxTop = document.documentElement.clientHeight * -1;
        let topPos = pxToNumber(fullPage.style.top);
        let newTopPos = String(topPos - step) + 'px';
        let topPosInverse = String(topPos + step) + 'px';
        let minLeft = 0;
        let minTop = 0;


        // dans quelle direction on va ?

        if (ismovingDown) {

            if (leftPos > maxLeft) {
                fullPage.style.left = newLeftPos;
            } else {
                fullPage.style.left = String(maxLeft) + 'px';
                if (topPos > maxTop) {

                    fullPage.style.top = newTopPos;
                } else {
                    fullPage.style.top = String(maxTop) + 'px';
                }

            }

            //        } else {
            //
            //            if (leftPos < minLeft) {
            //                fullPage.style.left = leftPosInverse;
            //            } else {
            //                fullPage.style.left = 0;
            //                if (topPos < minTop) {
            //                    fullPage.style.top = topPosInverse;
            //                } else {
            //                    fullPage.style.top = 0;
            //                }
            //            }
            //
            //
            //        }

        } else {
            if (topPos < minPos) {
                fullPage.style.top = topPosInverse;
            } else {
                fullPage.style.top = 0;
                if (leftPos < minLeft) {
                    fullPage.style.left = leftPosInverse;
                } else {
                    fullPage.style.left = 0;
                }
            }
        }



    });
})
