let money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == '' || money== null){
        money = +prompt("Ваш бюджет на месяц?");
    
    }
}

start();



let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income:[],
    savings: true
}

// let  a1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
//      a2 = prompt('Во сколько обойдется?' , ''),
//      a3 = prompt('Введите обязательную статью расходов в этом месяце', ''),
//      a4 = prompt('Во сколько обойдется?' , '');


function chooseExpenses(){
    for (let i = 0; i < 2; i++ ) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", '');
       let b = prompt("Во сколько обойдется?", '');
   
       if( (typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b !='' && a.length < 50){
           console.log('done'); 
           appData.expenses[a] = b;
       } else {
           i--;
       }
   
   
   };
   
}

chooseExpenses();

function detectDayBudget(){
    appData.moneyPerday = (appData.budjet/30).toFixed();
    
    alert('Kunlik budjet' + appData.moneyPerday);

}

detectDayBudget();

function detectLevel(){
    if(appData.moneyPerday<100){
        console.log('past daromad')
    } else if(appData.moneyPerday>100 && appData.moneyPerday< 1001) {
        console.log('o`rtacha daromad')
    } else if(appData.moneyPerday>1000){
        console.log('yuqori daromad')
    } else {
        console.log('Xatolik yuz berdi')
    }
    
}

detectLevel();

function checkSavings(){
    if (appData.savings == true){
        let save = +prompt('saqlangan pul hajmi'),
            percent = +prompt('saqlangan pul foizi');

        appData.monthIncome = save/100/12*percent;
        alert('depozitdan oylik foyda: ' + appData.monthIncome);
    }
}
checkSavings();