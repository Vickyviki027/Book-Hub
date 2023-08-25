import './index.css'

const bookshelvesList = [
  {
    id: '22526c8e-680e-4419-a041-b05cc239ece4',
    value: 'ALL',
    label: 'All',
  },
  {
    id: '37e09397-fab2-46f4-9b9a-66b2324b2e22',
    value: 'READ',
    label: 'Read',
  },
  {
    id: '2ab42512-3d05-4fba-8191-5122175b154e',
    value: 'CURRENTLY_READING',
    label: 'Currently Reading',
  },
  {
    id: '361d5fd4-9ea1-4e0c-bd47-da2682a5b7c8',
    value: 'WANT_TO_READ',
    label: 'Want to Read',
  },
]

const SideBar = props => {
  const {tabId, changeTab} = props

  const onClickTab = event => {
    const activeTab = event.target.textContent
    changeTab(activeTab)
  }
  return (
    <div className="side-bar-container">
      <nav>
        <div className="list">
          {bookshelvesList.map(eachContent => {
            const isClicked =
              eachContent.id === tabId ? 'active_text' : 'normal_text'

            return (
              <button
                onClick={onClickTab}
                className={isClicked}
                key={eachContent.label}
                type="button"
              >
                {eachContent.label}
              </button>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
export default SideBar
