const printLeftTriangle = (rows) => {
  for (let i = 0; i < rows; i++) {
    let star = '';
    for (let j = 0; j < i + 1; j++) {
      star += '# ';
    }
    console.log(star);
  }
};
printLeftTriangle(5);
