import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import { Link } from 'react-router-dom';

const Bookmarks = ({ booked, onBookedClicked }) => {
  return (
    <li className="nav__item">
      <button
        className="nav__btn nav__btn--bookmarks"
        style={{ color: booked ? '#65140b' : '#f59a83' }}
      >
        <BookmarkBorderOutlinedIcon className="nav_icons" />
        <span>Bookmarks</span>
      </button>
      <div className="bookmarks">
        <ul className="bookmarks__list">
          {booked.length === 0 && (
            <div className="message">
              <div>
                <WarningAmberRoundedIcon className="nav_icons" />
              </div>
              <p>
                No bookmarks yet. Find a nice recipe and bookmark it
                :)
              </p>
            </div>
          )}

          {booked.length > 0 &&
            booked.map((b) => {
              return (
                <li
                  className="preview"
                  key={b.id}
                  onClick={() => onBookedClicked(b.id)}
                >
                  <Link className="preview__link" href="#23456">
                    <figure className="preview__fig">
                      <img src={b.image_url} alt="Test" />
                    </figure>
                    <div className="preview__data">
                      <h4 className="preview__title">{b.title}</h4>
                      <p className="preview__publisher">
                        {b.publisher}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </li>
  );
};

export default Bookmarks;
