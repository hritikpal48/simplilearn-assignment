'use client'
import React, { useState } from 'react';
import { Calendar, MapPin, CheckCircle, Users, TrendingUp, Target, Award, BarChart3, Zap } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { submitRSVP } from './actions/submitRSVP';

const LandingPage = () => {

  const speakers = [
    {
      name: "Rob Lauber ",
      img: "/imgs/rob.png",
      industryLine: "Rob Lauber is a global workforce and capability-building leader with over 20 years of experience in talent strategy, learning transformation, and AI-driven upskilling. A former senior executive at McKinsey, he specializes in creating learning journeys ready for change. Most recently, he served as SVP and Chief Learning Officer at McDonald's, leading millions of in-restaurant training through a disruptive/digital AI-powered learning ecosystem. Rob has also advised multinational organizations on future-ready capability models that unify training, measurement, and experience."
    },
    {
      name: "Krishna Kumar ",
      img: "/imgs/krishna.png",
      industryLine: "Krishna Kumar is the Founder and CEO of Simplilearn, a leading online education provider dedicated to career transformation. Founded in 2009, Simplilearn offers comprehensive programs in digital skills and technical training. In May 2024, Krishna raised $45 million in a Series C funding round led by GSV Ventures. A graduate of premier Indian institutions, he brings a vision for digital fluency and training in high demand careers, with a mission to transform the lives of 10 million professionals and students globally."
    },
    {
      name: "Sudipto Mitra ",
      img: "/imgs/sudipto.png",
      industryLine: "Sudipto Mitra is a seasoned transformation and growth leader with over 20 years of experience in enterprise AI, strategy, and customer-centric innovation. He has held technology, operations, and talent. As Chief Product Officer at Simplilearn, he drives cutting-edge solutions that scale learner experiences globally, unifies data and analytics, and brings together Simplilearn's innovative skills-focused ecosystem. Previously, he led global transformation initiatives at BlackRock and held leadership roles at IBM and S&P Global (IHS Markit). He is an alumnus of Stanford GSB, MIT, and IIT Kharagpur."
    }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    designation: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const form = new FormData();
      form.append('name', formData.name);
      form.append('email', formData.email);
      form.append('company', formData.company);
      form.append('designation', formData.designation);

      const result = await submitRSVP(form);

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', designation: '' });
      } else {
        setSubmitStatus('error');
      }

    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-vh-100" style={{ background: 'linear-gradient(to bottom, #111827, #1f2937)' }}>
      {/* Header */}
      <header className="bg-white shadow-sm" style={{
        backgroundImage: "url('/imgs/header-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
      >
        <div className="container py-3">
          <img
            src="/imgs/logo.png"
            alt="Simplilearn"
            className="img-fluid"
            style={{ height: '70px' }}
          />
        </div>
        <br/>
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <span className="badge bg-info mb-3" style={{ color: "#000000" }}>Invite-Only</span> <span className="text-info">An Exceutable Roundtable•Lunch</span>
              <h1 className="display-4 fw-bold mb-4" style={{ color: "#F5A623" }}>
                The Skills That Matter Next:
                <span className="d-block fw-normal" >Preparing Your Workforce</span>
                <span className="d-block fw-normal">& Leaders for the AI Era</span>
              </h1>

              <div className="d-flex flex-column gap-3 mb-4">
                <div className="d-flex align-items-center gap-2">
                  <Calendar className="text-white" />
                  <span className="text-white fw-bold">February 20, 2026</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <MapPin className="text-white" />
                  <span className="text-white fw-bold">Chamberlain's Steak & Fish House, Dallas</span>
                </div>
              </div>


            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="position-relative py-5 text-white" style={{ background: 'linear-gradient( #ffffff)' }}>
        <div className="container">
          <div className="row align-items-center g-4">
            {/* Left Content */}
            <div className="col-lg-6">


              <p className="text-dark mb-4 fw-semibold">
                AI is accelerating change across every operational layer. Roles are shifting. Leadership models are collapsing and reforming. Frontline and mid-level managers will soon lead teams of people and intelligent agents.
              </p>

             <p className="text-dark mb-4 fw-semibold">
                But even the most advanced enterprises are asking the same question:
              </p>

              <h2 className="h4 fw-bold mb-3" style={{ color: "#000000" }}>
                Which capabilities will matter most, and how do we build them at scale?
              </h2>

               <p className="text-dark mb-4 fw-semibold">
               This invite-only roundtable gathers CHROs, CLOs, and enterprise workforce leaders for a candid, senior-level discussion on what’s coming next.
              </p>
            </div>

            {/* RSVP Form */}
            <div className="col-lg-6">
              <div className="card shadow-lg p-4">
                <h3 className="h4 fw-bold mb-3 text-dark">RSVP Now</h3>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="text"
                      name="company"
                      placeholder="Company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="text"
                      name="designation"
                      placeholder="Designation"
                      value={formData.designation}
                      onChange={handleChange}
                      required
                      className="form-control"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-warning w-100"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'RSVP Now'}
                  </button>

                  {submitStatus === 'success' && (
                    <p className="text-success text-center mt-2">Registration successful!</p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="text-danger text-center mt-2">Submission failed. Please try again.</p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We'll Explore Section */}
      <section className="py-5 bg-light text-dark" style={{ background: 'linear-gradient(  #dbddf6)' }}>
        <div className="container">
          <h2 className="h3 fw-bold mb-3" style={{ color: "#F5A623" }}>What We'll Explore</h2>
          <p className="mb-4 fw-semibold">The critical skills every executive must plan for:</p>

          <div className="row g-4" >
            {[{
              icon: CheckCircle, title: 'Skills Decay', desc: 'every 2–3 years now vs 10 technical skills'
            }, {
              icon: TrendingUp, title: 'Manager Role Shift', desc: 'orchestrating people + AI agents'
            }, {
              icon: Target, title: 'Leaders + AI: Co-Pilots', desc: 'requires sensemaking and system thinking'
            }, {
              icon: Award, title: 'Frontline Capability', desc: 'now depends on digital fluency '
            }, {
              icon: BarChart3, title: 'Core Human Capabilities', desc: 'analytical reasoning and scenario planning'
            }, {
              icon: Users, title: 'Winning Organizations', desc: 'predict skills ahead of demand'
            }].map((item, idx) => (
              <div key={idx} className="col-md-6 col-lg-4">
                <div className="border rounded p-3 h-100 shadow-sm" style={{ background: 'linear-gradient(  #ffffff)' }}>
                  <div className="d-flex align-items-start gap-3">
                    <item.icon className="text-primary" size={24} />
                    <div>
                      <h5 className="fw-bold">{item.title}</h5>
                      <p className="mb-0">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="py-5 bg-primary">
        <div className="container">
          <h2 className="mb-4 " style={{ color: "#F5A623" }}>Featured Speakers</h2>

          {speakers.map((speaker, i) => (
            <div className=" bg-primary text-white mb-4 p-3" key={i}>
              <div className="row align-items-center g-3">
               <div className="col-md-2 col-4" style={{ height: "150px" }}>
  <img
    src={speaker.img}
    alt={speaker.name}
    className="img-fluid rounded"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "0px"
    }}
  />
</div>

                <div className="col-md-10 col-8">
                  <h5 className="mb-1 text-info fs-3 ">{speaker.name}</h5>
                  <p className="mb-0">{speaker.industryLine}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Additional Expert Perspectives Section */}
<div className="py-5" style={{ 
  background: "linear-gradient(to right, #013c7a, #3b82f6)" // cyan-400 to blue-500
}}>
  <div className="container">
    <h2 className="h2 fw-bold text-info mb-4">Additional Expert Perspectives</h2>
    <p className="text-white fs-5">
     Invited experts from leading consulting and enterprise learning organizations will contribute
short perspectives, offering insight into how large organizations are evolving skills and leadership
models in the Al era.

    </p>
  </div>
</div>
</section>
      

      {/* Real Examples Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">

            {/* Left Column: Text */}
            <div className="col-lg-6">
              <h2 className="display-6 fw-bold mb-4" style={{ color: "#F5A623" }}>
                Go behind the curtain with real examples and high-scale insights
              </h2>

              <p className="lead mb-4 fw-semibold">You'll walk away with:</p>

             <ul className="list-unstyled">
  {[
    "A clear view of the leadership & workforce capabilities that will matter most over the next 24-36 months.",
    "Insights from high-scale operating environments including the former CLO of McDonald’s on what truly scales and what breaks under pressure.",
    "Signals for where capability gaps may already be forming in your organization.",
    "Peer-validated perspectives from leaders running workforce, talent, and transformation ecosystems at scale.",
    "Actionable insights you can take straight into your next exec meeting."
  ].map((text, index) => (
    <li className="d-flex align-items-start mb-3" key={index}>
      <span
        className="me-3"
        style={{
          width: "4px",
          backgroundColor: "#F5A623",
          display: "inline-block",
          borderRadius: "2px",
          alignSelf: "stretch"
        }}
      ></span>

      <span>{text}</span>
    </li>
  ))}
</ul>
            </div>

            {/* Right Column: Image */}
            <div className="col-lg-6 d-flex justify-content-center">
              <img
                src="imgs/right.png"
                alt="Abstract 3D figures"
                className="img-fluid rounded"
                style={{ maxWidth: "400px" }}
              />
            </div>

          </div>
        </div>
        <div className="row justify-content-center">
  <div className="col-lg-6 col-md-8 col-sm-10">
                <h3 className="h4 fw-bold mb-3 text-dark">RSVP Now</h3>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="text"
                      name="company"
                      placeholder="Company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="text"
                      name="designation"
                      placeholder="Designation"
                      value={formData.designation}
                      onChange={handleChange}
                      required
                      className="form-control"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-warning w-100"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'RSVP Now'}
                  </button>

                  {submitStatus === 'success' && (
                    <p className="text-success text-center mt-2">Registration successful!</p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="text-danger text-center mt-2">Submission failed. Please try again.</p>
                  )}
                </form>
              </div>
            </div>
      </section>


      {/* Event Agenda */}
      {/* Event Agenda Section */}
      <section className="py-5" style={{ background: " #57f5f5" }}>
        <div className="container">
          {/* Section Title */}
          <h2 className="display-6 fw-bold mb-5 text-primary">Event Agenda</h2>

          {/* Agenda Cards */}
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="card border border-2 border-info h-100">
                <div className="card-body">
                  <h3 className="card-title h5 fw-bold mb-3 text-primary">Welcome & Opening</h3>
                  <p className="fw-bold mb-2">Sudipto Mitra, CRO Simplilearn</p>
                  <p className="card-text text-muted fw-semibold">
                    Why capability-building is now a board-level issue and what’s changing in the workforce landscape.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="card border border-2 border-info h-100">
                <div className="card-body">
                  <h3 className="card-title h5 fw-bold mb-3 text-primary">
                    Keynote:What Enterprise Leaders Are Seeing on the Ground
                  </h3>
                  <p className="fw-bold mb-2">Rob Lauber, Frmr CLO (McDonald's)</p>
                  <p className="card-text text-muted fw-semibold">
                    A grounded view of how AI and AI agents are reshaping work, workflows, and leadership across industries.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="card border border-2 border-info h-100">
                <div className="card-body">
                  <h3 className="card-title h5 fw-bold mb-3 text-primary">Lunch & Executive Conversation</h3>
                  <p className="fw-bold mb-2">Industry Expert's Invited</p>
                  <p className="card-text text-muted fw-semibold">
                    What large enterprise talent ecosystems are learning about capability-building at scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        style={{
          backgroundImage: "url('/imgs/footer.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
       {/* Second RSVP */}
<section className="py-5">
   
  <div className="container">

    {/* Wrapper to control positioning */}
    <div className="position-relative mx-auto" style={{ maxWidth: 500 }}>

      <header ><img src="/imgs/space.png"/></header>

      {/* Form Card */}
      <div className="card p-4 text-dark mt-3">
        <h4 className="text-center">Reserve Your Spot</h4>

        <form onSubmit={handleSubmit}>
          <input className="form-control mb-3" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
          <input className="form-control mb-3" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
          <input className="form-control mb-3" name="company" value={formData.company} onChange={handleChange} placeholder="Company" />
          <input className="form-control mb-3" name="designation" value={formData.designation} onChange={handleChange} placeholder="Designation" />
          <button className="btn btn-warning w-100">RSVP</button>
        </form>
      </div>

    </div>
  </div>
</section>

{/* Footer */}
<footer className="text-light py-4">
 
  <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
    <div className="fw-bold h5 text-info mb-2 mb-md-0">
      <img src="/imgs/logo.png" alt="Simplilearn" style={{ height: '60px' }} />
    </div>
    <p className="mb-0">
      &copy; © 2009-2025 - Simplilearn Solutions. All Rights Reserved.
    </p>
  </div>
</footer>
      </div></div>
  );
};

export default LandingPage;
