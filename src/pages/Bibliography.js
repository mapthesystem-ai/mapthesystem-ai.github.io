import React from "react"

import Header from "../components/Header"
import SEO from "../components/seo"

import "../style/app.css"
import header from "../images/header.png"
const IndexPage = () => (
  <body>
    <Header />
    <SEO title="Map the system AI" />
    <div className="hero">
      <h1 className="hero__title">Bibliography</h1>
    </div>
    <div className="report__biblios">
      <div className="report__section">
        <PrimaryResearch></PrimaryResearch>
        <NewsIndustry></NewsIndustry>
        <AcademicPapers></AcademicPapers>
        <Documents></Documents>
        <Design></Design>
      </div>
    </div>
  </body>
)

const PrimaryResearch = () => (
  <div className="report__subSection">
    <h2 className="report__subtitle">Primary Research </h2>

    <p className="biblio-indent report__paragraph">
      Barkin, Alex (Software Engineer - Machine Learning, Wave HQ). Interviewed
      by Krystyna Poremba, March 12, 2020.
    </p>
    <p className="biblio-indent report__paragraph">
      Yang, Emily, Krystyna Poremba, Sophia Tomaini, Ken Namgung, Anson Zhou.
      Your Experience with Education and AI. March 20, 2020. Distributed by
      Google Forms. https://www.surveymonkey.com/r/HHSJJSW
    </p>
  </div>
)

