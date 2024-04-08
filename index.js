
// const root = document.getElementById('root');

// const p = document.createElement('p');

// p.innerText = "Hello from Ellis part 5";

// root.appendChild(p);

const child1 = React.createElement('p', {}, "I am a child1");
const child2 = React.createElement('p', {}, "I am a child2");
const div = React.createElement('div', { className: 'text' }, child1);
const div2 = React.createElement('div', { className: 'text' }, div);
// const div = <div className="text">hello 2</div>
console.log(div2);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div2);