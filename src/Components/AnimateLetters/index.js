import "./index.scss"
// idx is the startig index
const AnimateLetters = ({ letterClassname, charArray, idx }) => {
  
    return (
    <span>
      {
        charArray.map((char,i)=>(
            <span key={char+i} className={`${letterClassname} _${i+idx}`}>
                {char}
            </span>
        ))
      }
    </span>
  );
};

export default AnimateLetters;
