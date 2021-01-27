const sleep_st = (t) => new Promise((resolve, reject) => setTimeout(resolve, t));
const sleept_im = () => new Promise((resolve, reject) => setImmediate(resolve));

(
  async () => {
    setTimeout( () => console.log(1), 0);
    console.log(2);
    await sleep_st(0);
    setImmediate( () => console.log(3) );
    console.log(4);
    await sleept_im();
    setImmediate( () => console.log(5) );
    console.log(6);
    await 1;
    setImmediate( () => console.log(7) );
    console.log(8);
  }
)();
