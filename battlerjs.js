// sans > bloodlust
// dr. strange > magicform
// batman > weakness

// character: image, name, number, attribute
// if character > other character:
// show accurate symbol between
// 1 V 2
// 1 > 2
// 1 < 2
// 1 = 2

var who_wins = {
battler: {"abraham lincoln": ["images/abe.jpg", 15, "none"],
          "barrack obama": ["images/obama.jpg", 16, "none"],
          "hillary clinton": ["images/clinton.jpg", 13, "none"],
          "donald trump": ["images/donald_trump.jpg", 15, "none"],
          "justin bieber": ["images/justin_bieber.jpg", 11, "none"],
          "teletubbies sun": ["images/teletubbies_sun.jpg", 100, "magicform"],
          "bambi": ["images/bambi.png", 2, "none"],
          "elsa": ["images/elsa.png", 750, "none"],
          "goofy": ["images/goofy.png", 62, "none"],
          "donald duck": ["images/donald_duck.png", 64, "none"],
          "godzilla": ["images/godzilla.jpg", 5000, "none"],
          "goku": ["images/goku.png", 9001, "none"],
          "vegeta": ["images/vegeta.png", 9000, "none"],
          "gogeta": ["images/gogeta.png", 9800, "none"],
          "majin buu": ["images/majin_buu.png", 8000, "bloodlust"],
          "naruto": ["images/naruto.png", 6400, "none"],
          "sasuke": ["images/sasuke.png", 6600, "none"],
          "sailor moon": ["images/sailor_moon.jpg", 6500, "none"],
          "mario": ["images/mario.png", 850, "none"],
          "luigi": ["images/luigi.jpg", 850, "weakness"],
          "princess peach": ["images/peach.png", 842, "none"],
          "rosalina": ["images/rosalina.png", 1070, "none"],
          "link": ["images/link.png", 860, "none"],
          "zelda": ["images/zelda.png", 840, "none"],
          "samus": ["images/samus.jpg", 870, "none"],
          "sonic the hedgehog": ["images/sonic.jpg", 1070, "none"],
          "shadow the hedgehog": ["images/shadow.png", 1069, "none"],
          "mega man": ["images/mega_man.png", 820, "none"],
          "chun li": ["images/chun_li.png", 620, "none"],
          "cloud": ["images/cloud.png", 900, "none"],
          "sephiroth": ["images/sephiroth.png", 1100, "bloodlust"],
          "sora": ["images/sora.png", 920, "none"],
          "finn": ["images/finn.png", 76, "none"],
          "princess bubblegum": ["images/princess_bubblegum.png", 40, "none"],
          "marceline": ["images/marceline.jpg", 60, "none"],
          "bill cipher": ["images/bill_cipher.jpg", 9999, "magicform"],
          "superman": ["images/superman.jpg", 9990, "weakness"],
          "batman": ["images/batman.png", 600, "none"],
          "the joker": ["images/joker.jpg", 590, "bloodlust"],
          "wonder woman": ["images/wonder_woman.jpg", 6500, "weakness"],
          "the flash": ["images/flash.jpg", 9900, "weakness"],
          "doctor manhattan": ["images/manhattan.png", 10000, "none"],
          "luke skywalker": ["images/luke_skywalker.png", 820, "none"],
          "rey": ["images/rey.png", 70, "weakness"],
          "darth vader": ["images/darth_vader.png", 860, "bloodlust"],
          "harry potter": ["images/harry_potter.jpg", 75, "none"],
          "hermione": ["images/hermione.jpg", 72, "none"],
          "voldemort": ["images/voldemort.jpg", 106, "bloodlust"],
          "sauron": ["images/sauron.jpg", 1099, "magicform"],
          "master chief": ["images/master_chief.png", 900, "none"],
          "spider man": ["images/spider_man.png", 1040, "none"],
          "the hulk": ["images/hulk.jpg", 7000, "weakness"],
          "iron man": ["images/iron_man.jpg", 1000, "weakness"],
          "thor": ["images/thor.png", 4000, "none"],
          "loki": ["images/loki.jpg", 900, "bloodlust"],
          "captain america": ["images/captain_america.png", 800, "weakness"],
          "wolverine": ["images/wolverine.jpg", 1000, "none"],
          "storm": ["images/storm.png", 1050, "none"],
          "doctor strange": ["images/doctor_strange.jpg", 8100, "none"],
          "shrek": ["images/shrek.png", 70, "none"],
          "homer simpson": ["images/homer.jpg", 15, "none"],
          "sans": ["images/sans.jpg", 1, "magicform"],
          "papyrus": ["images/papyrus.png", 20, "magicform"],
          "toriel": ["images/toriel.png", 80, "magicform"],
          "undyne": ["images/undyne.png", 50, "magicform"],
          "asgore": ["images/asgore.png", 80, "magicform"],
          "flowey": ["images/flowey.jpg", 3, "bloodlust"],
          "chara": ["images/chara.png", 99, "bloodlust"]},
          // add cthulu, deadpool, green lantern, aquaman?
          // add gohan, cell, frieza, garfield, optimus prime?
          // add care bear, nicholas cage, george washington?
          // add mettaton EX, asriel dreamurr, jason voorhees?
          // add bill clinton, mickey mouse, vegito, dracula?
          // add madara, bowser, ganondorf, riku, xemnas, ryu?

    symbol: function() {
      var chara1 = $('#chara1').val().toLowerCase();
      var power1 = who_wins.battler[chara1][1];
      var attr1 = who_wins.battler[chara1][2];
      var chara2 = $('#chara2').val().toLowerCase();
      var power2 = who_wins.battler[chara2][1];
      var attr2 = who_wins.battler[chara2][2];

      if (chara1 == "captain america" && chara2 == "iron man") {
        $("#sym").text(">");
      }
      else if (chara1 == "iron man" && chara2 == "captain america") {
        $("#sym").text("<");
      }
      else {
      if (chara1 == "doctor strange" && attr2 == "magicform") {
        $("#sym").text(">");
      }
      else if (attr1 == "magicform" && chara2 == "doctor strange") {
        $("#sym").text("<");
      }
      else {
      if (chara1 == "batman" && attr2 == "weakness") {
        $("#sym").text(">");
      }
      else if (attr1 == "weakness" && chara2 == "batman") {
        $("#sym").text("<");
      }
      else {
      if (chara1 == "sans" && attr2 == "bloodlust") {
        $("#sym").text(">");
      }
      else if (attr1 == "bloodlust" && chara2 == "sans") {
        $("#sym").text("<");
      }
      else {
      if (power1 > power2) {
        $("#sym").text(">");
      }
      else if (power1 < power2) {
        $("#sym").text("<");
      }
      else {
        $("#sym").text("=");
      }}}}}
    },

    char1_func: function() {
      try {
        var chara1 = $('#chara1').val().toLowerCase();
        var image1 = who_wins.battler[chara1][0];
        $('.char_1').css("background-image", "url(" + image1 + ")");
        who_wins.symbol();
     } finally {
        return false;
     }
    },

    char2_func: function() {
      try {
        var chara2 = $('#chara2').val().toLowerCase();
        var image2 = who_wins.battler[chara2][0];
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
  source: Object.keys(who_wins.battler)
});
$( "#chara2" ).autocomplete({
  source: Object.keys(who_wins.battler)
});