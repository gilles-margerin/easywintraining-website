export default function setColor(str) {
  let color = "";
  switch (str) {
    case "Animations ludiques": 
      color = "rgb(255, 0, 0)";
      break;
    case "Evènements" :
      color = "rgb(251, 137, 7)";
      break;
    case "Jeux d'ambiance":
      color = "rgb(117, 117, 97)";
      break;
    case "Jeux de plateau / stratégie":
      color = "rgb(27, 212, 36)";
      break;
    case "Jeux de rôles":
      color = "#44d6db";
      break;
    case "Jeux traditionnels":
      color = "rgb(151, 25, 197)";
      break;
    default:
      color = "rgb(174, 83, 207)";
      break;
  }
  return color;
}