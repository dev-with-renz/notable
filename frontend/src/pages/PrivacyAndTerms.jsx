import { Link } from 'react-router-dom'

const sections = [
  { id: 'privacy', label: 'Privacy notice' },
  { id: 'information', label: 'Information collected' },
  { id: 'oauth', label: 'Google and GitHub sign-in' },
  { id: 'ai', label: 'AI features and your notes' },
  { id: 'use-sharing', label: 'How information is used and shared' },
  { id: 'cookies', label: 'Cookies and analytics' },
  { id: 'retention', label: 'Retention and deletion' },
  { id: 'rights', label: 'Your privacy choices' },
  { id: 'security', label: 'Security and international processing' },
  { id: 'terms', label: 'Terms of service' },
  { id: 'accounts', label: 'Accounts and acceptable use' },
  { id: 'content', label: 'Your content and AI output' },
  { id: 'availability', label: 'Availability and liability' },
  { id: 'changes', label: 'Changes and contact' },
]

function SectionHeading({ number, children }) {
  return (
    <h2 className="mt-12 border-b border-slate-200 pb-3 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
      <span className="mr-3 font-mono text-sm font-medium text-teal-700">{number}</span>
      {children}
    </h2>
  )
}

function Detail({ title, children }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="font-semibold text-slate-900">{title}</h3>
      <div className="mt-2 text-sm leading-6 text-slate-600">{children}</div>
    </div>
  )
}

function Notice({ title, children }) {
  return (
    <aside className="my-6 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">
      <h3 className="font-semibold">{title}</h3>
      <div className="mt-1">{children}</div>
    </aside>
  )
}

