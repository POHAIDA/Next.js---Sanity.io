import { getProject } from "@/sanity/sanity-utils";
import {PortableText} from '@portabletext/react'
import Image from "next/image";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;

  const project = await getProject(slug);

  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">
          {project.name}
        </h1>

        <a
          href={project.url}
          title="View Project"
          target="_blank"
          className="bg-blue-300 rounded-lg text-black font-bold py-3 px-4 whitespace-nowrap hover:bg-blue-400 hover:text-white transition"
        >
          View project
        </a>
      </header>

      {/* content goes here */}

      <div className="text-lg text-gray-700 mt-4">
        <PortableText value={project.content} />
      </div>

      {/* image goes here */}

          <Image
              src={project.image}
              alt={project.name}
              width={1920}
              height={800}
              className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
          />
    </div>
  );
}
