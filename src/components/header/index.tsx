import * as React from 'react';
// import { Route, Switch } from 'react-router';
// import { BrowserRouter } from 'react-router-dom';
// import Home from '../containers/home';
// import Example from '../containers/Example';
import logo_blue from '../../assets/images/board_infinity_logo.png';
import logo_white from '../../assets/images/board_infinity_logo_white.png';
import login_icon from '../../assets/images/login_icon.png';
import clientals from '../../assets/images/mobile-view-icons/Asset-1.png';
import coaching from '../../assets/images/mobile-view-icons/Asset-2.png';
import browse_jobs from '../../assets/images/mobile-view-icons/Asset-3.png';
import learning from '../../assets/images/mobile-view-icons/Asset-4.png';
import login from '../../assets/images/mobile-view-icons/Login-sign.png';
import logout from '../../assets/images/mobile-view-icons/Log-out-sign.png';
import SideNav_board_logo from '../../assets/images/sideNav_board_logo.png';

interface IHeaderState {
  navCssClassName: string;
  image: string;
  navDisplay: boolean;
}

export default class Header extends React.Component<{}, IHeaderState> {
  constructor(props: {}) {
    // this.showSideNav = false;
    super(props);
    this.state = {
      navCssClassName: 'header__top',
      image: logo_white,
      navDisplay: false
    };
  }
  public openNav = () => {
    // document.body.classList.toggle('sidenav-active');
    // document.body.classList.toggle('noscroll');
    this.setState({ navDisplay: !this.state.navDisplay });
  }

  public listenScrollEvent = (e: Event) => {
    const clientHeight = window.innerHeight;
    let navCssClassName;
    let image;
    if (window.scrollY > clientHeight - 100) {
      navCssClassName = 'header__scroll';
      image = logo_blue;
    } else {
      navCssClassName = 'header__top';
      image = logo_white;
    }
    this.setState({ navCssClassName, image });
  }
  public componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  public render() {
    const navStyle = {
      display: this.state.navDisplay ? 'block' : 'none'
    };

    const { navCssClassName, image } = this.state;
    return (
      // <BrowserRouter>
      //   <Switch>
      //     <Route path='/' exact={true} component={Home} />
      //     <Route path='/example' exact={true} component={Example} />
      //   </Switch>
      // </BrowserRouter>
      <div>
        <div className='onlyDesktop'>
            <div className={`container-fluid header ${navCssClassName}`}>
                <div className='header__logo'>
                  <img src={image} alt='logo' />
                </div>
                <div className='header__links'>
                  <ul>
                    <li className='header_link'>BI World</li>
                    <li className='header_link'>Who do we connect?</li>
                    <li className='header_link'>Coaching & Training </li>
                    <li className='header_link'>Browse Jobs</li>
                    <li>
                      <button className='header__btn'>
                        <div className='header__btn__label'> Login </div>
                        <div> <img className='header__btn__icon' alt='btn' src={login_icon}/> </div>
                      </button>
                    </li>
                  </ul>
                </div>
            </div>
        </div>
        <div className='mobile-only'>
          <div className='sidenav ' style={navStyle}>
            <div className='sidenav__img-wrapper'>
              <img src={SideNav_board_logo} alt='board_logo' />
            </div>
            <ul>
              <li>
                <div className='flex__container'>
                  <div> <img src={clientals} alt='clientals_icon' /> </div>
                  <div> <a href=''>Our Clientals</a> </div>
                </div>
              </li>
              <li>
                <div className='flex__container'>
                  <div> <img src={coaching} alt='coaching_icon' /> </div>
                  <div> <a href=''>Coaching and Training</a> </div>
                </div>
              </li>
              <li>
                <div className='flex__container'>
                  <div> <img src={browse_jobs} alt='jobs_icon' /> </div>
                  <div> <a href=''>Browse Jobs </a> </div>
                </div>
              </li>
              <li>
                <div className='flex__container'>
                  <div> <img src={learning} alt='learning_icon' /> </div>
                  <div> <a href=''>Learning</a> </div>
                </div>
              </li>
              <li>
                <div className='flex__container'>
                  <div> <img src={login} alt='login_icon' /> </div>
                  <div> <a href=''>Login</a> </div>
                </div>
              </li>
            </ul>
          </div>
          <div className=' mobile__nav flex__container'>
            <div className='hamburger ' onClick={this.openNav}>
              &#9776;
            </div>
            <div className='mobile__nav-logo'>
              <img src={logo_white} alt='board_logo' />
            </div>
            <div className='mobile__nav-logout'>
              <img src={logout} alt='logout_icon' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
