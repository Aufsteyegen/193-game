const out = {
    build: {
      rollupOptions: {
        external: [
          "/Users/main/Desktop/193-game/src/assets/countries/Albania.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Algeria.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Andorra.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Angola.jsx", "/Users/main/Desktop/193-game/src/assets/countries/AntiguaandBarbuda.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Argentina.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Armenia.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Australia.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Austria.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Azerbaijan.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Bahamas.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Bahrain.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Bangladesh.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Barbados.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Belarus.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Belgium.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Belize.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Benin.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Bhutan.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Bolivia.jsx", "/Users/main/Desktop/193-game/src/assets/countries/BosniaandHerzegovina.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Botswana.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Brazil.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Brunei.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Bulgaria.jsx", "/Users/main/Desktop/193-game/src/assets/countries/BurkinaFaso.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Burundi.jsx", "/Users/main/Desktop/193-game/src/assets/countries/CaboVerde.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Cambodia.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Cameroon.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Canada.jsx", "/Users/main/Desktop/193-game/src/assets/countries/CentralAfricanRepublic.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Chad.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Chile.jsx", "/Users/main/Desktop/193-game/src/assets/countries/China.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Colombia.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Comoros.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Congo.jsx", "/Users/main/Desktop/193-game/src/assets/countries/CostaRica.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Croatia.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Cuba.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Cyprus.jsx", "/Users/main/Desktop/193-game/src/assets/countries/CzechRepublic.jsx", "/Users/main/Desktop/193-game/src/assets/countries/DemocraticPeoplesRepublicofKorea.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Denmark.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Djibouti.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Dominica.jsx", "/Users/main/Desktop/193-game/src/assets/countries/DominicanRepublic.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Ecuador.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Egypt.jsx", "/Users/main/Desktop/193-game/src/assets/countries/ElSalvador.jsx", "/Users/main/Desktop/193-game/src/assets/countries/EquatorialGuinea.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Eritrea.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Estonia.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Eswatini.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Ethiopia.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Fiji.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Finland.jsx", "/Users/main/Desktop/193-game/src/assets/countries/France.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Gabon.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Gambia.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Georgia.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Germany.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Ghana.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Greece.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Grenada.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Guatemala.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Guinea.jsx", "/Users/main/Desktop/193-game/src/assets/countries/GuineaBissau.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Guyana.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Haiti.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Honduras.jsx", "/Users/main/Desktop/193-game/src/assets/countries/HongKong.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Hungary.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Iceland.jsx", "/Users/main/Desktop/193-game/src/assets/countries/India.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Indonesia.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Iran.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Iraq.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Ireland.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Israel.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Italy.jsx", "/Users/main/Desktop/193-game/src/assets/countries/IvoryCoast.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Jamaica.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Japan.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Jordan.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Kazakhstan.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Kenya.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Kiribati.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Kosovo.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Kuwait.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Kyrgyzstan.jsx", "/Users/main/Desktop/193-game/src/assets/countries/LaoPeoplesDemocraticRepublic.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Latvia.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Lebanon.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Lesotho.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Liberia.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Libya.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Liechtenstein.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Lithuania.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Luxembourg.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Macau.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Madagascar.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Malawi.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Malaysia.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Mali.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Malta.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Mauritania.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Mauritius.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Mexico.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Moldova.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Monaco.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Mongolia.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Montenegro.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Morocco.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Mozambique.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Myanmar.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Namibia.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Nauru.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Nepal.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Netherlands.jsx", "/Users/main/Desktop/193-game/src/assets/countries/NewZealand.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Nicaragua.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Niger.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Nigeria.jsx", "/Users/main/Desktop/193-game/src/assets/countries/NorthMacedonia.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Norway.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Oman.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Pakistan.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Palau.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Panama.jsx", "/Users/main/Desktop/193-game/src/assets/countries/PapuaNewGuinea.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Paraguay.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Peru.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Philippines.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Poland.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Portugal.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Qatar.jsx", "/Users/main/Desktop/193-game/src/assets/countries/RepublicofKorea.jsx", "/Users/main/Desktop/193-game/src/assets/countries/RepublicoftheCongo.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Romania.jsx", "/Users/main/Desktop/193-game/src/assets/countries/RussianFederation.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Rwanda.jsx", "/Users/main/Desktop/193-game/src/assets/countries/SaintKittsandNevis.jsx", "/Users/main/Desktop/193-game/src/assets/countries/SaintLucia.jsx", "/Users/main/Desktop/193-game/src/assets/countries/SaintVincentandtheGrenadines.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Samoa.jsx", "/Users/main/Desktop/193-game/src/assets/countries/SanMarino.jsx", "/Users/main/Desktop/193-game/src/assets/countries/SaoTomeandPrincipe.jsx", "/Users/main/Desktop/193-game/src/assets/countries/SaudiArabia.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Senegal.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Serbia.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Seychelles.jsx", "/Users/main/Desktop/193-game/src/assets/countries/SierraLeone.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Singapore.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Slovakia.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Slovenia.jsx", "/Users/main/Desktop/193-game/src/assets/countries/SolomonIslands.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Somalia.jsx", "/Users/main/Desktop/193-game/src/assets/countries/SouthAfrica.jsx", "/Users/main/Desktop/193-game/src/assets/countries/SouthSudan.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Spain.jsx", "/Users/main/Desktop/193-game/src/assets/countries/SriLanka.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Sudan.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Suriname.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Sweden.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Switzerland.jsx", "/Users/main/Desktop/193-game/src/assets/countries/SyrianArabRepublic.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Taiwan.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Tajikistan.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Tanzania.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Thailand.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Timor_Leste.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Togo.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Tonga.jsx", "/Users/main/Desktop/193-game/src/assets/countries/TrinidadandTobago.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Tunisia.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Turkey.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Turkmenistan.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Uganda.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Ukraine.jsx", "/Users/main/Desktop/193-game/src/assets/countries/UnitedArabEmirates.jsx", "/Users/main/Desktop/193-game/src/assets/countries/UnitedKingdom.jsx", "/Users/main/Desktop/193-game/src/assets/countries/UnitedStatesofAmerica.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Uruguay.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Uzbekistan.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Vanuatu.jsx", "/Users/main/Desktop/193-game/src/assets/countries/VaticanCity.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Venezuela.jsx", "/Users/main/Desktop/193-game/src/assets/countries/VietNam.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Yemen.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Zambia.jsx", "/Users/main/Desktop/193-game/src/assets/countries/Zimbabwe.jsx"
        ],
      },
    },
  };
  
  export default out;
  