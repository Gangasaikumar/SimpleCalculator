export const specialChars = ["%", "*", "/", "-", "+", "="];

export const calculateResult = (
  expression: string,
  btnValue: string,
): string => {
  if (btnValue === "=" && expression !== "") {
    try {
      // Use Function constructor instead of eval for a slightly safer approach,
      // though still dynamic. For a simple calculator it's often used.
      // Replacing % with /100 as per original logic.
      const formattedExpression = expression.replace(/%/g, "/100");
      return String(new Function(`return ${formattedExpression}`)());
    } catch {
      return "Error";
    }
  } else if (btnValue === "AC") {
    return "";
  } else if (btnValue === "DEL") {
    return expression.slice(0, -1);
  } else {
    if (expression === "" && specialChars.includes(btnValue)) return expression;
    return expression + btnValue;
  }
};
