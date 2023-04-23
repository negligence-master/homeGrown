prev_val = ""
val = 0
list = []

countries = ['Europe', 'Northern Europe', 'Denmark', 'Finland', 'Føroyar', 'Great Britain', 'Iceland', 'Ireland', 'Ireland', 'Northern Ireland', 'Norway', 'Svalbard', 'Sweden', 'Middle Europe', 'Austria', 'Austria', 'Liechtenstein', 'Belgium', 'Belgium', 'Luxembourg', 'Czechoslovakia', 'Czech Republic', 'Slovakia', 'Germany', 'Hungary', 'Netherlands', 'Poland', 'Switzerland', 'Southwestern Europe', 'Baleares', 'Corse', 'France', 'Channel Is.', 'France', 'Monaco', 'Portugal', 'Sardegna', 'Spain', 'Andorra', 'Gibraltar', 'Spain', 'Southeastern Europe', 'Albania', 'Bulgaria', 'Greece', 'Italy', 'Italy', 'San Marino', 'Vatican City', 'Kriti', 'Romania', 'Sicilia', 'Malta', 'Sicilia', 'Turkey-in-Europe', 'Yugoslavia', 'Bosnia- Herzegovina', 'Croatia', 'Kosovo', 'Macedonia', 'Montenegro', 'Serbia', 'Slovenia', 'Eastern Europe', 'Belarus', 'Baltic States', 'Estonia', 'Kaliningrad', 'Latvia', 'Lithuania', 'Krym', 'Central European Russia', 'East European Russia', 'North European Russia', 'South European Russia', 'Northwest European Russia', 'Ukraine', 'Moldova', 'Ukraine', 'Africa', 'Northern Africa', 'Algeria', 'Egypt', 'Libya', 'Morocco', 'Morocco', 'Spanish North African Territories', 'Tunisia', 'Western Sahara', 'Macaronesia', 'Azores', 'Canary Is.', 'Cape Verde', 'Madeira', 'Selvagens', 'West Tropical Africa', 'Benin', 'Burkina', 'Gambia, The', 'Ghana', 'Guinea-Bissau', 'Guinea', 'Ivory Coast', 'Liberia', 'Mali', 'Mauritania', 'Nigeria', 'Niger', 'Senegal', 'Sierra Leone', 'Togo', 'West-Central Tropical Africa', 'Burundi', 'Cabinda', 'Central African Republic', 'Cameroon', 'Congo', 'Equatorial Guinea', 'Gabon', 'Gulf of Guinea Is.', 'Annobón', 'Bioko', 'Príncipe', 'São Tomé', 'Rwanda', 'Zaire', 'Northeast Tropical Africa', 'Chad', 'Djibouti', 'Eritrea', 'Ethiopia', 'Socotra', 'Somalia', 'Sudan', 'East Tropical Africa', 'Kenya', 'Tanzania', 'Uganda', 'South Tropical Africa', 'Angola', 'Malawi', 'Mozambique', 'Zambia', 'Zimbabwe', 'Southern Africa', 'Botswana', 'Cape Provinces', 'Eastern Cape Province', 'Northern Cape Province', 'Western Cape Province', 'Caprivi Strip', 'Lesotho', 'Namibia', 'KwaZulu-Natal', 'Free State', 'Swaziland', 'Northern Provinces', 'Gauteng', 'Mpumalanga', 'Northern Province', 'North-West Province', 'Middle Atlantic Ocean', 'Ascension', 'St.Helena', 'Western Indian Ocean', 'Aldabra', 'Chagos Archipelago', 'Comoros', 'Comoros', 'Mayotte', 'Mauritius', 'Mozambique Channel Is.', 'Madagascar', 'Réunion', 'Rodrigues', 'Seychelles', 'Asia-Temperate', 'Siberia', 'Altay', 'Buryatiya', 'Chita', 'Irkutsk', 'Krasnoyarsk', 'Tuva', 'West Siberia', 'Yakutskiya', 'Russian Far East', 'Amur', 'Kamchatka', 'Khabarovsk', 'Kuril Is.', 'Magadan', 'Primorye', 'Sakhalin', 'Middle Asia', 'Kazakhstan', 'Kirgizistan', 'Turkmenistan', 'Tadzhikistan', 'Uzbekistan', 'Caucasus', 'North Caucasus', 'Chechnya', 'Dagestan', 'Ingushetiya', 'Kabardino-Balkariya', 'Karacheyevo-Cherkessiya', 'Krasnodar', 'Severo-Osetiya', 'Stavropol', 'Transcaucasus', 'Abkhaziya', 'Adzhariya', 'Armenia', 'Azerbaijan', 'Gruziya', 'Nakhichevan', 'Nagorno Karabakh', 'Western Asia', 'Afghanistan', 'Cyprus', 'East Aegean Is.', 'Iran', 'Iraq', 'Lebanon-Syria', 'Lebanon', 'Syria', 'Palestine', 'Jordan', 'Israel', 'Sinai', 'Turkey', 'Arabian Peninsula', 'Gulf States', 'Bahrain', 'Qatar', 'United Arab Emirates', 'Kuwait', 'Oman', 'Saudi Arabia', 'Yemen', 'North Yemen', 'South Yemen', 'China', 'China South-Central', 'Chongqing', 'Guizhou', 'Hubei', 'Sichuan', 'Yunnan', 'Hainan', 'Inner Mongolia', 'Nei Mongol', 'Ningxia', 'Manchuria', 'Heilongjiang', 'Jilin', 'Liaoning', 'China North-Central', 'Beijing', 'Gansu', 'Hebei', 'Shaanxi', 'Shandong', 'Shanxi', 'Tianjin', 'Qinghai', 'China Southeast', 'Anhui', 'Fujian', 'Guangdong', 'Guangxi', 'Henan', 'Hong Kong', 'Hunan', 'Jiangsu', 'Jiangxi', 'Kin-Men', 'Macau', 'Ma-tsu-Pai-chuan', 'Shanghai', 'Zhejiang', 'Tibet', 'Xinjiang', 'Mongolia', 'Mongolia', 'Eastern Asia', 'Japan', 'Hokkaido', 'Honshu', 'Kyushu', 'Shikoku', 'Korea', 'North Korea', 'South Korea', 'Kazan-retto', 'Nansei-shoto', 'Ogasawara-shoto', 'Taiwan', 'Asia-Tropical', 'Indian Subcontinent', 'Assam', 'Assam', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Tripura', 'Bangladesh', 'East Himalaya', 'Arunachal Pradesh', 'Bhutan', 'Darjiling', 'Sikkim', 'India', 'Andhra Pradesh', 'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadra-Nagar-Haveli', 'Delhi', 'Diu', 'Daman', 'Goa', 'Gujarat', 'Haryana', 'Jharkhand', 'Kerala', 'Karaikal', 'Karnataka', 'Mahe', 'Madhya Pradesh', 'Maharashtra', 'Orissa', 'Pondicherry', 'Punjab', 'Rajasthan', 'Tamil Nadu', 'Uttar Pradesh', 'West Bengal', 'Yanam', 'Laccadive Is.', 'Maldives', 'Nepal', 'Pakistan', 'Sri Lanka', 'West Himalaya', 'Himachal Pradesh', 'Jammu-Kashmir', 'Uttaranchal', 'Indo-China', 'Andaman Is.', 'Andaman Is.', 'Coco Is.', 'Cambodia', 'Laos', 'Myanmar', 'Nicobar Is.', 'South China Sea', 'Paracel Is.', 'Spratly Is.', 'Thailand', 'Vietnam', 'Malesia', 'Borneo', 'Brunei', 'Kalimantan', 'Sabah', 'Sarawak', 'Cocos (Keeling) Is.', 'Jawa', 'Lesser Sunda Is.', 'Bali', 'East Timor', 'Lesser Sunda Is.', 'Malaya', 'Peninsular Malaysia', 'Singapore', 'Maluku', 'Philippines', 'Sulawesi', 'Sumatera', 'Christmas I.', 'Papuasia', 'Bismarck Archipelago', 'New Guinea', 'Papua New Guinea', 'Irian Jaya', 'Solomon Is.', 'North Solomons', 'South Solomons', 'Australasia', 'Australia', 'Norfolk Is.', 'Lord Howe I.', 'Norfolk I.', 'New South Wales', 'Australian Capital Territory', 'New South Wales', 'Northern Territory', 'Queensland', 'Coral Sea Is. Territory', 'Queensland', 'South Australia', 'Tasmania', 'Victoria', 'Western Australia', 'Ashmore-Cartier Is.', 'Western Australia', 'New Zealand', 'Antipodean Is.', 'Chatham Is.', 'Kermadec Is.', 'New Zealand North', 'New Zealand South', 'Pacific', 'Southwestern Pacific', 'Fiji', 'Gilbert Is.', 'Howland-Baker Is.', 'Nauru', 'Niue', 'New Caledonia', 'Phoenix Is.', 'Samoa', 'American Samoa', 'Samoa', 'Santa Cruz Is.', 'Tokelau-Manihiki', 'Manihiki Is.', 'Swains I.', 'Tokelau', 'Tonga', 'Tuvalu', 'Vanuatu', 'Wallis-Futuna Is.', 'South-Central Pacific', 'Cook Is.', 'Easter Is.', 'Line Is.', 'Kiribati Line Is.', 'U.S. Line Is.', 'Marquesas', 'Pitcairn Is.', 'Society Is.', 'Tuamotu', 'Tubuai Is.', 'Northwestern Pacific', 'Caroline Is.', 'Micronesia Federated States', 'Palau', 'Marcus I.', 'Marianas', 'Guam', 'Northern Marianas', 'Marshall Is.', 'Wake I.', 'North-Central Pacific', 'Hawaii', 'Hawaiian Is.', 'Johnston I.', 'Midway Is.', 'Northern America', 'Subarctic America', 'Aleutian Is.', 'Alaska', 'Greenland', 'Nunavut', 'Northwest Territories', 'Yukon', 'Western Canada', 'Alberta', 'British Columbia', 'Manitoba', 'Saskatchewan', 'Eastern Canada', 'Labrador', 'New Brunswick', 'Newfoundland', 'Newfoundland', 'St. Pierre-Miquelon', 'Nova Scotia', 'Ontario', 'Prince Edward I.', 'Québec', 'Northwestern U.S.A.', 'Colorado', 'Idaho', 'Montana', 'Oregon', 'Washington', 'Wyoming', 'North-Central U.S.A.', 'Illinois', 'Iowa', 'Kansas', 'Minnesota', 'Missouri', 'North Dakota', 'Nebraska', 'Oklahoma', 'South Dakota', 'Wisconsin', 'Northeastern U.S.A.', 'Connecticut', 'Indiana', 'Maine', 'Massachusetts', 'Michigan', 'New Hampshire', 'New Jersey', 'New York', 'Ohio', 'Pennsylvania', 'Rhode I.', 'Vermont', 'West Virginia', 'Southwestern U.S.A.', 'Arizona', 'California', 'Nevada', 'Utah', 'South-Central U.S.A.', 'New Mexico', 'Texas', 'Southeastern U.S.A.', 'Alabama', 'Arkansas', 'Delaware', 'Florida', 'Georgia', 'Kentucky', 'Louisiana', 'Maryland', 'Mississippi', 'North Carolina', 'South Carolina', 'Tennessee', 'Virginia', 'District of Columbia', 'Mexico', 'Mexico Central', 'Mexico Distrito Federal', 'Mexico State', 'Morelos', 'Puebla', 'Tlaxcala', 'Mexico Northeast', 'Aguascalientes', 'Coahuila', 'Chihuahua', 'Durango', 'Guanajuato', 'Hidalgo', 'Nuevo León', 'Querétaro', 'San Luis Potosí', 'Tamaulipas', 'Zacatecas', 'Mexico Gulf', 'Veracruz', 'Mexican Pacific Is.', 'Guadalupe I.', 'Rocas Alijos', 'Revillagigedo Is.', 'Mexico Northwest', 'Baja California', 'Baja California Sur', 'Sinaloa', 'Sonora', 'Mexico Southwest', 'Colima', 'Guerrero', 'Jalisco', 'Michoacan', 'Nayarit', 'Oaxaca', 'Mexico Southeast', 'Campeche', 'Chiapas', 'Quintana Roo', 'Tabasco', 'Yucatán', 'Southern America', 'Central America', 'Belize', 'Costa Rica', 'Central American Pacific Is.', 'Clipperton I.', 'Cocos I.', 'Malpelo I.', 'El Salvador', 'Guatemala', 'Honduras', 'Nicaragua', 'Panama', 'Caribbean', 'Aruba', 'Bahamas', 'Bermuda', 'Cayman Is.', 'Cuba', 'Dominican Republic', 'Haiti', 'Haiti', 'Navassa I.', 'Jamaica', 'Leeward Is.', 'Antigua-Barbuda', 'Anguilla', 'Aves I.', 'British Virgin Is.', 'Guadeloupe', 'Montserrat', 'Netherlands Leeward Is.', 'St. Kitts-Nevis', 'St. Martin-St. Barthelemy', 'Virgin Is.', 'Netherlands Antilles', 'Bonaire', 'Curaçao', 'Puerto Rico', 'Southwest Caribbean', 'Colombian Caribbean Is.', 'Honduran Caribbean Is.', 'Nicaraguan Caribbean Is.', 'Turks-Caicos Is.', 'Trinidad-Tobago', 'Venezuelan Antilles', 'Windward Is.', 'Barbados', 'Dominica', 'Grenada', 'Martinique', 'St. Lucia', 'St. Vincent', 'Northern South America', 'French Guiana', 'Guyana', 'Suriname', 'Venezuela', 'Western South America', 'Bolivia', 'Colombia', 'Ecuador', 'Galápagos', 'Peru', 'Brazil', 'Brazil West-Central', 'Brasilia Distrito Federal', 'Goias', 'Mato Grosso do Sul', 'Mato Grosso', 'Brazil Northeast', 'Alagoas', 'Bahia', 'Ceara', 'Fernando de Noronha', 'Maranhao', 'Paraiba', 'Pernambuco', 'Piaui', 'Rio Grande do Norte', 'Sergipe', 'Brazil Southeast', 'Espirito Santo', 'Minas Gerais', 'Rio de Janeiro', 'Sao Paulo', 'Trindade', 'Brazil North', 'Acre', 'Amazonas', 'Amapa', 'Para', 'Roraima', 'Rondonia', 'Tocantins', 'Brazil South', 'Parana', 'Rio Grande do Sul', 'Santa Catarina', 'Southern South America', 'Argentina Northeast', 'Buenos Aires', 'Cordoba', 'Chaco', 'Corrientes', 'Argentina Distrito Federal', 'Entre Rios', 'Formosa', 'La Pampa', 'Misiones', 'Santa Fe', 'Argentina South', 'Chubut', 'Neuquen', 'Rio Negro', 'Santa Cruz', 'Tierra del Fuego (Argentina)', 'Argentina Northwest', 'Catamarca', 'Jujuy', 'La Rioja', 'Mendoza', 'Salta', 'Santiago del Estero', 'San Juan', 'San Luis', 'Tucuman', 'Chile Central', 'Biobio', 'Coquimbo', 'La Araucania', 'Maule', "O'Higgins", 'Santiago', 'Valparaiso', 'Chile North', 'Antofagasta', 'Atacama', 'Tarapaca', 'Chile South', 'Aisen', 'Los Lagos', 'Magellanes', 'Desventurados Is.', 'Juan Fernández Is.', 'Paraguay', 'Uruguay', 'Antarctic', 'Subantarctic Islands', 'Amsterdam-St.Paul Is.', 'Bouvet I.', 'Crozet Is.', 'Falkland Is.', 'Heard-McDonald Is.', 'Kerguelen', 'Macquarie Is.', 'Marion-Prince Edward Is.', 'South Georgia', 'South Sandwich Is.', 'Tristan da Cunha', 'Antarctic Continent', 'Antarctica']


function levenshtein(s, t) {
    if (s === t) {
        return 0;
    }
    var n = s.length,
        m = t.length;
    if (n === 0 || m === 0) {
        return n + m;
    }
    var x = 0,
        y, a, b, c, d, g, h, k;
    var p = new Array(n);
    for (y = 0; y < n;) {
        p[y] = ++y;
    }

    for (;
        (x + 3) < m; x += 4) {
        var e1 = t.charCodeAt(x);
        var e2 = t.charCodeAt(x + 1);
        var e3 = t.charCodeAt(x + 2);
        var e4 = t.charCodeAt(x + 3);
        c = x;
        b = x + 1;
        d = x + 2;
        g = x + 3;
        h = x + 4;
        for (y = 0; y < n; y++) {
            k = s.charCodeAt(y);
            a = p[y];
            if (a < c || b < c) {
                c = (a > b ? b + 1 : a + 1);
            } else {
                if (e1 !== k) {
                    c++;
                }
            }

            if (c < b || d < b) {
                b = (c > d ? d + 1 : c + 1);
            } else {
                if (e2 !== k) {
                    b++;
                }
            }

            if (b < d || g < d) {
                d = (b > g ? g + 1 : b + 1);
            } else {
                if (e3 !== k) {
                    d++;
                }
            }

            if (d < g || h < g) {
                g = (d > h ? h + 1 : d + 1);
            } else {
                if (e4 !== k) {
                    g++;
                }
            }
            p[y] = h = g;
            g = d;
            d = b;
            b = c;
            c = a;
        }
    }

    for (; x < m;) {
        var e = t.charCodeAt(x);
        c = x;
        d = ++x;
        for (y = 0; y < n; y++) {
            a = p[y];
            if (a < c || d < c) {
                d = (a > d ? d + 1 : a + 1);
            } else {
                if (e !== s.charCodeAt(y)) {
                    d = c + 1;
                } else {
                    d = c;
                }
            }
            p[y] = d;
            c = a;
        }
        h = d;
    }

    return h;
}


function update_suggestion(event, el) {
    if (el.value != prev_val) {
        prev_val = el.value;
        drop = document.getElementById("topic");
        drop.size = 0;
        val = 0
        drop.removeAttribute("hidden");

        list = []
        count = 0
        countries.forEach(element => {
            _ = Object()
            _["id"] = count
            count += 1
            _["country-name"] = element
            _["similarity"] = levenshtein(el.value, element)
            list.push(_)
        });

        list.sort(function(a, b) {
            return ((a.similarity < b.similarity) ? -1 : ((a.similarity == b.similarity) ? 0 : 1));
        });

        drop.length = 5;

        for (i = 0; i < 5; i++) {
            drop.options[i] = new Option(list[i]["country-name"], list[i]["country-name"]);
        }



        drop.size = drop.length;
        drop.selectedIndex = 0;

    } else if (event.keyCode == 38) {
        drop = document.getElementById("topic");
        val = val - 1 > -1 ? val - 1 : drop.length - 1
        drop.selectedIndex = val;
    } else if (event.keyCode == 40) {
        drop = document.getElementById("topic");
        val = val + 1 < drop.length ? val + 1 : 0
        drop.selectedIndex = val;
    } else if (event.keyCode == 13) {
        confirm_choice();
    }

}


function getJSONP(url, success) {

    var ud = '_' + +new Date,
        script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0] ||
        document.documentElement;

    window[ud] = function(data) {
        head.removeChild(script);
        success && success(data);
    };

    script.src = url.replace('callback=?', 'callback=' + ud);
    head.appendChild(script);

}




