import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import useQuery from 'hooks/useQuery'

import {
  Container,
  Image,
  Text,
  Header
} from 'containers/character/index.styles'
import { Grid } from 'presenters/atoms/grid'
import Button from 'presenters/atoms/button'
import Loader from 'presenters/molecules/loader'

const CharacterPage = () => {
  const navigate = useNavigate()
  const params = useParams()

  const { loading, error, data } = useQuery(`/character/${params.characterId}`)

  const episodeCodes = data
    ? data.episode
        .map((episodeUrl) => episodeUrl.split('/episode/').pop())
        .join(',')
    : []
  const {
    loading: episodeLoading,
    error: episodeError,
    data: episodeData
  } = useQuery(`/episode/${episodeCodes}`, {
    skip: episodeCodes.length === 0
  })
  const {
    loading: locationLoading,
    error: locationError,
    data: locationData
  } = useQuery(`/location?name=${data?.origin?.name}`, {
    skip: !data
  })

  const isLoading = loading || episodeLoading || locationLoading
  const errorMessage = error || episodeError || locationError

  if (errorMessage)
    return <Container justifyContent="center">{errorMessage}</Container>
  if (isLoading) return <Loader />

  const episodeEntities = Array.isArray(episodeData)
    ? episodeData
    : [episodeData]

  return (
    <Container column>
      <Header>
        <Image src={data.image} alt={data.name} />
        <Grid alignItems="center" justifyContent="center" margin="0.5rem 0">
          <Text appendSlash margin="0 0.5rem">
            Name: {data.name}
          </Text>
          <Text appendSlash margin="0 0.5rem 0 0">
            Gender: {data.gender}
          </Text>
          <Text textTransform="capitalize" appendSlash margin="0 0.5rem 0 0">
            Origin: {data.origin.name}
          </Text>
          <Text textTransform="capitalize" appendSlash margin="0 0.5rem 0 0">
            Dimension: {locationData.results[0].dimension}
          </Text>
          <Text appendSlash margin="0 0.5rem 0 0">
            Location Type: {locationData.results[0].type}
          </Text>
          <Text appendSlash margin="0 0.5rem 0 0">
            Residents Amount: {locationData.results[0].residents.length}
          </Text>
          <Text>Species: {data.species}</Text>
        </Grid>
      </Header>
      <Grid
        column
        scrollable
        margin="1rem 0"
        width="100%"
        height="100%"
        alignItems="center"
      >
        <Text textTransform="uppercase" margin="0" weight={700}>
          Episodes featured:
        </Text>
        <Grid column width="100%" alignItems="center" margin="0.5rem 0 0 0">
          {episodeEntities.map((episode) => (
            <Text key={episode.id}>{episode.name}</Text>
          ))}
        </Grid>
      </Grid>
      <Grid width="100%" margin="auto 0 auto 0" justifyContent="flex-start">
        <Button onClick={() => navigate('/')}>Return to characters</Button>
      </Grid>
    </Container>
  )
}

export default CharacterPage
