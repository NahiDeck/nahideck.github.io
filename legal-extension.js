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
      updated: "6 Kasım 2026",
      blocks: [
        ["p", "Bu politika, <strong>NahiDeck Connect</strong> tarayıcı eklentisinin hangi verileri işlediğini açıklar. Tüm NahiDeck ürünlerini kapsayan genel metin için Gizlilik Politikası sayfasına bakın."],
        ["h", "Eklenti ne yapar?"],
        ["p", "NahiDeck Connect; tarayıcınızda YouTube, Spotify Web, Apple Music ve SoundCloud sekmelerinde çalan parçanın başlığını, sanatçısını, kapak görseli adresini, oynatma durumunu, ilerlemesini, platform adını (ör. YouTube) ve sekme kimliğini okur ve bunları NahiDeck Windows uygulamasına iletir. Medya sekmelerini tanımak için açık sekmelerin adreslerine yalnızca tarayıcı içinde bakar; bu adresleri dışarı göndermez. Telefonunuzdan gelen oynatma, duraklatma ve ileri/geri komutlarını aynı uygulama üzerinden tarayıcıya uygular."],
        ["h", "Hangi veriler işlenir?"],
        ["table", ["Veri", "Nerede işlenir", "Amaç"], [
          ["Çalan parçanın başlığı, sanatçısı, oynatma durumu, ilerlemesi, platform adı ve sekme kimliği", "Yalnızca sizin bilgisayarınızda; 127.0.0.1 (yerel bağlantı) üzerinden NahiDeck uygulamasına gider", "Telefonda parça bilgisini göstermek ve komutu doğru sekmeye yönlendirmek"],
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
        ["p", "Veriler yalnızca sizin cihazlarınız arasında dolaşır: tarayıcınız, bilgisayarınızdaki NahiDeck uygulaması ve bu uygulamayla eşleştirdiğiniz telefon. Eklentiden geliştiricinin sunucularına veri gönderilmez."],
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
      updated: "November 6, 2026",
      blocks: [
        ["p", "This policy explains what data the <strong>NahiDeck Connect</strong> browser extension processes. For the policy covering all NahiDeck products, see the Privacy Policy page."],
        ["h", "What does the extension do?"],
        ["p", "NahiDeck Connect reads the title, artist, cover image address, playback state, progress, platform name (for example YouTube) and browser tab ID of the track playing in YouTube, Spotify Web, Apple Music and SoundCloud tabs in your browser, and forwards them to the NahiDeck Windows application. To recognize media tabs it looks at open tab addresses only inside the browser; it does not send those addresses anywhere. It also applies play, pause and next/previous commands sent from your phone through the same application."],
        ["h", "What data is processed?"],
        ["table", ["Data", "Where it is processed", "Purpose"], [
          ["Title, artist, playback state, progress, platform name and tab ID of the playing track", "Only on your computer; it goes to the NahiDeck application over a local connection (127.0.0.1)", "Showing track information on your phone and sending commands to the right tab"],
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
        ["p", "Data moves only between your own devices: your browser, the NahiDeck application on your computer, and the phone you paired with NahiDeck. Nothing is sent from the extension to the developer's servers."],
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
      updated: "6 de noviembre de 2026",
      blocks: [
        ["p", "Esta política explica qué datos procesa la extensión de navegador <strong>NahiDeck Connect</strong>. Para la política que cubre todos los productos de NahiDeck, consulte la página de Política de privacidad."],
        ["h", "¿Qué hace la extensión?"],
        ["p", "NahiDeck Connect lee el título, el artista, la dirección de la imagen de portada, el estado de reproducción, el progreso, el nombre de la plataforma (por ejemplo, YouTube) y el identificador de la pestaña del navegador de la pista que suena en las pestañas de YouTube, Spotify Web, Apple Music y SoundCloud, y lo envía a la aplicación de Windows de NahiDeck. Para reconocer las pestañas de medios solo consulta las direcciones de las pestañas abiertas dentro del navegador; no envía esas direcciones a ningún sitio. También aplica los comandos de reproducir, pausar y siguiente/anterior que envía desde su teléfono a través de la misma aplicación."],
        ["h", "¿Qué datos se procesan?"],
        ["table", ["Dato", "Dónde se procesa", "Finalidad"], [
          ["Título, artista, estado de reproducción, progreso, nombre de la plataforma e identificador de la pestaña de la pista", "Solo en su ordenador; se envía a la aplicación NahiDeck mediante una conexión local (127.0.0.1)", "Mostrar la información de la pista en su teléfono y dirigir el comando a la pestaña correcta"],
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
        ["p", "Los datos solo circulan entre sus propios dispositivos: el navegador, la aplicación NahiDeck de su ordenador y el teléfono que emparejó con NahiDeck. Desde la extensión no se envían datos a los servidores del desarrollador."],
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
      updated: "6 de novembro de 2026",
      blocks: [
        ["p", "Esta política explica quais dados a extensão de navegador <strong>NahiDeck Connect</strong> processa. Para a política que abrange todos os produtos NahiDeck, consulte a página de Política de Privacidade."],
        ["h", "O que a extensão faz?"],
        ["p", "O NahiDeck Connect lê o título, o artista, o endereço da imagem de capa, o estado de reprodução, o progresso, o nome da plataforma (por exemplo, YouTube) e o identificador da aba do navegador da faixa que toca nas abas de YouTube, Spotify Web, Apple Music e SoundCloud, e envia essas informações ao aplicativo NahiDeck para Windows. Para reconhecer as abas de mídia, ele consulta os endereços das abas abertas somente dentro do navegador; esses endereços não são enviados para lugar nenhum. Ele também aplica os comandos de tocar, pausar e avançar/voltar enviados pelo seu celular através do mesmo aplicativo."],
        ["h", "Quais dados são processados?"],
        ["table", ["Dado", "Onde é processado", "Finalidade"], [
          ["Título, artista, estado de reprodução, progresso, nome da plataforma e identificador da aba da faixa", "Somente no seu computador; é enviado ao aplicativo NahiDeck por uma conexão local (127.0.0.1)", "Exibir as informações da faixa no seu celular e direcionar o comando para a aba correta"],
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
        ["p", "Os dados circulam somente entre os seus próprios dispositivos: o navegador, o aplicativo NahiDeck no seu computador e o celular pareado com o NahiDeck. Nenhum dado é enviado da extensão aos servidores do desenvolvedor."],
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
      updated: "6. November 2026",
      blocks: [
        ["p", "Diese Erklärung beschreibt, welche Daten die Browser-Erweiterung <strong>NahiDeck Connect</strong> verarbeitet. Die Erklärung für alle NahiDeck-Produkte finden Sie auf der Seite Datenschutzerklärung."],
        ["h", "Was macht die Erweiterung?"],
        ["p", "NahiDeck Connect liest Titel, Interpret, Adresse des Cover-Bilds, Wiedergabestatus, Fortschritt, Plattformname (z. B. YouTube) und Tab-Kennung des Titels, der in den Tabs von YouTube, Spotify Web, Apple Music und SoundCloud in Ihrem Browser läuft, und leitet diese Angaben an die NahiDeck-Anwendung für Windows weiter. Um Medien-Tabs zu erkennen, prüft sie die Adressen geöffneter Tabs nur im Browser; diese Adressen werden nirgendwohin gesendet. Außerdem setzt sie Wiedergabe-, Pause- sowie Weiter-/Zurück-Befehle um, die Sie über Ihr Telefon über dieselbe Anwendung senden."],
        ["h", "Welche Daten werden verarbeitet?"],
        ["table", ["Daten", "Wo verarbeitet", "Zweck"], [
          ["Titel, Interpret, Wiedergabestatus, Fortschritt, Plattformname und Tab-Kennung des laufenden Titels", "Nur auf Ihrem Computer; sie gehen über eine lokale Verbindung (127.0.0.1) an die NahiDeck-Anwendung", "Anzeige der Titelinformationen auf Ihrem Telefon und Weiterleitung des Befehls an den richtigen Tab"],
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
        ["p", "Die Daten bewegen sich nur zwischen Ihren eigenen Geräten: Browser, NahiDeck-Anwendung auf Ihrem Computer und das mit NahiDeck gekoppelte Telefon. Von der Erweiterung werden keine Daten an Server des Entwicklers gesendet."],
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
      updated: "6 novembre 2026",
      blocks: [
        ["p", "Cette politique explique quelles données l'extension de navigateur <strong>NahiDeck Connect</strong> traite. Pour la politique couvrant l'ensemble des produits NahiDeck, consultez la page Politique de confidentialité."],
        ["h", "Que fait l'extension ?"],
        ["p", "NahiDeck Connect lit le titre, l'artiste, l'adresse de l'image de couverture, l'état de lecture, la progression, le nom de la plateforme (par exemple YouTube) et l'identifiant de l'onglet du morceau en cours dans les onglets YouTube, Spotify Web, Apple Music et SoundCloud de votre navigateur, et les transmet à l'application NahiDeck pour Windows. Pour reconnaître les onglets média, elle consulte les adresses des onglets ouverts uniquement dans le navigateur ; ces adresses ne sont envoyées nulle part. Elle applique aussi les commandes lecture, pause et suivant/précédent envoyées depuis votre téléphone via cette même application."],
        ["h", "Quelles données sont traitées ?"],
        ["table", ["Donnée", "Lieu de traitement", "Finalité"], [
          ["Titre, artiste, état de lecture, progression, nom de la plateforme et identifiant d'onglet du morceau", "Uniquement sur votre ordinateur ; transmises à l'application NahiDeck par une connexion locale (127.0.0.1)", "Afficher les informations du morceau sur votre téléphone et envoyer la commande au bon onglet"],
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
        ["p", "Les données ne circulent qu'entre vos propres appareils : le navigateur, l'application NahiDeck de votre ordinateur et le téléphone appairé avec NahiDeck. Aucune donnée n'est envoyée depuis l'extension aux serveurs du développeur."],
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
      updated: "6 noyabr 2026",
      blocks: [
        ["p", "Bu siyasət <strong>NahiDeck Connect</strong> brauzer genişlənməsinin hansı məlumatları emal etdiyini izah edir. Bütün NahiDeck məhsullarını əhatə edən siyasət üçün Məxfilik Siyasəti səhifəsinə baxın."],
        ["h", "Genişlənmə nə edir?"],
        ["p", "NahiDeck Connect brauzerinizdə YouTube, Spotify Web, Apple Music və SoundCloud sekmələrində çalan mahnının adını, ifaçısını, örtük şəkli ünvanını, oxutma vəziyyətini, irəliləməsini, platforma adını (məsələn, YouTube) və sekme identifikatorunu oxuyur və NahiDeck Windows tətbiqinə göndərir. Media sekmələrini tanımaq üçün açıq sekmələrin ünvanlarına yalnız brauzer daxilində baxır; bu ünvanları heç yerə göndərmir. Telefonunuzdan eyni tətbiq vasitəsilə gələn oxutma, durdurma və növbəti/əvvəlki əmrlərini də tətbiq edir."],
        ["h", "Hansı məlumatlar emal olunur?"],
        ["table", ["Məlumat", "Harada emal olunur", "Məqsəd"], [
          ["Çalan mahnının adı, ifaçısı, oxutma vəziyyəti, irəliləməsi, platforma adı və sekme identifikatoru", "Yalnız kompüterinizdə; yerli bağlantı (127.0.0.1) ilə NahiDeck tətbiqinə göndərilir", "Telefonda mahnı məlumatını göstərmək və əmri düzgün sekməyə yönəltmək"],
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
        ["p", "Məlumatlar yalnız sizin cihazlarınız arasında dolaşır: brauzeriniz, kompüterinizdəki NahiDeck tətbiqi və NahiDeck ilə cütləşdirdiyiniz telefon. Genişləndirmədən geliştiricinin serverlərinə heç bir məlumat göndərilmir."],
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
      updated: "2026 年 11 月 6 日",
      blocks: [
        ["p", "本政策說明 <strong>NahiDeck Connect</strong> 瀏覽器擴充功能會處理哪些資料。涵蓋所有 NahiDeck 產品的政策，請見隱私權政策頁面。"],
        ["h", "擴充功能做什麼？"],
        ["p", "NahiDeck Connect 會讀取您瀏覽器中 YouTube、Spotify Web、Apple Music 與 SoundCloud 分頁所播放曲目的標題、演出者、封面圖片位址、播放狀態、進度、平台名稱（例如 YouTube）與分頁識別碼，並傳送至 NahiDeck Windows 應用程式。為辨識媒體分頁，它只會在瀏覽器內部檢視已開啟分頁的位址，不會將這些位址傳送到任何地方。它也會套用您從手機透過同一應用程式傳送的播放、暫停及上一首／下一首指令。"],
        ["h", "會處理哪些資料？"],
        ["table", ["資料", "處理位置", "用途"], [
          ["所播放曲目的標題、演出者、播放狀態、進度、平台名稱與分頁識別碼", "僅在您的電腦上；透過本機連線（127.0.0.1）傳送到 NahiDeck 應用程式", "在手機上顯示曲目資訊，並將指令導向正確的分頁"],
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
        ["p", "資料僅會在您自己的裝置之間傳輸：瀏覽器、電腦上的 NahiDeck 應用程式，以及與 NahiDeck 配對的手機。擴充功能不會將任何資料傳送到開發者的伺服器。"],
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
      updated: "2026 年 11 月 6 日",
      blocks: [
        ["p", "本政策说明 <strong>NahiDeck Connect</strong> 浏览器扩展程序会处理哪些数据。涵盖所有 NahiDeck 产品的政策，请见隐私政策页面。"],
        ["h", "扩展程序做什么？"],
        ["p", "NahiDeck Connect 会读取您浏览器中 YouTube、Spotify Web、Apple Music 和 SoundCloud 标签页正在播放的曲目的标题、艺人、封面图片地址、播放状态、进度、平台名称（例如 YouTube）以及标签页标识，并转发给 NahiDeck Windows 应用程序。为识别媒体标签页，它只在浏览器内部查看已打开标签页的地址，不会将这些地址发送到任何地方。它还会执行您从手机通过同一应用程序发送的播放、暂停和上一首/下一首指令。"],
        ["h", "会处理哪些数据？"],
        ["table", ["数据", "处理位置", "用途"], [
          ["正在播放曲目的标题、艺人、播放状态、进度、平台名称与标签页标识", "仅在您的电脑上；通过本地连接（127.0.0.1）发送到 NahiDeck 应用程序", "在手机上显示曲目信息，并将命令发送到正确的标签页"],
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
        ["p", "数据仅在您自己的设备之间传输：浏览器、电脑上的 NahiDeck 应用程序，以及与 NahiDeck 配对的手机。扩展不会将任何数据发送到开发者的服务器。"],
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
    },

    // AWAITING_NATIVE_SPEAKER_REVIEW
    "pt-PT": {
      title: "Política de Privacidade do NahiDeck Connect",
      updated: "6 de novembro de 2026",
      blocks: [
        ["p", "Esta política explica que dados são processados pela extensão de navegador <strong>NahiDeck Connect</strong>. Para a política que abrange todos os produtos NahiDeck, consulte a página da Política de Privacidade."],
        ["h", "O que faz a extensão?"],
        ["p", "O NahiDeck Connect lê o título, o artista, o endereço da imagem de capa, o estado de reprodução, o progresso, o nome da plataforma (por exemplo, YouTube) e o identificador do separador do browser da faixa que toca nos separadores de YouTube, Spotify Web, Apple Music e SoundCloud, e envia-os para a aplicação NahiDeck para Windows. Para reconhecer os separadores de multimédia, consulta os endereços dos separadores abertos apenas dentro do browser; esses endereços não são enviados para lado nenhum. Também aplica os comandos de reproduzir, pausar e seguinte/anterior enviados do seu telemóvel através da mesma aplicação."],
        ["h", "Que dados são processados?"],
        ["table", ["Dados", "Onde são processados", "Finalidade"], [
          ["Título, artista, estado de reprodução, progresso, nome da plataforma e identificador do separador da faixa", "Apenas no seu computador; é enviado para a aplicação NahiDeck através de uma ligação local (127.0.0.1)", "Apresentar as informações da faixa no telemóvel e encaminhar o comando para o separador certo"],
          ["Palavra-passe de emparelhamento", "No armazenamento local do próprio navegador (chrome.storage.local)", "Ligar a extensão exclusivamente à sua aplicação NahiDeck autorizada"],
          ["Preferência de idioma e tema", "No armazenamento local do navegador", "Apresentar a janela da extensão com o mesmo idioma e tema do NahiDeck"],
          ["Imagem de capa", "A extensão descarrega a imagem a partir do servidor de imagens do website (por exemplo, YouTube, Spotify, Apple Music)", "Apresentar a capa da faixa no seu telemóvel. Durante este pedido, o seu endereço IP fica visível para esse servidor"]
        ]],
        ["h", "O que não recolhemos?"],
        ["ul", [
          "Não recolhemos informações de identificação pessoal como nome, e-mail ou número de telefone através da extensão.",
          "Não registamos o seu histórico de navegação, o conteúdo das páginas que visita ou consultas de pesquisa.",
          "Não utilizamos ferramentas analíticas, de rastreio, publicitárias ou de terceiros.",
          "Não vendemos nem alugamos os seus dados."
        ]],
        ["h", "Para onde não vão os dados?"],
        ["p", "Os dados circulam apenas entre os seus próprios dispositivos: o browser, a aplicação NahiDeck no seu computador e o telemóvel emparelhado com o NahiDeck. Nenhum dado é enviado da extensão para os servidores do programador."],
        ["h", "Eliminação dos seus dados"],
        ["p", "Quando remove a extensão do seu navegador, a palavra-passe de emparelhamento e as preferências são também eliminadas. Também pode limpar o armazenamento local da extensão nas definições de dados de sites do seu navegador."],
        ["h", "Os seus direitos e contacto"],
        ["p", "Para exercer os seus direitos ao abrigo do RGPD ou da lei de proteção de dados, ou para quaisquer questões, escreva para <strong>nahideck-support@googlegroups.com</strong>."],
        ["h", "Alterações"],
        ["p", "Alterações relevantes serão publicadas nesta página e a data de atualização será revista."],
        ["card", [
          ["p", "<strong>Responsável pelo tratamento:</strong> Kaya Furkan İPEKCİ"],
          ["p", "<strong>E-mail:</strong> nahideck-support@googlegroups.com"],
          ["p", "<strong>Website:</strong> https://nahideck.github.io"]
        ]],
      ]
    },

    // AWAITING_NATIVE_SPEAKER_REVIEW
    it: {
      title: "Informativa sulla privacy di NahiDeck Connect",
      updated: "6 novembre 2026",
      blocks: [
        ["p", "La presente informativa spiega quali dati vengono elaborati dall'estensione per browser <strong>NahiDeck Connect</strong>. Per l'informativa che copre tutti i prodotti NahiDeck, consulta la pagina dell'Informativa sulla privacy."],
        ["h", "Cosa fa l'estensione?"],
        ["p", "NahiDeck Connect legge titolo, artista, indirizzo dell'immagine di copertina, stato di riproduzione, avanzamento, nome della piattaforma (ad esempio YouTube) e identificativo della scheda del brano in riproduzione nelle schede di YouTube, Spotify Web, Apple Music e SoundCloud, e li invia all'applicazione NahiDeck per Windows. Per riconoscere le schede multimediali consulta gli indirizzi delle schede aperte solo all'interno del browser; questi indirizzi non vengono inviati da nessuna parte. Applica inoltre i comandi di riproduzione, pausa e brano successivo/precedente inviati dal telefono tramite la stessa applicazione."],
        ["h", "Quali dati vengono elaborati?"],
        ["table", ["Dati", "Dove vengono elaborati", "Finalità"], [
          ["Titolo, artista, stato di riproduzione, avanzamento, nome della piattaforma e identificativo della scheda del brano", "Esclusivamente sul tuo computer; vengono inviati all'applicazione NahiDeck tramite una connessione locale (127.0.0.1)", "Mostrare le informazioni sul brano sullo smartphone e inviare il comando alla scheda giusta"],
          ["Password di associazione", "Nella memoria locale del browser (chrome.storage.local)", "Connettere l'estensione solo alla tua applicazione NahiDeck autorizzata"],
          ["Preferenze di lingua e tema", "Nella memoria locale del browser", "Mostrare la finestra dell'estensione con la stessa lingua e lo stesso tema di NahiDeck"],
          ["Immagine di copertina", "L'estensione scarica l'immagine dal server delle immagini del sito (ad esempio YouTube, Spotify, Apple Music)", "Mostrare la copertina del brano sullo smartphone. Durante questa richiesta, il tuo indirizzo IP è visibile a quel server"]
        ]],
        ["h", "Cosa non raccogliamo?"],
        ["ul", [
          "Non raccogliamo informazioni di identificazione personale come nome, email o numero di telefono tramite l'estensione.",
          "Non registriamo la tua cronologia di navigazione, il contenuto delle pagine aperte o le query di ricerca.",
          "Non utilizziamo strumenti di analisi, tracciamento, pubblicità o di terze parti.",
          "Non vendiamo né cediamo in locazione i tuoi dati."
        ]],
        ["h", "Dove non vanno i dati?"],
        ["p", "I dati circolano solo tra i tuoi dispositivi: il browser, l'applicazione NahiDeck sul computer e lo smartphone abbinato a NahiDeck. Dall'estensione non vengono inviati dati ai server dello sviluppatore."],
        ["h", "Cancellazione dei tuoi dati"],
        ["p", "Quando rimuovi l'estensione dal browser, vengono cancellate anche la password di associazione e le preferenze. Puoi anche cancellare la memoria locale dell'estensione dalle impostazioni dei dati dei siti del tuo browser."],
        ["h", "I tuoi diritti e contatti"],
        ["p", "Per esercitare i tuoi diritti ai sensi del GDPR o della normativa applicabile, o per qualsiasi domanda, scrivi a <strong>nahideck-support@googlegroups.com</strong>."],
        ["h", "Modifiche"],
        ["p", "Le modifiche sostanziali saranno pubblicate su questa pagina con l'aggiornamento della data di revisione."],
        ["card", [
          ["p", "<strong>Titolare del trattamento:</strong> Kaya Furkan İPEKCİ"],
          ["p", "<strong>Email:</strong> nahideck-support@googlegroups.com"],
          ["p", "<strong>Sito web:</strong> https://nahideck.github.io"]
        ]],
      ]
    },

    // AWAITING_NATIVE_SPEAKER_REVIEW
    pl: {
      title: "Polityka prywatności NahiDeck Connect",
      updated: "6 listopada 2026",
      blocks: [
        ["p", "Niniejsza polityka wyjaśnia, jakie dane przetwarza rozszerzenie przeglądarki <strong>NahiDeck Connect</strong>. Ogólne zasady dotyczące wszystkich produktów NahiDeck znajdują się na stronie Polityki prywatności."],
        ["h", "Co robi rozszerzenie?"],
        ["p", "NahiDeck Connect odczytuje tytuł, wykonawcę, adres obrazka okładki, stan odtwarzania, postęp, nazwę platformy (np. YouTube) i identyfikator karty przeglądarki odtwarzanego utworu na kartach YouTube, Spotify Web, Apple Music i SoundCloud, i przekazuje je do aplikacji NahiDeck dla Windows. Aby rozpoznać karty z multimediami, sprawdza adresy otwartych kart wyłącznie w przeglądarce; adresy te nigdzie nie są wysyłane. Stosuje też polecenia odtwarzania, pauzy oraz następny/poprzedni utwór wysłane z telefonu przez tę samą aplikację."],
        ["h", "Jakie dane są przetwarzane?"],
        ["table", ["Dane", "Gdzie są przetwarzane", "Cel"], [
          ["Tytuł, wykonawca, stan odtwarzania, postęp, nazwa platformy i identyfikator karty odtwarzanego utworu", "Wyłącznie na Twoim komputerze; przesyłane do aplikacji NahiDeck przez połączenie lokalne (127.0.0.1)", "Wyświetlanie informacji o utworze na telefonie i kierowanie polecenia do właściwej karty"],
          ["Hasło parowania", "W lokalnej pamięci samej przeglądarki (chrome.storage.local)", "Łączenie rozszerzenia wyłącznie z Twoją autoryzowaną aplikacją NahiDeck"],
          ["Preferencje językowe i motywu", "W lokalnej pamięci przeglądarki", "Wyświetlanie okna rozszerzenia w tym samym języku i motywie co NahiDeck"],
          ["Okładka utworu", "Rozszerzenie pobiera grafikę z serwera graficznego danej witryny (np. YouTube, Spotify, Apple Music)", "Wyświetlanie okładki utworu na telefonie. Podczas tego żądania Twój adres IP jest widoczny dla tego serwera"]
        ]],
        ["h", "Czego nie zbieramy?"],
        ["ul", [
          "Nie gromadzimy za pośrednictwem rozszerzenia danych osobowych, takich jak imię i nazwisko, adres e-mail czy numer telefonu.",
          "Nie rejestrujemy Twojej historii przeglądania, zawartości otwieranych stron ani zapytań wyszukiwania.",
          "Nie korzystamy z narzędzi analitycznych, śledzących, reklamowych ani rozwiązań innych firm.",
          "Nie sprzedajemy ani nie wynajmujemy Twoich danych."
        ]],
        ["h", "Gdzie dane nie trafiają?"],
        ["p", "Dane krążą wyłącznie między Twoimi urządzeniami: przeglądarką, aplikacją NahiDeck na komputerze i telefonem sparowanym z NahiDeck. Z rozszerzenia nie są wysyłane żadne dane na serwery dewelopera."],
        ["h", "Usuwanie danych"],
        ["p", "Po usunięciu rozszerzenia z przeglądarki hasło parowania i preferencje zostają usunięte. Możesz również wyczyścić pamięć lokalną rozszerzenia w ustawieniach danych witryn w przeglądarce."],
        ["h", "Twoje prawa i kontakt"],
        ["p", "Aby skorzystać z praw przysługujących na mocy RODO lub przepisów o ochronie danych albo zadać pytania, napisz na adres <strong>nahideck-support@googlegroups.com</strong>."],
        ["h", "Zmiany"],
        ["p", "Istotne zmiany będą publikowane na tej stronie wraz ze zaktualizowaną datą."],
        ["card", [
          ["p", "<strong>Administrator danych:</strong> Kaya Furkan İPEKCİ"],
          ["p", "<strong>E-mail:</strong> nahideck-support@googlegroups.com"],
          ["p", "<strong>Strona internetowa:</strong> https://nahideck.github.io"]
        ]],
      ]
    },

    // AWAITING_NATIVE_SPEAKER_REVIEW
    ru: {
      title: "Политика конфиденциальности NahiDeck Connect",
      updated: "6 ноября 2026 г.",
      blocks: [
        ["p", "Настоящая политика описывает, какие данные обрабатывает браузерное расширение <strong>NahiDeck Connect</strong>. С общими положениями для всех продуктов NahiDeck можно ознакомиться на странице Политики конфиденциальности."],
        ["h", "Что делает расширение?"],
        ["p", "NahiDeck Connect считывает название, исполнителя, адрес обложки, статус воспроизведения, прогресс, название платформы (например, YouTube) и идентификатор вкладки браузера для трека, который играет на вкладках YouTube, Spotify Web, Apple Music и SoundCloud, и передаёт их приложению NahiDeck для Windows. Чтобы распознавать медиавкладки, адреса открытых вкладок проверяются только внутри браузера; эти адреса никуда не отправляются. Также применяются команды воспроизведения, паузы и следующий/предыдущий трек, отправленные с телефона через то же приложение."],
        ["h", "Какие данные обрабатываются?"],
        ["table", ["Данные", "Где обрабатываются", "Цель"], [
          ["Название, исполнитель, статус воспроизведения, прогресс, название платформы и идентификатор вкладки трека", "Только на вашем компьютере; передаются в приложение NahiDeck по локальному соединению (127.0.0.1)", "Отображение информации о треке на телефоне и отправка команды нужной вкладке"],
          ["Пароль сопряжения", "В локальном хранилище самого браузера (chrome.storage.local)", "Подключение расширения исключительно к вашему авторизованному приложению NahiDeck"],
          ["Настройки языка и темы", "В локальном хранилище браузера", "Отображение окна расширения на том же языке и с той же темой оформления, что и в NahiDeck"],
          ["Изображение обложки", "Расширение загружает изображение с серверов соответствующего сайта (например, YouTube, Spotify, Apple Music)", "Отображение обложки трека на телефоне. При этом запросе ваш IP-адрес виден этому серверу"]
        ]],
        ["h", "Что мы не собираем?"],
        ["ul", [
          "Мы не собираем персональные идентификационные данные, такие как имя, адрес эл. почты или номер телефона, через расширение.",
          "Мы не фиксируем историю посещений, содержимое просматриваемых страниц или поисковые запросы.",
          "Мы не используем средства аналитики, отслеживания, рекламы или сторонние трекеры.",
          "Мы не продаем и не передаем ваши данные в аренду."
        ]],
        ["h", "Куда данные не передаются?"],
        ["p", "Данные передаются только между вашими устройствами: браузером, приложением NahiDeck на компьютере и телефоном, сопряжённым с NahiDeck. Из расширения никакие данные не отправляются на серверы разработчика."],
        ["h", "Удаление данных"],
        ["p", "При удалении расширения из браузера пароль сопряжения и настройки также удаляются. Вы также можете очистить локальное хранилище расширения в настройках данных сайтов вашего браузера."],
        ["h", "Ваши права и контакты"],
        ["p", "Для реализации прав по GDPR или турецкому закону KVKK, а также при возникновении вопросов напишите нам по адресу <strong>nahideck-support@googlegroups.com</strong>."],
        ["h", "Изменения"],
        ["p", "Существенные изменения будут публиковаться на этой странице с обновлением даты редакции."],
        ["card", [
          ["p", "<strong>Оператор данных:</strong> Kaya Furkan İPEKCİ"],
          ["p", "<strong>Электронная почта:</strong> nahideck-support@googlegroups.com"],
          ["p", "<strong>Веб-сайт:</strong> https://nahideck.github.io"]
        ]],
      ]
    },

    // AWAITING_NATIVE_SPEAKER_REVIEW
    id: {
      title: "Kebijakan Privasi NahiDeck Connect",
      updated: "6 November 2026",
      blocks: [
        ["p", "Kebijakan ini menjelaskan data apa yang diproses oleh ekstensi browser <strong>NahiDeck Connect</strong>. Untuk kebijakan yang mencakup semua produk NahiDeck, lihat halaman Kebijakan Privasi."],
        ["h", "Apa yang dilakukan ekstensi?"],
        ["p", "NahiDeck Connect membaca judul, artis, alamat gambar sampul, status pemutaran, progres, nama platform (misalnya YouTube), dan ID tab browser dari trek yang diputar di tab YouTube, Spotify Web, Apple Music, dan SoundCloud, lalu meneruskannya ke aplikasi NahiDeck untuk Windows. Untuk mengenali tab media, alamat tab yang terbuka hanya diperiksa di dalam browser; alamat tersebut tidak dikirim ke mana pun. Perintah putar, jeda, serta berikutnya/sebelumnya yang Anda kirim dari ponsel melalui aplikasi yang sama juga diterapkan."],
        ["h", "Data apa yang diproses?"],
        ["table", ["Data", "Tempat diproses", "Tujuan"], [
          ["Judul, artis, status pemutaran, progres, nama platform, dan ID tab dari trek yang sedang diputar", "Hanya di komputer Anda; dikirim ke aplikasi NahiDeck melalui koneksi lokal (127.0.0.1)", "Menampilkan informasi trek di ponsel dan mengarahkan perintah ke tab yang tepat"],
          ["Kata sandi pemasangan", "Di penyimpanan lokal browser itu sendiri (chrome.storage.local)", "Menghubungkan ekstensi hanya ke aplikasi NahiDeck resmi Anda"],
          ["Preferensi bahasa dan tema", "Di penyimpanan lokal browser", "Menampilkan jendela ekstensi dalam bahasa dan tema yang sama dengan NahiDeck"],
          ["Gambar sampul", "Ekstensi mengunduh gambar dari server gambar situs (misalnya YouTube, Spotify, Apple Music)", "Menampilkan sampul trek di ponsel Anda. Selama permintaan ini, alamat IP Anda terlihat oleh server tersebut"]
        ]],
        ["h", "Apa yang tidak kami kumpulkan?"],
        ["ul", [
          "Kami tidak mengumpulkan informasi identitas pribadi seperti nama, email, atau nomor telepon melalui ekstensi.",
          "Kami tidak mencatat riwayat penjelajahan, konten halaman yang Anda buka, atau kueri penelusuran.",
          "Kami tidak menggunakan analitik, pelacakan, iklan, atau alat pelacakan pihak ketiga.",
          "Kami tidak menjual atau menyewakan data Anda."
        ]],
        ["h", "Ke mana data tidak dikirim?"],
        ["p", "Data hanya berpindah di antara perangkat Anda sendiri: browser, aplikasi NahiDeck di komputer, dan ponsel yang dipasangkan dengan NahiDeck. Tidak ada data yang dikirim dari ekstensi ke server pengembang."],
        ["h", "Menghapus data Anda"],
        ["p", "Saat Anda menghapus ekstensi dari browser, kata sandi pemasangan dan preferensi juga akan dihapus. Anda juga dapat menghapus penyimpanan lokal ekstensi dari pengaturan data situs browser Anda."],
        ["h", "Hak Anda dan kontak"],
        ["p", "Untuk menggunakan hak Anda berdasarkan GDPR atau KVKK, atau jika ada pertanyaan, hubungi <strong>nahideck-support@googlegroups.com</strong>."],
        ["h", "Perubahan"],
        ["p", "Perubahan penting akan dipublikasikan di halaman ini dan tanggal pembaruan akan disesuaikan."],
        ["card", [
          ["p", "<strong>Pengendali data:</strong> Kaya Furkan İPEKCİ"],
          ["p", "<strong>Email:</strong> nahideck-support@googlegroups.com"],
          ["p", "<strong>Situs web:</strong> https://nahideck.github.io"]
        ]],
      ]
    },

    // AWAITING_NATIVE_SPEAKER_REVIEW
    vi: {
      title: "Chính sách quyền riêng tư của NahiDeck Connect",
      updated: "6 tháng 11 năm 2026",
      blocks: [
        ["p", "Chính sách này giải thích dữ liệu nào được tiện ích mở rộng trình duyệt <strong>NahiDeck Connect</strong> xử lý. Để xem chính sách chung áp dụng cho tất cả sản phẩm NahiDeck, vui lòng truy cập trang Chính sách quyền riêng tư."],
        ["h", "Tiện ích này làm gì?"],
        ["p", "NahiDeck Connect đọc tiêu đề, nghệ sĩ, địa chỉ ảnh bìa, trạng thái phát, tiến trình, tên nền tảng (ví dụ YouTube) và mã thẻ trình duyệt của bài hát đang phát trên các thẻ YouTube, Spotify Web, Apple Music và SoundCloud, rồi chuyển đến ứng dụng NahiDeck cho Windows. Để nhận diện thẻ phương tiện, tiện ích chỉ xem địa chỉ các thẻ đang mở bên trong trình duyệt; các địa chỉ này không được gửi đi đâu cả. Tiện ích cũng thực hiện các lệnh phát, tạm dừng và bài trước/bài sau được gửi từ điện thoại qua cùng ứng dụng."],
        ["h", "Dữ liệu nào được xử lý?"],
        ["table", ["Dữ liệu", "Nơi xử lý", "Mục đích"], [
          ["Tiêu đề, nghệ sĩ, trạng thái phát, tiến trình, tên nền tảng và mã thẻ của bài hát đang phát", "Chỉ trên máy tính của bạn; được gửi tới ứng dụng NahiDeck qua kết nối cục bộ (127.0.0.1)", "Hiển thị thông tin bài hát trên điện thoại và chuyển lệnh tới đúng thẻ"],
          ["Mật khẩu ghép nối", "Trong bộ nhớ cục bộ của chính trình duyệt (chrome.storage.local)", "Chỉ kết nối tiện ích với ứng dụng NahiDeck được ủy quyền của bạn"],
          ["Tùy chọn ngôn ngữ và chủ đề", "Trong bộ nhớ cục bộ của trình duyệt", "Hiển thị cửa sổ tiện ích cùng ngôn ngữ và chủ đề với NahiDeck"],
          ["Ảnh bìa", "Tiện ích tải ảnh từ máy chủ hình ảnh của trang web (ví dụ: YouTube, Spotify, Apple Music)", "Hiển thị ảnh bìa bài hát trên điện thoại. Trong yêu cầu này, địa chỉ IP của bạn hiển thị với máy chủ đó"]
        ]],
        ["h", "Chúng tôi không thu thập những gì?"],
        ["ul", [
          "Chúng tôi không thu thập thông tin nhận dạng cá nhân như tên, email hoặc số điện thoại qua tiện ích.",
          "Chúng tôi không ghi lại lịch sử duyệt web, nội dung trang bạn mở hoặc các truy vấn tìm kiếm.",
          "Chúng tôi không sử dụng công cụ phân tích, theo dõi, quảng cáo hoặc trình theo dõi của bên thứ ba.",
          "Chúng tôi không bán hoặc cho thuê dữ liệu của bạn."
        ]],
        ["h", "Dữ liệu không đi đâu?"],
        ["p", "Dữ liệu chỉ lưu chuyển giữa các thiết bị của bạn: trình duyệt, ứng dụng NahiDeck trên máy tính và điện thoại đã ghép nối với NahiDeck. Không có dữ liệu nào được gửi từ tiện ích tới máy chủ của nhà phát triển."],
        ["h", "Xóa dữ liệu của bạn"],
        ["p", "Khi bạn gỡ tiện ích khỏi trình duyệt, mật khẩu ghép nối và các tùy chọn cũng sẽ bị xóa. Bạn cũng có thể xóa bộ nhớ cục bộ của tiện ích trong cài đặt dữ liệu trang web của trình duyệt."],
        ["h", "Quyền của bạn và liên hệ"],
        ["p", "Để thực hiện quyền theo GDPR hoặc luật KVKK của Thổ Nhĩ Kỳ, hoặc khi có bất kỳ câu hỏi nào, vui lòng gửi thư tới <strong>nahideck-support@googlegroups.com</strong>."],
        ["h", "Thay đổi"],
        ["p", "Các thay đổi quan trọng sẽ được đăng trên trang này kèm ngày cập nhật mới."],
        ["card", [
          ["p", "<strong>Bên kiểm soát dữ liệu:</strong> Kaya Furkan İPEKCİ"],
          ["p", "<strong>Email:</strong> nahideck-support@googlegroups.com"],
          ["p", "<strong>Trang web:</strong> https://nahideck.github.io"]
        ]],
      ]
    },

    // AWAITING_NATIVE_SPEAKER_REVIEW
    ja: {
      title: "NahiDeck Connect プライバシーポリシー",
      updated: "2026年11月6日",
      blocks: [
        ["p", "本ポリシーは、<strong>NahiDeck Connect</strong> ブラウザ拡張機能が処理するデータについて説明するものです。NahiDeckのすべての製品を対象とする全体的な方針については、プライバシーポリシーページをご覧ください。"],
        ["h", "拡張機能の役割"],
        ["p", "NahiDeck Connect は、ブラウザーの YouTube、Spotify Web、Apple Music、SoundCloud のタブで再生中のトラックのタイトル、アーティスト、カバー画像のアドレス、再生状態、進捗、プラットフォーム名（例: YouTube）、ブラウザータブの識別子を読み取り、NahiDeck Windows アプリに転送します。メディアタブを見分けるため、開いているタブのアドレスはブラウザー内でのみ確認し、どこにも送信しません。スマートフォンから同じアプリ経由で送られる再生、一時停止、次／前のトラックの操作も適用します。"],
        ["h", "処理されるデータ"],
        ["table", ["データ", "処理場所", "目的"], [
          ["再生中トラックのタイトル、アーティスト、再生状態、進捗、プラットフォーム名、タブ識別子", "お客様のPC上のみ。ローカル接続（127.0.0.1）経由でNahiDeckアプリに送信されます", "スマートフォン上にトラック情報を表示し、操作を正しいタブへ届けるため"],
          ["ペアリングパスワード", "ブラウザ自身のローカルストレージ（chrome.storage.local）内", "拡張機能を許可されたNahiDeckアプリにのみ接続するため"],
          ["言語およびテーマ設定", "ブラウザ自身のローカルストレージ内", "拡張機能ウィンドウをNahiDeckと同じ言語およびテーマで表示するため"],
          ["ジャケット画像", "拡張機能が該当サイトの画像サーバー（例：YouTube、Spotify、Apple Music）からダウンロードします", "スマートフォン上にトラックカバーを表示するため。このリクエスト中、お客様のIPアドレスはそのサーバーに表示されます"]
        ]],
        ["h", "収集しない情報"],
        ["ul", [
          "拡張機能を通じて氏名、メールアドレス、電話番号などの個人を特定できる情報を収集することはありません。",
          "閲覧履歴、開いたページのコンテンツ、検索クエリを記録することはありません。",
          "分析、トラッキング、広告、またはサードパーティの追跡ツールを使用することはありません。",
          "お客様のデータを販売または貸与することはありません。"
        ]],
        ["h", "データが送信されない場所"],
        ["p", "データは、お客様のブラウザー、PC上のNahiDeckアプリ、NahiDeckとペアリングしたスマートフォンの間でのみ送受信されます。拡張機能から開発者のサーバーへデータは送信されません。"],
        ["h", "データの削除"],
        ["p", "ブラウザから拡張機能を削除すると、ペアリングパスワードおよび設定も削除されます。また、ブラウザのサイトデータ設定から拡張機能のローカルストレージを手動で消去することもできます。"],
        ["h", "お客様の権利と連絡先"],
        ["p", "GDPRまたはトルコKVKKに基づく権利を行使する場合、あるいはご質問がある場合は、<strong>nahideck-support@googlegroups.com</strong> までご連絡ください。"],
        ["h", "改定"],
        ["p", "重要な変更がある場合は、本ページで公開され、更新日が改定されます。"],
        ["card", [
          ["p", "<strong>データ管理者：</strong> Kaya Furkan İPEKCİ"],
          ["p", "<strong>メールアドレス：</strong> nahideck-support@googlegroups.com"],
          ["p", "<strong>ウェブサイト：</strong> https://nahideck.github.io"]
        ]],
      ]
    },

    // AWAITING_NATIVE_SPEAKER_REVIEW
    ko: {
      title: "NahiDeck Connect 개인정보 처리방침",
      updated: "2026년 11월 6일",
      blocks: [
        ["p", "본 방침은 <strong>NahiDeck Connect</strong> 브라우저 확장 프로그램이 처리하는 데이터에 대해 설명합니다. 모든 NahiDeck 제품을 포괄하는 전반적인 방침은 개인정보 처리방침 페이지를 참조해 주십시오."],
        ["h", "확장 프로그램의 기능"],
        ["p", "NahiDeck Connect는 브라우저의 YouTube, Spotify Web, Apple Music, SoundCloud 탭에서 재생 중인 곡의 제목, 아티스트, 커버 이미지 주소, 재생 상태, 진행률, 플랫폼 이름(예: YouTube), 브라우저 탭 식별자를 읽어 NahiDeck Windows 애플리케이션으로 전달합니다. 미디어 탭을 식별하기 위해 열려 있는 탭의 주소는 브라우저 안에서만 확인하며, 이 주소는 어디에도 전송되지 않습니다. 휴대폰에서 같은 애플리케이션을 통해 보낸 재생, 일시정지, 이전/다음 곡 명령도 적용합니다."],
        ["h", "처리되는 데이터"],
        ["table", ["데이터", "처리 위치", "목적"], [
          ["재생 중인 곡의 제목, 아티스트, 재생 상태, 진행률, 플랫폼 이름, 탭 식별자", "사용자의 컴퓨터에서만 처리되며 로컬 연결(127.0.0.1)을 통해 NahiDeck 애플리케이션으로 전송됩니다", "휴대폰에 트랙 정보를 표시하고 명령을 올바른 탭으로 전달하기 위함"],
          ["페어링 비밀번호", "브라우저 자체 로컬 저장소(chrome.storage.local) 내부", "확장 프로그램을 승인된 NahiDeck 애플리케이션에만 연결하기 위함"],
          ["언어 및 테마 환경설정", "브라우저 자체 로컬 저장소 내부", "확장 프로그램 창을 NahiDeck과 동일한 언어 및 테마로 표시하기 위함"],
          ["커버 이미지", "확장 프로그램이 해당 사이트의 이미지 서버(예: YouTube, Spotify, Apple Music)에서 다운로드", "스마트폰에 앨범 커버를 표시하기 위함. 이 요청 중 사용자의 IP 주소가 해당 서버에 노출됩니다"]
        ]],
        ["h", "수집하지 않는 항목"],
        ["ul", [
          "확장 프로그램을 통해 이름, 이메일, 전화번호와 같은 개인 식별 정보를 일체 수집하지 않습니다.",
          "인터넷 사용 기록, 방문한 페이지 내용 또는 검색어를 기록하지 않습니다.",
          "분석, 추적, 광고 또는 제3자 추적 도구를 사용하지 않습니다.",
          "이용자의 데이터를 판매하거나 대여하지 않습니다."
        ]],
        ["h", "데이터가 전송되지 않는 곳"],
        ["p", "데이터는 사용자의 기기 사이에서만 오갑니다: 브라우저, 컴퓨터의 NahiDeck 애플리케이션, NahiDeck와 페어링된 휴대폰. 확장 프로그램에서 개발자의 서버로 전송되는 데이터는 없습니다."],
        ["h", "데이터 삭제"],
        ["p", "브라우저에서 확장 프로그램을 제거하면 페어링 비밀번호와 환경설정도 함께 삭제됩니다. 또한 브라우저의 사이트 데이터 설정에서 확장 프로그램의 로컬 저장소를 직접 삭제할 수 있습니다."],
        ["h", "이용자의 권리 및 문의"],
        ["p", "GDPR 또는 튀르키예 KVKK에 따른 권리를 행사하거나 문의 사항이 있는 경우 <strong>nahideck-support@googlegroups.com</strong>으로 문의해 주십시오."],
        ["h", "변경 사항"],
        ["p", "중요한 변경 사항은 본 페이지에 게시되며 업데이트 날짜가 갱신됩니다."],
        ["card", [
          ["p", "<strong>개인정보 처리자:</strong> Kaya Furkan İPEKCİ"],
          ["p", "<strong>이메일:</strong> nahideck-support@googlegroups.com"],
          ["p", "<strong>웹사이트:</strong> https://nahideck.github.io"]
        ]],
      ]
    },

    // AWAITING_NATIVE_SPEAKER_REVIEW
    hi: {
      title: "NahiDeck Connect गोपनीयता नीति",
      updated: "6 नवंबर 2026",
      blocks: [
        ["p", "यह नीति बताती है कि <strong>NahiDeck Connect</strong> ब्राउज़र एक्सटेंशन किस डेटा को संसाधित करता है। सभी NahiDeck उत्पादों को कवर करने वाली नीति के लिए, गोपनीयता नीति पृष्ठ देखें।"],
        ["h", "एक्सटेंशन क्या करता है?"],
        ["p", "NahiDeck Connect आपके ब्राउज़र में YouTube, Spotify Web, Apple Music और SoundCloud टैब पर चल रहे ट्रैक का शीर्षक, कलाकार, कवर इमेज का पता, प्लेबैक स्थिति, प्रगति, प्लेटफ़ॉर्म नाम (जैसे YouTube) और ब्राउज़र टैब पहचानकर्ता पढ़ता है, और उन्हें NahiDeck Windows एप्लिकेशन को भेजता है। मीडिया टैब पहचानने के लिए खुले टैब के पते केवल ब्राउज़र के भीतर देखे जाते हैं; ये पते कहीं भेजे नहीं जाते। यह फ़ोन से उसी एप्लिकेशन के ज़रिए भेजे गए चलाने, रोकने और अगला/पिछला ट्रैक करने के आदेश भी लागू करता है।"],
        ["h", "कौन सा डेटा प्रोसेस किया जाता है?"],
        ["table", ["डेटा", "कहाँ प्रोसेस किया जाता है", "उद्देश्य"], [
          ["चल रहे ट्रैक का शीर्षक, कलाकार, प्लेबैक स्थिति, प्रगति, प्लेटफ़ॉर्म नाम और टैब पहचानकर्ता", "केवल आपके कंप्यूटर पर; यह स्थानीय कनेक्शन (127.0.0.1) पर NahiDeck एप्लिकेशन पर जाता है", "फ़ोन पर ट्रैक जानकारी दिखाना और आदेश को सही टैब तक पहुँचाना"],
          ["पेयरिंग पासवर्ड", "ब्राउज़र के अपने स्थानीय संग्रहण में (chrome.storage.local)", "एक्सटेंशन को केवल आपके अधिकृत NahiDeck एप्लिकेशन से कनेक्ट करना"],
          ["भाषा और थीम प्राथमिकता", "ब्राउज़र के स्थानीय संग्रहण में", "NahiDeck के समान भाषा और थीम में एक्सटेंशन विंडो दिखाना"],
          ["कवर छवि", "एक्सटेंशन साइट के छवि सर्वर (उदाहरण के लिए YouTube, Spotify, Apple Music) से छवि डाउनलोड करता है", "फ़ोन पर ट्रैक कवर दिखाना। इस अनुरोध के दौरान आपका आईपी पता उस सर्वर को दिखाई देता है"]
        ]],
        ["h", "हम क्या एकत्र नहीं करते हैं?"],
        ["ul", [
          "हम एक्सटेंशन के माध्यम से नाम, ईमेल या फ़ोन नंबर जैसी व्यक्तिगत पहचान जानकारी एकत्र नहीं करते हैं।",
          "हम आपके ब्राउज़िंग इतिहास, आपके द्वारा खोले जाने वाले पृष्ठों की सामग्री या खोज प्रश्नों को रिकॉर्ड नहीं करते हैं।",
          "हम एनालिटिक्स, ट्रैकिंग, विज्ञापन या तीसरे पक्ष के ट्रैकिंग टूल का उपयोग नहीं करते हैं।",
          "हम आपका डेटा बेचते या किराए पर नहीं देते हैं।"
        ]],
        ["h", "डेटा कहाँ नहीं जाता है?"],
        ["p", "डेटा केवल आपके अपने उपकरणों के बीच आता-जाता है: ब्राउज़र, कंप्यूटर पर NahiDeck एप्लिकेशन और NahiDeck से जोड़ा गया फ़ोन। एक्सटेंशन से डेवलपर के सर्वरों पर कोई डेटा नहीं भेजा जाता।"],
        ["h", "अपना डेटा हटाना"],
        ["p", "जब आप ब्राउज़र से एक्सटेंशन हटाते हैं, तो पेयरिंग पासवर्ड और प्राथमिकताएं भी हटा दी जाती हैं। आप अपने ब्राउज़र की साइट डेटा सेटिंग्स से एक्सटेंशन के स्थानीय संग्रहण को भी साफ़ कर सकते हैं।"],
        ["h", "आपके अधिकार और संपर्क"],
        ["p", "GDPR या तुर्की KVKK के तहत अपने अधिकारों का प्रयोग करने के लिए, या किसी भी प्रश्न के लिए, <strong>nahideck-support@googlegroups.com</strong> पर लिखें।"],
        ["h", "परिवर्तन"],
        ["p", "महत्वपूर्ण परिवर्तन इस पृष्ठ पर प्रकाशित किए जाएंगे और अद्यतन तिथि संशोधित की जाएगी।"],
        ["card", [
          ["p", "<strong>डेटा नियंत्रक:</strong> Kaya Furkan İPEKCİ"],
          ["p", "<strong>ईमेल:</strong> nahideck-support@googlegroups.com"],
          ["p", "<strong>वेबसाइट:</strong> https://nahideck.github.io"]
        ]],
      ]
    },

    // AWAITING_NATIVE_SPEAKER_REVIEW
    my: {
      title: "NahiDeck Connect ကိုယ်ရေးအချက်အလက် လုံခြုံမှုမူဝါဒ",
      updated: "၂၀၂၆ နိုဝင်ဘာ ၆",
      blocks: [
        ["p", "ဤမူဝါဒသည် <strong>NahiDeck Connect</strong> ဘရောက်ဆာ extension က မည်သည့်ဒေတာကို စီမံဆောင်ရွက်သည်ကို ရှင်းပြထားပါသည်။ NahiDeck ထုတ်ကုန်အားလုံးနှင့် သက်ဆိုင်သည့် အထွေထွေမူဝါဒအတွက် ကိုယ်ရေးလုံခြုံမှုမူဝါဒ စာမျက်နှာတွင် ကြည့်ရှုပါ။"],
        ["h", "Extension က မည်သို့လုပ်ဆောင်သနည်း။"],
        ["p", "NahiDeck Connect သည် သင့်ဘရောက်ဆာရှိ YouTube၊ Spotify Web၊ Apple Music နှင့် SoundCloud တဘ်များတွင် ဖွင့်နေသော သီချင်း၏ ခေါင်းစဉ်၊ အဆိုတော်၊ အုပ်ဖုံးပုံလိပ်စာ၊ ဖွင့်နေသည့်အခြေအနေ၊ တိုးတက်မှု၊ ပလက်ဖောင်းအမည် (ဥပမာ YouTube) နှင့် ဘရောက်ဆာတဘ်အမှတ်အသားကို ဖတ်ပြီး NahiDeck Windows အက်ပ်သို့ ပို့ပါသည်။ မီဒီယာတဘ်များကို ခွဲခြားရန် ဖွင့်ထားသောတဘ်လိပ်စာများကို ဘရောက်ဆာအတွင်းတွင်သာ စစ်ဆေးပြီး ထိုလိပ်စာများကို မည်သည့်နေရာသို့မျှ မပို့ပါ။ ဖုန်းမှ တူညီသောအက်ပ်ဖြင့် ပို့သော ဖွင့်/ရပ်/နောက်တစ်ပုဒ်/ယခင်တစ်ပုဒ် အမိန့်များကိုလည်း လုပ်ဆောင်ပါသည်။"],
        ["h", "မည်သည့်ဒေတာများကို လုပ်ဆောင်သနည်း။"],
        ["table", ["ဒေတာ", "မည်သည့်နေရာတွင် လုပ်ဆောင်သနည်း", "ရည်ရွယ်ချက်"], [
          ["ဖွင့်နေသော သီချင်း၏ ခေါင်းစဉ်၊ အဆိုတော်၊ ဖွင့်နေသည့်အခြေအနေ၊ တိုးတက်မှု၊ ပလက်ဖောင်းအမည်နှင့် တဘ်အမှတ်အသား", "သင့်ကွန်ပျူတာပေါ်တွင်သာ ဖြစ်ပြီး ဒေသတွင်းချိတ်ဆက်မှု (127.0.0.1) မှတစ်ဆင့် NahiDeck အက်ပ်သို့ ရောက်ရှိပါသည်", "ဖုန်းပေါ်တွင် သီချင်းအချက်အလက်ကို ပြသရန်နှင့် အမိန့်ကို မှန်ကန်သောတဘ်သို့ ပို့ရန်"],
          ["တွဲချိတ်မှုစကားဝှက်", "ဘရောက်ဆာ၏ ကိုယ်ပိုင်ဒေသတွင်းသိုလှောင်မှု (chrome.storage.local) အတွင်း", "Extension ကို သင်ခွင့်ပြုထားသော NahiDeck အက်ပ်နှင့်သာ ချိတ်ဆက်ရန်"],
          ["ဘာသာစကားနှင့် သီးသန့်ပုံစံရွေးချယ်မှု", "ဘရောက်ဆာ၏ ကိုယ်ပိုင်ဒေသတွင်းသိုလှောင်မှုအတွင်း", "Extension ဝင်းဒိုးကို NahiDeck နှင့် ဘာသာစကားနှင့် သီးသန့်ပုံစံတူညီစွာ ပြသရန်"],
          ["အယ်လ်ဘမ်ကာဗာပုံ", "Extension သည် သက်ဆိုင်ရာဆိုက်၏ ဆာဗာ (ဥပမာ YouTube, Spotify, Apple Music) မှ ပုံကို ရယူပါသည်", "ဖုန်းတွင် သီချင်းကာဗာပုံ ပြသရန်။ ဤတောင်းဆိုမှုအတွင်း သင့် IP လိပ်စာသည် အဆိုပါဆာဗာသို့ ပေါ်လွင်မည်ဖြစ်ပါသည်"]
        ]],
        ["h", "ကျွန်ုပ်တို့ မည်သည့်အရာများကို မစုဆောင်းသနည်း။"],
        ["ul", [
          "Extension မှတစ်ဆင့် အမည်၊ အီးမေးလ် သို့မဟုတ် ဖုန်းနံပါတ်ကဲ့သို့သော ကိုယ်ရေးကိုယ်တာအချက်အလက်များကို မစုဆောင်းပါ။",
          "သင့်ဘရောက်ဆာရှာဖွေမှုမှတ်တမ်း၊ သင်ဖွင့်ကြည့်သော စာမျက်နှာအကြောင်းအရာများ သို့မဟုတ် ရှာဖွေမှုများကို မှတ်တမ်းမတင်ပါ။",
          "ခွဲခြမ်းစိတ်ဖြာမှု၊ ခြေရာခံမှု၊ ကြော်ငြာ သို့မဟုတ် ပြင်ပခြေရာခံကိရိယာများကို အသုံးမပြုပါ။",
          "သင့်ဒေတာများကို ရောင်းချခြင်း သို့မဟုတ် ငှားရမ်းခြင်း မပြုပါ။"
        ]],
        ["h", "ဒေတာများ မည်သည့်နေရာသို့ မရောက်ရှိသနည်း။"],
        ["p", "ဒေတာများသည် သင့်ကိုယ်ပိုင်စက်ပစ္စည်းများကြားတွင်သာ သွားလာပါသည်: ဘရောက်ဆာ၊ ကွန်ပျူတာပေါ်ရှိ NahiDeck အက်ပ်နှင့် NahiDeck နှင့် တွဲချိတ်ထားသော ဖုန်း။ ဤ Extension မှ developer ၏ ဆာဗာများသို့ ဒေတာမပို့ပါ။"],
        ["h", "သင့်ဒေတာများကို ဖျက်ပစ်ခြင်း"],
        ["p", "ဘရောက်ဆာမှ extension ကို ဖယ်ရှားလိုက်ပါက တွဲချိတ်မှုစကားဝှက်နှင့် ရွေးချယ်မှုများလည်း ပျက်ပြယ်သွားမည်ဖြစ်ပါသည်။ ဘရောက်ဆာ၏ ဆိုက်ဒေတာဆက်တင်များမှတစ်ဆင့်လည်း extension ၏ ဒေသတွင်းသိုလှောင်မှုကို ရှင်းလင်းနိုင်ပါသည်။"],
        ["h", "သင့်အခွင့်အရေးများနှင့် ဆက်သွယ်ရန်"],
        ["p", "GDPR သို့မဟုတ် တူရကီ KVKK အရ သင့်အခွင့်အရေးများကို ကျင့်သုံးရန် သို့မဟုတ် မေးခွန်းများရှိပါက <strong>nahideck-support@googlegroups.com</strong> သို့ စာရေးသားပေးပို့ပါ။"],
        ["h", "ပြောင်းလဲမှုများ"],
        ["p", "အရေးကြီးသော ပြောင်းလဲမှုများကို ဤစာမျက်နှာတွင် ဖော်ပြမည်ဖြစ်ပြီး ပြင်ဆင်သည့်ရက်စွဲကို အသစ်ပြုပြင်ပါမည်။"],
        ["card", [
          ["p", "<strong>ဒေတာထိန်းချုပ်သူ -</strong> Kaya Furkan İPEKCİ"],
          ["p", "<strong>အီးမေးလ် -</strong> nahideck-support@googlegroups.com"],
          ["p", "<strong>ဝဘ်ဆိုက် -</strong> https://nahideck.github.io"]
        ]],
      ]
    },

    // AWAITING_NATIVE_SPEAKER_REVIEW
    ar: {
      title: "سياسة خصوصية NahiDeck Connect",
      updated: "٦ نوفمبر ٢٠٢٦",
      blocks: [
        ["p", "توضح هذه السياسة ماهية البيانات التي تعالجها إضافة المتصفح <strong>NahiDeck Connect</strong>. للاطلاع على السياسة العامة التي تغطي جميع منتجات NahiDeck، يرجى مراجعة صفحة سياسة الخصوصية."],
        ["h", "ماذا تفعل الإضافة؟"],
        ["p", "يقرأ NahiDeck Connect عنوان المقطع الجاري تشغيله واسم الفنان وعنوان صورة الغلاف وحالة التشغيل والتقدم واسم المنصة (مثل YouTube) ومعرّف تبويب المتصفح في تبويبات YouTube وSpotify Web وApple Music وSoundCloud، ويرسلها إلى تطبيق NahiDeck لنظام Windows. لتمييز تبويبات الوسائط، تُفحص عناوين التبويبات المفتوحة داخل المتصفح فقط، ولا تُرسل هذه العناوين إلى أي جهة. كما ينفّذ أوامر التشغيل والإيقاف المؤقت والمقطع التالي/السابق المُرسلة من هاتفك عبر التطبيق نفسه."],
        ["h", "ما البيانات التي تتم معالجتها؟"],
        ["table", ["البيانات", "مكان المعالجة", "الغرض"], [
          ["عنوان المقطع الجاري واسم الفنان وحالة التشغيل والتقدم واسم المنصة ومعرّف التبويب", "على جهاز الكمبيوتر الخاص بك فقط؛ تُرسل إلى تطبيق NahiDeck عبر اتصال محلي (127.0.0.1)", "عرض معلومات المقطع على الهاتف وتوجيه الأمر إلى التبويب الصحيح"],
          ["كلمة مرور الاقتران", "في التخزين المحلي للمتصفح نفسه (chrome.storage.local)", "ربط الإضافة بتطبيق NahiDeck المصرح به فقط"],
          ["تفضيلات اللغة والمظهر", "في التخزين المحلي للمتصفح", "عرض نافذة الإضافة بنفس لغة ومظهر NahiDeck"],
          ["صورة الغلاف", "تقوم الإضافة بتنزيل الصورة من خادم صور الموقع (مثل YouTube أو Spotify أو Apple Music)", "عرض غلاف المقطع على الهاتف. خلال هذا الطلب، يكون عنوان IP الخاص بك مرئيًا لذلك الخادم"]
        ]],
        ["h", "ما الذي لا نجمعه؟"],
        ["ul", [
          "لا نجمع معلومات الهوية الشخصية مثل الاسم أو البريد الإلكتروني أو رقم الهاتف عبر الإضافة.",
          "لا نسجل سجل التصفح أو محتوى الصفحات التي تفتحها أو استعلامات البحث.",
          "لا نستخدم أدوات التحليلات أو التتبع أو الإعلانات أو أدوات التتبع التابعة لجهات خارجية.",
          "لا نبيع بياناتك ولا نؤجرها."
        ]],
        ["h", "إلى أين لا تذهب البيانات؟"],
        ["p", "تنتقل البيانات بين أجهزتك فقط: المتصفح وتطبيق NahiDeck على جهاز الكمبيوتر والهاتف المقترن بـ NahiDeck. لا تُرسل أي بيانات من الملحق إلى خوادم المطوّر."],
        ["h", "حذف بياناتك"],
        ["p", "عند إزالة الإضافة من متصفحك، يتم حذف كلمة مرور الاقتران والتفضيلات أيضًا. يمكنك أيضًا مسح التخزين المحلي للإضافة من إعدادات بيانات المواقع في متصفحك."],
        ["h", "حقوقك والتواصل"],
        ["p", "لممارسة حقوقك بموجب اللائحة العامة لحماية البيانات (GDPR) أو قانون KVKK التركي، أو لأي استفسار، راسلنا على <strong>nahideck-support@googlegroups.com</strong>."],
        ["h", "التعديلات"],
        ["p", "سيتم نشر التعديلات الجوهرية على هذه الصفحة مع تحديث تاريخ المراجعة."],
        ["card", [
          ["p", "<strong>مراقب البيانات:</strong> Kaya Furkan İPEKCİ"],
          ["p", "<strong>البريد الإلكتروني:</strong> nahideck-support@googlegroups.com"],
          ["p", "<strong>الموقع الإلكتروني:</strong> https://nahideck.github.io"]
        ]],
      ]
    },

    // AWAITING_NATIVE_SPEAKER_REVIEW
    fa: {
      title: "سیاست حفظ حریم خصوصی NahiDeck Connect",
      updated: "۶ نوامبر ۲۰۲۶",
      blocks: [
        ["p", "این سیاست توضیح می‌دهد که افزونه مرورگر <strong>NahiDeck Connect</strong> چه داده‌هایی را پردازش می‌کند. برای سیاست جامعی که تمام محصولات NahiDeck را شامل می‌شود، صفحه سیاست حفظ حریم خصوصی را ببینید."],
        ["h", "افزونه چه کاری انجام می‌دهد؟"],
        ["p", "NahiDeck Connect عنوان، هنرمند، نشانی تصویر جلد، وضعیت پخش، پیشرفت، نام پلتفرم (مثلاً YouTube) و شناسه تب مرورگر آهنگ در حال پخش در تب‌های YouTube، Spotify Web، Apple Music و SoundCloud را می‌خواند و به برنامه NahiDeck برای Windows می‌فرستد. برای شناسایی تب‌های رسانه‌ای، نشانی تب‌های باز فقط در داخل مرورگر بررسی می‌شود و این نشانی‌ها به هیچ جا فرستاده نمی‌شوند. همچنین فرمان‌های پخش، توقف و آهنگ بعد/قبل را که از گوشی از طریق همان برنامه فرستاده می‌شوند اعمال می‌کند."],
        ["h", "چه داده‌هایی پردازش می‌شوند؟"],
        ["table", ["داده", "محل پردازش", "هدف"], [
          ["عنوان، هنرمند، وضعیت پخش، پیشرفت، نام پلتفرم و شناسه تب آهنگ در حال پخش", "فقط روی رایانه شما؛ از طریق اتصال محلی (127.0.0.1) به برنامه NahiDeck ارسال می‌شود", "نمایش مشخصات آهنگ روی گوشی و ارسال فرمان به تب درست"],
          ["رمز عبور جفت‌سازی", "در حافظه محلی خود مرورگر (chrome.storage.local)", "اتصال افزونه تنها به برنامه مجاز NahiDeck شما"],
          ["تنظیمات برگزیده زبان و پوسته", "در حافظه محلی مرورگر", "نمایش پنجره افزونه با همان زبان و پوسته NahiDeck"],
          ["تصویر کاور", "افزونه تصویر را از سرور تصاویر سایت مربوطه (مانند YouTube، Spotify، Apple Music) دانلود می‌کند", "نمایش کاور قطعه روی گوشی. در حین این درخواست، آدرس IP شما برای آن سرور قابل مشاهده است"]
        ]],
        ["h", "چه مواردی را جمع‌آوری نمی‌کنیم؟"],
        ["ul", [
          "ما اطلاعات هویتی شخصی مانند نام، ایمیل یا شماره تلفن را از طریق افزونه جمع‌آوری نمی‌کنیم.",
          "تاریخچه مرور وب، محتوای صفحات بازشده یا عبارت‌های جستجوی شما را ثبت نمی‌کنیم.",
          "از ابزارهای تحلیل، ردیابی، تبلیغاتی یا ردیاب‌های شخص ثالث استفاده نمی‌کنیم.",
          "داده‌های شما را به فروش نمی‌رسانیم و اجاره نمی‌دهیم."
        ]],
        ["h", "داده‌ها به کجا ارسال نمی‌شوند؟"],
        ["p", "داده‌ها فقط بین دستگاه‌های خودتان جابه‌جا می‌شوند: مرورگر، برنامه NahiDeck روی رایانه و گوشی جفت‌شده با NahiDeck. هیچ داده‌ای از افزونه به سرورهای توسعه‌دهنده فرستاده نمی‌شود."],
        ["h", "حذف داده‌های شما"],
        ["p", "هنگامی که افزونه را از مرورگر خود حذف می‌کنید، رمز عبور جفت‌سازی و تنظیمات نیز حذف می‌شوند. همچنین می‌توانید حافظه محلی افزونه را از بخش تنظیمات داده‌های سایت در مرورگر خود پاک کنید."],
        ["h", "حقوق شما و راه‌های ارتباطی"],
        ["p", "برای اعمال حقوق خود ذیل GDPR یا قانون KVKK ترکیه، یا برای هرگونه سوال، به <strong>nahideck-support@googlegroups.com</strong> ایمیل بزنید."],
        ["h", "تغییرات"],
        ["p", "تغییرات اساسی در این صفحه منتشر شده و تاریخ به‌روزرسانی تغییر خواهد کرد."],
        ["card", [
          ["p", "<strong>کنترل‌کننده داده:</strong> Kaya Furkan İPEKCİ"],
          ["p", "<strong>ایمیل:</strong> nahideck-support@googlegroups.com"],
          ["p", "<strong>وب‌سایت:</strong> https://nahideck.github.io"]
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