const NewsIndustry = () => (
  <div className="report__subSection">
    <h2 className="report__subtitle">News & Industry Articles </h2>

    <p className="biblio-indent report__paragraph">
      “AI in Education: Where Is It Now and What Is the Future?” Lexalytics.
      Lexalytics, November 18, 2019.
      https://www.lexalytics.com/lexablog/ai-in-education-present-future-ethics.
    </p>
    <p className="biblio-indent report__paragraph">
      Dickson, Ben. “Why AI Might Be the Most Effective Weapon We Have to Fight
      COVID-19.” Neural | The Next Web, March 17, 2020.
      https://thenextweb.com/neural/2020/03/21/why-ai-might-be-the-most-
      effective-weapon-we-have-to-fight-covid-19/.
    </p>
    <p className="biblio-indent report__paragraph">
      “Examples of AI Used in Healthcare.” ReferralMD, March 11, 2020.
      https://getreferralmd.com/2019/04/10-powerful-examples-of-ai-used-
      in-healthcare-today/.
    </p>
    <p className="biblio-indent report__paragraph">
      Faggella, Daniel. “Everyday Examples of Artificial Intelligence and
      Machine Learning.” Emerj. Emerj, March 10, 2020.
      https://emerj.com/ai-sector-overviews/everyday-examples-of-ai/.
    </p>
    <p className="biblio-indent report__paragraph">
      Goswami, Darshan. “How Will Artificial Intelligence Impact the Future?
      It's Up To Us.” Reporting on the Triple Bottom Line & Sustainable Business
      News, November 8, 2018.
      https://www.triplepundit.com/story/2018/how-will-artificial-intelligence-
      impact-future-its-us/55541.
    </p>
    <p className="biblio-indent report__paragraph">
      Hofstee, Eltjo. “What Are the Infrastructure Requirements for AI?”
      Leaseweb Blog, December 30, 2019.
      https://blog.leaseweb.com/2019/07/04/infrastructure-requirements-ai/.
    </p>
    <p className="biblio-indent report__paragraph">
      Hopper. “AI in Travel, Part 1: Making Travel Recommendations.” Medium.
      Medium, April 19, 2018. https://medium.com/life-at-hopper/ai-in-travel-
      part-1-making-travel-recommendations-733a16d9e010.
    </p>
    <p className="biblio-indent report__paragraph">
      Insights Team. “Forbes Insights: Rethinking Privacy For The AI Era.”
      Forbes. Forbes Magazine, March 27, 2019.
      https://www.forbes.com/sites/insights-intelai/2019/03/27/rethinking-
      privacy-for-the-ai-era/#1c5746ef7f0a
    </p>
    <p className="biblio-indent report__paragraph">
      Marr, Bernard. “How Is AI Used In Education -- Real World Examples Of
      Today And A Peek Into The Future.” Forbes. Forbes Magazine, July 25, 2018.
      https://www.forbes.com/sites/bernardmarr/2018/07/25/how-is-ai-used-
      in-education-real-world-examples-of-today-and-a-peek-into-the-
      future/#24ecf031586e.
    </p>
    <p className="biblio-indent report__paragraph">
      Niyazov, Sukhayl. “How AI Will Redefine Economics.” Medium. Towards Data
      Science, November 23, 2019.
      https://towardsdatascience.com/how-ai-will-redefine-economics-
      ec305e3cb687.
    </p>

    <p className="biblio-indent report__paragraph">
      NPR. NPR, May 3, 2016.
      https://www.npr.org/sections/alltechconsidered/2016/05/03/476513775/
      uber-plans-to-kill-surge-pricing-though-drivers-say-it-makes-job-worth-it.
    </p>
    <p className="biblio-indent report__paragraph">
      Plumer, Brad, Ezra Klein, David Roberts, Dylan Matthews, Matthew Yglesias,
      and Timothy B. Lee. “Automation Is Making Human Labor More Valuable than
      Ever: The New New Economy.” Vox.com. Accessed March 23, 2020.
      https://www.vox.com/a/new-economy-future/manual-labor-luxury-good.
    </p>
    <p className="biblio-indent report__paragraph">
      Quora. “How Do Tech Companies Make Money From Our Personal Data?” Forbes.
      Forbes Magazine, June 27, 2019.
      https://www.forbes.com/sites/quora/2019/06/27/how-do-tech-
      companies-make-money-from-our-personal-data/#2647664b4788.
    </p>
    <p className="biblio-indent report__paragraph">
      Rayome, Alison DeNisco. “How AI Could Save the Environment.” TechRepublic.
      TechRepublic, March 2, 2020.https://www.techrepublic.com/article/
      how-ai-could-save-the-environment/.
    </p>
    <p className="biblio-indent report__paragraph">
      Safran, Ben, Tyler Duvall, Eric Hannon, Jared Katseff, and Tyler Wallace.
      “A New Look at Autonomous-Vehicle Infrastructure.” McKinsey & Company.
      McKinsey & Company, May 2019.
      https://www.mckinsey.com/industries/capital-projects-and-infrastructure/
      our-insights/a-new-look-at-autonomous-vehicle-infrastructure.
    </p>
    <p className="biblio-indent report__paragraph">
      Sanders, James. “Why 5G Is a Crucial Technology for Autonomous Vehicles.”
      ZDNet. ZDNet, November 4, 2019. https://www.zdnet.com/article/why-
      5g-is-a-crucial-technology-for-autonomous-vehicles/.
    </p>
    <p className="biblio-indent report__paragraph">
      Shahani, Aarti. “Uber Plans To Kill Surge Pricing, Though Drivers Say It
      Makes Job Worth It.”
    </p>
    <p className="biblio-indent report__paragraph">
      “Smart Farming: The Rise of AgriTech and Its Legal Issues.” Dentons.
      Accessed March 23, 2020.
      https://www.dentons.com/en/insights/articles/2019/
      january/8/smart-farming-the-rise-of-agritech-and-its-legal-issues
    </p>
    <p className="biblio-indent report__paragraph">
      Westerheide, Fabian. “The Artificial Intelligence Industry and Global
      Challenges.” Forbes. Forbes Magazine, November 27, 2019.
      https://www.forbes.com/sites/cognitiveworld/2019/11/27/the-artificial-
      intelligence-industry-and-global-challenges/#25e7a8db3deb
    </p>
    <p className="biblio-indent report__paragraph">
      “What Is an Autonomous Car? - How Self Driving Cars Work.” Synopsys.
      Accessed March 23, 2020.
      https://www.synopsys.com/automotive/what-is-autonomous-car.html
    </p>
    <p className="biblio-indent report__paragraph">
      Wladawsky-Berger, Irving. “The Impact of Artificial Intelligence on the
      World Economy.” The Wall Street Journal. Dow Jones & Company, November 26,
      2018. https://blogs.wsj.com/cio/2018/11/16/the-impact-of-artificial-
      intelligence-on-the-world-economy/.
    </p>
    <p className="biblio-indent report__paragraph">
      “Artificial Intelligence – What It Is and Why It Matters.” SAS. Accessed
      March 25,
      2020.https://www.sas.com/en_us/insights/analytics/what-is-artificial-
      intelligence.html.
    </p>
  </div>
)

