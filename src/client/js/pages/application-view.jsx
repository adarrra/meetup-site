var menuItemsData = [
    {
        key: "howtofind",
        name: "Як патрапіць?"
    },
    {
        key: "topics",
        name: "Даклады"
    },
    {
        key: "register",
        name: "Зарэгістравацца"
    }
];

var topics = [
  {
    speaker: "Юльян Місюкевіч",
    topic: "isotope",
    image: "img/topics/isotope.png",
    ref: "isotopeModal",
    shortDescription: "Анімацыйны Фрэймворк",
    longDescription: '<div><p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p> <p> <strong>Want these icons in this portfolio item sample?</strong>You can download 60 of them for free, courtesy of <a href="https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc">RoundIcons.com</a>, or you can purchase the 1500 icon set <a href="https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc">here</a>.</p></div>'
  },
  {
    speaker: "Ігар Цімошка",
    topic: "slack",
    image: "img/topics/slack.png",
    ref: "slackModal",
    shortDescription: "Камунікацыя новага пакалення",
    longDescription: '<div><p><b>Slack</b> my pitch up! Альбо як звесці блізкасць зносін каманды да непрыстойнасці</p></div>'
  },
  {
    speaker: "Міхась Бутылін",
    topic: "EcmaScript 2015",
    image: "img/topics/es6.png",
    ref: "ecmaScriptModal",
    shortDescription: "Новыя магчымасці JavaScript",
    longDescription: '<div>Пасля таго, як <b>node.js</b> пачала падтрымліваць асноўныя магчымасці <b>ES6</b>, а кампілятары кшталту <b>Babel</b> падтрымліваюць больш за 70% функцыаналу - актуальнасць <b>EcmaScript 2015</b> высокая як ніколі!<br/>Вы пачуеце аб тым якія з гэтых магчымасцяў вы можаце выкарыстаць ужо сёння і пабачыце шмат тлумачальных прыкладаў па тэме!</p></div>'
  }
]

var ApplicationView = React.createClass({
    render() {
        var topicModals = topics.map(topic =>
            <TopicDescriptionView key={topic.ref} topic={topic}/>
          );
        return (
          <div id="applicationView" style={{height: "100%", width: "100%"}}>
              <MenuPanelView items={menuItemsData}/>
              <HeaderView/>
              <HowToFindView/>
              <TopicsView topics={topics}/>
              <RegisterView/>
              <FooterView/>
              {topicModals}
          </div>
        );
    }
});

ReactDOM.render(
    <ApplicationView />
    , document.getElementById('nav-container')
);
cbpAnimatedHeader();
activateScrolling();


