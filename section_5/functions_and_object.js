let GitHubOne = {
    title : 'Repo on CPP',
    repono : 20,
    project : 'Gaming project',
    projectDescription : 'old Famous Snake Game'
}

let GitHubTwo = {
    title : 'Repo on JS',
    repono : 20,
    project : 'Weather Application',
    projectDescription : 'Weather Forecasting Application made using API and JS'
}

let ChangeRepoNo = function(myobject){
    return {
        ChangeOne : `Number of Repo are: ${myobject.repono + 5}`,
        ChangeTwo : `Number of Repo are: ${myobject.repono + 6}`
    }
}

let addone = ChangeRepoNo(GitHubOne)

console.log(addone.ChangeTwo) 