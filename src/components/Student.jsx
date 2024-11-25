
import Grade from "./Grade";
import Tag from './General/Tag'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faBookOpen, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

function Student({ student }) {

    const colorVariants = {
        violet: 'bg-violet-100',
        amber: 'bg-amber-100',
    }


    function colorByCourse(course) {
        const LC = course.toLowerCase();
        if (LC === 'data science') {
            return 'violet';
        } else if (LC === 'web development') {
            return 'amber';
        }
    }


    return (
        <div className="px-2 py-2 rounded-xl bg-white">

            <div className={`${student.graduate ? colorVariants['amber'] : colorVariants['violet']} rounded-xl px-2 py-2`}>




                {/* Course Tag  & Grade*/}
                <div className="flex justify-between">
                    <Tag text={student.course} color={colorByCourse(student.course)} /><Grade gpa={student.gpa} />
                </div>

                {/* Course Tag */}
                <div className="text-lg font-semibold mt-16">
                    {student.graduate ? 'Graduate' : 'Student'}
                </div>

                {/* Location */}
                <p className=" text-sm flex items-center ">
                    <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                    {student.city}
                </p>
            </div>
            <div className="w-full px-2 py-2">
                {/* Name & Age */}
                <div className="font-semibold text-2xl">
                    {student.firstName} {student.lastName}, <span className="text-gray-500">{student.age}</span>
                </div>

            </div>

        </div >
    )
}

export default Student;