import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import * as ReactBootstrap from 'react-bootstrap';
import Nav from './Nav';

let cordinate = [
  {
    name: "Albania",
    country: "AL",
    "alpha3": "ALB",
    "numeric": 8,
    lat: 41,
    lon: 20
  },
  {
    name: "Algeria",
    country: "DZ",
    "alpha3": "DZA",
    "numeric": 12,
    lat: 28,
    lon: 3
  },
  {
    name: "American Samoa",
    country: "AS",
    "alpha3": "ASM",
    "numeric": 16,
    lat: -14.3333,
    lon: -170
  },
  {
    name: "Andorra",
    country: "AD",
    "alpha3": "AND",
    "numeric": 20,
    lat: 42.5,
    lon: 1.6
  },
  {
    name: "Angola",
    country: "AO",
    "alpha3": "AGO",
    "numeric": 24,
    lat: -12.5,
    lon: 18.5
  },
  {
    name: "Anguilla",
    country: "AI",
    "alpha3": "AIA",
    "numeric": 660,
    lat: 18.25,
    lon: -63.1667
  },
  // {
  //     name: "Antarctica",
  //     country: "AQ",
  //     "alpha3": "ATA",
  //     "numeric": 10,
  //     lat: -90,
  //     lon: 1
  // },
  {
    name: "Antigua and Barbuda",
    country: "AG",
    "alpha3": "ATG",
    "numeric": 28,
    lat: 17.05,
    lon: -61.8
  },
  {
    name: "Argentina",
    country: "AR",
    "alpha3": "ARG",
    "numeric": 32,
    lat: -34,
    lon: -64
  },
  {
    name: "Armenia",
    country: "AM",
    "alpha3": "ARM",
    "numeric": 51,
    lat: 40,
    lon: 45
  },
  {
    name: "Aruba",
    country: "AW",
    "alpha3": "ABW",
    "numeric": 533,
    lat: 12.5,
    lon: -69.9667
  },
  {
    name: "Australia",
    country: "AU",
    "alpha3": "AUS",
    "numeric": 36,
    lat: -27,
    lon: 133
  },
  {
    name: "Austria",
    country: "AT",
    "alpha3": "AUT",
    "numeric": 40,
    lat: 47.3333,
    lon: 13.3333
  },
  {
    name: "Azerbaijan",
    country: "AZ",
    "alpha3": "AZE",
    "numeric": 31,
    lat: 40.5,
    lon: 47.5
  },
  {
    name: "Bahamas",
    country: "BS",
    "alpha3": "BHS",
    "numeric": 44,
    lat: 24.25,
    lon: -76
  },
  {
    name: "Bahrain",
    country: "BH",
    "alpha3": "BHR",
    "numeric": 48,
    lat: 26,
    lon: 50.55
  },
  {
    name: "Bangladesh",
    country: "BD",
    "alpha3": "BGD",
    "numeric": 50,
    lat: 24,
    lon: 90
  },
  {
    name: "Barbados",
    country: "BB",
    "alpha3": "BRB",
    "numeric": 52,
    lat: 13.1667,
    lon: -59.5333
  },
  {
    name: "Belarus",
    country: "BY",
    "alpha3": "BLR",
    "numeric": 112,
    lat: 53,
    lon: 28
  },
  {
    name: "Belgium",
    country: "BE",
    "alpha3": "BEL",
    "numeric": 56,
    lat: 50.8333,
    lon: 4
  },
  {
    name: "Belize",
    country: "BZ",
    "alpha3": "BLZ",
    "numeric": 84,
    lat: 17.25,
    lon: -88.75
  },
  {
    name: "Benin",
    country: "BJ",
    "alpha3": "BEN",
    "numeric": 204,
    lat: 9.5,
    lon: 2.25
  },
  {
    name: "Bermuda",
    country: "BM",
    "alpha3": "BMU",
    "numeric": 60,
    lat: 32.3333,
    lon: -64.75
  },
  {
    name: "Bhutan",
    country: "BT",
    "alpha3": "BTN",
    "numeric": 64,
    lat: 27.5,
    lon: 90.5
  },
  {
    name: "Bolivia, Plurinational State of",
    country: "BO",
    "alpha3": "BOL",
    "numeric": 68,
    lat: -17,
    lon: -65
  },
  {
    name: "Bosnia and Herzegovina",
    country: "BA",
    "alpha3": "BIH",
    "numeric": 70,
    lat: 44,
    lon: 18
  },
  {
    name: "Botswana",
    country: "BW",
    "alpha3": "BWA",
    "numeric": 72,
    lat: -22,
    lon: 24
  },
  {
    name: "Bouvet Island",
    country: "BV",
    "alpha3": "BVT",
    "numeric": 74,
    lat: -54.4333,
    lon: 3.4
  },
  {
    name: "Brazil",
    country: "BR",
    "alpha3": "BRA",
    "numeric": 76,
    lat: -10,
    lon: -55
  },
  {
    name: "British Indian Ocean Territory",
    country: "IO",
    "alpha3": "IOT",
    "numeric": 86,
    lat: -6,
    lon: 71.5
  },
  {
    name: "Brunei Darussalam",
    country: "BN",
    "alpha3": "BRN",
    "numeric": 96,
    lat: 4.5,
    lon: 114.6667
  },
  {
    name: "Bulgaria",
    country: "BG",
    "alpha3": "BGR",
    "numeric": 100,
    lat: 43,
    lon: 25
  },
  {
    name: "Burkina Faso",
    country: "BF",
    "alpha3": "BFA",
    "numeric": 854,
    lat: 13,
    lon: -2
  },
  {
    name: "Burundi",
    country: "BI",
    "alpha3": "BDI",
    "numeric": 108,
    lat: -3.5,
    lon: 30
  },
  {
    name: "Cambodia",
    country: "KH",
    "alpha3": "KHM",
    "numeric": 116,
    lat: 13,
    lon: 105
  },
  {
    name: "Cameroon",
    country: "CM",
    "alpha3": "CMR",
    "numeric": 120,
    lat: 6,
    lon: 12
  },
  {
    name: "Canada",
    country: "CA",
    "alpha3": "CAN",
    "numeric": 124,
    lat: 60,
    lon: -95
  },
  {
    name: "Cape Verde",
    country: "CV",
    "alpha3": "CPV",
    "numeric": 132,
    lat: 16,
    lon: -24
  },
  {
    name: "Cayman Islands",
    country: "KY",
    "alpha3": "CYM",
    "numeric": 136,
    lat: 19.5,
    lon: -80.5
  },
  {
    name: "Central African Republic",
    country: "CF",
    "alpha3": "CAF",
    "numeric": 140,
    lat: 7,
    lon: 21
  },
  {
    name: "Chad",
    country: "TD",
    "alpha3": "TCD",
    "numeric": 148,
    lat: 15,
    lon: 19
  },
  {
    name: "Chile",
    country: "CL",
    "alpha3": "CHL",
    "numeric": 152,
    lat: -30,
    lon: -71
  },
  {
    name: "China",
    country: "CN",
    "alpha3": "CHN",
    "numeric": 156,
    lat: 35,
    lon: 105
  },
  {
    name: "Christmas Island",
    country: "CX",
    "alpha3": "CXR",
    "numeric": 162,
    lat: -10.5,
    lon: 105.6667
  },
  {
    name: "Cocos (Keeling) Islands",
    country: "CC",
    "alpha3": "CCK",
    "numeric": 166,
    lat: -12.5,
    lon: 96.8333
  },
  {
    name: "Colombia",
    country: "CO",
    "alpha3": "COL",
    "numeric": 170,
    lat: 4,
    lon: -72
  },
  {
    name: "Comoros",
    country: "KM",
    "alpha3": "COM",
    "numeric": 174,
    lat: -12.1667,
    lon: 44.25
  },
  {
    name: "Congo",
    country: "CG",
    "alpha3": "COG",
    "numeric": 178,
    lat: -1,
    lon: 15
  },
  {
    name: "Congo, the Democratic Republic of the",
    country: "CD",
    "alpha3": "COD",
    "numeric": 180,
    lat: 0,
    lon: 25
  },
  {
    name: "Cook Islands",
    country: "CK",
    "alpha3": "COK",
    "numeric": 184,
    lat: -21.2333,
    lon: -159.7667
  },
  {
    name: "Costa Rica",
    country: "CR",
    "alpha3": "CRI",
    "numeric": 188,
    lat: 10,
    lon: -84
  },
  {
    name: "Côte d'Ivoire",
    country: "CI",
    "alpha3": "CIV",
    "numeric": 384,
    lat: 8,
    lon: -5
  },
  {
    name: "Croatia",
    country: "HR",
    "alpha3": "HRV",
    "numeric": 191,
    lat: 45.1667,
    lon: 15.5
  },
  {
    name: "Cuba",
    country: "CU",
    "alpha3": "CUB",
    "numeric": 192,
    lat: 21.5,
    lon: -80
  },
  {
    name: "Cyprus",
    country: "CY",
    "alpha3": "CYP",
    "numeric": 196,
    lat: 35,
    lon: 33
  },
  {
    name: "Czech Republic",
    country: "CZ",
    "alpha3": "CZE",
    "numeric": 203,
    lat: 49.75,
    lon: 15.5
  },
  {
    name: "Denmark",
    country: "DK",
    "alpha3": "DNK",
    "numeric": 208,
    lat: 56,
    lon: 10
  },
  {
    name: "Djibouti",
    country: "DJ",
    "alpha3": "DJI",
    "numeric": 262,
    lat: 11.5,
    lon: 43
  },
  {
    name: "Dominica",
    country: "DM",
    "alpha3": "DMA",
    "numeric": 212,
    lat: 15.4167,
    lon: -61.3333
  },
  {
    name: "Dominican Republic",
    country: "DO",
    "alpha3": "DOM",
    "numeric": 214,
    lat: 19,
    lon: -70.6667
  },
  {
    name: "Ecuador",
    country: "EC",
    "alpha3": "ECU",
    "numeric": 218,
    lat: -2,
    lon: -77.5
  },
  {
    name: "Egypt",
    country: "EG",
    "alpha3": "EGY",
    "numeric": 818,
    lat: 27,
    lon: 30
  },
  {
    name: "El Salvador",
    country: "SV",
    "alpha3": "SLV",
    "numeric": 222,
    lat: 13.8333,
    lon: -88.9167
  },
  {
    name: "Equatorial Guinea",
    country: "GQ",
    "alpha3": "GNQ",
    "numeric": 226,
    lat: 2,
    lon: 10
  },
  {
    name: "Eritrea",
    country: "ER",
    "alpha3": "ERI",
    "numeric": 232,
    lat: 15,
    lon: 39
  },
  {
    name: "Estonia",
    country: "EE",
    "alpha3": "EST",
    "numeric": 233,
    lat: 59,
    lon: 26
  },
  {
    name: "Ethiopia",
    country: "ET",
    "alpha3": "ETH",
    "numeric": 231,
    lat: 8,
    lon: 38
  },
  {
    name: "Falkland Islands (Malvinas)",
    country: "FK",
    "alpha3": "FLK",
    "numeric": 238,
    lat: -51.75,
    lon: -59
  },
  {
    name: "Faroe Islands",
    country: "FO",
    "alpha3": "FRO",
    "numeric": 234,
    lat: 62,
    lon: -7
  },
  {
    name: "Fiji",
    country: "FJ",
    "alpha3": "FJI",
    "numeric": 242,
    lat: -18,
    lon: 175
  },
  {
    name: "Finland",
    country: "FI",
    "alpha3": "FIN",
    "numeric": 246,
    lat: 64,
    lon: 26
  },
  {
    name: "France",
    country: "FR",
    "alpha3": "FRA",
    "numeric": 250,
    lat: 46,
    lon: 2
  },
  {
    name: "French Guiana",
    country: "GF",
    "alpha3": "GUF",
    "numeric": 254,
    lat: 4,
    lon: -53
  },
  {
    name: "French Polynesia",
    country: "PF",
    "alpha3": "PYF",
    "numeric": 258,
    lat: -15,
    lon: -140
  },
  {
    name: "French Southern Territories",
    country: "TF",
    "alpha3": "ATF",
    "numeric": 260,
    lat: -43,
    lon: 67
  },
  {
    name: "Gabon",
    country: "GA",
    "alpha3": "GAB",
    "numeric": 266,
    lat: -1,
    lon: 11.75
  },
  {
    name: "Gambia",
    country: "GM",
    "alpha3": "GMB",
    "numeric": 270,
    lat: 13.4667,
    lon: -16.5667
  },
  {
    name: "Georgia",
    country: "GE",
    "alpha3": "GEO",
    "numeric": 268,
    lat: 42,
    lon: 43.5
  },
  {
    name: "Germany",
    country: "DE",
    "alpha3": "DEU",
    "numeric": 276,
    lat: 51,
    lon: 9
  },
  {
    name: "Ghana",
    country: "GH",
    "alpha3": "GHA",
    "numeric": 288,
    lat: 8,
    lon: -2
  },
  {
    name: "Gibraltar",
    country: "GI",
    "alpha3": "GIB",
    "numeric": 292,
    lat: 36.1833,
    lon: -5.3667
  },
  {
    name: "Greece",
    country: "GR",
    "alpha3": "GRC",
    "numeric": 300,
    lat: 39,
    lon: 22
  },
  {
    name: "Greenland",
    country: "GL",
    "alpha3": "GRL",
    "numeric": 304,
    lat: 72,
    lon: -40
  },
  {
    name: "Grenada",
    country: "GD",
    "alpha3": "GRD",
    "numeric": 308,
    lat: 12.1167,
    lon: -61.6667
  },
  {
    name: "Guadeloupe",
    country: "GP",
    "alpha3": "GLP",
    "numeric": 312,
    lat: 16.25,
    lon: -61.5833
  },
  {
    name: "Guam",
    country: "GU",
    "alpha3": "GUM",
    "numeric": 316,
    lat: 13.4667,
    lon: 144.7833
  },
  {
    name: "Guatemala",
    country: "GT",
    "alpha3": "GTM",
    "numeric": 320,
    lat: 15.5,
    lon: -90.25
  },
  {
    name: "Guernsey",
    country: "GG",
    "alpha3": "GGY",
    "numeric": 831,
    lat: 49.5,
    lon: -2.56
  },
  {
    name: "Guinea",
    country: "GN",
    "alpha3": "GIN",
    "numeric": 324,
    lat: 11,
    lon: -10
  },
  {
    name: "Guinea-Bissau",
    country: "GW",
    "alpha3": "GNB",
    "numeric": 624,
    lat: 12,
    lon: -15
  },
  {
    name: "Guyana",
    country: "GY",
    "alpha3": "GUY",
    "numeric": 328,
    lat: 5,
    lon: -59
  },
  {
    name: "Haiti",
    country: "HT",
    "alpha3": "HTI",
    "numeric": 332,
    lat: 19,
    lon: -72.4167
  },
  {
    name: "Heard Island and McDonald Islands",
    country: "HM",
    "alpha3": "HMD",
    "numeric": 334,
    lat: -53.1,
    lon: 72.5167
  },
  {
    name: "Holy See (Vatican City State)",
    country: "VA",
    "alpha3": "VAT",
    "numeric": 336,
    lat: 41.9,
    lon: 12.45
  },
  {
    name: "Honduras",
    country: "HN",
    "alpha3": "HND",
    "numeric": 340,
    lat: 15,
    lon: -86.5
  },
  {
    name: "Hong Kong",
    country: "HK",
    "alpha3": "HKG",
    "numeric": 344,
    lat: 22.25,
    lon: 114.1667
  },
  {
    name: "Hungary",
    country: "HU",
    "alpha3": "HUN",
    "numeric": 348,
    lat: 47,
    lon: 20
  },
  {
    name: "Iceland",
    country: "IS",
    "alpha3": "ISL",
    "numeric": 352,
    lat: 65,
    lon: -18
  },
  {
    name: "India",
    country: "IN",
    "alpha3": "IND",
    "numeric": 356,
    lat: 20,
    lon: 77
  },
  {
    name: "Indonesia",
    country: "ID",
    "alpha3": "IDN",
    "numeric": 360,
    lat: -5,
    lon: 120
  },
  {
    name: "Iran, Islamic Republic of",
    country: "IR",
    "alpha3": "IRN",
    "numeric": 364,
    lat: 32,
    lon: 53
  },
  {
    name: "Iraq",
    country: "IQ",
    "alpha3": "IRQ",
    "numeric": 368,
    lat: 33,
    lon: 44
  },
  {
    name: "Ireland",
    country: "IE",
    "alpha3": "IRL",
    "numeric": 372,
    lat: 53,
    lon: -8
  },
  {
    name: "Isle of Man",
    country: "IM",
    "alpha3": "IMN",
    "numeric": 833,
    lat: 54.23,
    lon: -4.55
  },
  {
    name: "Israel",
    country: "IL",
    "alpha3": "ISR",
    "numeric": 376,
    lat: 31.5,
    lon: 34.75
  },
  {
    name: "Italy",
    country: "IT",
    "alpha3": "ITA",
    "numeric": 380,
    lat: 42.8333,
    lon: 12.8333
  },
  {
    name: "Jamaica",
    country: "JM",
    "alpha3": "JAM",
    "numeric": 388,
    lat: 18.25,
    lon: -77.5
  },
  {
    name: "Japan",
    country: "JP",
    "alpha3": "JPN",
    "numeric": 392,
    lat: 36,
    lon: 138
  },
  {
    name: "Jersey",
    country: "JE",
    "alpha3": "JEY",
    "numeric": 832,
    lat: 49.21,
    lon: -2.13
  },
  {
    name: "Jordan",
    country: "JO",
    "alpha3": "JOR",
    "numeric": 400,
    lat: 31,
    lon: 36
  },
  {
    name: "Kazakhstan",
    country: "KZ",
    "alpha3": "KAZ",
    "numeric": 398,
    lat: 48,
    lon: 68
  },
  {
    name: "Kenya",
    country: "KE",
    "alpha3": "KEN",
    "numeric": 404,
    lat: 1,
    lon: 38
  },
  {
    name: "Kiribati",
    country: "KI",
    "alpha3": "KIR",
    "numeric": 296,
    lat: 1.4167,
    lon: 173
  },
  {
    name: "Korea, Democratic People's Republic of",
    country: "KP",
    "alpha3": "PRK",
    "numeric": 408,
    lat: 40,
    lon: 127
  },
  {
    name: "Korea, Republic of",
    country: "KR",
    "alpha3": "KOR",
    "numeric": 410,
    lat: 37,
    lon: 127.5
  },
  {
    name: "Kuwait",
    country: "KW",
    "alpha3": "KWT",
    "numeric": 414,
    lat: 29.3375,
    lon: 47.6581
  },
  {
    name: "Kyrgyzstan",
    country: "KG",
    "alpha3": "KGZ",
    "numeric": 417,
    lat: 41,
    lon: 75
  },
  {
    name: "Lao People's Democratic Republic",
    country: "LA",
    "alpha3": "LAO",
    "numeric": 418,
    lat: 18,
    lon: 105
  },
  {
    name: "Latvia",
    country: "LV",
    "alpha3": "LVA",
    "numeric": 428,
    lat: 57,
    lon: 25
  },
  {
    name: "Lebanon",
    country: "LB",
    "alpha3": "LBN",
    "numeric": 422,
    lat: 33.8333,
    lon: 35.8333
  },
  {
    name: "Lesotho",
    country: "LS",
    "alpha3": "LSO",
    "numeric": 426,
    lat: -29.5,
    lon: 28.5
  },
  {
    name: "Liberia",
    country: "LR",
    "alpha3": "LBR",
    "numeric": 430,
    lat: 6.5,
    lon: -9.5
  },
  {
    name: "Libyan Arab Jamahiriya",
    country: "LY",
    "alpha3": "LBY",
    "numeric": 434,
    lat: 25,
    lon: 17
  },
  {
    name: "Liechtenstein",
    country: "LI",
    "alpha3": "LIE",
    "numeric": 438,
    lat: 47.1667,
    lon: 9.5333
  },
  {
    name: "Lithuania",
    country: "LT",
    "alpha3": "LTU",
    "numeric": 440,
    lat: 56,
    lon: 24
  },
  {
    name: "Luxembourg",
    country: "LU",
    "alpha3": "LUX",
    "numeric": 442,
    lat: 49.75,
    lon: 6.1667
  },
  {
    name: "Macao",
    country: "MO",
    "alpha3": "MAC",
    "numeric": 446,
    lat: 22.1667,
    lon: 113.55
  },
  {
    name: "Macedonia, the former Yugoslav Republic of",
    country: "MK",
    "alpha3": "MKD",
    "numeric": 807,
    lat: 41.8333,
    lon: 22
  },
  {
    name: "Madagascar",
    country: "MG",
    "alpha3": "MDG",
    "numeric": 450,
    lat: -20,
    lon: 47
  },
  {
    name: "Malawi",
    country: "MW",
    "alpha3": "MWI",
    "numeric": 454,
    lat: -13.5,
    lon: 34
  },
  {
    name: "Malaysia",
    country: "MY",
    "alpha3": "MYS",
    "numeric": 458,
    lat: 2.5,
    lon: 112.5
  },
  {
    name: "Maldives",
    country: "MV",
    "alpha3": "MDV",
    "numeric": 462,
    lat: 3.25,
    lon: 73
  },
  {
    name: "Mali",
    country: "ML",
    "alpha3": "MLI",
    "numeric": 466,
    lat: 17,
    lon: -4
  },
  {
    name: "Malta",
    country: "MT",
    "alpha3": "MLT",
    "numeric": 470,
    lat: 35.8333,
    lon: 14.5833
  },
  {
    name: "Marshall Islands",
    country: "MH",
    "alpha3": "MHL",
    "numeric": 584,
    lat: 9,
    lon: 168
  },
  {
    name: "Martinique",
    country: "MQ",
    "alpha3": "MTQ",
    "numeric": 474,
    lat: 14.6667,
    lon: -61
  },
  {
    name: "Mauritania",
    country: "MR",
    "alpha3": "MRT",
    "numeric": 478,
    lat: 20,
    lon: -12
  },
  {
    name: "Mauritius",
    country: "MU",
    "alpha3": "MUS",
    "numeric": 480,
    lat: -20.2833,
    lon: 57.55
  },
  {
    name: "Mayotte",
    country: "YT",
    "alpha3": "MYT",
    "numeric": 175,
    lat: -12.8333,
    lon: 45.1667
  },
  {
    name: "Mexico",
    country: "MX",
    "alpha3": "MEX",
    "numeric": 484,
    lat: 23,
    lon: -102
  },
  {
    name: "Micronesia, Federated States of",
    country: "FM",
    "alpha3": "FSM",
    "numeric": 583,
    lat: 6.9167,
    lon: 158.25
  },
  {
    name: "Moldova, Republic of",
    country: "MD",
    "alpha3": "MDA",
    "numeric": 498,
    lat: 47,
    lon: 29
  },
  {
    name: "Monaco",
    country: "MC",
    "alpha3": "MCO",
    "numeric": 492,
    lat: 43.7333,
    lon: 7.4
  },
  {
    name: "Mongolia",
    country: "MN",
    "alpha3": "MNG",
    "numeric": 496,
    lat: 46,
    lon: 105
  },
  {
    name: "Montenegro",
    country: "ME",
    "alpha3": "MNE",
    "numeric": 499,
    lat: 42,
    lon: 19
  },
  {
    name: "Montserrat",
    country: "MS",
    "alpha3": "MSR",
    "numeric": 500,
    lat: 16.75,
    lon: -62.2
  },
  {
    name: "Morocco",
    country: "MA",
    "alpha3": "MAR",
    "numeric": 504,
    lat: 32,
    lon: -5
  },
  {
    name: "Mozambique",
    country: "MZ",
    "alpha3": "MOZ",
    "numeric": 508,
    lat: -18.25,
    lon: 35
  },
  {
    name: "Myanmar",
    country: "MM",
    "alpha3": "MMR",
    "numeric": 104,
    lat: 22,
    lon: 98
  },
  {
    name: "Namibia",
    country: "NA",
    "alpha3": "NAM",
    "numeric": 516,
    lat: -22,
    lon: 17
  },
  {
    name: "Nauru",
    country: "NR",
    "alpha3": "NRU",
    "numeric": 520,
    lat: -0.5333,
    lon: 166.9167
  },
  {
    name: "Nepal",
    country: "NP",
    "alpha3": "NPL",
    "numeric": 524,
    lat: 28,
    lon: 84
  },
  {
    name: "Netherlands",
    country: "NL",
    "alpha3": "NLD",
    "numeric": 528,
    lat: 52.5,
    lon: 5.75
  },
  {
    name: "Netherlands Antilles",
    country: "AN",
    "alpha3": "ANT",
    "numeric": 530,
    lat: 12.25,
    lon: -68.75
  },
  {
    name: "New Caledonia",
    country: "NC",
    "alpha3": "NCL",
    "numeric": 540,
    lat: -21.5,
    lon: 165.5
  },
  {
    name: "New Zealand",
    country: "NZ",
    "alpha3": "NZL",
    "numeric": 554,
    lat: -41,
    lon: 174
  },
  {
    name: "Nicaragua",
    country: "NI",
    "alpha3": "NIC",
    "numeric": 558,
    lat: 13,
    lon: -85
  },
  {
    name: "Niger",
    country: "NE",
    "alpha3": "NER",
    "numeric": 562,
    lat: 16,
    lon: 8
  },
  {
    name: "Nigeria",
    country: "NG",
    "alpha3": "NGA",
    "numeric": 566,
    lat: 10,
    lon: 8
  },
  {
    name: "Niue",
    country: "NU",
    "alpha3": "NIU",
    "numeric": 570,
    lat: -19.0333,
    lon: -169.8667
  },
  {
    name: "Norfolk Island",
    country: "NF",
    "alpha3": "NFK",
    "numeric": 574,
    lat: -29.0333,
    lon: 167.95
  },
  {
    name: "Northern Mariana Islands",
    country: "MP",
    "alpha3": "MNP",
    "numeric": 580,
    lat: 15.2,
    lon: 145.75
  },
  {
    name: "Norway",
    country: "NO",
    "alpha3": "NOR",
    "numeric": 578,
    lat: 62,
    lon: 10
  },
  {
    name: "Oman",
    country: "OM",
    "alpha3": "OMN",
    "numeric": 512,
    lat: 21,
    lon: 57
  },
  {
    name: "Pakistan",
    country: "PK",
    "alpha3": "PAK",
    "numeric": 586,
    lat: 30,
    lon: 70
  },
  {
    name: "Palau",
    country: "PW",
    "alpha3": "PLW",
    "numeric": 585,
    lat: 7.5,
    lon: 134.5
  },
  {
    name: "Palestinian Territory, Occupied",
    country: "PS",
    "alpha3": "PSE",
    "numeric": 275,
    lat: 32,
    lon: 35.25
  },
  {
    name: "Panama",
    country: "PA",
    "alpha3": "PAN",
    "numeric": 591,
    lat: 9,
    lon: -80
  },
  {
    name: "Papua New Guinea",
    country: "PG",
    "alpha3": "PNG",
    "numeric": 598,
    lat: -6,
    lon: 147
  },
  {
    name: "Paraguay",
    country: "PY",
    "alpha3": "PRY",
    "numeric": 600,
    lat: -23,
    lon: -58
  },
  {
    name: "Peru",
    country: "PE",
    "alpha3": "PER",
    "numeric": 604,
    lat: -10,
    lon: -76
  },
  {
    name: "Philippines",
    country: "PH",
    "alpha3": "PHL",
    "numeric": 608,
    lat: 13,
    lon: 122
  },
  {
    name: "Pitcairn",
    country: "PN",
    "alpha3": "PCN",
    "numeric": 612,
    lat: -24.7,
    lon: -127.4
  },
  {
    name: "Poland",
    country: "PL",
    "alpha3": "POL",
    "numeric": 616,
    lat: 52,
    lon: 20
  },
  {
    name: "Portugal",
    country: "PT",
    "alpha3": "PRT",
    "numeric": 620,
    lat: 39.5,
    lon: -8
  },
  {
    name: "Puerto Rico",
    country: "PR",
    "alpha3": "PRI",
    "numeric": 630,
    lat: 18.25,
    lon: -66.5
  },
  {
    name: "Qatar",
    country: "QA",
    "alpha3": "QAT",
    "numeric": 634,
    lat: 25.5,
    lon: 51.25
  },
  {
    name: "Réunion",
    country: "RE",
    "alpha3": "REU",
    "numeric": 638,
    lat: -21.1,
    lon: 55.6
  },
  {
    name: "Romania",
    country: "RO",
    "alpha3": "ROU",
    "numeric": 642,
    lat: 46,
    lon: 25
  },
  {
    name: "Russian Federation",
    country: "RU",
    "alpha3": "RUS",
    "numeric": 643,
    lat: 60,
    lon: 100
  },
  {
    name: "Rwanda",
    country: "RW",
    "alpha3": "RWA",
    "numeric": 646,
    lat: -2,
    lon: 30
  },
  {
    name: "Saint Helena, Ascension and Tristan da Cunha",
    country: "SH",
    "alpha3": "SHN",
    "numeric": 654,
    lat: -15.9333,
    lon: -5.7
  },
  {
    name: "Saint Kitts and Nevis",
    country: "KN",
    "alpha3": "KNA",
    "numeric": 659,
    lat: 17.3333,
    lon: -62.75
  },
  {
    name: "Saint Lucia",
    country: "LC",
    "alpha3": "LCA",
    "numeric": 662,
    lat: 13.8833,
    lon: -61.1333
  },
  {
    name: "Saint Pierre and Miquelon",
    country: "PM",
    "alpha3": "SPM",
    "numeric": 666,
    lat: 46.8333,
    lon: -56.3333
  },
  {
    name: "Saint Vincent and the Grenadines",
    country: "VC",
    "alpha3": "VCT",
    "numeric": 670,
    lat: 13.25,
    lon: -61.2
  },
  {
    name: "Samoa",
    country: "WS",
    "alpha3": "WSM",
    "numeric": 882,
    lat: -13.5833,
    lon: -172.3333
  },
  {
    name: "San Marino",
    country: "SM",
    "alpha3": "SMR",
    "numeric": 674,
    lat: 43.7667,
    lon: 12.4167
  },
  {
    name: "Sao Tome and Principe",
    country: "ST",
    "alpha3": "STP",
    "numeric": 678,
    lat: 1,
    lon: 7
  },

  {
    name: "Saudi Arabia",
    country: "SA",
    "alpha3": "SAU",
    "numeric": 682,
    lat: 25,
    lon: 45
  },
  {
    name: "Senegal",
    country: "SN",
    "alpha3": "SEN",
    "numeric": 686,
    lat: 14,
    lon: -14
  },
  {
    name: "Serbia",
    country: "RS",
    "alpha3": "SRB",
    "numeric": 688,
    lat: 44,
    lon: 21
  },
  {
    name: "Seychelles",
    country: "SC",
    "alpha3": "SYC",
    "numeric": 690,
    lat: -4.5833,
    lon: 55.6667
  },
  {
    name: "Sierra Leone",
    country: "SL",
    "alpha3": "SLE",
    "numeric": 694,
    lat: 8.5,
    lon: -11.5
  },
  {
    name: "Singapore",
    country: "SG",
    "alpha3": "SGP",
    "numeric": 702,
    lat: 1.3667,
    lon: 103.8
  },
  {
    name: "Slovakia",
    country: "SK",
    "alpha3": "SVK",
    "numeric": 703,
    lat: 48.6667,
    lon: 19.5
  },
  {
    name: "Slovenia",
    country: "SI",
    "alpha3": "SVN",
    "numeric": 705,
    lat: 46,
    lon: 15
  },
  {
    name: "Solomon Islands",
    country: "SB",
    "alpha3": "SLB",
    "numeric": 90,
    lat: -8,
    lon: 159
  },
  {
    name: "Somalia",
    country: "SO",
    "alpha3": "SOM",
    "numeric": 706,
    lat: 10,
    lon: 49
  },
  {
    name: "South Africa",
    country: "ZA",
    "alpha3": "ZAF",
    "numeric": 710,
    lat: -29,
    lon: 24
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    country: "GS",
    "alpha3": "SGS",
    "numeric": 239,
    lat: -54.5,
    lon: -37
  },
  {
    name: "Spain",
    country: "ES",
    "alpha3": "ESP",
    "numeric": 724,
    lat: 40,
    lon: -4
  },
  {
    name: "Sri Lanka",
    country: "LK",
    "alpha3": "LKA",
    "numeric": 144,
    lat: 7,
    lon: 81
  },
  {
    name: "Sudan",
    country: "SD",
    "alpha3": "SDN",
    "numeric": 736,
    lat: 15,
    lon: 30
  },
  {
    name: "Suriname",
    country: "SR",
    "alpha3": "SUR",
    "numeric": 740,
    lat: 4,
    lon: -56
  },
  {
    name: "Svalbard and Jan Mayen",
    country: "SJ",
    "alpha3": "SJM",
    "numeric": 744,
    lat: 78,
    lon: 20
  },
  {
    name: "Swaziland",
    country: "SZ",
    "alpha3": "SWZ",
    "numeric": 748,
    lat: -26.5,
    lon: 31.5
  },
  {
    name: "Sweden",
    country: "SE",
    "alpha3": "SWE",
    "numeric": 752,
    lat: 62,
    lon: 15
  },
  {
    name: "Switzerland",
    country: "CH",
    "alpha3": "CHE",
    "numeric": 756,
    lat: 47,
    lon: 8
  },
  {
    name: "Syrian Arab Republic",
    country: "SY",
    "alpha3": "SYR",
    "numeric": 760,
    lat: 35,
    lon: 38
  },
  {
    name: "Taiwan, Province of China",
    country: "TW",
    "alpha3": "TWN",
    "numeric": 158,
    lat: 23.5,
    lon: 121
  },
  {
    name: "Tajikistan",
    country: "TJ",
    "alpha3": "TJK",
    "numeric": 762,
    lat: 39,
    lon: 71
  },
  {
    name: "Tanzania, United Republic of",
    country: "TZ",
    "alpha3": "TZA",
    "numeric": 834,
    lat: -6,
    lon: 35
  },
  {
    name: "Thailand",
    country: "TH",
    "alpha3": "THA",
    "numeric": 764,
    lat: 15,
    lon: 100
  },
  {
    name: "Timor-Leste",
    country: "TL",
    "alpha3": "TLS",
    "numeric": 626,
    lat: -8.55,
    lon: 125.5167
  },
  {
    name: "Togo",
    country: "TG",
    "alpha3": "TGO",
    "numeric": 768,
    lat: 8,
    lon: 1.1667
  },
  {
    name: "Tokelau",
    country: "TK",
    "alpha3": "TKL",
    "numeric": 772,
    lat: -9,
    lon: -172
  },
  {
    name: "Tonga",
    country: "TO",
    "alpha3": "TON",
    "numeric": 776,
    lat: -20,
    lon: -175
  },
  {
    name: "Trinidad and Tobago",
    country: "TT",
    "alpha3": "TTO",
    "numeric": 780,
    lat: 11,
    lon: -61
  },
  {
    name: "Tunisia",
    country: "TN",
    "alpha3": "TUN",
    "numeric": 788,
    lat: 34,
    lon: 9
  },
  {
    name: "Turkey",
    country: "TR",
    "alpha3": "TUR",
    "numeric": 792,
    lat: 39,
    lon: 35
  },
  {
    name: "Turkmenistan",
    country: "TM",
    "alpha3": "TKM",
    "numeric": 795,
    lat: 40,
    lon: 60
  },
  {
    name: "Turks and Caicos Islands",
    country: "TC",
    "alpha3": "TCA",
    "numeric": 796,
    lat: 21.75,
    lon: -71.5833
  },
  {
    name: "Tuvalu",
    country: "TV",
    "alpha3": "TUV",
    "numeric": 798,
    lat: -8,
    lon: 178
  },
  {
    name: "Uganda",
    country: "UG",
    "alpha3": "UGA",
    "numeric": 800,
    lat: 1,
    lon: 32
  },
  {
    name: "Ukraine",
    country: "UA",
    "alpha3": "UKR",
    "numeric": 804,
    lat: 49,
    lon: 32
  },
  {
    name: "United Arab Emirates",
    country: "AE",
    "alpha3": "ARE",
    "numeric": 784,
    lat: 24,
    lon: 54
  },
  {
    name: "United Kingdom",
    country: "GB",
    "alpha3": "GBR",
    "numeric": 826,
    lat: 54,
    lon: -2
  },
  {
    name: "United States",
    country: "US",
    "alpha3": "USA",
    "numeric": 840,
    lat: 38,
    lon: -97
  },
  {
    name: "United States Minor Outlying Islands",
    country: "UM",
    "alpha3": "UMI",
    "numeric": 581,
    lat: 19.2833,
    lon: 166.6
  },
  {
    name: "Uruguay",
    country: "UY",
    "alpha3": "URY",
    "numeric": 858,
    lat: -33,
    lon: -56
  },
  {
    name: "Uzbekistan",
    country: "UZ",
    "alpha3": "UZB",
    "numeric": 860,
    lat: 41,
    lon: 64
  },
  {
    name: "Vanuatu",
    country: "VU",
    "alpha3": "VUT",
    "numeric": 548,
    lat: -16,
    lon: 167
  },
  {
    name: "Venezuela, Bolivarian Republic of",
    country: "VE",
    "alpha3": "VEN",
    "numeric": 862,
    lat: 8,
    lon: -66
  },
  {
    name: "Viet Nam",
    country: "VN",
    "alpha3": "VNM",
    "numeric": 704,
    lat: 16,
    lon: 106
  },
  {
    name: "Virgin Islands, British",
    country: "VG",
    "alpha3": "VGB",
    "numeric": 92,
    lat: 18.5,
    lon: -64.5
  },
  {
    name: "Virgin Islands, U.S.",
    country: "VI",
    "alpha3": "VIR",
    "numeric": 850,
    lat: 18.3333,
    lon: -64.8333
  },
  {
    name: "Wallis and Futuna",
    country: "WF",
    "alpha3": "WLF",
    "numeric": 876,
    lat: -13.3,
    lon: -176.2
  },
  {
    name: "Western Sahara",
    country: "EH",
    "alpha3": "ESH",
    "numeric": 732,
    lat: 24.5,
    lon: -13
  },
  {
    name: "Yemen",
    country: "YE",
    "alpha3": "YEM",
    "numeric": 887,
    lat: 15,
    lon: 48
  },
  {
    name: "Zambia",
    country: "ZM",
    "alpha3": "ZMB",
    "numeric": 894,
    lat: -15,
    lon: 30
  },
  {
    name: "Zimbabwe",
    country: "ZW",
    "alpha3": "ZWE",
    "numeric": 716,
    lat: -20,
    lon: 30
  },
  {
    name: "Afghanistan",
    country: "AF",
    "alpha3": "AFG",
    "numeric": 4,
    lat: 33,
    lon: 65
  }
]