function confirm_choice(event) {
    drop = document.getElementById('topic');
    country = (list[drop.selectedIndex]);
    console.log(country);
    if (document.getElementById("result") == null) {
        s = document.createElement("spam")
        s.innerHTML = "here's the result for " + country['country-name'] + "!"
        s.id = "result"
        document.getElementsByClassName("body-container")[0].appendChild(s)
    } else {
        s = document.getElementById("result")
        s.innerHTML = "here's the result for " + country['country-name'] + "!"
        s.id = "result"
    }


    fetch('./jsons/' + country['id'] + '.json')
        .then(response => response.text())
        .then(text => {
            l = [];
            text.split(`'common_name': '`).forEach(t => {
                name = (t.substring(0, t.indexOf(`'`)));
                if (l.includes(name)) {

                } else {
                    l.push(name);
                }
            })
            l.shift();
            console.log(l);
            m = [];
            text.split(`'scientific_name': '`).forEach(t => {
                name = (t.substring(0, t.indexOf(`'`)));
                if (m.includes(name)) {

                } else {
                    m.push(name);
                }
            })
            m.shift();
            console.log(m);
            n = [];
            text.split(`'image_url': '`).forEach(t => {
                name = (t.substring(0, t.indexOf(`'`)));
                if (n.includes(name)) {

                } else {
                    n.push(name);
                }
            })
            n.shift();
            console.log(n);


            delete_list = document.getElementsByClassName("query_result")
            for (a = 0; a < delete_list.length; a++) {
                delete_list[a].remove()
            }
            for (a = 0; a < l.length; a++) {
                s = document.createElement("div")
                s.classList.add("query_result");
                s.style = "background-color:#bef9ea"

                ss = document.createElement("img")
                ss.src = n[a]
                ss.classList.add("query-image");
                s.append(ss)


                ss = document.createElement("br")
                s.append(ss)

                ss = document.createElement("h")
                ss.innerHTML = "common name:" + l[a]
                s.append(ss)

                ss = document.createElement("br")
                s.append(ss)

                ss = document.createElement("p")
                ss.innerHTML = "scientific name:" + m[a]
                s.append(ss)



                document.getElementsByClassName("body-container")[0].appendChild(s)
            }

        })
        // outputs the content of the text file





}