export default function PrivacyAndTerms() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-700">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/login" className="flex items-center gap-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal-800 text-lg font-bold text-white" aria-hidden="true">
              N
            </span>
            <span>
              <span className="block text-sm font-bold tracking-wide text-slate-900">NOTABLE</span>
              <span className="block text-xs text-slate-500">Privacy &amp; terms</span>
            </span>
          </Link>
          <Link
            to="/register"
            className="rounded-lg bg-teal-800 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
          >
            Create account
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <section className="overflow-hidden rounded-3xl bg-slate-900 shadow-xl">
          <div className="grid gap-8 px-6 py-9 sm:px-10 sm:py-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-300">Clear, practical, and in one place</p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Privacy notice &amp; terms
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                What information Notable uses, what happens when you sign in or use AI, and the rules for using the service.
              </p>
              <p className="mt-5 text-sm text-slate-400">
                Effective date: October 13, 2026 <span className="px-2 text-slate-600">|</span> Operator: dev-with-renz
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-5 lg:w-64">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Questions?</p>
              <a className="mt-2 inline-block break-all text-sm font-medium text-teal-300 underline decoration-teal-300/50 underline-offset-4 hover:text-teal-200" href="mailto:perdiguerrarenzian@gmail.com">
                perdiguerrarenzian@gmail.com
              </a>
              <p className="mt-2 text-xs leading-5 text-slate-400">Privacy requests and service questions go to the operator.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 border-t border-white/10 px-6 py-4 sm:px-10">
            <a href="#privacy" className="rounded-full border border-white/20 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/10">Privacy notice</a>
            <a href="#terms" className="rounded-full border border-white/20 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/10">Terms of service</a>
            <span className="ml-auto self-center text-xs text-slate-400">Approx. 8 minutes to read</span>
          </div>
        </section>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[250px_minmax(0,1fr)]">
          <nav aria-label="On this page" className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:sticky lg:top-6">
            <h2 className="px-3 pb-3 text-xs font-bold uppercase tracking-widest text-slate-500">On this page</h2>
            <div className="flex gap-2 overflow-x-auto pb-2 lg:block lg:space-y-1 lg:overflow-visible lg:pb-0">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block shrink-0 rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-teal-50 hover:text-teal-900 focus:outline-none focus:ring-2 focus:ring-teal-600"
                >
                  {section.label}
                </a>
              ))}
            </div>
          </nav>

          <article className="min-w-0 rounded-2xl border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10">
            <div id="privacy" className="scroll-mt-8">
              <p className="text-xs font-bold uppercase tracking-widest text-teal-700">Part one</p>
              <SectionHeading number="01">Privacy notice</SectionHeading>
              <p className="mt-5 leading-7">
                This notice explains how <strong className="text-slate-900">dev-with-renz</strong> (“I,” “me,” or “the operator”) handles information when you use Notable, an application for notes and AI-assisted note features. The operator is based in the Philippines. This notice describes the application as currently implemented; it does not promise that a feature, provider, or retention schedule exists when it is not listed here.
              </p>
              <p className="mt-4 leading-7">
                I aim to handle personal information in accordance with applicable Philippine privacy law, including the Data Privacy Act of 2012, and other laws that apply to you. This page is a plain-language service notice, not legal advice.
              </p>
            </div>

            <div id="information" className="scroll-mt-8">
              <SectionHeading number="02">Information collected</SectionHeading>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <Detail title="Account details">
                  Email address and username; a password hash (not the password in readable form) for password-based accounts; and account creation information.
                </Detail>
                <Detail title="Notes and conversations">
                  Note titles and content, chat messages and AI responses, and related identifiers and timestamps needed to save and display your work.
                </Detail>
                <Detail title="OAuth account details">
                  If you sign in with Google or GitHub, the provider returns profile information used to create or find your Notable account, including your email and name or username. The current integration matches accounts by email and does not save the provider access token or provider account ID in your Notable profile.
                </Detail>
                <Detail title="Operational information">
                  Information sent as part of a request may be processed by the service host, database host, or network infrastructure used to run this deployment. The exact infrastructure and its log-retention settings depend on where Notable is hosted.
                </Detail>
              </div>
              <p className="mt-5 leading-7">
                Notable currently has no application-level analytics SDK or advertising feature. The app needs essential authentication cookies to operate; see <a className="font-medium text-teal-800 underline underline-offset-4" href="#cookies">Cookies and analytics</a>.
              </p>
            </div>

            <div id="oauth" className="scroll-mt-8">
              <SectionHeading number="03">Google and GitHub sign-in</SectionHeading>
              <p className="mt-5 leading-7">
                You can create or access a Notable account using either provider. The provider authenticates you and returns profile information used to create or find your account by email. Notable does not receive your Google or GitHub password. A temporary provider access token is used during the sign-in callback to retrieve profile information.
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <Detail title="Google">
                  The sign-in flow requests OpenID Connect, email, and basic profile scopes. Notable uses returned account information such as your email, name, and provider account identifier.
                </Detail>
                <Detail title="GitHub">
                  The sign-in flow requests read-only profile and email scopes. Notable uses your GitHub username, account identifier, and a primary verified email when available.
                </Detail>
              </div>
              <p className="mt-5 leading-7">
                Google and GitHub process information under their own privacy notices and terms. You can review or revoke the app’s access in your provider account settings. Revoking access may prevent OAuth sign-in; it does not by itself delete information already held in Notable.
              </p>
            </div>

            <div id="ai" className="scroll-mt-8">
              <SectionHeading number="04">AI features and your notes</SectionHeading>
              <p className="mt-5 leading-7">
                When you explicitly request an AI action—such as summarizing, generating questions, improving, or asking about a note—the app sends the note title and content to the AI provider selected for that request. For a question, the question is sent with the note context. The app currently supports Google Gemini and Groq.
              </p>
              <Notice title="Pause before sending sensitive information">
                AI requests leave the Notable application and are processed by the selected provider. Do not include information you do not want that provider to receive. Provider handling, retention, and model-training practices are governed by the provider’s own current terms and settings; Notable cannot promise how a provider handles a prompt after receiving it.
              </Notice>
              <p className="leading-7">
                AI-generated content can be incomplete, outdated, or wrong. Review it before relying on it, especially for important decisions. It is not professional, legal, medical, or financial advice. Your notes remain your responsibility.
              </p>
            </div>

            <div id="use-sharing" className="scroll-mt-8">
              <SectionHeading number="05">How information is used and shared</SectionHeading>
              <p className="mt-5 leading-7">Information is used to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 marker:text-teal-700">
                <li>create and secure accounts, authenticate users, and provide account-related support;</li>
                <li>save, retrieve, and manage notes and conversations at your request;</li>
                <li>carry out AI actions you request by sending the relevant note content and prompt to Gemini or Groq;</li>
                <li>operate, maintain, and protect the service and investigate suspected abuse; and</li>
                <li>comply with valid legal obligations or protect rights and safety where the law permits.</li>
              </ul>
              <p className="mt-4 leading-7">
                Information may be handled by Google or GitHub during OAuth sign-in, by Google Gemini or Groq when you request an AI feature, and by the hosting/database/infrastructure providers selected for the live deployment. The specific hosting providers and data regions are deployment-dependent; ask the operator for the current deployment details. I do not operate Notable as an advertising or data-broker service.
              </p>
              <p className="mt-4 leading-7">
                The operator does not intentionally sell your notes or account information. Information is not shared with AI providers merely because you have an account; it is sent when you request an AI feature.
              </p>
            </div>

            <div id="cookies" className="scroll-mt-8">
              <SectionHeading number="06">Cookies and analytics</SectionHeading>
              <p className="mt-5 leading-7">
                Notable uses an HttpOnly authentication cookie to keep you signed in and a short-lived OAuth state cookie to protect the sign-in flow. These cookies are necessary for core functionality. The application currently does not include an analytics or advertising cookie tool.
              </p>
              <p className="mt-4 leading-7">
                Your browser can block or clear cookies, but signing in may then stop working. Hosting, security, or network providers may keep their own technical logs; their use is governed by their terms and the deployment configuration.
              </p>
            </div>

            <div id="retention" className="scroll-mt-8">
              <SectionHeading number="07">Retention and deletion</SectionHeading>
              <p className="mt-5 leading-7">
                The app stores account information, notes, and chat history so the service can provide its features. Information is kept while needed to operate your account and service, to address support or security issues, and to meet applicable legal requirements. The current application does not publish a fixed deletion or backup-retention timetable.
              </p>
              <p className="mt-4 leading-7">
                You can manage note and chat content using the controls available in the app. There is no self-service account-deletion flow currently provided. To request account deletion or erasure of personal information, contact <a className="font-medium text-teal-800 underline underline-offset-4" href="mailto:perdiguerrarenzian@gmail.com">perdiguerrarenzian@gmail.com</a>. The operator may need to verify the request and may retain limited information where required by law or for legitimate security and dispute-resolution purposes. Copies in backups may remain until those backups are rotated by the applicable hosting provider.
              </p>
            </div>

            <div id="rights" className="scroll-mt-8">
              <SectionHeading number="08">Your privacy choices</SectionHeading>
              <p className="mt-5 leading-7">
                Depending on applicable law, you may have rights to be informed, access or correct personal information, object to or limit certain processing, request erasure or blocking, withdraw consent where consent is the basis, and lodge a complaint with the relevant privacy regulator. Philippine data subjects may contact the National Privacy Commission at <a className="font-medium text-teal-800 underline underline-offset-4" href="https://privacy.gov.ph/" target="_blank" rel="noreferrer">privacy.gov.ph</a>.
              </p>
              <p className="mt-4 leading-7">
                To make a request, email <a className="font-medium text-teal-800 underline underline-offset-4" href="mailto:perdiguerrarenzian@gmail.com">perdiguerrarenzian@gmail.com</a> from the address associated with your account where possible. Please describe the request and account email. The operator may ask for reasonable information to verify identity, will respond within the period required by applicable law, and may explain if a legal exception applies.
              </p>
            </div>

            <div id="security" className="scroll-mt-8">
              <SectionHeading number="09">Security and international processing</SectionHeading>
              <p className="mt-5 leading-7">
                Password-based account passwords are stored as bcrypt hashes. Authentication and OAuth flows use HttpOnly cookies. No internet service can guarantee perfect security; use a unique password, keep account access private, and report suspected unauthorized access promptly by email.
              </p>
              <p className="mt-4 leading-7">
                Depending on the hosting location and the AI or sign-in provider you choose, information may be processed in countries outside the Philippines. Those providers’ own privacy terms and safeguards also apply to their processing.
              </p>
            </div>

            <div id="terms" className="scroll-mt-8">
              <p className="mt-14 text-xs font-bold uppercase tracking-widest text-teal-700">Part two</p>
              <SectionHeading number="10">Terms of service</SectionHeading>
              <p className="mt-5 leading-7">
                These Terms govern your access to Notable. By creating an account, selecting “I agree” during registration, or using the service after these Terms are presented to you, you agree to them and acknowledge the Privacy Notice above. If you do not agree, do not create an account or use Notable.
              </p>
              <p className="mt-4 leading-7">
                “Service” means the Notable application and its note, chat, sign-in, and AI-assisted features made available by dev-with-renz.
              </p>
            </div>

            <div id="accounts" className="scroll-mt-8">
              <SectionHeading number="11">Accounts and acceptable use</SectionHeading>
              <ul className="mt-5 list-disc space-y-2 pl-6 leading-7 marker:text-teal-700">
                <li>Provide accurate account information and keep your sign-in credentials private.</li>
                <li>You are responsible for activity through your account. Notify the operator promptly if you suspect it has been compromised.</li>
                <li>Use Notable only as permitted by law and these Terms. Do not attempt unauthorized access, disrupt the service, introduce malicious code, or misuse another person’s account or data.</li>
                <li>Do not use the service to infringe others’ rights or upload information you are not authorized to store or process.</li>
                <li>You must be legally able to accept these Terms where you live. If you are not, a parent or legal guardian must review and accept them and supervise your use where permitted by law.</li>
              </ul>
              <p className="mt-4 leading-7">
                The operator may suspend or restrict access when reasonably necessary to address a security risk, unlawful use, material breach, or legal requirement. Where practical, the operator will provide notice and an opportunity to address the issue.
              </p>
            </div>

            <div id="content" className="scroll-mt-8">
              <SectionHeading number="12">Your content and AI output</SectionHeading>
              <p className="mt-5 leading-7">
                You retain your rights in the notes and other content you submit. You give the operator a limited permission to host, store, display, and process that content only as needed to provide, secure, and maintain the service and the features you request. When you use an AI feature, that permission includes sending the relevant content to the AI provider you selected so it can answer your request.
              </p>
              <p className="mt-4 leading-7">
                You are responsible for your content and for checking AI-generated results before use. You must have the rights and permissions needed to submit content. Do not treat AI output as guaranteed accurate, unique, confidential, or suitable for a particular purpose.
              </p>
              <p className="mt-4 leading-7">
                Google, GitHub, Gemini, and Groq are third-party services. Their own terms and privacy practices apply to your interactions with them. Notable does not control their services or guarantee their availability.
              </p>
            </div>

            <div id="availability" className="scroll-mt-8">
              <SectionHeading number="13">Availability and liability</SectionHeading>
              <p className="mt-5 leading-7">
                Notable may change, suspend, or discontinue features, and interruptions or data loss may occur. Keep your own copies of important information. To the extent permitted by applicable law, the service is provided “as is” and “as available,” without promises that it will be uninterrupted, error-free, or fit for a particular purpose.
              </p>
              <p className="mt-4 leading-7">
                Nothing in these Terms excludes or limits a right or liability that cannot lawfully be excluded or limited. To the extent permitted by law, the operator is not liable for indirect or consequential loss arising from use of, inability to use, or reliance on the service or AI output. Where liability cannot be excluded, it is limited to the minimum extent permitted by applicable law.
              </p>
            </div>

            <div id="changes" className="scroll-mt-8">
              <SectionHeading number="14">Changes and contact</SectionHeading>
              <p className="mt-5 leading-7">
                The operator may update this page as the service or its practices change. The effective date at the top shows when this version was published. Material changes will be highlighted in the service or by another reasonable notice where practical; where appropriate, you may be asked to accept revised Terms before continuing. If you do not agree, stop using the service.
              </p>
              <p className="mt-4 leading-7">
                These Terms are governed by the laws of the Philippines, without removing any mandatory consumer or privacy rights that apply to you. Disputes are subject to the competent courts of the Philippines, unless applicable law requires another forum.
              </p>
              <div className="mt-6 rounded-2xl bg-slate-900 p-6 text-white">
                <h3 className="font-semibold">Contact the operator</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  For privacy questions, data-rights requests, or concerns about these Terms, email dev-with-renz:
                </p>
                <a className="mt-3 inline-block break-all font-semibold text-teal-300 underline decoration-teal-300/50 underline-offset-4 hover:text-teal-200" href="mailto:perdiguerrarenzian@gmail.com">
                  perdiguerrarenzian@gmail.com
                </a>
                <p className="mt-4 text-xs leading-5 text-slate-400">Please do not include passwords or sensitive note contents in your email.</p>
              </div>
            </div>

            <footer className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-500">Last updated October 13, 2026</p>
              <Link to="/register" className="inline-flex w-fit items-center rounded-lg bg-teal-800 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2">
                Continue to registration
              </Link>
            </footer>
          </article>
        </div>
      </div>
    </main>
  )
}
