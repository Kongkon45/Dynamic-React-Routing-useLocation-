import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const Navigate = useNavigate();
  return (
    <div>
        <h1>contact page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis nihil, quos distinctio repellendus alias in iure officiis cupiditate illo, explicabo, perferendis temporibus perspiciatis eligendi molestias amet. Praesentium, tenetur?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsam iusto porro minus, quas, eveniet fugiat dolorem animi excepturi unde eius repellendus. Quidem eaque, repellat nulla reiciendis sed commodi sequi placeat earum neque ex non laboriosam obcaecati accusantium natus ipsam assumenda delectus sunt quae quibusdam? Cum ipsum a facere nesciunt dolores, nobis repellendus porro voluptatum officiis enim ratione, perspiciatis culpa illum vel. Atque, odio consequatur distinctio autem dolor nam, veniam dolores doloremque deserunt dolore praesentium laborum natus dolorum qui amet exercitationem mollitia culpa, possimus explicabo hic deleniti sunt. Enim laboriosam blanditiis fuga quam consectetur consequuntur, laudantium minima distinctio tempora consequatur?</p>
        <button onClick={()=>Navigate('/')}>Go to Home pages</button>
    </div>
  )
}

export default Contact