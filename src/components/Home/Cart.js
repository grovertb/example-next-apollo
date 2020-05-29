import styled from 'styled-components'

export const CartContent = styled.div({
  maxWidth: 400
})

export const CartContentInput = styled.div({
  display     : 'flex',
  marginBottom: 12
})

export const CartEmpty = styled.div({
  flex      : 1,
  display   : 'flex',
  textAlign : 'center',
  alignItems: 'center'
})

export const CartListContent = styled.div({
  width     : 350,
  height    : 400,
  background: 'white',
  display   : 'flex'
})

export const CartDetailContent = styled.div({
  '& > *': {
    '&:not(:last-child)': {
      marginBottom: 8
    }
  },
  display      : 'flex',
  flexDirection: 'column',
  alignItems   : 'center'
})

export const CartDetail = styled.div({
  background: 'white',
  width     : 300,
  padding   : 12
})

export const CartDetailItem = styled.div({
  display        : 'flex',
  justifyContent : 'space-between',
  lineHeight     : 1.5,
  margin         : '4px 0px',
  backgroundColor: ({ actived }) => actived ? '#ffe200' : 'initial'
})
