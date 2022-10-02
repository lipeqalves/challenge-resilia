export const TR =(props) =>{
    return(
    <tr>
        <td>{props.id}</td>
        <td>{props.nome}</td>
        <td>{props.turma}</td>
        <td>{props.idade}</td>
      </tr>
    )
}