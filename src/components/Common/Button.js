import styled from 'styled-components'

export default styled.button({
  padding        : '8px 4px',
  border         : '1px solid #e1e2e2',
  color          : ({ disabled }) => disabled ? 'initial' : 'white',
  backgroundColor: ({ disabled }) => disabled ? '#f7f7f7' : '#ff7f00',
  width          : ({ fullWidth, width = '' }) =>  fullWidth ? '100%' : width,
  height         : ({ height }) => height,
  cursor         : 'pointer',
  outline        : 'none',
  borderRadius   : ({ rounded }) => rounded ? '50%' : ''
})
