const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];


  // write your code here
	function numberOfBooksRead(library) {
  let count = 0;

  for (let book in library) {
    if (library.hasOwnProperty(book) && library[book].hasOwnProperty("read") && library[book].read) {
      count++;
    }
  }

  return count;
}
};

// Do not change the code below

alert(numberOfBooksRead());
