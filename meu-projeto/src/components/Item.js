import ProTypes from 'prop-types'

function Item({marca, ano_lancamento}) {
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

Item.propTypes = {
    marca: ProTypes.string.isRequired,
    ano_lancamento: ProTypes.number,
}

Item.defaultProps = {
    marca: 'Faltou a maraca',
    ano_lancamento: 0,
}

export default Item