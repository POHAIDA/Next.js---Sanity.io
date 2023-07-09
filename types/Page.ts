import { PortableTextBlock } from "sanity";

export type Page = {
    _id: string;
    _createAt: Date;
    title: string;
    slug: string;
    content: PortableTextBlock[];
     broker: {
        name: string;
        name1: string;
        name2: string;
        name3: string;
    };
}
