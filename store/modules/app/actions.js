import navigationData from '~/data/navigation.json'

export default {
  async getData ({ commit }) {
    const data = await Promise.all(
      navigationData.topic.map(async handle => {
        const topic = await import(`~/data/topic/${handle}.json`)
        const categoryAndSubCategory = await Promise.all(
          topic.category.map(async handle => {
            const category = await import(`~/data/category/${handle}.json`)
            const subCategory = await Promise.all(
              category.subCategory.map(async handle =>
                await import(`~/data/subCategory/${handle}.json`)
              )
            )
            return { ...category, subCategory }
          })
        )
        return {
          ...topic,
          category: categoryAndSubCategory
        }
      })
    )
    commit('SET_DATA', { data })
  }
}
