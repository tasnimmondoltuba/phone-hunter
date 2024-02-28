const loadPhone = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones);
    // console.log(phones);
}

const displayPhones = phones =>{
    // 1. id deye get kora
    const phoneContainer =document.getElementById('phone-container');
    // console.log(phones);
    phones.forEach(phone =>{
        console.log(phone);
        //2. create a div
        const PhoneCard = document.createElement('div');
        PhoneCard.classList = ('card w-96 bg-gray-100 shadow-xl');
        // 3. set innerHTML
        PhoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>

          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
        `;
        // 4.append child
        phoneContainer.appendChild(PhoneCard);
    })

}
loadPhone();