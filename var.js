// Ce programme permet l'affichage de la date de 
// dernière mise à jour d'une page HTML. 
// Il fonctionnera même après l'an 2000 ! 
function ini_tab() { 
    this.length = ini_tab.arguments.length 
    for (var i = 0; i < this.length; i++) 
    this[i+1] = ini_tab.arguments[i] 
    } 
    var date_now = new Date();
    var date_mod = new Date(document.lastModified);
    var age_years = (date_now.getTime() -
    date_mod.getTime())/(1000*86400*365.25);
    if (age_years < 2) {
        var dayofweek = new ini_tab("Sunday","Monday","Tuesday","Wednesday", 
        "Thursday","Friday","Saturday"); 
        var month = new ini_tab("January","February","March", 
        "April", "May","June", 
        "July","August","September", 
        "October","November","December"); 
        document.write("<font color=green><font size=-1>Last modified:<i> ");
        document.write(dayofweek[(date_mod.getDay()+1)], " "); 
        document.write(month[(date_mod.getMonth()+1)]," "); 
        document.write(date_mod.getDate(), " "); 
        if (date_mod.getYear() > 1970)
           document.write((date_mod.getYear()));
        else {
           if (date_mod.getYear() > 70)
              document.write((date_mod.getYear()+1900)); 
           else
              document.write((date_mod.getYear()+2000)); 
        }
        document.write(".</i></font></font>");
    }