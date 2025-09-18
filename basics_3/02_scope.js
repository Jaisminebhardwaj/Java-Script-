//browser mein scope check kroge alg ayega and terminal m alag
if(true) {
    const a = 30; // (global)function-scoped variable
    let b = 40; // block-scoped variable
    var c = 50; //it's accessible anywhere within the function it's declared in, regardless of where it's placed
}
// console.log(a);
// console.log(b);
console.log(c);