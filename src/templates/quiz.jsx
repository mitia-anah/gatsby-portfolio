const quizUrl = 'https://country-quizzz.netlify.app/';
const memo = '';
export const Quiz = () => {
  return (
    <div>
      <a href={quizUrl}>
        <span>Check the website here</span>
      </a>
      <button>
        <a href={memo}>Memo</a>
      </button>
    </div>
  );
};
