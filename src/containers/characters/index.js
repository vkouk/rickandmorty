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
  padding: 1rem;
`

const CharactersPage = () => {
  const [currentPage, setCurrentPage] = useState(
    localStorage.getItem('currentPage') || 1
  )
  const { loading, error, data } = useQuery(`/character?page=${currentPage}`)
  const navigate = useNavigate()

  if (error)
    return (
      <Container justifyContent="center" alignItems="center">
        {error}
      </Container>
    )
  if (loading) return <Loader />

  const onPrevPage = () =>
    setCurrentPage((currentPage) => {
      const newCurrentPage = +currentPage - 1
      localStorage.setItem('currentPage', newCurrentPage)

      return newCurrentPage
    })

  const onNextPage = () =>
    setCurrentPage((currentPage) => {
      const newCurrentPage = +currentPage + 1
      localStorage.setItem('currentPage', newCurrentPage)

      return newCurrentPage
    })

  return (
    <Container column scrollable justifyContent="space-between">
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
        onPrevPage={onPrevPage}
        onNextPage={onNextPage}
        isPrevPageDisabled={!data.info.prev}
        isNextPageDisabled={!data.info.next}
      />
    </Container>
  )
}

export default CharactersPage
