const yearSelect = document.querySelector('.year')
const makeSelect = document.querySelector('.make')
const modelSelect = document.querySelector('.model')
const submodelSelect = document.querySelector('.submodel')
const submitBtn = document.querySelector('.ymm-btn')

let yearValue = ''
let makeValue = ''
let modelValue = ''
let submodelValue = ''

checkNarrowCookie();
function addYears() {
  const start = 1980;
  const end = 2023;
  yearRange = [...Array(end - start + 1).keys()]
  yearRange.forEach(rangeValue => {
    year = end - rangeValue
    let yearOptEl = document.createElement('option')
    yearOptEl.value = year
    yearOptEl.textContent = year
    yearSelect.appendChild(yearOptEl);
  })
  if(localStorage.getItem("year") != '' && localStorage.getItem("year") != null){
    setYearMakeModelSelector();
  }
}

addYears();
// GET MAKES based on inputted year value
function handleYearSelect() {
  yearValue = yearSelect.options[yearSelect.selectedIndex].value
  if (makeSelect.options.length > 1) { handleReset('year') }
  try {
    fetch(`https://throtl-vehicle-data-api.herokuapp.com/api/ymm/makes?year=${yearValue}`)
      .then(response => {
        if(!response.ok) {
          throw new Error(`Request failed with msg: ${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        let makesArr = data.data
        makesArr.forEach(make => {
          let makeOptEl = document.createElement('option')
          makeOptEl.value = make.make
          makeOptEl.textContent = make.make
          makeSelect.appendChild(makeOptEl)
        })
      })
      .then(makeSelect.disabled = false)
  }catch (error) {
    console.log(error)
  }
}

// Get MODELS based on make Select
function handleMakeSelect() {
  makeValue = makeSelect.options[makeSelect.selectedIndex].value
  if (modelSelect.options.length > 1) { handleReset('make') }
  try {
    fetch(`https://throtl-vehicle-data-api.herokuapp.com/api/ymm/models?year=${yearValue}&make=${makeValue}`)
      .then(response => {
        if(!response.ok) {
          throw new Error(`Request failed with msg: ${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        let modelsArr = data.data
        modelsArr.forEach(model => {
          let modelOptEl = document.createElement('option')
          modelOptEl.value = model.model
          modelOptEl.textContent = model.model
          modelSelect.appendChild(modelOptEl)
        })
      })
      .then(modelSelect.disabled = false) 
  }catch (error) {
    console.log(error)
  }
}

function handleModelSelect() {
  modelValue = modelSelect.options[modelSelect.selectedIndex].value
  if (submodelSelect.options.length > 1) { handleReset('model') }
  try {
    fetch(`https://throtl-vehicle-data-api.herokuapp.com/api/ymm/submodels?year=${yearValue}&make=${makeValue}&model=${modelValue}`)
      .then(response => {
        if(!response.ok) {
          throw new Error(`Request failed with msg: ${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        let submodelsArr = data.data
        submodelsArr.forEach(submodel => {
          let submodelOptEl = document.createElement('option')
          submodelOptEl.value = submodel.submodel
          submodelOptEl.textContent = submodel.submodel
          submodelSelect.appendChild(submodelOptEl)
        })
      })
      .then(submodelSelect.disabled = false)
  }catch (error) {
    console.log(error)
  }
}

function handleSubmodelSelect() {
  submodelValue = submodelSelect.options[submodelSelect.selectedIndex].value
  submitBtn.disabled = false;
}

//RESET dropdown values if user changes previous dropdown values
function handleReset(location) {
  if(location == 'year') {
    makeSelect.options.length = 0;
    let makeOptEl = document.createElement('option')
    makeOptEl.value = ''
    makeOptEl.textContent = 'make'
    makeSelect.disabled = true;
    makeSelect.appendChild(makeOptEl)

    modelSelect.options.length = 0;
    let modelOptEl = document.createElement('option')
    modelOptEl.value = ''
    modelOptEl.textContent = 'model'
    modelSelect.disabled = true;
    modelSelect.appendChild(modelOptEl)

    submodelSelect.options.length = 0;
    let submodelOptEl = document.createElement('option')
    submodelOptEl.value = ''
    submodelOptEl.textContent = 'submodel'
    submodelSelect.disabled = true;
    submodelSelect.appendChild(submodelOptEl)

    submitBtn.disabled = true;
  
  } else if(location == 'make') {
    modelSelect.options.length = 0;
    let modelOptEl = document.createElement('option')
    modelOptEl.value = ''
    modelOptEl.textContent = 'model'
    modelSelect.disabled = true;
    modelSelect.appendChild(modelOptEl)

    submodelSelect.options.length = 0;
    let submodelOptEl = document.createElement('option')
    submodelOptEl.value = ''
    submodelOptEl.textContent = 'submodel'
    submodelSelect.disabled = true;
    submodelSelect.appendChild(submodelOptEl)

    submitBtn.disabled = true;
  
  } else if(location == 'model') {
    submodelSelect.options.length = 0;
    let submodelOptEl = document.createElement('option')
    submodelOptEl.value = ''
    submodelOptEl.textContent = 'submodel'
    submodelSelect.disabled = true;
    submodelSelect.appendChild(submodelOptEl)

    submitBtn.disabled = true;
  }
}

function handleSubmit() {
  ispSubmitProductFinder();
  checkNarrowCookie();
}

function setYearMakeModelSelector(){

  if(localStorage.getItem("year") != ''){
    $('.custom_search_div .year option[value="'+localStorage.getItem("year")+'"]').attr('selected','selected').trigger('change');
  }
  
  if(localStorage.getItem("make") != '' && localStorage.getItem("make") != null){          
    if($('.make option[value="' + localStorage.getItem("make") + '"]').length === 0) {
      $('.custom_search_div .make').append('<option value="' + localStorage.getItem("make") + '">' + localStorage.getItem("make") + '</option>');
      $('.custom_search_div .make option[value="'+localStorage.getItem("make")+'"]').attr('selected','selected').trigger('change');
    }else{
      $('.custom_search_div .make option[value="'+localStorage.getItem("make")+'"]').attr('selected','selected').trigger('change');
    }
  }else{
    $('.custom_search_div .make').append('<option value="Make">Make</option>');
    $('.custom_search_div .make option[value="Make"]').attr('selected','selected').trigger('change');
  }

  if(localStorage.getItem("model") != '' && localStorage.getItem("model") != null){
    if($('.model option[value="' + localStorage.getItem('model') + '"]').length === 0) {
      $('.custom_search_div .model').append('<option value="' + localStorage.getItem("model") + '">' + localStorage.getItem("model") + '</option>');
      $('.custom_search_div .model option[value="'+localStorage.getItem("model")+'"]').attr('selected','selected').trigger('change');
    }else{
      $('.custom_search_div .model option[value="'+localStorage.getItem("model")+'"]').attr('selected','selected').trigger('change');
    }
  }else{
    $('.custom_search_div .model').append('<option value="Model">Model</option>');
    $('.custom_search_div .model option[value="Model"]').attr('selected','selected').trigger('change');
  }
  

  if(localStorage.getItem("submodel") != '' && localStorage.getItem("submodel") != null){
    if($('.submodel option[value="' + localStorage.getItem("submodel") + '"]').length === 0) {
      $('.custom_search_div .submodel').append('<option value="' + localStorage.getItem("submodel") + '">' + localStorage.getItem("submodel") + '</option>');
      $('.custom_search_div .submodel option[value="'+localStorage.getItem("submodel")+'"]').attr('selected','selected').trigger('change');
    }else{
      $('.custom_search_div .submodel option[value="'+localStorage.getItem("submodel")+'"]').attr('selected','selected').trigger('change');
    }
  }else{
    $('.custom_search_div .submodel').append('<option value="Submodel">Submodel</option>');
    $('.custom_search_div .submodel option[value="Submodel"]').attr('selected','selected').trigger('change');
  }
}

// ISP search and tags logic
function ispSubmitProductFinder () {
    const fitment = getCurrentNarrow();
    if(fitment.year && fitment.make && fitment.model && fitment.subModel){
        setFitment(fitment);
      if(window.location.href.includes('/collections')){
      	window.location.href = getCollectionURL(fitment);
      } else {
      	window.location.href = getSearchURL(fitment);
      }
    }
}

function getCollectionURL(fitment){
  return `${location.origin}${location.pathname}?narrow=${getISPNarrowTermSlug(fitment)}`;
}

function getCurrentNarrow() {
  return {
    year: parseFitment(yearValue),
    make: parseFitment(makeValue),
    model: parseFitment(modelValue),
    subModel: parseFitment(submodelValue),
  }
}

function parseFitment(fitmentItem) {
  return fitmentItem ? fitmentItem.replaceAll([".","/"],"-") : null
}

function setFitment(fitment){
  localStorage.setItem("year", fitment.year);
  localStorage.setItem("make", fitment.make);
  localStorage.setItem("model", fitment.model);
  localStorage.setItem("submodel", fitment.subModel);
  setISPCookie(fitment);
}

function getSearchURL(fitment){
  return `${location.origin}/pages/search-results?q&narrow=${getISPNarrowTermSlug(fitment)}`;
}

function getISPNarrowTermSlug(fitment) {
  const tags = [];
  tags.push([TAG_FILTER_NAME ,`${fitment.year}:${fitment.make}:${fitment.model}:${fitment.subModel}`]);
  if(isUniversal()){
      tags.push([TAG_FILTER_NAME,"Universal"]);
  }
  return encodeURIComponent(JSON.stringify(tags));
}

function setISPCookie(fitment){
  const cookie = {  "Tag"  : fitment.year + ":" + fitment.make + ":" + fitment.model+ ":" + fitment.subModel }
  localStorage.setItem(ISP_COOKIE_NAME, JSON.stringify(cookie));
}

function checkNarrowCookie (){
  let cookie = localStorage.getItem("isp_product_finder_cookie");
  if(cookie && !isUniversalCategory()){
      let c = JSON.parse(cookie);
      let narrow = [TAG_FILTER_NAME ,c[TAG_FILTER_NAME ]];

      __isp_options.isp_serp_keep_ajax_search_facets = true;
      __isp_options.AVOID_POP_PRODUCTS_PRELOAD = false;
      isUniversal() ? __isp_options.dropdown_narrow_by = [narrow, UNIVERSAL_TAG] : __isp_options.dropdown_narrow_by = [narrow];
      isUniversal() ? __isp_options.isp_serp_ajax_header_narrow_facets = JSON.stringify([narrow,UNIVERSAL_TAG]) : __isp_options.isp_serp_ajax_header_narrow_facets = JSON.stringify([narrow]);
      for (let i = 0; i < document.querySelectorAll("form[action*=search]").length; i++) {
        let input = document.createElement("input");
        input.setAttribute("type", "hidden");
        input.setAttribute("name", "narrow");
        if(isUniversal()){
            input.setAttribute("value", JSON.stringify([narrow, UNIVERSAL_TAG]));
        } else {
            input.setAttribute("value", JSON.stringify([narrow]));
        }
        document.querySelectorAll("form[action*=search]")[i].appendChild(input);
      }
  } else {
    $("#isp_product_finder").removeAttr("id");
  }
}

function clearISPCookie (){
  removeUniversalCookie()

  localStorage.removeItem(ISP_COOKIE_NAME);
  localStorage.removeItem("year");
  localStorage.removeItem("make");
  localStorage.removeItem("model");
  localStorage.removeItem("submodel");
  if(getPageType() === router.FITMENT_PAGE){
      window.location.href = window.location.origin;
  } else {
      window.location.href = `${window.location.origin}${window.location.pathname}`;
  }
}

function toggleUniversalCookie(){
  const universal = localStorage.getItem("isp_product_finder_universal");
  if(!universal){
      localStorage.setItem("isp_product_finder_universal","true");
  } else {
      localStorage.setItem("isp_product_finder_universal",JSON.stringify(!JSON.parse(universal)));
  }
}

function removeUniversalCookie() {
  const universal = localStorage.getItem("isp_product_finder_universal");
  
  if(universal) {
    localStorage.removeItem("isp_product_finder_universal")
  } else return
}

