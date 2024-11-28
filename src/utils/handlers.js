
export const statuses = {
    "Backlog": 0,
    "Todo": 1,
    "In progress": 2,
    "Done": 3,
    "Canceled": 4
}
export const statusesIcon = ["Backlog.svg","To-do.svg","in-progress.svg","Done.svg","Cancelled.svg"]

export const statusesName=["Backlog","Todo","In progress","Done","Canceled"];

export const priorities = ["No Priority", "Low", "Medium", "High", "Urgent"];
export const prioritiesIcon=["No-priority.svg","Img-Low_Priority.svg","Img-Medium_Priority.svg","Img-High_Priority.svg","SVG-Urgent_Priority_colour.svg"];

export const userDataObject = (users) => {
    const userMap = users.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
    }, {});
    return userMap;
}

const groupByPriority = (tickets) => {
    const priorityGroups = Array.from({ length: 5 }, () => []);
    tickets.forEach(ticket => {
        if (ticket.priority >= 0 && ticket.priority <= 4) {
            priorityGroups[ticket.priority].push(ticket);
        }
    });

    return priorityGroups;
}

const groupByStatus = (tickets) => {
    const statusGroups = Array.from({ length: 5 }, () => []);
    tickets.forEach(ticket => {
        const statusIndex = statuses[ticket.status];
        if (statusIndex !== undefined) {
            statusGroups[statusIndex].push(ticket);
        }
    });
    return statusGroups;
}

const groupByUser = (tickets, users) => {
    const sortedUsers = users.sort((a, b) => a.name.localeCompare(b.name));
    const userGroups = {};
    sortedUsers.forEach(user => {
        userGroups[user.id] = [];
    });


    tickets.forEach(ticket => {
        const assignedUserId = ticket.userId;
        if (userGroups[assignedUserId]) {
            userGroups[assignedUserId].push(ticket);
        }
    });
    return sortedUsers.map(user => (userGroups[user.id]));
}

export const handleGroupingOrOrderingChange = (data, grouping, ordering) => {
    const { tickets, users } = data;
    let result=[];
    if (grouping === "Status") {
        result=groupByStatus(tickets);
    }
    else if (grouping === "User") {
        result=groupByUser(tickets,users);
    }
    else {
        result=groupByPriority(tickets);
    }

    if(ordering==="Priority"){
        result.forEach((group)=>{
            group.sort((a,b)=>{
                if (a.priority !== b.priority) {
                    return a.priority - b.priority;
                }
                return a.title.localeCompare(b.title);
            })
        })
    }
    else{
        result.forEach((group)=>{
            group.sort((a,b)=>{
                if(a.title!==b.title){
                    return a.title.localeCompare(b.title);
                }
                return a.priority-b.priority;
            })
        })
    }
    return result;
}


export const findNameIcon=(grouping,index,users)=>{
    const result={icon:"",name:""}
    if(grouping==="Status"){
        result.name=statusesName[index];
        result.icon=statusesIcon[index];
    }
    else if(grouping==="User"){
        const sortedUsers = users.sort((a, b) => a.name.localeCompare(b.name));
        result.name=sortedUsers[index].name;
        result.icon="userIcon";
    }
    else{
        result.name=priorities[index];
        result.icon=prioritiesIcon[index];
    }
    return result;
}