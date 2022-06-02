
import Link from 'next/link';

import withTheme from 'utils/hocs/withTheme';

const MenuItemLink = React.forwardRef(({
  theme,
  href,
  as,
  children,
  selected,
  ...rest
}, ref) => (
  <>
    <Link
      href={href}
      as={as}
      passHref>
      <a
        ref={ref}
        {...rest}>
        {children}
      </a>
    </Link>
    <hr />
    <style jsx>{`
      a {
        outline: none;
        display: block;
        margin-top: 10px;
        margin-bottom: 0.5rem;
        font-size: 15px;
        font-weight: ${theme.typography.fontWeightBold};
        line-height: 1;
        color: ${selected ? 'var(--palette-secondary-main)' : 'var(--palette-primary-main)'};
        border-radius: 10px;
        padding: 10px;
      }

      a:hover {
        background-color: #000000;
      }

      hr {
        height: 1px;
        background: transparent;
        color: transparent;
      }
    `}</style>
  </>
));

export default withTheme(MenuItemLink);
