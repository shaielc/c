const placehoders = ["Joe's room", 'Rock radio', "May's party"];

export default () => {
  const new_name = placehoders.pop();
  placehoders.unshift(new_name);
  return new_name;
};
