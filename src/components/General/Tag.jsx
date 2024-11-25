
function Tag({ text, danger = false }) {

    return (
        <div className={`${danger ? 'text-white bg-red-400' : 'bg-white'} inline-flex items-center justify-center space-x-1 px-2 py-0.5 rounded-full text-sm`}>
            {text}
        </div>
    )
}

export default Tag;