function counting()
	{
		var dzisiaj = new Date();

		var dzien = dzisiaj.getDate();
    if (dzien<10) dzien = "0"+dzien;

		var miesiac = dzisiaj.getMonth()+1;
    if (miesiac<10) miesiac = "0"+miesiac;
		var rok = dzisiaj.getFullYear();

		var godzina = dzisiaj.getHours();
		if (godzina<10) godzina = "0"+godzina;

		var minuta = dzisiaj.getMinutes();
		if (minuta<10) minuta = "0"+minuta;

		document.getElementById("clock").innerHTML = godzina+":"+minuta;
    document.getElementById("date").innerHTML = dzien+"."+miesiac+"."+rok

		 setTimeout("counting()",1000);
	}
