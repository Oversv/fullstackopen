
const FilterCountries = ({filterCountries, handle}) => {
    return (
        <form>
            <label>
                find countries
                <input type="search" value={filterCountries} onChange={handle}/>
            </label>
        </form>
    )
}

export default FilterCountries
