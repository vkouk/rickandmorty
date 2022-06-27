import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import useQuery from 'hooks/useQuery'

import { GridContainer, Grid } from 'presenters/atoms/grid'
import Card from 'presenters/molecules/card'
import Pagination from 'presenters/molecules/pagination'
import Loader from 'presenters/molecules/loader'

const Container = styled(Grid)`
  height: 100%;
  overflow-y: auto;
  padding: 1rem;
`

const CharactersPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { loading, error, data } = useQuery(`/character?page=${currentPage}`)
  const navigate = useNavigate()

  if (error) return <Container>{error}</Container>
  if (loading) return <Loader />

  return (
    <Container column justifyContent="space-between">
      <GridContainer>
        {data.results.map((character) => (
          <Card
            key={character.id}
            onClick={() => navigate(`character/${character.id}`)}
          >
            <Card.Image src={character.image} alt={character.name} />
            <Card.Body>
              <Card.Text>Name: {character.name}</Card.Text>
              <Card.Text textTransform="capitalize">
                Gender: {character.gender}
              </Card.Text>
              <Card.Text>Species: {character.species}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </GridContainer>
      <Pagination
        onPrevPage={() => setCurrentPage((currentPage) => currentPage - 1)}
        onNextPage={() => setCurrentPage((currentPage) => currentPage + 1)}
        isPrevPageDisabled={!data.info.prev}
        isNextPageDisabled={!data.info.next}
      />
    </Container>
  )
}

export default CharactersPage
