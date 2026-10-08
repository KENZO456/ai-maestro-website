import { Link } from 'react-router-dom';
import { BOOKING_URL } from '../lib/config';

// All booking CTAs go through here so they share one URL.
export function BookLink({ children, ...rest }) {
  if (/^https?:\/\//.test(BOOKING_URL)) {
    return <a href={BOOKING_URL} {...rest}>{children}</a>;
  }
  return <Link to={BOOKING_URL} {...rest}>{children}</Link>;
}
