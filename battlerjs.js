// sans > bloodlust
// dr. strange > magicform
// batman > weakness
// character: image, name, number, attribute1, attribute2
//$('.char_2').css("background-image", "url(images/sansattack.gif)");

var who_wins = {
    char1: null,
    char2: null,
    battlers: {"sans": ["images/sans.jpg", 1, "magicform", "none"],
               "bambi": ["images/bambi.png", 3, "weakness", "none"],
               "garfield": ["images/garfield.jpg", 2, "weakness", "none"],
               "flowey": ["images/flowey.jpg", 4, "bloodlust", "none"],
               "spongebob": ["images/spongebob.png", 4, "weakness", "none"],
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
               "goofy": ["images/goofy.png", 60, "weakness", "none"],
               "marceline": ["images/marceline.jpg", 62, "weakness", "none"],
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
               "steven universe": ["images/steven.png", 300, "none", "none"],
               "pikachu": ["images/pikachu.png", 305, "none", "none"],
               "pearl": ["images/pearl.jpg", 310, "none", "none"],
               "harry potter": ["images/harry_potter.jpg", 595, "weakness", "none"],
               "hermione": ["images/hermione.jpg", 595, "weakness", "none"],
               "batman": ["images/batman.png", 600, "none", "none"],
               "alphonse elric": ["images/al.jpg", 610, "weakness", "none"],
               "chun li": ["images/chun_li.png", 620, "weakness", "none"],
               "captain america": ["images/captain_america.png", 800, "weakness", "none"],
               "mega man": ["images/mega_man.png", 820, "weakness", "none"],
               "elsa": ["images/elsa.png", 821, "none", "none"],
               "maleficent": ["images/maleficent.png", 823, "bloodlust", "none"],
               "princess peach": ["images/peach.png", 826, "none", "none"],
               "edward elric": ["images/edward.jpg", 840, "weakness", "none"],
               "zelda": ["images/zelda.png", 842, "none", "none"],
               "mario": ["images/mario.png", 848, "none", "none"],
               "luigi": ["images/luigi.jpg", 848, "weakness", "none"],
               "storm": ["images/storm.png", 850, "none", "none"],
               "bowser": ["images/bowser.png", 851, "none", "none"],
               "voldemort": ["images/voldemort.jpg", 852, "bloodlust", "none"],
               "luke skywalker": ["images/luke_skywalker.png", 853, "none", "none"],
               "xemnas": ["images/xemnas.png", 854, "bloodlust", "none"],
               "iron man": ["images/iron_man.jpg", 855, "weakness", "none"],
               "mickey mouse": ["images/mickey.png", 856, "weakness", "none"],
               "loki": ["images/loki.jpg", 860, "bloodlust", "none"],
               "samus": ["images/samus.jpg", 870, "none", "none"],
               "wolverine": ["images/wolverine.jpg", 875, "weakness", "none"],
               "spider-man": ["images/spider_man.png", 878, "none", "none"],
               "gandalf the grey": ["images/gandalf.png", 879, "magicform", "none"],
               "darth vader": ["images/darth_vader.png", 880, "bloodlust", "none"],
               "link": ["images/link.png", 890, "weakness", "none"],
               "master chief": ["images/master_chief.png", 900, "none", "none"],
               "cloud": ["images/cloud.png", 915, "none", "none"],
               "ansem": ["images/ansem.jpg", 980, "bloodlust", "none"],
               "riku": ["images/riku.jpg", 1000, "none", "none"],
               "sora": ["images/sora.png", 1000, "none", "none"],
               "shadow the hedgehog": ["images/shadow.png", 1069, "none", "none"],
               "sonic the hedgehog": ["images/sonic.jpg", 1070, "weakness", "none"],
               "rosalina": ["images/rosalina.png", 1070, "none", "none"],
               "sauron": ["images/sauron.jpg", 1099, "magicform", "none"],
               "sephiroth": ["images/sephiroth.png", 1100, "bloodlust", "none"],
               "godzilla": ["images/godzilla.jpg", 5000, "none", "none"],
               "sailor moon": ["images/sailor_moon.jpg", 6500, "none", "none"],
               "wonder woman": ["images/wonder_woman.jpg", 6500, "weakness", "none"],
               "kirby": ["images/kirby.png", 6505, "weakness", "none"],
               "frieza": ["images/frieza.png", 6510, "bloodlust", "none"],
               "thor": ["images/thor.png", 6550, "none", "none"],
               "naruto": ["images/naruto.png", 6570, "none", "none"],
               "the hulk": ["images/hulk.jpg", 7000, "weakness", "none"],
               "deadpool": ["images/deadpool.jpg", 7001, "bloodlust", "none"],
               "sasuke uchiha": ["images/sasuke.png", 7010, "none", "none"],
               "itachi uchiha": ["images/itachi.png", 7015, "none", "none"],
               "madara uchiha": ["images/madara.png", 7020, "bloodlust", "none"],
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
               "saitama": ["images/one_punch.png", 9995, "none", "none"],
               "cthulu": ["images/cthulu.jpg", 9996, "magicform", "none"],
               "bill cipher": ["images/bill_cipher.jpg", 9999, "magicform", "none"],
               "asriel dreemurr": ["images/asriel.png", 9999, "magicform", "none"],
               "doctor manhattan": ["images/manhattan.png", 10000, "none", "none"]},
               // 100

    symbol: function() {
      var chara1 = who_wins.char1;
      var power1 = who_wins.battlers[chara1][1];
      var char1_attr1 = who_wins.battlers[chara1][2];
      var char1_attr2 = who_wins.battlers[chara1][3];
      var chara2 = who_wins.char2;
      var power2 = who_wins.battlers[chara2][1];
      var char2_attr1 = who_wins.battlers[chara2][2];
      var char2_attr2 = who_wins.battlers[chara2][3];

      if (chara1 == "kid buu" && chara2 == "superman") {
        $("#sym").text(">");
        $("#sym").css("margin-top", "5%"); }
      else if (chara1 == "superman" && chara2 == "kid buu") {
        $("#sym").text("<");
        $("#sym").css("margin-top", "5%"); }
      else if (chara1 == "ansem" && (chara2 == "zelda" || chara2 == "mickey mouse")) {
        $("#sym").text("<");
        $("#sym").css("margin-top", "5%"); }
      else if ((chara1 == "zelda" || chara1 == "mickey mouse") && chara2 == "ansem") {
        $("#sym").text(">");
        $("#sym").css("margin-top", "5%"); }
      else if (chara1 == "sasuke uchiha" && chara2 == "vegeta") {
        $("#sym").text(">");
        $("#sym").css("margin-top", "5%"); }
      else if (chara1 == "vegeta" && chara2 == "sasuke uchiha") {
        $("#sym").text("<");
        $("#sym").css("margin-top", "5%"); }
      else if (chara1 == "captain america" && chara2 == "iron man") {
        $("#sym").text(">");
        $("#sym").css("margin-top", "5%"); }
      else if (chara1 == "iron man" && chara2 == "captain america") {
        $("#sym").text("<");
        $("#sym").css("margin-top", "5%"); }
      else if (chara1 == "doctor strange" && (char2_attr1 == "magicform" || char2_attr2 == "magicform")) {
        $("#sym").text(">");
        $("#sym").css("margin-top", "5%"); }
      else if ((char1_attr1 == "magicform" || char1_attr2 == "magicform") && chara2 == "doctor strange") {
        $("#sym").text("<");
        $("#sym").css("margin-top", "5%"); }
      else if (chara1 == "batman" && (char2_attr1 == "weakness" || char2_attr2 == "weakness")) {
        $("#sym").text(">");
        $("#sym").css("margin-top", "5%"); }
      else if ((char1_attr1 == "weakness" || char1_attr2 == "weakness") && chara2 == "batman") {
        $("#sym").text("<");
        $("#sym").css("margin-top", "5%"); }
      else if (chara1 == "sans" && (char2_attr1 == "bloodlust" || char2_attr2 == "bloodlust")) {
        $("#sym").text(">");
        $("#sym").css("margin-top", "5%"); }
      else if ((char1_attr1 == "bloodlust" || char1_attr2 == "bloodlust") && chara2 == "sans") {
        $("#sym").text("<");
        $("#sym").css("margin-top", "5%"); }
      else if (power1 > power2) {
        $("#sym").text(">");
        $("#sym").css("margin-top", "5%"); }
      else if (power1 < power2) {
        $("#sym").text("<");
        $("#sym").css("margin-top", "5%"); }
      else {
        $("#sym").text("=");
        $("#sym").css("margin-top", "5%"); }
    },

    char_func: function(n) {
      try {
        who_wins['char'+n] = $('#chara'+n).val().toLowerCase();
        var image = who_wins.battlers[who_wins['char'+n]][0];
        $('.char_'+n).css("background-image", "url(" + image + ")");
        if (who_wins.char1 && who_wins.char2) {
          who_wins.symbol();
        }
      }
      finally { return false; }
    },
}

$("#form1").submit(function () { return who_wins.char_func(1); });
$("#form2").submit(function () { return who_wins.char_func(2); });

$("#chara1").autocomplete({ source: Object.keys(who_wins.battlers) });
$("#chara2").autocomplete({ source: Object.keys(who_wins.battlers) });