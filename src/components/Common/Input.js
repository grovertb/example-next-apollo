import styled from 'styled-components'

export default styled.input({
  width  : ({ fullWidth }) =>  fullWidth ? '100%' : '',
  padding: '8px 6px',
  border : '1px solid #dfdfdf'
})
