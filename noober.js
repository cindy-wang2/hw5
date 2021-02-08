function levelOfService(ride) {
  let levelOfService
  if (ride.length > 1) {
    levelOfService = 'Noober Pool'
  } else if (ride[0].purpleRequested) {
    levelOfService = 'Noober Purple'
  } else if (ride[0].numberOfPassengers > 3) {
    levelOfService = 'Noober XL'
  } else {
    levelOfService = 'Noober X'
  }
  return levelOfService
}

function renderRides(ridesArray) {
  for (let i = 0; i < ridesArray.length; i++) {
    let ride = ridesArray[i]

    document.querySelector('.rides').insertAdjacentHTML('beforeend', `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${levelOfService(ride)}</span>
      </h1>
    `)

    let borderClass
    let backgroundClass
    if (levelOfService(ride) == 'Noober Purple') {
      borderClass = 'border-purple-500'
      backgroundClass = 'bg-purple-600'
    } else {
      borderClass = 'border-gray-900'
      backgroundClass = 'bg-gray-600'
    }

    for (let i = 0; i < ride.length; i++) {
      let leg = ride[i]

      document.querySelector('.rides').insertAdjacentHTML('beforeend', `
        <div class="border-4 ${borderClass} p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${leg.passengerDetails.first} ${leg.passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${leg.passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl ${backgroundClass} text-white p-2">
                ${leg.numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${leg.pickupLocation.address}</p>
              <p>${leg.pickupLocation.city}, ${leg.pickupLocation.state} ${leg.pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${leg.dropoffLocation.address}</p>
              <p>${leg.dropoffLocation.city}, ${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
      `)
    }
  }
}

window.addEventListener('DOMContentLoaded', function() {
  // ADD EVENT LISTENER TO 'ALL RIDES'
    let allRides = document.querySelector('#all-filter')
    allRides.addEventListener('click', async function(event){
      event.preventDefault() //supress the browser's default click behavior

    //When event occurs in listener function

    // a. Request ride data from API 
      let response = await fetch(' https://kiei451.com/api/rides.json')
      let json = await response.json()
      let ridesArray = json//find the array in the data
      document.querySelector('.rides').innerHTML = '' //clear the existing ride data from HTML
    // b. Pass array of rides to display all rides
      renderRides(ridesArray)
  })

  //ADD EVENT LISTENER TO 'NOOBER PURPLE' BUTTON
    let nooberPurple = document.querySelector('#noober-purple-filter')
    nooberPurple.addEventListener('click', async function(event){
    
    // a. Request ride data from API 
    let response = await fetch(' https://kiei451.com/api/rides.json')
    let json = await response.json()
    let ridesArray = json//find the array in the data
    document.querySelector('.rides').innerHTML = '' //clear the existing ride data from HTML

    let nooberPurpleArray = []

    for (let i = 0; i < ridesArray.length; i++){
      let ride = ridesArray[i]
  
      if (levelOfService(ride) == 'Noober Purple'){
        nooberPurpleArray.push(ride)
      }
    }
    //b. Pass array of Noober Purple rides 
    renderRides(nooberPurpleArray)

    })

  //ADD EVENT LISTENER TO 'NOOBER POOL' BUTTON
    let nooberPool = document.querySelector('#noober-pool-filter')
    nooberPool.addEventListener('click', async function(event){
    
    // a. Request ride data from API 
    let response = await fetch(' https://kiei451.com/api/rides.json')
    let json = await response.json()
    let ridesArray = json//find the array in the data
    document.querySelector('.rides').innerHTML = '' //clear the existing ride data from HTML

    let nooberPoolArray = []

    for (let i = 0; i < ridesArray.length; i++){
      let ride = ridesArray[i]

      if (levelOfService(ride) == 'Noober Pool'){
        nooberPoolArray.push(ride)
      }
    }
    
    //b. Pass array of Noober Pool rides 
    renderRides(nooberPoolArray)

  })

//ADD EVENT LISTENER TO 'NOOBER X' BUTTON
  let nooberX = document.querySelector('#noober-x-filter')
  nooberX.addEventListener('click', async function(event){

  // a. Request ride data from API 
  let response = await fetch(' https://kiei451.com/api/rides.json')
  let json = await response.json()
  let ridesArray = json//find the array in the data
  document.querySelector('.rides').innerHTML = '' //clear the existing ride data from HTML

  let nooberXArray = []

  for (let i = 0; i < ridesArray.length; i++){
    let ride = ridesArray[i]

    if (levelOfService(ride) == 'Noober X'){
      nooberXArray.push(ride)
    }
  }

  //b. Pass array of Noober X rides 
  renderRides(nooberXArray)

})

//ADD EVENT LISTENER TO 'NOOBER XL' BUTTON
let nooberXL = document.querySelector('#noober-xl-filter')
nooberXL.addEventListener('click', async function(event){

// a. Request ride data from API 
let response = await fetch(' https://kiei451.com/api/rides.json')
let json = await response.json()
let ridesArray = json//find the array in the data
document.querySelector('.rides').innerHTML = '' //clear the existing ride data from HTML

let nooberXLArray = []

for (let i = 0; i < ridesArray.length; i++){
  let ride = ridesArray[i]

  if (levelOfService(ride) == 'Noober XL'){
    nooberXLArray.push(ride)
  }
}

//b. Pass array of Noober XL rides 
renderRides(nooberXLArray)

})



})

