const scheduleTask = (taskName,delay,repeat = false) =>{
        if(repeat){
            const intervalId = setInterval(()=>{
                console.log(`Task "${taskName}" started after ${delay} ms`);
            },delay);
            return intervalId;
        }
        else{
            const timeoutid = setTimeout(()=>{
                console.log(`ask "${taskName}" started after ${delay} ms`)
            },delay);
            return timeoutid;
        }
    };
    const cancelRepeatingTask = (id) =>{
        clearInterval(id);
        console.log(`Repeating task with ID ${id} cancelled`);
    }
    const scheduleTaskPromise = (taskName,delay)=>{
        return new Promise((resolve)=>{
        setTimeout(()=>{
        
            const message = `Task "${taskName}" completed after ${delay}ms`;
            resolve(message);

        },delay)
    
    });

};

scheduleTask("Log Session", 1000);                     // one-time
const intervalId = scheduleTask("Check Notifications", 2000, true); // repeating
setTimeout(() => cancelRepeatingTask(intervalId), 8000);            // cancel after 8 s

scheduleTaskPromise("Data Export", 1500).then(console.log);





//Problem 1: Smart Task Scheduler
//Objective
//Simulate a task-scheduler system that allows tasks to be delayed or repeated with clean callback / promise handling.

//Requirements
//Implement scheduleTask(taskName, delay, repeat = false)

//If repeat is false, run once after delay ms.
//If repeat is true, run every delay ms until cancelled.
//Return the timer ID (setTimeout ID for one-shot, setInterval ID for repeating) so it can be cancelled later.
//Use arrow functions and template literals to log, e.g.

//Task "Backup User Data" started after 3000 ms

//Implement cancelRepeatingTask(id) that stops a repeating task by calling clearInterval(id).

//Bonus: scheduleTaskPromise(taskName, delay) returns a Promise that resolves after the delay with

//Task "Sync Inventory" completed after 2000 ms

//Sample Usage
//scheduleTask("Log Session", 1000);                     // one-time
//const intervalId = scheduleTask("Check Notifications", 2000, true); // repeating
//setTimeout(() => cancelRepeatingTask(intervalId), 8000);            // cancel after 8 s

//scheduleTaskPromise("Data Export", 1500).then(console.log);
