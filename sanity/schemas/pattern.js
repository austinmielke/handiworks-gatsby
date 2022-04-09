import { GiYarn as icon } from 'react-icons/gi'

export default {
    title: 'Patterns',
    name: 'pattern',
    type: 'document',
    icon,
    fields: [{
        title: 'Pattern Name',
        name: 'name',
        type: 'string',
        validation: Rule => Rule.required()
    },
    {
        title: 'Pattern Slug',
        name: 'slug',
        type: 'slug',
        validation: Rule => Rule.required(),
        options: {
            source: 'name',
            maxLength: 100
        }

    },
    {
        title: 'Publish Date',
        name: 'publishDate',
        type: 'date',
        options: {
            dateFormat: 'M/D/YY'
        },
        validation: Rule => Rule.required(),
    },
    {
        title: 'Pattern Image',
        name: 'image',
        type: 'image',
        options: 
        {
            hotspot: true
        }
    },
    {
        title: 'Pattern Description',
        name: 'description',
        type: 'text'
    },
    {
        title: 'Ravelry URL',
        name: 'url',
        type: 'url'
    }],
    preview:{
        select: {
            title: 'name',
            subtitle: 'publishDate'
        },
        prepare: ({ title, subtitle }) => {
            const newDate = new Date(subtitle)
            newDate.setDate(newDate.getDate() + 1)
            return {
              title,
              subtitle: `Published ${newDate.toLocaleDateString('en-us', {year:'numeric', month:'numeric', day:'numeric'})}`,
            };
          }
    },
    orderings: [
        {
            title: 'Publish Date',
            name: 'publishDateDesc',
            by: [
                {field: 'publishDate', direction: 'desc'}
            ]
        }
    ]
}