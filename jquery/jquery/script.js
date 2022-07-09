let box = $(".box");

box.append("largura:", box.width(), "<br>",
          "largura + padding:", box.innerWidth(), "<br>",
          "largura + padding+ borda:", box.outerWidth(), "<br>",
          "largura + padding + borda + margin:", box.outerWidth(true));

