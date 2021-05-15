import "./skills.scss"
import {skills} from '../../data'


export default function Skills() {
    return (
        <div className="skills" id="skills">
                <h1>Skills</h1>
                    <div className="container">
                    {skills.map((skill) =>(
                        <div className="item">
                            <img 
                                src={skill.img} 
                                alt={skill.title} 
                            />
                        </div>
                    ))} 
            </div>
        </div>
    )
}
