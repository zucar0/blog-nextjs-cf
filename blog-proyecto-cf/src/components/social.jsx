import React from 'react'
// get our fontawesome imports
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDev } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Social = () => {
  return (
    <div className='links'>
      <section className='networks'>
         <ul className='list-social'>
            <li>
                <a href="https://github.com/zucar0" target='_blank'>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/enriquezalvarado/" target='_blank'>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
            </li>
            <li>
                <a href="https://dev.to/zucar0" target='_blank'>
                    <FontAwesomeIcon icon={faDev} />
                </a> 
            </li>
         </ul>
      </section>
    </div>
  )
}
