import { useQuery } from '@apollo/client'
import { GET_ALL_CHARACTERS } from './queries'
import Card from './Card'

const App = () => {
  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS, {
    variables: { page: 1 }
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error {error.message}</p>

  return (
    <>
      <header>
        <h1 className={"text-center m-3"}>Rick and Morty GraphQL App</h1>
      </header>
      <div className={"m-auto grid md:grid-cols-4 gap-6 p-20"}>
        {data?.characters?.results.map(character =>
          <Card character={character} key={character.id} />
        )}
      </div>
    </>

  )
}

export default App
