let To_Do = [];

while (true) {
    let req = prompt("Enter your Choice");
    if (req == "quit") {
        console.log("quitting app");
        break;
    }

    if (req == "list") {
        console.log("------------");
        for (let i=0;i<To_Do.length;i++) {
            console.log(i,To_Do[i]);
        }
        console.log("------------");
    } else if (req == "add") {
        let task = prompt("Enter the task to add in list");
        To_Do.push(task);
    }
    else if(req=="delete"){
        let index=prompt("Enter the task index to delete from list");
        To_Do.splice(index,1);
        console.log("task deleted");
    }
    else{
        console.log("error occured");
    }

}


