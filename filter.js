const color = document.querySelector('.colors');
const brand = document.querySelector('.brands');

const colorTemplates = document.querySelector('.colorTemplate');
// const brandTemplates = document.querySelector('.brandTemplate');

const Template1 = Handlebars.compile(colorTemplates.innerHTML);
// const Template2 = Handlebars.compile(brandTemplates.innerHTML);

//colors
axios.get('http://api-tutor.herokuapp.com/v1/colors').then(function(result) {
    color.innerHTML = Template1({ color: result.data })

});
//brand
axios.get('http://api-tutor.herokuapp.com/v1/makes').then(function(result) {
    brand.innerHTML = Template1({ color: result.data });
});
axios.get('http://api-tutor.herokuapp.com/v1/colors/:color.value').then(function(result) {

})
axios.get('http://api-tutor.herokuapp.com/v1/make/:brand.value/color/:color.value').then(function(result) {
    car.innerHTML = Template1({ color: result.data });

})