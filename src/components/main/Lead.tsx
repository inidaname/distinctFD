function Lead({page}: {page: string}): JSX.Element {

  fetch(`https://picsum.photos/v2/list?page=1&limit=2`)
  .then(res => res.json())
  .then(respo => console.log(respo))

  return (
    <section>
      Leads for most pages {page}
    </section>
  )
}

export default Lead