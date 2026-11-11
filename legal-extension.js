/*
 * NahiDeck Connect — Tarayıcı Eklentisi Gizlilik Politikası (21 dil).
 * Kaynak: docs/site önceki sürümündeki extension-privacy.html veextension-privacy-en.html.
 * window.NAHI_LEGAL nesnesine her dil için .extension alanını ekler.
 */
(function () {
  if (!window.NAHI_LEGAL) return;
  var EXT = {
    tr: {
      title: "NahiDeck Connect Gizlilik Politikası",
      updated: "11 Kasım 2026",
      blocks: [
      ["p", "Bu politika, <strong>NahiDeck Connect</strong> tarayıcı eklentisinin hangi verileri işlediğini açıklar. Tüm NahiDeck ürünlerini kapsayan genel metin için Gizlilik Politikası sayfasına bakın."],
      ["h", "Eklenti ne yapar?"],
      ["p", "NahiDeck Connect; tarayıcınızda YouTube, Spotify Web, Apple Music ve SoundCloud sekmelerinde çalan parçanın başlığını, sanatçısını, kapak görseli adresini, oynatma durumunu, ilerlemesini, platform adını (ör. YouTube) ve sekme kimliğini okur ve bunları NahiDeck Windows uygulamasına iletir. Medya sekmelerini tanımak için açık sekmelerin adreslerine yalnızca tarayıcı içinde bakar; bu adresleri dışarı göndermez. Telefonunuzdan gelen oynatma, duraklatma ve ileri/geri komutlarını aynı uygulama üzerinden tarayıcıya uygular."],
      ["h", "Hangi veriler işlenir?"],
      ["table", ["Veri", "Nerede işlenir", "Amaç"], [
        ["Çalan parçanın başlığı, sanatçısı, oynatma durumu, ilerlemesi, platform adı ve sekme kimliği", "Yalnızca sizin bilgisayarınızda; 127.0.0.1 (yerel bağlantı) üzerinden NahiDeck uygulamasına gider", "Telefonda parça bilgisini göstermek ve komutu doğru sekmeye yönlendirmek"],
        ["Eşleştirme parolası", "Tarayıcının kendi yerel depolamasında (chrome.storage.local)", "Eklentinin yalnızca yetkili NahiDeck uygulamasına bağlanması"],
        ["<strong>Kapak görseli</strong>", "Çalan parçanın kapak görseli (varsa) ilgili medya platformunun görsel sunucusundan (YouTube: <code>i.ytimg.com</code> — <strong>Google LLC / Google Ireland Limited</strong>; Spotify Web — <strong>Spotify AB</strong>; Apple Music — <strong>Apple Inc. / Apple Distribution International Ltd.</strong>; SoundCloud — <strong>SoundCloud Global Limited &amp; Co. KG</strong>) indirilir (bu istek sırasında IP adresiniz, görsel URL'si ve standart tarayıcı başlıkları ilgili platformun ABD/AEA/küresel CDN sunucularına kendi gizlilik politikaları kapsamında iletilir) ve yerel olarak telefon ekranına gönderilir."],
        ["Kapak görseli", "Eklenti görseli ilgili sitenin görsel sunucusundan indirir (ör. YouTube, Spotify, Apple Music)", "Telefonda parça kapağını göstermek. Bu istekte IP adresiniz o sunucuya görünür"],
,
        ["<strong>Web sitesi ve gizlilik politikası bağlantıları (yalnızca tıklanırsa)</strong>", "Eklenti penceresindeki web sitesi (<code>nahideck.github.io</code>) veya gizlilik politikası bağlantısına tıkladığınızda tarayıcınız ziyaretçi IP adresini, istenen URL'yi ve tarayıcı/işletim sistemi başlıklarını sayfa sunumu ve güvenlik amacıyla <strong>GitHub, Inc. / GitHub B.V.</strong> ve <strong>Fastly, Inc.</strong> (ABD/AEA) sunucularına iletir (standart güvenlik günlüklerinde 30–90 gün tutulur; çerez veya Google Fonts dış çağrısı yapılmaz)."]
      ]],
      ["h", "Neyi toplamıyoruz?"],
      ["ul", [
        "Ad, e-posta veya telefon gibi kişisel kimlik bilgilerini eklenti üzerinden almıyoruz.",
        "Gezinme geçmişinizi, açtığınız sayfaların içeriğini veya arama sorgularını kaydetmiyoruz.",
        "Analitik, izleme, reklam veya üçüncü taraf takip araçları kullanmıyoruz.",
        "Verilerinizi satmıyor ve kiralamıyoruz.",
        "<strong>Harici yazı tipi veya betik çağrısı yok:</strong> Eklentinin tüm stil ve yazı tipleri yerel olarak paketlenmiştir; Google Fonts (<code>fonts.googleapis.com</code> / <code>fonts.gstatic.com</code>) veya harici CDN sunucularına hiçbir istek yapılmaz."
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
      ]]
      ]
    },
    en: {
      title: "NahiDeck Connect Privacy Policy",
      updated: "November 11, 2026",
      blocks: [
      ["p", "This policy explains what data the <strong>NahiDeck Connect</strong> browser extension processes. For the policy covering all NahiDeck products, see the Privacy Policy page."],
      ["h", "What does the extension do?"],
      ["p", "NahiDeck Connect reads the title, artist, cover image address, playback state, progress, platform name (for example YouTube) and browser tab ID of the track playing in YouTube, Spotify Web, Apple Music and SoundCloud tabs in your browser, and forwards them to the NahiDeck Windows application. To recognize media tabs it looks at open tab addresses only inside the browser; it does not send those addresses anywhere. It also applies play, pause and next/previous commands sent from your phone through the same application."],
      ["h", "What data is processed?"],
      ["table", ["Data", "Where it is processed", "Purpose"], [
        ["Title, artist, playback state, progress, platform name and tab ID of the playing track", "Only on your computer; it goes to the NahiDeck application over a local connection (127.0.0.1)", "Showing track information on your phone and sending commands to the right tab"],
        ["Pairing password", "In the browser's own local storage (chrome.storage.local)", "Connecting the extension only to your authorized NahiDeck application"],
        ["<strong>Cover image</strong>", "If available, the track's cover image is downloaded from the active media platform's image CDN (YouTube: <code>i.ytimg.com</code> — <strong>Google LLC / Google Ireland Limited</strong>; Spotify Web — <strong>Spotify AB</strong>; Apple Music — <strong>Apple Inc. / Apple Distribution International Ltd.</strong>; SoundCloud — <strong>SoundCloud Global Limited &amp; Co. KG</strong>), which transmits your IP address, the image URL and standard browser headers to that platform's USA/EEA/global CDN servers under its own privacy policy, and is then sent locally to your phone screen."],
        ["Cover image", "The extension downloads the image from the site's image server (for example YouTube, Spotify, Apple Music)", "Showing the track cover on your phone. During this request your IP address is visible to that server"],
,
        ["<strong>Website and privacy policy links (only when clicked)</strong>", "If you click the website (<code>nahideck.github.io</code>) or privacy policy link in the extension popup, your browser sends your IP address, the requested URL and browser/OS headers to <strong>GitHub, Inc. / GitHub B.V.</strong> and <strong>Fastly, Inc.</strong> (USA/EEA) for page delivery and security (retained in standard security logs for 30–90 days; no cookies or external Google Fonts calls are used)."]
      ]],
      ["h", "What do we not collect?"],
      ["ul", [
        "We do not collect personal identity information such as name, email or phone number through the extension.",
        "We do not record your browsing history, the content of pages you open, or search queries.",
        "We do not use analytics, tracking, advertising or third-party tracking tools.",
        "We do not sell or rent your data.",
        "<strong>No external font or script calls:</strong> All extension styles and fonts are bundled locally; zero requests are made to Google Fonts (<code>fonts.googleapis.com</code> / <code>fonts.gstatic.com</code>) or external CDNs."
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
      ]]
      ]
    },
    es: {
      title: "Política de privacidad de NahiDeck Connect",
      updated: "11 de noviembre de 2026",
      blocks: [
      ["p", "Esta política explica qué datos procesa la extensión de navegador <strong>NahiDeck Connect</strong>. Para la política que cubre todos los productos de NahiDeck, consulte la página de Política de privacidad."],
      ["h", "¿Qué hace la extensión?"],
      ["p", "NahiDeck Connect lee el título, el artista, la dirección de la imagen de portada, el estado de reproducción, el progreso, el nombre de la plataforma (por ejemplo, YouTube) y el identificador de la pestaña del navegador de la pista que suena en las pestañas de YouTube, Spotify Web, Apple Music y SoundCloud, y lo envía a la aplicación de Windows de NahiDeck. Para reconocer las pestañas de medios solo consulta las direcciones de las pestañas abiertas dentro del navegador; no envía esas direcciones a ningún sitio. También aplica los comandos de reproducir, pausar y siguiente/anterior que envía desde su teléfono a través de la misma aplicación."],
      ["h", "¿Qué datos se procesan?"],
      ["table", ["Dato", "Dónde se procesa", "Finalidad"], [
        ["Título, artista, estado de reproducción, progreso, nombre de la plataforma e identificador de la pestaña de la pista", "Solo en su ordenador; se envía a la aplicación NahiDeck mediante una conexión local (127.0.0.1)", "Mostrar la información de la pista en su teléfono y dirigir el comando a la pestaña correcta"],
        ["Contraseña de emparejamiento", "En el almacenamiento local del propio navegador (chrome.storage.local)", "Conectar la extensión solo con su aplicación NahiDeck autorizada"],
        ["<strong>Imagen de portada</strong>", "Si está disponible, la portada de la pista se descarga desde el servidor de imágenes de la plataforma activa (YouTube: <code>i.ytimg.com</code> — <strong>Google LLC / Google Ireland Limited</strong>; Spotify Web — <strong>Spotify AB</strong>; Apple Music — <strong>Apple Inc. / Apple Distribution International Ltd.</strong>; SoundCloud — <strong>SoundCloud Global Limited &amp; Co. KG</strong>), lo que transmite tu dirección IP, la URL de la imagen y las cabeceras estándar del navegador a los servidores CDN globales (EE. UU./EEE) de dicha plataforma según su propia política de privacidad, y se envía localmente a la pantalla del teléfono."],
        ["Imagen de portada", "La extensión descarga la imagen del servidor de imágenes del sitio (por ejemplo, YouTube, Spotify, Apple Music)", "Mostrar la portada de la pista en su teléfono. Durante esta solicitud, su dirección IP es visible para ese servidor"],
,
        ["<strong>Enlaces al sitio web y a la política de privacidad (solo al hacer clic)</strong>", "Si haces clic en el enlace del sitio web (<code>nahideck.github.io</code>) o de la política de privacidad en la ventana de la extensión, tu navegador envía tu dirección IP, la URL solicitada y las cabeceras del navegador/sistema operativo a <strong>GitHub, Inc. / GitHub B.V.</strong> y <strong>Fastly, Inc.</strong> (EE. UU./EEE) para la entrega de la página y por seguridad (conservados en registros estándar de seguridad durante 30–90 días; sin cookies ni llamadas a Google Fonts)."]
      ]],
      ["h", "¿Qué no recopilamos?"],
      ["ul", [
        "No recopilamos información de identidad personal, como nombre, correo electrónico o teléfono, a través de la extensión.",
        "No registramos su historial de navegación, el contenido de las páginas que abre ni sus búsquedas.",
        "No usamos analítica, seguimiento, publicidad ni herramientas de rastreo de terceros.",
        "No vendemos ni alquilamos sus datos.",
        "<strong>Sin llamadas a fuentes o scripts externos:</strong> todos los estilos y fuentes de la extensión están integrados localmente; no se realiza ninguna solicitud a Google Fonts (<code>fonts.googleapis.com</code> / <code>fonts.gstatic.com</code>) ni a redes CDN externas."
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
      ]]
      ]
    },
    "pt-BR": {
      title: "Política de Privacidade do NahiDeck Connect",
      updated: "11 de novembro de 2026",
      blocks: [
      ["p", "Esta política explica quais dados a extensão de navegador <strong>NahiDeck Connect</strong> processa. Para a política que abrange todos os produtos NahiDeck, consulte a página de Política de Privacidade."],
      ["h", "O que a extensão faz?"],
      ["p", "O NahiDeck Connect lê o título, o artista, o endereço da imagem de capa, o estado de reprodução, o progresso, o nome da plataforma (por exemplo, YouTube) e o identificador da aba do navegador da faixa que toca nas abas de YouTube, Spotify Web, Apple Music e SoundCloud, e envia essas informações ao aplicativo NahiDeck para Windows. Para reconhecer as abas de mídia, ele consulta os endereços das abas abertas somente dentro do navegador; esses endereços não são enviados para lugar nenhum. Ele também aplica os comandos de tocar, pausar e avançar/voltar enviados pelo seu celular através do mesmo aplicativo."],
      ["h", "Quais dados são processados?"],
      ["table", ["Dado", "Onde é processado", "Finalidade"], [
        ["Título, artista, estado de reprodução, progresso, nome da plataforma e identificador da aba da faixa", "Somente no seu computador; é enviado ao aplicativo NahiDeck por uma conexão local (127.0.0.1)", "Exibir as informações da faixa no seu celular e direcionar o comando para a aba correta"],
        ["Senha de pareamento", "No armazenamento local do próprio navegador (chrome.storage.local)", "Conectar a extensão somente ao seu aplicativo NahiDeck autorizado"],
        ["<strong>Imagem de capa</strong>", "Se disponível, a capa da faixa é baixada do servidor de imagens da plataforma de mídia ativa (YouTube: <code>i.ytimg.com</code> — <strong>Google LLC / Google Ireland Limited</strong>; Spotify Web — <strong>Spotify AB</strong>; Apple Music — <strong>Apple Inc. / Apple Distribution International Ltd.</strong>; SoundCloud — <strong>SoundCloud Global Limited &amp; Co. KG</strong>), transmitindo seu endereço IP, a URL da imagem e cabeçalhos padrão do navegador aos servidores CDN globais (EUA/EEE) da respectiva plataforma sob a política de privacidade dela, e é enviada localmente para a tela do celular."],
        ["Imagem de capa", "A extensão baixa a imagem do servidor de imagens do site (por exemplo, YouTube, Spotify, Apple Music)", "Exibir a capa da faixa no seu celular. Nessa requisição, seu endereço IP fica visível para esse servidor"],
,
        ["<strong>Links para o site e política de privacidade (apenas ao clicar)</strong>", "Se você clicar no link do site (<code>nahideck.github.io</code>) ou da política de privacidade no pop-up da extensão, seu navegador enviará seu endereço IP, a URL solicitada e cabeçalhos do navegador/sistema operacional para <strong>GitHub, Inc. / GitHub B.V.</strong> e <strong>Fastly, Inc.</strong> (EUA/EEE) para entrega da página e segurança (mantidos em registros de segurança padrão por 30–90 dias; sem cookies nem chamadas ao Google Fonts)."]
      ]],
      ["h", "O que não coletamos?"],
      ["ul", [
        "Não coletamos informações de identidade pessoal, como nome, e-mail ou telefone, por meio da extensão.",
        "Não registramos seu histórico de navegação, o conteúdo das páginas que você abre nem suas pesquisas.",
        "Não usamos análises, rastreamento, publicidade nem ferramentas de rastreamento de terceiros.",
        "Não vendemos nem alugamos seus dados.",
        "<strong>Sem chamadas a fontes ou scripts externos:</strong> todos os estilos e fontes da extensão são empacotados localmente; nenhuma solicitação é feita ao Google Fonts (<code>fonts.googleapis.com</code> / <code>fonts.gstatic.com</code>) ou a CDNs externos."
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
      ]]
      ]
    },
    de: {
      title: "NahiDeck Connect Datenschutzerklärung",
      updated: "11. November 2026",
      blocks: [
      ["p", "Diese Erklärung beschreibt, welche Daten die Browser-Erweiterung <strong>NahiDeck Connect</strong> verarbeitet. Die Erklärung für alle NahiDeck-Produkte finden Sie auf der Seite Datenschutzerklärung."],
      ["h", "Was macht die Erweiterung?"],
      ["p", "NahiDeck Connect liest Titel, Interpret, Adresse des Cover-Bilds, Wiedergabestatus, Fortschritt, Plattformname (z. B. YouTube) und Tab-Kennung des Titels, der in den Tabs von YouTube, Spotify Web, Apple Music und SoundCloud in Ihrem Browser läuft, und leitet diese Angaben an die NahiDeck-Anwendung für Windows weiter. Um Medien-Tabs zu erkennen, prüft sie die Adressen geöffneter Tabs nur im Browser; diese Adressen werden nirgendwohin gesendet. Außerdem setzt sie Wiedergabe-, Pause- sowie Weiter-/Zurück-Befehle um, die Sie über Ihr Telefon über dieselbe Anwendung senden."],
      ["h", "Welche Daten werden verarbeitet?"],
      ["table", ["Daten", "Wo verarbeitet", "Zweck"], [
        ["Titel, Interpret, Wiedergabestatus, Fortschritt, Plattformname und Tab-Kennung des laufenden Titels", "Nur auf Ihrem Computer; sie gehen über eine lokale Verbindung (127.0.0.1) an die NahiDeck-Anwendung", "Anzeige der Titelinformationen auf Ihrem Telefon und Weiterleitung des Befehls an den richtigen Tab"],
        ["Kopplungspasswort", "Im eigenen lokalen Speicher des Browsers (chrome.storage.local)", "Verbindung der Erweiterung nur mit Ihrer berechtigten NahiDeck-Anwendung"],
        ["<strong>Coverbild</strong>", "Falls vorhanden, wird das Coverbild des Titels vom Bild-CDN der aktiven Medienplattform heruntergeladen (YouTube: <code>i.ytimg.com</code> — <strong>Google LLC / Google Ireland Limited</strong>; Spotify Web — <strong>Spotify AB</strong>; Apple Music — <strong>Apple Inc. / Apple Distribution International Ltd.</strong>; SoundCloud — <strong>SoundCloud Global Limited &amp; Co. KG</strong>), wobei Ihre IP-Adresse, die Bild-URL und Standard-Browser-Header gemäß deren Datenschutzerklärung an die globalen CDN-Server (USA/EWR) der jeweiligen Plattform übermittelt werden, und anschließend lokal an den Telefonbildschirm gesendet."],
        ["Cover-Bild", "Die Erweiterung lädt das Bild vom Bildserver der Website herunter (z. B. YouTube, Spotify, Apple Music)", "Anzeige des Titelcovers auf Ihrem Telefon. Bei dieser Anfrage ist Ihre IP-Adresse für diesen Server sichtbar"],
,
        ["<strong>Links zu Website und Datenschutzerklärung (nur beim Anklicken)</strong>", "Wenn Sie im Erweiterungs-Popup auf den Link zur Website (<code>nahideck.github.io</code>) oder zur Datenschutzerklärung klicken, übermittelt Ihr Browser Ihre IP-Adresse, die angeforderte URL sowie Browser-/BS-Header zur Seitenauslieferung und Sicherheit an <strong>GitHub, Inc. / GitHub B.V.</strong> und <strong>Fastly, Inc.</strong> (USA/EWR) (Aufbewahrung in Standard-Sicherheitsprotokollen für 30–90 Tage; keine Cookies oder Google-Fonts-Aufrufe)."]
      ]],
      ["h", "Was erheben wir nicht?"],
      ["ul", [
        "Wir erheben über die Erweiterung keine persönlichen Identitätsdaten wie Name, E-Mail-Adresse oder Telefonnummer.",
        "Wir speichern weder Ihren Browserverlauf noch den Inhalt der von Ihnen geöffneten Seiten oder Suchanfragen.",
        "Wir verwenden keine Analyse-, Tracking-, Werbe- oder Drittanbieter-Tracking-Werkzeuge.",
        "Wir verkaufen oder vermieten Ihre Daten nicht.",
        "<strong>Keine externen Schriftart- oder Skriptaufrufe:</strong> Alle Stile und Schriftarten der Erweiterung sind lokal eingebettet; es erfolgen keinerlei Anfragen an Google Fonts (<code>fonts.googleapis.com</code> / <code>fonts.gstatic.com</code>) oder externe CDNs."
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
      ]]
      ]
    },
    fr: {
      title: "Politique de confidentialité de NahiDeck Connect",
      updated: "11 novembre 2026",
      blocks: [
      ["p", "Cette politique explique quelles données l'extension de navigateur <strong>NahiDeck Connect</strong> traite. Pour la politique couvrant l'ensemble des produits NahiDeck, consultez la page Politique de confidentialité."],
      ["h", "Que fait l'extension ?"],
      ["p", "NahiDeck Connect lit le titre, l'artiste, l'adresse de l'image de couverture, l'état de lecture, la progression, le nom de la plateforme (par exemple YouTube) et l'identifiant de l'onglet du morceau en cours dans les onglets YouTube, Spotify Web, Apple Music et SoundCloud de votre navigateur, et les transmet à l'application NahiDeck pour Windows. Pour reconnaître les onglets média, elle consulte les adresses des onglets ouverts uniquement dans le navigateur ; ces adresses ne sont envoyées nulle part. Elle applique aussi les commandes lecture, pause et suivant/précédent envoyées depuis votre téléphone via cette même application."],
      ["h", "Quelles données sont traitées ?"],
      ["table", ["Donnée", "Lieu de traitement", "Finalité"], [
        ["Titre, artiste, état de lecture, progression, nom de la plateforme et identifiant d'onglet du morceau", "Uniquement sur votre ordinateur ; transmises à l'application NahiDeck par une connexion locale (127.0.0.1)", "Afficher les informations du morceau sur votre téléphone et envoyer la commande au bon onglet"],
        ["Mot de passe d'appairage", "Dans le stockage local du navigateur (chrome.storage.local)", "Connecter l'extension uniquement à votre application NahiDeck autorisée"],
        ["<strong>Pochette</strong>", "Si elle est disponible, la pochette du titre est téléchargée depuis le serveur d'images de la plateforme multimédia active (YouTube : <code>i.ytimg.com</code> — <strong>Google LLC / Google Ireland Limited</strong> ; Spotify Web — <strong>Spotify AB</strong> ; Apple Music — <strong>Apple Inc. / Apple Distribution International Ltd.</strong> ; SoundCloud — <strong>SoundCloud Global Limited &amp; Co. KG</strong>), ce qui transmet votre adresse IP, l'URL de l'image et les en-têtes standard du navigateur aux serveurs CDN mondiaux (États-Unis/EEE) de cette plateforme selon sa propre politique de confidentialité, puis elle est envoyée localement à l'écran du téléphone."],
        ["Image de couverture", "L'extension télécharge l'image depuis le serveur d'images du site (par exemple YouTube, Spotify, Apple Music)", "Afficher la pochette du morceau sur votre téléphone. Lors de cette requête, votre adresse IP est visible par ce serveur"],
,
        ["<strong>Liens vers le site web et la politique de confidentialité (uniquement en cas de clic)</strong>", "Si vous cliquez sur le lien du site web (<code>nahideck.github.io</code>) ou de la politique de confidentialité dans la fenêtre de l'extension, votre navigateur envoie votre adresse IP, l'URL demandée et les en-têtes du navigateur/système d'exploitation à <strong>GitHub, Inc. / GitHub B.V.</strong> et <strong>Fastly, Inc.</strong> (États-Unis/EEE) pour l'affichage de la page et la sécurité (conservés dans les journaux de sécurité standard pendant 30 à 90 jours ; sans cookies ni appels à Google Fonts)."]
      ]],
      ["h", "Que ne collectons-nous pas ?"],
      ["ul", [
        "Nous ne collectons pas de données d'identité personnelles, comme le nom, l'e-mail ou le numéro de téléphone, via l'extension.",
        "Nous n'enregistrons ni votre historique de navigation, ni le contenu des pages que vous ouvrez, ni vos recherches.",
        "Nous n'utilisons ni outils d'analyse, de suivi, de publicité ni de pistage tiers.",
        "Nous ne vendons ni ne louons vos données.",
        "<strong>Aucun appel à des polices ou scripts externes :</strong> tous les styles et polices de l'extension sont intégrés localement ; aucune requête n'est envoyée à Google Fonts (<code>fonts.googleapis.com</code> / <code>fonts.gstatic.com</code>) ni à des CDN externes."
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
      ]]
      ]
    },
    az: {
      title: "NahiDeck Connect Məxfilik Siyasəti",
      updated: "11 noyabr 2026",
      blocks: [
      ["p", "Bu siyasət <strong>NahiDeck Connect</strong> brauzer genişlənməsinin hansı məlumatları emal etdiyini izah edir. Bütün NahiDeck məhsullarını əhatə edən siyasət üçün Məxfilik Siyasəti səhifəsinə baxın."],
      ["h", "Genişlənmə nə edir?"],
      ["p", "NahiDeck Connect brauzerinizdə YouTube, Spotify Web, Apple Music və SoundCloud sekmələrində çalan mahnının adını, ifaçısını, örtük şəkli ünvanını, oxutma vəziyyətini, irəliləməsini, platforma adını (məsələn, YouTube) və sekme identifikatorunu oxuyur və NahiDeck Windows tətbiqinə göndərir. Media sekmələrini tanımaq üçün açıq sekmələrin ünvanlarına yalnız brauzer daxilində baxır; bu ünvanları heç yerə göndərmir. Telefonunuzdan eyni tətbiq vasitəsilə gələn oxutma, durdurma və növbəti/əvvəlki əmrlərini də tətbiq edir."],
      ["h", "Hansı məlumatlar emal olunur?"],
      ["table", ["Məlumat", "Harada emal olunur", "Məqsəd"], [
        ["Çalan mahnının adı, ifaçısı, oxutma vəziyyəti, irəliləməsi, platforma adı və sekme identifikatoru", "Yalnız kompüterinizdə; yerli bağlantı (127.0.0.1) ilə NahiDeck tətbiqinə göndərilir", "Telefonda mahnı məlumatını göstərmək və əmri düzgün sekməyə yönəltmək"],
        ["Cütləşdirmə parolu", "Brauzerin öz yerli yaddaşında (chrome.storage.local)", "Genişlənmənin yalnız səlahiyyətli NahiDeck tətbiqinizə qoşulması"],
        ["<strong>Üz qabığı şəkli</strong>", "Mövcuddursa, parçanın üz qabığı şəkli aktiv media platformasının şəkil serverindən (YouTube: <code>i.ytimg.com</code> — <strong>Google LLC / Google Ireland Limited</strong>; Spotify Web — <strong>Spotify AB</strong>; Apple Music — <strong>Apple Inc. / Apple Distribution International Ltd.</strong>; SoundCloud — <strong>SoundCloud Global Limited &amp; Co. KG</strong>) endirilir (bu zaman IP ünvanınız, şəkil URL-i və standart brauzer başlıqları həmin platformanın öz məxfilik siyasəti çərçivəsində ABŞ/AİB/qlobal CDN serverlərinə ötürülür) və yerli olaraq telefon ekranına göndərilir."],
        ["Örtük şəkli", "Genişlənmə şəkli saytın şəkil serverindən yükləyir (məsələn, YouTube, Spotify, Apple Music)", "Telefonda mahnı örtüyünü göstərmək. Bu sorğu zamanı IP ünvanınız həmin serverə görünür"],
,
        ["<strong>Veb sayt və məxfilik siyasəti keçidləri (yalnız klikləndikdə)</strong>", "Əlavə pəncərəsində veb sayt (<code>nahideck.github.io</code>) və ya məxfilik siyasəti keçidinə kliklədikdə brauzeriniz səhifənin çatdırılması və təhlükəsizlik məqsədilə IP ünvanınızı, sorğulanan URL-i və brauzer/ƏS başlıqlarını <strong>GitHub, Inc. / GitHub B.V.</strong> və <strong>Fastly, Inc.</strong> (ABŞ/AİB) serverlərinə göndərir (standart təhlükəsizlik jurnallarında 30–90 gün saxlanılır; kuki və ya Google Fonts çağırışı istifadə edilmir)."]
      ]],
      ["h", "Nələri toplamırıq?"],
      ["ul", [
        "Genişlənmə vasitəsilə ad, e-poçt və ya telefon kimi şəxsi kimlik məlumatlarını toplamırıq.",
        "Baxdığınız səhifələrin tarixçəsini, açdığınız səhifələrin məzmununu və axtarış sorğularınızı qeyd etmirik.",
        "Analitika, izləmə, reklam və üçüncü tərəf izləmə alətlərindən istifadə etmirik.",
        "Məlumatlarınızı satmırıq və icarəyə vermirik.",
        "<strong>Xarici şrift və ya skript çağırışı yoxdur:</strong> əlavənin bütün üslub və şriftləri yerli olaraq paketlənmişdir; Google Fonts (<code>fonts.googleapis.com</code> / <code>fonts.gstatic.com</code>) və ya xarici CDN-lərə heç bir sorğu göndərilmir."
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
      ]]
      ]
    },
    "zh-TW": {
      title: "NahiDeck Connect 隱私權政策",
      updated: "2026 年 11 月 11 日",
      blocks: [
      ["p", "本政策說明 <strong>NahiDeck Connect</strong> 瀏覽器擴充功能會處理哪些資料。涵蓋所有 NahiDeck 產品的政策，請見隱私權政策頁面。"],
      ["h", "擴充功能做什麼？"],
      ["p", "NahiDeck Connect 會讀取您瀏覽器中 YouTube、Spotify Web、Apple Music 與 SoundCloud 分頁所播放曲目的標題、演出者、封面圖片位址、播放狀態、進度、平台名稱（例如 YouTube）與分頁識別碼，並傳送至 NahiDeck Windows 應用程式。為辨識媒體分頁，它只會在瀏覽器內部檢視已開啟分頁的位址，不會將這些位址傳送到任何地方。它也會套用您從手機透過同一應用程式傳送的播放、暫停及上一首／下一首指令。"],
      ["h", "會處理哪些資料？"],
      ["table", ["資料", "處理位置", "用途"], [
        ["所播放曲目的標題、演出者、播放狀態、進度、平台名稱與分頁識別碼", "僅在您的電腦上；透過本機連線（127.0.0.1）傳送到 NahiDeck 應用程式", "在手機上顯示曲目資訊，並將指令導向正確的分頁"],
        ["配對密碼", "瀏覽器自身的本機儲存空間（chrome.storage.local）", "確保擴充功能只連線到您已授權的 NahiDeck 應用程式"],
        ["<strong>封面圖片</strong>", "若有提供，會從目前播放媒體平台的圖片伺服器下載曲目封面（YouTube：<code>i.ytimg.com</code> — <strong>Google LLC / Google Ireland Limited</strong>；Spotify Web — <strong>Spotify AB</strong>；Apple Music — <strong>Apple Inc. / Apple Distribution International Ltd.</strong>；SoundCloud — <strong>SoundCloud Global Limited &amp; Co. KG</strong>），此請求會依該平台的隱私權政策將您的 IP 位址、圖片 URL 與標準瀏覽器標頭傳送至其美國／歐洲經濟區／全球 CDN 伺服器，隨後於本機傳送至手機畫面。"],
        ["封面圖片", "擴充功能會從網站的圖片伺服器（例如 YouTube、Spotify、Apple Music）下載圖片", "在手機上顯示曲目封面。此請求期間，您的 IP 位址會對該伺服器可見"],
,
        ["<strong>網站與隱私權政策連結（僅在點擊時）</strong>", "若您點擊擴充功能彈出視窗中的網站（<code>nahideck.github.io</code>）或隱私權政策連結，瀏覽器會將您的 IP 位址、請求的 URL 及瀏覽器／作業系統標頭傳送至 <strong>GitHub, Inc. / GitHub B.V.</strong> 與 <strong>Fastly, Inc.</strong>（美國／歐洲經濟區）以提供頁面與安全防護（於標準安全日誌中保留 30–90 天；不使用 Cookie 或 Google Fonts 外部請求）。"]
      ]],
      ["h", "我們不收集什麼？"],
      ["ul", [
        "我們不會透過擴充功能收集姓名、電子郵件或電話等個人身分資料。",
        "我們不會記錄您的瀏覽紀錄、您開啟之頁面的內容或搜尋查詢。",
        "我們不使用分析、追蹤、廣告或第三方追蹤工具。",
        "我們不會出售或出租您的資料。",
        "<strong>無外部字型或指令碼請求：</strong>擴充功能的所有樣式與字型均隨附於本機，絕不會向 Google Fonts（<code>fonts.googleapis.com</code> / <code>fonts.gstatic.com</code>）或外部 CDN 發送任何請求。"
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
      ]]
      ]
    },
    "zh-CN": {
      title: "NahiDeck Connect 隐私政策",
      updated: "2026 年 11 月 11 日",
      blocks: [
      ["p", "本政策说明 <strong>NahiDeck Connect</strong> 浏览器扩展程序会处理哪些数据。涵盖所有 NahiDeck 产品的政策，请见隐私政策页面。"],
      ["h", "扩展程序做什么？"],
      ["p", "NahiDeck Connect 会读取您浏览器中 YouTube、Spotify Web、Apple Music 和 SoundCloud 标签页正在播放的曲目的标题、艺人、封面图片地址、播放状态、进度、平台名称（例如 YouTube）以及标签页标识，并转发给 NahiDeck Windows 应用程序。为识别媒体标签页，它只在浏览器内部查看已打开标签页的地址，不会将这些地址发送到任何地方。它还会执行您从手机通过同一应用程序发送的播放、暂停和上一首/下一首指令。"],
      ["h", "会处理哪些数据？"],
      ["table", ["数据", "处理位置", "用途"], [
        ["正在播放曲目的标题、艺人、播放状态、进度、平台名称与标签页标识", "仅在您的电脑上；通过本地连接（127.0.0.1）发送到 NahiDeck 应用程序", "在手机上显示曲目信息，并将命令发送到正确的标签页"],
        ["配对密码", "浏览器自身的本地存储（chrome.storage.local）", "确保扩展程序只连接到您已授权的 NahiDeck 应用程序"],
        ["<strong>封面图片</strong>", "如果提供，曲目的封面图片会从当前播放媒体平台的图片服务器下载（YouTube：<code>i.ytimg.com</code> — <strong>Google LLC / Google Ireland Limited</strong>；Spotify Web — <strong>Spotify AB</strong>；Apple Music — <strong>Apple Inc. / Apple Distribution International Ltd.</strong>；SoundCloud — <strong>SoundCloud Global Limited &amp; Co. KG</strong>），该请求会根据相应平台的隐私政策将您的 IP 地址、图片 URL 和标准浏览器请求头发送至其美国/欧洲经济区/全球 CDN 服务器，随后在本地发送到手机屏幕。"],
        ["封面图片", "扩展程序从网站的图片服务器（例如 YouTube、Spotify、Apple Music）下载图片", "在手机上显示曲目封面。此请求期间，您的 IP 地址对该服务器可见"],
,
        ["<strong>网站与隐私政策链接（仅在点击时）</strong>", "如果您点击扩展弹出窗口中的网站（<code>nahideck.github.io</code>）或隐私政策链接，浏览器会将您的 IP 地址、请求的 URL 以及浏览器/操作系统请求头发送至 <strong>GitHub, Inc. / GitHub B.V.</strong> 和 <strong>Fastly, Inc.</strong>（美国/欧洲经济区）以用于页面加载和安全防护（在标准安全日志中保留 30–90 天；不使用 Cookie 或 Google Fonts 外部请求）。"]
      ]],
      ["h", "我们不收集什么？"],
      ["ul", [
        "我们不会通过扩展程序收集姓名、电子邮件或电话等个人身份信息。",
        "我们不会记录您的浏览历史、您打开的页面内容或搜索查询。",
        "我们不使用分析、跟踪、广告或第三方追踪工具。",
        "我们不会出售或出租您的数据。",
        "<strong>无外部字体或脚本请求：</strong>扩展的所有样式和字体均在本地打包，绝不会向 Google Fonts（<code>fonts.googleapis.com</code> / <code>fonts.gstatic.com</code>）或外部 CDN 发送任何请求。"
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
      ]]
      ]
    },
    "pt-PT": {
      title: "Política de Privacidade do NahiDeck Connect",
      updated: "11 de novembro de 2026",
      blocks: [
      ["p", "Esta política explica que dados são processados pela extensão de navegador <strong>NahiDeck Connect</strong>. Para a política que abrange todos os produtos NahiDeck, consulte a página da Política de Privacidade."],
      ["h", "O que faz a extensão?"],
      ["p", "O NahiDeck Connect lê o título, o artista, o endereço da imagem de capa, o estado de reprodução, o progresso, o nome da plataforma (por exemplo, YouTube) e o identificador do separador do browser da faixa que toca nos separadores de YouTube, Spotify Web, Apple Music e SoundCloud, e envia-os para a aplicação NahiDeck para Windows. Para reconhecer os separadores de multimédia, consulta os endereços dos separadores abertos apenas dentro do browser; esses endereços não são enviados para lado nenhum. Também aplica os comandos de reproduzir, pausar e seguinte/anterior enviados do seu telemóvel através da mesma aplicação."],
      ["h", "Que dados são processados?"],
      ["table", ["Dados", "Onde são processados", "Finalidade"], [
        ["Título, artista, estado de reprodução, progresso, nome da plataforma e identificador do separador da faixa", "Apenas no seu computador; é enviado para a aplicação NahiDeck através de uma ligação local (127.0.0.1)", "Apresentar as informações da faixa no telemóvel e encaminhar o comando para o separador certo"],
        ["Palavra-passe de emparelhamento", "No armazenamento local do próprio navegador (chrome.storage.local)", "Ligar a extensão exclusivamente à sua aplicação NahiDeck autorizada"],
        ["<strong>Imagem de capa</strong>", "Se disponível, a capa da faixa é transferida do servidor de imagens da plataforma de multimédia ativa (YouTube: <code>i.ytimg.com</code> — <strong>Google LLC / Google Ireland Limited</strong>; Spotify Web — <strong>Spotify AB</strong>; Apple Music — <strong>Apple Inc. / Apple Distribution International Ltd.</strong>; SoundCloud — <strong>SoundCloud Global Limited &amp; Co. KG</strong>), o que transmite o seu endereço IP, o URL da imagem e cabeçalhos padrão do navegador para os servidores CDN globais (EUA/EEE) dessa plataforma ao abrigo da respetiva política de privacidade, sendo depois enviada localmente para o ecrã do telemóvel."],
        ["Imagem de capa", "A extensão descarrega a imagem a partir do servidor de imagens do website (por exemplo, YouTube, Spotify, Apple Music)", "Apresentar a capa da faixa no seu telemóvel. Durante este pedido, o seu endereço IP fica visível para esse servidor"],
,
        ["<strong>Ligações para o site e política de privacidade (apenas ao clicar)</strong>", "Se clicar na ligação do site (<code>nahideck.github.io</code>) ou da política de privacidade na janela da extensão, o seu navegador envia o seu endereço IP, o URL solicitado e os cabeçalhos do navegador/sistema operativo para a <strong>GitHub, Inc. / GitHub B.V.</strong> e a <strong>Fastly, Inc.</strong> (EUA/EEE) para disponibilização da página e segurança (mantidos em registos de segurança padrão durante 30–90 dias; sem cookies nem chamadas ao Google Fonts)."]
      ]],
      ["h", "O que não recolhemos?"],
      ["ul", [
        "Não recolhemos informações de identificação pessoal como nome, e-mail ou número de telefone através da extensão.",
        "Não registamos o seu histórico de navegação, o conteúdo das páginas que visita ou consultas de pesquisa.",
        "Não utilizamos ferramentas analíticas, de rastreio, publicitárias ou de terceiros.",
        "Não vendemos nem alugamos os seus dados.",
        "<strong>Sem chamadas a tipos de letra ou scripts externos:</strong> todos os estilos e tipos de letra da extensão estão integrados localmente; não são feitos pedidos ao Google Fonts (<code>fonts.googleapis.com</code> / <code>fonts.gstatic.com</code>) nem a CDNs externos."
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
      ]]
      ]
    },
    it: {
      title: "Informativa sulla privacy di NahiDeck Connect",
      updated: "11 novembre 2026",
      blocks: [
      ["p", "La presente informativa spiega quali dati vengono elaborati dall'estensione per browser <strong>NahiDeck Connect</strong>. Per l'informativa che copre tutti i prodotti NahiDeck, consulta la pagina dell'Informativa sulla privacy."],
      ["h", "Cosa fa l'estensione?"],
      ["p", "NahiDeck Connect legge titolo, artista, indirizzo dell'immagine di copertina, stato di riproduzione, avanzamento, nome della piattaforma (ad esempio YouTube) e identificativo della scheda del brano in riproduzione nelle schede di YouTube, Spotify Web, Apple Music e SoundCloud, e li invia all'applicazione NahiDeck per Windows. Per riconoscere le schede multimediali consulta gli indirizzi delle schede aperte solo all'interno del browser; questi indirizzi non vengono inviati da nessuna parte. Applica inoltre i comandi di riproduzione, pausa e brano successivo/precedente inviati dal telefono tramite la stessa applicazione."],
      ["h", "Quali dati vengono elaborati?"],
      ["table", ["Dati", "Dove vengono elaborati", "Finalità"], [
        ["Titolo, artista, stato di riproduzione, avanzamento, nome della piattaforma e identificativo della scheda del brano", "Esclusivamente sul tuo computer; vengono inviati all'applicazione NahiDeck tramite una connessione locale (127.0.0.1)", "Mostrare le informazioni sul brano sullo smartphone e inviare il comando alla scheda giusta"],
        ["Password di associazione", "Nella memoria locale del browser (chrome.storage.local)", "Connettere l'estensione solo alla tua applicazione NahiDeck autorizzata"],
        ["<strong>Immagine di copertina</strong>", "Se disponibile, la copertina del brano viene scaricata dal server immagini della piattaforma multimediale attiva (YouTube: <code>i.ytimg.com</code> — <strong>Google LLC / Google Ireland Limited</strong>; Spotify Web — <strong>Spotify AB</strong>; Apple Music — <strong>Apple Inc. / Apple Distribution International Ltd.</strong>; SoundCloud — <strong>SoundCloud Global Limited &amp; Co. KG</strong>), trasmettendo il tuo indirizzo IP, l'URL dell'immagine e le intestazioni standard del browser ai server CDN globali (USA/SEE) di tale piattaforma secondo la relativa informativa sulla privacy, e viene poi inviata localmente allo schermo del telefono."],
        ["Immagine di copertina", "L'estensione scarica l'immagine dal server delle immagini del sito (ad esempio YouTube, Spotify, Apple Music)", "Mostrare la copertina del brano sullo smartphone. Durante questa richiesta, il tuo indirizzo IP è visibile a quel server"],
,
        ["<strong>Link al sito web e all'informativa sulla privacy (solo se cliccati)</strong>", "Se fai clic sul link del sito web (<code>nahideck.github.io</code>) o dell'informativa sulla privacy nel popup dell'estensione, il browser invia il tuo indirizzo IP, l'URL richiesto e le intestazioni del browser/sistema operativo a <strong>GitHub, Inc. / GitHub B.V.</strong> e <strong>Fastly, Inc.</strong> (USA/SEE) per l'erogazione della pagina e la sicurezza (conservati nei log di sicurezza standard per 30–90 giorni; senza cookie né chiamate a Google Fonts)."]
      ]],
      ["h", "Cosa non raccogliamo?"],
      ["ul", [
        "Non raccogliamo informazioni di identificazione personale come nome, email o numero di telefono tramite l'estensione.",
        "Non registriamo la tua cronologia di navigazione, il contenuto delle pagine aperte o le query di ricerca.",
        "Non utilizziamo strumenti di analisi, tracciamento, pubblicità o di terze parti.",
        "Non vendiamo né cediamo in locazione i tuoi dati.",
        "<strong>Nessuna chiamata a font o script esterni:</strong> tutti gli stili e i font dell'estensione sono inclusi localmente; non viene effettuata alcuna richiesta a Google Fonts (<code>fonts.googleapis.com</code> / <code>fonts.gstatic.com</code>) o a CDN esterni."
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
      ]]
      ]
    },
    pl: {
      title: "Polityka prywatności NahiDeck Connect",
      updated: "11 listopada 2026 r.",
      blocks: [
      ["p", "Niniejsza polityka wyjaśnia, jakie dane przetwarza rozszerzenie przeglądarki <strong>NahiDeck Connect</strong>. Ogólne zasady dotyczące wszystkich produktów NahiDeck znajdują się na stronie Polityki prywatności."],
      ["h", "Co robi rozszerzenie?"],
      ["p", "NahiDeck Connect odczytuje tytuł, wykonawcę, adres obrazka okładki, stan odtwarzania, postęp, nazwę platformy (np. YouTube) i identyfikator karty przeglądarki odtwarzanego utworu na kartach YouTube, Spotify Web, Apple Music i SoundCloud, i przekazuje je do aplikacji NahiDeck dla Windows. Aby rozpoznać karty z multimediami, sprawdza adresy otwartych kart wyłącznie w przeglądarce; adresy te nigdzie nie są wysyłane. Stosuje też polecenia odtwarzania, pauzy oraz następny/poprzedni utwór wysłane z telefonu przez tę samą aplikację."],
      ["h", "Jakie dane są przetwarzane?"],
      ["table", ["Dane", "Gdzie są przetwarzane", "Cel"], [
        ["Tytuł, wykonawca, stan odtwarzania, postęp, nazwa platformy i identyfikator karty odtwarzanego utworu", "Wyłącznie na Twoim komputerze; przesyłane do aplikacji NahiDeck przez połączenie lokalne (127.0.0.1)", "Wyświetlanie informacji o utworze na telefonie i kierowanie polecenia do właściwej karty"],
        ["Hasło parowania", "W lokalnej pamięci samej przeglądarki (chrome.storage.local)", "Łączenie rozszerzenia wyłącznie z Twoją autoryzowaną aplikacją NahiDeck"],
        ["<strong>Okładka</strong>", "Jeśli jest dostępna, okładka utworu jest pobierana z serwera obrazów aktywnej platformy multimedialnej (YouTube: <code>i.ytimg.com</code> — <strong>Google LLC / Google Ireland Limited</strong>; Spotify Web — <strong>Spotify AB</strong>; Apple Music — <strong>Apple Inc. / Apple Distribution International Ltd.</strong>; SoundCloud — <strong>SoundCloud Global Limited &amp; Co. KG</strong>), co wiąże się z przekazaniem Twojego adresu IP, adresu URL obrazu i standardowych nagłówków przeglądarki do globalnych serwerów CDN (USA/EOG) tej platformy zgodnie z jej polityką prywatności, a następnie przesyłana lokalnie na ekran telefonu."],
        ["Okładka utworu", "Rozszerzenie pobiera grafikę z serwera graficznego danej witryny (np. YouTube, Spotify, Apple Music)", "Wyświetlanie okładki utworu na telefonie. Podczas tego żądania Twój adres IP jest widoczny dla tego serwera"],
,
        ["<strong>Linki do strony internetowej i polityki prywatności (tylko po kliknięciu)</strong>", "Jeśli klikniesz link do strony internetowej (<code>nahideck.github.io</code>) lub polityki prywatności w oknie rozszerzenia, przeglądarka wyśle Twój adres IP, żądany adres URL oraz nagłówki przeglądarki/systemu operacyjnego do <strong>GitHub, Inc. / GitHub B.V.</strong> oraz <strong>Fastly, Inc.</strong> (USA/EOG) w celu wyświetlenia strony i zapewnienia bezpieczeństwa (przechowywane w standardowych dziennikach bezpieczeństwa przez 30–90 dni; bez plików cookie i bez wywołań Google Fonts)."]
      ]],
      ["h", "Czego nie zbieramy?"],
      ["ul", [
        "Nie gromadzimy za pośrednictwem rozszerzenia danych osobowych, takich jak imię i nazwisko, adres e-mail czy numer telefonu.",
        "Nie rejestrujemy Twojej historii przeglądania, zawartości otwieranych stron ani zapytań wyszukiwania.",
        "Nie korzystamy z narzędzi analitycznych, śledzących, reklamowych ani rozwiązań innych firm.",
        "Nie sprzedajemy ani nie wynajmujemy Twoich danych.",
        "<strong>Brak zewnętrznych wywołań czcionek i skryptów:</strong> wszystkie style i czcionki rozszerzenia są wbudowane lokalnie; nie są wykonywane żadne żądania do Google Fonts (<code>fonts.googleapis.com</code> / <code>fonts.gstatic.com</code>) ani zewnętrznych sieci CDN."
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
      ]]
      ]
    },
    ru: {
      title: "Политика конфиденциальности NahiDeck Connect",
      updated: "11 ноября 2026 г.",
      blocks: [
      ["p", "Настоящая политика описывает, какие данные обрабатывает браузерное расширение <strong>NahiDeck Connect</strong>. С общими положениями для всех продуктов NahiDeck можно ознакомиться на странице Политики конфиденциальности."],
      ["h", "Что делает расширение?"],
      ["p", "NahiDeck Connect считывает название, исполнителя, адрес обложки, статус воспроизведения, прогресс, название платформы (например, YouTube) и идентификатор вкладки браузера для трека, который играет на вкладках YouTube, Spotify Web, Apple Music и SoundCloud, и передаёт их приложению NahiDeck для Windows. Чтобы распознавать медиавкладки, адреса открытых вкладок проверяются только внутри браузера; эти адреса никуда не отправляются. Также применяются команды воспроизведения, паузы и следующий/предыдущий трек, отправленные с телефона через то же приложение."],
      ["h", "Какие данные обрабатываются?"],
      ["table", ["Данные", "Где обрабатываются", "Цель"], [
        ["Название, исполнитель, статус воспроизведения, прогресс, название платформы и идентификатор вкладки трека", "Только на вашем компьютере; передаются в приложение NahiDeck по локальному соединению (127.0.0.1)", "Отображение информации о треке на телефоне и отправка команды нужной вкладке"],
        ["Пароль сопряжения", "В локальном хранилище самого браузера (chrome.storage.local)", "Подключение расширения исключительно к вашему авторизованному приложению NahiDeck"],
        ["<strong>Обложка</strong>", "Если обложка трека доступна, она загружается с сервера изображений активной медиаплатформы (YouTube: <code>i.ytimg.com</code> — <strong>Google LLC / Google Ireland Limited</strong>; Spotify Web — <strong>Spotify AB</strong>; Apple Music — <strong>Apple Inc. / Apple Distribution International Ltd.</strong>; SoundCloud — <strong>SoundCloud Global Limited &amp; Co. KG</strong>), при этом ваш IP-адрес, URL изображения и стандартные заголовки браузера передаются на глобальные CDN-серверы (США/ЕЭЗ) соответствующей платформы согласно её политике конфиденциальности, после чего обложка локально передаётся на экран телефона."],
        ["Изображение обложки", "Расширение загружает изображение с серверов соответствующего сайта (например, YouTube, Spotify, Apple Music)", "Отображение обложки трека на телефоне. При этом запросе ваш IP-адрес виден этому серверу"],
,
        ["<strong>Ссылки на веб-сайт и политику конфиденциальности (только при нажатии)</strong>", "Если вы нажмёте ссылку на веб-сайт (<code>nahideck.github.io</code>) или политику конфиденциальности во всплывающем окне расширения, ваш браузер отправит ваш IP-адрес, запрашиваемый URL и заголовки браузера/ОС компаниям <strong>GitHub, Inc. / GitHub B.V.</strong> и <strong>Fastly, Inc.</strong> (США/ЕЭЗ) для доставки страницы и обеспечения безопасности (хранятся в стандартных журналах безопасности 30–90 дней; без файлов cookie и без обращений к Google Fonts)."]
      ]],
      ["h", "Что мы не собираем?"],
      ["ul", [
        "Мы не собираем персональные идентификационные данные, такие как имя, адрес эл. почты или номер телефона, через расширение.",
        "Мы не фиксируем историю посещений, содержимое просматриваемых страниц или поисковые запросы.",
        "Мы не используем средства аналитики, отслеживания, рекламы или сторонние трекеры.",
        "Мы не продаем и не передаем ваши данные в аренду.",
        "<strong>Никаких внешних запросов шрифтов или скриптов:</strong> все стили и шрифты расширения встроены локально; запросы к Google Fonts (<code>fonts.googleapis.com</code> / <code>fonts.gstatic.com</code>) или внешним CDN не выполняются."
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
      ]]
      ]
    },
    id: {
      title: "Kebijakan Privasi NahiDeck Connect",
      updated: "11 November 2026",
      blocks: [
      ["p", "Kebijakan ini menjelaskan data apa yang diproses oleh ekstensi browser <strong>NahiDeck Connect</strong>. Untuk kebijakan yang mencakup semua produk NahiDeck, lihat halaman Kebijakan Privasi."],
      ["h", "Apa yang dilakukan ekstensi?"],
      ["p", "NahiDeck Connect membaca judul, artis, alamat gambar sampul, status pemutaran, progres, nama platform (misalnya YouTube), dan ID tab browser dari trek yang diputar di tab YouTube, Spotify Web, Apple Music, dan SoundCloud, lalu meneruskannya ke aplikasi NahiDeck untuk Windows. Untuk mengenali tab media, alamat tab yang terbuka hanya diperiksa di dalam browser; alamat tersebut tidak dikirim ke mana pun. Perintah putar, jeda, serta berikutnya/sebelumnya yang Anda kirim dari ponsel melalui aplikasi yang sama juga diterapkan."],
      ["h", "Data apa yang diproses?"],
      ["table", ["Data", "Tempat diproses", "Tujuan"], [
        ["Judul, artis, status pemutaran, progres, nama platform, dan ID tab dari trek yang sedang diputar", "Hanya di komputer Anda; dikirim ke aplikasi NahiDeck melalui koneksi lokal (127.0.0.1)", "Menampilkan informasi trek di ponsel dan mengarahkan perintah ke tab yang tepat"],
        ["Kata sandi pemasangan", "Di penyimpanan lokal browser itu sendiri (chrome.storage.local)", "Menghubungkan ekstensi hanya ke aplikasi NahiDeck resmi Anda"],
        ["<strong>Gambar sampul</strong>", "Jika tersedia, gambar sampul lagu diunduh dari server gambar platform media yang aktif (YouTube: <code>i.ytimg.com</code> — <strong>Google LLC / Google Ireland Limited</strong>; Spotify Web — <strong>Spotify AB</strong>; Apple Music — <strong>Apple Inc. / Apple Distribution International Ltd.</strong>; SoundCloud — <strong>SoundCloud Global Limited &amp; Co. KG</strong>), yang mengirimkan alamat IP Anda, URL gambar, dan header standar browser ke server CDN global (AS/EEA) platform tersebut sesuai kebijakan privasinya masing-masing, lalu dikirim secara lokal ke layar ponsel."],
        ["Gambar sampul", "Ekstensi mengunduh gambar dari server gambar situs (misalnya YouTube, Spotify, Apple Music)", "Menampilkan sampul trek di ponsel Anda. Selama permintaan ini, alamat IP Anda terlihat oleh server tersebut"],
,
        ["<strong>Tautan situs web dan kebijakan privasi (hanya jika diklik)</strong>", "Jika Anda mengeklik tautan situs web (<code>nahideck.github.io</code>) atau kebijakan privasi di popup ekstensi, browser Anda mengirimkan alamat IP, URL yang diminta, dan header browser/OS ke <strong>GitHub, Inc. / GitHub B.V.</strong> dan <strong>Fastly, Inc.</strong> (AS/EEA) untuk penyajian halaman dan keamanan (disimpan dalam log keamanan standar selama 30–90 hari; tanpa cookie atau panggilan ke Google Fonts)."]
      ]],
      ["h", "Apa yang tidak kami kumpulkan?"],
      ["ul", [
        "Kami tidak mengumpulkan informasi identitas pribadi seperti nama, email, atau nomor telepon melalui ekstensi.",
        "Kami tidak mencatat riwayat penjelajahan, konten halaman yang Anda buka, atau kueri penelusuran.",
        "Kami tidak menggunakan analitik, pelacakan, iklan, atau alat pelacakan pihak ketiga.",
        "Kami tidak menjual atau menyewakan data Anda.",
        "<strong>Tidak ada panggilan font atau skrip eksternal:</strong> semua gaya dan font ekstensi dikemas secara lokal; tidak ada permintaan ke Google Fonts (<code>fonts.googleapis.com</code> / <code>fonts.gstatic.com</code>) atau CDN eksternal."
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
      ]]
      ]
    },
    vi: {
      title: "Chính sách quyền riêng tư của NahiDeck Connect",
      updated: "11 tháng 11 năm 2026",
      blocks: [
      ["p", "Chính sách này giải thích dữ liệu nào được tiện ích mở rộng trình duyệt <strong>NahiDeck Connect</strong> xử lý. Để xem chính sách chung áp dụng cho tất cả sản phẩm NahiDeck, vui lòng truy cập trang Chính sách quyền riêng tư."],
      ["h", "Tiện ích này làm gì?"],
      ["p", "NahiDeck Connect đọc tiêu đề, nghệ sĩ, địa chỉ ảnh bìa, trạng thái phát, tiến trình, tên nền tảng (ví dụ YouTube) và mã thẻ trình duyệt của bài hát đang phát trên các thẻ YouTube, Spotify Web, Apple Music và SoundCloud, rồi chuyển đến ứng dụng NahiDeck cho Windows. Để nhận diện thẻ phương tiện, tiện ích chỉ xem địa chỉ các thẻ đang mở bên trong trình duyệt; các địa chỉ này không được gửi đi đâu cả. Tiện ích cũng thực hiện các lệnh phát, tạm dừng và bài trước/bài sau được gửi từ điện thoại qua cùng ứng dụng."],
      ["h", "Dữ liệu nào được xử lý?"],
      ["table", ["Dữ liệu", "Nơi xử lý", "Mục đích"], [
        ["Tiêu đề, nghệ sĩ, trạng thái phát, tiến trình, tên nền tảng và mã thẻ của bài hát đang phát", "Chỉ trên máy tính của bạn; được gửi tới ứng dụng NahiDeck qua kết nối cục bộ (127.0.0.1)", "Hiển thị thông tin bài hát trên điện thoại và chuyển lệnh tới đúng thẻ"],
        ["Mật khẩu ghép nối", "Trong bộ nhớ cục bộ của chính trình duyệt (chrome.storage.local)", "Chỉ kết nối tiện ích với ứng dụng NahiDeck được ủy quyền của bạn"],
        ["<strong>Ảnh bìa</strong>", "Nếu có, ảnh bìa của bản nhạc sẽ được tải xuống từ máy chủ hình ảnh của nền tảng phát (YouTube: <code>i.ytimg.com</code> — <strong>Google LLC / Google Ireland Limited</strong>; Spotify Web — <strong>Spotify AB</strong>; Apple Music — <strong>Apple Inc. / Apple Distribution International Ltd.</strong>; SoundCloud — <strong>SoundCloud Global Limited &amp; Co. KG</strong>), qua đó gửi địa chỉ IP của bạn, URL hình ảnh và tiêu đề trình duyệt tiêu chuẩn tới máy chủ CDN toàn cầu (Hoa Kỳ/EEA) của nền tảng đó theo chính sách quyền riêng tư của họ, rồi gửi cục bộ tới màn hình điện thoại."],
        ["Ảnh bìa", "Tiện ích tải ảnh từ máy chủ hình ảnh của trang web (ví dụ: YouTube, Spotify, Apple Music)", "Hiển thị ảnh bìa bài hát trên điện thoại. Trong yêu cầu này, địa chỉ IP của bạn hiển thị với máy chủ đó"],
,
        ["<strong>Liên kết trang web và chính sách quyền riêng tư (chỉ khi nhấp vào)</strong>", "Nếu bạn nhấp vào liên kết trang web (<code>nahideck.github.io</code>) hoặc chính sách quyền riêng tư trong cửa sổ tiện ích, trình duyệt sẽ gửi địa chỉ IP, URL được yêu cầu và tiêu đề trình duyệt/hệ điều hành tới <strong>GitHub, Inc. / GitHub B.V.</strong> và <strong>Fastly, Inc.</strong> (Hoa Kỳ/EEA) để phân phối trang và bảo mật (được lưu trong nhật ký bảo mật tiêu chuẩn từ 30–90 ngày; không dùng cookie hay gọi Google Fonts)."]
      ]],
      ["h", "Chúng tôi không thu thập những gì?"],
      ["ul", [
        "Chúng tôi không thu thập thông tin nhận dạng cá nhân như tên, email hoặc số điện thoại qua tiện ích.",
        "Chúng tôi không ghi lại lịch sử duyệt web, nội dung trang bạn mở hoặc các truy vấn tìm kiếm.",
        "Chúng tôi không sử dụng công cụ phân tích, theo dõi, quảng cáo hoặc trình theo dõi của bên thứ ba.",
        "Chúng tôi không bán hoặc cho thuê dữ liệu của bạn.",
        "<strong>Không gọi phông chữ hoặc tập lệnh bên ngoài:</strong> mọi kiểu dáng và phông chữ của tiện ích đều được đóng gói cục bộ; không có yêu cầu nào gửi tới Google Fonts (<code>fonts.googleapis.com</code> / <code>fonts.gstatic.com</code>) hoặc CDN bên ngoài."
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
      ]]
      ]
    },
    ja: {
      title: "NahiDeck Connect プライバシーポリシー",
      updated: "2026年11月11日",
      blocks: [
      ["p", "本ポリシーは、<strong>NahiDeck Connect</strong> ブラウザ拡張機能が処理するデータについて説明するものです。NahiDeckのすべての製品を対象とする全体的な方針については、プライバシーポリシーページをご覧ください。"],
      ["h", "拡張機能の役割"],
      ["p", "NahiDeck Connect は、ブラウザーの YouTube、Spotify Web、Apple Music、SoundCloud のタブで再生中のトラックのタイトル、アーティスト、カバー画像のアドレス、再生状態、進捗、プラットフォーム名（例: YouTube）、ブラウザータブの識別子を読み取り、NahiDeck Windows アプリに転送します。メディアタブを見分けるため、開いているタブのアドレスはブラウザー内でのみ確認し、どこにも送信しません。スマートフォンから同じアプリ経由で送られる再生、一時停止、次／前のトラックの操作も適用します。"],
      ["h", "処理されるデータ"],
      ["table", ["データ", "処理場所", "目的"], [
        ["再生中トラックのタイトル、アーティスト、再生状態、進捗、プラットフォーム名、タブ識別子", "お客様のPC上のみ。ローカル接続（127.0.0.1）経由でNahiDeckアプリに送信されます", "スマートフォン上にトラック情報を表示し、操作を正しいタブへ届けるため"],
        ["ペアリングパスワード", "ブラウザ自身のローカルストレージ（chrome.storage.local）内", "拡張機能を許可されたNahiDeckアプリにのみ接続するため"],
        ["<strong>カバー画像</strong>", "利用可能な場合、再生中のメディアプラットフォームの画像サーバー（YouTube：<code>i.ytimg.com</code> — <strong>Google LLC / Google Ireland Limited</strong>、Spotify Web — <strong>Spotify AB</strong>、Apple Music — <strong>Apple Inc. / Apple Distribution International Ltd.</strong>、SoundCloud — <strong>SoundCloud Global Limited &amp; Co. KG</strong>）から曲のカバー画像がダウンロードされ（この際、各プラットフォームのプライバシーポリシーに基づき、お客様のIPアドレス、画像URL、標準のブラウザヘッダーが米国／EEA／グローバルCDNサーバーに送信されます）、ローカルでスマートフォンの画面に送信されます。"],
        ["ジャケット画像", "拡張機能が該当サイトの画像サーバー（例：YouTube、Spotify、Apple Music）からダウンロードします", "スマートフォン上にトラックカバーを表示するため。このリクエスト中、お客様のIPアドレスはそのサーバーに表示されます"],
,
        ["<strong>ウェブサイトおよびプライバシーポリシーへのリンク（クリック時のみ）</strong>", "拡張機能のポップアップ内のウェブサイト（<code>nahideck.github.io</code>）またはプライバシーポリシーのリンクをクリックした場合、ページ配信およびセキュリティ保護のため、ブラウザから訪問者のIPアドレス、リクエストされたURL、ブラウザ／OSヘッダーが<strong>GitHub, Inc. / GitHub B.V.</strong>および<strong>Fastly, Inc.</strong>（米国／EEA）に送信されます（標準セキュリティログに30〜90日間保持。CookieやGoogle Fontsへの外部通信は使用されません）。"]
      ]],
      ["h", "収集しない情報"],
      ["ul", [
        "拡張機能を通じて氏名、メールアドレス、電話番号などの個人を特定できる情報を収集することはありません。",
        "閲覧履歴、開いたページのコンテンツ、検索クエリを記録することはありません。",
        "分析、トラッキング、広告、またはサードパーティの追跡ツールを使用することはありません。",
        "お客様のデータを販売または貸与することはありません。",
        "<strong>外部フォント・スクリプト通信なし：</strong>拡張機能のすべてのスタイルとフォントはローカルに同梱されており、Google Fonts（<code>fonts.googleapis.com</code> / <code>fonts.gstatic.com</code>）や外部CDNへのリクエストは一切行われません。"
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
      ]]
      ]
    },
    ko: {
      title: "NahiDeck Connect 개인정보 처리방침",
      updated: "2026년 11월 11일",
      blocks: [
      ["p", "본 방침은 <strong>NahiDeck Connect</strong> 브라우저 확장 프로그램이 처리하는 데이터에 대해 설명합니다. 모든 NahiDeck 제품을 포괄하는 전반적인 방침은 개인정보 처리방침 페이지를 참조해 주십시오."],
      ["h", "확장 프로그램의 기능"],
      ["p", "NahiDeck Connect는 브라우저의 YouTube, Spotify Web, Apple Music, SoundCloud 탭에서 재생 중인 곡의 제목, 아티스트, 커버 이미지 주소, 재생 상태, 진행률, 플랫폼 이름(예: YouTube), 브라우저 탭 식별자를 읽어 NahiDeck Windows 애플리케이션으로 전달합니다. 미디어 탭을 식별하기 위해 열려 있는 탭의 주소는 브라우저 안에서만 확인하며, 이 주소는 어디에도 전송되지 않습니다. 휴대폰에서 같은 애플리케이션을 통해 보낸 재생, 일시정지, 이전/다음 곡 명령도 적용합니다."],
      ["h", "처리되는 데이터"],
      ["table", ["데이터", "처리 위치", "목적"], [
        ["재생 중인 곡의 제목, 아티스트, 재생 상태, 진행률, 플랫폼 이름, 탭 식별자", "사용자의 컴퓨터에서만 처리되며 로컬 연결(127.0.0.1)을 통해 NahiDeck 애플리케이션으로 전송됩니다", "휴대폰에 트랙 정보를 표시하고 명령을 올바른 탭으로 전달하기 위함"],
        ["페어링 비밀번호", "브라우저 자체 로컬 저장소(chrome.storage.local) 내부", "확장 프로그램을 승인된 NahiDeck 애플리케이션에만 연결하기 위함"],
        ["<strong>커버 이미지</strong>", "제공되는 경우 재생 중인 미디어 플랫폼의 이미지 서버(YouTube: <code>i.ytimg.com</code> — <strong>Google LLC / Google Ireland Limited</strong>, Spotify Web — <strong>Spotify AB</strong>, Apple Music — <strong>Apple Inc. / Apple Distribution International Ltd.</strong>, SoundCloud — <strong>SoundCloud Global Limited &amp; Co. KG</strong>)에서 트랙의 커버 이미지를 다운로드하여(이 과정에서 해당 플랫폼의 개인정보처리방침에 따라 사용자의 IP 주소, 이미지 URL 및 표준 브라우저 헤더가 미국/EEA/글로벌 CDN 서버로 전송됨) 로컬로 휴대폰 화면에 전송합니다."],
        ["커버 이미지", "확장 프로그램이 해당 사이트의 이미지 서버(예: YouTube, Spotify, Apple Music)에서 다운로드", "스마트폰에 앨범 커버를 표시하기 위함. 이 요청 중 사용자의 IP 주소가 해당 서버에 노출됩니다"],
,
        ["<strong>웹사이트 및 개인정보처리방침 링크(클릭한 경우에만)</strong>", "확장 프로그램 팝업에서 웹사이트(<code>nahideck.github.io</code>) 또는 개인정보처리방침 링크를 클릭하면 페이지 제공 및 보안을 위해 브라우저가 방문자 IP 주소, 요청된 URL 및 브라우저/OS 헤더를 <strong>GitHub, Inc. / GitHub B.V.</strong> 및 <strong>Fastly, Inc.</strong>(미국/EEA)로 전송합니다(표준 보안 로그에 30~90일간 보관되며, 쿠키나 Google Fonts 외부 호출은 사용되지 않습니다)."]
      ]],
      ["h", "수집하지 않는 항목"],
      ["ul", [
        "확장 프로그램을 통해 이름, 이메일, 전화번호와 같은 개인 식별 정보를 일체 수집하지 않습니다.",
        "인터넷 사용 기록, 방문한 페이지 내용 또는 검색어를 기록하지 않습니다.",
        "분석, 추적, 광고 또는 제3자 추적 도구를 사용하지 않습니다.",
        "이용자의 데이터를 판매하거나 대여하지 않습니다.",
        "<strong>외부 글꼴 또는 스크립트 호출 없음:</strong> 확장 프로그램의 모든 스타일과 글꼴은 로컬로 번들링되어 있으며 Google Fonts(<code>fonts.googleapis.com</code> / <code>fonts.gstatic.com</code>)나 외부 CDN으로 어떠한 요청도 보내지 않습니다."
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
      ]]
      ]
    },
    hi: {
      title: "NahiDeck Connect गोपनीयता नीति",
      updated: "11 नवंबर 2026",
      blocks: [
      ["p", "यह नीति बताती है कि <strong>NahiDeck Connect</strong> ब्राउज़र एक्सटेंशन किस डेटा को संसाधित करता है। सभी NahiDeck उत्पादों को कवर करने वाली नीति के लिए, गोपनीयता नीति पृष्ठ देखें।"],
      ["h", "एक्सटेंशन क्या करता है?"],
      ["p", "NahiDeck Connect आपके ब्राउज़र में YouTube, Spotify Web, Apple Music और SoundCloud टैब पर चल रहे ट्रैक का शीर्षक, कलाकार, कवर इमेज का पता, प्लेबैक स्थिति, प्रगति, प्लेटफ़ॉर्म नाम (जैसे YouTube) और ब्राउज़र टैब पहचानकर्ता पढ़ता है, और उन्हें NahiDeck Windows एप्लिकेशन को भेजता है। मीडिया टैब पहचानने के लिए खुले टैब के पते केवल ब्राउज़र के भीतर देखे जाते हैं; ये पते कहीं भेजे नहीं जाते। यह फ़ोन से उसी एप्लिकेशन के ज़रिए भेजे गए चलाने, रोकने और अगला/पिछला ट्रैक करने के आदेश भी लागू करता है।"],
      ["h", "कौन सा डेटा प्रोसेस किया जाता है?"],
      ["table", ["डेटा", "कहाँ प्रोसेस किया जाता है", "उद्देश्य"], [
        ["चल रहे ट्रैक का शीर्षक, कलाकार, प्लेबैक स्थिति, प्रगति, प्लेटफ़ॉर्म नाम और टैब पहचानकर्ता", "केवल आपके कंप्यूटर पर; यह स्थानीय कनेक्शन (127.0.0.1) पर NahiDeck एप्लिकेशन पर जाता है", "फ़ोन पर ट्रैक जानकारी दिखाना और आदेश को सही टैब तक पहुँचाना"],
        ["पेयरिंग पासवर्ड", "ब्राउज़र के अपने स्थानीय संग्रहण में (chrome.storage.local)", "एक्सटेंशन को केवल आपके अधिकृत NahiDeck एप्लिकेशन से कनेक्ट करना"],
        ["<strong>कवर छवि</strong>", "यदि उपलब्ध हो, तो ट्रैक की कवर छवि सक्रिय मीडिया प्लेटफ़ॉर्म के इमेज सर्वर (YouTube: <code>i.ytimg.com</code> — <strong>Google LLC / Google Ireland Limited</strong>; Spotify Web — <strong>Spotify AB</strong>; Apple Music — <strong>Apple Inc. / Apple Distribution International Ltd.</strong>; SoundCloud — <strong>SoundCloud Global Limited &amp; Co. KG</strong>) से डाउनलोड की जाती है (जिसमें उस प्लेटफ़ॉर्म की गोपनीयता नीति के तहत आपका IP पता, छवि URL और मानक ब्राउज़र हेडर उनके USA/EEA/वैश्विक CDN सर्वरों को भेजे जाते हैं) और स्थानीय रूप से आपके फ़ोन की स्क्रीन पर भेजी जाती है।"],
        ["कवर छवि", "एक्सटेंशन साइट के छवि सर्वर (उदाहरण के लिए YouTube, Spotify, Apple Music) से छवि डाउनलोड करता है", "फ़ोन पर ट्रैक कवर दिखाना। इस अनुरोध के दौरान आपका आईपी पता उस सर्वर को दिखाई देता है"],
,
        ["<strong>वेबसाइट और गोपनीयता नीति लिंक (केवल क्लिक करने पर)</strong>", "यदि आप एक्सटेंशन पॉपअप में वेबसाइट (<code>nahideck.github.io</code>) या गोपनीयता नीति लिंक पर क्लिक करते हैं, तो आपका ब्राउज़र पेज डिलीवरी और सुरक्षा के लिए आपका IP पता, अनुरोधित URL और ब्राउज़र/OS हेडर <strong>GitHub, Inc. / GitHub B.V.</strong> और <strong>Fastly, Inc.</strong> (USA/EEA) को भेजता है (मानक सुरक्षा लॉग में 30–90 दिनों तक रखा जाता है; कोई कुकी या Google Fonts कॉल उपयोग नहीं होती)।"]
      ]],
      ["h", "हम क्या एकत्र नहीं करते हैं?"],
      ["ul", [
        "हम एक्सटेंशन के माध्यम से नाम, ईमेल या फ़ोन नंबर जैसी व्यक्तिगत पहचान जानकारी एकत्र नहीं करते हैं।",
        "हम आपके ब्राउज़िंग इतिहास, आपके द्वारा खोले जाने वाले पृष्ठों की सामग्री या खोज प्रश्नों को रिकॉर्ड नहीं करते हैं।",
        "हम एनालिटिक्स, ट्रैकिंग, विज्ञापन या तीसरे पक्ष के ट्रैकिंग टूल का उपयोग नहीं करते हैं।",
        "हम आपका डेटा बेचते या किराए पर नहीं देते हैं।",
        "<strong>कोई बाहरी फ़ॉन्ट या स्क्रिप्ट कॉल नहीं:</strong> एक्सटेंशन की सभी शैलियाँ और फ़ॉन्ट स्थानीय रूप से बंडल किए गए हैं; Google Fonts (<code>fonts.googleapis.com</code> / <code>fonts.gstatic.com</code>) या बाहरी CDN को कोई अनुरोध नहीं भेजा जाता है।"
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
      ]]
      ]
    },
    my: {
      title: "NahiDeck Connect ကိုယ်ရေးအချက်အလက် လုံခြုံမှုမူဝါဒ",
      updated: "၂၀၂၆ ခုနှစ်၊ နိုဝင်ဘာလ ၁၁ ရက်",
      blocks: [
      ["p", "ဤမူဝါဒသည် <strong>NahiDeck Connect</strong> ဘရောက်ဆာ extension က မည်သည့်ဒေတာကို စီမံဆောင်ရွက်သည်ကို ရှင်းပြထားပါသည်။ NahiDeck ထုတ်ကုန်အားလုံးနှင့် သက်ဆိုင်သည့် အထွေထွေမူဝါဒအတွက် ကိုယ်ရေးလုံခြုံမှုမူဝါဒ စာမျက်နှာတွင် ကြည့်ရှုပါ။"],
      ["h", "Extension က မည်သို့လုပ်ဆောင်သနည်း။"],
      ["p", "NahiDeck Connect သည် သင့်ဘရောက်ဆာရှိ YouTube၊ Spotify Web၊ Apple Music နှင့် SoundCloud တဘ်များတွင် ဖွင့်နေသော သီချင်း၏ ခေါင်းစဉ်၊ အဆိုတော်၊ အုပ်ဖုံးပုံလိပ်စာ၊ ဖွင့်နေသည့်အခြေအနေ၊ တိုးတက်မှု၊ ပလက်ဖောင်းအမည် (ဥပမာ YouTube) နှင့် ဘရောက်ဆာတဘ်အမှတ်အသားကို ဖတ်ပြီး NahiDeck Windows အက်ပ်သို့ ပို့ပါသည်။ မီဒီယာတဘ်များကို ခွဲခြားရန် ဖွင့်ထားသောတဘ်လိပ်စာများကို ဘရောက်ဆာအတွင်းတွင်သာ စစ်ဆေးပြီး ထိုလိပ်စာများကို မည်သည့်နေရာသို့မျှ မပို့ပါ။ ဖုန်းမှ တူညီသောအက်ပ်ဖြင့် ပို့သော ဖွင့်/ရပ်/နောက်တစ်ပုဒ်/ယခင်တစ်ပုဒ် အမိန့်များကိုလည်း လုပ်ဆောင်ပါသည်။"],
      ["h", "မည်သည့်ဒေတာများကို လုပ်ဆောင်သနည်း။"],
      ["table", ["ဒေတာ", "မည်သည့်နေရာတွင် လုပ်ဆောင်သနည်း", "ရည်ရွယ်ချက်"], [
        ["ဖွင့်နေသော သီချင်း၏ ခေါင်းစဉ်၊ အဆိုတော်၊ ဖွင့်နေသည့်အခြေအနေ၊ တိုးတက်မှု၊ ပလက်ဖောင်းအမည်နှင့် တဘ်အမှတ်အသား", "သင့်ကွန်ပျူတာပေါ်တွင်သာ ဖြစ်ပြီး ဒေသတွင်းချိတ်ဆက်မှု (127.0.0.1) မှတစ်ဆင့် NahiDeck အက်ပ်သို့ ရောက်ရှိပါသည်", "ဖုန်းပေါ်တွင် သီချင်းအချက်အလက်ကို ပြသရန်နှင့် အမိန့်ကို မှန်ကန်သောတဘ်သို့ ပို့ရန်"],
        ["တွဲချိတ်မှုစကားဝှက်", "ဘရောက်ဆာ၏ ကိုယ်ပိုင်ဒေသတွင်းသိုလှောင်မှု (chrome.storage.local) အတွင်း", "Extension ကို သင်ခွင့်ပြုထားသော NahiDeck အက်ပ်နှင့်သာ ချိတ်ဆက်ရန်"],
        ["<strong>မျက်နှာဖုံးပုံ</strong>", "ရရှိနိုင်ပါက သီချင်း၏ မျက်နှာဖုံးပုံကို လက်ရှိဖွင့်ထားသော မီဒီယာပလက်ဖောင်း၏ ပုံဆာဗာ (YouTube: <code>i.ytimg.com</code> — <strong>Google LLC / Google Ireland Limited</strong>၊ Spotify Web — <strong>Spotify AB</strong>၊ Apple Music — <strong>Apple Inc. / Apple Distribution International Ltd.</strong>၊ SoundCloud — <strong>SoundCloud Global Limited &amp; Co. KG</strong>) မှ ဒေါင်းလုဒ်လုပ်ပြီး (ထိုသို့လုပ်ဆောင်စဉ် သက်ဆိုင်ရာ ပလက်ဖောင်း၏ ကိုယ်ရေးလုံခြုံမှု မူဝါဒအရ သင်၏ IP လိပ်စာ၊ ပုံ URL နှင့် စံဘရောက်ဇာ ခေါင်းစီးများကို ၎င်းတို့၏ အမေရိကန်/EEA/ကမ္ဘာလုံးဆိုင်ရာ CDN ဆာဗာများသို့ ပေးပို့သည်) သင့်ဖုန်းမျက်နှာပြင်သို့ စက်တွင်း၌သာ ပေးပို့ပါသည်။"],
        ["အယ်လ်ဘမ်ကာဗာပုံ", "Extension သည် သက်ဆိုင်ရာဆိုက်၏ ဆာဗာ (ဥပမာ YouTube, Spotify, Apple Music) မှ ပုံကို ရယူပါသည်", "ဖုန်းတွင် သီချင်းကာဗာပုံ ပြသရန်။ ဤတောင်းဆိုမှုအတွင်း သင့် IP လိပ်စာသည် အဆိုပါဆာဗာသို့ ပေါ်လွင်မည်ဖြစ်ပါသည်"],
,
        ["<strong>ဝက်ဘ်ဆိုက်နှင့် ကိုယ်ရေးလုံခြုံမှု မူဝါဒ လင့်ခ်များ (နှိပ်သည့်အခါမှသာ)</strong>", "အိတ်စ်တန်းရှင်း ဝင်းဒိုးရှိ ဝက်ဘ်ဆိုက် (<code>nahideck.github.io</code>) သို့မဟုတ် ကိုယ်ရေးလုံခြုံမှု မူဝါဒ လင့်ခ်ကို နှိပ်ပါက စာမျက်နှာ ပေးပို့ရန်နှင့် လုံခြုံရေးအတွက် သင့်ဘရောက်ဇာသည် သင်၏ IP လိပ်စာ၊ တောင်းဆိုထားသော URL နှင့် ဘရောက်ဇာ/OS ခေါင်းစီးများကို <strong>GitHub, Inc. / GitHub B.V.</strong> နှင့် <strong>Fastly, Inc.</strong> (အမေရိကန်/EEA) သို့ ပေးပို့ပါသည် (စံလုံခြုံရေးမှတ်တမ်းများတွင် ရက် ၃၀ မှ ၉၀ အထိ သိမ်းဆည်းပြီး ကွတ်ကီး သို့မဟုတ် Google Fonts ခေါ်ဆိုမှုများ မရှိပါ)။"]
      ]],
      ["h", "ကျွန်ုပ်တို့ မည်သည့်အရာများကို မစုဆောင်းသနည်း။"],
      ["ul", [
        "Extension မှတစ်ဆင့် အမည်၊ အီးမေးလ် သို့မဟုတ် ဖုန်းနံပါတ်ကဲ့သို့သော ကိုယ်ရေးကိုယ်တာအချက်အလက်များကို မစုဆောင်းပါ။",
        "သင့်ဘရောက်ဆာရှာဖွေမှုမှတ်တမ်း၊ သင်ဖွင့်ကြည့်သော စာမျက်နှာအကြောင်းအရာများ သို့မဟုတ် ရှာဖွေမှုများကို မှတ်တမ်းမတင်ပါ။",
        "ခွဲခြမ်းစိတ်ဖြာမှု၊ ခြေရာခံမှု၊ ကြော်ငြာ သို့မဟုတ် ပြင်ပခြေရာခံကိရိယာများကို အသုံးမပြုပါ။",
        "သင့်ဒေတာများကို ရောင်းချခြင်း သို့မဟုတ် ငှားရမ်းခြင်း မပြုပါ။",
        "<strong>ပြင်ပဖောင့် သို့မဟုတ် စခရစ် ခေါ်ဆိုမှု မရှိပါ -</strong> အိတ်စ်တန်းရှင်း၏ စတိုင်နှင့် ဖောင့်အားလုံးကို စက်တွင်း၌ပင် ထည့်သွင်းထားပြီး Google Fonts (<code>fonts.googleapis.com</code> / <code>fonts.gstatic.com</code>) သို့မဟုတ် ပြင်ပ CDN များသို့ တောင်းဆိုချက် လုံးဝမပေးပို့ပါ။"
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
      ]]
      ]
    },
    ar: {
      title: "سياسة خصوصية NahiDeck Connect",
      updated: "11 نوفمبر 2026",
      blocks: [
      ["p", "توضح هذه السياسة ماهية البيانات التي تعالجها إضافة المتصفح <strong>NahiDeck Connect</strong>. للاطلاع على السياسة العامة التي تغطي جميع منتجات NahiDeck، يرجى مراجعة صفحة سياسة الخصوصية."],
      ["h", "ماذا تفعل الإضافة؟"],
      ["p", "يقرأ NahiDeck Connect عنوان المقطع الجاري تشغيله واسم الفنان وعنوان صورة الغلاف وحالة التشغيل والتقدم واسم المنصة (مثل YouTube) ومعرّف تبويب المتصفح في تبويبات YouTube وSpotify Web وApple Music وSoundCloud، ويرسلها إلى تطبيق NahiDeck لنظام Windows. لتمييز تبويبات الوسائط، تُفحص عناوين التبويبات المفتوحة داخل المتصفح فقط، ولا تُرسل هذه العناوين إلى أي جهة. كما ينفّذ أوامر التشغيل والإيقاف المؤقت والمقطع التالي/السابق المُرسلة من هاتفك عبر التطبيق نفسه."],
      ["h", "ما البيانات التي تتم معالجتها؟"],
      ["table", ["البيانات", "مكان المعالجة", "الغرض"], [
        ["عنوان المقطع الجاري واسم الفنان وحالة التشغيل والتقدم واسم المنصة ومعرّف التبويب", "على جهاز الكمبيوتر الخاص بك فقط؛ تُرسل إلى تطبيق NahiDeck عبر اتصال محلي (127.0.0.1)", "عرض معلومات المقطع على الهاتف وتوجيه الأمر إلى التبويب الصحيح"],
        ["كلمة مرور الاقتران", "في التخزين المحلي للمتصفح نفسه (chrome.storage.local)", "ربط الإضافة بتطبيق NahiDeck المصرح به فقط"],
        ["<strong>صورة الغلاف</strong>", "إذا كانت متوفرة، يتم تنزيل صورة غلاف المقطع من خادم الصور التابع لمنصة الوسائط النشطة (YouTube: <code>i.ytimg.com</code> — <strong>Google LLC / Google Ireland Limited</strong>؛ Spotify Web — <strong>Spotify AB</strong>؛ Apple Music — <strong>Apple Inc. / Apple Distribution International Ltd.</strong>؛ SoundCloud — <strong>SoundCloud Global Limited &amp; Co. KG</strong>)، مما يؤدي إلى إرسال عنوان IP الخاص بك وعنوان URL للصورة وترويسات المتصفح القياسية إلى خوادم CDN العالمية (الولايات المتحدة / المنطقة الاقتصادية الأوروبية) لتلك المنصة وفقًا لسياسة الخصوصية الخاصة بها، ثم تُرسل محليًا إلى شاشة هاتفك."],
        ["صورة الغلاف", "تقوم الإضافة بتنزيل الصورة من خادم صور الموقع (مثل YouTube أو Spotify أو Apple Music)", "عرض غلاف المقطع على الهاتف. خلال هذا الطلب، يكون عنوان IP الخاص بك مرئيًا لذلك الخادم"],
,
        ["<strong>روابط الموقع الإلكتروني وسياسة الخصوصية (عند النقر فقط)</strong>", "إذا نقرت على رابط الموقع الإلكتروني (<code>nahideck.github.io</code>) أو رابط سياسة الخصوصية في نافذة الإضافة، يرسل متصفحك عنوان IP الخاص بك وعنوان URL المطلوب وترويسات المتصفح/نظام التشغيل إلى <strong>GitHub, Inc. / GitHub B.V.</strong> و<strong>Fastly, Inc.</strong> (الولايات المتحدة / المنطقة الاقتصادية الأوروبية) لتسليم الصفحة والحماية الأمنية (يُحتفظ بها في سجلات الأمان القياسية لمدة 30–90 يومًا؛ دون ملفات تعريف ارتباط أو استدعاءات لـ Google Fonts)."]
      ]],
      ["h", "ما الذي لا نجمعه؟"],
      ["ul", [
        "لا نجمع معلومات الهوية الشخصية مثل الاسم أو البريد الإلكتروني أو رقم الهاتف عبر الإضافة.",
        "لا نسجل سجل التصفح أو محتوى الصفحات التي تفتحها أو استعلامات البحث.",
        "لا نستخدم أدوات التحليلات أو التتبع أو الإعلانات أو أدوات التتبع التابعة لجهات خارجية.",
        "لا نبيع بياناتك ولا نؤجرها.",
        "<strong>لا توجد استدعاءات لخطوط أو نصوص برمجية خارجية:</strong> جميع أنماط وخطوط الإضافة مدمجة محليًا؛ ولا يتم إرسال أي طلبات إلى Google Fonts (<code>fonts.googleapis.com</code> / <code>fonts.gstatic.com</code>) أو شبكات CDN خارجية."
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
      ]]
      ]
    },
    fa: {
      title: "سیاست حفظ حریم خصوصی NahiDeck Connect",
      updated: "۱۱ نوامبر ۲۰۲۶",
      blocks: [
      ["p", "این سیاست توضیح می‌دهد که افزونه مرورگر <strong>NahiDeck Connect</strong> چه داده‌هایی را پردازش می‌کند. برای سیاست جامعی که تمام محصولات NahiDeck را شامل می‌شود، صفحه سیاست حفظ حریم خصوصی را ببینید."],
      ["h", "افزونه چه کاری انجام می‌دهد؟"],
      ["p", "NahiDeck Connect عنوان، هنرمند، نشانی تصویر جلد، وضعیت پخش، پیشرفت، نام پلتفرم (مثلاً YouTube) و شناسه تب مرورگر آهنگ در حال پخش در تب‌های YouTube، Spotify Web، Apple Music و SoundCloud را می‌خواند و به برنامه NahiDeck برای Windows می‌فرستد. برای شناسایی تب‌های رسانه‌ای، نشانی تب‌های باز فقط در داخل مرورگر بررسی می‌شود و این نشانی‌ها به هیچ جا فرستاده نمی‌شوند. همچنین فرمان‌های پخش، توقف و آهنگ بعد/قبل را که از گوشی از طریق همان برنامه فرستاده می‌شوند اعمال می‌کند."],
      ["h", "چه داده‌هایی پردازش می‌شوند؟"],
      ["table", ["داده", "محل پردازش", "هدف"], [
        ["عنوان، هنرمند، وضعیت پخش، پیشرفت، نام پلتفرم و شناسه تب آهنگ در حال پخش", "فقط روی رایانه شما؛ از طریق اتصال محلی (127.0.0.1) به برنامه NahiDeck ارسال می‌شود", "نمایش مشخصات آهنگ روی گوشی و ارسال فرمان به تب درست"],
        ["رمز عبور جفت‌سازی", "در حافظه محلی خود مرورگر (chrome.storage.local)", "اتصال افزونه تنها به برنامه مجاز NahiDeck شما"],
        ["<strong>تصویر جلد</strong>", "در صورت وجود، تصویر جلد قطعه از سرور تصویر پلتفرم رسانه فعال (YouTube: <code>i.ytimg.com</code> — <strong>Google LLC / Google Ireland Limited</strong>؛ Spotify Web — <strong>Spotify AB</strong>؛ Apple Music — <strong>Apple Inc. / Apple Distribution International Ltd.</strong>؛ SoundCloud — <strong>SoundCloud Global Limited &amp; Co. KG</strong>) دانلود می‌شود (که طی آن آدرس IP شما، نشانی URL تصویر و هدرهای استاندارد مرورگر طبق سیاست حریم خصوصی همان پلتفرم به سرورهای CDN جهانی آن در ایالات متحده / منطقه اقتصادی اروپا ارسال می‌گردد) و سپس به صورت محلی به صفحه گوشی فرستاده می‌شود."],
        ["تصویر کاور", "افزونه تصویر را از سرور تصاویر سایت مربوطه (مانند YouTube، Spotify، Apple Music) دانلود می‌کند", "نمایش کاور قطعه روی گوشی. در حین این درخواست، آدرس IP شما برای آن سرور قابل مشاهده است"],
,
        ["<strong>پیوندهای وب‌سایت و سیاست حفظ حریم خصوصی (فقط در صورت کلیک)</strong>", "اگر روی پیوند وب‌سایت (<code>nahideck.github.io</code>) یا سیاست حفظ حریم خصوصی در پنجره افزونه کلیک کنید، مرورگر شما آدرس IP، نشانی URL درخواستی و هدرهای مرورگر/سیستم‌عامل را جهت ارائه صفحه و امنیت به <strong>GitHub, Inc. / GitHub B.V.</strong> و <strong>Fastly, Inc.</strong> (ایالات متحده / منطقه اقتصادی اروپا) ارسال می‌کند (نگهداری در لاگ‌های امنیتی استاندارد به مدت ۳۰ تا ۹۰ روز؛ بدون کوکی یا فراخوانی Google Fonts)."]
      ]],
      ["h", "چه مواردی را جمع‌آوری نمی‌کنیم؟"],
      ["ul", [
        "ما اطلاعات هویتی شخصی مانند نام، ایمیل یا شماره تلفن را از طریق افزونه جمع‌آوری نمی‌کنیم.",
        "تاریخچه مرور وب، محتوای صفحات بازشده یا عبارت‌های جستجوی شما را ثبت نمی‌کنیم.",
        "از ابزارهای تحلیل، ردیابی، تبلیغاتی یا ردیاب‌های شخص ثالث استفاده نمی‌کنیم.",
        "داده‌های شما را به فروش نمی‌رسانیم و اجاره نمی‌دهیم.",
        "<strong>بدون فراخوانی فونت یا اسکریپت خارجی:</strong> تمامی استایل‌ها و فونت‌های افزونه به صورت محلی بسته شده‌اند؛ هیچ درخواستی به Google Fonts (<code>fonts.googleapis.com</code> / <code>fonts.gstatic.com</code>) یا شبکه‌های CDN خارجی ارسال نمی‌شود."
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
      ]]
      ]
    }
  };
  Object.keys(EXT).forEach(function (k) {
    if (window.NAHI_LEGAL[k]) window.NAHI_LEGAL[k].extension = EXT[k];
  });
})();
