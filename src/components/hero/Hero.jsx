import React from 'react'
import css from './Hero.module.scss';
import { motion } from 'framer-motion'
import { fadeIn, slideIn, staggerContainer } from '../../utils/motion';

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
        <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}    
        className={`innerWidth ${css.container}`}>

            {/*  upper elements */}
            <div className={css.upperElements}>
                <motion.span 
                variants={fadeIn("right", "tween", 0.4, 1)}
                className='primaryText'>


                    Hey There, I'm <br /> Ghulam Muhammad.
                </motion.span>
                    <motion.span className='secondaryText'
                    variants={fadeIn("left", "tween", 0.4, 1)}>
                        I Design and Develop Beautiful,
                        <br />
                        Stunning and Functional Websites
                    </motion.span>
            </div>

            {/* person image */}
            <motion.div 
            variants={fadeIn("up", "tween", 0.3, 1)}
            className={css.person}>
                <motion.img 
                variants={slideIn("up", "tween", 0.5, 1.3)}
                src="./person.png" alt="" />
            </motion.div>

            {/* email */}
            <a className={css.email} href="mailto: gljamali786@gmail.com">
                gljamali786@gmail.com
            </a>

            {/* lower elements */}
            <div className={css.lowerElements}>
                <motion.div 
                variants={fadeIn("right", "tween", 0.3, 1)}
                className={css.experience}>
                    
                    <div className='primaryText'>04</div>
                    <div className='secondaryText'>
                        <div>Years</div>
                        <div>Experience</div>
                    </div>
                </motion.div>

                <motion.div 
                variants={fadeIn("left", "tween", 0.5, 1)}
                className={css.certificate}>
                    <img src="./certificate.png" alt="" />
                    <span>CERTIFIED PROFESSIONAL</span>
                    <span>WEB DESIGNER AND DEVELOPER</span>
                </motion.div>
            </div>
        </motion.div>
    </section>      
  )
}

export default Hero
