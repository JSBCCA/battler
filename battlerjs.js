// sans > bloodlust
// dr. strange > magicform
// batman > weakness
// character: image, name, number, attribute

var who_wins = {
battlers: {"sans": ["images/sans.jpg", 1, "magicform", "none"],
           "bambi": ["images/bambi.png", 2, "weakness", "none"],
           "flowey": ["images/flowey.jpg", 3, "bloodlust"],
           "scooby doo": ["images/scooby.jpg", 11, "weakness", "none"],
           "justin bieber": ["images/justin_bieber.jpg", 11, "weakness", "none"],
           "hillary clinton": ["images/clinton.jpg", 13, "weakness", "none"],
           "bill clinton": ["images/bill_clinton.jpg", 14, "weakness", "none"],
           "donald trump": ["images/donald_trump.jpg", 15, "weakness", "none"],
           "homer simpson": ["images/homer.jpg", 15, "weakness", "none"],
           "abraham lincoln": ["images/abe.jpg", 16, "weakness", "none"],
           "barrack obama": ["images/obama.jpg", 16, "weakness", "none"],
           "ron swanson": ["images/ron_swanson.jpg", 17, "none", "none"],
           "papyrus": ["images/papyrus.png", 20, "magicform", "none"],
           "mettaton ex": ["images/mettaton.jpg", 47, "magicform", "none"],
           "undyne": ["images/undyne.png", 50, "magicform", "none"],
           "marceline": ["images/marceline.jpg", 60, "weakness", "none"],
           "goofy": ["images/goofy.png", 62, "weakness"],
           "princess bubblegum": ["images/princess_bubblegum.png", 63, "weakness", "none"],
           "donald duck": ["images/donald_duck.png", 64, "weakness", "none"],
           "shrek": ["images/shrek.png", 70, "weakness", "none"],
           "rey": ["images/rey.png", 70, "weakness", "none"],
           "finn": ["images/finn.png", 76, "none", "none"],
           "toriel": ["images/toriel.png", 80, "magicform", "none"],
           "asgore": ["images/asgore.png", 80, "magicform", "none"],
           "chara": ["images/chara.png", 99, "bloodlust", "none"],
           "the joker": ["images/joker.jpg", 190, "bloodlust", "none"],
           "jason vorhees": ["images/jason.jpg", 200, "bloodlust", "none"],
           "roy mustang": ["images/roy.png", 252, "weakness", "none"],
           "harry potter": ["images/harry_potter.jpg", 595, "weakness", "none"],
           "hermione": ["images/hermione.jpg", 595, "weakness", "none"],
           "batman": ["images/batman.png", 600, "none", "none"],
           "chun li": ["images/chun_li.png", 620, "weakness", "none"],
           "captain america": ["images/captain_america.png", 800, "weakness", "none"],
           "mega man": ["images/mega_man.png", 820, "weakness", "none"],
           "elsa": ["images/elsa.png", 821, "none", "none"],
           "maleficent": ["images/maleficent.png", 823, "bloodlust", "none"],
           "edward elric": ["images/edward.jpg", 826, "weakness", "none"],
           "zelda": ["images/zelda.png", 840, "none", "none"],
           "princess peach": ["images/peach.png", 842, "none", "none"],
           "mario": ["images/mario.png", 850, "none", "none"],
           "luigi": ["images/luigi.jpg", 850, "weakness", "none"],
           "bowser": ["images/bowser.png", 852, "none", "none"],
           "voldemort": ["images/voldemort.jpg", 853, "bloodlust", "none"],
           "luke skywalker": ["images/luke_skywalker.png", 854, "none", "none"],
           "xemnas": ["images/xemnas.png", 855, "none", "none"],
           "mickey mouse": ["images/mickey.png", 856, "weakness", "none"],
           "darth vader": ["images/darth_vader.png", 860, "bloodlust", "none"],
           "link": ["images/link.png", 860, "weakness", "none"],
           "samus": ["images/samus.jpg", 870, "none", "none"],
           "loki": ["images/loki.jpg", 900, "bloodlust", "none"],
           "master chief": ["images/master_chief.png", 900, "none", "none"],
           "cloud": ["images/cloud.png", 915, "none", "none"],
           "riku": ["images/riku.jpg", 920, "none", "none"],
           "sora": ["images/sora.png", 920, "none", "none"],
           "wolverine": ["images/wolverine.jpg", 1000, "none", "none"],
           "iron man": ["images/iron_man.jpg", 1000, "weakness", "none"],
           "spider man": ["images/spider_man.png", 1040, "none", "none"],
           "storm": ["images/storm.png", 1050, "none", "none"],
           "shadow the hedgehog": ["images/shadow.png", 1069, "none", "none"],
           "sonic the hedgehog": ["images/sonic.jpg", 1070, "weakness", "none"],
           "rosalina": ["images/rosalina.png", 1070, "none", "none"],
           "sauron": ["images/sauron.jpg", 1099, "magicform", "none"],
           "sephiroth": ["images/sephiroth.png", 1100, "bloodlust", "none"],
           "thor": ["images/thor.png", 4000, "none", "none"],
           "godzilla": ["images/godzilla.jpg", 5000, "none", "none"],
           "sailor moon": ["images/sailor_moon.jpg", 6500, "none", "none"],
           "wonder woman": ["images/wonder_woman.jpg", 6500, "weakness", "none"],
           "naruto": ["images/naruto.png", 6570, "none", "none"],
           "the hulk": ["images/hulk.jpg", 7000, "weakness", "none"],
           "deadpool": ["images/deadpool.jpg", 7001, "bloodlust", "none"],
           "sasuke uchiha": ["images/sasuke.png", 7010, "none", "none"],
           "madara uchiha": ["images/madara.png", 7011, "none", "none"],
           "perfect cell": ["images/cell.jpg", 7600, "none", "none"],
           "majin buu": ["images/majin_buu.png", 8000, "none", "none"],
           "doctor strange": ["images/doctor_strange.jpg", 8100, "none", "none"],
           "gohan": ["images/gohan.png", 8900, "none", "none"],
           "kid buu": ["images/kid_buu.png", 9000, "bloodlust", "none"],
           "vegeta": ["images/vegeta.png", 9000, "none", "none"],
           "goku": ["images/goku.png", 9001, "none", "none"],
           "super gogeta": ["images/gogeta.png", 9800, "none", "none"],
           "the flash": ["images/flash.jpg", 9900, "weakness", "none"],
           "superman": ["images/superman.jpg", 9990, "weakness", "none"],
           "alucard": ["images/alucard.png", 9993, "magicform", "bloodlust"],
           "super vegito": ["images/vegito.png", 9994, "none", "none"],
           "cthulu": ["images/cthulu.jpg", 9996, "magicform", "none"],
           "bill cipher": ["images/bill_cipher.jpg", 9999, "magicform", "none"],
           "asriel dreemurr": ["images/asriel.png", 9999, "magicform", "none"],
           "doctor manhattan": ["images/manhattan.png", 10000, "none", "none"]},

    symbol: function() {
      var chara1 = $('#chara1').val().toLowerCase();
      var power1 = who_wins.battlers[chara1][1];
      var char1_attr1 = who_wins.battlers[chara1][2];
      var char1_attr2 = who_wins.battlers[chara1][3];
      var chara2 = $('#chara2').val().toLowerCase();
      var power2 = who_wins.battlers[chara2][1];
      var char2_attr1 = who_wins.battlers[chara2][2];
      var char2_attr2 = who_wins.battlers[chara2][3];

      if (chara1 == "kid buu" && chara2 == "superman") {
        $("#sym").text(">");
        $("#sym").css("margin-top", "5%");
      }
      else if (chara1 == "superman" && chara2 == "kid buu") {
        $("#sym").text("<");
        $("#sym").css("margin-top", "5%");
      }
      else if (chara1 == "sasuke uchiha" && chara2 == "vegeta") {
        $("#sym").text(">");
        $("#sym").css("margin-top", "5%");
      }
      else if (chara1 == "vegeta" && chara2 == "sasuke uchiha") {
        $("#sym").text("<");
        $("#sym").css("margin-top", "5%");
      }
      else if (chara1 == "captain america" && chara2 == "iron man") {
        $("#sym").text(">");
        $("#sym").css("margin-top", "5%");
      }
      else if (chara1 == "iron man" && chara2 == "captain america") {
        $("#sym").text("<");
        $("#sym").css("margin-top", "5%");
      }
      else if (chara1 == "doctor strange" && (char2_attr1 == "magicform" || char2_attr2 == "magicform")) {
        $("#sym").text(">");
        $("#sym").css("margin-top", "5%");
      }
      else if ((char1_attr1 == "magicform" || char1_attr2 == "magicform") && chara2 == "doctor strange") {
        $("#sym").text("<");
        $("#sym").css("margin-top", "5%");
      }
      else if (chara1 == "batman" && (char2_attr1 == "weakness" || char2_attr2 == "weakness")) {
        $("#sym").text(">");
        $("#sym").css("margin-top", "5%");
      }
      else if ((char1_attr1 == "weakness" || char1_attr2 == "weakness") && chara2 == "batman") {
        $("#sym").text("<");
        $("#sym").css("margin-top", "5%");
      }
      else if (chara1 == "sans" && (char2_attr1 == "bloodlust" || char2_attr2 == "bloodlust")) {
        $("#sym").text(">");
        $("#sym").css("margin-top", "5%");
      }
      else if ((char1_attr1 == "bloodlust" || char1_attr2 == "bloodlust") && chara2 == "sans") {
        $("#sym").text("<");
        $("#sym").css("margin-top", "5%");
      }
      else if (power1 > power2) {
        $("#sym").text(">");
        $("#sym").css("margin-top", "5%");
      }
      else if (power1 < power2) {
        $("#sym").text("<");
        $("#sym").css("margin-top", "5%");
      }
      else {
        $("#sym").text("=");
        $("#sym").css("margin-top", "5%");
      }
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