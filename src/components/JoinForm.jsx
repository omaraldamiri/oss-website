import { useState, useRef } from 'react';

export default function JoinForm() {
  const [status, setStatus] = useState({ message: '', type: '' });
  const [submitting, setSubmitting] = useState(false);
  const [role, setRole] = useState('');
  const [team, setTeam] = useState('');
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: '', type: '' });

    const form = formRef.current;
    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus({ message: 'Please fill in the required fields.', type: 'err' });
      return;
    }

    if (!role) {
      setStatus({ message: 'Please select a role.', type: 'err' });
      return;
    }

    if (role === 'Contributor' && !team) {
      setStatus({ message: 'Please select a team.', type: 'err' });
      return;
    }

    const formData = new FormData(form);
    const fullName = ['name_first', 'name_father', 'name_grandfather', 'name_family']
      .map(k => (formData.get(k) || '').trim())
      .join(' ');
    formData.set('full_name', fullName);
    formData.set('role', role);
    formData.set('team', role === 'Contributor' ? team : 'Member');

    setSubmitting(true);
    setStatus({ message: 'Sending...', type: '' });

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });

      if (res.ok) {
        form.reset();
        form.university.value = 'University of Jordan';
        setRole('');
        setTeam('');
        setStatus({ message: 'Thank you! Your application was received. We will contact you soon.', type: 'ok' });
      } else {
        setStatus({ message: 'Something went wrong. Please try again.', type: 'err' });
      }
    } catch (err) {
      setStatus({ message: 'Could not send. Check your connection and try again.', type: 'err' });
    } finally {
      setSubmitting(false);
    }
  };

  const contributorTeams = [
    { value: 'Technical', label: 'Technical', description: 'Build projects and run workshops' },
    { value: 'Social Media', label: 'Social Media', description: 'Create content and grow our audience' },
    { value: 'PR & HR', label: 'PR & HR', description: 'Partnerships and member care' }
  ];

  return (
    <section id="join" className="join">
      <div className="wrap">
        <div className="section-head">
          <h2>Join the society</h2>
          <p>Fill in the form and we will get back to you. It takes about three minutes.</p>
        </div>

        <form
          ref={formRef}
          id="joinForm"
          name="joinForm"
          data-netlify="true"
          data-netlify-honeypot="botcheck"
          noValidate
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="joinForm" />
          <input type="hidden" name="botcheck" className="hp" tabIndex="-1" autoComplete="off" aria-hidden="true" />

          <fieldset>
            <legend>Full name</legend>
            <div className="row c4">
              <label className="field">
                First name <span className="req" aria-hidden="true">*</span>
                <input type="text" name="name_first" autoComplete="given-name" required />
              </label>
              <label className="field">
                Father's name <span className="req" aria-hidden="true">*</span>
                <input type="text" name="name_father" required />
              </label>
              <label className="field">
                Grandfather's name <span className="req" aria-hidden="true">*</span>
                <input type="text" name="name_grandfather" required />
              </label>
              <label className="field">
                Family name <span className="req" aria-hidden="true">*</span>
                <input type="text" name="name_family" autoComplete="family-name" required />
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Contact</legend>
            <div className="row c2">
              <label className="field">
                Phone number <span className="req" aria-hidden="true">*</span>
                <input type="tel" name="phone" autoComplete="tel" placeholder="07XXXXXXXX" required />
              </label>
              <label className="field">
                Email <span className="req" aria-hidden="true">*</span>
                <input type="email" name="email" autoComplete="email" required />
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Studies</legend>
            <div className="row c2">
              <label className="field">
                University <span className="req" aria-hidden="true">*</span>
                <input type="text" name="university" defaultValue="University of Jordan" required />
              </label>
              <label className="field">
                Major <span className="req" aria-hidden="true">*</span>
                <input type="text" name="major" placeholder="e.g. Computer Science" required />
              </label>
            </div>
            <div className="row" style={{ marginTop: '1rem', maxWidth: '50%' }}>
              <label className="field">
                Year <span className="req" aria-hidden="true">*</span>
                <select name="year" required>
                  <option value="">Choose your year</option>
                  <option>First year</option>
                  <option>Second year</option>
                  <option>Third year</option>
                  <option>Fourth year</option>
                  <option>Fifth year or above</option>
                  <option>Graduate</option>
                </select>
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend>About you</legend>
            <label className="field">
              Your skills
              <small>Technical skills, social media, design, writing, organizing, anything you are good at.</small>
              <textarea name="skills" required></textarea>
            </label>
          </fieldset>

          <fieldset>
            <legend>Links</legend>
            <div className="row c2">
              <label className="field">
                GitHub <small>optional</small>
                <input type="url" name="github" placeholder="https://github.com/username" />
              </label>
              <label className="field">
                LinkedIn <small>optional</small>
                <input type="url" name="linkedin" placeholder="https://linkedin.com/in/username" />
              </label>
            </div>
            <label className="field" style={{ marginTop: '1rem' }}>
              Social media posts you made <small>optional. Paste links to posts on Instagram, Pinterest or anywhere else, one per line.</small>
              <textarea name="posts" style={{ minHeight: '90px' }}></textarea>
            </label>
          </fieldset>

          <fieldset>
            <legend>
              How do you want to participate? <span className="req" aria-hidden="true">*</span>
            </legend>
            <div className="team-options" role="radiogroup" aria-label="Participation type">
              <label>
                <input
                  type="radio"
                  name="role"
                  value="Contributor"
                  checked={role === 'Contributor'}
                  onChange={() => { setRole('Contributor'); setTeam(''); }}
                  required
                />
                <span>Contributor<small>Join a team and actively contribute</small></span>
              </label>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="Member"
                  checked={role === 'Member'}
                  onChange={() => { setRole('Member'); setTeam(''); }}
                />
                <span>Member<small>Join, learn and enjoy — no team commitments</small></span>
              </label>
            </div>

            {role === 'Contributor' && (
              <div className="team-options" style={{ marginTop: '1rem' }} role="radiogroup" aria-label="Select team">
                {contributorTeams.map((t, i) => (
                  <label key={i}>
                    <input
                      type="radio"
                      name="team"
                      value={t.value}
                      checked={team === t.value}
                      onChange={() => setTeam(t.value)}
                      required
                    />
                    <span>{t.label}<small>{t.description}</small></span>
                  </label>
                ))}
              </div>
            )}
          </fieldset>

          <p className="consent">
            We use your details only to process your application and contact you about society activities. We do not share them outside the society.
          </p>

          <div>
            <button className="btn" type="submit" disabled={submitting} id="submitBtn">
              {submitting ? 'Sending...' : 'Send my application'}
            </button>
            <p id="status" role="status" aria-live="polite" className={status.type} style={{ marginTop: '.8rem' }}>
              {status.message}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}