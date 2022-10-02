
import './App.css';

function App() {
  return (
    <div >
      <header>
        <nav>
            <a href="index.html" className="EDYODA-LOGO"> 
            <img src="https://classroom.edyoda.com/static/media/edyoda_transparent_logo.55bcc00f.png" alt="logo" width="180px" /></a>
            <a href="#" className="stories-logo">Stories</a>
            <a href="#" className="dropdown-text">Explore Categories<a><i className="fa-solid fa-chevron-down"></i></a></a>
           
        </nav>

        <div className="header-right">
            <span>Edyoda is free learning and knowledge <br/> sharing platform</span>
            <button className="header-button">Go To Main Website</button>
        </div>
      </header>
      <div className="post">
        <h2>Trending Posts</h2>
        <p className="para"><i className="fas fa-filter filter-icon"></i>Filter by Category</p>

        <div className="category">
          <button className="button-abc" >All</button>
          <button className="button" >Artificial Intelligence</button>
          <button className="button">Cloud Computing</button>
          <button className="button">DevOps</button>
          <button className="button">Programming Languages</button>
          <button className="button">Mobile Application Development</button>
          <button className="button">Technology and Tools</button>
          <button className="button">Get a Job in a Tech Company</button>
          <button className="button">Others</button>
        </div>
      </div>
      <section class="content">
        <section class="row">
            <div class="col-md-4">
                <div class="single-blog">
                    
                    <img alt="card1" src="https://edyoda.s3.amazonaws.com/media/blog-images/Data_Scientist_1920_1280_DsZBGZu.jpg"/>
                   
                    <div class="blog-content">
                        <h2>Typical day of Data Scientist - An insider story!</h2>
                        <p ><a href="#"class="blog-meta">Sourav Ghosh</a><span> | 05 july 2019</span></p>
                       
                        <p class="blog-text">
                            I’ve been a Data Scientist for three years now and I can only say that Chris Lynch was right - 
                            “ Big Data and Data Science are the foundation of all the trends that are emerging in the world...
                        </p>
                       
                    </div>
                    
                </div>
            </div>
    
    
            <div className="col-md-4">
                <div className="single-blog">
                    <img alt="card1" src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg"/>
        
                    <div className="blog-content">
                        <h2>Introducing you all to EdYoda - www.edyoda.com</h2>
                        <p ><a href="#" class="blog-meta">Arman Ahmed</a> <span> | 05 july 2019</span></p>
                        <p className="blog-meta-1">  </p>
                        <p className="blog-text">
                            Really ecstatic and immensely proud to introduce you all to our latest attempt of 
                            adding value and making an impact to the world we are a part of Introducing you all to EdYoda....
                        </p>
                       
                    </div>
                    
                </div>
            </div>
    
            
            <div className="col-md-4">
                <div className="single-blog">
                    <img alt="card1" src="https://edyoda.s3.amazonaws.com/media/blog-images/cloud-meetup-edyoda-small_b2EXhBe.jpg"/>
                
                    <div className="blog-content">
                        <h2>edYoda Meetup #01 : A Date with Cloud</h2>
                        <p><a href="#" className="blog-meta"> Ashish Pandey</a> <span> | 05 july 2019</span></p>
                        <p className="blog-text">
                            I recently had the opportunity to lead the initiative to organize the first Cloud meetup for edYoda. Here, 
                            I recount my experience in organizing the very first in the series of meetups planned by...
                        </p>
                       
                    </div>
                    
                </div>
            </div>
        </section>
    
     <section className="row">
         <div className="col-md-4">
             <div className="single-blog">
                 
                 <img alt="card1" src="https://edyoda.s3.amazonaws.com/media/blog-images/practical_machine_learning_1.png"/>
                
                 <div className="blog-content">
                     <h2>Practical Machine Learning with Python and Keras</h2>
                     <p ><a href="#"className="blog-meta">Edyoda</a><span> | 05 july 2019</span></p>
                    
                     <p className="blog-text">
                         I’ve been a Data Scientist for three years now and I can only say that Chris Lynch was right - 
                         “ Big Data and Data Science are the foundation all the trends that are emerging in the world...
                     </p>
                    
                 </div>
                 
             </div>
         </div>
 
 
         <div className="col-md-4">
             <div className="single-blog">
                 <img alt="card1" src="https://edyoda.s3.amazonaws.com/media/blog-images/what_is_isa_blog_1.png" />
     
                 <div className="blog-content">
                     <h2>What is Income Share Agreement?</h2>
                     <p ><a href="#" className="blog-meta">Edyoda</a> <span> | 05 july 2019</span></p>
                     <p class="blog-meta-1">  </p>
                     <p class="blog-text">
                         Really ecstatic and immensely proud to introduce you all to our latest attempt of 
                         adding value and making an impact to the world we are a part of Introducing you all to EdYoda....
                     </p>
                    
                 </div>
                 
             </div>
         </div>
 
         
         <div className="col-md-4">
             <div className="single-blog">
                 <img alt="card1" src="https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview-2.png"/>
             
                 <div className="blog-content">
                     <h2>What is Web Scraping?</h2>
                     <p><a href="#" class="blog-meta"> Edyoda</a> <span> | 05 july 2019</span></p>
                     <p className="blog-text">
                         I recently had the opportunity to lead the initiative to organize the first Cloud meetup for edYoda. Here, 
                         I recount my experience in organizing the very first in the series of meetups planned by...
                     </p>
                    
                 </div>
                 
             </div>
         </div>
           
           
  
        </section>
      </section>
      <section class="footer"></section>

        
    
    </div>
  );
}

export default App;
