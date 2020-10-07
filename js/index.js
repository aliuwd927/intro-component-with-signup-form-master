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


submit.addEventListener('click', () => {

    //console.log(is_Container_Empty);
    for(let isEmpty of is_Container_Empty){
        if(isEmpty.value === ''){
            //console.log('Fields are empty');
            let redContainer = isEmpty.style.borderColor ='red';
            console.log(redContainer);
        } else{
            console.log('check conditions');
        }
    }

});