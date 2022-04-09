import { GiCarousel as icon } from 'react-icons/gi'

export default {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    icon,
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string',
            initialValue: 'Site Settings',
            hidden: true,
            readOnly: true
        },
        {
            name: 'carouselItems',
            title: 'Carousel Patterns',
            description: 'Select up to five patterns to feature on the home page\'s carousel. The order they appear in this list will be the order the patterns will be placed on the carousel.',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'pattern' }] }],
            validation: Rule => Rule.required().unique().min(1).max(5)
        }
    ]
}