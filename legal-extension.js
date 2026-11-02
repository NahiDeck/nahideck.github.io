/*
 * NahiDeck Connect (tarayıcı eklentisi) gizlilik politikası.
 * legal.js ile aynı blok türlerini kullanır ve onun NAHI_LEGAL tablosuna
 * "extension" belgesini ekler; sayfa aynı site.js oluşturucusuyla çizilir.
 * Anadil doğrulaması tamamlanana kadar es, pt-BR, de, fr, az, zh-TW, zh-CN
 * AWAITING_NATIVE_SPEAKER_REVIEW olarak işaretlidir.
 */
(function () {
  "use strict";

  var EXT = {

    // tr kaynak metni
    tr: {
      title: "NahiDeck Connect Gizlilik Politikası",
      updated: "2 Kasım 2026",
      blocks: [
        ["p", "Bu politika, <strong>NahiDeck Connect</strong> tarayıcı eklentisinin hangi verileri işlediğini açıklar. Tüm NahiDeck ürünlerini kapsayan genel metin için Gizlilik Politikası sayfasına bakın."],
        ["h", "Eklenti ne yapar?"],
        ["p", "NahiDeck Connect; tarayıcınızda YouTube, Spotify Web, Apple Music ve SoundCloud sekmelerinde çalan parçanın başlığını, sanatçısını, kapak görseli adresini, oynatma durumunu ve ilerlemesini okur ve NahiDeck Windows uygulamasına iletir. Telefonunuzdan gelen oynatma, duraklatma ve ileri/geri komutlarını aynı uygulama üzerinden tarayıcıya uygular."],
        ["h", "Hangi veriler işlenir?"],
        ["table", ["Veri", "Nerede işlenir", "Amaç"], [
          ["Çalan parçanın başlığı, sanatçısı, oynatma durumu ve ilerlemesi", "Yalnızca sizin bilgisayarınızda; 127.0.0.1 (yerel bağlantı) üzerinden NahiDeck uygulamasına gider", "Telefonda parça bilgisini ve medya kontrollerini göstermek"],
          ["Eşleştirme parolası", "Tarayıcının kendi yerel depolamasında (chrome.storage.local)", "Eklentinin yalnızca yetkili NahiDeck uygulamasına bağlanması"],
          ["Dil ve tema tercihi", "Tarayıcının kendi yerel depolamasında", "Eklenti penceresini NahiDeck ile aynı dil ve temada göstermek"],
          ["Kapak görseli", "Eklenti görseli ilgili sitenin görsel sunucusundan indirir (ör. YouTube, Spotify, Apple Music)", "Telefonda parça kapağını göstermek. Bu istekte IP adresiniz o sunucuya görünür"]
        ]],
        ["h", "Neyi toplamıyoruz?"],
        ["ul", [
          "Ad, e-posta veya telefon gibi kişisel kimlik bilgilerini eklenti üzerinden almıyoruz.",
          "Gezinme geçmişinizi, açtığınız sayfaların içeriğini veya arama sorgularını kaydetmiyoruz.",
          "Analitik, izleme, reklam veya üçüncü taraf takip araçları kullanmıyoruz.",
          "Verilerinizi satmıyor ve kiralamıyoruz."
        ]],
        ["h", "Veriler nereye gitmez?"],
        ["p", "Parça bilgisi ve komutlar yalnızca bilgisayarınız ile NahiDeck uygulaması arasında, yerel bağlantı üzerinden akar. Eklentiden geliştiricinin sunucularına veri gönderilmez."],
        ["h", "Verilerinizi silme"],
        ["p", "Eklentiyi tarayıcınızdan kaldırdığınızda eşleştirme parolası ve tercihler de silinir. Ayrıca tarayıcınızın site verileri ayarlarından eklentinin yerel depolamasını temizleyebilirsiniz."],
        ["h", "Haklarınız ve iletişim"],
        ["p", "KVKK ve GDPR kapsamındaki haklarınızı kullanmak veya sorularınız için <strong>nahideck-support@googlegroups.com</strong> adresine yazabilirsiniz."],
        ["h", "Değişiklikler"],
        ["p", "Önemli değişiklikler bu sayfada yayınlanır ve güncelleme tarihi değiştirilir."],
        ["card", [
          ["p", "<strong>Veri sorumlusu:</strong> Kaya Furkan İPEKCİ"],
          ["p", "<strong>E-posta:</strong> nahideck-support@googlegroups.com"],
          ["p", "<strong>Web sitesi:</strong> https://nahideck.github.io"]
        ]],
      ]
    },

    en: {
      title: "NahiDeck Connect Privacy Policy",
      updated: "November 2, 2026",
      blocks: [
        ["p", "This policy explains what data the <strong>NahiDeck Connect</strong> browser extension processes. For the policy covering all NahiDeck products, see the Privacy Policy page."],
        ["h", "What does the extension do?"],
        ["p", "NahiDeck Connect reads the title, artist, cover image address, playback state and progress of the track playing in YouTube, Spotify Web, Apple Music and SoundCloud tabs in your browser, and forwards it to the NahiDeck Windows application. It also applies play, pause and next/previous commands sent from your phone through the same application."],
        ["h", "What data is processed?"],
        ["table", ["Data", "Where it is processed", "Purpose"], [
          ["Title, artist, playback state and progress of the playing track", "Only on your computer; it goes to the NahiDeck application over a local connection (127.0.0.1)", "Showing track information and media controls on your phone"],
          ["Pairing password", "In the browser's own local storage (chrome.storage.local)", "Connecting the extension only to your authorized NahiDeck application"],
          ["Language and theme preference", "In the browser's own local storage", "Showing the extension window in the same language and theme as NahiDeck"],
          ["Cover image", "The extension downloads the image from the site's image server (for example YouTube, Spotify, Apple Music)", "Showing the track cover on your phone. During this request your IP address is visible to that server"]
        ]],
        ["h", "What do we not collect?"],
        ["ul", [
          "We do not collect personal identity information such as name, email or phone number through the extension.",
          "We do not record your browsing history, the content of pages you open, or search queries.",
          "We do not use analytics, tracking, advertising or third-party tracking tools.",
          "We do not sell or rent your data."
        ]],
        ["h", "Where does the data not go?"],
        ["p", "Track information and commands travel only between your computer and the NahiDeck application, over the local connection. No data is sent from the extension to the developer's servers."],
        ["h", "Deleting your data"],
        ["p", "When you remove the extension from your browser, the pairing password and preferences are deleted too. You can also clear the extension's local storage from your browser's site data settings."],
        ["h", "Your rights and contact"],
        ["p", "To exercise your rights under the GDPR or the Turkish KVKK, or for any questions, write to <strong>nahideck-support@googlegroups.com</strong>."],
        ["h", "Changes"],
        ["p", "Material changes will be published on this page and the update date will be revised."],
        ["card", [
          ["p", "<strong>Data controller:</strong> Kaya Furkan İPEKCİ"],
          ["p", "<strong>Email:</strong> nahideck-support@googlegroups.com"],
          ["p", "<strong>Website:</strong> https://nahideck.github.io"]
        ]],
      ]
    },

    es: {
      title: "Política de privacidad de NahiDeck Connect",
      updated: "2 de noviembre de 2026",
      blocks: [
        ["p", "Esta política explica qué datos procesa la extensión de navegador <strong>NahiDeck Connect</strong>. Para la política que cubre todos los productos de NahiDeck, consulte la página de Política de privacidad."],
        ["h", "¿Qué hace la extensión?"],
        ["p", "NahiDeck Connect lee el título, el artista, la dirección de la imagen de portada, el estado de reproducción y el progreso de la pista que suena en las pestañas de YouTube, Spotify Web, Apple Music y SoundCloud de su navegador, y lo envía a la aplicación de Windows de NahiDeck. También aplica los comandos de reproducir, pausar y siguiente/anterior que envía desde su teléfono a través de la misma aplicación."],
        ["h", "¿Qué datos se procesan?"],
        ["table", ["Dato", "Dónde se procesa", "Finalidad"], [
          ["Título, artista, estado de reproducción y progreso de la pista", "Solo en su ordenador; se envía a la aplicación NahiDeck mediante una conexión local (127.0.0.1)", "Mostrar la información de la pista y los controles multimedia en su teléfono"],
          ["Contraseña de emparejamiento", "En el almacenamiento local del propio navegador (chrome.storage.local)", "Conectar la extensión solo con su aplicación NahiDeck autorizada"],
          ["Preferencia de idioma y tema", "En el almacenamiento local del navegador", "Mostrar la ventana de la extensión con el mismo idioma y tema que NahiDeck"],
          ["Imagen de portada", "La extensión descarga la imagen del servidor de imágenes del sitio (por ejemplo, YouTube, Spotify, Apple Music)", "Mostrar la portada de la pista en su teléfono. Durante esta solicitud, su dirección IP es visible para ese servidor"]
        ]],
        ["h", "¿Qué no recopilamos?"],
        ["ul", [
          "No recopilamos información de identidad personal, como nombre, correo electrónico o teléfono, a través de la extensión.",
          "No registramos su historial de navegación, el contenido de las páginas que abre ni sus búsquedas.",
          "No usamos analítica, seguimiento, publicidad ni herramientas de rastreo de terceros.",
          "No vendemos ni alquilamos sus datos."
        ]],
        ["h", "¿A dónde no van los datos?"],
        ["p", "La información de la pista y los comandos viajan solo entre su ordenador y la aplicación NahiDeck, mediante la conexión local. Desde la extensión no se envían datos a los servidores del desarrollador."],
        ["h", "Eliminar sus datos"],
        ["p", "Cuando quite la extensión de su navegador, también se borran la contraseña de emparejamiento y las preferencias. Además, puede borrar el almacenamiento local de la extensión desde los ajustes de datos de sitios de su navegador."],
        ["h", "Sus derechos y contacto"],
        ["p", "Para ejercer sus derechos conforme al RGPD o a la KVKK turca, o para cualquier consulta, escriba a <strong>nahideck-support@googlegroups.com</strong>."],
        ["h", "Cambios"],
        ["p", "Los cambios importantes se publicarán en esta página y se actualizará la fecha de modificación."],
        ["card", [
          ["p", "<strong>Responsable del tratamiento:</strong> Kaya Furkan İPEKCİ"],
          ["p", "<strong>Correo electrónico:</strong> nahideck-support@googlegroups.com"],
          ["p", "<strong>Sitio web:</strong> https://nahideck.github.io"]
        ]],
      ]
    },

    "pt-BR": {
      title: "Política de Privacidade do NahiDeck Connect",
      updated: "2 de novembro de 2026",
      blocks: [
        ["p", "Esta política explica quais dados a extensão de navegador <strong>NahiDeck Connect</strong> processa. Para a política que abrange todos os produtos NahiDeck, consulte a página de Política de Privacidade."],
        ["h", "O que a extensão faz?"],
        ["p", "O NahiDeck Connect lê o título, o artista, o endereço da imagem de capa, o estado de reprodução e o progresso da faixa que toca nas abas de YouTube, Spotify Web, Apple Music e SoundCloud do seu navegador, e envia essas informações ao aplicativo NahiDeck para Windows. Ele também aplica os comandos de tocar, pausar e avançar/voltar enviados pelo seu celular através do mesmo aplicativo."],
        ["h", "Quais dados são processados?"],
        ["table", ["Dado", "Onde é processado", "Finalidade"], [
          ["Título, artista, estado de reprodução e progresso da faixa", "Somente no seu computador; é enviado ao aplicativo NahiDeck por uma conexão local (127.0.0.1)", "Exibir as informações da faixa e os controles de mídia no seu celular"],
          ["Senha de pareamento", "No armazenamento local do próprio navegador (chrome.storage.local)", "Conectar a extensão somente ao seu aplicativo NahiDeck autorizado"],
          ["Preferência de idioma e tema", "No armazenamento local do navegador", "Exibir a janela da extensão no mesmo idioma e tema do NahiDeck"],
          ["Imagem de capa", "A extensão baixa a imagem do servidor de imagens do site (por exemplo, YouTube, Spotify, Apple Music)", "Exibir a capa da faixa no seu celular. Nessa requisição, seu endereço IP fica visível para esse servidor"]
        ]],
        ["h", "O que não coletamos?"],
        ["ul", [
          "Não coletamos informações de identidade pessoal, como nome, e-mail ou telefone, por meio da extensão.",
          "Não registramos seu histórico de navegação, o conteúdo das páginas que você abre nem suas pesquisas.",
          "Não usamos análises, rastreamento, publicidade nem ferramentas de rastreamento de terceiros.",
          "Não vendemos nem alugamos seus dados."
        ]],
        ["h", "Para onde os dados não vão?"],
        ["p", "As informações da faixa e os comandos trafegam apenas entre o seu computador e o aplicativo NahiDeck, pela conexão local. Nenhum dado é enviado da extensão aos servidores do desenvolvedor."],
        ["h", "Excluindo seus dados"],
        ["p", "Ao remover a extensão do navegador, a senha de pareamento e as preferências também são apagadas. Você também pode limpar o armazenamento local da extensão nas configurações de dados de sites do navegador."],
        ["h", "Seus direitos e contato"],
        ["p", "Para exercer seus direitos previstos na LGPD ou no GDPR, ou para qualquer dúvida, escreva para <strong>nahideck-support@googlegroups.com</strong>."],
        ["h", "Alterações"],
        ["p", "Alterações relevantes serão publicadas nesta página e a data de atualização será revisada."],
        ["card", [
          ["p", "<strong>Controlador dos dados:</strong> Kaya Furkan İPEKCİ"],
          ["p", "<strong>E-mail:</strong> nahideck-support@googlegroups.com"],
          ["p", "<strong>Site:</strong> https://nahideck.github.io"]
        ]],
      ]
    },

    de: {
      title: "NahiDeck Connect Datenschutzerklärung",
      updated: "2. November 2026",
      blocks: [
        ["p", "Diese Erklärung beschreibt, welche Daten die Browser-Erweiterung <strong>NahiDeck Connect</strong> verarbeitet. Die Erklärung für alle NahiDeck-Produkte finden Sie auf der Seite Datenschutzerklärung."],
        ["h", "Was macht die Erweiterung?"],
        ["p", "NahiDeck Connect liest Titel, Interpret, Adresse des Cover-Bilds, Wiedergabestatus und Fortschritt des Titels, der in den Tabs von YouTube, Spotify Web, Apple Music und SoundCloud in Ihrem Browser läuft, und leitet diese Angaben an die NahiDeck-Anwendung für Windows weiter. Außerdem setzt sie Wiedergabe-, Pause- sowie Weiter-/Zurück-Befehle um, die Sie über Ihr Telefon über dieselbe Anwendung senden."],
        ["h", "Welche Daten werden verarbeitet?"],
        ["table", ["Daten", "Wo verarbeitet", "Zweck"], [
          ["Titel, Interpret, Wiedergabestatus und Fortschritt des laufenden Titels", "Nur auf Ihrem Computer; sie gehen über eine lokale Verbindung (127.0.0.1) an die NahiDeck-Anwendung", "Anzeige der Titelinformationen und Medienbedienung auf Ihrem Telefon"],
          ["Kopplungspasswort", "Im eigenen lokalen Speicher des Browsers (chrome.storage.local)", "Verbindung der Erweiterung nur mit Ihrer berechtigten NahiDeck-Anwendung"],
          ["Sprach- und Designeinstellung", "Im lokalen Speicher des Browsers", "Anzeige des Erweiterungsfensters in derselben Sprache und demselben Design wie NahiDeck"],
          ["Cover-Bild", "Die Erweiterung lädt das Bild vom Bildserver der Website herunter (z. B. YouTube, Spotify, Apple Music)", "Anzeige des Titelcovers auf Ihrem Telefon. Bei dieser Anfrage ist Ihre IP-Adresse für diesen Server sichtbar"]
        ]],
        ["h", "Was erheben wir nicht?"],
        ["ul", [
          "Wir erheben über die Erweiterung keine persönlichen Identitätsdaten wie Name, E-Mail-Adresse oder Telefonnummer.",
          "Wir speichern weder Ihren Browserverlauf noch den Inhalt der von Ihnen geöffneten Seiten oder Suchanfragen.",
          "Wir verwenden keine Analyse-, Tracking-, Werbe- oder Drittanbieter-Tracking-Werkzeuge.",
          "Wir verkaufen oder vermieten Ihre Daten nicht."
        ]],
        ["h", "Wohin gehen die Daten nicht?"],
        ["p", "Titelinformationen und Befehle fließen ausschließlich zwischen Ihrem Computer und der NahiDeck-Anwendung über die lokale Verbindung. Von der Erweiterung werden keine Daten an Server des Entwicklers gesendet."],
        ["h", "Löschen Ihrer Daten"],
        ["p", "Wenn Sie die Erweiterung aus Ihrem Browser entfernen, werden das Kopplungspasswort und die Einstellungen ebenfalls gelöscht. Den lokalen Speicher der Erweiterung können Sie außerdem in den Website-Datenseinstellungen Ihres Browsers leeren."],
        ["h", "Ihre Rechte und Kontakt"],
        ["p", "Um Ihre Rechte nach DSGVO oder dem türkischen KVKK auszuüben oder bei Fragen, schreiben Sie an <strong>nahideck-support@googlegroups.com</strong>."],
        ["h", "Änderungen"],
        ["p", "Wesentliche Änderungen werden auf dieser Seite veröffentlicht und das Aktualisierungsdatum wird angepasst."],
        ["card", [
          ["p", "<strong>Verantwortlicher:</strong> Kaya Furkan İPEKCİ"],
          ["p", "<strong>E-Mail:</strong> nahideck-support@googlegroups.com"],
          ["p", "<strong>Website:</strong> https://nahideck.github.io"]
        ]],
      ]
    },

    fr: {
      title: "Politique de confidentialité de NahiDeck Connect",
      updated: "2 novembre 2026",
      blocks: [
        ["p", "Cette politique explique quelles données l'extension de navigateur <strong>NahiDeck Connect</strong> traite. Pour la politique couvrant l'ensemble des produits NahiDeck, consultez la page Politique de confidentialité."],
        ["h", "Que fait l'extension ?"],
        ["p", "NahiDeck Connect lit le titre, l'artiste, l'adresse de l'image de couverture, l'état de lecture et la progression du morceau en cours dans les onglets YouTube, Spotify Web, Apple Music et SoundCloud de votre navigateur, et les transmet à l'application NahiDeck pour Windows. Elle applique aussi les commandes lecture, pause et suivant/précédent envoyées depuis votre téléphone via cette même application."],
        ["h", "Quelles données sont traitées ?"],
        ["table", ["Donnée", "Lieu de traitement", "Finalité"], [
          ["Titre, artiste, état de lecture et progression du morceau", "Uniquement sur votre ordinateur ; transmises à l'application NahiDeck par une connexion locale (127.0.0.1)", "Afficher les informations du morceau et les commandes multimédias sur votre téléphone"],
          ["Mot de passe d'appairage", "Dans le stockage local du navigateur (chrome.storage.local)", "Connecter l'extension uniquement à votre application NahiDeck autorisée"],
          ["Préférence de langue et de thème", "Dans le stockage local du navigateur", "Afficher la fenêtre de l'extension dans la même langue et le même thème que NahiDeck"],
          ["Image de couverture", "L'extension télécharge l'image depuis le serveur d'images du site (par exemple YouTube, Spotify, Apple Music)", "Afficher la pochette du morceau sur votre téléphone. Lors de cette requête, votre adresse IP est visible par ce serveur"]
        ]],
        ["h", "Que ne collectons-nous pas ?"],
        ["ul", [
          "Nous ne collectons pas de données d'identité personnelles, comme le nom, l'e-mail ou le numéro de téléphone, via l'extension.",
          "Nous n'enregistrons ni votre historique de navigation, ni le contenu des pages que vous ouvrez, ni vos recherches.",
          "Nous n'utilisons ni outils d'analyse, de suivi, de publicité ni de pistage tiers.",
          "Nous ne vendons ni ne louons vos données."
        ]],
        ["h", "Où les données ne vont-elles pas ?"],
        ["p", "Les informations de morceau et les commandes ne circulent qu'entre votre ordinateur et l'application NahiDeck, par la connexion locale. Aucune donnée n'est envoyée depuis l'extension aux serveurs du développeur."],
        ["h", "Supprimer vos données"],
        ["p", "Lorsque vous retirez l'extension de votre navigateur, le mot de passe d'appairage et les préférences sont également supprimés. Vous pouvez aussi vider le stockage local de l'extension depuis les paramètres de données des sites de votre navigateur."],
        ["h", "Vos droits et contact"],
        ["p", "Pour exercer vos droits au titre du RGPD ou de la KVKK turque, ou pour toute question, écrivez à <strong>nahideck-support@googlegroups.com</strong>."],
        ["h", "Modifications"],
        ["p", "Les modifications importantes seront publiées sur cette page et la date de mise à jour sera révisée."],
        ["card", [
          ["p", "<strong>Responsable du traitement :</strong> Kaya Furkan İPEKCİ"],
          ["p", "<strong>E-mail :</strong> nahideck-support@googlegroups.com"],
          ["p", "<strong>Site web :</strong> https://nahideck.github.io"]
        ]],
      ]
    },

    az: {
      title: "NahiDeck Connect Məxfilik Siyasəti",
      updated: "2 noyabr 2026",
      blocks: [
        ["p", "Bu siyasət <strong>NahiDeck Connect</strong> brauzer genişlənməsinin hansı məlumatları emal etdiyini izah edir. Bütün NahiDeck məhsullarını əhatə edən siyasət üçün Məxfilik Siyasəti səhifəsinə baxın."],
        ["h", "Genişlənmə nə edir?"],
        ["p", "NahiDeck Connect brauzerinizdə YouTube, Spotify Web, Apple Music və SoundCloud sekmələrində çalan mahnının adını, ifaçısını, örtük şəkli ünvanını, oynatma vəziyyətini və irəliləməsini oxuyur və bunları NahiDeck Windows tətbiqinə ötürür. Telefonunuzdan gələn oynatma, pauza və növbəti/əvvəlki komandalarını da eyni tətbiq vasitəsilə brauzerə tətbiq edir."],
        ["h", "Hansı məlumatlar emal olunur?"],
        ["table", ["Məlumat", "Harada emal olunur", "Məqsəd"], [
          ["Çalan mahnının adı, ifaçısı, oynatma vəziyyəti və irəliləməsi", "Yalnız kompüterinizdə; yerli bağlantı (127.0.0.1) ilə NahiDeck tətbiqinə göndərilir", "Telefonda mahnı məlumatını və media idarəetmə düymələrini göstərmək"],
          ["Cütləşdirmə parolu", "Brauzerin öz yerli yaddaşında (chrome.storage.local)", "Genişlənmənin yalnız səlahiyyətli NahiDeck tətbiqinizə qoşulması"],
          ["Dil və mövzu seçimi", "Brauzerin yerli yaddaşında", "Genişlənmə pəncərəsini NahiDeck ilə eyni dil və mövzuda göstərmək"],
          ["Örtük şəkli", "Genişlənmə şəkli saytın şəkil serverindən yükləyir (məsələn, YouTube, Spotify, Apple Music)", "Telefonda mahnı örtüyünü göstərmək. Bu sorğu zamanı IP ünvanınız həmin serverə görünür"]
        ]],
        ["h", "Nələri toplamırıq?"],
        ["ul", [
          "Genişlənmə vasitəsilə ad, e-poçt və ya telefon kimi şəxsi kimlik məlumatlarını toplamırıq.",
          "Baxdığınız səhifələrin tarixçəsini, açdığınız səhifələrin məzmununu və axtarış sorğularınızı qeyd etmirik.",
          "Analitika, izləmə, reklam və üçüncü tərəf izləmə alətlərindən istifadə etmirik.",
          "Məlumatlarınızı satmırıq və icarəyə vermirik."
        ]],
        ["h", "Məlumatlar hara getmir?"],
        ["p", "Mahnı məlumatı və komandalar yalnız kompüterinizlə NahiDeck tətbiqi arasında, yerli bağlantı üzrə hərəkət edir. Genişlənmədən inkişafçının serverlərinə heç bir məlumat göndərilmir."],
        ["h", "Məlumatlarınızı silmək"],
        ["p", "Genişlənməni brauzerinizdən sildikdə cütləşdirmə parolu və seçimlər də silinir. Həmçinin brauzerinizin sayt məlumatları parametrlərindən genişlənmənin yerli yaddaşını təmizləyə bilərsiniz."],
        ["h", "Hüquqlarınız və əlaqə"],
        ["p", "GDPR və ya Türkiyə KVKK üzrə hüquqlarınızı həyata keçirmək və ya suallarınız üçün <strong>nahideck-support@googlegroups.com</strong> ünvanına yazın."],
        ["h", "Dəyişikliklər"],
        ["p", "Əhəmiyyətli dəyişikliklər bu səhifədə dərc olunacaq və yenilənmə tarixi dəyişdiriləcək."],
        ["card", [
          ["p", "<strong>Məlumat sahibi:</strong> Kaya Furkan İPEKCİ"],
          ["p", "<strong>E-poçt:</strong> nahideck-support@googlegroups.com"],
          ["p", "<strong>Veb sayt:</strong> https://nahideck.github.io"]
        ]],
      ]
    },

    "zh-TW": {
      title: "NahiDeck Connect 隱私權政策",
      updated: "2026 年 11 月 2 日",
      blocks: [
        ["p", "本政策說明 <strong>NahiDeck Connect</strong> 瀏覽器擴充功能會處理哪些資料。涵蓋所有 NahiDeck 產品的政策，請見隱私權政策頁面。"],
        ["h", "擴充功能做什麼？"],
        ["p", "NahiDeck Connect 會讀取您瀏覽器中 YouTube、Spotify Web、Apple Music 和 SoundCloud 分頁正在播放的曲目標題、演出者、封面圖片網址、播放狀態與進度，並將其傳送到 NahiDeck Windows 應用程式。它也會套用您從手機透過同一應用程式傳來的播放、暫停及上一首/下一首指令。"],
        ["h", "會處理哪些資料？"],
        ["table", ["資料", "處理位置", "用途"], [
          ["正在播放曲目的標題、演出者、播放狀態與進度", "僅在您的電腦上；透過本機連線（127.0.0.1）傳送到 NahiDeck 應用程式", "在手機上顯示曲目資訊與媒體控制"],
          ["配對密碼", "瀏覽器自身的本機儲存空間（chrome.storage.local）", "確保擴充功能只連線到您已授權的 NahiDeck 應用程式"],
          ["語言與主題偏好", "瀏覽器的本機儲存空間", "讓擴充功能視窗與 NahiDeck 使用相同的語言和主題"],
          ["封面圖片", "擴充功能會從網站的圖片伺服器（例如 YouTube、Spotify、Apple Music）下載圖片", "在手機上顯示曲目封面。此請求期間，您的 IP 位址會對該伺服器可見"]
        ]],
        ["h", "我們不收集什麼？"],
        ["ul", [
          "我們不會透過擴充功能收集姓名、電子郵件或電話等個人身分資料。",
          "我們不會記錄您的瀏覽紀錄、您開啟之頁面的內容或搜尋查詢。",
          "我們不使用分析、追蹤、廣告或第三方追蹤工具。",
          "我們不會出售或出租您的資料。"
        ]],
        ["h", "資料不會去哪裡？"],
        ["p", "曲目資訊與指令只會透過本機連線，在您的電腦與 NahiDeck 應用程式之間傳遞。擴充功能不會將任何資料傳送到開發者的伺服器。"],
        ["h", "刪除您的資料"],
        ["p", "當您從瀏覽器移除擴充功能時，配對密碼與偏好設定也會一併刪除。您也可以在瀏覽器的網站資料設定中清除擴充功能的本機儲存空間。"],
        ["h", "您的權利與聯絡方式"],
        ["p", "若要行使 GDPR 或土耳其 KVKK 下的權利，或有任何問題，請寫信至 <strong>nahideck-support@googlegroups.com</strong>。"],
        ["h", "變更"],
        ["p", "重大變更會發布在本頁，並更新日期。"],
        ["card", [
          ["p", "<strong>資料控制者：</strong>Kaya Furkan İPEKCİ"],
          ["p", "<strong>電子郵件：</strong>nahideck-support@googlegroups.com"],
          ["p", "<strong>網站：</strong>https://nahideck.github.io"]
        ]],
      ]
    },

    "zh-CN": {
      title: "NahiDeck Connect 隐私政策",
      updated: "2026 年 11 月 2 日",
      blocks: [
        ["p", "本政策说明 <strong>NahiDeck Connect</strong> 浏览器扩展程序会处理哪些数据。涵盖所有 NahiDeck 产品的政策，请见隐私政策页面。"],
        ["h", "扩展程序做什么？"],
        ["p", "NahiDeck Connect 会读取您浏览器中 YouTube、Spotify Web、Apple Music 和 SoundCloud 标签页里正在播放的曲目标题、艺人、封面图片地址、播放状态与进度，并将其发送到 NahiDeck Windows 应用程序。它还会执行您从手机通过同一应用程序发送的播放、暂停及上一首/下一首指令。"],
        ["h", "会处理哪些数据？"],
        ["table", ["数据", "处理位置", "用途"], [
          ["正在播放曲目的标题、艺人、播放状态与进度", "仅在您的电脑上；通过本地连接（127.0.0.1）发送到 NahiDeck 应用程序", "在手机上显示曲目信息和媒体控制"],
          ["配对密码", "浏览器自身的本地存储（chrome.storage.local）", "确保扩展程序只连接到您已授权的 NahiDeck 应用程序"],
          ["语言与主题偏好", "浏览器的本地存储", "让扩展程序窗口与 NahiDeck 使用相同的语言和主题"],
          ["封面图片", "扩展程序从网站的图片服务器（例如 YouTube、Spotify、Apple Music）下载图片", "在手机上显示曲目封面。此请求期间，您的 IP 地址对该服务器可见"]
        ]],
        ["h", "我们不收集什么？"],
        ["ul", [
          "我们不会通过扩展程序收集姓名、电子邮件或电话等个人身份信息。",
          "我们不会记录您的浏览历史、您打开的页面内容或搜索查询。",
          "我们不使用分析、跟踪、广告或第三方追踪工具。",
          "我们不会出售或出租您的数据。"
        ]],
        ["h", "数据不会去哪里？"],
        ["p", "曲目信息和指令仅通过本地连接，在您的电脑与 NahiDeck 应用程序之间传输。扩展程序不会向开发者的服务器发送任何数据。"],
        ["h", "删除您的数据"],
        ["p", "从浏览器中移除扩展程序时，配对密码和偏好设置也会一并删除。您还可以在浏览器的网站数据设置中清除扩展程序的本地存储。"],
        ["h", "您的权利与联系方式"],
        ["p", "如需行使 GDPR 或土耳其 KVKK 下的权利，或有任何疑问，请写信至 <strong>nahideck-support@googlegroups.com</strong>。"],
        ["h", "变更"],
        ["p", "重大变更将发布在本页面，并更新日期。"],
        ["card", [
          ["p", "<strong>数据控制者：</strong>Kaya Furkan İPEKCİ"],
          ["p", "<strong>电子邮件：</strong>nahideck-support@googlegroups.com"],
          ["p", "<strong>网站：</strong>https://nahideck.github.io"]
        ]],
      ]
    }
  };

  // Her dil için "extension" belgesini legal.js tablosuna ekler.
  Object.keys(EXT).forEach(function (lang) {
    if (!window.NAHI_LEGAL[lang]) return;
    window.NAHI_LEGAL[lang].extension = EXT[lang];
  });
})();
