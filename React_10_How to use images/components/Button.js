
// yha ke component mai props ke mode ki trah image ko bhejna hoga jo component mai use hoga
const  Button = ({imageUrl, title}) => {
  return (
    <button title={title}>
        <img src={imageUrl} alt="button" />
    </button>
  )
}

export default Button
