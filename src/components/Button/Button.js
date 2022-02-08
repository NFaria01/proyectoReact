import Button from 'react-bootstrap/Button'

const Btn = ({ paddingRight, marginLeft, variant, label}) => {

return (
    <Button style={{variant, marginLeft, paddingRight}}>{label}</Button>
)
}

export default Btn