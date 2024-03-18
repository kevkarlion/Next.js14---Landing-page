/* eslint-disable @next/next/no-img-element */
// import styles from './Description.module.sass'
import Image from 'next/image'

export const Description = ()=> {
    return (
        <section >

            {/* images/description 
            se encuentra dentro de Public. Por esto
            es posible llamar sin necesidad de la ruta 
            completa */}
            <Image src="/images/desc1.jpg" alt="products marketplace" width={600} height={600}/>
            <h2>Description</h2>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, voluptatibus quam? Sed, distinctio optio dolores, sunt tenetur facilis, pariatur minima est at esse explicabo consectetur qui dicta quis ipsum animi.
            </p>
        </section>
    )
} 