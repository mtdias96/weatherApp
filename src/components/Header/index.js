import logo from './Logo.svg';
import { Logo } from './styles';

export default function Header() {
  return (
    <Logo>
      <img src={logo} alt="logo weather" />
    </Logo>
  );
}
