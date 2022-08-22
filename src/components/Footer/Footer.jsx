import PropTypes from 'prop-types';
import css from './Footer.module.css';

export default function Footer({ name, href = '#' }) {
  return (
    <footer className={css.footer}>
      <p>
        &copy; 2022&nbsp;
        {name && (
          <a
            className={css.footer__link}
            href={href}
            target="_blank"
            rel="noopener noreferrer nofollow"
            title={name + '`s github'}
          >
            {name}
          </a>
        )}
      </p>
    </footer>
  );
}

Footer.propTypes = {
  name: PropTypes.string,
  href: PropTypes.string,
};
