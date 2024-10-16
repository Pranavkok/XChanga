document.getElementById('get-info-btn').addEventListener('click', async function() {
    const countryInput = document.getElementById('country').value.trim().toUpperCase();
    const apiKey = '490fafffa6aed2045e186539';
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

    try {
    const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('Server Down');
        }

    const data = await response.json();

        const currencies = {
            'AFGHANISTAN': { name: 'Afghan Afghani', country: 'Afghanistan', symbol: 'AFN', rate: data.conversion_rates['AFN'] },
            'ALBANIA': { name: 'Albanian Lek', country: 'Albania', symbol: 'ALL', rate: data.conversion_rates['ALL'] },
            'ALGERIA': { name: 'Algerian Dinar', country: 'Algeria', symbol: 'DZD', rate: data.conversion_rates['DZD'] },
            'ANDORRA': { name: 'Euro', country: 'Andorra', symbol: 'EUR', rate: data.conversion_rates['EUR'] },
            'ANGOLA': { name: 'Angolan Kwanza', country: 'Angola', symbol: 'AOA', rate: data.conversion_rates['AOA'] },
            'ARGENTINA': { name: 'Argentine Peso', country: 'Argentina', symbol: 'ARS', rate: data.conversion_rates['ARS'] },
            'ARMENIA': { name: 'Armenian Dram', country: 'Armenia', symbol: 'AMD', rate: data.conversion_rates['AMD'] },
            'AUSTRALIA': { name: 'Australian Dollar', country: 'Australia', symbol: 'AUD', rate: data.conversion_rates['AUD'] },
            'AUSTRIA': { name: 'Euro', country: 'Austria', symbol: 'EUR', rate: data.conversion_rates['EUR'] },
            'AZERBAIJAN': { name: 'Azerbaijani Manat', country: 'Azerbaijan', symbol: 'AZN', rate: data.conversion_rates['AZN'] },
            'BAHRAIN': { name: 'Bahraini Dinar', country: 'Bahrain', symbol: 'BHD', rate: data.conversion_rates['BHD'] },
            'BANGLADESH': { name: 'Bangladeshi Taka', country: 'Bangladesh', symbol: 'BDT', rate: data.conversion_rates['BDT'] },
            'BARBADOS': { name: 'Barbadian Dollar', country: 'Barbados', symbol: 'BBD', rate: data.conversion_rates['BBD'] },
            'BELARUS': { name: 'Belarusian Ruble', country: 'Belarus', symbol: 'BYN', rate: data.conversion_rates['BYN'] },
            'BELGIUM': { name: 'Euro', country: 'Belgium', symbol: 'EUR', rate: data.conversion_rates['EUR'] },
            'BELIZE': { name: 'Belize Dollar', country: 'Belize', symbol: 'BZD', rate: data.conversion_rates['BZD'] },
            'BENIN': { name: 'West African CFA Franc', country: 'Benin', symbol: 'XOF', rate: data.conversion_rates['XOF'] },
            'BHUTAN': { name: 'Bhutanese Ngultrum', country: 'Bhutan', symbol: 'BTN', rate: data.conversion_rates['BTN'] },
            'BOLIVIA': { name: 'Bolivian Boliviano', country: 'Bolivia', symbol: 'BOB', rate: data.conversion_rates['BOB'] },
            'BOSNIA AND HERZEGOVINA': { name: 'Bosnia-Herzegovina Convertible Mark', country: 'Bosnia and Herzegovina', symbol: 'BAM', rate: data.conversion_rates['BAM'] },
            'BRAZIL': { name: 'Brazilian Real', country: 'Brazil', symbol: 'BRL', rate: data.conversion_rates['BRL'] },
            'BRUNEI': { name: 'Brunei Dollar', country: 'Brunei', symbol: 'BND', rate: data.conversion_rates['BND'] },
            'BULGARIA': { name: 'Bulgarian Lev', country: 'Bulgaria', symbol: 'BGN', rate: data.conversion_rates['BGN'] },
            'BURKINA FASO': { name: 'West African CFA Franc', country: 'Burkina Faso', symbol: 'XOF', rate: data.conversion_rates['XOF'] },
            'BURUNDI': { name: 'Burundian Franc', country: 'Burundi', symbol: 'BIF', rate: data.conversion_rates['BIF'] },
            'CABBAGE': { name: 'Cape Verdean Escudo', country: 'Cape Verde', symbol: 'CVE', rate: data.conversion_rates['CVE'] },
            'CAMBODIA': { name: 'Cambodian Riel', country: 'Cambodia', symbol: 'KHR', rate: data.conversion_rates['KHR'] },
            'CANADA': { name: 'Canadian Dollar', country: 'Canada', symbol: 'CAD', rate: data.conversion_rates['CAD'] },
            'CENTRAL AFRICAN REPUBLIC': { name: 'Central African CFA Franc', country: 'Central African Republic', symbol: 'XAF', rate: data.conversion_rates['XAF'] },
            'CHAD': { name: 'Chadian Franc', country: 'Chad', symbol: 'XAF', rate: data.conversion_rates['XAF'] },
            'CHILE': { name: 'Chilean Peso', country: 'Chile', symbol: 'CLP', rate: data.conversion_rates['CLP'] },
            'CHINA': { name: 'Chinese Yuan', country: 'China', symbol: 'CNY', rate: data.conversion_rates['CNY'] },
            'COLOMBIA': { name: 'Colombian Peso', country: 'Colombia', symbol: 'COP', rate: data.conversion_rates['COP'] },
            'COMOROS': { name: 'Comorian Franc', country: 'Comoros', symbol: 'KMF', rate: data.conversion_rates['KMF'] },
            'CONGO': { name: 'Congolese Franc', country: 'Congo', symbol: 'CDF', rate: data.conversion_rates['CDF'] },
            'COSTA RICA': { name: 'Costa Rican Colón', country: 'Costa Rica', symbol: 'CRC', rate: data.conversion_rates['CRC'] },
            'CROATIA': { name: 'Croatian Kuna', country: 'Croatia', symbol: 'HRK', rate: data.conversion_rates['HRK'] },
            'CUBA': { name: 'Cuban Peso', country: 'Cuba', symbol: 'CUP', rate: data.conversion_rates['CUP'] },
            'CYPRUS': { name: 'Euro', country: 'Cyprus', symbol: 'EUR', rate: data.conversion_rates['EUR'] },
            'CZECH REPUBLIC': { name: 'Czech Koruna', country: 'Czech Republic', symbol: 'CZK', rate: data.conversion_rates['CZK'] },
            'DENMARK': { name: 'Danish Krone', country: 'Denmark', symbol: 'DKK', rate: data.conversion_rates['DKK'] },
            'DJIBOUTI': { name: 'Djiboutian Franc', country: 'Djibouti', symbol: 'DJF', rate: data.conversion_rates['DJF'] },
            'DOMINICA': { name: 'East Caribbean Dollar', country: 'Dominica', symbol: 'XCD', rate: data.conversion_rates['XCD'] },
            'DOMINICAN REPUBLIC': { name: 'Dominican Peso', country: 'Dominican Republic', symbol: 'DOP', rate: data.conversion_rates['DOP'] },
            'ECUADOR': { name: 'United States Dollar', country: 'Ecuador', symbol: 'USD', rate: data.conversion_rates['USD'] },
            'EGYPT': { name: 'Egyptian Pound', country: 'Egypt', symbol: 'EGP', rate: data.conversion_rates['EGP'] },
            'EL SALVADOR': { name: 'United States Dollar', country: 'El Salvador', symbol: 'USD', rate: data.conversion_rates['USD'] },
            'EQUATORIAL GUINEA': { name: 'Central African CFA Franc', country: 'Equatorial Guinea', symbol: 'XAF', rate: data.conversion_rates['XAF'] },
            'ERITREA': { name: 'Eritrean Nakfa', country: 'Eritrea', symbol: 'ERN', rate: data.conversion_rates['ERN'] },
            'ESTONIA': { name: 'Euro', country: 'Estonia', symbol: 'EUR', rate: data.conversion_rates['EUR'] },
            'ESWATINI': { name: 'Swazi Lilangeni', country: 'Eswatini', symbol: 'SZL', rate: data.conversion_rates['SZL'] },
            'ETHIOPIA': { name: 'Ethiopian Birr', country: 'Ethiopia', symbol: 'ETB', rate: data.conversion_rates['ETB'] },
            'Fiji': { name: 'Fijian Dollar', country: 'Fiji', symbol: 'FJD', rate: data.conversion_rates['FJD'] },
            'FINLAND': { name: 'Euro', country: 'Finland', symbol: 'EUR', rate: data.conversion_rates['EUR'] },
            'FRANCE': { name: 'Euro', country: 'France', symbol: 'EUR', rate: data.conversion_rates['EUR'] },
            'GABON': { name: 'Central African CFA Franc', country: 'Gabon', symbol: 'XAF', rate: data.conversion_rates['XAF'] },
            'GAMBIA': { name: 'Gambian Dalasi', country: 'Gambia', symbol: 'GMD', rate: data.conversion_rates['GMD'] },
            'GEORGIA': { name: 'Georgian Lari', country: 'Georgia', symbol: 'GEL', rate: data.conversion_rates['GEL'] },
            'GERMANY': { name: 'Euro', country: 'Germany', symbol: 'EUR', rate: data.conversion_rates['EUR'] },
            'GHANA': { name: 'Ghanaian Cedi', country: 'Ghana', symbol: 'GHS', rate: data.conversion_rates['GHS'] },
            'GREECE': { name: 'Euro', country: 'Greece', symbol: 'EUR', rate: data.conversion_rates['EUR'] },
            'GRENADA': { name: 'East Caribbean Dollar', country: 'Grenada', symbol: 'XCD', rate: data.conversion_rates['XCD'] },
            'GUATEMALA': { name: 'Guatemalan Quetzal', country: 'Guatemala', symbol: 'GTQ', rate: data.conversion_rates['GTQ'] },
            'GUINEA': { name: 'Guinean Franc', country: 'Guinea', symbol: 'GNF', rate: data.conversion_rates['GNF'] },
            'GUINEA-BISSAU': { name: 'West African CFA Franc', country: 'Guinea-Bissau', symbol: 'XOF', rate: data.conversion_rates['XOF'] },
            'HAITI': { name: 'Haitian Gourde', country: 'Haiti', symbol: 'HTG', rate: data.conversion_rates['HTG'] },
            'HONDURAS': { name: 'Honduran Lempira', country: 'Honduras', symbol: 'HNL', rate: data.conversion_rates['HNL'] },
            'HUNGARY': { name: 'Hungarian Forint', country: 'Hungary', symbol: 'HUF', rate: data.conversion_rates['HUF'] },
            'ICELAND': { name: 'Icelandic Króna', country: 'Iceland', symbol: 'ISK', rate: data.conversion_rates['ISK'] },
            'INDIA': { name: 'Indian Rupee', country: 'India', symbol: 'INR', rate: data.conversion_rates['INR'] },
            'INDONESIA': { name: 'Indonesian Rupiah', country: 'Indonesia', symbol: 'IDR', rate: data.conversion_rates['IDR'] },
            'IRAN': { name: 'Iranian Rial', country: 'Iran', symbol: 'IRR', rate: data.conversion_rates['IRR'] },
            'IRAQ': { name: 'Iraqi Dinar', country: 'Iraq', symbol: 'IQD', rate: data.conversion_rates['IQD'] },
            'IRELAND': { name: 'Euro', country: 'Ireland', symbol: 'EUR', rate: data.conversion_rates['EUR'] },
            'ISRAEL': { name: 'Israeli New Shekel', country: 'Israel', symbol: 'ILS', rate: data.conversion_rates['ILS'] },
            'ITALY': { name: 'Euro', country: 'Italy', symbol: 'EUR', rate: data.conversion_rates['EUR'] },
            'JAMAICA': { name: 'Jamaican Dollar', country: 'Jamaica', symbol: 'JMD', rate: data.conversion_rates['JMD'] },
            'JAPAN': { name: 'Japanese Yen', country: 'Japan', symbol: 'JPY', rate: data.conversion_rates['JPY'] },
            'JORDAN': { name: 'Jordanian Dinar', country: 'Jordan', symbol: 'JOD', rate: data.conversion_rates['JOD'] },
            'KAZAKHSTAN': { name: 'Kazakhstani Tenge', country: 'Kazakhstan', symbol: 'KZT', rate: data.conversion_rates['KZT'] },
            'KENYA': { name: 'Kenyan Shilling', country: 'Kenya', symbol: 'KES', rate: data.conversion_rates['KES'] },
            'KIRIBATI': { name: 'Australian Dollar', country: 'Kiribati', symbol: 'AUD', rate: data.conversion_rates['AUD'] },
            'KOREA NORTH': { name: 'North Korean Won', country: 'North Korea', symbol: 'KPW', rate: data.conversion_rates['KPW'] },
            'KOREA SOUTH': { name: 'South Korean Won', country: 'South Korea', symbol: 'KRW', rate: data.conversion_rates['KRW'] },
            'KOSOVO': { name: 'Euro', country: 'Kosovo', symbol: 'EUR', rate: data.conversion_rates['EUR'] },
            'Kuwait': { name: 'Kuwaiti Dinar', country: 'Kuwait', symbol: 'KWD', rate: data.conversion_rates['KWD'] },
            'LATVIA': { name: 'Euro', country: 'Latvia', symbol: 'EUR', rate: data.conversion_rates['EUR'] },
            'LEBANON': { name: 'Lebanese Pound', country: 'Lebanon', symbol: 'LBP', rate: data.conversion_rates['LBP'] },
            'LESOTHO': { name: 'Lesotho Loti', country: 'Lesotho', symbol: 'LSL', rate: data.conversion_rates['LSL'] },
            'LIBERIA': { name: 'Liberian Dollar', country: 'Liberia', symbol: 'LRD', rate: data.conversion_rates['LRD'] },
            'LIBYA': { name: 'Libyan Dinar', country: 'Libya', symbol: 'LYD', rate: data.conversion_rates['LYD'] },
            'LITHUANIA': { name: 'Euro', country: 'Lithuania', symbol: 'EUR', rate: data.conversion_rates['EUR'] },
            'LUXEMBOURG': { name: 'Euro', country: 'Luxembourg', symbol: 'EUR', rate: data.conversion_rates['EUR'] },
            'MADAGASCAR': { name: 'Malagasy Ariary', country: 'Madagascar', symbol: 'MGA', rate: data.conversion_rates['MGA'] },
            'MALAWI': { name: 'Malawian Kwacha', country: 'Malawi', symbol: 'MWK', rate: data.conversion_rates['MWK'] },
            'MALAYSIA': { name: 'Malaysian Ringgit', country: 'Malaysia', symbol: 'MYR', rate: data.conversion_rates['MYR'] },
            'MALTA': { name: 'Euro', country: 'Malta', symbol: 'EUR', rate: data.conversion_rates['EUR'] },
            'MAROCCO': { name: 'Moroccan Dirham', country: 'Morocco', symbol: 'MAD', rate: data.conversion_rates['MAD'] },
            'MAURITIUS': { name: 'Mauritian Rupee', country: 'Mauritius', symbol: 'MUR', rate: data.conversion_rates['MUR'] },
            'MEXICO': { name: 'Mexican Peso', country: 'Mexico', symbol: 'MXN', rate: data.conversion_rates['MXN'] },
            'MOLDOVA': { name: 'Moldovan Leu', country: 'Moldova', symbol: 'MDL', rate: data.conversion_rates['MDL'] },
            'MONACO': { name: 'Euro', country: 'Monaco', symbol: 'EUR', rate: data.conversion_rates['EUR'] },
            'MONGOLIA': { name: 'Mongolian Tögrög', country: 'Mongolia', symbol: 'MNT', rate: data.conversion_rates['MNT'] },
            'MONTENEGRO': { name: 'Euro', country: 'Montenegro', symbol: 'EUR', rate: data.conversion_rates['EUR'] },
            'MOROCCO': { name: 'Moroccan Dirham', country: 'Morocco', symbol: 'MAD', rate: data.conversion_rates['MAD'] },
            'MYANMAR': { name: 'Myanmar Kyat', country: 'Myanmar', symbol: 'MMK', rate: data.conversion_rates['MMK'] },
            'NAMIBIA': { name: 'Namibian Dollar', country: 'Namibia', symbol: 'NAD', rate: data.conversion_rates['NAD'] },
            'NEPAL': { name: 'Nepalese Rupee', country: 'Nepal', symbol: 'NPR', rate: data.conversion_rates['NPR'] },
            'NETHERLANDS': { name: 'Euro', country: 'Netherlands', symbol: 'EUR', rate: data.conversion_rates['EUR'] },
            'NEW ZEALAND': { name: 'New Zealand Dollar', country: 'New Zealand', symbol: 'NZD', rate: data.conversion_rates['NZD'] },
            'NICARAGUA': { name: 'Nicaraguan Córdoba', country: 'Nicaragua', symbol: 'NIO', rate: data.conversion_rates['NIO'] },
            'NIGER': { name: 'West African CFA Franc', country: 'Niger', symbol: 'XOF', rate: data.conversion_rates['XOF'] },
            'NIGERIA': { name: 'Nigerian Naira', country: 'Nigeria', symbol: 'NGN', rate: data.conversion_rates['NGN'] },
            'NORTH MACEDONIA': { name: 'Macedonian Denar', country: 'North Macedonia', symbol: 'MKD', rate: data.conversion_rates['MKD'] },
            'NORWAY': { name: 'Norwegian Krone', country: 'Norway', symbol: 'NOK', rate: data.conversion_rates['NOK'] },
            'OMAN': { name: 'Omani Rial', country: 'Oman', symbol: 'OMR', rate: data.conversion_rates['OMR'] },
            'PAKISTAN': { name: 'Pakistani Rupee', country: 'Pakistan', symbol: 'PKR', rate: data.conversion_rates['PKR'] },
            'PANAMA': { name: 'Balboa', country: 'Panama', symbol: 'PAB', rate: data.conversion_rates['PAB'] },
            'PARAGUAY': { name: 'Paraguayan Guarani', country: 'Paraguay', symbol: 'PYG', rate: data.conversion_rates['PYG'] },
            'PERU': { name: 'Peruvian Sol', country: 'Peru', symbol: 'PEN', rate: data.conversion_rates['PEN'] },
            'PHILIPPINES': { name: 'Philippine Peso', country: 'Philippines', symbol: 'PHP', rate: data.conversion_rates['PHP'] },
            'POLAND': { name: 'Polish Zloty', country: 'Poland', symbol: 'PLN', rate: data.conversion_rates['PLN'] },
            'PORTUGAL': { name: 'Euro', country: 'Portugal', symbol: 'EUR', rate: data.conversion_rates['EUR'] },
            'QATAR': { name: 'Qatari Rial', country: 'Qatar', symbol: 'QAR', rate: data.conversion_rates['QAR'] },
            'ROMANIA': { name: 'Romanian Leu', country: 'Romania', symbol: 'RON', rate: data.conversion_rates['RON'] },
            'RUSSIA': { name: 'Russian Ruble', country: 'Russia', symbol: 'RUB', rate: data.conversion_rates['RUB'] },
            'RWANDA': { name: 'Rwandan Franc', country: 'Rwanda', symbol: 'RWF', rate: data.conversion_rates['RWF'] },
            'SAUDI ARABIA': { name: 'Saudi Riyal', country: 'Saudi Arabia', symbol: 'SAR', rate: data.conversion_rates['SAR'] },
            'SENEGAL': { name: 'West African CFA Franc', country: 'Senegal', symbol: 'XOF', rate: data.conversion_rates['XOF'] },
            'SERBIA': { name: 'Serbian Dinar', country: 'Serbia', symbol: 'RSD', rate: data.conversion_rates['RSD'] },
            'SINGAPORE': { name: 'Singapore Dollar', country: 'Singapore', symbol: 'SGD', rate: data.conversion_rates['SGD'] },
            'SLOVAKIA': { name: 'Euro', country: 'Slovakia', symbol: 'EUR', rate: data.conversion_rates['EUR'] },
            'SLOVENIA': { name: 'Euro', country: 'Slovenia', symbol: 'EUR', rate: data.conversion_rates['EUR'] },
            'SOMALIA': { name: 'Somali Shilling', country: 'Somalia', symbol: 'SOS', rate: data.conversion_rates['SOS'] },
            'SOUTH AFRICA': { name: 'South African Rand', country: 'South Africa', symbol: 'ZAR', rate: data.conversion_rates['ZAR'] },
            'SOUTH SUDAN': { name: 'South Sudanese Pound', country: 'South Sudan', symbol: 'SSP', rate: data.conversion_rates['SSP'] },
            'SPAIN': { name: 'Euro', country: 'Spain', symbol: 'EUR', rate: data.conversion_rates['EUR'] },
            'SRI LANKA': { name: 'Sri Lankan Rupee', country: 'Sri Lanka', symbol: 'LKR', rate: data.conversion_rates['LKR'] },
            'SUDAN': { name: 'Sudanese Pound', country: 'Sudan', symbol: 'SDG', rate: data.conversion_rates['SDG'] },
            'SWEDEN': { name: 'Swedish Krona', country: 'Sweden', symbol: 'SEK', rate: data.conversion_rates['SEK'] },
            'SWITZERLAND': { name: 'Swiss Franc', country: 'Switzerland', symbol: 'CHF', rate: data.conversion_rates['CHF'] },
            'SYRIA': { name: 'Syrian Pound', country: 'Syria', symbol: 'SYP', rate: data.conversion_rates['SYP'] },
            'TAIWAN': { name: 'New Taiwan Dollar', country: 'Taiwan', symbol: 'TWD', rate: data.conversion_rates['TWD'] },
            'TAJIKISTAN': { name: 'Tajikistani Somoni', country: 'Tajikistan', symbol: 'TJS', rate: data.conversion_rates['TJS'] },
            'TANZANIA': { name: 'Tanzanian Shilling', country: 'Tanzania', symbol: 'TZS', rate: data.conversion_rates['TZS'] },
            'THAILAND': { name: 'Thai Baht', country: 'Thailand', symbol: 'THB', rate: data.conversion_rates['THB'] },
            'TOGO': { name: 'West African CFA Franc', country: 'Togo', symbol: 'XOF', rate: data.conversion_rates['XOF'] },
            'TUNISIA': { name: 'Tunisian Dinar', country: 'Tunisia', symbol: 'TND', rate: data.conversion_rates['TND'] },
            'TURKMENISTAN': { name: 'Turkmenistani Manat', country: 'Turkmenistan', symbol: 'TMT', rate: data.conversion_rates['TMT'] },
            'TURKEY': { name: 'Turkish Lira', country: 'Turkey', symbol: 'TRY', rate: data.conversion_rates['TRY'] },
            'UGANDA': { name: 'Ugandan Shilling', country: 'Uganda', symbol: 'UGX', rate: data.conversion_rates['UGX'] },
            'UKRAINE': { name: 'Ukrainian Hryvnia', country: 'Ukraine', symbol: 'UAH', rate: data.conversion_rates['UAH'] },
            'UNITED ARAB EMIRATES': { name: 'United Arab Emirates Dirham', country: 'United Arab Emirates', symbol: 'AED', rate: data.conversion_rates['AED'] },
            'UNITED KINGDOM': { name: 'Pound Sterling', country: 'United Kingdom', symbol: 'GBP', rate: data.conversion_rates['GBP'] },
            'UNITED STATES': { name: 'United States Dollar', country: 'United States', symbol: 'USD', rate: data.conversion_rates['USD'] },
            'URUGUAY': { name: 'Uruguayan Peso', country: 'Uruguay', symbol: 'UYU', rate: data.conversion_rates['UYU'] },
            'UZBEKISTAN': { name: 'Uzbekistani Som', country: 'Uzbekistan', symbol: 'UZS', rate: data.conversion_rates['UZS'] },
            'VENEZUELA': { name: 'Venezuelan Bolívar', country: 'Venezuela', symbol: 'VES', rate: data.conversion_rates['VES'] },
            'VIETNAM': { name: 'Vietnamese Dong', country: 'Vietnam', symbol: 'VND', rate: data.conversion_rates['VND'] },
            'YEMEN': { name: 'Yemeni Rial', country: 'Yemen', symbol: 'YER', rate: data.conversion_rates['YER'] },
            'ZAMBIA': { name: 'Zambian Kwacha', country: 'Zambia', symbol: 'ZMW', rate: data.conversion_rates['ZMW'] },
            'ZIMBABWE': { name: 'Zimbabwean Dollar', country: 'Zimbabwe', symbol: 'ZWL', rate: data.conversion_rates['ZWL'] }
        };

        if (!currencies[countryInput]) {
            alert('Country not found!');
            return;
        }

    const currencyInfo = currencies[countryInput];

        document.getElementById('currency-name').textContent = currencyInfo.name;
        document.getElementById('country-name').textContent = currencyInfo.country;
        document.getElementById('currency-symbol').textContent = currencyInfo.symbol;
        document.getElementById('exchange-rate').textContent = currencyInfo.rate;

    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
});
