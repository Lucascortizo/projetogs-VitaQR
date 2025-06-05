import logo from '../images/Logo-VitaQR.png';

const Nav = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto flex items-center p-4">
        <img src={logo} alt="Logo VitaQR" className="h-12 mr-3" />
        <span className="font-bold text-2xl text-gray-900">VitaQR</span>
      </div>
    </nav>
  );
};

export default Nav;
