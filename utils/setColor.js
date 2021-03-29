export default function setColor(str) {
  let color = "";
  switch (str) {
    case "Animations ludiques": 
      color = "#df151c";
      break;
    case "Evènements" :
      color = "#68635c";
      break;
    case "Jeux d'ambiance":
      color = "#e2d304";
      break;
    case "Jeux de plateau / stratégie":
      color = "#1db13d";
      break;
    case "Jeux de rôles":
      color = "#309DFF";
      break;
    case "Jeux traditionnels":
      color = "#AC1EFF";
      break;
    default:
      color = "#000";
      break;
  }
  return color;
}