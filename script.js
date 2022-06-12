const URL_API = 'http://localhost:8000/jobs/';

getData(URL_API);
let dataArray = []
let temporaryArr


async function getData(URL) {
  const request = await fetch('http://localhost:8000/jobs/');
  const data = await request.json();
  dataArray = data
  console.log(data)
  data.forEach(createItem);
}

function resetList() {
  const list = document.querySelector('.jobs-contianer ul')
  list.innerHTML = ""
}

function createItem({
  company,
  position,
  postedAt,
  contract,
  location,
  level,
  role,
  languages,
  logo,
  new: newJob,
  featured,
}) {
  const itemContainer = document.querySelector('.jobs-contianer ul');
  const item = document.createElement('li');
  item.innerHTML = `<li>
  <div class="img-container" style=" background-image: url(${logo})"></div>
  <div class="info">
    <div class="title">
      <h3>${company}</h3>
      ${newJob ? '<span>NEW!</span>' : ''}
      ${featured ? '<span>FEATURED</span>' : ''}
    </div>
    <h3>${position}</h3>
    <div class="info-job">
      <p class="time">${postedAt}</p>
      <span>.</span>
      <p class="time-job">${contract}</p>
      <span>.</span>
      <p class="location">${location}</p>
    </div>
  </div>
  <div class="tags">
    <span>${role}</span>
    <span>${level}</span>
    ${languages.map((language) => {
      // console.log(language);
      return `<span>${language}</span>`
    })}
  </div>
</li>`;
  itemContainer.appendChild(item);
  const spans = item.querySelectorAll('.tags span')
  spans.forEach((span)=>{
    span.addEventListener('click',(e)=>{
      console.log(e.target.innerHTML)
      let modifiedData = dataArray.filter((data)=>{
        let arrayData = [data.role,data.level,...data.languages]
        if(arrayData.includes(e.target.innerHTML)) {
          return true
        }
      })

resetList()
modifiedData.forEach(createItem)
    })
  })
  
}


function filter(value) {
  console.log(value)
}