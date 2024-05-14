



// Creates Specification Table
function Table(Props){

    return (
       <tbody>
            
            {Object.keys(Props.Spec).map(key => (

                <tr key = {key}>
                    <td>{key}</td>
                    <td>{Props.Spec[key][0]}</td>
                </tr>
                
            ))}
       </tbody>
    )

}

// Return Component
function Specification(Props){
    
    return (
        <table className="Spec">
            <Table Spec = {Props.Spec}/>
        </table >
    )

}

export default Specification