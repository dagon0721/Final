// export default async function Foo() {
//   let data = await fetch("https://api.vercel.app/blog");
//   let posts = await data.json();
//   return (
//     <ul>
//       {posts.map((post) => (
//         <li key={post.id}>
//           {post.id}. {post.title} .{post.date}
//         </li>
//       ))}
//     </ul>
//   );
// }
export default function Foo() {
  return (
    <div>
      <h1>foo 1</h1>
      <h1>foo 2</h1>
      <h1>foo 3</h1>
    </div>
  );
}