const AcademicPapers = () => (
  <div className="report__subSection">
    <h2 className="report__subtitle">Academic Papers</h2>

    <p className="biblio-indent report__paragraph">
      Brown, Brad, Michael Chui, and James Manyika. "Are you ready for the era
      of ‘big data’." McKinsey Quarterly 4, no. 1 (2011): 24-35.
    </p>
    <p className="biblio-indent report__paragraph">
      Cavoukian, Ann. "Privacy by design: The 7 foundational principles."
      Information and privacy commissioner of Ontario, Canada 5 (2009).
    </p>
    <p className="biblio-indent report__paragraph">
      Cho, Renee, Renee Cho, Joe Wiseman, Ravi Amblee, Ali Amaan, Joy Green, and
      Yatika Sharma. “Artificial Intelligence-A Game Changer for Climate Change
      and the Environment.” State of the Planet, June 5, 2018. https://blogs.
      ei.columbia.edu/2018/06/05/artificial-intelligence-climate-environment/.
    </p>
    <p className="biblio-indent report__paragraph">
      Ghahramani, Zoubin. "Unsupervised learning." In Summer School on Machine
      Learning, pp. 72-112. Springer, Berlin, Heidelberg, 2003.
    </p>
    <p className="biblio-indent report__paragraph">
      Howard, Daniel, and Danielle Dai. "Public perceptions of self-driving
      cars: The case of Berkeley, California." In Transportation research board
      93rd annual meeting, vol. 14, no. 4502, pp. 1-16. 2014.
    </p>
    <p className="biblio-indent report__paragraph">
      Isaak, Jim, and Mina J. Hanna. "User data privacy: Facebook, Cambridge
      Analytica, and privacy protection." Computer 51, no. 8 (2018): 56-59.
    </p>
    <p className="biblio-indent report__paragraph">
      Khayyam, Hamid, Bahman Javadi, Mahdi Jalili, and Reza N. Jazar.
      “Artificial Intelligence and Internet of Things for Autonomous Vehicles.”
      Nonlinear Approaches in Engineering Applications, July 2019, 39–68.
      https://doi.org/10.1007/978-3-030-18963-1_2.
    </p>
    <p className="biblio-indent report__paragraph">
      Li, Yuanxiang, Walter Stweart, Jake Zhu, and Anna Ni. "Online privacy
      policy of the thirty Dow Jones corporations: Compliance with FTC Fair
      Information Practice Principles and readability assessment."
      Communications of the IIMA 12, no. 3 (2012): 5.
    </p>
    <p className="biblio-indent report__paragraph">
      Liang, Fan, Vishnupriya Das, Nadiya Kostyuk, and Muzammil M. Hussain.
      “Constructing a Data-Driven Society: Chinas Social Credit System as a
      State Surveillance Infrastructure.” Policy & Internet 10, no. 4 (February
      2018): 415–53. https://doi.org/10.1002/poi3.183.
    </p>
    <p className="biblio-indent report__paragraph">
      Swartz, Nikki. "Canada reviews PIPEDA." Information Management 41, no. 2
      (2007): 8.
    </p>

    <p className="biblio-indent report__paragraph">
      Tankard, Colin. "What the GDPR means for businesses." Network Security
      2016, no. 6 (2016): 5-8.
    </p>
  </div>
)

