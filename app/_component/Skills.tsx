
import Skillstyle from './Skillstyle'
import SkillChildrenStyle from './SkillChildrenStyle'
const Skills = () => {
 
  return (
    <div className='w-full my-5 flex justify-center items-center border 
     border border-red-700
    '>
      <div>
        <Skillstyle heading={'BASIC WEB DEVELOPMENT'}>
        <SkillChildrenStyle img={'/skillicons/html.png'} name={'HTML'}></SkillChildrenStyle>
        <SkillChildrenStyle img={'/skillicons/css.png'} name={'CSS'}></SkillChildrenStyle>
      </Skillstyle>
      <Skillstyle heading={'PROGRAMMING LANGUAGE'}>
        <SkillChildrenStyle img={'/skillicons/java.png'} name={'JAVA'}></SkillChildrenStyle>
        <SkillChildrenStyle img={'/skillicons/javascript.png'} name={'JAVASCRIPT'}></SkillChildrenStyle>
      </Skillstyle>
      <Skillstyle heading={'FRAMEWORKS AND LIBRARIES'}>
        <SkillChildrenStyle img={'/skillicons/react.png'} name={'REACT.JS'}></SkillChildrenStyle>
        <SkillChildrenStyle img={'/skillicons/nextjs.png'} name={'NEXT.JS'}></SkillChildrenStyle>
        <SkillChildrenStyle img={'/skillicons/tailwind.png'} name={'TAILWIND'}></SkillChildrenStyle>
      </Skillstyle>
      <Skillstyle heading={'DATABASES'}>
        <SkillChildrenStyle img={'/skillicons/mongodb.png'} name={'MONGODB'}></SkillChildrenStyle>
      </Skillstyle>
      <Skillstyle heading={'VERSION CONTROL'}>
        <SkillChildrenStyle img={'/skillicons/github.png'} name={'GITHUB'}></SkillChildrenStyle>
      </Skillstyle>

    </div>
    </div >
  )
}

export default Skills