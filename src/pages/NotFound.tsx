import { MainTemplate } from "../templates/MainTemplate";

export function NotFound() {
  return (
    <MainTemplate>
      <div className="flex flex-col items-center gap-4 max-w-5xl mx-auto">
        <h1 className="text-4xl">Página não encontrada :(</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          libero animi maiores dolorem quas voluptatum hic magni blanditiis
          voluptates eius. Tenetur sint deserunt molestiae voluptas libero. Vel
          aspernatur necessitatibus debitis.
        </p>
      </div>
    </MainTemplate>
  );
}
