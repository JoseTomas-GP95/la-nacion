import { SidebarRight } from './SidebarRight'
import { Footer } from '../Footer'
export const ArticleCard = ({ articleList }) => {

  // filtrar por subtype 7
  const articleListBySubType = articleList.filter(article => article.subtype === '7')
  console.log(articleListBySubType)
  return (
    <div className='flex flex-col w-11/12'>
      <div className='bg-white w-11/12 flex'>
        <div className='w-11/12 flex flex-wrap'>
          <div className='flex flex-col'>
            <h2 className='pb-3 block text-3xl font-bold underline'>Acumulado Grilla</h2>
            <p className='text-blue-600'>Platos principales - Cerdo - Papas - Date un gustito - La familia</p>
          </div>

          <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 lg:py-12 sm:px-6 lg:max-w-7xl lg:px-1 flex flex-wrap'>
            <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8'>
              {articleListBySubType.map((article) => {
                const firstTenTags =  article.taxonomy.tags.slice(0, 10)
                const date = new Date(article.display_date)
                const options = { year: 'numeric', month: 'long', day: 'numeric' }
                const spanishDate = date.toLocaleString('es-ES', options)

                return (
                  <a key={article._id} href={article.website_url} className='group'>
                    <div className='w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8'>
                      <img
                        src={article?.promo_items?.basic?.url}
                        alt={article?.promo_items?.basic?.subtitle}
                        className='w-full h-full object-center object-cover group-hover:opacity-75'
                      />
                    </div>
                    <h3 className='font-bold mt-4 text-sm text-gray-700'>{article?.headlines?.basic}</h3>

                    <div className='flex flex-wrap'>
                      {
                        firstTenTags.map(tag => (
                          <small key={tag.slug} className='mx-1 text-[10px] p-2 rounded-full bg-gray-200 mt-2'>{tag.text}</small>
                        ))
                      }
                    </div>
                    <p className='text-xs text-gray-500 pt-3'>{spanishDate}</p>
                  </a>
                )
              })}
            </div>

            <div className='w-full flex justify-center'>
              <button className='hover:bg-blue-500 border-2 border-blue-500 rounded bg-transparent p-3 font-bold text-xs text-blue-600 hover:text-white'>MÁS NOTAS DE ACUMULADO GRILLA</button>
            </div>
          </div>
        </div>


        <div className='ml-10 bg-[#a0dbe9] h-screen w-3/12'>
          <SidebarRight />
        </div>
      </div>
        <div className='bg-red-400'>
          <Footer />
        </div>
    </div>
    
  )
}
