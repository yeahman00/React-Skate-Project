
export default function attemptsFunction(num){

        if (num > 0 && num < 2){
            return 1;
        }
        else if (num > 1 && num < 11){
            return Math.floor(Math.random() * num) + 1;;
        }
        else{return '---'};

};