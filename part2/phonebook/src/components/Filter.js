export const Filter = ({handleChange}) => {
    return (
        <form onSubmit={e => e.preventDefault()}>
            <label>filter shown with
                <input type="search" onChange={handleChange}/>
            </label>
      </form>
    )
}

export default Filter