const Documents = () => (
  <div className="report__subSection">
    <h2 className="report__subtitle">
      Government Documents & Resources, Data Sets & Business Websites
    </h2>

    <p className="biblio-indent report__paragraph">
      Center for Curriculum Redesign. “Artificial Intelligence in Education.”
      Center for Curriculum Redesign. Center for Curriculum Redesign, March
      2019. https://curriculumredesign.org/our-work/artificial-intelligence-in-
      education/.
    </p>
    <p className="biblio-indent report__paragraph">
      Frankenfield, Jake. “How Artificial Intelligence Works.” Investopedia,
      arch 13, 2020.
      https://www.investopedia.com/terms/a/artificial-intelligence-ai.asp
    </p>
    <p className="biblio-indent report__paragraph">
      Herweijer, Celine. “8 Ways AI Can Help Save the Planet.” World Economic
      Forum. Accessed March 10, 2020. https://www.weforum.org/agenda/2018
      /01/8-ways-ai-can-help-save-the-planet/.
    </p>
    <p className="biblio-indent report__paragraph">
      “Institute for Transportation and Development Policy.” Institute for
      Transportation and Development Policy, March 9, 2020.
      https://www.itdp.org/.
    </p>
    <p className="biblio-indent report__paragraph">
      U.S. Congress. House. FUTURE of Artificial Intelligence Act of 2017.
      S.2217. 115th Cong., 1st sess. Introduced in House December 12, 2017.
      https://www.congress.gov/bill/115th-congress/senate-bill/2217/text.
    </p>
    <p className="biblio-indent report__paragraph">
      Liu, Shanhong. “Number of AI Companies Worldwide 2018, by Country.”
      Statista. Statista, March 2, 2020. https://www.statista.com/statistics/
      941054/number-of-ai-companies-worldwide-by-country/.
    </p>
    <p className="biblio-indent report__paragraph">
      O, Erik. “All about Automatically Categorizing Transactions.” Wave. Wave,
      March 22, 2020.
      https://support.waveapps.com/hc/en-us/articles/360001301666-
      All-about-automatically-categorizing-transactions.
    </p>
    <p className="biblio-indent report__paragraph">
      Wave. “Introducing Machine Learning.” Wave. Wave, October 12, 2018.
      https://www.waveapps.com/rebrand/machine-learning.
    </p>
  </div>
)

const Design = () => (
  <div className="report__subSection">
    <h2 className="report__subtitle">Design Resources</h2>

    <p className="biblio-indent report__paragraph">
      42 Describing Systems-Feedback Loops. 42 Describing Systems-Feedback
      Loops. Vimeo, 2015. https://vimeo.com/124574774.
    </p>
    <p className="biblio-indent report__paragraph">
      Centre, Skoll. “The Impact Gaps Canvas.” Tackling Heropreneurship.
      Tackling Heropreneurship. Accessed April 7, 2020.
      http://tacklingheropreneurship.com/the-impact-gaps-canvas/.
    </p>
    <p className="biblio-indent report__paragraph">
      “Design, Prototype, and Gather Feedback All in One Place with Figma.”
      Figma. Figma. Accessed April 7, 2020. https://www.figma.com/design/.
    </p>
    <p className="biblio-indent report__paragraph">
      Meadows, Donella. “Leverage Points: Places to Intervene in a System.” The
      Academy for Systems Change. The Academy for Systems Change. Accessed April
      7, 2020.
      http://donellameadows.org/archives/leverage-points-places-to-intervene
      -in-a-system/.
    </p>
    <p className="biblio-indent report__paragraph">
      “Noun Project.” Noun Project. Noun Project Inc. Accessed April 7, 2020.
      https://thenounproject.com/.
    </p>
    <p className="biblio-indent report__paragraph">
      Prosci Inc. “ADKAR Change Management Model Overview.” Prosci. Prosci.
      Accessed April 7, 2020. https://www.prosci.com/adkar/adkar-model.
    </p>
  </div>
)

export default IndexPage
