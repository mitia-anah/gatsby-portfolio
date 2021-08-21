const photographUrl = 'https://photograf.netlify.app/';
const memo = '';
export const Photograph = () => {
  return (
    <div>
      <a href={photographUrl}>
        <span>Check the website here</span>
      </a>
      <button>
        <a href={memo}>Memo</a>
      </button>
    </div>
  );
};
