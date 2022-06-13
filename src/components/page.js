import './page.css'
import Header from './header'
function Page() {
  return(
    <div className='page'>
      <Header />
      <h1> Reasons Im excited for React</h1>
       <ol>
          <li>It's a popular library, so I'll be
          able to fit in with the cool kids!</li>
          <li>I'm more likely to get a job as a developer
          if I know React</li>
        </ol>
        <footer>
          <small>© 2022 Lafon development. All rights reserved. </small>
        </footer>
    </div>
  );
};

export default Page
