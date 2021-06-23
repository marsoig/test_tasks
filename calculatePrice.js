function calculatePrice (items) {
  if (Object.keys(items).length==0) {
    return("Empty items list!");
  }
  for (let key in items) {
    let newPrice=Math.round(Number(items[key])*1.15);
    if ((newPrice % 5)>= 3) {
      newPrice += (5 - (newPrice % 5));
    } else {
      newPrice -= newPrice % 5;
    };
    items[key]=newPrice;
    return (items);
}}
