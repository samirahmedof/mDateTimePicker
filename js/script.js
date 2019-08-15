$(document).ready(function () {
    var dtpType = $(".mhmPicker .mhmPickerInput").data('dtp-type');
    var typeNumber = 0;
    switch (dtpType) {
        case 'date':
            typeNumber = 1;
            break;
        case 'time':
            typeNumber = 2;
            break;
        default:
            typeNumber = 3;
            break;
    }
    var mSelectedDate;
    var mSelectedMonth;
    var mSelectedYear;
    var mMonth = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'İyun', 'İyul', 'Avqust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr'];

    var userInput = $(".mhmPicker .mhmPickerInput");
    var userClass = $(userInput).attr('class');
    $(".mhmPicker .mhmPickerInput").remove();
    $(".mhmPicker").append("<div class='mPickerInner'><div class='mClicking'><img src='css/calendar.png' style='max-width: 50%'></div><input type='text' class='" + userClass + "'></div>");

    $(".mhmPicker .mClicking").click(function () {
        $(this).toggleClass("mOpen");
        if ($(this).hasClass("mOpen")) {
            if (typeNumber == 1) {
                $(".mhmPicker").append("<div class='dtpBlock'><div class='mainBlock'><div class='mHeader'><div class='mLeft'><span></span></div><div class='mDate'><span class='mDateMonth'></span><span class='mDateYear'></span></div><div class='mRight'><span></span></div></div><div class='mBody'><table class='dayTable'><thead><tr><th>B.e</th><th>Ç.a</th><th>Ç</th><th>C.a</th><th>C</th><th>Ş</th><th>B</th></tr></thead><tbody><tr class='firstTr'><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div></div><div class='monthBlock mDisplayNone'><div class='mHeader'><div class='mLeft'><span></span></div><div class='mDate'><span class='mDateYear'></span></div><div class='mRight'><span></span></div></div><div class='mBody'><table class='monthTable'><tbody><tr><td data-monthNum='1'>Yan</td><td data-monthNum='2'>Fev</td><td data-monthNum='3'>Mar</td><td data-monthNum='4'>Apr</td></tr><tr><td data-monthNum='5'>May</td><td data-monthNum='6'>İyun</td><td data-monthNum='7'>İyul</td><td data-monthNum='8'>Avq</td></tr><tr><td data-monthNum='9'>Sen</td><td data-monthNum='10'>Okt</td><td data-monthNum='11'>Noy</td><td data-monthNum='12'>Dek</td></tr></tbody></table></div></div><div class='yearBlock mDisplayNone'><div class='mHeader'><div class='mLeft'><span></span></div><div class='mDate' style='pointer-events: none;'><span class='mFirstYear'></span><span>-</span><span class='mLastYear'></span></div><div class='mRight'><span></span></div></div><div class='mBody'><table class='yearTable'><tbody><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td class='mDisable'></td><td class='mDisable'></td></tr></tbody></table></div></div></div>")
            }
            else if (typeNumber == 2) {
                $(".mhmPicker").append("<div class='dtpBlock'><div class='clockBlock'><table><tbody><tr class='clockUpIcons'><td class='hourUp'><span></span></td><td style='pointer-events: none'></td><td class='minuteUp'><span></span></td></tr><tr class='mainClock'><td class='mainHour'></td><td style='pointer-events: none'>:</td><td class='mainMinute'></td></tr><tr class='clockDownIcons'><td class='hourDown'><span></span></td><td style='pointer-events: none;'></td><td class='minuteDown'><span></span></td></tr></tbody></table><div class='mAccept'><span class='checkmark'><div class='checkmark_stem'></div><div class='checkmark_kick'></div></span></div></div><div class='clockMinuteBlock mDisplayNone'><table><tbody><tr><td>00</td><td>05</td><td>10</td><td>15</td></tr><tr><td>20</td><td>25</td><td>30</td><td>35</td></tr><tr><td>40</td><td>45</td><td>50</td><td>55</td></tr></tbody></table><div class='mAccept'><span class='checkmark'><div class='checkmark_stem'></div><div class='checkmark_kick'></div></span></div></div><div class='clockHourBlock mDisplayNone'><table><tbody><tr><td>00</td><td>01</td><td>02</td><td>03</td></tr><tr><td>04</td><td>05</td><td>06</td><td>07</td></tr><tr><td>08</td><td>09</td><td>10</td><td>11</td></tr><tr><td>12</td><td>13</td><td>14</td><td>15</td></tr><tr><td>16</td><td>17</td><td>18</td><td>19</td></tr><tr><td>20</td><td>21</td><td>22</td><td>23</td></tr></tbody></table><div class='mAccept'><span class='checkmark'><div class='checkmark_stem'></div><div class='checkmark_kick'></div></span></div></div></div>");
            }
            else {
                $(".mhmPicker").append("<div class='dtpBlock'><div class='mainBlock'><div class='mHeader'><div class='mLeft'><span></span></div><div class='mDate'><span class='mDateMonth'></span><span class='mDateYear'></span></div><div class='mRight'><span></span></div></div><div class='mBody'><table class='dayTable'><thead><tr><th>B.e</th><th>Ç.a</th><th>Ç</th><th>C.a</th><th>C</th><th>Ş</th><th>B</th></tr></thead><tbody><tr class='firstTr'><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div><div class='mClock'><img src='css/clock.png'></div></div><div class='monthBlock mDisplayNone'><div class='mHeader'><div class='mLeft'><span></span></div><div class='mDate'><span class='mDateYear'></span></div><div class='mRight'><span></span></div></div><div class='mBody'><table class='monthTable'><tbody><tr><td data-monthNum='1'>Yan</td><td data-monthNum='2'>Fev</td><td data-monthNum='3'>Mar</td><td data-monthNum='4'>Apr</td></tr><tr><td data-monthNum='5'>May</td><td data-monthNum='6'>İyun</td><td data-monthNum='7'>İyul</td><td data-monthNum='8'>Avq</td></tr><tr><td data-monthNum='9'>Sen</td><td data-monthNum='10'>Okt</td><td data-monthNum='11'>Noy</td><td data-monthNum='12'>Dek</td></tr></tbody></table></div><div class='mClock'><img src='css/clock.png'></div></div><div class='yearBlock mDisplayNone'><div class='mHeader'><div class='mLeft'><span></span></div><div class='mDate' style='pointer-events: none;'><span class='mFirstYear'></span><span>-</span><span class='mLastYear'></span></div><div class='mRight'><span></span></div></div><div class='mBody'><table class='yearTable'><tbody><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td class='mDisable'></td><td class='mDisable'></td></tr></tbody></table></div><div class='mClock'><img src='css/clock.png'></div></div></div>")
                $(".mhmPicker .dtpBlock").append("<div class='clockBlock mDisplayNone'><table><tbody><tr class='clockUpIcons'><td class='hourUp'><span></span></td><td style='pointer-events: none'></td><td class='minuteUp'><span></span></td></tr><tr class='mainClock'><td class='mainHour'></td><td style='pointer-events: none'>:</td><td class='mainMinute'></td></tr><tr class='clockDownIcons'><td class='hourDown'><span></span></td><td style='pointer-events: none;'></td><td class='minuteDown'><span></span></td></tr></tbody></table><div class='mAccept'><span class='checkmark'><div class='checkmark_stem'></div><div class='checkmark_kick'></div></span></div></div><div class='clockMinuteBlock mDisplayNone'><table><tbody><tr><td>00</td><td>05</td><td>10</td><td>15</td></tr><tr><td>20</td><td>25</td><td>30</td><td>35</td></tr><tr><td>40</td><td>45</td><td>50</td><td>55</td></tr></tbody></table><div class='mAccept'><span class='checkmark'><div class='checkmark_stem'></div><div class='checkmark_kick'></div></span></div></div><div class='clockHourBlock mDisplayNone'><table><tbody><tr><td>00</td><td>01</td><td>02</td><td>03</td></tr><tr><td>04</td><td>05</td><td>06</td><td>07</td></tr><tr><td>08</td><td>09</td><td>10</td><td>11</td></tr><tr><td>12</td><td>13</td><td>14</td><td>15</td></tr><tr><td>16</td><td>17</td><td>18</td><td>19</td></tr><tr><td>20</td><td>21</td><td>22</td><td>23</td></tr></tbody></table><div class='mAccept'><span class='checkmark'><div class='checkmark_stem'></div><div class='checkmark_kick'></div></span></div></div>");
            }
        }
        else {
            $(".mhmPicker .dtpBlock").remove();
        }
        if (typeNumber != 2) {
            $(".mhmPicker .mainBlock .mBody tbody td.mSelected").removeClass("mSelected");
            if ($(".mhmPicker .mhmPickerInput").val() == '') {
                var nowDate = new Date();
                var nowMonth = nowDate.getMonth();
                var nowYear = nowDate.getFullYear();
                var nowDay = nowDate.getDate();
                var stringMonth = mMonth[nowMonth];

                if (typeNumber == 3) {
                    var nowHour = nowDate.getHours();
                    var nowMinute = nowDate.getMinutes();
                    if (nowHour < 9) {
                        nowHour = "0" + nowHour;
                    }
                    if (nowMinute < 9) {
                        nowMinute = "0" + nowMinute;
                    }
                    $(".mhmPicker .clockBlock .mainClock .mainHour").text(nowHour);
                    $(".mhmPicker .clockBlock .mainClock .mainMinute").text(nowMinute);
                }

            }
            else {
                if (!inputControl($(".mhmPicker .mhmPickerInput").val())) {
                    $(".mhmPicker .mhmPickerInput").addClass("wrongInput");
                    $(".mhmPicker .mClicking").removeClass("mOpen");
                    $(".mhmPicker .dtpBlock").remove();
                }
                else {
                    $(".mhmPicker .mhmPickerInput").removeClass("wrongInput");
                }
                var fullInputWithClock = $(".mhmPicker .mhmPickerInput").val().split(" ");
                var fullInputValUnsplitted = fullInputWithClock[0];
                fullInputVal = fullInputValUnsplitted.split("-");
                var nowDay = Number(fullInputVal[0]);
                var nowMonth = Number(fullInputVal[1]);
                var nowYear = Number(fullInputVal[2]);
                nowMonth--;
                stringMonth = mMonth[nowMonth];

                if (typeNumber == 3) {
                    $(".mhmPicker .mhmPickerInput").removeClass("wrongInput");
                    var fullInputValueForClock = $(".mhmPicker .mhmPickerInput").val().split(" ");
                    var fullClockValUnsplitted = fullInputValueForClock[1];
                    var clockArray = fullClockValUnsplitted.split(":");
                    var inputValHour = clockArray[0];
                    var inputValMinute = clockArray[1];
                    $(".mhmPicker .clockBlock .mainHour").text(inputValHour);
                    $(".mhmPicker .clockBlock .mainMinute").text(inputValMinute);
                }

            }
            $(".mhmPicker .mainBlock .mHeader .mDate .mDateMonth").text(stringMonth);
            $(".mhmPicker .mainBlock .mHeader .mDate .mDateYear").text(nowYear);
            var pickerMonth = $(".mhmPicker .mainBlock .mHeader .mDate .mDateMonth").text();
            if (pickerMonth == 'İyul') {
                pickerMonth = 'iyul';
            }
            else if (pickerMonth == 'İyun') {
                pickerMonth = 'iyun';
            }
            else {
                pickerMonth = pickerMonth.toLowerCase();
            }
            var pickerYear = $(".mhmPicker .mainBlock .mHeader .mDate .mDateYear").text().toLowerCase();

            mSelectedDate = nowDay;
            mSelectedMonth = stringMonth;
            mSelectedYear = nowYear;
            fillCalendar(pickerMonth, pickerYear);
        }
        else {
            if (!$(".mhmPicker .mhmPickerInput").val() == '') {
                if (!inputControl($(".mhmPicker .mhmPickerInput").val())) {
                    $(".mhmPicker .mhmPickerInput").addClass("wrongInput");
                    $(".mhmPicker .mClicking").removeClass("mOpen");
                    $(".mhmPicker .dtpBlock").remove();
                }
                else {
                    $(".mhmPicker .mhmPickerInput").removeClass("wrongInput");
                    var fullInputValueForClock = $(".mhmPicker .mhmPickerInput").val().split(" ");
                    var fullClockValUnsplitted = fullInputValueForClock[0];
                    var clockArray = fullClockValUnsplitted.split(":");
                    var inputValHour = clockArray[0];
                    var inputValMinute = clockArray[1];
                    $(".mhmPicker .clockBlock .mainHour").text(inputValHour);
                    $(".mhmPicker .clockBlock .mainMinute").text(inputValMinute);
                }
            }
            else {
                $(".mhmPicker .mhmPickerInput").removeClass("wrongInput");
                var nowDateforClock = new Date();
                var nowHour = nowDateforClock.getHours();
                var nowMinute = nowDateforClock.getMinutes();
                if (nowHour < 9) {
                    nowHour = "0" + nowHour;
                }
                if (nowMinute < 9) {
                    nowMinute = "0" + nowMinute;
                }
                $(".mhmPicker .clockBlock .mainClock .mainHour").text(nowHour);
                $(".mhmPicker .clockBlock .mainClock .mainMinute").text(nowMinute);
            }
        }

    });

    $(document).click(function (e) {
        if (!$(e.target).closest(".mClicking").length && !$(e.target).closest(".dtpBlock").length) {
            $(".mhmPicker .mClicking").removeClass("mOpen");
            $(".mhmPicker .dtpBlock").remove();
        }
    });
    $(document).on('click', '.mhmPicker .mainBlock .mHeader .mLeft span', function () {
        $(".mhmPicker .mainBlock .mBody tbody td.mSelected").removeClass("mSelected");
        var month = $(".mhmPicker .mainBlock .mHeader .mDate .mDateMonth").text();
        var year = $(".mhmPicker .mainBlock .mHeader .mDate .mDateYear").text();
        var currentPrev = '';
        switch (month) {
            case 'Yanvar':
                currentPrev = 'Dekabr';
                year--;
                break;
            case 'Fevral':
                currentPrev = 'Yanvar';
                break;
            case 'Mart':
                currentPrev = 'Fevral';
                break;
            case 'Aprel':
                currentPrev = 'Mart';
                break;
            case 'May':
                currentPrev = 'Aprel';
                break;
            case 'İyun':
                currentPrev = 'May';
                break;
            case 'İyul':
                currentPrev = 'İyun';
                break;
            case 'Avqust':
                currentPrev = 'İyul';
                break;
            case 'Sentyabr':
                currentPrev = 'Avqust';
                break;
            case 'Oktyabr':
                currentPrev = 'Sentyabr';
                break;
            case 'Noyabr':
                currentPrev = 'Oktyabr';
                break;
            case 'Dekabr':
                currentPrev = 'Noyabr';
                break;
        }
        $(".mhmPicker .mainBlock .mHeader .mDate .mDateMonth").text(currentPrev);
        $(".mhmPicker .mainBlock .mHeader .mDate .mDateYear").text(year);

        if (currentPrev == 'İyul') {
            currentPrev = 'iyul';
        }
        else if (currentPrev == 'İyun') {
            currentPrev = 'iyun';
        }
        else {
            currentPrev = currentPrev.toLowerCase();
        }
        fillCalendar(currentPrev, year);
    });

    $(document).on('click', '.mhmPicker .mainBlock .mHeader .mRight span', function () {
        $(".mainBlock .mBody tbody td.mSelected").removeClass("mSelected");
        var month = $(".mainBlock .mHeader .mDate .mDateMonth").text();
        var year = $(".mainBlock .mHeader .mDate .mDateYear").text();
        var currentNext = '';
        switch (month) {
            case 'Yanvar':
                currentNext = 'Fevral';
                break;
            case 'Fevral':
                currentNext = 'Mart';
                break;
            case 'Mart':
                currentNext = 'Aprel';
                break;
            case 'Aprel':
                currentNext = 'May';
                break;
            case 'May':
                currentNext = 'İyun';
                break;
            case 'İyun':
                currentNext = 'İyul';
                break;
            case 'İyul':
                currentNext = 'Avqust';
                break;
            case 'Avqust':
                currentNext = 'Sentyabr';
                break;
            case 'Sentyabr':
                currentNext = 'Oktyabr';
                break;
            case 'Oktyabr':
                currentNext = 'Noyabr';
                break;
            case 'Noyabr':
                currentNext = 'Dekabr';
                break;
            case 'Dekabr':
                currentNext = 'Yanvar';
                year++;
                break;
        }
        $(".mhmPicker .mainBlock .mHeader .mDate .mDateMonth").text(currentNext);
        $(".mhmPicker .mainBlock .mHeader .mDate .mDateYear").text(year);
        if (currentNext == 'İyul') {
            currentNext = 'iyul';
        }
        else if (currentNext == 'İyun') {
            currentNext = 'iyun';
        }
        else {
            currentNext = currentNext.toLowerCase();
        }
        fillCalendar(currentNext, year);
    });

    $(document).on('click', ".mhmPicker .mainBlock .mBody tbody td", function () {
        if (typeNumber != 2) {
            $(".mhmPicker .mainBlock .mBody tbody td.mSelected").removeClass("mSelected");
            $(this).addClass("mSelected");
            var nowSelectedDay = $(this).text();
            if ($(this).parents(".firstTr").length && $(this).text() > 7) {
                var nowSelectedMonth = $(".mhmPicker .mainBlock .mHeader .mDate .mDateMonth").text();
                var nowSelectedYear = $(".mhmPicker .mainBlock .mHeader .mDate .mDateYear").text();
                var nowSelectedMonthNumber = jQuery.inArray(nowSelectedMonth, mMonth);
                if (nowSelectedMonthNumber == 0) {
                    nowSelectedMonthNumber = 12;
                    nowSelectedYear--;
                }
            }
            else if ($(this).hasClass("mDisable")) {
                var nowSelectedMonth = $(".mhmPicker .mainBlock .mHeader .mDate .mDateMonth").text();
                var nowSelectedYear = $(".mhmPicker .mainBlock .mHeader .mDate .mDateYear").text();
                var nowSelectedMonthNumber = jQuery.inArray(nowSelectedMonth, mMonth);
                nowSelectedMonthNumber += 2;
                if (nowSelectedMonthNumber == 13) {
                    nowSelectedMonthNumber = 1;
                    nowSelectedYear++;
                }
            }
            else {
                var nowSelectedMonth = $(".mhmPicker .mainBlock .mHeader .mDate .mDateMonth").text();
                var nowSelectedYear = $(".mhmPicker .mainBlock .mHeader .mDate .mDateYear").text();
                var nowSelectedMonthNumber = jQuery.inArray(nowSelectedMonth, mMonth);
                nowSelectedMonthNumber++;
            }
            var inputValueAdd = '';
            if (nowSelectedDay.length == 1) {
                inputValueAdd = "0" + nowSelectedDay + "-";
            }
            else {
                inputValueAdd = nowSelectedDay + "-"
            }
            if (nowSelectedMonthNumber == 12 || nowSelectedMonthNumber == 11 || nowSelectedMonthNumber == 10) {
                inputValueAdd += nowSelectedMonthNumber + "-"
            }
            else {
                inputValueAdd += "0" + nowSelectedMonthNumber + "-"
            }
            inputValueAdd += nowSelectedYear;
        }

        if (typeNumber != 1) {
            if (typeNumber == 3) {
                inputValueAdd += " ";
            }
            var clockHourValue = $(".mhmPicker .clockBlock .mainClock .mainHour").text();
            var clockMinuteValue = $(".mhmPicker .clockBlock .mainClock .mainMinute").text();
            inputValueAdd += clockHourValue + ":" + clockMinuteValue;
        }

        $(".mhmPicker .mhmPickerInput").val(inputValueAdd);
        $(".mhmPicker .mainBlock").remove();
    });

    //monthBlock
    $(document).on('click', ".mhmPicker .mainBlock .mHeader .mDate", function () {
        $(".mhmPicker .monthBlock .mBody tbody td.mSelected").removeClass("mSelected");
        $(this).parents(".mainBlock").addClass("mDisplayNone");
        $(".mhmPicker .monthBlock").removeClass("mDisplayNone");
        var currYear = $(".mhmPicker .mainBlock .mHeader .mDate .mDateYear").text();

        if ($(".mhmPicker .mhmPickerInput").val() != '') {
            var currInputWithClock = $(".mhmPicker .mhmPickerInput").val().split(" ");
            var currInput = currInputWithClock[0].split("-");
            var currInputMonth = Number(currInput[1]);
            var currInputYear = currInput[2];
        }
        else {
            var newNowDate = new Date();
            var currInputMonth = newNowDate.getMonth();
            var currInputYear = newNowDate.getFullYear();
            currInputMonth++;
        }

        if (currInputYear == currYear) {
            $(".mhmPicker .monthBlock .mBody tbody td[data-monthNum='" + currInputMonth + "']").addClass("mSelected");
        }
        else {
            $(".mhmPicker .monthBlock .mBody tbody td.mSelected").removeClass("mSelected");
        }
        $(".mhmPicker .monthBlock .mHeader .mDate .mDateYear").text(currYear);
    });
    $(document).on('click', ".mhmPicker .monthBlock .mHeader .mLeft span", function () {
        var monthBlockYear = Number($(".mhmPicker .monthBlock .mHeader .mDate .mDateYear").text());
        monthBlockYear--;
        $(".mhmPicker .monthBlock .mHeader .mDate .mDateYear").text(monthBlockYear);

        var currYear = $(".mhmPicker .monthBlock .mHeader .mDate .mDateYear").text();

        if ($(".mhmPicker .mhmPickerInput").val() != '') {
            var currInputWithClock = $(".mhmPicker .mhmPickerInput").val().split(" ");
            var currInput = currInputWithClock[0].split("-");
            var currInputMonth = Number(currInput[1]);
            var currInputYear = currInput[2];
        }
        else {
            var newNowDate = new Date();
            var currInputMonth = newNowDate.getMonth();
            var currInputYear = newNowDate.getFullYear();
            currInputMonth++;
        }

        if (currInputYear == currYear) {
            $(".mhmPicker .monthBlock .mBody tbody td[data-monthNum='" + currInputMonth + "']").addClass("mSelected");
        }
        else {
            $(".mhmPicker .monthBlock .mBody tbody td.mSelected").removeClass("mSelected");
        }
    })
    $(document).on('click', ".mhmPicker .monthBlock .mHeader .mRight span", function () {
        var monthBlockYear = Number($(".mhmPicker .monthBlock .mHeader .mDate .mDateYear").text());
        monthBlockYear++;
        $(".mhmPicker .monthBlock .mHeader .mDate .mDateYear").text(monthBlockYear);

        var currYear = $(".mhmPicker .monthBlock .mHeader .mDate .mDateYear").text();

        if ($(".mhmPicker .mhmPickerInput").val() != '') {
            var currInputWithClock = $(".mhmPicker .mhmPickerInput").val().split(" ");
            var currInput = currInputWithClock[0].split("-");
            var currInputMonth = Number(currInput[1]);
            var currInputYear = currInput[2];
        }
        else {
            var newNowDate = new Date();
            var currInputMonth = newNowDate.getMonth();
            var currInputYear = newNowDate.getFullYear();
            currInputMonth++;
        }

        if (currInputYear == currYear) {
            $(".mhmPicker .monthBlock .mBody tbody td[data-monthNum='" + currInputMonth + "']").addClass("mSelected");
        }
        else {
            $(".mhmPicker .monthBlock .mBody tbody td.mSelected").removeClass("mSelected");
        }
    })
    $(document).on('click', ".mhmPicker .monthBlock .mBody tbody td", function () {
        var nthChildClicked = $(".mhmPicker .monthBlock .mBody tbody td").index(this);
        var clickedMonth = mMonth[nthChildClicked];
        var clickedYear = $(".mhmPicker .monthBlock .mHeader .mDate .mDateYear").text();
        $(".mhmPicker .monthBlock").addClass("mDisplayNone");
        $(".mainBlock").removeClass("mDisplayNone");
        $(".mainBlock .mHeader .mDate .mDateYear").text(clickedYear);
        $(".mainBlock .mHeader .mDate .mDateMonth").text(clickedMonth);
        clickedMonth = clickedMonth.toLocaleLowerCase();
        fillCalendar(clickedMonth, clickedYear);
    });
    // ------------------------------------------//

    //yearBlock
    $(document).on('click', ".mhmPicker .monthBlock .mHeader .mDate", function () {
        $(this).parents(".monthBlock").addClass("mDisplayNone");
        $(".yearBlock").removeClass("mDisplayNone");


        if ($(".mhmPicker .mhmPickerInput").val() != '') {
            var curr2InputWithClock = $(".mhmPicker .mhmPickerInput").val().split(" ");
            var curr2Input = curr2InputWithClock[0].split("-");
            var curr2InputYear = curr2Input[2];
        }
        else {
            var new2NowDate = new Date();
            var curr2InputYear = new2NowDate.getFullYear();
        }
        var sendYear = curr2InputYear;
        sendYear -= sendYear % 10;
        $(".mhmPicker .yearBlock .mHeader .mDate .mFirstYear").text(sendYear);
        $(".mhmPicker .yearBlock .mHeader .mDate .mLastYear").text(sendYear + 11);
        fillYears(sendYear, curr2InputYear);
    });
    $(document).on('click', ".mhmPicker .yearBlock .mHeader .mRight span", function () {
        var firstYear = Number($(".mhmPicker .yearBlock .mHeader .mDate .mFirstYear").text());
        var lastYear = Number($(".mhmPicker .yearBlock .mHeader .mDate .mLastYear").text());
        firstYear += 10;
        lastYear += 10;
        $(".mhmPicker .yearBlock .mHeader .mDate .mFirstYear").text(firstYear);
        $(".mhmPicker .yearBlock .mHeader .mDate .mLastYear").text(lastYear);
        if ($(".mhmPicker .mhmPickerInput").val() != '') {
            var curr2InputWithClock = $(".mhmPicker .mhmPickerInput").val().split(" ");
            var curr2Input = curr2InputWithClock[0].split("-");
            var curr2InputYear = curr2Input[2];
        }
        else {
            var new2NowDate = new Date();
            var curr2InputYear = new2NowDate.getFullYear();
        }
        fillYears(firstYear, curr2InputYear);
    })
    $(document).on('click', ".mhmPicker .yearBlock .mHeader .mLeft span", function () {
        var firstYear = Number($(".mhmPicker .yearBlock .mHeader .mDate .mFirstYear").text());
        var lastYear = Number($(".mhmPicker .yearBlock .mHeader .mDate .mLastYear").text());
        firstYear -= 10;
        lastYear -= 10;
        $(".mhmPicker .yearBlock .mHeader .mDate .mFirstYear").text(firstYear);
        $(".mhmPicker .yearBlock .mHeader .mDate .mLastYear").text(lastYear);
        if ($(".mhmPicker .mhmPickerInput").val() != '') {
            var curr2InputWithClock = $(".mhmPicker .mhmPickerInput").val().split(" ");
            var curr2Input = curr2InputWithClock[0].split("-");
            var curr2InputYear = curr2Input[2];
        }
        else {
            var new2NowDate = new Date();
            var curr2InputYear = new2NowDate.getFullYear();
        }
        fillYears(firstYear, curr2InputYear);
    })
    $(document).on('click', ".mhmPicker .yearBlock .mBody tbody td", function () {
        $(this).parents(".yearBlock").addClass("mDisplayNone");
        $(".mhmPicker .monthBlock").removeClass("mDisplayNone");
        var yearClicked = $(this).text()
        $(".mhmPicker .monthBlock .mHeader .mDate .mDateYear").text(yearClicked);
        if ($(".mhmPicker .mhmPickerInput").val() != '') {
            var currInputWithClock = $(".mhmPicker .mhmPickerInput").val().split(" ");
            var currInput = currInputWithClock[0].split("-");
            var currInputMonth = Number(currInput[1]);
            var currInputYear = currInput[2];
        }
        else {
            var newNowDate = new Date();
            var currInputMonth = newNowDate.getMonth();
            var currInputYear = newNowDate.getFullYear();
            currInputMonth++;
        }
        if (currInputYear == yearClicked) {
            $(".mhmPicker .monthBlock .mBody tbody td[data-monthNum='" + currInputMonth + "']").addClass("mSelected");
        }
        else {
            $(".mhmPicker .monthBlock .mBody tbody td.mSelected").removeClass("mSelected");
        }
    })
    // ------------------------------------------//

    //clockBlock
    $(document).on('click', ".mhmPicker .mClock", function () {
        $(".mhmPicker .mainBlock").addClass("mDisplayNone");
        $(".mhmPicker .monthBlock").addClass("mDisplayNone");
        $(".mhmPicker .yearBlock").addClass("mDisplayNone");
        $(".mhmPicker .clockBlock").removeClass("mDisplayNone");
    })
    $(document).on('click', ".mhmPicker .clockBlock .clockUpIcons .minuteUp", function () { //minuteUpClick
        var currClockMinute = Number($(".mhmPicker .clockBlock .mainMinute").text());
        currClockMinute++;
        if (currClockMinute > 59) {
            var currClockHour = Number($(".mhmPicker .clockBlock .mainHour").text());
            currClockHour++;
            if (currClockHour > 23) {
                currClockHour = 0;
            }
            if (currClockHour < 10) {
                $(".mhmPicker .clockBlock .mainHour").text("0" + currClockHour);
            }
            else {
                $(".mhmPicker .clockBlock .mainHour").text(currClockHour);
            }
            currClockMinute = 0;
        }
        if (currClockMinute < 10) {
            $(".mhmPicker .clockBlock .mainMinute").text("0" + currClockMinute);
        }
        else {
            $(".mhmPicker .clockBlock .mainMinute").text(currClockMinute);
        }
    });

    $(document).on('click', ".mhmPicker .clockBlock .clockDownIcons .minuteDown", function () { //minuteDownClick
        var currClockMinute = Number($(".mhmPicker .clockBlock .mainMinute").text());
        currClockMinute--;
        if (currClockMinute < 0) {
            var currClockHour = Number($(".mhmPicker .clockBlock .mainHour").text());
            currClockHour--;
            if (currClockHour < 0) {
                currClockHour = 23;
            }
            if (currClockHour < 10) {
                $(".mhmPicker .clockBlock .mainHour").text("0" + currClockHour);
            }
            else {
                $(".mhmPicker .clockBlock .mainHour").text(currClockHour);
            }
            currClockMinute = 59;
        }
        if (currClockMinute < 10) {
            $(".mhmPicker .clockBlock .mainMinute").text("0" + currClockMinute);
        }
        else {
            $(".mhmPicker .clockBlock .mainMinute").text(currClockMinute);
        }
    })

    $(document).on('click', ".mhmPicker .clockBlock .clockUpIcons .hourUp", function () { //hourUpClick
        var currClockHour = Number($(".mhmPicker .clockBlock .mainHour").text());
        currClockHour++;
        if (currClockHour > 23) {
            currClockHour = 0;
        }
        if (currClockHour < 10) {
            $(".mhmPicker .clockBlock .mainHour").text("0" + currClockHour);
        }
        else {
            $(".mhmPicker .clockBlock .mainHour").text(currClockHour);
        }
    });

    $(document).on('click', ".mhmPicker .clockBlock .clockDownIcons .hourDown", function () { //hourDownClick
        var currClockHour = Number($(".mhmPicker .clockBlock .mainHour").text());
        currClockHour--;
        if (currClockHour < 0) {
            currClockHour = 23;
        }
        if (currClockHour < 10) {
            $(".mhmPicker .clockBlock .mainHour").text("0" + currClockHour);
        }
        else {
            $(".mhmPicker .clockBlock .mainHour").text(currClockHour);
        }
    });

    $(document).on('click', ".mhmPicker .clockBlock .mainClock .mainHour", function () {
        $(this).parents(".clockBlock").addClass("mDisplayNone");
        $(".mhmPicker .clockHourBlock").removeClass("mDisplayNone");
    })
    $(document).on('click', ".mhmPicker .clockHourBlock td", function () {
        var selectClockHour = $(this).text();
        $(this).parents(".clockHourBlock").addClass("mDisplayNone");
        $(".mhmPicker .clockBlock").removeClass("mDisplayNone");
        $(".mhmPicker .clockBlock .mainHour").text(selectClockHour);
    })

    $(document).on('click', ".mhmPicker .clockBlock .mainClock .mainMinute", function () {
        $(this).parents(".clockBlock").addClass("mDisplayNone");
        $(".mhmPicker .clockMinuteBlock").removeClass("mDisplayNone");
    })
    $(document).on('click', ".mhmPicker .clockMinuteBlock td", function () {
        var selectClockMinute = $(this).text();
        $(this).parents(".clockMinuteBlock").addClass("mDisplayNone");
        $(".mhmPicker .clockBlock").removeClass("mDisplayNone");
        $(".mhmPicker .clockBlock .mainMinute").text(selectClockMinute);
    })
    $(document).on('click', ".mhmPicker .mAccept", function () {
        if (typeNumber == 2) {
            var clockHourValue = $(".mhmPicker .clockBlock .mainClock .mainHour").text();
            var clockMinuteValue = $(".mhmPicker .clockBlock .mainClock .mainMinute").text();
            $(".mhmPicker .mhmPickerInput").val(clockHourValue + ":" + clockMinuteValue);
            $(".mhmPicker .mClicking").removeClass("mOpen");
            $(".mhmPicker .dtpBlock").remove();
        }
        else {
            $(".mhmPicker .clockBlock").addClass("mDisplayNone");
            $(".mhmPicker .clockMinuteBlock").addClass("mDisplayNone");
            $(".mhmPicker .clockHourBlock").addClass("mDisplayNone");
            $(".mhmPicker .mainBlock").removeClass("mDisplayNone");
        }
    })
    // ------------------------------------------//

    function fillCalendar(pickerMonth, pickerYear) {
        var tableData = $(".mhmPicker .mainBlock .mBody tbody td");
        $(".mhmPicker .mainBlock .mBody tbody td.mDisable").removeClass("mDisable");
        $(".mhmPicker .mainBlock .mBody tbody td.mSelected").removeClass("mSelected")
        count = 1;
        count2 = 1;
        var monthDay = 0;
        var monthNumber = 0;
        var prevMonth = 0;
        //-------------------//
        switch (pickerMonth) {
            case 'yanvar':
                monthDay = 31;
                monthNumber = 1;
                prevMonth = 31;
                break;
            case 'fevral':
                if (pickerMonth == 'fevral') {
                    monthNumber = 2;
                    if (pickerYear % 4 == 0) {
                        monthDay = 29;
                    }
                    else {
                        monthDay = 28;
                    }
                }
                prevMonth = 31;
                break;
            case 'mart':
                monthDay = 31;
                monthNumber = 3;
                if (pickerYear % 4 == 0) {
                    prevMonth = 29;
                }
                else {
                    prevMonth = 28;
                }
                break;
            case 'aprel':
                monthDay = 30;
                monthNumber = 4;
                prevMonth = 31;
                break;
            case 'may':
                monthDay = 31;
                monthNumber = 5;
                prevMonth = 30;
                break;
            case 'iyun':
                monthDay = 30;
                monthNumber = 6;
                prevMonth = 31;
                break;
            case 'iyul':
                monthDay = 31;
                monthNumber = 7;
                prevMonth = 30;
                break;
            case 'avqust':
                monthDay = 31;
                monthNumber = 8;
                prevMonth = 31;
                break;
            case 'sentyabr':
                monthDay = 30;
                monthNumber = 9;
                prevMonth = 31;
                break;
            case 'oktyabr':
                monthDay = 31;
                monthNumber = 10;
                prevMonth = 30;
                break;
            case 'noyabr':
                monthDay = 30;
                monthNumber = 11;
                prevMonth = 31;
                break;
            case 'dekabr':
                monthDay = 31;
                monthNumber = 12;
                prevMonth = 30;
                break;
        }
        //--------------------------//
        var currentDate = new Date(pickerYear, monthNumber - 1, 1);
        var beginFrom = currentDate.getDay();
        if (beginFrom == 0) {
            beginFrom = 7;
        }
        prevMonthDays = prevMonth - beginFrom + 2;
        beginFrom--;
        for (var i = 0; i < tableData.length; i++) {
            if (i < beginFrom) {
                $(tableData[i]).addClass("mDisable")
                $(tableData[i]).text(prevMonthDays);
                prevMonthDays++;
            }
            else if (i <= monthDay + beginFrom - 1) {
                $(tableData[i]).text(count);
                count++;
            }
            else {
                $(tableData[i]).addClass("mDisable")
                $(tableData[i]).text(count2);
                count2++;
            }
            if ($(tableData[i]).text() == mSelectedDate) {
                if ($(".mhmPicker .mainBlock .mHeader .mDateMonth").text() == mSelectedMonth && !$(tableData[i]).hasClass("mDisable")) {
                    if ($(".mhmPicker .mainBlock .mHeader .mDateYear").text() == mSelectedYear) {
                        $(tableData[i]).addClass("mSelected");
                    }
                }
                else {
                    for (var j = 0; j < mMonth.length; j++) {
                        if (mMonth[j] == mSelectedMonth) {
                            var currentSelectedNumber = j;
                            break;
                        }
                    }
                    var monthName = $(".mhmPicker .mainBlock .mHeader .mDateMonth").text();
                    if (currentSelectedNumber == 11) {
                        var constNextMonth = mMonth[0];
                    }
                    else {
                        var constNextMonth = mMonth[currentSelectedNumber + 1];
                    }
                    if (currentSelectedNumber == 0) {
                        var constPrevMonth = mMonth[11];
                    }
                    else {
                        var constPrevMonth = mMonth[currentSelectedNumber - 1];

                    }
                    if (constNextMonth == 'İyul') {
                        constNextMonth = 'iyul';
                    }
                    else if (constNextMonth == 'İyun') {
                        constNextMonth = 'iyun';
                    }
                    if (constPrevMonth == 'İyul') {
                        constPrevMonth = 'iyul';
                    }
                    else if (constPrevMonth == 'İyun') {
                        constPrevMonth = 'iyun';
                    }
                    if (monthName.toLowerCase() == constNextMonth.toLowerCase() && mSelectedDate > 14) {
                        if (monthName == constNextMonth && $(tableData[i]).hasClass("mDisable")) {
                            if ($(".mhmPicker .mainBlock .mHeader .mDateYear").text() == mSelectedYear || (($(".mhmPicker .mainBlock .mHeader .mDateYear").text() == mSelectedYear + 1) && $(".mhmPicker .mainBlock .mHeader .mDateMonth").text() == mMonth[11])) {
                                $(tableData[i]).addClass("mSelected");
                            }
                        }
                    }
                    else if (monthName.toLowerCase() == constPrevMonth.toLowerCase() && mSelectedDate <= 7) {
                        if (monthName == constPrevMonth && $(tableData[i]).hasClass("mDisable")) {
                            if ($(".mhmPicker .mainBlock .mHeader .mDateYear").text() == mSelectedYear || (($(".mhmPicker .mainBlock .mHeader .mDateYear").text() == mSelectedYear - 1) && $(".mhmPicker .mainBlock .mHeader .mDateMonth").text() == mMonth[0])) {
                                $(tableData[i]).addClass("mSelected");
                            }
                        }
                    }
                }
            }
        }
    }

    function fillYears(sendYear, currYear) {
        var yearTable = $(".mhmPicker .yearBlock tbody td");
        $(".mhmPicker .yearBlock tbody td.mSelected").removeClass("mSelected");
        for (var i = 0; i < yearTable.length; i++) {
            if (currYear == sendYear) {
                $(yearTable[i]).addClass("mSelected");
            }
            $(yearTable[i]).text(sendYear);
            sendYear++;
        }
    }

    function inputControl(inputValue) {
        var fullInput = inputValue.split(" ");
        if (typeNumber == 1 || typeNumber == 3) {
            var dateInput = fullInput[0].split("-");
            if ((!($.isNumeric(dateInput[0]))) || (!($.isNumeric(dateInput[1]))) || (!($.isNumeric(dateInput[2]))) || (dateInput.length != 3) || (Number(dateInput[0]) < 1) || (Number(dateInput[0]) > 31) || (Number(dateInput[1]) < 1 || Number(dateInput[1]) > 12) || (Number(dateInput[2]) < 1)) {
                return false;
            }
            var dayControl = Number(dateInput[0]);
            var monthControl = Number(dateInput[1]);
            var yearControl = Number(dateInput[2]);

            if ((monthControl == 4 || monthControl == 6 || monthControl == 9 || monthControl == 11) && dayControl > 30) {
                return false;
            }
            if (monthControl == 2) {
                if (dayControl > 29) {
                    return false;
                }
                else {
                    if (dayControl == 29 && (yearControl % 4 != 0)) {
                        return false;
                    }
                }
            }
        }
        if (typeNumber == 2 || typeNumber == 3) {
            if (typeNumber == 2) {
                var clockInput = fullInput[0].split(":");
            }
            else {
                if (fullInput.length == 1) {
                    return false;
                }
                var clockInput = fullInput[1].split(":");
            }
            if (!($.isNumeric(clockInput[0])) || !($.isNumeric(clockInput[1])) || clockInput.length != 2 || clockInput[0] == '' || clockInput[1] == '' || (Number(clockInput[0]) < 0 || Number(clockInput[0]) > 23) || (Number(clockInput[1]) < 0 || Number(clockInput[1]) > 59)) {
                return false;
            }
        }
        return true;
    }
})