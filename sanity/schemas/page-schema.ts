const page = {
    name: 'page',
    title: 'Pages',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength:96,
            }
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of:[{type:'block'}],
        },
        {
            name: 'broker',
            title: 'broker',
            type: 'object',
            fields: [
                {
                    name:"name",
                    title: 'name',
                    type:'string',
                },
                {
                    name:"name1",
                    title: 'name1',
                    type:'string',
                },
                {
                    name:"name2",
                    title: 'name2',
                    type:'string',
                },
                {
                    name:"name3",
                    title: 'name3',
                    type:'string',
                },
                
            ]
        }
    
    ]
}

export default page