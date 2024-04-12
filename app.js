const URL = "https://v6.exchangerate-api.com/v6/6a2a4955e5ecfb40393abf53/latest";


const countryList = {
  AED: "AE",
  AFN: "AF",
  XCD: "AG",
  ALL: "AL",
  AMD: "AM",
  ANG: "AN",
  AOA: "AO",
  AQD: "AQ",
  ARS: "AR",
  AUD: "AU",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  XOF: "BE",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  NOK: "BV",
  BWP: "BW",
  BYR: "BY",
  BZD: "BZ",
  CAD: "CA",
  CDF: "CD",
  XAF: "CF",
  CHF: "CH",
  CLP: "CL",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUP: "CU",
  CVE: "CV",
  CYP: "CY",
  CZK: "CZ",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DZD: "DZ",
  ECS: "EC",
  EEK: "EE",
  EGP: "EG",
  ETB: "ET",
  EUR: "FR",
  FJD: "FJ",
  FKP: "FK",
  GBP: "GB",
  GEL: "GE",
  GGP: "GG",
  GHS: "GH",
  GIP: "GI",
  GMD: "GM",
  GNF: "GN",
  GTQ: "GT",
  GYD: "GY",
  HKD: "HK",
  HNL: "HN",
  HRK: "HR",
  HTG: "HT",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  INR: "IN",
  IQD: "IQ",
  IRR: "IR",
  ISK: "IS",
  JMD: "JM",
  JOD: "JO",
  JPY: "JP",
  KES: "KE",
  KGS: "KG",
  KHR: "KH",
  KMF: "KM",
  KPW: "KP",
  KRW: "KR",
  KWD: "KW",
  KYD: "KY",
  KZT: "KZ",
  LAK: "LA",
  LBP: "LB",
  LKR: "LK",
  LRD: "LR",
  LSL: "LS",
  LTL: "LT",
  LVL: "LV",
  LYD: "LY",
  MAD: "MA",
  MDL: "MD",
  MGA: "MG",
  MKD: "MK",
  MMK: "MM",
  MNT: "MN",
  MOP: "MO",
  MRO: "MR",
  MTL: "MT",
  MUR: "MU",
  MVR: "MV",
  MWK: "MW",
  MXN: "MX",
  MYR: "MY",
  MZN: "MZ",
  NAD: "NA",
  XPF: "NC",
  NGN: "NG",
  NIO: "NI",
  NPR: "NP",
  NZD: "NZ",
  OMR: "OM",
  PAB: "PA",
  PEN: "PE",
  PGK: "PG",
  PHP: "PH",
  PKR: "PK",
  PLN: "PL",
  PYG: "PY",
  QAR: "QA",
  RON: "RO",
  RSD: "RS",
  RUB: "RU",
  RWF: "RW",
  SAR: "SA",
  SBD: "SB",
  SCR: "SC",
  SDG: "SD",
  SEK: "SE",
  SGD: "SG",
  SKK: "SK",
  SLL: "SL",
  SOS: "SO",
  SRD: "SR",
  STD: "ST",
  SVC: "SV",
  SYP: "SY",
  SZL: "SZ",
  THB: "TH",
  TJS: "TJ",
  TMT: "TM",
  TND: "TN",
  TOP: "TO",
  TRY: "TR",
  TTD: "TT",
  TWD: "TW",
  TZS: "TZ",
  UAH: "UA",
  UGX: "UG",
  USD: "US",
  UYU: "UY",
  UZS: "UZ",
  VEF: "VE",
  VND: "VN",
  VUV: "VU",
  YER: "YE",
  ZAR: "ZA",
  ZMK: "ZM",
  ZWD: "ZW",
};



async function get_data() {


  let select = document.querySelectorAll("select");

  for(options of select) {
    for(data in countryList){
      let option = document.createElement('option');
      option.textContent = data;
      options.appendChild(option);
    }
  }

  let selectEl = document.querySelector('select');
  for(options of selectEl.options) {
    if(options.value === "USD"){
      options.selected = "selected";
    }
  }
   
  let selectedval = 'USD';
  let selectedOption1;
  selectEl.addEventListener('change' , (e)=> {
    let selectedItem = document.querySelector(".From")
    let img = document.createElement("img");
     selectedOption1 = e.target.value;

     for(codes in countryList){
      if(codes === selectedOption1){
        selectedval = countryList[codes];
        img.src = `https://flagsapi.com/${selectedval}/flat/64.png`;
        selectedItem.querySelectorAll('img').forEach(oldImg => oldImg.remove());
       selectedItem.appendChild(img);

      }
     }
  });


  let selectEl2 = document.querySelector(".to");
  let selectedval2 ='INR';
  for(options of selectEl2.options) {
    if(options.value === "INR"){
      options.selected = "selected";
    }
  }
  let selectedOption;
  selectEl2.addEventListener('change' , async(e)=> {
     selectedOption = e.target.value;
     let selectedItem = document.querySelector(".To")
    let img = document.createElement("img");

     for(codes in countryList){
      if(codes === selectedOption){
        selectedval2 = countryList[codes];
        img.src = `https://flagsapi.com/${selectedval2}/flat/64.png`;
        selectedItem.querySelectorAll('img').forEach(oldImg => oldImg.remove());
       selectedItem.appendChild(img);

      }
     }

     
  let newData = await fetch(`${URL}/${selectedOption}`);
  let rates_wrt_data = await newData.json();
  let rates = rates_wrt_data.conversion_rates; 
  
    let rate_val = rates[selectedOption1];
    let result = document.querySelector(".result");
    let inputVal = document.querySelector("input");
    let btn = document.querySelector(".find");
  btn.addEventListener('click', (e)=> {
    result.style.display = "visible";
    result.textContent = rate_val * inputVal.value;

    e.preventDefault();
  })
   
  let Reset_btn = document.querySelector(".reset");
  Reset_btn.addEventListener('click', (e)=> {
    result.style.display = "none";
    inputVal.value = 0;
    e.preventDefault();
  })

  }); 


    
  }
get_data();


