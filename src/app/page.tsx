import Image from "next/image";

export default function Home() {
  return (
    <div className="container flex">
      <div className="w-1/2">
        <h2 className="text-2xl font-bold">Yuta Miura</h2>
        <p>開発者</p>
        <h3 className="text-xl mt-4">skills</h3>
        <h4 className="text-lg mt-2">言語・フレームワーク等</h4>
        <ul className="list-disc list-inside">
          <li>Java</li>
          <li>React</li>
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Python3</li>
          <li>MySQL</li>
          <li>PostgreSQL</li>
          <li>Docker</li>
          <li>Git</li>
          <li>GitHub</li>
        </ul>
      </div>
      <aside className="w-1/2">
        <div id="menu">
          <div id="left">
            <h3>cat</h3>
            <Image src="https://yuta.p-codes.dev/public_image/reo.jpg" alt="reo" height={300} width={300} />
            <Image src="https://yuta.p-codes.dev/public_image/left.jpg" alt="left" height={300} width={300} />
          </div>
        </div>
      </aside>
    </div>
  );
}
