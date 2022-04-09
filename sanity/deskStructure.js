import S from '@sanity/desk-tool/structure-builder'
import { FiSettings as icon } from 'react-icons/fi'

export default () =>
  S.list()
  .title('Base')
  .items([
    S.listItem()
      .title('Site Settings')
      .icon(icon)
      .child(
        S.document()
        .schemaType('siteSettings')
        .documentId('siteSettings')
      ),
      ...S.documentTypeListItems().filter(listItem => !['siteSettings'].includes(listItem.getId()))
  ])