import React from 'react'
import '../Land page/firstpage.css'

function Team() {
  return<>
  <h2 className='title'>Team Members</h2>
  <div className="team-container">
  <figure className="snip1390">
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg" alt="profile-sample3" className="profile" />
  <figcaption>
    <h2>Eleanor Crisp</h2>
    <h4>Full Stack Developer
</h4>
    <blockquote>Dad buried in landslide! Jubilant throngs fill streets! Stunned father inconsolable - demands recount!</blockquote>
  </figcaption>
</figure>
<figure className="snip1390 hover"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg" alt="profile-sample5" className="profile" />
  <figcaption>
    <h2>Gordon Norman</h2>
    <h4>DevOps Programmer</h4>
    <blockquote>Wormwood : Calvin, how about you? Calvin : Hard to say ma'am. I think my cerebellum has just fused. </blockquote>
  </figcaption>
</figure>
<figure className="snip1390"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg" alt="profile-sample6" className="profile" />
  <figcaption>
    <h2>Sue Shei</h2>
    <h4>CyberSecurity Experts</h4>
    <blockquote>The strength to change what I can, the inability to accept what I can't and the incapacity to tell the difference.</blockquote>
  </figcaption>
</figure>
</div>
  </>
}

export default Team