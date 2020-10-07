//Receive an error message when the `form` is submitted if:
//Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
//The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`).
// The message for this error should say *"Looks like this is not an email"*

let submit = document.getElementById('button');
const is_Container_Empty = [document.getElementById('firstName'), 
                            document.getElementById('lastName'), 
                            document.getElementById('eMail'), 
                            document.getElementById('passWord')
                        ];
let chkEmail = document.getElementById('eMail');

const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                       
submit.addEventListener('click', () => {

    //console.log(is_Container_Empty);
    for(let isEmpty of is_Container_Empty){
        if(isEmpty.value === ''){
            //console.log('Fields are empty');
            let redContainer = isEmpty.style.borderColor ='red';
            //console.log(redContainer);
        } else if(isEmpty.value !== '' && !!regex.test(chkEmail.value)){
            let blackContainer = isEmpty.style.borderColor = 'black';
            alert(`Thank you ${is_Container_Empty[0].value} ${is_Container_Empty[1].value} for your order. Please wait while we log you in.`);
            break;

            //console.log('All systems nominal');
        } else{
            console.log('check conditions');
        }
    }

});