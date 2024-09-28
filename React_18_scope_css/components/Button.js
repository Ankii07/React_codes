
// yha ke component mai props ke mode ki trah image ko bhejna hoga jo component mai use hoga
const  Button = ({imageUrl, ButtonName:Rename,clickHandler,children}) => {
  return (
    <button onClick={clickHandler} title={children}>
        {children}
        <img src={imageUrl} alt={children} />
    </button>
  )
}

export default Button