function Map() {

  const [covidCount, setcovidCount] = useState(null);
  const [select, setSelect] = useState(null);
  const [loading,setLoading]=useState(false);
  const [viewport, setViewport] = React.useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 2
  });

  useEffect(() => {
    const getdata = async () => {
      const data = await fetch("https://api.covid19api.com/summary");
      const responce = await data.json();
      console.log(responce);
      setcovidCount(responce);
      setLoading(true);
    }

    getdata();
  }, [])

  return (
    <>
    <Nav/>
    {
      loading ? <ReactMapGL
      {...viewport}
      width="100%"
      height="95vh"
      mapboxApiAccessToken="pk.eyJ1IjoiZG1lbmRhcGFyYSIsImEiOiJja2trdTFsdTcycnE3MnZwYXRrNDZuYzltIn0.jcz2W6dGMsPuZR4PH8a1VA"
      onViewportChange={(viewport) => setViewport(viewport)}
      onClick={() => { setSelect(null) }}
    >
      {
        cordinate.map((item) => {
          return (
              <>
            <div onClick={(e) => {
              e.preventDefault();
              setSelect(item);
            }}>

              <Marker latitude={item.lat} longitude={item.lon}><img src="https://img.icons8.com/color/24/000000/map-pin.png" alt="" /></Marker>
            </div>
            </>
          )
        })
      }

      {select !== null ? <Popup latitude={select.lat} longitude={select.lon}>{covidCount ? covidCount.Countries.find(item => {
        return item.CountryCode === select.country;
      }) ? covidCount.Countries.find(item => {
        return item.CountryCode === select.country;
      }).TotalConfirmed : "0" : ""}</Popup> : ""}

    </ReactMapGL>:<ReactBootstrap.Spinner animation="border" className="loader2 text-center"/>
    }
    </>
  );
}



export default Map;