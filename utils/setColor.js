export default function setColor(str) {
  let color = "";
  switch (str) {
    case "Animations ludiques": 
      color = "red";
      break;
    case "Evènements" :
      color = "green";
      break;
    case "Jeux d'ambiance":
      color = "blue";
      break;
    case "Jeux de plateau / stratégie":
      color = "yellow";
      break;
    case "Jeux de rôles":
      color = "gray";
      break;
    case "Jeux traditionnels":
      color = "black";
      break;
  }
  return color;
}