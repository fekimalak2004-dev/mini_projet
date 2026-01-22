function validequiz() {
  const bonnereponse = {
    q1: "b",
    q2: "b",
    q3: "b",
    q4: "b",
    q5: "b",
    q6: "b",
    q7: "b",
    q8: "b",
    q9: "b",
    q10: "b",
    q11: "a",
    q12: "c"
  };

  let score = 0;
  let toutesreponces = true;

  for (let q in bonnereponse) {
    let radios = document.getElementsByName(q);
    let choisi = false;

    for (let r of radios) {
      if (r.checked) {
        choisi = true;
        if (r.value === bonnereponse[q]) score++;
      }
    }

    if (!choisi) {
      toutesreponces = false;
      break;
    }
  }

  if (!toutesreponces) {
    alert("Répondez à toutes les questions !");
    return;
  }

  let message = "";
  if (score >= 9) message = "Excellent ";
  else if (score >= 6) message = "Bon ";
  else message = "À améliorer ";

  document.getElementById("resultat").innerHTML =
    `<h2>Résultat</h2>
     <p>Note : ${score} / 12</p>
     <p>${message}</p>`;
}

