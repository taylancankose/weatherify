function generateRandomCoords(from, to, fixed) {
  return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
}

export default generateRandomCoords;
