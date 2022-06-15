const SERVER_PORT=  3200
function showForm(){

}
function  submitForm(){
    let weekdata=document.getElementById('week').value;
    let datedata=document.getElementById('date').value;
    let checkinOpponentdata=document.getElementById('checkinOpponent').value;
    let progressdata=document.getElementById('progress').value;
    let difficultydata=document.getElementById('difficulty').value;
    let ideadata=document.getElementById('idea').value;
    let commitmentLeveldata=document.getElementById('commitmentLevel').value;
    let responsedata=document.getElementById('response').value;
    
    const options={
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:{
            "week":weekdata,
            "date":datedata,
            "idea":ideadata,
            "progress":progressdata,
            "checkinOpponent":checkinOpponentdata,
            "difficulty":difficultydata,
            "commitmentLevel":commitmentLeveldata,
            "response":responsedata
        }
    }

    fetch(`http://localhost:${SERVER_PORT}/form/post`,options).then(
        (res)=>res.json()).then(data=>console.log(data)).catch(err=>console.log(err))
    
}
