const signup = () => {
    console.log('hi')
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let country = document.getElementById("country");
    let city = document.getElementById("city");
    let password = document.getElementById("password");

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((res)=>{
                let user = {
                    username:username.value,
                    email:email.value,
                    phone:phone.value,
                    country:country.value,
                    city:city.value,
                    password:password.value
                }
                firebase.database().ref(`users/${res.user.uid}`).set(user)
                    .then(() => {
                        alert("User register hogaya")
                        window.location = "login.html"
                    })
                
            })
.catch((err) => {
            console.log("err=>", err)
        });
}




let login = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((res) => {
            firebase.database().ref(`users/${res.user.uid}`).once('value', (data) => {
               alert("login successfull")
                console.log(data.val())
            })
            window.location = "dashboard.html"
        })
        .catch((err) => {
            console.log('err=>', err)
        })

}



