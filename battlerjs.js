// sans > bloodlust
// dr. strange > magicform
// batman > weakness
// character: image, name, number, attribute

var who_wins = {
battlers: {"sans": ["images/sans.jpg", 1, "magicform"],
           "bambi": ["images/bambi.png", 2, "weakness"],
           "flowey": ["images/flowey.jpg", 3, "bloodlust"],
           "justin bieber": ["images/justin_bieber.jpg", 11, "weakness"],
           "hillary clinton": ["images/clinton.jpg", 13, "weakness"],
           "bill clinton": ["images/bill_clinton.jpg", 14, "weakness"],
           "abraham lincoln": ["images/abe.jpg", 15, "weakness"],
           "donald trump": ["images/donald_trump.jpg", 15, "weakness"],
           "homer simpson": ["images/homer.jpg", 15, "weakness"],
           "barrack obama": ["images/obama.jpg", 16, "weakness"],
           "papyrus": ["images/papyrus.png", 20, "magicform"],
           "mettaton ex": ["images/mettaton.jpg", 47, "magicform"],
           "undyne": ["images/undyne.png", 50, "magicform"],
           "marceline": ["images/marceline.jpg", 60, "weakness"],
           "goofy": ["images/goofy.png", 62, "weakness"],
           "princess bubblegum": ["images/princess_bubblegum.png", 63, "weakness"],
           "donald duck": ["images/donald_duck.png", 64, "weakness"],
           "shrek": ["images/shrek.png", 70, "weakness"],
           "rey": ["images/rey.png", 70, "weakness"],
           "finn": ["images/finn.png", 76, "none"],
           "toriel": ["images/toriel.png", 80, "magicform"],
           "asgore": ["images/asgore.png", 80, "magicform"],
           "chara": ["images/chara.png", 99, "bloodlust"],
           "the joker": ["images/joker.jpg", 190, "bloodlust"],
           "jason": ["images/jason.jpg", 200, "bloodlust"],
           "harry potter": ["images/harry_potter.jpg", 595, "weakness"],
           "hermione": ["images/hermione.jpg", 595, "weakness"],
           "batman": ["images/batman.png", 600, "none"],
           "chun li": ["images/chun_li.png", 620, "weakness"],
           "captain america": ["images/captain_america.png", 800, "weakness"],
           "mega man": ["images/mega_man.png", 820, "weakness"],
           "elsa": ["images/elsa.png", 821, "none"],
           "luke skywalker": ["images/luke_skywalker.png", 822, "none"],
           "maleficent": ["images/maleficent.png", 823, "bloodlust"],
           "zelda": ["images/zelda.png", 840, "none"],
           "princess peach": ["images/peach.png", 842, "none"],
           "mario": ["images/mario.png", 850, "none"],
           "luigi": ["images/luigi.jpg", 850, "weakness"],
           "voldemort": ["images/voldemort.jpg", 854, "bloodlust"],
           "xemnas": ["images/xemnas.png", 855, "none"],
           "mickey mouse": ["images/mickey.png", 856, "weakness"],
           "darth vader": ["images/darth_vader.png", 860, "bloodlust"],
           "link": ["images/link.png", 860, "weakness"],
           "samus": ["images/samus.jpg", 870, "none"],
           "loki": ["images/loki.jpg", 900, "bloodlust"],
           "master chief": ["images/master_chief.png", 900, "none"],
           "cloud": ["images/cloud.png", 915, "none"],
           "riku": ["images/riku.jpg", 920, "none"],
           "sora": ["images/sora.png", 920, "none"],
           "wolverine": ["images/wolverine.jpg", 1000, "none"],
           "iron man": ["images/iron_man.jpg", 1000, "weakness"],
           "spider man": ["images/spider_man.png", 1040, "none"],
           "storm": ["images/storm.png", 1050, "none"],
           "shadow the hedgehog": ["images/shadow.png", 1069, "none"],
           "sonic the hedgehog": ["images/sonic.jpg", 1070, "weakness"],
           "rosalina": ["images/rosalina.png", 1070, "none"],
           "sauron": ["images/sauron.jpg", 1099, "magicform"],
           "sephiroth": ["images/sephiroth.png", 1100, "bloodlust"],
           "thor": ["images/thor.png", 4000, "none"],
           "godzilla": ["images/godzilla.jpg", 5000, "none"],
           "naruto": ["images/naruto.png", 6400, "none"],
           "sailor moon": ["images/sailor_moon.jpg", 6500, "none"],
           "wonder woman": ["images/wonder_woman.jpg", 6500, "weakness"],
           "the hulk": ["images/hulk.jpg", 7000, "weakness"],
           "deadpool": ["images/deadpool.jpg", 7001, "bloodlust"],
           "sasuke uchiha": ["images/sasuke.png", 7010, "none"],
           "majin buu": ["images/majin_buu.png", 8000, "none"],
           "doctor strange": ["images/doctor_strange.jpg", 8100, "none"],
           "gohan": ["images/gohan.png", 8900, "none"],
           "kid buu": ["images/kid_buu.png", 9000, "bloodlust"],
           "vegeta": ["images/vegeta.png", 9000, "none"],
           "goku": ["images/goku.png", 9001, "none"],
           "super gogeta": ["images/gogeta.png", 9800, "none"],
           "the flash": ["images/flash.jpg", 9900, "weakness"],
           "superman": ["images/superman.jpg", 9990, "weakness"],
           "alucard": ["images/alucard.png", 9993, "magicform"],
           "super vegito": ["images/vegito.png", 9994, "none"],
           "cthulu": ["images/cthulu.jpg", 9996, "magicform"],
           "bill cipher": ["images/bill_cipher.jpg", 9999, "magicform"],
           "doctor manhattan": ["images/manhattan.png", 10000, "none"]},
           // asriel, cell, madara

    symbol: function() {
      var chara1 = $('#chara1').val().toLowerCase();
      var power1 = who_wins.battlers[chara1][1];
      var attr1 = who_wins.battlers[chara1][2];
      var chara2 = $('#chara2').val().toLowerCase();
      var power2 = who_wins.battlers[chara2][1];
      var attr2 = who_wins.battlers[chara2][2];

      if (chara1 == "kid buu" && chara2 == "superman") {
        $("#sym").text(">");
        $("#sym").css("margin-top", "6%");
      }
      else if (chara1 == "superman" && chara2 == "kid buu") {
        $("#sym").text("<");
        $("#sym").css("margin-top", "6%");
      }
      else {
      if (chara1 == "sasuke uchiha" && chara2 == "vegeta") {
        $("#sym").text(">");
        $("#sym").css("margin-top", "6%");
      }
      else if (chara1 == "vegeta" && chara2 == "sasuke uchiha") {
        $("#sym").text("<");
        $("#sym").css("margin-top", "6%");
      }
      else {
      if (chara1 == "captain america" && chara2 == "iron man") {
        $("#sym").text(">");
        $("#sym").css("margin-top", "6%");
      }
      else if (chara1 == "iron man" && chara2 == "captain america") {
        $("#sym").text("<");
        $("#sym").css("margin-top", "6%");
      }
      else {
      if (chara1 == "doctor strange" && attr2 == "magicform") {
        $("#sym").text(">");
        $("#sym").css("margin-top", "6%");
      }
      else if (attr1 == "magicform" && chara2 == "doctor strange") {
        $("#sym").text("<");
        $("#sym").css("margin-top", "6%");
      }
      else {
      if (chara1 == "batman" && attr2 == "weakness") {
        $("#sym").text(">");
        $("#sym").css("margin-top", "6%");
      }
      else if (attr1 == "weakness" && chara2 == "batman") {
        $("#sym").text("<");
        $("#sym").css("margin-top", "6%");
      }
      else {
      if (chara1 == "sans" && attr2 == "bloodlust") {
        $("#sym").text(">");
        $("#sym").css("margin-top", "6%");
      }
      else if (attr1 == "bloodlust" && chara2 == "sans") {
        $("#sym").text("<");
        $("#sym").css("margin-top", "6%");
      }
      else {
      if (power1 > power2) {
        $("#sym").text(">");
        $("#sym").css("margin-top", "6%");
      }
      else if (power1 < power2) {
        $("#sym").text("<");
        $("#sym").css("margin-top", "6%");
      }
      else {
        $("#sym").text("=");
        $("#sym").css("margin-top", "6%");
      }}}}}}}
    },

    char1_func: function() {
      try {
        var chara1 = $('#chara1').val().toLowerCase();
        var image1 = who_wins.battlers[chara1][0];
        $('.char_1').css("background-image", "url(" + image1 + ")");
        who_wins.symbol();
     } finally {
        return false;
     }
    },

    char2_func: function() {
      try {
        var chara2 = $('#chara2').val().toLowerCase();
        var image2 = who_wins.battlers[chara2][0];
        $('.char_2').css("background-image", "url(" + image2 + ")");
        who_wins.symbol();
      } finally {
        return false;
     }
    }

}

$("#form1").submit(who_wins.char1_func);
$("#form2").submit(who_wins.char2_func);

$( "#chara1" ).autocomplete({
  source: Object.keys(who_wins.battlers)
});
$( "#chara2" ).autocomplete({
  source: Object.keys(who_wins.battlers)
});