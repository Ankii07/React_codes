import Button from "./Button"
// ./ se usi folder mai search krega us folder se bahar jakr dekhna hoga to ../ krke krna hoga
import leftArrow from "../assets/images/left_arrow.png"
import RightArrow from "../assets/images/right_arrow.png"
import AppleBasket from "./AppleBasket"

import './AppleCounter.css'
const AppleCounter = () => {
  return (
    <section>
    <AppleBasket appleCount={10} basketName="Basket 1" />
    <Button imageUrl={leftArrow} title="left_Arrow"/>
    <Button imageUrl={RightArrow} title="Right_Arrow"/>
    <AppleBasket appleCount={0} basketName="Basket 2" />
    </section>
  )
}

export default AppleCounter