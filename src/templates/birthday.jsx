const birthdayUrl = 'https://birthday-lists.netlify.app/';
const memo = '';
export const Birthday = () => {
  return (
    <div>
      <a href={birthdayUrl}>
        <span>Check the website here</span>
      </a>
      <button>
        <a href={memo}>Memo</a>
      </button>
    </div>
  );
};
