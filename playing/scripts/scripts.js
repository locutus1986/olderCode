// file added 03022018


$("#relative2").on('click', () => {
  $('.lorem').hide();
  $('#relative1').text('Fill out the form below');
  addForm();
});

const addForm = () => {
  $('#myForm').html(`
    <form id='myForm' method="post" action='#'">
      <fieldset>
        <legend><h3>See how long you've lived</h3></legend>
        <label for='name'>What's your name?</label></br>
        <input type='text' id='name' placeholder='name'></br>
        <label for='birthDate'>What is your birthday?</label></br>
        <input type='text' id='birthDate' placeholder='mm/dd/yyyy'></br>
        <label for='select'>Select one to see how long your've lived in that unit:</label></br></br>
        <select id='mySelect'>
          <option value='milSec'>milliseconds</option>
          <option value='seconds'>seconds</option>
          <option value='minutes'>minutes</option>
          <option value='hours'>hours</option>
          <option value='days'>days</option>
          <option value='weeks'>weeks</option>
          <option value='years'>years</option>
        </select></br></br>
        <button id="submit1" type='submit'>Send it!
      </fieldset>
    </form>
    `);
}

$('#myForm').on('click', (evt) => {
  evt.preventDefault();
  $('#submit1').on("click", () => {
    let myObj = {
      "name": $('#name').val(),
      "birthDate": $('#birthDate').val(),
      "units": $('#mySelect').val()
        }
    const lifeObj = daysAlive(myObj);
    addData(myObj, lifeObj);

  });
});


const daysAlive = birthday => {
  const todayMilisec = new Date().getTime();
  let myArry = "",
      year = '',
      month = '',
      day ='';

  myArray = birthday.birthDate.toString().split('/');
  year = parseInt(myArray[2]);
  month = parseInt(myArray[0]-1);
  day = parseInt(myArray[1]);

  const yourBday = new Date(year, month, day).getTime();

  const lifeObj = {};

  lifeObj['milSec'] = todayMilisec - yourBday;
  lifeObj['seconds'] = parseInt(lifeObj.milSec/1000);
  lifeObj['minutes'] = parseInt(lifeObj.seconds/60);
  lifeObj['hours'] = parseInt(lifeObj.minutes/60);
  lifeObj['days'] = parseInt(lifeObj.hours/24);
  lifeObj['weeks'] = parseInt(lifeObj.days/7);
  lifeObj['years'] = parseInt(lifeObj.days/365);
console.log(lifeObj);
  return lifeObj;

}

const addData = (anObj, lifeObj) => {
  $('#output').html(`
    Hello ${anObj.name}, you have been alive for ${lifeObj[anObj.units]} ${anObj.units}.</br>
    `)
}
const checkData = () => {
  //checking to see if input fields are populated
  const name = $('#name').val();
  const birthDate = $('#birthDate').val();
  if(name == '' || birthDate == ''){
    $('#output').html(`please fill in the info required`);
    return false;
  }else{
    return true;
  }
}
