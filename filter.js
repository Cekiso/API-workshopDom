const color = document.querySelector('.colors');
const brand = document.querySelector('.brands');
const car = document.querySelector('.cars');
const button = document.querySelector('.button');
const cars = document.querySelector('.cars')

const colorTemplates = document.querySelector('.colorTemplate');
const carsTemplates = document.querySelector('.carTemplates');
const carsTemplate = document.querySelector('.carsTemplate');
const brandTemplates = document.querySelector('.brandTemplate');


// const brandTemplates = document.querySelector('.brandTemplate');

const Template1 = Handlebars.compile(colorTemplates.innerHTML);
const Template4 = Handlebars.compile(brandTemplates.innerHTML);

const Template2 = Handlebars.compile(carsTemplates.innerHTML);
const Template3 = Handlebars.compile(carsTemplate.innerHTML);



//colors
axios.get('https://api-tutor.herokuapp.com/v1/colors').then(function(result) {
    color.innerHTML = Template1({ color: result.data })

});
//brand
axios.get('https://api-tutor.herokuapp.com/v1/makes').then(function(result) {
    brand.innerHTML = Template4({ brands: result.data });
});
//cars
axios.get('https://api-tutor.herokuapp.com/v1/cars').then(function(result) {
    car.innerHTML = Template3({ cars: result.data });

})


button.addEventListener('click', function() {
    let list = [];
    axios.get('https://api-tutor.herokuapp.com/v1/cars').then(function(result) {

        // console.log(color.value);
        for (let i = 0; i < result.data.length; i++) {
            const element = result.data[i];

            if (element.color == color.value && element.make == brand.value) {
                list.push({
                    color: `${element.color}`,
                    brand: `${element.make}`,
                    car: `${element.reg_number}`

                })

            } else if (element.make == brand.value && element.color == '') {
                list.push({
                    color: `${element.color}`,
                    brand: `${element.make}`,
                    car: `${element.reg_number}`
                })

            } else if (element.color == color.value && element.make == '') {
                list.push({
                    color: `${element.color}`,
                    brand: `${element.make}`,
                    car: `${element.reg_number}`
                })

            }

        }

        console.log(list);
        let text = {
            'list': list
        }
        cars.innerHTML = Template2(text);
    })


});