/*
 * NahiDeck site — yasal metinler (Gizlilik Politikası, Hesap ve Veri Silme).
 * Kaynak: tr ve en metinleri docs/site önceki sürümündeki sayfalardan alındı.
 * Diğer diller bu metinlerden çevrildi. Anadil doğrulaması tamamlanana kadar
 * AWAITING_NATIVE_SPEAKER_REVIEW olarak işaretlidir.
 *
 * Blok türleri: h (başlık), p (paragraf), ul/ol (liste), table ([başlıklar], [satırlar]),
 * card (kutu), danger (uyarı kutusu, içinde h3 ve p/ol kullanılabilir).
 * HTML içeriği yalnızca bu dosyadan gelir; kullanıcı girdisi içermez.
 */
window.NAHI_LEGAL = {

  // AWAITING_NATIVE_SPEAKER_REVIEW: hayır — tr kaynak metni
  tr: {
    privacy: {
      title: "NahiDeck Gizlilik Politikası",
      updated: "25 Ekim 2026",
      blocks: [
        ["p", "NahiDeck (\"biz\", \"uygulama\" veya \"hizmet\"), kullanıcılarının kişisel verilerinin korunmasına ve gizliliğine önem verir. Bu politika; <strong>NahiDeck Android uygulamasını</strong>, <strong>NahiDeck Windows masaüstü istemcisini</strong> ve <strong>NahiDeck Web Tarayıcı Eklentisini (NahiDeck Connect)</strong> kapsar."],
        ["h", "Kısaca"],
        ["ul", [
          "<strong>Ne topluyoruz:</strong> Hesap bilgisi (isteğe bağlı), Pro lisans ve cihaz eşleşme kayıtları, isteğe bağlı anonim kullanım verisi ve göndermeyi seçtiğiniz çökme raporları.",
          "<strong>Nerede işlenir:</strong> Avrupa'da (Firestore, Cloud Functions). Kimlik doğrulama (Firebase Authentication) ve satın alma doğrulaması (RevenueCat) ABD'de işlenir; bu aktarımın dayanağı aşağıda belirtilmiştir.",
          "<strong>Ne kadar tutuluyoruz:</strong> Teknik günlükler 30 gün, denetim ve çökme raporları 90 gün, anonim düzen kayıtları 180 gün. Hesabınızı sildiğinizde hesap verileri silinir.",
          "<strong>Haklarınız:</strong> Verilerinize erişim, düzeltme ve silme talep edebilirsiniz. Hesabınızı uygulamadan veya Hesap Silme sayfasından silebilirsiniz.",
          "<strong>Çökme raporu:</strong> Yalnızca siz gönderirseniz iletilir. Notunuz ve iletişim e-postanız isteğe bağlıdır; not olduğu gibi saklanabilir, e-posta ve IP adresleri maskelenir."
        ]],
        ["h", "1. Veri sorumlusu ve iletişim"],
        ["p", "6698 sayılı KVKK ve GDPR kapsamında veri sorumlusu:"],
        ["h", "2. Yerel iletişim (bulut bağımlılığı yok)"],
        ["p", "NahiDeck, telefonunuz ile bilgisayarınız arasında Wi-Fi, USB kablosu veya Bluetooth Düşük Enerji (BLE) üzerinden doğrudan çalışır:"],
        ["ul", [
          "<strong>Medya ve ses komutları:</strong> Tuş basımları, ses ayarları ve medya komutları yerel ağınızda iletilir; harici sunuculara gitmez.",
          "<strong>Masaüstü makroları:</strong> Bilgisayarınızda çalıştırılan kısayollar ve özel aksiyonlar yerelde işlenir.",
          "<strong>Şifreleme:</strong> Yerel bağlantı, yerelde üretilen TLS sertifikaları ve TOFU (ilk kullanımda güven) parmak izi sabitlemesiyle korunur."
        ]],
        ["h", "3. Hangi verileri topluyoruz ve nasıl kullanıyoruz?"],
        ["p", "Veri kategorileri, hizmet sağlayıcılar ve kullanım amaçları ayrıntılı olarak sayfanın sonundaki Ek A'da tablo halinde verilmiştir."],
        ["h", "4. Bulut yedekleme (Google Drive)"],
        ["p", "Ekran yerleşimlerinizi, profillerinizi ve tercihlerinizi yedeklemek için isteğe bağlı bir Google Drive yedekleme özelliği bulunur:"],
        ["ul", [
          "<strong>Saklama yeri:</strong> Yedekler yalnızca kendi Google Drive hesabınızdaki gizli uygulama klasöründe (drive.appdata) tutulur. NahiDeck sunucularına veya üçüncü taraflara aktarılmaz.",
          "<strong>Yedek içeriği:</strong> Ekran yerleşimleri, profiller, görsel tercihler ve isteğe bağlı masaüstü aksiyon tanımları. Cihaz oturum sırları, eşleşme anahtarları ve hesap şifreleri yedeğe dahil edilmez.",
          "<strong>Telemetriden tamamen ayrıdır:</strong> Yedekleme verileri telemetri amacıyla okunmaz veya işlenmez."
        ]],
        ["h", "5. Hiçbir zaman toplanmayan veriler"],
        ["ul", [
          "<strong>Konum:</strong> GPS veya konum servisleri çağrılmaz. Android'in BLE taraması için istediği izin yalnızca yerel cihaz bulma içindir.",
          "<strong>Kişisel dosyalar:</strong> Fotoğraflara, videolara, belgelere veya ses kayıtlarına erişilmez.",
          "<strong>Rehber:</strong> Kişi listelerine erişilmez.",
          "<strong>Donanım kimlikleri:</strong> IMEI, MAC adresi veya donanım seri numarası toplanmaz; yerine rastgele üretilen kimlikler kullanılır."
        ]],
        ["h", "6. Saklama ve silme"],
        ["ul", [
          "<strong>Hesap ve lisans verileri:</strong> Uygulamada Ayarlar > Hesap > \"Hesabımı Sil\" ile veya web sitemizdeki Hesap Silme sayfasından talep edildiğinde kalıcı olarak silinir.",
          "<strong>Telemetri:</strong> Ayarlar > Gizlilik bölümünden onay kaldırıldığında mevcut kayıt hemen silinir. Aktif kayıtlar en geç 180 gün içinde otomatik silinir (TTL).",
          "<strong>Teknik sunucu günlükleri:</strong> Altyapı istek günlükleri en fazla 30 gün tutulur.",
          "<strong>Lisans ve denetim kayıtları:</strong> Hesap ve lisans işlemlerine ait kayıtlar, kullanıcı kimliğinin karma (hash) hâlini içerir ve en fazla 90 gün tutulur.",
          "<strong>Çökme raporları:</strong> Uygulama sürümü, cihaz hash'i, hata türü ve metni, stack trace ile günlük satırlarını içerir. E-posta adresleri, IP adresleri ve dosya yollarındaki kullanıcı klasör adları gönderilmeden önce maskelenir. En fazla 90 gün tutulur.",
          "<strong>Yurt dışı aktarım:</strong> Firebase Authentication hizmetini Google, ABD veri merkezlerinde işletir. Satın alma doğrulaması için RevenueCat verilerinizi ABD'de (AWS) işler; bu aktarım Standart Sözleşme Hükümleri ile güvence altındadır. Firestore, Cloud Functions ve Cloud KMS verileri Avrupa'daki (europe-west1) sunucularda işlenir. Türkiye'den yapılan aktarımların KVKK m.9 dayanağı: [HUKUKİ DAYANAK: AVUKAT TARAFINDAN DOLDURULACAK].",
          "<strong>Destek e-postası:</strong> Google Groups (tüketici grubu) üzerinden işlenir ve Google'ın <a href='https://policies.google.com/privacy?hl=en'>Gizlilik Politikası</a> ile <a href='https://policies.google.com/terms?hl=en'>Şartlarına</a> tabidir. Mesajlar grubun arşivinde tutulur."
        ]],
        ["h", "7. Haklarınız (KVKK ve GDPR)"],
        ["p", "KVKK'nın 11. maddesi ve GDPR uyarınca; verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, işlenme amacını öğrenme, düzeltilmesini veya silinmesini isteme hakkınız vardır. Bu haklarınız için nahideck-support@googlegroups.com adresinden bize ulaşabilirsiniz."],
        ["h", "Ek A: Veri kategorileri ve hizmet sağlayıcılar (teknik ayrıntı)"],
        ["table", ["Veri kategorisi", "Toplanan bilgi", "Hizmet sağlayıcı", "Kullanım amacı"], [
          ["<strong>Kullanıcı hesabı</strong>", "E-posta adresi, ad soyad, Firebase kullanıcı kimliği (UID)", "Google Firebase Authentication", "Oturum yönetimi ve Pro lisans sahipliğinin doğrulanması. İsteğe bağlıdır; Free plan oturumsuz kullanılabilir."],
          ["<strong>Lisans ve eşleşme</strong>", "Rastgele üretilen telefon cihaz kimliği, PC kimliği, UID", "Google Cloud Firestore ve Cloud KMS", "1 telefon + 1 PC adil kullanım politikası ve dijital lisans imzalama."],
          ["<strong>Satın alma ve abonelik</strong>", "Google Play sipariş/token bilgisi, RevenueCat App User ID, hak durumu", "Google Play Billing ve RevenueCat", "Pro abonelik satın alımı, yenilemesi ve hak doğrulaması."],
          ["<strong>Kullanım ve düzen telemetrisi (isteğe bağlı)</strong>", "Rastgele kurulum kimliği (installId), ızgara düzeni (widget türleri, konumları), tema tercihi, plan türü", "Google Cloud Firestore (anonymous_layouts)", "Popüler widget ve ekran düzenlerini analiz ederek arayüzü geliştirmek. <strong>Kişisel veri, metin veya hesap bilgisi içermez.</strong>"],
          ["<strong>Yerel eklenti verileri</strong>", "Aktif sekmedeki medya durumu (parça adı, sanatçı, oynatma durumu)", "Yalnızca yerel tarayıcı ve PC uygulaması", "Desteklenen tarayıcılardaki medyayı PC ve telefonda göstermek. Buluta gönderilmez."],
          ["<strong>Uygulama doğrulama</strong>", "Paket adı, uygulama imza sertifikası ve cihaz bütünlük sonucu", "Google Play Integrity (Google)", "Uygulamanın Google Play üzerinden yüklenip yüklenmediğini ve güvenilir bir cihazda çalışıp çalışmadığını doğrulamak; kötüye kullanımı önlemek. Google bu verileri üçüncü taraflarla paylaşmaz."],
          ["<strong>Hata raporu (isteğe bağlı)</strong>", "Uygulama sürümü, cihaz hash'i, hata türü ve metni, stack trace ve günlük satırları (e-posta ve IP adresleri maskelenir)", "Google Cloud Functions ve Firestore (Avrupa); destek e-postası Google Groups üzerinden", "Çökmeleri analiz edip düzeltmek. Gönderim kullanıcı onayıyla yapılır."]
        ]],
        ["card", [["p", "<strong>Veri sorumlusu:</strong> Kaya Furkan İPEKCİ"], ["p", "<strong>E-posta:</strong> nahideck-support@googlegroups.com"], ["p", "<strong>Web sitesi:</strong> https://nahideck.github.io"]]],
      ]
    },
    delete: {
      title: "Hesap ve veri silme talebi",
      blocks: [
        ["p", "NahiDeck hesabınızı ve hesabınıza bağlı tüm verileri kalıcı olarak silmek istiyorsanız aşağıdaki yöntemlerden birini kullanabilirsiniz."],
        ["h", "Yöntem 1: Uygulama içinden silme (önerilen)"],
        ["ol", [
          "Android cihazınızda <strong>NahiDeck</strong> uygulamasını açın.",
          "Sol menüden (veya üst menüden) <strong>Ayarlar</strong> ekranına gidin.",
          "<strong>Hesap</strong> bölümünü açın.",
          "Sayfanın en altındaki <strong>\"Hesabımı Sil\"</strong> seçeneğine dokunun.",
          "Açılan pencerede işlemi onaylayın.",
          "İşlem tamamlandığında Firebase kullanıcı kaydınız, eşleşmiş cihazlarınız ve bulut lisans kayıtlarınız kalıcı olarak silinir."
        ]],
        ["p", "<em>Hesap silme güvenlik nedeniyle son 5 dakika içinde yapılmış bir girişi gerektirir. Hata alırsanız çıkış yapıp yeniden giriş yapın ve tekrar deneyin.</em>"],
        ["p", "<em>Not: Hesabınızı silseniz bile Google Drive'daki uygulama yedeği otomatik silinmez. Yedeği Google Drive ayarlarından (Google Drive > Ayarlar > Uygulamaları yönet) kendiniz silmelisiniz.</em>"],
        ["h", "Yöntem 2: E-posta ile silme talebi"],
        ["p", "Uygulamaya erişiminiz yoksa veya uygulamayı kaldırdıysanız talebinizi e-posta ile iletebilirsiniz:"],
        ["card", [
          ["p", "<strong>Destek e-postası:</strong> nahideck-support@googlegroups.com"],
          ["p", "<strong>Konu:</strong> <code>NahiDeck Hesap ve Veri Silme Talebi</code>"],
          ["p", "<strong>Gerekli bilgi:</strong>"],
          ["ul", ["NahiDeck'e giriş yaparken kullandığınız Google hesabının e-posta adresi.", "<em>(İsteğe bağlı)</em> Google Play sipariş numarası veya RevenueCat abonelik referansı."]]
        ]],
        ["p", "Kimliğiniz doğrulandıktan sonra hesabınız ve ilişkili bulut kayıtlarınız <strong>en geç 7 iş günü içinde</strong> kalıcı olarak silinir."],
        ["h", "Hangi veriler kalıcı olarak silinir?"],
        ["ul", [
          "Firebase Authentication kullanıcı kaydı, e-posta adresi ve profil bilgileri.",
          "Firestore <code>entitlements</code> koleksiyonundaki Pro lisans kaydı.",
          "Firestore <code>devices</code> koleksiyonundaki eşleşmiş telefon ve PC kayıtları.",
          "RevenueCat abonelik profili (<code>app_user_id</code>); teknik olarak mümkünse silinir. Silinemezse bu talebi e-posta ile bildirin.",
          "Cihazınızdaki yerel güvenli depodaki lisans anahtarları ve oturum kayıtları."
        ]],
        ["h", "Hangi veriler saklanmaya devam eder?"],
        ["ul", [
          "<strong>Google Play fatura kayıtları:</strong> Vergi ve tüketici mevzuatı gereği Google tarafından saklanır; NahiDeck sunucularında tutulmaz.",
          "<strong>Denetim kayıtları:</strong> Hesap ve lisans işlemlerine ait kayıtlar, doğrudan kimliğinizle ilişkilendirilemeyen karma (hash) bir tanımlayıcı içerir ve en geç 90 gün içinde otomatik silinir.",
          "<strong>Çökme raporları:</strong> En geç 90 gün içinde otomatik silinir."
        ]],
        ["danger", [
          ["h3", "Önemli: Aktif aboneliğinizi iptal edin"],
          ["p", "Hesabınızı silmek, Google Play üzerinden başlattığınız aboneliği <strong>otomatik olarak iptal etmez</strong>. Gelecek ödemeleri durdurmak için hesabınızı silmeden önce:"],
          ["ol", [
            "Android cihazınızda <strong>Google Play Store</strong>'u açın.",
            "Profil simgenize dokunun > <strong>Ödemeler ve abonelikler</strong> > <strong>Abonelikler</strong>.",
            "<strong>NahiDeck</strong> aboneliğini seçip <strong>\"Aboneliği iptal et\"</strong> seçeneğine dokunun."
          ]]
        ]]
      ]
    }
  },

  en: {
    privacy: {
      title: "NahiDeck Privacy Policy",
      updated: "October 25, 2026",
      blocks: [
        ["p", "NahiDeck (\"we\", \"us\" or \"the app\") values the privacy of its users and the protection of personal data. This policy covers the <strong>NahiDeck Android app</strong>, the <strong>NahiDeck Windows desktop client</strong> and the <strong>NahiDeck web browser extension (NahiDeck Connect)</strong>."],
        ["h", "In brief"],
        ["ul", [
          "<strong>What we collect:</strong> Account details (optional), Pro licence and device pairing records, optional anonymous usage data, and crash reports you choose to send.",
          "<strong>Where it is processed:</strong> In Europe (Firestore, Cloud Functions). Sign-in (Firebase Authentication) and purchase checks (RevenueCat) are processed in the United States; the basis for this transfer is described below.",
          "<strong>How long we keep it:</strong> Technical logs 30 days, audit and crash records 90 days, anonymous layout records 180 days. Deleting your account removes your account data.",
          "<strong>Your rights:</strong> You can request access, correction and deletion. You can delete your account in the app or on the Account Deletion page.",
          "<strong>Crash reports:</strong> Sent only when you confirm. Your optional note and contact email are included; the note is stored as written, and email and IP addresses are masked."
        ]],
        ["h", "1. Data controller and contact"],
        ["p", "Under the GDPR and applicable data protection law, the data controller is:"],
        ["h", "2. Local communication (no cloud dependency)"],
        ["p", "NahiDeck works directly between your Android phone and Windows computer over local Wi-Fi, a USB cable or Bluetooth Low Energy (BLE):"],
        ["ul", [
          "<strong>Media and audio commands:</strong> Key presses, volume changes and media commands travel on your local network. They are not sent to external servers.",
          "<strong>Desktop macros:</strong> Shortcuts and custom actions run and are processed on your computer.",
          "<strong>Encryption:</strong> The local connection is protected by TLS certificates generated locally and TOFU (Trust On First Use) fingerprint pinning."
        ]],
        ["h", "3. What we collect and how we use it"],
        ["p", "The data categories, service providers and purposes are listed in detail in the table in Annex A at the end of this page."],
        ["h", "4. Cloud backup (Google Drive)"],
        ["p", "An optional Google Drive backup lets you save your screen layouts, profiles and preferences:"],
        ["ul", [
          "<strong>Where it is stored:</strong> Only in your own Google Drive app data folder (drive.appdata). It is never sent to or hosted on NahiDeck servers or third-party servers.",
          "<strong>What it contains:</strong> Screen layouts, profiles, visual preferences and optional PC action definitions. Device secrets, pairing keys and account passwords are never included.",
          "<strong>Separate from telemetry:</strong> Backup data is never read or used for analytics."
        ]],
        ["h", "5. Data we never collect"],
        ["ul", [
          "<strong>Location:</strong> GPS and location services are never used. The Android Bluetooth scan permission is used only to find nearby devices.",
          "<strong>Personal files:</strong> We do not access photos, videos, documents or voice recordings.",
          "<strong>Contacts:</strong> We do not access your contact list.",
          "<strong>Hardware identifiers:</strong> IMEI, MAC addresses and hardware serial numbers are not collected. Random identifiers are used instead."
        ]],
        ["h", "6. Retention and deletion"],
        ["ul", [
          "<strong>Account and license data:</strong> Permanently deleted on request, via Settings > Account > \"Delete Account\" in the app, or the account deletion page on our website.",
          "<strong>Telemetry:</strong> Withdrawing consent in Settings > Privacy deletes your existing record immediately. Active records expire automatically within 180 days (TTL).",
          "<strong>Technical server logs:</strong> Infrastructure request logs are kept for up to 30 days.",
          "<strong>Licence and audit records:</strong> Records of account and licence operations contain a hashed (one-way) form of your user identifier and are kept for up to 90 days.",
          "<strong>Crash reports:</strong> Include the app version, a device hash, the error type and text, the stack trace and log lines. Email addresses, IP addresses and user folder names in file paths are masked before storage. Kept for up to 90 days.",
          "<strong>International transfers:</strong> Firebase Authentication is operated by Google from United States data centres. For purchase verification, RevenueCat processes your data in the United States (AWS); this transfer is covered by Standard Contractual Clauses. Firestore, Cloud Functions and Cloud KMS data are processed on servers in Europe (europe-west1). Legal basis for transfers from Turkey under KVKK article 9: [LEGAL BASIS: TO BE COMPLETED BY LAWYER].",
          "<strong>Support email:</strong> Processed through Google Groups (a consumer group) and subject to Google's <a href='https://policies.google.com/privacy?hl=en'>Privacy Policy</a> and <a href='https://policies.google.com/terms?hl=en'>Terms</a>. Messages are kept in the group archive."
        ]],
        ["h", "7. Your rights (GDPR and KVKK)"],
        ["p", "Under the GDPR and applicable law you have the right to ask whether we process your data, to access it, to correct it, and to ask for it to be deleted. To exercise these rights, email nahideck-support@googlegroups.com."],
        ["h", "Annex A: Data categories and service providers (technical details)"],
        ["table", ["Data category", "Collected information", "Service provider", "Purpose"], [
          ["<strong>User account</strong>", "Email address, display name, Firebase user ID (UID)", "Google Firebase Authentication", "Sign-in and checking Pro license ownership. Optional; the free plan can be used without signing in."],
          ["<strong>License and pairing</strong>", "Randomly generated phone device ID, PC ID, UID", "Google Cloud Firestore and Cloud KMS", "Enforcing the fair-use rule of 1 phone + 1 PC and signing license tokens."],
          ["<strong>Purchases and subscriptions</strong>", "Google Play order/purchase token, RevenueCat App User ID, entitlement status", "Google Play Billing and RevenueCat", "Processing and verifying Pro purchases and renewals."],
          ["<strong>Usage and layout telemetry (optional)</strong>", "Random install ID, grid layout (widget types, positions, sizes), theme choice, plan tier", "Google Cloud Firestore (anonymous_layouts)", "Understanding popular widgets and layouts to improve the interface. <strong>Contains no personal data, text or account details.</strong>"],
          ["<strong>Local extension data</strong>", "Media state of the active browser tab (track title, artist, playback state)", "Local browser and PC app only", "Showing web media on your phone and PC. Never sent to the cloud."],
          ["<strong>App verification</strong>", "Package name, app signing certificate and device integrity result", "Google Play Integrity (Google)", "Verifying that the app was installed from Google Play and runs on a trusted device; preventing abuse. Google does not share this data with third parties."],
          ["<strong>Crash reports (optional)</strong>", "App version, device hash, error type and text, stack trace and log lines (email and IP addresses are masked)", "Google Cloud Functions and Firestore (Europe); support email via Google Groups", "Analysing and fixing crashes. Sent only with your confirmation."]
        ]],
        ["card", [["p", "<strong>Data controller:</strong> Kaya Furkan İPEKCİ"], ["p", "<strong>Contact email:</strong> nahideck-support@googlegroups.com"], ["p", "<strong>Website:</strong> https://nahideck.github.io"]]],
      ]
    },
    delete: {
      title: "Account and data deletion request",
      blocks: [
        ["p", "If you want to permanently delete your NahiDeck account and all related data, you can use one of the methods below."],
        ["h", "Method 1: Delete in the app (recommended)"],
        ["ol", [
          "Open the <strong>NahiDeck</strong> app on your Android device.",
          "Go to <strong>Settings</strong> from the side dock (or the top menu).",
          "Open the <strong>Account</strong> section.",
          "Scroll to the bottom and tap <strong>\"Delete My Account\"</strong>.",
          "Confirm in the dialog.",
          "Your Firebase user record, paired devices and cloud license records are then permanently deleted."
        ]],
        ["p", "<em>Account deletion requires a sign-in within the last 5 minutes for security. If you get an error, sign out, sign in again and retry.</em>"],
        ["p", "<em>Note: Deleting your account does not remove your app backup in Google Drive. Delete it yourself from Google Drive settings (Google Drive > Settings > Manage apps).</em>"],
        ["h", "Method 2: Request deletion by email"],
        ["p", "If you cannot access the app or have uninstalled it, send your request by email:"],
        ["card", [
          ["p", "<strong>Support email:</strong> nahideck-support@googlegroups.com"],
          ["p", "<strong>Subject:</strong> <code>NahiDeck Account and Data Deletion Request</code>"],
          ["p", "<strong>Required information:</strong>"],
          ["ul", ["The Google account email address you use to sign in to NahiDeck.", "<em>(Optional)</em> Google Play order number or RevenueCat subscription reference."]]
        ]],
        ["p", "After we verify your identity, your account and related cloud records are permanently deleted within <strong>7 business days</strong>."],
        ["h", "What is permanently deleted?"],
        ["ul", [
          "Firebase Authentication user record, email address and profile details.",
          "Pro license record in the Firestore <code>entitlements</code> collection.",
          "Paired phone and PC records in the Firestore <code>devices</code> collection.",
          "RevenueCat subscriber profile (<code>app_user_id</code>); deleted where technically possible. If it cannot be deleted, report it to us by email.",
          "License keys and session records in your device's secure storage."
        ]],
        ["h", "What is kept?"],
        ["ul", [
          "<strong>Google Play billing records:</strong> Google keeps these for tax and consumer law reasons. NahiDeck does not store payment details.",
          "<strong>Audit records:</strong> Records of account and licence operations contain a hashed identifier that cannot be directly tied to your identity, and are deleted automatically within 90 days.",
          "<strong>Crash reports:</strong> Deleted automatically within 90 days."
        ]],
        ["danger", [
          ["h3", "Important: cancel your active subscription"],
          ["p", "Deleting your account does <strong>not</strong> cancel a subscription you started through Google Play. To stop future charges, cancel it before deleting your account:"],
          ["ol", [
            "Open the <strong>Google Play Store</strong> on your Android device.",
            "Tap your profile icon > <strong>Payments and subscriptions</strong> > <strong>Subscriptions</strong>.",
            "Select <strong>NahiDeck</strong> and tap <strong>\"Cancel subscription\"</strong>."
          ]]
        ]]
      ]
    }
  },

  // AWAITING_NATIVE_SPEAKER_REVIEW: aşağıdaki diller anadil kontrolü bekliyor
  es: {
    privacy: {
      title: "Política de privacidad de NahiDeck",
      updated: "25 de octubre de 2026",
      blocks: [
        ["p", "NahiDeck («nosotros», «la aplicación» o «el servicio») valora la privacidad de sus usuarios y la protección de sus datos personales. Esta política abarca la <strong>aplicación de NahiDeck para Android</strong>, el <strong>cliente de escritorio para Windows</strong> y la <strong>extensión para navegador (NahiDeck Connect)</strong>."],
        ["h", "En resumen"],
        ["ul", [
          "<strong>Qué recopilamos:</strong> Datos de cuenta (opcional), registros de licencia Pro y de emparejamiento de dispositivos, datos de uso anónimos opcionales e informes de fallos que decidas enviar.",
          "<strong>Dónde se procesan:</strong> En Europa (Firestore, Cloud Functions). El inicio de sesión (Firebase Authentication) y la verificación de compras (RevenueCat) se procesan en Estados Unidos; la base de esta transferencia se describe más abajo.",
          "<strong>Cuánto tiempo los conservamos:</strong> Registros técnicos 30 días, registros de auditoría e informes de fallos 90 días, registros anónimos de diseño 180 días. Al eliminar tu cuenta se borran tus datos de cuenta.",
          "<strong>Tus derechos:</strong> Puedes solicitar acceso, corrección y eliminación. Puedes eliminar tu cuenta desde la app o en la página de eliminación de cuenta.",
          "<strong>Informes de fallos:</strong> Solo se envían si lo confirmas. Tu nota y tu correo de contacto (opcionales) se incluyen; la nota se guarda tal cual, y las direcciones de correo e IP se ocultan."
        ]],
        ["h", "1. Responsable del tratamiento y contacto"],
        ["p", "Según el RGPD y la normativa aplicable, el responsable del tratamiento es:"],
        ["h", "2. Comunicación local (sin dependencia de la nube)"],
        ["p", "NahiDeck funciona directamente entre tu teléfono Android y tu PC con Windows mediante Wi-Fi local, cable USB o Bluetooth de bajo consumo (BLE):"],
        ["ul", [
          "<strong>Comandos de medios y audio:</strong> viajan por tu red local y no se envían a servidores externos.",
          "<strong>Macros del escritorio:</strong> los atajos y acciones se ejecutan y procesan en tu ordenador.",
          "<strong>Cifrado:</strong> la conexión local está protegida con certificados TLS generados localmente y fijación de huella TOFU (confianza en el primer uso)."
        ]],
        ["h", "3. Qué datos recopilamos y cómo los usamos"],
        ["p", "Las categorías de datos, los proveedores de servicios y las finalidades se detallan en la tabla del Anexo A, al final de esta página."],
        ["h", "4. Copia de seguridad en la nube (Google Drive)"],
        ["p", "Hay una copia de seguridad opcional en Google Drive para guardar tus diseños, perfiles y preferencias:"],
        ["ul", [
          "<strong>Dónde se guarda:</strong> solo en la carpeta privada de la aplicación en tu Google Drive (drive.appdata). Nunca se envía ni se aloja en servidores de NahiDeck ni de terceros.",
          "<strong>Contenido:</strong> diseños de pantalla, perfiles, preferencias visuales y definiciones opcionales de acciones del PC. Los secretos de dispositivo, las claves de emparejamiento y las contraseñas nunca se incluyen.",
          "<strong>Separada de la telemetría:</strong> los datos de la copia no se leen ni se usan para análisis."
        ]],
        ["h", "5. Datos que nunca recopilamos"],
        ["ul", [
          "<strong>Ubicación:</strong> nunca usamos GPS ni servicios de ubicación. El permiso de escaneo Bluetooth de Android se usa solo para encontrar dispositivos cercanos.",
          "<strong>Archivos personales:</strong> no accedemos a fotos, vídeos, documentos ni grabaciones de voz.",
          "<strong>Contactos:</strong> no accedemos a tu lista de contactos.",
          "<strong>Identificadores de hardware:</strong> no recopilamos IMEI, direcciones MAC ni números de serie. Se usan identificadores aleatorios."
        ]],
        ["h", "6. Conservación y eliminación"],
        ["ul", [
          "<strong>Datos de cuenta y licencia:</strong> se eliminan de forma permanente cuando lo pidas, desde Ajustes > Cuenta > «Eliminar cuenta» en la app, o desde la página de eliminación de cuenta de nuestro sitio.",
          "<strong>Telemetría:</strong> si retiras el consentimiento en Ajustes > Privacidad, tu registro se elimina de inmediato. Los registros activos caducan automáticamente en un plazo de 180 días (TTL).",
          "<strong>Registros técnicos del servidor:</strong> los registros de solicitudes de la infraestructura se conservan hasta 30 días.",
          "<strong>Registros de licencia y auditoría:</strong> contienen una forma cifrada de un solo sentido (hash) de tu identificador de usuario y se conservan hasta 90 días.",
          "<strong>Informes de fallos:</strong> incluyen la versión de la app, un hash del dispositivo, el tipo y el texto del error, la traza de la pila y líneas de registro. Las direcciones de correo, las IP y los nombres de carpeta de usuario en las rutas se ocultan antes de guardarse. Se conservan hasta 90 días.",
          "<strong>Transferencias internacionales:</strong> Google opera Firebase Authentication desde centros de datos de Estados Unidos. Para verificar compras, RevenueCat procesa tus datos en Estados Unidos (AWS); esta transferencia se rige por Cláusulas Contractuales Tipo. Los datos de Firestore, Cloud Functions y Cloud KMS se procesan en servidores de Europa (europe-west1). Base jurídica de las transferencias desde Turquía según el artículo 9 de la KVKK: [BASE JURÍDICA: LA COMPLETARÁ EL ABOGADO].",
          "<strong>Correo de soporte:</strong> Se procesa a través de Google Groups (grupo de consumidor) y está sujeto a la <a href='https://policies.google.com/privacy?hl=en'>Política de privacidad</a> y a las <a href='https://policies.google.com/terms?hl=en'>Condiciones</a> de Google. Los mensajes se conservan en el archivo del grupo."
        ]],
        ["h", "7. Tus derechos (RGPD y KVKK)"],
        ["p", "Según el RGPD y la normativa aplicable, tienes derecho a saber si tratamos tus datos, a acceder a ellos, a corregirlos y a pedir su eliminación. Para ejercer estos derechos, escribe a nahideck-support@googlegroups.com."],
        ["h", "Anexo A: Categorías de datos y proveedores de servicios (detalle técnico)"],
        ["table", ["Categoría de datos", "Información recopilada", "Proveedor del servicio", "Finalidad"], [
          ["<strong>Cuenta de usuario</strong>", "Correo electrónico, nombre, ID de usuario de Firebase (UID)", "Google Firebase Authentication", "Inicio de sesión y verificación de la licencia Pro. Es opcional; el plan gratuito puede usarse sin cuenta."],
          ["<strong>Licencia y emparejamiento</strong>", "ID de dispositivo del teléfono generado aleatoriamente, ID del PC, UID", "Google Cloud Firestore y Cloud KMS", "Aplicar la regla de uso justo de 1 teléfono + 1 PC y firmar los tokens de licencia."],
          ["<strong>Compras y suscripciones</strong>", "Token de pedido de Google Play, ID de usuario de RevenueCat, estado de derechos", "Google Play Billing y RevenueCat", "Procesar y verificar las compras y renovaciones Pro."],
          ["<strong>Telemetría de uso y diseño (opcional)</strong>", "ID de instalación aleatorio, diseño de cuadrícula (tipos de widget, posiciones, tamaños), tema y tipo de plan", "Google Cloud Firestore (anonymous_layouts)", "Analizar los widgets y diseños más usados para mejorar la interfaz. <strong>No contiene datos personales, texto ni datos de cuenta.</strong>"],
          ["<strong>Datos locales de la extensión</strong>", "Estado del medio de la pestaña activa (título, artista, estado de reproducción)", "Solo el navegador local y la app del PC", "Mostrar el medio web en el teléfono y el PC. Nunca se envía a la nube."],
          ["<strong>Verificación de la app</strong>", "Nombre del paquete, certificado de firma de la app y resultado de integridad del dispositivo", "Google Play Integrity (Google)", "Comprobar que la app se instaló desde Google Play y se ejecuta en un dispositivo de confianza; evitar abusos. Google no comparte estos datos con terceros."],
          ["<strong>Informe de fallos (opcional)</strong>", "Versión de la app, hash del dispositivo, tipo y texto del error, traza de la pila y líneas de registro (las direcciones de correo e IP se ocultan)", "Google Cloud Functions y Firestore (Europa); correo de soporte mediante Google Groups", "Analizar y corregir fallos. Se envía solo con tu confirmación."]
        ]],
        ["card", [["p", "<strong>Responsable:</strong> Kaya Furkan İPEKCİ"], ["p", "<strong>Correo de contacto:</strong> nahideck-support@googlegroups.com"], ["p", "<strong>Sitio web:</strong> https://nahideck.github.io"]]],
      ]
    },
    delete: {
      title: "Solicitud de eliminación de cuenta y datos",
      blocks: [
        ["p", "Si quieres eliminar de forma permanente tu cuenta de NahiDeck y todos los datos relacionados, puedes usar uno de los siguientes métodos."],
        ["h", "Método 1: eliminar desde la app (recomendado)"],
        ["ol", [
          "Abre la app <strong>NahiDeck</strong> en tu dispositivo Android.",
          "Ve a <strong>Ajustes</strong> desde el dock lateral (o el menú superior).",
          "Abre la sección <strong>Cuenta</strong>.",
          "Desplázate hasta abajo y toca <strong>«Eliminar mi cuenta»</strong>.",
          "Confirma en el cuadro de diálogo.",
          "Tu registro de Firebase, tus dispositivos emparejados y tus registros de licencia en la nube se eliminan de forma permanente."
        ]],
        ["p", "<em>La eliminación de la cuenta requiere haber iniciado sesión en los últimos 5 minutos por seguridad. Si recibes un error, cierra sesión, vuelve a iniciarla e inténtalo de nuevo.</em>"],
        ["p", "<em>Nota: eliminar tu cuenta no borra la copia de seguridad de la app en Google Drive. Bórrala tú desde los ajustes de Google Drive (Google Drive > Ajustes > Gestionar aplicaciones).</em>"],
        ["h", "Método 2: solicitud por correo electrónico"],
        ["p", "Si no puedes acceder a la app o la desinstalaste, envía tu solicitud por correo:"],
        ["card", [
          ["p", "<strong>Correo de soporte:</strong> nahideck-support@googlegroups.com"],
          ["p", "<strong>Asunto:</strong> <code>Solicitud de eliminación de cuenta y datos de NahiDeck</code>"],
          ["p", "<strong>Información necesaria:</strong>"],
          ["ul", ["La dirección de correo de tu cuenta de Google con la que iniciaste sesión en NahiDeck.", "<em>(Opcional)</em> Número de pedido de Google Play o referencia de suscripción de RevenueCat."]]
        ]],
        ["p", "Tras verificar tu identidad, tu cuenta y sus registros en la nube se eliminan de forma permanente en un plazo máximo de <strong>7 días hábiles</strong>."],
        ["h", "¿Qué datos se eliminan de forma permanente?"],
        ["ul", [
          "Registro de usuario en Firebase Authentication, correo electrónico y datos de perfil.",
          "Registro de licencia Pro en la colección <code>entitlements</code> de Firestore.",
          "Registros de teléfonos y PC emparejados en la colección <code>devices</code> de Firestore.",
          "Perfil de suscriptor de RevenueCat (<code>app_user_id</code>); se elimina cuando es técnicamente posible. Si no se puede eliminar, infórmanos por correo electrónico.",
          "Claves de licencia y registros de sesión en el almacenamiento seguro de tu dispositivo."
        ]],
        ["h", "¿Qué datos se conservan?"],
        ["ul", [
          "<strong>Registros de facturación de Google Play:</strong> Google los conserva por motivos fiscales y de consumo. NahiDeck no guarda datos de pago.",
          "<strong>Registros de auditoría:</strong> los registros de operaciones de cuenta y licencia contienen un identificador con hash que no puede vincularse directamente con tu identidad, y se eliminan automáticamente en un plazo de 90 días.",
          "<strong>Informes de fallos:</strong> se eliminan automáticamente en un plazo de 90 días."
        ]],
        ["danger", [
          ["h3", "Importante: cancela tu suscripción activa"],
          ["p", "Eliminar tu cuenta <strong>no cancela</strong> una suscripción iniciada en Google Play. Para evitar futuros cobros, cancélala antes de eliminar tu cuenta:"],
          ["ol", [
            "Abre <strong>Google Play Store</strong> en tu dispositivo Android.",
            "Toca tu icono de perfil > <strong>Pagos y suscripciones</strong> > <strong>Suscripciones</strong>.",
            "Selecciona <strong>NahiDeck</strong> y toca <strong>«Cancelar suscripción»</strong>."
          ]]
        ]]
      ]
    }
  },

  // AWAITING_NATIVE_SPEAKER_REVIEW
  "pt-BR": {
    privacy: {
      title: "Política de Privacidade do NahiDeck",
      updated: "25 de outubro de 2026",
      blocks: [
        ["p", "O NahiDeck («nós», «aplicativo» ou «serviço») valoriza a privacidade de seus usuários e a proteção dos dados pessoais. Esta política abrange o <strong>aplicativo NahiDeck para Android</strong>, o <strong>cliente NahiDeck para Windows</strong> e a <strong>extensão para navegador (NahiDeck Connect)</strong>."],
        ["h", "Em resumo"],
        ["ul", [
          "<strong>O que coletamos:</strong> Dados da conta (opcional), registros de licença Pro e de pareamento de dispositivos, dados de uso anônimos opcionais e relatórios de falhas que você decidir enviar.",
          "<strong>Onde são processados:</strong> Na Europa (Firestore, Cloud Functions). O login (Firebase Authentication) e a verificação de compras (RevenueCat) são processados nos Estados Unidos; a base dessa transferência está descrita abaixo.",
          "<strong>Por quanto tempo guardamos:</strong> Registros técnicos por 30 dias, registros de auditoria e relatórios de falhas por 90 dias, registros anônimos de layout por 180 dias. Ao excluir sua conta, seus dados de conta são apagados.",
          "<strong>Seus direitos:</strong> Você pode pedir acesso, correção e exclusão. Pode excluir sua conta pelo app ou na página de exclusão de conta.",
          "<strong>Relatórios de falhas:</strong> Enviados somente se você confirmar. Sua nota e seu e-mail de contato (opcionais) são incluídos; a nota é guardada como foi escrita, e e-mails e IPs são ocultados."
        ]],
        ["h", "1. Controlador dos dados e contato"],
        ["p", "Conforme o RGPD e a legislação aplicável, o controlador dos dados é:"],
        ["h", "2. Comunicação local (sem dependência de nuvem)"],
        ["p", "O NahiDeck funciona diretamente entre seu celular Android e seu computador Windows, por Wi-Fi local, cabo USB ou Bluetooth de baixa energia (BLE):"],
        ["ul", [
          "<strong>Comandos de mídia e áudio:</strong> trafegam na sua rede local e não são enviados a servidores externos.",
          "<strong>Macros do computador:</strong> atalhos e ações são executados e processados no seu computador.",
          "<strong>Criptografia:</strong> a conexão local é protegida por certificados TLS gerados localmente e fixação de impressão digital TOFU (confiança no primeiro uso)."
        ]],
        ["h", "3. Quais dados coletamos e como usamos"],
        ["p", "As categorias de dados, os provedores de serviços e as finalidades estão detalhados na tabela do Anexo A, no final desta página."],
        ["h", "4. Backup na nuvem (Google Drive)"],
        ["p", "Há um backup opcional no Google Drive para salvar seus layouts, perfis e preferências:"],
        ["ul", [
          "<strong>Onde fica guardado:</strong> somente na pasta privada do aplicativo no seu Google Drive (drive.appdata). Nunca é enviado nem hospedado em servidores do NahiDeck ou de terceiros.",
          "<strong>Conteúdo:</strong> layouts de tela, perfis, preferências visuais e definições opcionais de ações do PC. Segredos de dispositivo, chaves de pareamento e senhas nunca são incluídos.",
          "<strong>Separado da telemetria:</strong> os dados do backup nunca são lidos nem usados para análises."
        ]],
        ["h", "5. Dados que nunca coletamos"],
        ["ul", [
          "<strong>Localização:</strong> GPS e serviços de localização nunca são usados. A permissão de varredura Bluetooth do Android serve apenas para encontrar dispositivos próximos.",
          "<strong>Arquivos pessoais:</strong> não acessamos fotos, vídeos, documentos nem gravações de voz.",
          "<strong>Contatos:</strong> não acessamos sua lista de contatos.",
          "<strong>Identificadores de hardware:</strong> não coletamos IMEI, endereços MAC nem números de série. Usamos identificadores aleatórios."
        ]],
        ["h", "6. Retenção e exclusão"],
        ["ul", [
          "<strong>Dados de conta e licença:</strong> excluídos permanentemente a pedido, em Configurações > Conta > «Excluir conta» no app, ou pela página de exclusão de conta do nosso site.",
          "<strong>Telemetria:</strong> ao retirar o consentimento em Configurações > Privacidade, seu registro é excluído imediatamente. Registros ativos expiram automaticamente em até 180 dias (TTL).",
          "<strong>Registros técnicos do servidor:</strong> os registros de solicitações da infraestrutura são mantidos por até 30 dias.",
          "<strong>Registros de licença e auditoria:</strong> contêm uma forma criptografada de sentido único (hash) do seu identificador de usuário e são mantidos por até 90 dias.",
          "<strong>Relatórios de falhas:</strong> incluem a versão do app, um hash do dispositivo, o tipo e o texto do erro, o rastreamento de pilha e linhas de log. Endereços de e-mail, IPs e nomes de pasta de usuário em caminhos são ocultados antes de serem armazenados. Mantidos por até 90 dias.",
          "<strong>Transferências internacionais:</strong> O Google opera o Firebase Authentication a partir de data centers nos Estados Unidos. Para verificar compras, a RevenueCat processa seus dados nos Estados Unidos (AWS); essa transferência é coberta por Cláusulas Contratuais Padrão. Os dados do Firestore, Cloud Functions e Cloud KMS são processados em servidores na Europa (europe-west1). Base legal para transferências a partir da Turquia (KVKK, art. 9): [BASE LEGAL: A SER PREENCHIDA PELO ADVOGADO].",
          "<strong>E-mail de suporte:</strong> Processado pelo Google Groups (grupo de consumidor) e sujeito à <a href='https://policies.google.com/privacy?hl=en'>Política de Privacidade</a> e aos <a href='https://policies.google.com/terms?hl=en'>Termos</a> do Google. As mensagens ficam guardadas no arquivo do grupo."
        ]],
        ["h", "7. Seus direitos (RGPD e KVKK)"],
        ["p", "Conforme o RGPD e a legislação aplicável, você tem direito de saber se tratamos seus dados, acessá-los, corrigi-los e pedir sua exclusão. Para exercer esses direitos, escreva para nahideck-support@googlegroups.com."],
        ["h", "Anexo A: Categorias de dados e provedores de serviços (detalhe técnico)"],
        ["table", ["Categoria de dados", "Informação coletada", "Provedor do serviço", "Finalidade"], [
          ["<strong>Conta de usuário</strong>", "E-mail, nome, ID de usuário do Firebase (UID)", "Google Firebase Authentication", "Login e verificação da licença Pro. Opcional; o plano gratuito pode ser usado sem conta."],
          ["<strong>Licença e pareamento</strong>", "ID do celular gerado aleatoriamente, ID do PC, UID", "Google Cloud Firestore e Cloud KMS", "Aplicar a regra de uso justo de 1 celular + 1 PC e assinar os tokens de licença."],
          ["<strong>Compras e assinaturas</strong>", "Token de pedido do Google Play, ID de usuário do RevenueCat, status do direito", "Google Play Billing e RevenueCat", "Processar e verificar compras e renovações Pro."],
          ["<strong>Telemetria de uso e layout (opcional)</strong>", "ID de instalação aleatório, layout da grade (tipos de widget, posições, tamanhos), escolha de tema, tipo de plano", "Google Cloud Firestore (anonymous_layouts)", "Entender widgets e layouts populares para melhorar a interface. <strong>Não contém dados pessoais, textos nem dados de conta.</strong>"],
          ["<strong>Dados locais da extensão</strong>", "Estado da mídia na aba ativa (título, artista, reprodução)", "Somente navegador local e app do PC", "Mostrar a mídia da web no celular e no PC. Nunca é enviada à nuvem."],
          ["<strong>Verificação do app</strong>", "Nome do pacote, certificado de assinatura do app e resultado de integridade do dispositivo", "Google Play Integrity (Google)", "Verificar se o app foi instalado pelo Google Play e roda em um dispositivo confiável; prevenir abusos. O Google não compartilha esses dados com terceiros."],
          ["<strong>Relatório de falhas (opcional)</strong>", "Versão do app, hash do dispositivo, tipo e texto do erro, rastreamento de pilha e linhas de log (e-mails e IPs são ocultados)", "Google Cloud Functions e Firestore (Europa); e-mail de suporte via Google Groups", "Analisar e corrigir falhas. Enviado somente com sua confirmação."]
        ]],
        ["card", [["p", "<strong>Controlador:</strong> Kaya Furkan İPEKCİ"], ["p", "<strong>E-mail de contato:</strong> nahideck-support@googlegroups.com"], ["p", "<strong>Site:</strong> https://nahideck.github.io"]]],
      ]
    },
    delete: {
      title: "Solicitação de exclusão de conta e dados",
      blocks: [
        ["p", "Se você quiser excluir permanentemente sua conta do NahiDeck e todos os dados relacionados, pode usar um dos métodos abaixo."],
        ["h", "Método 1: excluir pelo app (recomendado)"],
        ["ol", [
          "Abra o app <strong>NahiDeck</strong> no seu dispositivo Android.",
          "Vá em <strong>Configurações</strong> pelo dock lateral (ou pelo menu superior).",
          "Abra a seção <strong>Conta</strong>.",
          "Role até o final e toque em <strong>«Excluir minha conta»</strong>.",
          "Confirme na janela exibida.",
          "Seu registro no Firebase, seus dispositivos pareados e seus registros de licença na nuvem são excluídos permanentemente."
        ]],
        ["p", "<em>A exclusão da conta exige que você tenha entrado nos últimos 5 minutos, por segurança. Se aparecer um erro, saia, entre novamente e tente de novo.</em>"],
        ["p", "<em>Observação: excluir sua conta não remove o backup do app no Google Drive. Exclua-o você mesmo nas configurações do Google Drive (Google Drive > Configurações > Gerenciar apps).</em>"],
        ["h", "Método 2: solicitação por e-mail"],
        ["p", "Se não conseguir acessar o app ou se o desinstalou, envie sua solicitação por e-mail:"],
        ["card", [
          ["p", "<strong>E-mail de suporte:</strong> nahideck-support@googlegroups.com"],
          ["p", "<strong>Assunto:</strong> <code>Solicitação de exclusão de conta e dados do NahiDeck</code>"],
          ["p", "<strong>Informações necessárias:</strong>"],
          ["ul", ["O e-mail da conta Google usada para entrar no NahiDeck.", "<em>(Opcional)</em> Número do pedido no Google Play ou referência de assinatura do RevenueCat."]]
        ]],
        ["p", "Após verificarmos sua identidade, sua conta e os registros relacionados na nuvem são excluídos permanentemente em até <strong>7 dias úteis</strong>."],
        ["h", "O que é excluído permanentemente?"],
        ["ul", [
          "Registro de usuário no Firebase Authentication, e-mail e dados de perfil.",
          "Registro de licença Pro na coleção <code>entitlements</code> do Firestore.",
          "Registros de celulares e PCs pareados na coleção <code>devices</code> do Firestore.",
          "Perfil de assinante do RevenueCat (<code>app_user_id</code>); é excluído quando tecnicamente possível. Se não puder ser excluído, informe-nos por e-mail.",
          "Chaves de licença e registros de sessão no armazenamento seguro do seu dispositivo."
        ]],
        ["h", "O que é mantido?"],
        ["ul", [
          "<strong>Registros de cobrança do Google Play:</strong> o Google os mantém por obrigações fiscais e de defesa do consumidor. O NahiDeck não armazena dados de pagamento.",
          "<strong>Registros de auditoria:</strong> registros de operações de conta e licença contêm um identificador com hash que não pode ser vinculado diretamente à sua identidade e são excluídos automaticamente em até 90 dias.",
          "<strong>Relatórios de falhas:</strong> excluídos automaticamente em até 90 dias."
        ]],
        ["danger", [
          ["h3", "Importante: cancele sua assinatura ativa"],
          ["p", "Excluir a conta <strong>não cancela</strong> uma assinatura feita pelo Google Play. Para evitar cobranças futuras, cancele antes de excluir sua conta:"],
          ["ol", [
            "Abra a <strong>Google Play Store</strong> no seu dispositivo Android.",
            "Toque no ícone do perfil > <strong>Pagamentos e assinaturas</strong> > <strong>Assinaturas</strong>.",
            "Selecione <strong>NahiDeck</strong> e toque em <strong>«Cancelar assinatura»</strong>."
          ]]
        ]]
      ]
    }
  },

  // AWAITING_NATIVE_SPEAKER_REVIEW
  de: {
    privacy: {
      title: "NahiDeck Datenschutzerklärung",
      updated: "25. Oktober 2026",
      blocks: [
        ["p", "NahiDeck («wir», «die App» oder «der Dienst») legt großen Wert auf den Schutz personenbezogener Daten seiner Nutzer. Diese Erklärung gilt für die <strong>NahiDeck-App für Android</strong>, den <strong>NahiDeck-Client für Windows</strong> und die <strong>Browser-Erweiterung (NahiDeck Connect)</strong>."],
        ["h", "Kurz zusammengefasst"],
        ["ul", [
          "<strong>Was wir erfassen:</strong> Kontodaten (optional), Pro-Lizenz- und Geräte-Kopplungsdaten, optionale anonyme Nutzungsdaten und Absturzberichte, die Sie senden.",
          "<strong>Wo sie verarbeitet werden:</strong> In Europa (Firestore, Cloud Functions). Anmeldung (Firebase Authentication) und Kaufprüfung (RevenueCat) finden in den USA statt; die Grundlage dieser Übermittlung ist unten beschrieben.",
          "<strong>Wie lange wir sie aufbewahren:</strong> Technische Protokolle 30 Tage, Prüf- und Absturzprotokolle 90 Tage, anonyme Layoutdaten 180 Tage. Mit der Löschung Ihres Kontos werden Ihre Kontodaten entfernt.",
          "<strong>Ihre Rechte:</strong> Sie können Auskunft, Berichtigung und Löschung verlangen. Ihr Konto können Sie in der App oder auf der Seite zur Kontolöschung entfernen.",
          "<strong>Absturzberichte:</strong> Werden nur nach Ihrer Bestätigung gesendet. Ihre optionale Notiz und E-Mail-Adresse werden mitgesendet; die Notiz wird unverändert gespeichert, E-Mail- und IP-Adressen werden unkenntlich gemacht."
        ]],
        ["h", "1. Verantwortliche Stelle und Kontakt"],
        ["p", "Verantwortlich im Sinne der DSGVO und des anwendbaren Datenschutzrechts ist:"],
        ["h", "2. Lokale Kommunikation (keine Cloud-Abhängigkeit)"],
        ["p", "NahiDeck arbeitet direkt zwischen Ihrem Android-Handy und Ihrem Windows-Rechner über lokales WLAN, ein USB-Kabel oder Bluetooth Low Energy (BLE):"],
        ["ul", [
          "<strong>Medien- und Audiobefehle:</strong> Sie werden in Ihrem lokalen Netzwerk übertragen und nicht an externe Server gesendet.",
          "<strong>Desktop-Makros:</strong> Verknüpfungen und Aktionen laufen auf Ihrem Rechner und werden dort verarbeitet.",
          "<strong>Verschlüsselung:</strong> Die lokale Verbindung ist durch lokal erzeugte TLS-Zertifikate und TOFU-Fingerabdruck-Pinning (Vertrauen beim ersten Gebrauch) geschützt."
        ]],
        ["h", "3. Welche Daten wir erheben und wofür"],
        ["p", "Datenkategorien, Dienstleister und Zwecke sind in der Tabelle in Anhang A am Ende dieser Seite ausführlich aufgeführt."],
        ["h", "4. Cloud-Sicherung (Google Drive)"],
        ["p", "Eine optionale Sicherung in Google Drive speichert Ihre Bildschirmlayouts, Profile und Einstellungen:"],
        ["ul", [
          "<strong>Speicherort:</strong> Ausschließlich im privaten App-Ordner Ihres Google Drive (drive.appdata). Die Daten werden nie an Server von NahiDeck oder Dritte übertragen oder dort gehostet.",
          "<strong>Inhalt:</strong> Bildschirmlayouts, Profile, optische Einstellungen und optionale PC-Aktionsdefinitionen. Geräte-Geheimnisse, Kopplungsschlüssel und Passwörter sind nie enthalten.",
          "<strong>Getrennt von der Telemetrie:</strong> Sicherungsdaten werden nicht für Auswertungen gelesen oder verwendet."
        ]],
        ["h", "5. Daten, die wir niemals erheben"],
        ["ul", [
          "<strong>Standort:</strong> GPS und Ortungsdienste werden nie genutzt. Die Bluetooth-Suchberechtigung unter Android dient nur dazu, Geräte in der Nähe zu finden.",
          "<strong>Persönliche Dateien:</strong> Wir greifen nicht auf Fotos, Videos, Dokumente oder Sprachaufnahmen zu.",
          "<strong>Kontakte:</strong> Wir greifen nicht auf Ihre Kontaktliste zu.",
          "<strong>Hardware-Kennungen:</strong> IMEI, MAC-Adressen und Seriennummern werden nicht erhoben. Stattdessen verwenden wir zufällige Kennungen."
        ]],
        ["h", "6. Speicherdauer und Löschung"],
        ["ul", [
          "<strong>Konto- und Lizenzdaten:</strong> Werden auf Anfrage dauerhaft gelöscht, über Einstellungen > Konto > «Konto löschen» in der App oder über die Löschseite auf unserer Website.",
          "<strong>Telemetrie:</strong> Wenn Sie die Einwilligung unter Einstellungen > Datenschutz widerrufen, wird Ihr Datensatz sofort gelöscht. Aktive Datensätze laufen automatisch nach spätestens 180 Tagen ab (TTL).",
          "<strong>Technische Server-Protokolle:</strong> Anfrage-Protokolle der Infrastruktur werden höchstens 30 Tage aufbewahrt.",
          "<strong>Lizenz- und Prüfprotokolle:</strong> enthalten eine nicht umkehrbare Prüfsumme (Hash) Ihrer Benutzerkennung und werden höchstens 90 Tage aufbewahrt.",
          "<strong>Absturzberichte:</strong> enthalten App-Version, einen Geräte-Hash, Fehlertyp und Fehlertext, Stack-Trace und Protokollzeilen. E-Mail-Adressen, IP-Adressen und Benutzerordnernamen in Dateipfaden werden vor der Speicherung unkenntlich gemacht. Werden höchstens 90 Tage aufbewahrt.",
          "<strong>Übermittlung in Drittländer:</strong> Google betreibt Firebase Authentication in Rechenzentren in den Vereinigten Staaten. Zur Kaufprüfung verarbeitet RevenueCat Ihre Daten in den USA (AWS); diese Übermittlung erfolgt auf Grundlage der Standardvertragsklauseln. Daten von Firestore, Cloud Functions und Cloud KMS werden auf Servern in Europa (europe-west1) verarbeitet. Rechtsgrundlage für Übermittlungen aus der Türkei nach KVKK Art. 9: [RECHTSGRUNDLAGE: DURCH RECHTSANWALT ZU ERGÄNZEN].",
          "<strong>Support-E-Mail:</strong> Wird über Google Groups (Verbrauchergruppe) verarbeitet und unterliegt der <a href='https://policies.google.com/privacy?hl=en'>Datenschutzerklärung</a> und den <a href='https://policies.google.com/terms?hl=en'>Nutzungsbedingungen</a> von Google. Nachrichten werden im Gruppenarchiv gespeichert."
        ]],
        ["h", "7. Ihre Rechte (DSGVO und KVKK)"],
        ["p", "Nach der DSGVO und dem anwendbaren Recht haben Sie das Recht zu erfahren, ob wir Ihre Daten verarbeiten, Auskunft zu erhalten, sie berichtigen zu lassen und ihre Löschung zu verlangen. Für Ihre Anfragen schreiben Sie an nahideck-support@googlegroups.com."],
        ["h", "Anhang A: Datenkategorien und Dienstleister (technische Details)"],
        ["table", ["Datenkategorie", "Erhobene Information", "Dienstleister", "Zweck"], [
          ["<strong>Benutzerkonto</strong>", "E-Mail-Adresse, Name, Firebase-Benutzerkennung (UID)", "Google Firebase Authentication", "Anmeldung und Prüfung der Pro-Lizenz. Optional; der kostenlose Plan funktioniert ohne Konto."],
          ["<strong>Lizenz und Kopplung</strong>", "Zufällig erzeugte Geräte-ID des Handys, PC-ID, UID", "Google Cloud Firestore und Cloud KMS", "Einhaltung der Fair-Use-Regel 1 Handy + 1 PC und Signatur der Lizenztoken."],
          ["<strong>Käufe und Abos</strong>", "Google-Play-Bestell-/Tokeninformation, RevenueCat-App-User-ID, Berechtigungsstatus", "Google Play Billing und RevenueCat", "Abwicklung und Prüfung von Pro-Käufen und Verlängerungen."],
          ["<strong>Nutzungs- und Layout-Telemetrie (optional)</strong>", "Zufällige Installations-ID, Rasterlayout (Widget-Typen, Positionen, Größen), Designwahl, Tarif", "Google Cloud Firestore (anonymous_layouts)", "Beliebte Widgets und Layouts auswerten, um die Oberfläche zu verbessern. <strong>Enthält keine personenbezogenen Daten, Texte oder Kontodaten.</strong>"],
          ["<strong>Lokale Erweiterungsdaten</strong>", "Medienstatus des aktiven Browser-Tabs (Titel, Interpret, Wiedergabestatus)", "Nur lokaler Browser und PC-App", "Anzeige der Web-Medien auf Handy und PC. Wird nie in die Cloud gesendet."],
          ["<strong>App-Überprüfung</strong>", "Paketname, App-Signaturzertifikat und Ergebnis der Geräteintegrität", "Google Play Integrity (Google)", "Prüfung, ob die App über Google Play installiert wurde und auf einem vertrauenswürdigen Gerät läuft; Missbrauch verhindern. Google gibt diese Daten nicht an Dritte weiter."],
          ["<strong>Absturzbericht (optional)</strong>", "App-Version, Geräte-Hash, Fehlertyp und Fehlertext, Stack-Trace und Protokollzeilen (E-Mail- und IP-Adressen werden unkenntlich gemacht)", "Google Cloud Functions und Firestore (Europa); Support-E-Mail über Google Groups", "Analyse und Behebung von Abstürzen. Wird nur nach Ihrer Bestätigung gesendet."]
        ]],
        ["card", [["p", "<strong>Verantwortlich:</strong> Kaya Furkan İPEKCİ"], ["p", "<strong>E-Mail:</strong> nahideck-support@googlegroups.com"], ["p", "<strong>Website:</strong> https://nahideck.github.io"]]],
      ]
    },
    delete: {
      title: "Antrag auf Löschung von Konto und Daten",
      blocks: [
        ["p", "Wenn Sie Ihr NahiDeck-Konto und alle zugehörigen Daten dauerhaft löschen möchten, können Sie eine der folgenden Methoden nutzen."],
        ["h", "Methode 1: Löschen in der App (empfohlen)"],
        ["ol", [
          "Öffnen Sie die App <strong>NahiDeck</strong> auf Ihrem Android-Gerät.",
          "Gehen Sie über das seitliche Dock (oder das obere Menü) zu <strong>Einstellungen</strong>.",
          "Öffnen Sie den Bereich <strong>Konto</strong>.",
          "Scrollen Sie nach unten und tippen Sie auf <strong>«Mein Konto löschen»</strong>.",
          "Bestätigen Sie im Dialog.",
          "Ihr Firebase-Benutzerdatensatz, Ihre gekoppelten Geräte und Ihre Lizenzdaten in der Cloud werden dauerhaft gelöscht."
        ]],
        ["p", "<em>Die Kontolöschung setzt aus Sicherheitsgründen eine Anmeldung in den letzten 5 Minuten voraus. Bei einer Fehlermeldung melden Sie sich ab, erneut an und versuchen es noch einmal.</em>"],
        ["p", "<em>Hinweis: Das Löschen Ihres Kontos entfernt nicht die App-Sicherung in Google Drive. Löschen Sie diese selbst in den Google-Drive-Einstellungen (Google Drive > Einstellungen > Apps verwalten).</em>"],
        ["h", "Methode 2: Löschung per E-Mail beantragen"],
        ["p", "Wenn Sie keinen Zugriff auf die App haben oder sie deinstalliert haben, senden Sie Ihren Antrag per E-Mail:"],
        ["card", [
          ["p", "<strong>Support-E-Mail:</strong> nahideck-support@googlegroups.com"],
          ["p", "<strong>Betreff:</strong> <code>NahiDeck Antrag auf Löschung von Konto und Daten</code>"],
          ["p", "<strong>Erforderliche Angaben:</strong>"],
          ["ul", ["Die Google-Konto-E-Mail-Adresse, mit der Sie sich bei NahiDeck anmelden.", "<em>(Optional)</em> Google-Play-Bestellnummer oder RevenueCat-Abo-Referenz."]]
        ]],
        ["p", "Nach Prüfung Ihrer Identität werden Ihr Konto und die zugehörigen Cloud-Daten innerhalb von <strong>7 Werktagen</strong> dauerhaft entfernt."],
        ["h", "Was wird dauerhaft gelöscht?"],
        ["ul", [
          "Firebase-Authentication-Benutzerdatensatz, E-Mail-Adresse und Profildaten.",
          "Pro-Lizenzdatensatz in der Firestore-Sammlung <code>entitlements</code>.",
          "Datensätze gekoppelter Handys und PCs in der Firestore-Sammlung <code>devices</code>.",
          "RevenueCat-Abonnentenprofil (<code>app_user_id</code>); wird, soweit technisch möglich, gelöscht. Ist das nicht möglich, teilen Sie es uns per E-Mail mit.",
          "Lizenzschlüssel und Sitzungsdaten im sicheren Speicher Ihres Geräts."
        ]],
        ["h", "Was wird aufbewahrt?"],
        ["ul", [
          "<strong>Google-Play-Abrechnungsdaten:</strong> Google bewahrt diese aus steuer- und verbraucherrechtlichen Gründen auf. NahiDeck speichert keine Zahlungsdaten.",
          "<strong>Prüfprotokolle:</strong> Protokolle zu Konto- und Lizenzvorgängen enthalten eine Prüfsumme (Hash), die nicht direkt Ihrer Identität zugeordnet werden kann, und werden automatisch innerhalb von 90 Tagen gelöscht.",
          "<strong>Absturzberichte:</strong> werden automatisch innerhalb von 90 Tagen gelöscht."
        ]],
        ["danger", [
          ["h3", "Wichtig: Aktives Abo kündigen"],
          ["p", "Das Löschen Ihres Kontos kündigt ein über Google Play abgeschlossenes Abo <strong>nicht automatisch</strong>. Kündigen Sie es vor dem Löschen, damit keine weiteren Zahlungen anfallen:"],
          ["ol", [
            "Öffnen Sie den <strong>Google Play Store</strong> auf Ihrem Android-Gerät.",
            "Tippen Sie auf Ihr Profilsymbol > <strong>Zahlungen und Abos</strong> > <strong>Abos</strong>.",
            "Wählen Sie <strong>NahiDeck</strong> und tippen Sie auf <strong>«Abo kündigen»</strong>."
          ]]
        ]]
      ]
    }
  },

  // AWAITING_NATIVE_SPEAKER_REVIEW
  fr: {
    privacy: {
      title: "Politique de confidentialité de NahiDeck",
      updated: "25 octobre 2026",
      blocks: [
        ["p", "NahiDeck («nous», «l’application» ou «le service») accorde une grande importance à la vie privée de ses utilisateurs et à la protection des données personnelles. Cette politique couvre l’<strong>application NahiDeck pour Android</strong>, le <strong>client NahiDeck pour Windows</strong> et l’<strong>extension de navigateur (NahiDeck Connect)</strong>."],
        ["h", "En bref"],
        ["ul", [
          "<strong>Ce que nous collectons :</strong> Données de compte (facultatif), enregistrements de licence Pro et d’appairage d’appareils, données d’usage anonymes facultatives et rapports de plantage que vous choisissez d’envoyer.",
          "<strong>Où elles sont traitées :</strong> En Europe (Firestore, Cloud Functions). La connexion (Firebase Authentication) et la vérification des achats (RevenueCat) sont traitées aux États-Unis ; la base de ce transfert est décrite ci-dessous.",
          "<strong>Durée de conservation :</strong> Journaux techniques 30 jours, journaux d’audit et rapports de plantage 90 jours, enregistrements anonymes de disposition 180 jours. La suppression de votre compte efface vos données de compte.",
          "<strong>Vos droits :</strong> Vous pouvez demander l’accès, la rectification et la suppression. Vous pouvez supprimer votre compte depuis l’application ou la page de suppression de compte.",
          "<strong>Rapports de plantage :</strong> Envoyés uniquement après votre confirmation. Votre note et votre e-mail de contact (facultatifs) sont inclus ; la note est conservée telle quelle, les adresses e-mail et IP sont masquées."
        ]],
        ["h", "1. Responsable du traitement et contact"],
        ["p", "Au sens du RGPD et de la législation applicable, le responsable du traitement est :"],
        ["h", "2. Communication locale (aucune dépendance au cloud)"],
        ["p", "NahiDeck fonctionne directement entre votre téléphone Android et votre PC Windows, via Wi-Fi local, câble USB ou Bluetooth Low Energy (BLE) :"],
        ["ul", [
          "<strong>Commandes médias et audio :</strong> elles transitent sur votre réseau local et ne sont pas envoyées à des serveurs externes.",
          "<strong>Macros du bureau :</strong> les raccourcis et actions sont exécutés et traités sur votre ordinateur.",
          "<strong>Chiffrement :</strong> la connexion locale est protégée par des certificats TLS générés localement et par l’épinglage d’empreinte TOFU (confiance à la première utilisation)."
        ]],
        ["h", "3. Données collectées et utilisation"],
        ["p", "Les catégories de données, les prestataires et les finalités sont détaillés dans le tableau de l’annexe A, en fin de page."],
        ["h", "4. Sauvegarde dans le cloud (Google Drive)"],
        ["p", "Une sauvegarde facultative sur Google Drive permet de conserver vos dispositions d’écran, profils et préférences :"],
        ["ul", [
          "<strong>Lieu de stockage :</strong> uniquement dans le dossier privé de l’application de votre Google Drive (drive.appdata). Elle n’est jamais transmise ni hébergée sur les serveurs de NahiDeck ou de tiers.",
          "<strong>Contenu :</strong> dispositions d’écran, profils, préférences visuelles et définitions facultatives d’actions du PC. Les secrets d’appareil, clés d’appairage et mots de passe ne sont jamais inclus.",
          "<strong>Séparée de la télémétrie :</strong> les données de sauvegarde ne sont jamais lues ni utilisées à des fins d’analyse."
        ]],
        ["h", "5. Données que nous ne collectons jamais"],
        ["ul", [
          "<strong>Localisation :</strong> le GPS et les services de localisation ne sont jamais utilisés. L’autorisation de recherche Bluetooth d’Android sert uniquement à trouver les appareils à proximité.",
          "<strong>Fichiers personnels :</strong> nous n’accédons ni aux photos, ni aux vidéos, ni aux documents, ni aux enregistrements vocaux.",
          "<strong>Contacts :</strong> nous n’accédons pas à votre liste de contacts.",
          "<strong>Identifiants matériels :</strong> IMEI, adresses MAC et numéros de série ne sont pas collectés. Des identifiants aléatoires sont utilisés à la place."
        ]],
        ["h", "6. Conservation et suppression"],
        ["ul", [
          "<strong>Données de compte et de licence :</strong> supprimées définitivement sur demande, via Paramètres > Compte > «Supprimer le compte» dans l’application, ou depuis la page de suppression de compte de notre site.",
          "<strong>Télémétrie :</strong> si vous retirez votre consentement dans Paramètres > Confidentialité, votre enregistrement est supprimé immédiatement. Les enregistrements actifs expirent automatiquement sous 180 jours (TTL).",
          "<strong>Journaux techniques du serveur :</strong> les journaux de requêtes de l’infrastructure sont conservés 30 jours au maximum.",
          "<strong>Journaux de licence et d’audit :</strong> contiennent une forme condensée à sens unique (hash) de votre identifiant utilisateur et sont conservés 90 jours au maximum.",
          "<strong>Rapports de plantage :</strong> contiennent la version de l’application, un hash de l’appareil, le type et le texte de l’erreur, la trace de pile et des lignes de journal. Les adresses e-mail, adresses IP et noms de dossier utilisateur dans les chemins sont masqués avant stockage. Conservés 90 jours au maximum.",
          "<strong>Transferts internationaux :</strong> Google exploite Firebase Authentication depuis des centres de données situés aux États-Unis. Pour la vérification des achats, RevenueCat traite vos données aux États-Unis (AWS) ; ce transfert est encadré par des clauses contractuelles types. Les données Firestore, Cloud Functions et Cloud KMS sont traitées sur des serveurs situés en Europe (europe-west1). Base juridique des transferts depuis la Turquie au titre de l’article 9 de la loi KVKK : [BASE JURIDIQUE : À COMPLÉTER PAR L’AVOCAT].",
          "<strong>E-mail d’assistance :</strong> Traité via Google Groups (groupe grand public) et soumis à la <a href='https://policies.google.com/privacy?hl=en'>Politique de confidentialité</a> et aux <a href='https://policies.google.com/terms?hl=en'>Conditions</a> de Google. Les messages sont conservés dans l’archive du groupe."
        ]],
        ["h", "7. Vos droits (RGPD et KVKK)"],
        ["p", "Conformément au RGPD et à la législation applicable, vous avez le droit de savoir si nous traitons vos données, d’y accéder, de les rectifier et d’en demander la suppression. Pour exercer ces droits, écrivez à nahideck-support@googlegroups.com."],
        ["h", "Annexe A : Catégories de données et prestataires (détails techniques)"],
        ["table", ["Catégorie de données", "Information collectée", "Prestataire", "Finalité"], [
          ["<strong>Compte utilisateur</strong>", "Adresse e-mail, nom, identifiant Firebase (UID)", "Google Firebase Authentication", "Connexion et vérification de la licence Pro. Facultatif ; le plan gratuit fonctionne sans compte."],
          ["<strong>Licence et appairage</strong>", "Identifiant d’appareil du téléphone généré aléatoirement, identifiant du PC, UID", "Google Cloud Firestore et Cloud KMS", "Appliquer la règle d’usage raisonnable 1 téléphone + 1 PC et signer les jetons de licence."],
          ["<strong>Achats et abonnements</strong>", "Jeton de commande Google Play, identifiant utilisateur RevenueCat, statut des droits", "Google Play Billing et RevenueCat", "Traiter et vérifier les achats et renouvellements Pro."],
          ["<strong>Télémétrie d’usage et de disposition (facultative)</strong>", "Identifiant d’installation aléatoire, disposition de la grille (types de widgets, positions, tailles), choix du thème, type de plan", "Google Cloud Firestore (anonymous_layouts)", "Analyser les widgets et dispositions populaires pour améliorer l’interface. <strong>Ne contient aucune donnée personnelle, aucun texte ni information de compte.</strong>"],
          ["<strong>Données locales de l’extension</strong>", "État du média de l’onglet actif (titre, artiste, lecture)", "Uniquement le navigateur local et l’application PC", "Afficher le média web sur le téléphone et le PC. Jamais envoyé dans le cloud."],
          ["<strong>Vérification de l’application</strong>", "Nom du paquet, certificat de signature de l’application et résultat d’intégrité de l’appareil", "Google Play Integrity (Google)", "Vérifier que l’application a été installée depuis Google Play et s’exécute sur un appareil de confiance ; prévenir les abus. Google ne partage pas ces données avec des tiers."],
          ["<strong>Rapport de plantage (facultatif)</strong>", "Version de l’application, hash de l’appareil, type et texte de l’erreur, trace de pile et lignes de journal (adresses e-mail et IP masquées)", "Google Cloud Functions et Firestore (Europe) ; e-mail d’assistance via Google Groups", "Analyser et corriger les plantages. Envoyé uniquement avec votre confirmation."]
        ]],
        ["card", [["p", "<strong>Responsable :</strong> Kaya Furkan İPEKCİ"], ["p", "<strong>E-mail :</strong> nahideck-support@googlegroups.com"], ["p", "<strong>Site web :</strong> https://nahideck.github.io"]]],
      ]
    },
    delete: {
      title: "Demande de suppression du compte et des données",
      blocks: [
        ["p", "Si vous souhaitez supprimer définitivement votre compte NahiDeck et toutes les données associées, vous pouvez utiliser l’une des méthodes suivantes."],
        ["h", "Méthode 1 : suppression dans l’application (recommandée)"],
        ["ol", [
          "Ouvrez l’application <strong>NahiDeck</strong> sur votre appareil Android.",
          "Allez dans <strong>Paramètres</strong> depuis le dock latéral (ou le menu supérieur).",
          "Ouvrez la section <strong>Compte</strong>.",
          "Faites défiler jusqu’en bas et appuyez sur <strong>«Supprimer mon compte»</strong>.",
          "Confirmez dans la fenêtre.",
          "Votre enregistrement Firebase, vos appareils appairés et vos licences dans le cloud sont alors supprimés définitivement."
        ]],
        ["p", "<em>Pour des raisons de sécurité, la suppression du compte exige une connexion effectuée au cours des 5 dernières minutes. En cas d’erreur, déconnectez-vous, reconnectez-vous puis réessayez.</em>"],
        ["p", "<em>Remarque : supprimer votre compte ne supprime pas la sauvegarde de l’application sur Google Drive. Supprimez-la vous-même depuis les paramètres de Google Drive (Google Drive > Paramètres > Gérer les applications).</em>"],
        ["h", "Méthode 2 : demande par e-mail"],
        ["p", "Si vous ne pouvez pas accéder à l’application ou si vous l’avez désinstallée, envoyez votre demande par e-mail :"],
        ["card", [
          ["p", "<strong>E-mail d’assistance :</strong> nahideck-support@googlegroups.com"],
          ["p", "<strong>Objet :</strong> <code>Demande de suppression du compte et des données NahiDeck</code>"],
          ["p", "<strong>Informations requises :</strong>"],
          ["ul", ["L’adresse e-mail du compte Google utilisé pour vous connecter à NahiDeck.", "<em>(Facultatif)</em> Numéro de commande Google Play ou référence d’abonnement RevenueCat."]]
        ]],
        ["p", "Une fois votre identité vérifiée, votre compte et les enregistrements cloud associés sont supprimés définitivement sous <strong>7 jours ouvrés</strong>."],
        ["h", "Qu’est-ce qui est supprimé définitivement ?"],
        ["ul", [
          "Enregistrement utilisateur Firebase Authentication, adresse e-mail et informations de profil.",
          "Enregistrement de licence Pro dans la collection Firestore <code>entitlements</code>.",
          "Enregistrements des téléphones et PC appairés dans la collection Firestore <code>devices</code>.",
          "Profil d’abonné RevenueCat (<code>app_user_id</code>) ; supprimé lorsque cela est techniquement possible. Si la suppression est impossible, signalez-le-nous par e-mail.",
          "Clés de licence et enregistrements de session dans le stockage sécurisé de votre appareil."
        ]],
        ["h", "Qu’est-ce qui est conservé ?"],
        ["ul", [
          "<strong>Historique de facturation Google Play :</strong> conservé par Google pour des raisons fiscales et de droit de la consommation. NahiDeck ne stocke pas de données de paiement.",
          "<strong>Journaux d’audit :</strong> les journaux liés aux opérations de compte et de licence contiennent un identifiant condensé (hash) qui ne peut pas être directement relié à votre identité ; ils sont supprimés automatiquement sous 90 jours.",
          "<strong>Rapports de plantage :</strong> supprimés automatiquement sous 90 jours."
        ]],
        ["danger", [
          ["h3", "Important : résiliez votre abonnement"],
          ["p", "La suppression de votre compte <strong>ne résilie pas</strong> automatiquement un abonnement souscrit via Google Play. Pour éviter de nouveaux prélèvements, résiliez-le avant de supprimer votre compte :"],
          ["ol", [
            "Ouvrez le <strong>Google Play Store</strong> sur votre appareil Android.",
            "Appuyez sur votre icône de profil > <strong>Paiements et abonnements</strong> > <strong>Abonnements</strong>.",
            "Sélectionnez <strong>NahiDeck</strong> et appuyez sur <strong>«Résilier l’abonnement»</strong>."
          ]]
        ]]
      ]
    }
  },

  // AWAITING_NATIVE_SPEAKER_REVIEW
  az: {
    privacy: {
      title: "NahiDeck Məxfilik Siyasəti",
      updated: "25 oktyabr 2026",
      blocks: [
        ["p", "NahiDeck («biz», «tətbiq» və ya «xidmət») istifadəçilərinin məxfiliyinə və şəxsi məlumatların qorunmasına önəm verir. Bu siyasət <strong>NahiDeck Android tətbiqini</strong>, <strong>NahiDeck Windows masaüstü müştərisini</strong> və <strong>brauzer genişlənməsini (NahiDeck Connect)</strong> əhatə edir."],
        ["h", "Qısa məzmun"],
        ["ul", [
          "<strong>Nəyi toplayırıq:</strong> Hesab məlumatları (könüllü), Pro lisenziya və cihaz qoşulma qeydləri, könüllü anonim istifadə məlumatları və göndərmək qərarına gəldiyiniz çökmə hesabatları.",
          "<strong>Harada emal olunur:</strong> Avropada (Firestore, Cloud Functions). Giriş (Firebase Authentication) və alış yoxlanışı (RevenueCat) ABŞ-da emal olunur; bu ötürmənin əsası aşağıda göstərilib.",
          "<strong>Nə qədər saxlanılır:</strong> Texniki jurnallar 30 gün, audit və çökmə qeydləri 90 gün, anonim tərtibat qeydləri 180 gün. Hesabı sildikdə hesab məlumatlarınız silinir.",
          "<strong>Hüquqlarınız:</strong> Məlumatlarınıza giriş, düzəliş və silinmə tələb edə bilərsiniz. Hesabı tətbiqdən və ya hesab silmə səhifəsindən silə bilərsiniz.",
          "<strong>Çökmə hesabatları:</strong> Yalnız siz təsdiq etdikdə göndərilir. Könüllü qeydiniz və əlaqə e-poçtunuz daxil edilir; qeyd olduğu kimi saxlanılır, e-poçt və IP ünvanları gizlədilir."
        ]],
        ["h", "1. Məlumat nəzarətçisi və əlaqə"],
        ["p", "GDPR və tətbiq olunan məlumat qorunması qanunvericiliyinə əsasən məlumat nəzarətçisi:"],
        ["h", "2. Yerli əlaqə (buluda bağlılıq yoxdur)"],
        ["p", "NahiDeck Android telefonunuzla Windows kompüteriniz arasında yerli Wi-Fi, USB kabel və ya Bluetooth Low Energy (BLE) üzərindən birbaşa işləyir:"],
        ["ul", [
          "<strong>Media və səs əmrləri:</strong> yerli şəbəkənizdə ötürülür və xarici serverlərə göndərilmir.",
          "<strong>Masaüstü makroları:</strong> qısayollar və fərdi əməliyyatlar kompüterinizdə icra olunur və orada işlənir.",
          "<strong>Şifrələmə:</strong> yerli bağlantı yerli olaraq yaradılmış TLS sertifikatları və TOFU (ilk istifadədə etibar) barmaq izi bağlaması ilə qorunur."
        ]],
        ["h", "3. Hansı məlumatları toplayırıq və necə istifadə edirik"],
        ["p", "Məlumat kateqoriyaları, xidmət təminatçıları və istifadə məqsədləri bu səhifənin sonundakı Əlavə A-da cədvəl şəklində ətraflı verilib."],
        ["h", "4. Bulud ehtiyat nüsxəsi (Google Drive)"],
        ["p", "Ekran tərtibatlarınızı, profillərinizi və seçimlərinizi saxlamaq üçün isteğe bağlı Google Drive ehtiyat nüsxə funksiyası var:"],
        ["ul", [
          "<strong>Saxlanma yeri:</strong> yalnız Google Drive hesabınızdakı şəxsi tətbiq qovluğunda (drive.appdata). NahiDeck və ya üçüncü tərəf serverlərinə heç vaxt göndərilmir və orada saxlanılmır.",
          "<strong>Məzmun:</strong> ekran tərtibatları, profillər, vizual seçimlər və isteğe bağlı PC əməliyyat təsvirləri. Cihaz sirləri, qoşulma açarları və parollar heç vaxt daxil edilmir.",
          "<strong>Telemetriyadan ayrıdır:</strong> ehtiyat nüsxə məlumatları heç vaxt analitika üçün oxunmur və ya istifadə olunmur."
        ]],
        ["h", "5. Heç vaxt toplamadığımız məlumatlar"],
        ["ul", [
          "<strong>Məkan:</strong> GPS və məkan xidmətləri heç vaxt istifadə olunmur. Android Bluetooth axtarış icazəsi yalnız yaxınlıqdakı cihazları tapmaq üçün istifadə olunur.",
          "<strong>Şəxsi fayllar:</strong> foto, video, sənəd və ya səs yazılarına giriş etmirik.",
          "<strong>Kontaktlar:</strong> kontakt siyahınıza giriş etmirik.",
          "<strong>Aparat identifikatorları:</strong> IMEI, MAC ünvanları və seriya nömrələri toplanmır. Əvəzində təsadüfi identifikatorlar istifadə olunur."
        ]],
        ["h", "6. Saxlama və silinmə"],
        ["ul", [
          "<strong>Hesab və lisenziya məlumatları:</strong> tələb etdiyiniz zaman tətbiqdə Ayarlar > Hesab > «Hesabı sil» vasitəsilə və ya saytımızdakı hesab silmə səhifəsi üzərindən həmişəlik silinir.",
          "<strong>Telemetriya:</strong> Ayarlar > Məxfilik bölməsində razılığı geri götürdükdə mövcud qeyd dərhal silinir. Aktiv qeydlər ən geci 180 gün ərzində avtomatik silinir (TTL).",
          "<strong>Texniki server jurnalları:</strong> infrastruktur sorğu jurnalları ən çox 30 gün saxlanılır.",
          "<strong>Lisenziya və audit qeydləri:</strong> hesab və lisenziya əməliyyatlarına aid qeydlər istifadəçi identifikatorunun hash (geri döndərilməz) formasını ehtiva edir və ən çox 90 gün saxlanılır.",
          "<strong>Çökmə hesabatları:</strong> tətbiq versiyası, cihaz hash-i, xəta növü və mətni, stack trace və jurnal sətirlərini ehtiva edir. E-poçt ünvanları, IP ünvanları və fayl yollarındakı istifadəçi qovluq adları saxlanılmazdan əvvəl gizlədilir. Ən çox 90 gün saxlanılır.",
          "<strong>Xarici ölkələrə ötürmə:</strong> Firebase Authentication xidmətini Google ABŞ-dakı data mərkəzlərindən işlədir. Satın alma yoxlanışı üçün RevenueCat məlumatlarınızı ABŞ-da (AWS) emal edir; bu ötürmə Standart Müqavilə Bəndləri ilə təmin olunur. Firestore, Cloud Functions və Cloud KMS məlumatları Avropadakı (europe-west1) serverlərdə emal olunur. Türkiyədən ötürmələr üçün KVKK m.9 əsası: [HÜQUQİ ƏSAS: VƏKİL TƏRƏFİNDƏN DOLDURULACAQ].",
          "<strong>Dəstək e-poçtu:</strong> Google Groups (istehlakçı qrupu) vasitəsilə emal olunur və Google-un <a href='https://policies.google.com/privacy?hl=en'>Məxfilik Siyasəti</a> və <a href='https://policies.google.com/terms?hl=en'>Şərtlərinə</a> tabedir. Mesajlar qrupun arxivində saxlanılır."
        ]],
        ["h", "7. Hüquqlarınız (GDPR və KVKK)"],
        ["p", "GDPR və tətbiq olunan qanunvericiliyə əsasən məlumatlarınızın emal olunub-olunmadığını öyrənmək, onlara daxil olmaq, düzəltmək və silinməsini tələb etmək hüququnuz var. Bu hüquqlardan istifadə üçün nahideck-support@googlegroups.com ünvanına yazın."],
        ["h", "Əlavə A: Məlumat kateqoriyaları və xidmət təminatçıları (texniki ətraflar)"],
        ["table", ["Məlumat kateqoriyası", "Toplanan məlumat", "Xidmət təminatçısı", "Məqsəd"], [
          ["<strong>İstifadəçi hesabı</strong>", "E-poçt ünvanı, ad, Firebase istifadəçi ID-si (UID)", "Google Firebase Authentication", "Giriş və Pro lisenziyasının yoxlanılması. İsteğe bağlıdır; pulsuz plan hesabsız istifadə oluna bilər."],
          ["<strong>Lisenziya və qoşulma</strong>", "Təsadüfi yaradılmış telefon cihaz ID-si, PC ID-si, UID", "Google Cloud Firestore və Cloud KMS", "1 telefon + 1 PC ədalətli istifadə qaydasının tətbiqi və lisenziya tokenlərinin imzalanması."],
          ["<strong>Alışlar və abunələr</strong>", "Google Play sifariş/token məlumatı, RevenueCat App User ID, hüquq statusu", "Google Play Billing və RevenueCat", "Pro alışların və yenilənmələrin emalı və yoxlanılması."],
          ["<strong>İstifadə və tərtibat telemetriyası (isteğe bağlı)</strong>", "Təsadüfi quraşdırma ID-si, şəbəkə tərtibatı (vidcet növləri, yerləri, ölçüləri), mövzu seçimi, plan növü", "Google Cloud Firestore (anonymous_layouts)", "Populyar vidcet və tərtibatları təhlil edərək interfeysi təkmilləşdirmək. <strong>Şəxsi məlumat, mətn və ya hesab məlumatı ehtiva etmir.</strong>"],
          ["<strong>Yerli genişlənmə məlumatları</strong>", "Aktiv vərəqdəki media statusu (mahnı adı, ifaçı, oxutma vəziyyəti)", "Yalnız yerli brauzer və PC tətbiqi", "Veb mediasını telefon və PC-də göstərmək. Heç vaxt buluda göndərilmir."],
          ["<strong>Tətbiqin yoxlanılması</strong>", "Paket adı, tətbiq imza sertifikatı və cihazın bütövlük nəticəsi", "Google Play Integrity (Google)", "Tətbiqin Google Play vasitəsilə quraşdırılıb-quraşdırılmadığını və etibarlı cihazda işləyib-işləmədiyini yoxlamaq; sui-istifadənin qarşısını almaq. Google bu məlumatları üçüncü tərəflərlə paylaşmır."],
          ["<strong>Xəta hesabatı (könüllü)</strong>", "Tətbiq versiyası, cihaz hash-i, xəta növü və mətni, stack trace və jurnal sətirləri (e-poçt və IP ünvanları gizlədilir)", "Google Cloud Functions və Firestore (Avropa); dəstək e-poçtu Google Groups vasitəsilə", "Çökmələri təhlil edib düzəltmək. Yalnız siz təsdiq etdikdə göndərilir."]
        ]],
        ["card", [["p", "<strong>Nəzarətçi:</strong> Kaya Furkan İPEKCİ"], ["p", "<strong>E-poçt:</strong> nahideck-support@googlegroups.com"], ["p", "<strong>Veb sayt:</strong> https://nahideck.github.io"]]],
      ]
    },
    delete: {
      title: "Hesab və məlumatların silinməsi tələbi",
      blocks: [
        ["p", "NahiDeck hesabınızı və ona bağlı bütün məlumatları həmişəlik silmək istəyirsinizsə, aşağıdakı üsullardan birindən istifadə edə bilərsiniz."],
        ["h", "Üsul 1: tətbiqdən silmək (tövsiyə olunur)"],
        ["ol", [
          "Android cihazınızda <strong>NahiDeck</strong> tətbiqini açın.",
          "Yan panelden (və ya üst menyudan) <strong>Ayarlar</strong> bölməsinə keçin.",
          "<strong>Hesab</strong> bölməsini açın.",
          "Aşağı sürüşdürün və <strong>«Hesabımı sil»</strong> düyməsinə toxunun.",
          "Açılan pəncərədə təsdiqləyin.",
          "Firebase istifadəçi qeydiniz, qoşulmuş cihazlarınız və buluddakı lisenziya qeydləriniz həmişəlik silinəcək."
        ]],
        ["p", "<em>Hesabın silinməsi təhlükəsizlik üçün son 5 dəqiqə ərzində daxil olmağınızı tələb edir. Xəta alsanız çıxış edin, yenidən daxil olun və təkrar cəhd edin.</em>"],
        ["p", "<em>Qeyd: hesabınızı silsəniz belə Google Drive-dakı tətbiq ehtiyat nüsxəsi avtomatik silinmir. Onu Google Drive ayarlarından özünüz silməlisiniz (Google Drive > Ayarlar > Tətbiqləri idarə et).</em>"],
        ["h", "Üsul 2: e-poçtla silinmə tələbi"],
        ["p", "Tətbiqə girişiniz yoxdursa və ya onu silmisinizsə, tələbinizi e-poçtla göndərin:"],
        ["card", [
          ["p", "<strong>Dəstək e-poçtu:</strong> nahideck-support@googlegroups.com"],
          ["p", "<strong>Mövzu:</strong> <code>NahiDeck hesab və məlumat silinmə tələbi</code>"],
          ["p", "<strong>Lazım olan məlumat:</strong>"],
          ["ul", ["NahiDeck-ə giriş üçün istifadə etdiyiniz Google hesabının e-poçt ünvanı.", "<em>(İsteğe bağlı)</em> Google Play sifariş nömrəsi və ya RevenueCat abunə istinadı."]]
        ]],
        ["p", "Şəxsiyyətiniz təsdiqləndikdən sonra hesabınız və bulud qeydləriniz ən geci <strong>7 iş günü ərzində</strong> həmişəlik silinir."],
        ["h", "Nə həmişəlik silinir?"],
        ["ul", [
          "Firebase Authentication istifadəçi qeydi, e-poçt ünvanı və profil məlumatları.",
          "Firestore <code>entitlements</code> kolleksiyasındakı Pro lisenziya qeydi.",
          "Firestore <code>devices</code> kolleksiyasındakı qoşulmuş telefon və PC qeydləri.",
          "RevenueCat abunəçi profili (<code>app_user_id</code>); texniki olaraq mümkün olduqda silinir. Silinmədikdə bunu e-poçtla bizə bildirin.",
          "Cihazınızın təhlükəsiz yaddaşındakı lisenziya açarları və sessiya qeydləri."
        ]],
        ["h", "Nə saxlanılır?"],
        ["ul", [
          "<strong>Google Play ödəniş qeydləri:</strong> vergi və istehlakçı qanunvericiliyi səbəbindən Google tərəfindən saxlanılır. NahiDeck ödəniş məlumatlarını saxlamır.",
          "<strong>Audit qeydləri:</strong> hesab və lisenziya əməliyyatlarına aid qeydlər şəxsiyyətinizlə birbaşa əlaqələndirilə bilməyən hash tanımlayıcı ehtiva edir və 90 gün ərzində avtomatik silinir.",
          "<strong>Çökmə hesabatları:</strong> 90 gün ərzində avtomatik silinir."
        ]],
        ["danger", [
          ["h3", "Vacib: aktiv abunəliyinizi ləğv edin"],
          ["p", "Hesabı silmək Google Play vasitəsilə başladığınız abunəliyi <strong>avtomatik ləğv etmir</strong>. Gələcək ödənişlərin qarşısını almaq üçün hesabı silməzdən əvvəl abunəliyi ləğv edin:"],
          ["ol", [
            "Android cihazınızda <strong>Google Play Store</strong> tətbiqini açın.",
            "Profil ikonunuza toxunun > <strong>Ödənişlər və abunəliklər</strong> > <strong>Abunəliklər</strong>.",
            "<strong>NahiDeck</strong>-i seçin və <strong>«Abunəliyi ləğv et»</strong> düyməsinə toxunun."
          ]]
        ]]
      ]
    }
  },

  // AWAITING_NATIVE_SPEAKER_REVIEW
  "zh-TW": {
    privacy: {
      title: "NahiDeck 隱私權政策",
      updated: "2026 年 10 月 25 日",
      blocks: [
        ["p", "NahiDeck（以下稱「我們」或「本應用程式」）重視使用者的隱私與個人資料保護。本政策涵蓋 <strong>NahiDeck Android 應用程式</strong>、<strong>NahiDeck Windows 桌面用戶端</strong>，以及 <strong>NahiDeck 瀏覽器擴充功能（NahiDeck Connect）</strong>。"],
        ["h", "簡要摘要"],
        ["ul", [
          "<strong>我們收集的資料：</strong>帳號資訊（選填）、Pro 授權與裝置配對紀錄、選填的匿名使用資料，以及您選擇傳送的當機報告。",
          "<strong>處理地點：</strong>歐洲（Firestore、Cloud Functions）。登入（Firebase Authentication）與購買驗證（RevenueCat）於美國處理；此傳輸的依據見下文。",
          "<strong>保存期限：</strong>技術紀錄 30 天，稽核與當機報告 90 天，匿名版面紀錄 180 天。刪除帳號後，帳號資料會被刪除。",
          "<strong>您的權利：</strong>您可以要求查閱、更正與刪除。您可以在 App 內或帳號刪除頁面刪除帳號。",
          "<strong>當機報告：</strong>僅在您確認後傳送。選填的備註與聯絡電子郵件會一併傳送；備註將照原樣保存，電子郵件與 IP 位址會被遮蔽。"
        ]],
        ["h", "1. 資料控制者與聯絡方式"],
        ["p", "依 GDPR 及適用之資料保護法規，資料控制者為："],
        ["h", "2. 本機通訊（不依賴雲端）"],
        ["p", "NahiDeck 直接在您的 Android 手機與 Windows 電腦之間運作，使用本機 Wi-Fi、USB 傳輸線或藍牙低功耗（BLE）："],
        ["ul", [
          "<strong>媒體與音訊指令：</strong>只在您的本機網路上傳輸，不會傳送到外部伺服器。",
          "<strong>桌面巨集：</strong>快捷鍵與自訂動作在您的電腦上執行與處理。",
          "<strong>加密：</strong>本機連線以本機產生的 TLS 憑證及 TOFU（首次使用即信任）指紋固定機制保護。"
        ]],
        ["h", "3. 我們收集的資料及用途"],
        ["p", "資料類別、服務提供者與使用目的已於本頁末的附錄 A 表格中詳列。"],
        ["h", "4. 雲端備份（Google 雲端硬碟）"],
        ["p", "我們提供選填的 Google 雲端硬碟備份，用於儲存您的畫面版面、設定檔與偏好設定："],
        ["ul", [
          "<strong>儲存位置：</strong>僅儲存於您自己的 Google 雲端硬碟私人應用程式資料夾（drive.appdata）。不會傳送或存放於 NahiDeck 或第三方伺服器。",
          "<strong>備份內容：</strong>畫面版面、設定檔、視覺偏好與選填的電腦動作定義。裝置密鑰、配對金鑰與帳號密碼一律不納入。",
          "<strong>與遙測完全分開：</strong>備份資料不會為分析目的而讀取或處理。"
        ]],
        ["h", "5. 我們絕不收集的資料"],
        ["ul", [
          "<strong>位置：</strong>絕不使用 GPS 或定位服務。Android 的藍牙掃描權限僅用於找到附近的裝置。",
          "<strong>個人檔案：</strong>我們不存取照片、影片、文件或語音錄音。",
          "<strong>通訊錄：</strong>我們不存取您的聯絡人清單。",
          "<strong>硬體識別碼：</strong>不收集 IMEI、MAC 位址或硬體序號，改用隨機產生的識別碼。"
        ]],
        ["h", "6. 保存與刪除"],
        ["ul", [
          "<strong>帳號與授權資料：</strong>應您的要求，於應用程式的「設定 > 帳號 > 刪除帳號」或本網站的帳號刪除頁面中永久刪除。",
          "<strong>遙測資料：</strong>在「設定 > 隱私權」撤回同意後，現有紀錄會立即刪除。有效紀錄會在最長 180 天內自動刪除（TTL）。",
          "<strong>技術伺服器紀錄：</strong>基礎設施請求紀錄最多保留 30 天。",
          "<strong>授權與稽核紀錄：</strong>包含您使用者 ID 的單向雜湊（hash）值，最多保留 90 天。",
          "<strong>當機報告：</strong>包含 App 版本、裝置雜湊值、錯誤類型與訊息、堆疊追蹤及日誌行。電子郵件、IP 位址及檔案路徑中的使用者資料夾名稱會在儲存前遮蔽。最多保留 90 天。",
          "<strong>跨境傳輸：</strong>Firebase Authentication 由 Google 於美國資料中心營運。為驗證購買，RevenueCat 於美國（AWS）處理您的資料，此傳輸以標準契約條款為依據。Firestore、Cloud Functions 與 Cloud KMS 資料於歐洲（europe-west1）伺服器處理。依 KVKK 第 9 條，從土耳其傳輸的法律依據：[法律依據：由律師填寫]。",
          "<strong>支援電子郵件：</strong>透過 Google Groups（消費者群組）處理，並適用 Google 的<a href='https://policies.google.com/privacy?hl=en'>隱私權政策</a>與<a href='https://policies.google.com/terms?hl=en'>服務條款</a>。郵件會保存在群組封存中。"
        ]],
        ["h", "7. 您的權利（GDPR 與 KVKK）"],
        ["p", "依 GDPR 及適用法規，您有權詢問我們是否處理您的資料、存取、更正資料，並要求刪除。如需行使這些權利，請寄信至 nahideck-support@googlegroups.com。"],
        ["h", "附錄 A：資料類別與服務提供者（技術細節）"],
        ["table", ["資料類別", "收集的資訊", "服務提供者", "用途"], [
          ["<strong>使用者帳號</strong>", "電子郵件、名稱、Firebase 使用者 ID（UID）", "Google Firebase Authentication", "登入及確認 Pro 授權。此為選填；免費方案可不登入使用。"],
          ["<strong>授權與配對</strong>", "隨機產生的手機裝置 ID、電腦 ID、UID", "Google Cloud Firestore 與 Cloud KMS", "執行「1 支手機 + 1 台電腦」的合理使用規定，並簽署授權憑證。"],
          ["<strong>購買與訂閱</strong>", "Google Play 訂單／憑證資訊、RevenueCat App User ID、權益狀態", "Google Play Billing 與 RevenueCat", "處理及驗證 Pro 購買與續訂。"],
          ["<strong>使用與版面遙測（選填）</strong>", "隨機安裝 ID、格線版面（小工具類型、位置、大小）、主題選擇、方案類型", "Google Cloud Firestore（anonymous_layouts）", "分析熱門的小工具與版面，以改善介面。<strong>不包含個人資料、文字或帳號資訊。</strong>"],
          ["<strong>本機擴充功能資料</strong>", "目前分頁的媒體狀態（歌曲名稱、演出者、播放狀態）", "僅限本機瀏覽器與電腦應用程式", "在手機與電腦上顯示網頁媒體。絕不傳送到雲端。"],
          ["<strong>應用程式驗證</strong>", "套件名稱、應用程式簽章憑證與裝置完整性結果", "Google Play Integrity（Google）", "驗證應用程式是否透過 Google Play 安裝並在可信任的裝置上執行；防止濫用。Google 不會將這些資料分享給第三方。"],
          ["<strong>當機報告（選填）</strong>", "App 版本、裝置雜湊值、錯誤類型與訊息、堆疊追蹤及日誌行（電子郵件與 IP 位址會被遮蔽）", "Google Cloud Functions 與 Firestore（歐洲）；支援電子郵件透過 Google Groups", "分析並修正當機問題。僅在您確認後傳送。"]
        ]],
        ["card", [["p", "<strong>資料控制者：</strong> Kaya Furkan İPEKCİ"], ["p", "<strong>聯絡信箱：</strong>nahideck-support@googlegroups.com"], ["p", "<strong>網站：</strong>https://nahideck.github.io"]]],
      ]
    },
    delete: {
      title: "帳號與資料刪除申請",
      blocks: [
        ["p", "若您想永久刪除您的 NahiDeck 帳號及所有相關資料，可以採用以下任一方式。"],
        ["h", "方式一：在應用程式內刪除（建議）"],
        ["ol", [
          "在您的 Android 裝置上開啟 <strong>NahiDeck</strong> 應用程式。",
          "從側邊 Dock（或頂部選單）進入 <strong>設定</strong>。",
          "開啟 <strong>帳號</strong> 區段。",
          "捲動到最下方，點選 <strong>「刪除我的帳號」</strong>。",
          "在對話框中確認。",
          "您的 Firebase 使用者紀錄、已配對裝置及雲端授權紀錄將被永久刪除。"
        ]],
        ["p", "<em>基於安全考量，刪除帳號需要您在最近 5 分鐘內登入過。若出現錯誤，請登出後重新登入並再試一次。</em>"],
        ["p", "<em>注意：刪除帳號並不會移除 Google 雲端硬碟中的應用程式備份。請自行到 Google 雲端硬碟設定中刪除（Google 雲端硬碟 > 設定 > 管理應用程式）。</em>"],
        ["h", "方式二：以電子郵件申請刪除"],
        ["p", "若您無法使用應用程式，或已解除安裝，請以電子郵件提出申請："],
        ["card", [
          ["p", "<strong>支援信箱：</strong>nahideck-support@googlegroups.com"],
          ["p", "<strong>主旨：</strong><code>NahiDeck 帳號與資料刪除申請</code>"],
          ["p", "<strong>必要資訊：</strong>"],
          ["ul", ["用於登入 NahiDeck 的 Google 帳號電子郵件。", "<em>（選填）</em>Google Play 訂單編號或 RevenueCat 訂閱參考資訊。"]]
        ]],
        ["p", "確認身分後，您的帳號與相關雲端紀錄將於 <strong>7 個工作天內</strong>永久刪除。"],
        ["h", "哪些資料會被永久刪除？"],
        ["ul", [
          "Firebase Authentication 使用者紀錄、電子郵件與個人檔案資訊。",
          "Firestore <code>entitlements</code> 集合中的 Pro 授權紀錄。",
          "Firestore <code>devices</code> 集合中已配對的手機與電腦紀錄。",
          "RevenueCat 訂閱者資料（<code>app_user_id</code>）；技術上可行時會刪除。若無法刪除，請以電子郵件通知我們。",
          "儲存於您裝置安全儲存區的授權金鑰與工作階段紀錄。"
        ]],
        ["h", "哪些資料會保留？"],
        ["ul", [
          "<strong>Google Play 帳務紀錄：</strong>因稅務及消費者法規，由 Google 保存。NahiDeck 不保存付款資訊。",
          "<strong>稽核紀錄：</strong>帳號與授權操作的紀錄包含無法直接與您身分連結的雜湊識別碼，會於 90 天內自動刪除。",
          "<strong>當機報告：</strong>會於 90 天內自動刪除。"
        ]],
        ["danger", [
          ["h3", "重要：請取消有效訂閱"],
          ["p", "刪除帳號<strong>不會自動取消</strong>透過 Google Play 開始的訂閱。若要避免之後的扣款，請在刪除帳號前先取消："],
          ["ol", [
            "在您的 Android 裝置上開啟 <strong>Google Play 商店</strong>。",
            "點選個人頭像 > <strong>付款與訂閱項目</strong> > <strong>訂閱項目</strong>。",
            "選擇 <strong>NahiDeck</strong>，並點選 <strong>「取消訂閱」</strong>。"
          ]]
        ]]
      ]
    }
  },

  // AWAITING_NATIVE_SPEAKER_REVIEW
  "zh-CN": {
    privacy: {
      title: "NahiDeck 隐私政策",
      updated: "2026 年 10 月 25 日",
      blocks: [
        ["p", "NahiDeck（以下简称“我们”或“本应用”）重视用户的隐私和个人信息保护。本政策涵盖 <strong>NahiDeck Android 应用</strong>、<strong>NahiDeck Windows 桌面客户端</strong>以及 <strong>NahiDeck 浏览器扩展（NahiDeck Connect）</strong>。"],
        ["h", "简要摘要"],
        ["ul", [
          "<strong>我们收集的数据：</strong>账号信息（可选）、Pro 授权与设备配对记录、可选的匿名使用数据，以及您选择发送的崩溃报告。",
          "<strong>处理地点：</strong>欧洲（Firestore、Cloud Functions）。登录（Firebase Authentication）与购买验证（RevenueCat）在美国处理；该传输的依据见下文。",
          "<strong>保存期限：</strong>技术日志 30 天，审计与崩溃报告 90 天，匿名布局记录 180 天。删除账号后，账号数据会被删除。",
          "<strong>您的权利：</strong>您可以请求访问、更正与删除。您可以在应用内或账号删除页面删除账号。",
          "<strong>崩溃报告：</strong>仅在您确认后发送。可选的备注与联系邮箱会一并发送；备注将按原样保存，邮箱与 IP 地址会被遮蔽。"
        ]],
        ["h", "1. 数据控制者与联系方式"],
        ["p", "依据 GDPR 及适用的数据保护法律，数据控制者为："],
        ["h", "2. 本地通信（不依赖云端）"],
        ["p", "NahiDeck 在您的 Android 手机与 Windows 电脑之间直接工作，通过本地 Wi-Fi、USB 数据线或低功耗蓝牙（BLE）连接："],
        ["ul", [
          "<strong>媒体与音频指令：</strong>仅在您的本地网络中传输，不会发送到外部服务器。",
          "<strong>桌面宏：</strong>快捷键和自定义操作在您的电脑上执行和处理。",
          "<strong>加密：</strong>本地连接由本地生成的 TLS 证书和 TOFU（首次使用即信任）指纹固定机制保护。"
        ]],
        ["h", "3. 我们收集的信息及用途"],
        ["p", "数据类别、服务提供方及使用目的已在本页末尾附录 A 的表格中详列。"],
        ["h", "4. 云端备份（Google 云端硬盘）"],
        ["p", "我们提供可选的 Google 云端硬盘备份，用于保存您的屏幕布局、配置文件和偏好设置："],
        ["ul", [
          "<strong>存储位置：</strong>仅存储在您自己 Google 云端硬盘中的应用私有文件夹（drive.appdata）。不会发送到或存放在 NahiDeck 或第三方服务器上。",
          "<strong>备份内容：</strong>屏幕布局、配置文件、视觉偏好和可选的电脑操作定义。设备密钥、配对密钥和账号密码绝不包含在内。",
          "<strong>与遥测完全分离：</strong>备份数据不会被读取或用于分析。"
        ]],
        ["h", "5. 我们绝不收集的数据"],
        ["ul", [
          "<strong>位置：</strong>从不使用 GPS 或定位服务。Android 蓝牙扫描权限仅用于发现附近的设备。",
          "<strong>个人文件：</strong>我们不访问照片、视频、文档或语音录音。",
          "<strong>通讯录：</strong>我们不访问您的联系人列表。",
          "<strong>硬件标识符：</strong>不收集 IMEI、MAC 地址或硬件序列号，改用随机生成的标识符。"
        ]],
        ["h", "6. 保存与删除"],
        ["ul", [
          "<strong>账号与授权数据：</strong>根据您的请求，在应用中通过“设置 > 账号 > 删除账号”，或在本网站的账号删除页面中永久删除。",
          "<strong>遥测：</strong>在“设置 > 隐私”中撤回同意后，现有记录会立即删除。有效记录会在最长 180 天内自动过期删除（TTL）。",
          "<strong>技术服务器日志：</strong>基础设施请求日志最长保留 30 天。",
          "<strong>授权与审计记录：</strong>包含您用户 ID 的单向哈希（hash）值，最长保留 90 天。",
          "<strong>崩溃报告：</strong>包含应用版本、设备哈希值、错误类型与信息、堆栈跟踪及日志行。电子邮件、IP 地址及文件路径中的用户文件夹名称会在存储前被遮蔽。最长保留 90 天。",
          "<strong>跨境传输：</strong>Firebase Authentication 由 Google 在美国数据中心运营。为验证购买，RevenueCat 在美国（AWS）处理您的数据，该传输以标准合同条款为依据。Firestore、Cloud Functions 与 Cloud KMS 数据在欧洲（europe-west1）服务器上处理。依据 KVKK 第 9 条，从土耳其传输的法律依据：[法律依据：由律师填写]。",
          "<strong>支持邮件：</strong>通过 Google Groups（消费者群组）处理，适用 Google 的<a href='https://policies.google.com/privacy?hl=en'>隐私权政策</a>和<a href='https://policies.google.com/terms?hl=en'>服务条款</a>。邮件会保存在群组存档中。"
        ]],
        ["h", "7. 您的权利（GDPR 与 KVKK）"],
        ["p", "依据 GDPR 及适用法律，您有权了解我们是否处理您的数据，访问、更正数据，并要求删除。如需行使这些权利，请发送邮件至 nahideck-support@googlegroups.com。"],
        ["h", "附录 A：数据类别与服务提供方（技术细节）"],
        ["table", ["数据类别", "收集的信息", "服务提供方", "用途"], [
          ["<strong>用户账号</strong>", "电子邮箱、名称、Firebase 用户 ID（UID）", "Google Firebase Authentication", "登录及核验 Pro 授权。可选；免费版无需登录即可使用。"],
          ["<strong>授权与配对</strong>", "随机生成的手机设备 ID、电脑 ID、UID", "Google Cloud Firestore 与 Cloud KMS", "执行“1 部手机 + 1 台电脑”的合理使用规则，并签署授权令牌。"],
          ["<strong>购买与订阅</strong>", "Google Play 订单／令牌信息、RevenueCat App User ID、权益状态", "Google Play Billing 与 RevenueCat", "处理并验证 Pro 购买与续订。"],
          ["<strong>使用与布局遥测（可选）</strong>", "随机安装 ID、网格布局（组件类型、位置、大小）、主题选择、套餐类型", "Google Cloud Firestore（anonymous_layouts）", "分析热门组件和布局，以改进界面。<strong>不包含个人信息、文本或账号信息。</strong>"],
          ["<strong>本地扩展数据</strong>", "当前标签页的媒体状态（歌曲名、艺术家、播放状态）", "仅限本地浏览器和电脑应用", "在手机和电脑上显示网页媒体。绝不发送到云端。"],
          ["<strong>应用验证</strong>", "包名、应用签名证书及设备完整性结果", "Google Play Integrity（Google）", "验证应用是否通过 Google Play 安装并在可信设备上运行；防止滥用。Google 不会将这些数据分享给第三方。"],
          ["<strong>崩溃报告（可选）</strong>", "应用版本、设备哈希值、错误类型与信息、堆栈跟踪及日志行（电子邮件和 IP 地址会被遮蔽）", "Google Cloud Functions 与 Firestore（欧洲）；支持邮箱通过 Google Groups", "分析并修复崩溃问题。仅在您确认后发送。"]
        ]],
        ["card", [["p", "<strong>数据控制者：</strong> Kaya Furkan İPEKCİ"], ["p", "<strong>联系邮箱：</strong>nahideck-support@googlegroups.com"], ["p", "<strong>网站：</strong>https://nahideck.github.io"]]],
      ]
    },
    delete: {
      title: "账号与数据删除申请",
      blocks: [
        ["p", "如果您想永久删除 NahiDeck 账号及所有相关数据，可以使用以下任一方式。"],
        ["h", "方式一：在应用内删除（推荐）"],
        ["ol", [
          "在您的 Android 设备上打开 <strong>NahiDeck</strong> 应用。",
          "从侧边 Dock（或顶部菜单）进入 <strong>设置</strong>。",
          "打开 <strong>账号</strong> 部分。",
          "滚动到底部，点击 <strong>“删除我的账号”</strong>。",
          "在弹出的对话框中确认。",
          "您的 Firebase 用户记录、已配对设备及云端授权记录将被永久删除。"
        ]],
        ["p", "<em>出于安全考虑，删除账号需要您在最近 5 分钟内登录过。如出现错误，请退出登录、重新登录后再试。</em>"],
        ["p", "<em>注意：删除账号不会移除 Google 云端硬盘中的应用备份。请自行在 Google 云端硬盘设置中删除（Google 云端硬盘 > 设置 > 管理应用）。</em>"],
        ["h", "方式二：通过邮件申请删除"],
        ["p", "如果您无法访问应用，或已卸载应用，请通过邮件提交申请："],
        ["card", [
          ["p", "<strong>支持邮箱：</strong>nahideck-support@googlegroups.com"],
          ["p", "<strong>主题：</strong><code>NahiDeck 账号与数据删除申请</code>"],
          ["p", "<strong>所需信息：</strong>"],
          ["ul", ["用于登录 NahiDeck 的 Google 账号邮箱。", "<em>（可选）</em>Google Play 订单号或 RevenueCat 订阅参考信息。"]]
        ]],
        ["p", "核实身份后，您的账号及相关云端记录将在 <strong>7 个工作日内</strong>被永久删除。"],
        ["h", "哪些数据会被永久删除？"],
        ["ul", [
          "Firebase Authentication 用户记录、邮箱地址和个人资料信息。",
          "Firestore <code>entitlements</code> 集合中的 Pro 授权记录。",
          "Firestore <code>devices</code> 集合中已配对的手机与电脑记录。",
          "RevenueCat 订阅用户资料（<code>app_user_id</code>）；技术上可行时会删除。若无法删除，请通过电子邮件告知我们。",
          "保存在您设备安全存储中的授权密钥和会话记录。"
        ]],
        ["h", "哪些数据会被保留？"],
        ["ul", [
          "<strong>Google Play 账单记录：</strong>出于税务和消费者法律要求，由 Google 保存。NahiDeck 不保存支付信息。",
          "<strong>审计记录：</strong>账号与授权操作记录包含无法直接与您身份关联的哈希标识符，会在 90 天内自动删除。",
          "<strong>崩溃报告：</strong>会在 90 天内自动删除。"
        ]],
        ["danger", [
          ["h3", "重要：请取消有效订阅"],
          ["p", "删除账号<strong>不会自动取消</strong>通过 Google Play 发起的订阅。为避免之后继续扣费，请在删除账号前先取消："],
          ["ol", [
            "在您的 Android 设备上打开 <strong>Google Play 商店</strong>。",
            "点击个人头像 > <strong>付款和订阅</strong> > <strong>订阅</strong>。",
            "选择 <strong>NahiDeck</strong>，并点击 <strong>“取消订阅”</strong>。"
          ]]
        ]]
      ]
    }
  },

  // AWAITING_NATIVE_SPEAKER_REVIEW
  "pt-PT": {
    privacy: {
      title: "Política de Privacidade do NahiDeck",
      updated: "25 de outubro de 2026",
      blocks: [
        ["p", "O NahiDeck («nós», «aplicação» ou «serviço») valoriza a privacidade dos seus utilizadores e a proteção dos dados pessoais. Esta política abrange a <strong>aplicação NahiDeck para Android</strong>, o <strong>cliente NahiDeck para Windows</strong> e a <strong>extensão de navegador web (NahiDeck Connect)</strong>."],
        ["h", "Em resumo"],
        ["ul", [
          "<strong>O que recolhemos:</strong> Detalhes da conta (opcional), registos de licença Pro e de emparelhamento de dispositivos, dados de utilização anónimos opcionais e relatórios de falhas que decida enviar.",
          "<strong>Onde é processado:</strong> Na Europa (Firestore, Cloud Functions). O início de sessão (Firebase Authentication) e a verificação de compras (RevenueCat) são processados nos Estados Unidos; a base para esta transferência está descrita abaixo.",
          "<strong>Durante quanto tempo conservamos:</strong> Registos técnicos durante 30 dias, registos de auditoria e relatórios de falhas durante 90 dias, registos anónimos de esquemas durante 180 dias. Eliminar a sua conta remove os dados da sua conta.",
          "<strong>Os seus direitos:</strong> Pode solicitar acesso, retificação e eliminação. Pode eliminar a sua conta na aplicação ou na página de Eliminação de Conta.",
          "<strong>Relatórios de falhas:</strong> Enviados apenas mediante a sua confirmação. A sua nota e o seu e-mail de contacto opcionais são incluídos; a nota é guardada tal como foi escrita, e os endereços de e-mail e de IP são mascarados."
        ]],
        ["h", "1. Responsável pelo tratamento e contacto"],
        ["p", "Nos termos do RGPD e da legislação aplicável de proteção de dados, o responsável pelo tratamento dos dados é:"],
        ["h", "2. Comunicação local (sem dependência da nuvem)"],
        ["p", "O NahiDeck funciona diretamente entre o seu telemóvel Android e o seu computador Windows através de Wi-Fi local, cabo USB ou Bluetooth Low Energy (BLE):"],
        ["ul", [
          "<strong>Comandos multimédia e de áudio:</strong> As teclas premidas, os ajustes de volume e os comandos multimédia circulam na sua rede local. Não são enviados para servidores externos.",
          "<strong>Macros de computador:</strong> Os atalhos e as ações personalizadas são executados e processados no seu computador.",
          "<strong>Encriptação:</strong> A ligação local é protegida por certificados TLS gerados localmente e fixação de impressões digitais TOFU (Trust On First Use)."
        ]],
        ["h", "3. O que recolhemos e como utilizamos"],
        ["p", "As categorias de dados, os prestadores de serviços e as finalidades estão detalhados na tabela do Anexo A no final desta página."],
        ["h", "4. Cópia de segurança na nuvem (Google Drive)"],
        ["p", "Uma cópia de segurança opcional no Google Drive permite guardar os seus esquemas de ecrã, perfis e preferências:"],
        ["ul", [
          "<strong>Onde é guardada:</strong> Apenas na pasta privada da aplicação no seu próprio Google Drive (drive.appdata). Nunca é enviada nem alojada nos servidores do NahiDeck ou de terceiros.",
          "<strong>O que contém:</strong> Esquemas de ecrã, perfis, preferências visuais e definições opcionais de ações no computador. Chaves secretas do dispositivo, chaves de emparelhamento e palavras-passe de contas nunca são incluídas.",
          "<strong>Separada da telemetria:</strong> Os dados da cópia de segurança nunca são lidos nem utilizados para fins de análise."
        ]],
        ["h", "5. Dados que nunca recolhemos"],
        ["ul", [
          "<strong>Localização:</strong> Nunca utilizamos GPS ou serviços de localização. A permissão de procura por Bluetooth do Android é utilizada apenas para encontrar dispositivos próximos.",
          "<strong>Ficheiros pessoais:</strong> Não acedemos a fotografias, vídeos, documentos ou gravações de voz.",
          "<strong>Contactos:</strong> Não acedemos à sua lista de contactos.",
          "<strong>Identificadores de hardware:</strong> Não recolhemos IMEI, endereços MAC ou números de série de hardware. São utilizados identificadores aleatórios."
        ]],
        ["h", "6. Conservação e eliminação"],
        ["ul", [
          "<strong>Dados de conta e de licença:</strong> Eliminados permanentemente a pedido, através de Definições > Conta > «Eliminar conta» na aplicação, ou na página de eliminação de conta no nosso website.",
          "<strong>Telemetria:</strong> Retirar o consentimento em Definições > Privacidade elimina o seu registo existente de imediato. Os registos ativos expiram automaticamente no prazo de 180 dias (TTL).",
          "<strong>Registos técnicos do servidor:</strong> Os registos de pedidos da infraestrutura são conservados durante um máximo de 30 dias.",
          "<strong>Registos de licença e de auditoria:</strong> Os registos das operações de conta e de licença contêm uma versão com hash (unidirecional) do identificador de utilizador e são conservados durante um máximo de 90 dias.",
          "<strong>Relatórios de falhas:</strong> Incluem a versão da aplicação, o hash do dispositivo, o tipo e texto do erro, o rastreio da pilha e linhas de registo. Os endereços de e-mail, os endereços IP e os nomes de pastas de utilizador em caminhos de ficheiros são mascarados antes do armazenamento. Conservados durante um máximo de 90 dias.",
          "<strong>Transferências internacionais:</strong> O Firebase Authentication é operado pela Google a partir de centros de dados nos Estados Unidos. Para verificação de compras, a RevenueCat processa os seus dados nos Estados Unidos (AWS); esta transferência está coberta por Cláusulas Contratuais-Tipo. Os dados do Firestore, Cloud Functions e Cloud KMS são processados em servidores na Europa (europe-west1). Base legal para transferências a partir da Turquia ao abrigo do artigo 9.º da KVKK: [BASE LEGAL: A PREENCHER POR ADVOGADO].",
          "<strong>E-mail de apoio:</strong> Processado através do Google Groups (grupo de consumidores) e sujeito à <a href='https://policies.google.com/privacy?hl=en'>Política de Privacidade</a> e aos <a href='https://policies.google.com/terms?hl=en'>Termos</a> da Google. As mensagens são conservadas no arquivo do grupo."
        ]],
        ["h", "7. Os seus direitos (RGPD e KVKK)"],
        ["p", "Nos termos do RGPD e da legislação aplicável, tem o direito de saber se tratamos os seus dados, de aceder aos mesmos, de os retificar e de solicitar a sua eliminação. Para exercer estes direitos, envie um e-mail para nahideck-support@googlegroups.com."],
        ["h", "Anexo A: Categorias de dados e prestadores de serviços (detalhe técnico)"],
        ["table", ["Categoria de dados", "Informação recolhida", "Prestador de serviços", "Finalidade"], [
          ["<strong>Conta de utilizador</strong>", "Endereço de e-mail, nome de apresentação, ID de utilizador do Firebase (UID)", "Google Firebase Authentication", "Iniciar sessão e verificar a titularidade da licença Pro. Opcional; o plano gratuito pode ser utilizado sem iniciar sessão."],
          ["<strong>Licença e emparelhamento</strong>", "ID de telemóvel gerado aleatoriamente, ID de computador, UID", "Google Cloud Firestore e Cloud KMS", "Aplicação da regra de utilização razoável de 1 telemóvel + 1 computador e assinatura de tokens de licença."],
          ["<strong>Compras e subscrições</strong>", "Token de encomenda/compra do Google Play, ID de utilizador do RevenueCat, estado dos direitos", "Google Play Billing e RevenueCat", "Processamento e verificação de compras e renovações Pro."],
          ["<strong>Telemetria de utilização e esquemas (opcional)</strong>", "ID de instalação aleatório, esquema de grelha (tipos de widget, posições, tamanhos), escolha de tema, plano", "Google Cloud Firestore (anonymous_layouts)", "Compreender os widgets e esquemas populares para melhorar a interface. <strong>Não contém dados pessoais, texto ou detalhes de conta.</strong>"],
          ["<strong>Dados locais da extensão</strong>", "Estado multimédia do separador ativo no navegador (título da faixa, artista, estado de reprodução)", "Apenas navegador local e aplicação de computador", "Apresentar multimédia da web no telemóvel e computador. Nunca é enviado para a nuvem."],
          ["<strong>Verificação da aplicação</strong>", "Nome do pacote, certificado de assinatura da aplicação e resultado de integridade do dispositivo", "Google Play Integrity (Google)", "Verificar se a aplicação foi instalada a partir do Google Play e se é executada num dispositivo fidedigno; prevenção de abusos. A Google não partilha estes dados com terceiros."],
          ["<strong>Relatórios de falhas (opcional)</strong>", "Versão da aplicação, hash do dispositivo, tipo e texto do erro, rastreio de pilha e linhas de registo (endereços de e-mail e de IP mascarados)", "Google Cloud Functions e Firestore (Europa); e-mail de apoio via Google Groups", "Análise e correção de falhas. Enviado apenas mediante a sua confirmação."]
        ]],
        ["card", [["p", "<strong>Responsável pelo tratamento:</strong> Kaya Furkan İPEKCİ"], ["p", "<strong>E-mail de contacto:</strong> nahideck-support@googlegroups.com"], ["p", "<strong>Website:</strong> https://nahideck.github.io"]]],
      ]
    },
    delete: {
      title: "Pedido de eliminação de conta e de dados",
      blocks: [
        ["p", "Se pretender eliminar permanentemente a sua conta NahiDeck e todos os dados associados, pode utilizar um dos métodos abaixo."],
        ["h", "Método 1: Eliminar na aplicação (recomendado)"],
        ["ol", [
          "Abra a aplicação <strong>NahiDeck</strong> no seu dispositivo Android.",
          "Aceda a <strong>Definições</strong> a partir da barra lateral (ou menu superior).",
          "Abra a secção <strong>Conta</strong>.",
          "Desloque até ao fundo e toque em <strong>«Eliminar a minha conta»</strong>.",
          "Confirme na janela de diálogo.",
          "O seu registo de utilizador no Firebase, os dispositivos emparelhados e os registos de licença na nuvem são permanentemente eliminados."
        ]],
        ["p", "<em>A eliminação de conta requer um início de sessão nos últimos 5 minutos por motivos de segurança. Se surgir um erro, termine a sessão, volte a iniciar sessão e tente novamente.</em>"],
        ["p", "<em>Nota: Eliminar a sua conta não remove a cópia de segurança da aplicação no Google Drive. Deve eliminá-la diretamente nas definições do Google Drive (Google Drive > Definições > Gerir aplicações).</em>"],
        ["h", "Método 2: Solicitar eliminação por e-mail"],
        ["p", "Se não conseguir aceder à aplicação ou se a tiver desinstalado, envie o seu pedido por e-mail:"],
        ["card", [
          ["p", "<strong>E-mail de apoio:</strong> nahideck-support@googlegroups.com"],
          ["p", "<strong>Assunto:</strong> <code>Pedido de Eliminação de Conta e Dados NahiDeck</code>"],
          ["p", "<strong>Informações necessárias:</strong>"],
          ["ul", ["O endereço de e-mail da conta Google que utiliza para iniciar sessão no NahiDeck.", "<em>(Opcional)</em> Número de encomenda do Google Play ou referência de subscrição do RevenueCat."]]
        ]],
        ["p", "Após a verificação da sua identidade, a sua conta e os registos na nuvem associados serão permanentemente eliminados no prazo de <strong>7 dias úteis</strong>."],
        ["h", "O que é permanentemente eliminado?"],
        ["ul", [
          "Registo de utilizador no Firebase Authentication, endereço de e-mail e dados de perfil.",
          "Registo de licença Pro na coleção <code>entitlements</code> do Firestore.",
          "Registos de telemóveis e computadores emparelhados na coleção <code>devices</code> do Firestore.",
          "Perfil de subscritor no RevenueCat (<code>app_user_id</code>); eliminado onde for tecnicamente viável. Se não puder ser eliminado, comunique-nos por e-mail.",
          "Chaves de licença e registos de sessão no armazenamento seguro do seu dispositivo."
        ]],
        ["h", "O que é conservado?"],
        ["ul", [
          "<strong>Registos de faturação do Google Play:</strong> A Google conserva estes registos por requisitos fiscais e de legislação do consumidor. O NahiDeck não armazena detalhes de pagamento.",
          "<strong>Registos de auditoria:</strong> Os registos de operações de conta e licença contêm um identificador com hash que não pode ser associado diretamente à sua identidade e são eliminados automaticamente no prazo de 90 dias.",
          "<strong>Relatórios de falhas:</strong> Eliminados automaticamente no prazo de 90 dias."
        ]],
        ["danger", [
          ["h3", "Importante: cancele a sua subscrição ativa"],
          ["p", "Eliminar a sua conta <strong>não cancela</strong> uma subscrição iniciada através do Google Play. Para evitar cobranças futuras, cancele-a antes de eliminar a sua conta:"],
          ["ol", [
            "Abra a <strong>Google Play Store</strong> no seu dispositivo Android.",
            "Toque no ícone do perfil > <strong>Pagamentos e subscrições</strong> > <strong>Subscrições</strong>.",
            "Selecione <strong>NahiDeck</strong> e toque em <strong>«Cancelar subscrição»</strong>."
          ]]
        ]]
      ]
    }
  },

  // AWAITING_NATIVE_SPEAKER_REVIEW
  it: {
    privacy: {
      title: "Informativa sulla privacy di NahiDeck",
      updated: "25 ottobre 2026",
      blocks: [
        ["p", "NahiDeck (\"noi\", \"l'applicazione\" o \"il servizio\") attribuisce grande valore alla privacy dei propri utenti e alla protezione dei dati personali. La presente informativa copre l'<strong>applicazione Android NahiDeck</strong>, il <strong>client desktop Windows NahiDeck</strong> e l'<strong>estensione per browser web (NahiDeck Connect)</strong>."],
        ["h", "In breve"],
        ["ul", [
          "<strong>Cosa raccogliamo:</strong> Dettagli dell'account (facoltativo), record di licenza Pro e associazione dispositivi, dati anonimi di utilizzo facoltativi e segnalazioni di arresto anomalo che scegli di inviare.",
          "<strong>Dove vengono elaborati:</strong> In Europa (Firestore, Cloud Functions). L'accesso (Firebase Authentication) e la verifica degli acquisti (RevenueCat) vengono elaborati negli Stati Uniti; la base per tale trasferimento è descritta di seguito.",
          "<strong>Per quanto tempo li conserviamo:</strong> Log tecnici per 30 giorni, registri di audit e arresti anomali per 90 giorni, record anonimi di layout per 180 giorni. L'eliminazione dell'account rimuove tutti i dati dell'account.",
          "<strong>I tuoi diritti:</strong> Puoi richiedere l'accesso, la rettifica e la cancellazione. Puoi eliminare il tuo account nell'app o nella pagina di eliminazione dell'account.",
          "<strong>Segnalazioni di arresto anomalo:</strong> Inviate solo previa tua conferma. La nota facoltativa e l'email di contatto sono incluse; la nota viene conservata così come scritta, mentre gli indirizzi email e IP vengono mascherati."
        ]],
        ["h", "1. Titolare del trattamento e contatti"],
        ["p", "Ai sensi del GDPR e della normativa applicabile sulla protezione dei dati, il titolare del trattamento è:"],
        ["h", "2. Comunicazione locale (nessuna dipendenza dal cloud)"],
        ["p", "NahiDeck funziona direttamente tra il tuo smartphone Android e il tuo computer Windows tramite Wi-Fi locale, cavo USB o Bluetooth Low Energy (BLE):"],
        ["ul", [
          "<strong>Comandi multimediali e audio:</strong> Pressioni di tasti, regolazioni del volume e comandi multimediali viaggiano sulla tua rete locale. Non vengono inviati a server esterni.",
          "<strong>Macro del computer:</strong> Scorciatoie e azioni personalizzate vengono eseguite ed elaborate sul tuo computer.",
          "<strong>Crittografia:</strong> La connessione locale è protetta da certificati TLS generati localmente e blocco dell'impronta digitale TOFU (Trust On First Use)."
        ]],
        ["h", "3. Quali dati raccogliamo e come li utilizziamo"],
        ["p", "Le categorie di dati, i fornitori di servizi e le finalità sono descritti in dettaglio nella tabella dell'Allegato A in fondo a questa pagina."],
        ["h", "4. Backup su cloud (Google Drive)"],
        ["p", "Un backup facoltativo su Google Drive ti consente di salvare i tuoi layout di schermata, profili e preferenze:"],
        ["ul", [
          "<strong>Dove viene memorizzato:</strong> Esclusivamente nella cartella privata dell'app nel tuo Google Drive personale (drive.appdata). Non viene mai inviato né ospitato sui server di NahiDeck o di terze parti.",
          "<strong>Cosa contiene:</strong> Layout dello schermo, profili, preferenze visive e definizioni facoltative di azioni PC. Segreti del dispositivo, chiavi di associazione e password dell'account non vengono mai inclusi.",
          "<strong>Separato dalla telemetria:</strong> I dati di backup non vengono mai letti o utilizzati per analisi statistiche."
        ]],
        ["h", "5. Dati che non raccogliamo mai"],
        ["ul", [
          "<strong>Posizione:</strong> Il GPS e i servizi di geolocalizzazione non vengono mai utilizzati. L'autorizzazione di scansione Bluetooth di Android serve unicamente a trovare i dispositivi vicini.",
          "<strong>File personali:</strong> Non accediamo a foto, video, documenti o registrazioni vocali.",
          "<strong>Contatti:</strong> Non accediamo alla tua rubrica.",
          "<strong>Identificatori hardware:</strong> Non raccogliamo IMEI, indirizzi MAC o numeri di serie hardware. Vengono usati invece identificatori generati casualmente."
        ]],
        ["h", "6. Conservazione e cancellazione"],
        ["ul", [
          "<strong>Dati di account e licenza:</strong> Eliminati definitivamente su richiesta, tramite Impostazioni > Account > \"Elimina account\" nell'app, oppure dalla pagina di eliminazione account sul nostro sito web.",
          "<strong>Telemetria:</strong> La revoca del consenso in Impostazioni > Privacy elimina immediatamente il record esistente. I record attivi scadono automaticamente entro 180 giorni (TTL).",
          "<strong>Log tecnici del server:</strong> I log delle richieste di infrastruttura sono conservati per un massimo di 30 giorni.",
          "<strong>Record di licenza e di audit:</strong> I record delle operazioni di account e licenza contengono una forma con hash unidirezionale dell'ID utente e sono conservati per un massimo di 90 giorni.",
          "<strong>Segnalazioni di arresto anomalo:</strong> Includono versione dell'app, hash del dispositivo, tipo e testo dell'errore, stack trace e righe di log. Gli indirizzi email, gli indirizzi IP e i nomi di cartelle utente nei percorsi dei file vengono mascherati prima della memorizzazione. Conservati per un massimo di 90 giorni.",
          "<strong>Trasferimenti internazionali:</strong> Firebase Authentication è gestito da Google dai data center negli Stati Uniti. Per la verifica degli acquisti, RevenueCat elabora i tuoi dati negli Stati Uniti (AWS); questo trasferimento è disciplinato dalle Clausole Contrattuali Standard. I dati di Firestore, Cloud Functions e Cloud KMS vengono elaborati su server in Europa (europe-west1). Base giuridica per i trasferimenti dalla Turchia ai sensi dell'art. 9 della legge KVKK: [BASE GIURIDICA: DA COMPILARE A CURA DELL'AVVOCATO].",
          "<strong>Email di assistenza:</strong> Elaborata tramite Google Groups (gruppo utenti) ed è soggetta alle <a href='https://policies.google.com/privacy?hl=en'>Norme sulla privacy</a> e ai <a href='https://policies.google.com/terms?hl=en'>Termini</a> di Google. I messaggi sono conservati nell'archivio del gruppo."
        ]],
        ["h", "7. I tuoi diritti (GDPR e KVKK)"],
        ["p", "Ai sensi del GDPR e della normativa applicabile hai il diritto di sapere se trattiamo i tuoi dati, di accedervi, di rettificarli e di richiederne la cancellazione. Per esercitare tali diritti, scrivi a nahideck-support@googlegroups.com."],
        ["h", "Allegato A: Categorie di dati e fornitori di servizi (dettagli tecnici)"],
        ["table", ["Categoria di dati", "Informazioni raccolte", "Fornitore del servizio", "Finalità"], [
          ["<strong>Account utente</strong>", "Indirizzo email, nome visualizzato, ID utente Firebase (UID)", "Google Firebase Authentication", "Accesso e verifica della titolarità della licenza Pro. Facoltativo; il piano gratuito può essere utilizzato senza accedere."],
          ["<strong>Licenza e associazione</strong>", "ID smartphone generato casualmente, ID PC, UID", "Google Cloud Firestore e Cloud KMS", "Applicazione della regola di utilizzo corretto (1 smartphone + 1 PC) e firma dei token di licenza."],
          ["<strong>Acquisti e abbonamenti</strong>", "Token di ordine/acquisto di Google Play, App User ID di RevenueCat, stato dei diritti", "Google Play Billing e RevenueCat", "Elaborazione e verifica di acquisti e rinnovi Pro."],
          ["<strong>Telemetria di utilizzo e layout (facoltativa)</strong>", "ID di installazione casuale, layout della griglia (tipi di widget, posizioni, dimensioni), preferenza del tema, livello del piano", "Google Cloud Firestore (anonymous_layouts)", "Comprensione dei widget e layout più diffusi per migliorare l'interfaccia. <strong>Non contiene dati personali, testo o dettagli dell'account.</strong>"],
          ["<strong>Dati locali dell'estensione</strong>", "Stato multimediale della scheda attiva del browser (titolo del brano, artista, stato di riproduzione)", "Esclusivamente browser locale e applicazione PC", "Visualizzazione dei file multimediali web su smartphone e PC. Mai inviati al cloud."],
          ["<strong>Verifica dell'applicazione</strong>", "Nome del pacchetto, certificato di firma dell'app e risultato di integrità del dispositivo", "Google Play Integrity (Google)", "Verifica che l'applicazione sia stata installata da Google Play e sia in esecuzione su un dispositivo affidabile; prevenzione di abusi. Google non condivide questi dati con terze parti."],
          ["<strong>Segnalazioni di arresto anomalo (facoltative)</strong>", "Versione dell'app, hash del dispositivo, tipo e testo dell'errore, stack trace e righe di log (indirizzi email e IP mascherati)", "Google Cloud Functions e Firestore (Europa); email di supporto tramite Google Groups", "Analisi e risoluzione degli arresti anomali. Inviate solo previa tua conferma."]
        ]],
        ["card", [["p", "<strong>Titolare del trattamento:</strong> Kaya Furkan İPEKCİ"], ["p", "<strong>Email di contatto:</strong> nahideck-support@googlegroups.com"], ["p", "<strong>Sito web:</strong> https://nahideck.github.io"]]],
      ]
    },
    delete: {
      title: "Richiesta di cancellazione di account e dati",
      blocks: [
        ["p", "Se desideri eliminare definitivamente il tuo account NahiDeck e tutti i dati a esso associati, puoi utilizzare uno dei metodi seguenti."],
        ["h", "Metodo 1: Eliminazione dall'app (consigliato)"],
        ["ol", [
          "Apri l'app <strong>NahiDeck</strong> sul tuo dispositivo Android.",
          "Accedi a <strong>Impostazioni</strong> dal dock laterale (o dal menu in alto).",
          "Apri la sezione <strong>Account</strong>.",
          "Scorri fino in fondo e tocca <strong>\"Elimina il mio account\"</strong>.",
          "Conferma nella finestra di dialogo.",
          "Il tuo record utente su Firebase, i dispositivi associati e i record di licenza sul cloud vengono eliminati in modo permanente."
        ]],
        ["p", "<em>L'eliminazione dell'account richiede per motivi di sicurezza un accesso effettuato negli ultimi 5 minuti. Se si verifica un errore, esegui il logout, accedi nuovamente e riprova.</em>"],
        ["p", "<em>Nota: L'eliminazione dell'account non rimuove il backup dell'applicazione su Google Drive. Eliminalo personalmente dalle impostazioni di Google Drive (Google Drive > Impostazioni > Gestisci app).</em>"],
        ["h", "Metodo 2: Richiesta di eliminazione via email"],
        ["p", "Se non riesci ad accedere all'applicazione o l'hai disinstallata, invia la tua richiesta via email:"],
        ["card", [
          ["p", "<strong>Email di supporto:</strong> nahideck-support@googlegroups.com"],
          ["p", "<strong>Oggetto:</strong> <code>Richiesta di cancellazione account e dati NahiDeck</code>"],
          ["p", "<strong>Informazioni richieste:</strong>"],
          ["ul", ["L'indirizzo email dell'account Google utilizzato per accedere a NahiDeck.", "<em>(Facoltativo)</em> Numero d'ordine Google Play o riferimento dell'abbonamento RevenueCat."]]
        ]],
        ["p", "Dopo aver verificato la tua identità, il tuo account e i record cloud associati verranno eliminati in modo definitivo entro <strong>7 giorni lavorativi</strong>."],
        ["h", "Cosa viene eliminato definitivamente?"],
        ["ul", [
          "Record utente di Firebase Authentication, indirizzo email e dettagli del profilo.",
          "Record di licenza Pro nella raccolta <code>entitlements</code> di Firestore.",
          "Record di smartphone e PC associati nella raccolta <code>devices</code> di Firestore.",
          "Profilo abbonato RevenueCat (<code>app_user_id</code>); eliminato ove tecnicamente possibile. Se non è possibile eliminarlo, segnalacelo via email.",
          "Chiavi di licenza e record di sessione nell'archivio sicuro del dispositivo."
        ]],
        ["h", "Cosa viene conservato?"],
        ["ul", [
          "<strong>Record di fatturazione di Google Play:</strong> Google li conserva per obblighi fiscali e di tutela dei consumatori. NahiDeck non memorizza i dettagli di pagamento.",
          "<strong>Record di audit:</strong> I record delle operazioni di account e licenza contengono un identificatore con hash che non può essere collegato direttamente alla tua identità e vengono eliminati automaticamente entro 90 giorni.",
          "<strong>Segnalazioni di arresto anomalo:</strong> Vengono eliminate automaticamente entro 90 giorni."
        ]],
        ["danger", [
          ["h3", "Importante: annulla l'abbonamento attivo"],
          ["p", "L'eliminazione dell'account <strong>non annulla automaticamente</strong> un abbonamento sottoscritto tramite Google Play. Per evitare addebiti futuri, annullalo prima di eliminare il tuo account:"],
          ["ol", [
            "Apri <strong>Google Play Store</strong> sul tuo dispositivo Android.",
            "Tocca l'icona del profilo > <strong>Pagamenti e abbonamenti</strong> > <strong>Abbonamenti</strong>.",
            "Seleziona <strong>NahiDeck</strong> e tocca <strong>\"Annulla abbonamento\"</strong>."
          ]]
        ]]
      ]
    }
  },

  // AWAITING_NATIVE_SPEAKER_REVIEW
  pl: {
    privacy: {
      title: "Polityka prywatności NahiDeck",
      updated: "25 października 2026",
      blocks: [
        ["p", "NahiDeck („my”, „nasz” lub „usługa”) przykłada dużą wagę do ochrony prywatności swoich użytkowników i bezpieczeństwa danych osobowych. Niniejsza polityka obejmuje <strong>aplikację NahiDeck na system Android</strong>, <strong>klienta NahiDeck na system Windows</strong> oraz <strong>rozszerzenie przeglądarki internetowej (NahiDeck Connect)</strong>."],
        ["h", "W skrócie"],
        ["ul", [
          "<strong>Co zbieramy:</strong> Szczegóły konta (opcjonalnie), rekordy licencji Pro i parowania urządzeń, opcjonalne anonimowe dane o użytkowaniu oraz raporty o awariach, które zdecydujesz się przesłać.",
          "<strong>Gdzie są przetwarzane:</strong> W Europie (Firestore, Cloud Functions). Logowanie (Firebase Authentication) i weryfikacja zakupów (RevenueCat) są przetwarzane w Stanach Zjednoczonych; podstawa tego transferu została opisana poniżej.",
          "<strong>Jak długo przechowujemy:</strong> Dzienniki techniczne przez 30 dni, rejestry audytu i awarii przez 90 dni, anonimowe rejestry układów przez 180 dni. Usunięcie konta usuwa dane konta.",
          "<strong>Twoje prawa:</strong> Możesz zażądać dostępu, sprostowania i usunięcia. Możesz usunąć swoje konto w aplikacji lub na stronie usuwania konta.",
          "<strong>Raporty o awariach:</strong> Wysyłane tylko za Twoim potwierdzeniem. Twoja opcjonalna notatka i e-mail kontaktowy są dołączane; notatka jest zapisywana w pierwotnej formie, a adresy e-mail i IP są maskowane."
        ]],
        ["h", "1. Administrator danych i kontakt"],
        ["p", "Zgodnie z RODO i obowiązującymi przepisami o ochronie danych administratorem danych jest:"],
        ["h", "2. Komunikacja lokalna (brak zależności od chmury)"],
        ["p", "NahiDeck działa bezpośrednio między Twoim telefonem z systemem Android a komputerem z systemem Windows przez lokalne Wi-Fi, kabel USB lub Bluetooth Low Energy (BLE):"],
        ["ul", [
          "<strong>Polecenia multimedialne i audio:</strong> Naciśnięcia klawiszy, zmiany głośności i polecenia multimedialne są przesyłane w sieci lokalnej. Nie są wysyłane do serwerów zewnętrznych.",
          "<strong>Makra komputerowe:</strong> Skróty i niestandardowe akcje są uruchamiane i przetwarzane na Twoim komputerze.",
          "<strong>Szyfrowanie:</strong> Połączenie lokalne jest chronione przez lokalnie generowane certyfikaty TLS i mechanizm TOFU (Trust On First Use) z przypinaniem odcisków palców."
        ]],
        ["h", "3. Co zbieramy i jak to wykorzystujemy"],
        ["p", "Kategorie danych, dostawcy usług oraz cele zostały szczegółowo opisane w tabeli w Załączniku A na końcu tej strony."],
        ["h", "4. Kopia zapasowa w chmurze (Dysk Google)"],
        ["p", "Opcjonalna kopia zapasowa na Dysku Google pozwala zapisać układy ekranu, profile i preferencje:"],
        ["ul", [
          "<strong>Gdzie jest przechowywana:</strong> Wyłącznie w prywatnym folderze danych aplikacji na Twoim Dysku Google (drive.appdata). Nigdy nie jest przesyłana ani hostowana na serwerach NahiDeck lub stron trzecich.",
          "<strong>Co zawiera:</strong> Układy ekranu, profile, preferencje wizualne i opcjonalne definicje akcji PC. Klucze tajne urządzenia, klucze parowania i hasła do kont nigdy nie są dołączane.",
          "<strong>Całkowicie odseparowane od telemetrii:</strong> Dane kopii zapasowej nigdy nie są odczytywane ani używane do analiz."
        ]],
        ["h", "5. Dane, których nigdy nie zbieramy"],
        ["ul", [
          "<strong>Lokalizacja:</strong> Usługi GPS i lokalizacyjne nie są nigdy używane. Uprawnienie skanowania Bluetooth w systemie Android służy wyłącznie do wykrywania urządzeń w pobliżu.",
          "<strong>Pliki osobiste:</strong> Nie uzyskujemy dostępu do zdjęć, filmów, dokumentów ani nagrań głosowych.",
          "<strong>Kontakty:</strong> Nie uzyskujemy dostępu do listy kontaktów.",
          "<strong>Identyfikatory sprzętowe:</strong> Nie zbieramy numerów IMEI, adresów MAC ani numerów seryjnych sprzętu. Zamiast nich używane są losowo generowane identyfikatory."
        ]],
        ["h", "6. Przechowywanie i usuwanie"],
        ["ul", [
          "<strong>Dane konta i licencji:</strong> Usuwane trwale na żądanie, w aplikacji przez Ustawienia > Konto > \"Usuń konto\" lub na stronie usuwania konta w naszej witrynie.",
          "<strong>Telemetria:</strong> Wycofanie zgody w Ustawienia > Prywatność powoduje natychmiastowe usunięcie dotychczasowego rekordu. Aktywne rekordy wygasają automatycznie w ciągu maksymalnie 180 dni (TTL).",
          "<strong>Dzienniki techniczne serwera:</strong> Dzienniki żądań infrastruktury są przechowywane przez maksymalnie 30 dni.",
          "<strong>Rejestry licencji i audytu:</strong> Rejestry operacji na koncie i licencji zawierają jednokierunkowy skrót (hash) Twojego identyfikatora użytkownika i są przechowywane przez maksymalnie 90 dni.",
          "<strong>Raporty o awariach:</strong> Zawierają wersję aplikacji, skrót urządzenia, typ i treść błędu, zrzut stosu oraz wiersze dziennika. Adresy e-mail, adresy IP i nazwy folderów użytkownika w ścieżkach plików są maskowane przed zapisaniem. Przechowywane przez maksymalnie 90 dni.",
          "<strong>Transfery międzynarodowe:</strong> Usługa Firebase Authentication jest prowadzona przez firmę Google w centrach danych w Stanach Zjednoczonych. W celu weryfikacji zakupów RevenueCat przetwarza dane w Stanach Zjednoczonych (AWS); transfer ten opiera się na Standardowych Klauzulach Umownych. Dane Firestore, Cloud Functions i Cloud KMS są przetwarzane na serwerach w Europie (europe-west1). Podstawa prawna transferu z Turcji na mocy art. 9 KVKK: [PODSTAWA PRAWNA: DO UZUPEŁNIENIA PRZEZ PRAWNIKA].",
          "<strong>E-mail wsparcia:</strong> Przetwarzany za pośrednictwem Google Groups (grupa konsumencka) i podlega <a href='https://policies.google.com/privacy?hl=en'>Polityce prywatności</a> oraz <a href='https://policies.google.com/terms?hl=en'>Warunkom korzystania z usług</a> firmy Google. Wiadomości są przechowywane w archiwum grupy."
        ]],
        ["h", "7. Twoje prawa (RODO i KVKK)"],
        ["p", "Zgodnie z RODO i obowiązującym prawem masz prawo do uzyskania informacji, czy przetwarzamy Twoje dane, dostępu do nich, ich sprostowania oraz żądania ich usunięcia. Aby skorzystać z tych praw, napisz na adres nahideck-support@googlegroups.com."],
        ["h", "Załącznik A: Kategorie danych i dostawcy usług (szczegóły techniczne)"],
        ["table", ["Kategoria danych", "Zbierane informacje", "Dostawca usługi", "Cel"], [
          ["<strong>Konto użytkownika</strong>", "Adres e-mail, nazwa wyświetlana, identyfikator użytkownika Firebase (UID)", "Google Firebase Authentication", "Logowanie i weryfikacja posiadania licencji Pro. Opcjonalne; z planu bezpłatnego można korzystać bez logowania."],
          ["<strong>Licencja i parowanie</strong>", "Losowo wygenerowany identyfikator telefonu, identyfikator PC, UID", "Google Cloud Firestore i Cloud KMS", "Egzekwowanie zasady dozwolonego użytku (1 telefon + 1 PC) i podpisywanie tokenów licencyjnych."],
          ["<strong>Zakupy i subskrypcje</strong>", "Token zamówienia/zakupu Google Play, identyfikator użytkownika RevenueCat (App User ID), stan uprawnień", "Google Play Billing i RevenueCat", "Przetwarzanie i weryfikacja zakupów oraz odnowień licencji Pro."],
          ["<strong>Telemetria użytkowania i układów (opcjonalnie)</strong>", "Losowy identyfikator instalacji, układ siatki (typy widżetów, pozycje, rozmiary), wybór motywu, poziom planu", "Google Cloud Firestore (anonymous_layouts)", "Analiza popularnych widżetów i układów w celu ulepszania interfejsu. <strong>Nie zawiera danych osobowych, tekstu ani danych konta.</strong>"],
          ["<strong>Lokalne dane rozszerzenia</strong>", "Stan multimediów aktywnej karty przeglądarki (tytuł utworu, wykonawca, stan odtwarzania)", "Tylko lokalna przeglądarka i aplikacja PC", "Wyświetlanie multimediów internetowych na telefonie i komputerze. Nigdy nie są wysyłane do chmury."],
          ["<strong>Weryfikacja aplikacji</strong>", "Nazwa pakietu, certyfikat podpisu aplikacji i wynik integralności urządzenia", "Google Play Integrity (Google)", "Weryfikacja, czy aplikacja została zainstalowana z Google Play i działa na zaufanym urządzeniu; zapobieganie nadużyciom. Google nie udostępnia tych danych stronom trzecim."],
          ["<strong>Raporty o awariach (opcjonalnie)</strong>", "Wersja aplikacji, skrót urządzenia, typ i treść błędu, zrzut stosu i wiersze dziennika (adresy e-mail i IP są maskowane)", "Google Cloud Functions i Firestore (Europa); e-mail wsparcia przez Google Groups", "Analizowanie i naprawianie awarii. Wysyłane wyłącznie za Twoim potwierdzeniem."]
        ]],
        ["card", [["p", "<strong>Administrator danych:</strong> Kaya Furkan İPEKCİ"], ["p", "<strong>E-mail kontaktowy:</strong> nahideck-support@googlegroups.com"], ["p", "<strong>Strona internetowa:</strong> https://nahideck.github.io"]]],
      ]
    },
    delete: {
      title: "Wniosek o usunięcie konta i danych",
      blocks: [
        ["p", "Jeśli chcesz trwale usunąć swoje konto NahiDeck i wszystkie powiązane z nim dane, możesz skorzystać z jednej z poniższych metod."],
        ["h", "Metoda 1: Usunięcie w aplikacji (zalecane)"],
        ["ol", [
          "Otwórz aplikację <strong>NahiDeck</strong> na urządzeniu z systemem Android.",
          "Przejdź do <strong>Ustawień</strong> z bocznego docka (lub górnego menu).",
          "Otwórz sekcję <strong>Konto</strong>.",
          "Przewiń na sam dół i dotknij <strong>\"Usuń moje konto\"</strong>.",
          "Potwierdź operację w oknie dialogowym.",
          "Twój rekord użytkownika w usłudze Firebase, sparowane urządzenia i rekordy licencji w chmurze zostaną trwale usunięte."
        ]],
        ["p", "<em>Ze względów bezpieczeństwa usunięcie konta wymaga zalogowania w ciągu ostatnich 5 minut. W przypadku błędu wyloguj się, zaloguj ponownie i spróbuj jeszcze raz.</em>"],
        ["p", "<em>Uwaga: Usunięcie konta nie powoduje automatycznego usunięcia kopii zapasowej aplikacji z Dysku Google. Musisz usunąć ją samodzielnie w ustawieniach Dysku Google (Dysk Google > Ustawienia > Zarządzaj aplikacjami).</em>"],
        ["h", "Metoda 2: Wniosek o usunięcie drogą mailową"],
        ["p", "Jeśli nie masz dostępu do aplikacji lub została ona odinstalowana, prześlij swój wniosek pocztą elektroniczną:"],
        ["card", [
          ["p", "<strong>E-mail wsparcia:</strong> nahideck-support@googlegroups.com"],
          ["p", "<strong>Temat:</strong> <code>Wniosek o usunięcie konta i danych NahiDeck</code>"],
          ["p", "<strong>Wymagane informacje:</strong>"],
          ["ul", ["Adres e-mail konta Google używanego do logowania w NahiDeck.", "<em>(Opcjonalnie)</em> Numer zamówienia Google Play lub identyfikator subskrypcji RevenueCat."]]
        ]],
        ["p", "Po zweryfikowaniu Twojej tożsamości Twoje konto i powiązane rekordy w chmurze zostaną trwale usunięte w ciągu <strong>7 dni roboczych</strong>."],
        ["h", "Co zostaje trwale usunięte?"],
        ["ul", [
          "Rekord użytkownika w Firebase Authentication, adres e-mail i dane profilu.",
          "Rekord licencji Pro w kolekcji <code>entitlements</code> w usłudze Firestore.",
          "Rekordy sparowanych telefonów i komputerów w kolekcji <code>devices</code> w usłudze Firestore.",
          "Profil subskrybenta w RevenueCat (<code>app_user_id</code>); usuwany tam, gdzie jest to technicznie możliwe. Jeśli usunięcie nie jest możliwe, poinformuj nas o tym mailowo.",
          "Klucze licencyjne i rekordy sesji w bezpiecznej pamięci urządzenia."
        ]],
        ["h", "Co zostaje zachowane?"],
        ["ul", [
          "<strong>Rekordy rozliczeniowe Google Play:</strong> Firma Google przechowuje je ze względów podatkowych i przepisów konsumenckich. NahiDeck nie przechowuje danych dotyczących płatności.",
          "<strong>Rejestry audytu:</strong> Rejestry operacji na koncie i licencji zawierają zhaszowany identyfikator, którego nie można bezpośrednio powiązać z Twoją tożsamością, i są usuwane automatycznie w ciągu 90 dni.",
          "<strong>Raporty o awariach:</strong> Są usuwane automatycznie w ciągu 90 dni."
        ]],
        ["danger", [
          ["h3", "Ważne: anuluj aktywną subskrypcję"],
          ["p", "Usunięcie konta <strong>nie powoduje automatycznego anulowania</strong> subskrypcji rozpoczętej przez Google Play. Aby uniknąć opłat w przyszłości, anuluj ją przed usunięciem konta:"],
          ["ol", [
            "Otwórz <strong>Sklep Google Play</strong> na urządzeniu z systemem Android.",
            "Dotknij ikony profilu > <strong>Płatności i subskrypcje</strong> > <strong>Subskrypcje</strong>.",
            "Wybierz <strong>NahiDeck</strong> i dotknij <strong>\"Anuluj subskrypcję\"</strong>."
          ]]
        ]]
      ]
    }
  },

  // AWAITING_NATIVE_SPEAKER_REVIEW
  ru: {
    privacy: {
      title: "Политика конфиденциальности NahiDeck",
      updated: "25 октября 2026 г.",
      blocks: [
        ["p", "NahiDeck («мы», «приложение» или «сервис») уделяет особое внимание защите конфиденциальности пользователей и безопасности персональных данных. Настоящая политика распространяется на <strong>Android-приложение NahiDeck</strong>, <strong>десктопный клиент NahiDeck для Windows</strong> и <strong>расширение для веб-браузеров (NahiDeck Connect)</strong>."],
        ["h", "Кратко"],
        ["ul", [
          "<strong>Что мы собираем:</strong> Данные аккаунта (необязательно), записи лицензии Pro и сопряжения устройств, необязательные анонимные данные об использовании и отчеты о сбоях, которые вы решите отправить.",
          "<strong>Где обрабатываются данные:</strong> В Европе (Firestore, Cloud Functions). Вход в систему (Firebase Authentication) и проверка покупок (RevenueCat) обрабатываются в США; основания для передачи описаны ниже.",
          "<strong>Сроки хранения:</strong> Технические журналы — 30 дней, записи аудита и отчеты о сбоях — 90 дней, анонимные записи макетов — 180 дней. При удалении аккаунта все его данные удаляются.",
          "<strong>Ваши права:</strong> Вы можете запросить доступ, исправление и удаление данных. Удалить аккаунт можно в приложении или на странице удаления аккаунта.",
          "<strong>Отчеты о сбоях:</strong> Отправляются только с вашего подтверждения. Необязательный комментарий и контактный адрес эл. почты включаются в отчет; комментарий сохраняется как есть, а адреса эл. почты и IP-адреса маскируются."
        ]],
        ["h", "1. Оператор данных и контакты"],
        ["p", "В соответствии с GDPR и применимым законодательством о защите персональных данных оператором данных является:"],
        ["h", "2. Локальное взаимодействие (без зависимости от облака)"],
        ["p", "NahiDeck работает напрямую между вашим Android-телефоном и компьютером с Windows по локальной сети Wi-Fi, через USB-кабель или Bluetooth Low Energy (BLE):"],
        ["ul", [
          "<strong>Медиа- и аудиокоманды:</strong> Нажатия клавиш, регулировка громкости и медиакоманды передаются внутри локальной сети и не отправляются на внешние серверы.",
          "<strong>Макросы для ПК:</strong> Горячие клавиши и пользовательские действия выполняются и обрабатываются на вашем компьютере.",
          "<strong>Шифрование:</strong> Локальное соединение защищено локально сгенерированными TLS-сертификатами и фиксацией отпечатков TOFU (доверие при первом использовании)."
        ]],
        ["h", "3. Какие данные мы собираем и как их используем"],
        ["p", "Категории данных, поставщики услуг и цели подробно приведены в таблице в Приложении А в конце этой страницы."],
        ["h", "4. Резервное копирование в облако (Google Диск)"],
        ["p", "Необязательное резервное копирование на Google Диск позволяет сохранять макеты экранов, профили и настройки:"],
        ["ul", [
          "<strong>Где хранится:</strong> Исключительно в скрытой папке данных приложения на вашем личном Google Диске (drive.appdata). Данные никогда не передаются и не хранятся на серверах NahiDeck или третьих лиц.",
          "<strong>Содержимое копии:</strong> Макеты экранов, профили, визуальные настройки и параметры действий для ПК. Секретные ключи устройств, ключи сопряжения и пароли учетных записей никогда не включаются в копию.",
          "<strong>Полная изоляция от телеметрии:</strong> Данные резервной копии никогда не считываются и не используются в аналитических целях."
        ]],
        ["h", "5. Данные, которые мы никогда не собираем"],
        ["ul", [
          "<strong>Местоположение:</strong> GPS и службы геолокации никогда не используются. Разрешение Android на сканирование Bluetooth необходимо исключительно для поиска устройств поблизости.",
          "<strong>Личные файлы:</strong> Мы не получаем доступ к фотографиям, видеозаписям, документам или голосовым записям.",
          "<strong>Контакты:</strong> Мы не запрашиваем доступ к списку контактов.",
          "<strong>Аппаратные идентификаторы:</strong> Мы не собираем IMEI, MAC-адреса или серийные номера оборудования. Вместо них используются случайно сгенерированные идентификаторы."
        ]],
        ["h", "6. Хранение и удаление данных"],
        ["ul", [
          "<strong>Данные аккаунта и лицензии:</strong> Безвозвратно удаляются по запросу через «Настройки > Аккаунт > Удалить аккаунт» в приложении или на странице удаления аккаунта на нашем сайте.",
          "<strong>Телеметрия:</strong> При отзыве согласия в «Настройки > Конфиденциальность» текущая запись немедленно удаляется. Активные записи автоматически удаляются по истечении 180 дней (TTL).",
          "<strong>Технические журналы серверов:</strong> Журналы запросов инфраструктуры хранятся не более 30 дней.",
          "<strong>Записи о лицензиях и аудите:</strong> Записи операций с аккаунтом и лицензиями содержат необратимый хеш идентификатора пользователя и хранятся не более 90 дней.",
          "<strong>Отчеты о сбоях:</strong> Содержат версию приложения, хеш устройства, тип и текст ошибки, трассировку стека и строки журнала. Адреса эл. почты, IP-адреса и имена пользовательских папок в путях к файлам маскируются перед сохранением. Хранятся не более 90 дней.",
          "<strong>Международная передача данных:</strong> Сервис Firebase Authentication обслуживается компанией Google в дата-центрах США. Для проверки покупок RevenueCat обрабатывает данные в США (AWS); передача защищена Стандартными договорными условиями. Данные Firestore, Cloud Functions и Cloud KMS обрабатываются на серверах в Европе (europe-west1). Правовые основания для передачи из Турции согласно ст. 9 KVKK: [ПРАВОВОЕ ОСНОВАНИЕ: ЗАПОЛНЯЕТСЯ ЮРИСТОМ].",
          "<strong>Электронная почта поддержки:</strong> Обрабатывается через Google Groups (пользовательская группа) в соответствии с <a href='https://policies.google.com/privacy?hl=en'>Политикой конфиденциальности</a> и <a href='https://policies.google.com/terms?hl=en'>Условиями использования</a> Google. Сообщения сохраняются в архиве группы."
        ]],
        ["h", "7. Ваши права (GDPR и KVKK)"],
        ["p", "В соответствии с GDPR и применимым законодательством вы имеете право узнать, обрабатываем ли мы ваши данные, запросить доступ к ним, их исправление или удаление. Для реализации этих прав свяжитесь с нами по адресу nahideck-support@googlegroups.com."],
        ["h", "Приложение А: Категории данных и поставщики услуг (технические подробности)"],
        ["table", ["Категория данных", "Собираемая информация", "Поставщик услуг", "Цель"], [
          ["<strong>Учетная запись пользователя</strong>", "Адрес эл. почты, отображаемое имя, идентификатор пользователя Firebase (UID)", "Google Firebase Authentication", "Вход в систему и проверка наличия лицензии Pro. Необязательно; бесплатный тариф доступен без входа."],
          ["<strong>Лицензия и сопряжение</strong>", "Случайно сгенерированный идентификатор телефона, идентификатор ПК, UID", "Google Cloud Firestore и Cloud KMS", "Обеспечение правила добросовестного использования (1 телефон + 1 ПК) и подписание токенов лицензии."],
          ["<strong>Покупки и подписки</strong>", "Токен заказа/покупки Google Play, App User ID в RevenueCat, статус прав доступа", "Google Play Billing и RevenueCat", "Обработка и проверка покупок и продлений лицензии Pro."],
          ["<strong>Телеметрия использования и макетов (необязательно)</strong>", "Случайный идентификатор установки, структура сетки (типы виджетов, позиции, размеры), тема оформления, тариф", "Google Cloud Firestore (anonymous_layouts)", "Анализ популярных виджетов и макетов для улучшения интерфейса. <strong>Не содержит персональных данных, текста или информации об аккаунте.</strong>"],
          ["<strong>Локальные данные расширения</strong>", "Состояние медиа в активной вкладке браузера (название трека, исполнитель, статус воспроизведения)", "Только локальный браузер и приложение для ПК", "Отображение воспроизводимого контента на телефоне и ПК. Никогда не отправляется в облако."],
          ["<strong>Проверка подлинности приложения</strong>", "Имя пакета, сертификат подписи приложения и результат проверки целостности устройства", "Google Play Integrity (Google)", "Подтверждение того, что приложение установлено из Google Play и запущено на надежном устройстве; предотвращение злоупотреблений. Google не передает эти данные третьим лицам."],
          ["<strong>Отчеты о сбоях (необязательно)</strong>", "Версия приложения, хеш устройства, тип и текст ошибки, трассировка стека и строки журнала (эл. почта и IP маскируются)", "Google Cloud Functions и Firestore (Европа); поддержка через Google Groups", "Анализ и устранение сбоев. Отправляется только с вашего согласия."]
        ]],
        ["card", [["p", "<strong>Оператор данных:</strong> Kaya Furkan İPEKCİ"], ["p", "<strong>Контактный адрес:</strong> nahideck-support@googlegroups.com"], ["p", "<strong>Веб-сайт:</strong> https://nahideck.github.io"]]],
      ]
    },
    delete: {
      title: "Запрос на удаление аккаунта и данных",
      blocks: [
        ["p", "Если вы хотите безвозвратно удалить свой аккаунт NahiDeck и все связанные с ним данные, воспользуйтесь одним из следующих способов."],
        ["h", "Способ 1: Удаление в приложении (рекомендуется)"],
        ["ol", [
          "Откройте приложение <strong>NahiDeck</strong> на устройстве Android.",
          "Перейдите в <strong>Настройки</strong> из бокового меню (или верхнего меню).",
          "Откройте раздел <strong>Аккаунт</strong>.",
          "Прокрутите страницу вниз и нажмите <strong>«Удалить мой аккаунт»</strong>.",
          "Подтвердите действие в открывшемся окне.",
          "Ваша учетная запись Firebase, сопряженные устройства и записи лицензий в облаке будут удалены безвозвратно."
        ]],
        ["p", "<em>В целях безопасности удаление аккаунта возможно только при условии входа в систему в течение последних 5 минут. При возникновении ошибки выйдите из аккаунта, войдите снова и повторите попытку.</em>"],
        ["p", "<em>Примечание: Удаление аккаунта не удаляет резервную копию приложения на Google Диске. Удалите ее самостоятельно в настройках Google Диска (Google Диск > Настройки > Управление приложениями).</em>"],
        ["h", "Способ 2: Запрос на удаление по электронной почте"],
        ["p", "Если у вас нет доступа к приложению или вы его удалили, направьте запрос по электронной почте:"],
        ["card", [
          ["p", "<strong>Электронная почта поддержки:</strong> nahideck-support@googlegroups.com"],
          ["p", "<strong>Тема:</strong> <code>Запрос на удаление аккаунта и данных NahiDeck</code>"],
          ["p", "<strong>Необходимые данные:</strong>"],
          ["ul", ["Адрес эл. почты аккаунта Google, использованный для входа в NahiDeck.", "<em>(Необязательно)</em> Номер заказа в Google Play или идентификатор подписки в RevenueCat."]]
        ]],
        ["p", "После подтверждения вашей личности аккаунт и связанные облачные записи будут безвозвратно удалены в течение <strong>7 рабочих дней</strong>."],
        ["h", "Что удаляется безвозвратно?"],
        ["ul", [
          "Учетная запись Firebase Authentication, адрес электронной почты и данные профиля.",
          "Запись лицензии Pro в коллекции <code>entitlements</code> в Firestore.",
          "Записи сопряженных телефонов и ПК в коллекции <code>devices</code> в Firestore.",
          "Профиль подписчика в RevenueCat (<code>app_user_id</code>); удаляется при наличии технической возможности. Если удаление невозможно, сообщите нам об этом по эл. почте.",
          "Лицензионные ключи и записи сессий в защищенном хранилище устройства."
        ]],
        ["h", "Что сохраняется?"],
        ["ul", [
          "<strong>Платежные записи Google Play:</strong> Сохраняются Google в соответствии с налоговым и потребительским законодательством. NahiDeck не хранит платежные реквизиты.",
          "<strong>Записи аудита:</strong> Записи операций с аккаунтом и лицензиями содержат хешированный идентификатор, который нельзя напрямую связать с вами, и автоматически удаляются в течение 90 дней.",
          "<strong>Отчеты о сбоях:</strong> Автоматически удаляются в течение 90 дней."
        ]],
        ["danger", [
          ["h3", "Важно: отмените действующую подписку"],
          ["p", "Удаление аккаунта <strong>не отменяет автоматически</strong> подписку, оформленную через Google Play. Во избежание дальнейших списаний отмените ее перед удалением аккаунта:"],
          ["ol", [
            "Откройте <strong>Google Play Маркет</strong> на устройстве Android.",
            "Нажмите на значок профиля > <strong>Платежи и подписки</strong> > <strong>Подписки</strong>.",
            "Выберите <strong>NahiDeck</strong> и нажмите <strong>«Отменить подписку»</strong>."
          ]]
        ]]
      ]
    }
  },

  // AWAITING_NATIVE_SPEAKER_REVIEW
  id: {
    privacy: {
      title: "Kebijakan Privasi NahiDeck",
      updated: "25 Oktober 2026",
      blocks: [
        ["p", "NahiDeck (\"kami\", \"aplikasi\", atau \"layanan\") menghargai privasi penggunanya dan perlindungan data pribadi. Kebijakan ini mencakup <strong>aplikasi Android NahiDeck</strong>, <strong>klien desktop Windows NahiDeck</strong>, dan <strong>ekstensi browser web (NahiDeck Connect)</strong>."],
        ["h", "Secara singkat"],
        ["ul", [
          "<strong>Apa yang kami kumpulkan:</strong> Detail akun (opsional), catatan lisensi Pro dan pemasangan perangkat, data penggunaan anonim opsional, serta laporan kerusakan yang Anda pilih untuk dikirim.",
          "<strong>Di mana data diproses:</strong> Di Eropa (Firestore, Cloud Functions). Masuk akun (Firebase Authentication) dan verifikasi pembelian (RevenueCat) diproses di Amerika Serikat; dasar transfer dijelaskan di bawah.",
          "<strong>Berapa lama kami menyimpannya:</strong> Log teknis selama 30 hari, catatan audit dan laporan kerusakan selama 90 hari, catatan tata letak anonim selama 180 hari. Menghapus akun Anda akan menghapus seluruh data akun.",
          "<strong>Hak-hak Anda:</strong> Anda dapat meminta akses, perbaikan, dan penghapusan data. Anda dapat menghapus akun Anda di aplikasi atau di halaman Penghapusan Akun.",
          "<strong>Laporan kerusakan:</strong> Hanya dikirim jika Anda mengonfirmasi. Catatan opsional dan email kontak Anda disertakan; catatan disimpan apa adanya, sedangkan alamat email dan IP disamarkan."
        ]],
        ["h", "1. Pengendali data dan kontak"],
        ["p", "Berdasarkan GDPR dan peraturan perlindungan data yang berlaku, pengendali data adalah:"],
        ["h", "2. Komunikasi lokal (tanpa ketergantungan cloud)"],
        ["p", "NahiDeck bekerja langsung antara ponsel Android dan komputer Windows Anda melalui Wi-Fi lokal, kabel USB, atau Bluetooth Low Energy (BLE):"],
        ["ul", [
          "<strong>Perintah media dan audio:</strong> Penekanan tombol, perubahan volume, dan perintah media berjalan di jaringan lokal Anda. Tidak dikirim ke server luar.",
          "<strong>Makro komputer:</strong> Pintasan dan tindakan kustom dijalankan serta diproses di komputer Anda.",
          "<strong>Enkripsi:</strong> Koneksi lokal dilindungi oleh sertifikat TLS yang dibuat secara lokal dan penyematan sidik jari TOFU (Trust On First Use)."
        ]],
        ["h", "3. Data apa yang kami kumpulkan dan bagaimana kami menggunakannya"],
        ["p", "Kategori data, penyedia layanan, dan tujuan penggunaan dirinci dalam tabel di Lampiran A di bagian bawah halaman ini."],
        ["h", "4. Pencadangan cloud (Google Drive)"],
        ["p", "Pencadangan Google Drive opsional memungkinkan Anda menyimpan tata letak layar, profil, dan preferensi:"],
        ["ul", [
          "<strong>Tempat penyimpanan:</strong> Hanya di folder data aplikasi pribadi di Google Drive Anda sendiri (drive.appdata). Tidak pernah dikirim atau dihosting di server NahiDeck maupun pihak ketiga.",
          "<strong>Isi cadangan:</strong> Tata letak layar, profil, preferensi visual, dan definisi tindakan PC opsional. Rahasia perangkat, kunci pemasangan, dan kata sandi akun tidak pernah disertakan.",
          "<strong>Terpisah dari telemetri:</strong> Data cadangan tidak pernah dibaca atau digunakan untuk analitik."
        ]],
        ["h", "5. Data yang tidak pernah kami kumpulkan"],
        ["ul", [
          "<strong>Lokasi:</strong> Layanan GPS dan lokasi tidak pernah digunakan. Izin pemindaian Bluetooth Android hanya digunakan untuk menemukan perangkat di sekitar.",
          "<strong>Berkas pribadi:</strong> Kami tidak mengakses foto, video, dokumen, atau rekaman suara.",
          "<strong>Kontak:</strong> Kami tidak mengakses daftar kontak Anda.",
          "<strong>Pengenal perangkat keras:</strong> Kami tidak mengumpulkan IMEI, alamat MAC, atau nomor seri perangkat keras. Pengenal acak digunakan sebagai gantinya."
        ]],
        ["h", "6. Retensi dan penghapusan"],
        ["ul", [
          "<strong>Data akun dan lisensi:</strong> Dihapus secara permanen atas permintaan, melalui Pengaturan > Akun > \"Hapus Akun\" di aplikasi, atau halaman penghapusan akun di situs web kami.",
          "<strong>Telemetri:</strong> Menarik persetujuan di Pengaturan > Privasi akan segera menghapus catatan yang ada. Catatan aktif kedaluwarsa secara otomatis dalam 180 hari (TTL).",
          "<strong>Log server teknis:</strong> Log permintaan infrastruktur disimpan hingga 30 hari.",
          "<strong>Catatan lisensi dan audit:</strong> Catatan operasi akun dan lisensi berisi hash satu arah dari pengenal pengguna Anda dan disimpan hingga 90 hari.",
          "<strong>Laporan kerusakan:</strong> Berisi versi aplikasi, hash perangkat, jenis dan teks kesalahan, pelacakan tumpukan, dan baris log. Alamat email, alamat IP, dan nama folder pengguna dalam jalur berkas disamarkan sebelum disimpan. Disimpan hingga 90 hari.",
          "<strong>Transfer internasional:</strong> Firebase Authentication dioperasikan oleh Google dari pusat data di Amerika Serikat. Untuk verifikasi pembelian, RevenueCat memproses data Anda di Amerika Serikat (AWS); transfer ini dilindungi oleh Klausul Kontrak Standar. Data Firestore, Cloud Functions, dan Cloud KMS diproses di server di Eropa (europe-west1). Dasar hukum transfer dari Turki berdasarkan Pasal 9 KVKK: [DASAR HUKUM: AKAN DIISI OLEH PENGACARA].",
          "<strong>Email dukungan:</strong> Diproses melalui Google Groups (grup konsumen) dan tunduk pada <a href='https://policies.google.com/privacy?hl=en'>Kebijakan Privasi</a> serta <a href='https://policies.google.com/terms?hl=en'>Persyaratan Layanan</a> Google. Pesan disimpan dalam arsip grup."
        ]],
        ["h", "7. Hak Anda (GDPR dan KVKK)"],
        ["p", "Berdasarkan GDPR dan hukum yang berlaku, Anda berhak mengetahui apakah kami memproses data Anda, mengaksesnya, memperbaikinya, dan meminta penghapusannya. Untuk menggunakan hak-hak ini, hubungi kami di nahideck-support@googlegroups.com."],
        ["h", "Lampiran A: Kategori data dan penyedia layanan (detail teknis)"],
        ["table", ["Kategori data", "Informasi yang dikumpulkan", "Penyedia layanan", "Tujuan"], [
          ["<strong>Akun pengguna</strong>", "Alamat email, nama tampilan, ID pengguna Firebase (UID)", "Google Firebase Authentication", "Masuk akun dan memeriksa kepemilikan lisensi Pro. Opsional; paket gratis dapat digunakan tanpa masuk."],
          ["<strong>Lisensi dan pemasangan</strong>", "ID perangkat ponsel acak, ID PC, UID", "Google Cloud Firestore dan Cloud KMS", "Menegakkan aturan penggunaan wajar 1 ponsel + 1 PC dan menandatangani token lisensi."],
          ["<strong>Pembelian dan langganan</strong>", "Token pesanan/pembelian Google Play, App User ID RevenueCat, status hak", "Google Play Billing dan RevenueCat", "Memproses dan memverifikasi pembelian serta pembaruan Pro."],
          ["<strong>Telemetri penggunaan dan tata letak (opsional)</strong>", "ID instalasi acak, tata letak kisi (jenis widget, posisi, ukuran), pilihan tema, tingkat paket", "Google Cloud Firestore (anonymous_layouts)", "Memahami widget dan tata letak populer untuk meningkatkan antarmuka. <strong>Tidak memuat data pribadi, teks, atau detail akun.</strong>"],
          ["<strong>Data ekstensi lokal</strong>", "Status media dari tab browser yang aktif (judul trek, artis, status pemutaran)", "Hanya browser lokal dan aplikasi PC", "Menampilkan media web di ponsel dan PC Anda. Tidak pernah dikirim ke cloud."],
          ["<strong>Verifikasi aplikasi</strong>", "Nama paket, sertifikat penandatanganan aplikasi, dan hasil integritas perangkat", "Google Play Integrity (Google)", "Memverifikasi bahwa aplikasi dipasang dari Google Play dan berjalan di perangkat tepercaya; mencegah penyalahgunaan. Google tidak membagikan data ini kepada pihak ketiga."],
          ["<strong>Laporan kerusakan (opsional)</strong>", "Versi aplikasi, hash perangkat, jenis dan teks kesalahan, stack trace, dan baris log (email dan IP disamarkan)", "Google Cloud Functions dan Firestore (Eropa); email dukungan melalui Google Groups", "Menganalisis dan memperbaiki kerusakan. Hanya dikirim dengan persetujuan Anda."]
        ]],
        ["card", [["p", "<strong>Pengendali data:</strong> Kaya Furkan İPEKCİ"], ["p", "<strong>Email kontak:</strong> nahideck-support@googlegroups.com"], ["p", "<strong>Situs web:</strong> https://nahideck.github.io"]]],
      ]
    },
    delete: {
      title: "Permintaan penghapusan akun dan data",
      blocks: [
        ["p", "Jika Anda ingin menghapus akun NahiDeck dan semua data terkait secara permanen, Anda dapat menggunakan salah satu metode di bawah ini."],
        ["h", "Metode 1: Hapus di dalam aplikasi (disarankan)"],
        ["ol", [
          "Buka aplikasi <strong>NahiDeck</strong> di perangkat Android Anda.",
          "Buka <strong>Pengaturan</strong> dari dock samping (atau menu atas).",
          "Buka bagian <strong>Akun</strong>.",
          "Gulir ke bawah dan ketuk <strong>\"Hapus Akun Saya\"</strong>.",
          "Konfirmasi pada dialog yang muncul.",
          "Catatan pengguna Firebase, perangkat yang dipasangkan, dan catatan lisensi cloud Anda akan dihapus secara permanen."
        ]],
        ["p", "<em>Penghapusan akun memerlukan masuk dalam 5 menit terakhir untuk alasan keamanan. Jika terjadi kesalahan, keluar, masuk kembali, dan coba lagi.</em>"],
        ["p", "<em>Catatan: Menghapus akun Anda tidak menghapus cadangan aplikasi di Google Drive. Hapus secara mandiri dari pengaturan Google Drive (Google Drive > Pengaturan > Kelola aplikasi).</em>"],
        ["h", "Metode 2: Minta penghapusan melalui email"],
        ["p", "Jika Anda tidak dapat mengakses aplikasi atau telah mencopot pemasangannya, kirimkan permintaan Anda melalui email:"],
        ["card", [
          ["p", "<strong>Email dukungan:</strong> nahideck-support@googlegroups.com"],
          ["p", "<strong>Subjek:</strong> <code>Permintaan Penghapusan Akun dan Data NahiDeck</code>"],
          ["p", "<strong>Informasi yang diperlukan:</strong>"],
          ["ul", ["Alamat email akun Google yang Anda gunakan untuk masuk ke NahiDeck.", "<em>(Opsional)</em> Nomor pesanan Google Play atau referensi langganan RevenueCat."]]
        ]],
        ["p", "Setelah kami memverifikasi identitas Anda, akun dan catatan cloud terkait akan dihapus secara permanen dalam waktu <strong>7 hari kerja</strong>."],
        ["h", "Apa yang dihapus secara permanen?"],
        ["ul", [
          "Catatan pengguna Firebase Authentication, alamat email, dan detail profil.",
          "Catatan lisensi Pro di koleksi <code>entitlements</code> Firestore.",
          "Catatan ponsel dan PC yang dipasangkan di koleksi <code>devices</code> Firestore.",
          "Profil pelanggan RevenueCat (<code>app_user_id</code>); dihapus jika memungkinkan secara teknis. Jika tidak dapat dihapus, laporkan kepada kami melalui email.",
          "Kunci lisensi dan catatan sesi di penyimpanan aman perangkat Anda."
        ]],
        ["h", "Apa yang disimpan?"],
        ["ul", [
          "<strong>Catatan penagihan Google Play:</strong> Google menyimpannya karena alasan pajak dan hukum konsumen. NahiDeck tidak menyimpan detail pembayaran.",
          "<strong>Catatan audit:</strong> Catatan operasi akun dan lisensi berisi pengenal yang di-hash yang tidak dapat dikaitkan langsung dengan identitas Anda, dan dihapus otomatis dalam 90 hari.",
          "<strong>Laporan kerusakan:</strong> Dihapus otomatis dalam 90 hari."
        ]],
        ["danger", [
          ["h3", "Penting: batalkan langganan aktif Anda"],
          ["p", "Menghapus akun Anda <strong>tidak membatalkan secara otomatis</strong> langganan yang Anda mulai melalui Google Play. Untuk menghindari tagihan di masa mendatang, batalkan sebelum menghapus akun Anda:"],
          ["ol", [
            "Buka <strong>Google Play Store</strong> di perangkat Android Anda.",
            "Ketuk ikon profil Anda > <strong>Pembayaran & langganan</strong> > <strong>Langganan</strong>.",
            "Pilih <strong>NahiDeck</strong> dan ketuk <strong>\"Batalkan langganan\"</strong>."
          ]]
        ]]
      ]
    }
  },

  // AWAITING_NATIVE_SPEAKER_REVIEW
  vi: {
    privacy: {
      title: "Chính sách quyền riêng tư của NahiDeck",
      updated: "25 tháng 10 năm 2026",
      blocks: [
        ["p", "NahiDeck (\"chúng tôi\", \"ứng dụng\", hoặc \"dịch vụ\") coi trọng quyền riêng tư của người dùng và bảo vệ dữ liệu cá nhân. Chính sách này áp dụng cho <strong>ứng dụng Android NahiDeck</strong>, <strong>ứng dụng máy tính Windows NahiDeck</strong> và <strong>tiện ích mở rộng trình duyệt web (NahiDeck Connect)</strong>."],
        ["h", "Tóm tắt"],
        ["ul", [
          "<strong>Những gì chúng tôi thu thập:</strong> Thông tin tài khoản (tùy chọn), dữ liệu bản quyền Pro và ghép nối thiết bị, dữ liệu sử dụng ẩn danh tùy chọn và báo cáo sự cố bạn chọn gửi.",
          "<strong>Nơi xử lý dữ liệu:</strong> Tại Châu Âu (Firestore, Cloud Functions). Đăng nhập (Firebase Authentication) và xác minh mua hàng (RevenueCat) được xử lý tại Hoa Kỳ; căn cứ pháp lý chuyển giao dữ liệu được nêu bên dưới.",
          "<strong>Thời gian lưu giữ:</strong> Nhật ký kỹ thuật 30 ngày, dữ liệu kiểm toán và sự cố 90 ngày, dữ liệu bố cục ẩn danh 180 ngày. Khi xóa tài khoản, toàn bộ dữ liệu tài khoản sẽ bị xóa.",
          "<strong>Quyền của bạn:</strong> Bạn có quyền yêu cầu truy cập, chỉnh sửa và xóa dữ liệu. Bạn có thể xóa tài khoản trong ứng dụng hoặc tại trang Xóa tài khoản.",
          "<strong>Báo cáo sự cố:</strong> Chỉ được gửi khi bạn xác nhận. Ghi chú và email liên hệ tùy chọn sẽ được gửi kèm; ghi chú được lưu nguyên văn, còn email và địa chỉ IP sẽ được che dấu."
        ]],
        ["h", "1. Bên kiểm soát dữ liệu và liên hệ"],
        ["p", "Theo GDPR và luật bảo vệ dữ liệu hiện hành, bên kiểm soát dữ liệu là:"],
        ["h", "2. Giao tiếp cục bộ (không phụ thuộc đám mây)"],
        ["p", "NahiDeck hoạt động trực tiếp giữa điện thoại Android và máy tính Windows của bạn qua Wi-Fi cục bộ, cáp USB hoặc Bluetooth Low Energy (BLE):"],
        ["ul", [
          "<strong>Lệnh điều khiển đa phương tiện và âm thanh:</strong> Các thao tác phím, chỉnh âm lượng và lệnh phát nhạc chỉ truyền trong mạng nội bộ của bạn. Không gửi đến máy chủ bên ngoài.",
          "<strong>Macro trên máy tính:</strong> Phím tắt và hành động tùy chỉnh được chạy và xử lý trực tiếp trên máy tính của bạn.",
          "<strong>Mã hóa:</strong> Kết nối cục bộ được bảo vệ bằng chứng chỉ TLS tạo cục bộ và ghim dấu vân tay chứng chỉ TOFU (Trust On First Use)."
        ]],
        ["h", "3. Dữ liệu chúng tôi thu thập và mục đích sử dụng"],
        ["p", "Các danh mục dữ liệu, nhà cung cấp dịch vụ và mục đích được liệt kê chi tiết trong bảng tại Phụ lục A ở cuối trang này."],
        ["h", "4. Sao lưu đám mây (Google Drive)"],
        ["p", "Tính năng sao lưu Google Drive tùy chọn cho phép bạn lưu bố cục màn hình, cấu hình và tùy chọn:"],
        ["ul", [
          "<strong>Nơi lưu trữ:</strong> Chỉ lưu trong thư mục dữ liệu ứng dụng riêng tư trên Google Drive của chính bạn (drive.appdata). Không bao giờ được gửi hay lưu trữ trên máy chủ NahiDeck hoặc bên thứ ba.",
          "<strong>Nội dung sao lưu:</strong> Bố cục màn hình, hồ sơ cấu hình, tùy chọn giao diện và định nghĩa hành động PC tùy chọn. Mã bảo mật thiết bị, khóa ghép nối và mật khẩu tài khoản không bao giờ được đưa vào bản sao lưu.",
          "<strong>Tách biệt hoàn toàn với đo lường từ xa:</strong> Dữ liệu sao lưu không bao giờ được đọc hoặc sử dụng cho mục đích phân tích."
        ]],
        ["h", "5. Dữ liệu chúng tôi không bao giờ thu thập"],
        ["ul", [
          "<strong>Vị trí:</strong> GPS và dịch vụ vị trí không bao giờ được sử dụng. Quyền quét Bluetooth của Android chỉ dùng để tìm các thiết bị lân cận.",
          "<strong>Tệp cá nhân:</strong> Chúng tôi không truy cập ảnh, video, tài liệu hoặc bản ghi âm.",
          "<strong>Danh bạ:</strong> Chúng tôi không truy cập danh bạ của bạn.",
          "<strong>Mã nhận dạng phần cứng:</strong> Không thu thập IMEI, địa chỉ MAC hay số sê-ri phần cứng. Mã định danh ngẫu nhiên được sử dụng thay thế."
        ]],
        ["h", "6. Lưu giữ và xóa dữ liệu"],
        ["ul", [
          "<strong>Dữ liệu tài khoản và bản quyền:</strong> Được xóa vĩnh viễn theo yêu cầu, qua Cài đặt > Tài khoản > \"Xóa tài khoản\" trong ứng dụng, hoặc tại trang xóa tài khoản trên trang web của chúng tôi.",
          "<strong>Dữ liệu đo lường từ xa:</strong> Rút lại sự đồng ý trong Cài đặt > Quyền riêng tư sẽ xóa bản ghi hiện có ngay lập tức. Các bản ghi đang hoạt động sẽ tự động hết hạn trong vòng 180 ngày (TTL).",
          "<strong>Nhật ký máy chủ kỹ thuật:</strong> Nhật ký yêu cầu hạ tầng được lưu giữ tối đa 30 ngày.",
          "<strong>Dữ liệu bản quyền và kiểm toán:</strong> Bản ghi hoạt động tài khoản và bản quyền chứa mã băm một chiều của mã định danh người dùng và được lưu tối đa 90 ngày.",
          "<strong>Báo cáo sự cố:</strong> Bao gồm phiên bản ứng dụng, mã băm thiết bị, loại và nội dung lỗi, stack trace và các dòng nhật ký. Địa chỉ email, địa chỉ IP và tên thư mục người dùng trong đường dẫn tệp được che dấu trước khi lưu. Được giữ tối đa 90 ngày.",
          "<strong>Chuyển giao quốc tế:</strong> Firebase Authentication được Google vận hành từ các trung tâm dữ liệu tại Hoa Kỳ. Để xác minh giao dịch mua hàng, RevenueCat xử lý dữ liệu của bạn tại Hoa Kỳ (AWS); việc chuyển giao này tuân thủ các Điều khoản hợp đồng tiêu chuẩn. Dữ liệu Firestore, Cloud Functions và Cloud KMS được xử lý trên máy chủ tại Châu Âu (europe-west1). Căn cứ pháp lý chuyển giao từ Thổ Nhĩ Kỳ theo Điều 9 KVKK: [CĂN CỨ PHÁP LÝ: DO LUẬT SƯ ĐIỀN].",
          "<strong>Email hỗ trợ:</strong> Được xử lý qua Google Groups (nhóm người dùng) và tuân theo <a href='https://policies.google.com/privacy?hl=en'>Chính sách quyền riêng tư</a> cùng <a href='https://policies.google.com/terms?hl=en'>Điều khoản dịch vụ</a> của Google. Thư được lưu trong kho lưu trữ nhóm."
        ]],
        ["h", "7. Quyền của bạn (GDPR và KVKK)"],
        ["p", "Theo GDPR và luật hiện hành, bạn có quyền biết liệu chúng tôi có xử lý dữ liệu của bạn hay không, truy cập, chỉnh sửa và yêu cầu xóa dữ liệu. Để thực hiện các quyền này, vui lòng gửi email tới nahideck-support@googlegroups.com."],
        ["h", "Phụ lục A: Danh mục dữ liệu và nhà cung cấp dịch vụ (chi tiết kỹ thuật)"],
        ["table", ["Danh mục dữ liệu", "Thông tin thu thập", "Nhà cung cấp dịch vụ", "Mục đích"], [
          ["<strong>Tài khoản người dùng</strong>", "Địa chỉ email, tên hiển thị, ID người dùng Firebase (UID)", "Google Firebase Authentication", "Đăng nhập và kiểm tra quyền sở hữu bản quyền Pro. Tùy chọn; gói miễn phí có thể sử dụng mà không cần đăng nhập."],
          ["<strong>Bản quyền và ghép nối</strong>", "ID thiết bị điện thoại ngẫu nhiên, ID máy tính, UID", "Google Cloud Firestore và Cloud KMS", "Thực thi quy định sử dụng hợp lý 1 điện thoại + 1 máy tính và ký mã xác thực bản quyền."],
          ["<strong>Giao dịch mua và đăng ký</strong>", "Mã đơn hàng/mua hàng Google Play, ID người dùng ứng dụng RevenueCat, trạng thái quyền lợi", "Google Play Billing và RevenueCat", "Xử lý và xác minh các giao dịch mua và gia hạn Pro."],
          ["<strong>Đo lường sử dụng và bố cục (tùy chọn)</strong>", "Mã cài đặt ngẫu nhiên, bố cục lưới (loại widget, vị trí, kích thước), lựa chọn chủ đề, gói dịch vụ", "Google Cloud Firestore (anonymous_layouts)", "Tìm hiểu các widget và bố cục phổ biến để cải thiện giao diện. <strong>Không chứa dữ liệu cá nhân, văn bản hay chi tiết tài khoản.</strong>"],
          ["<strong>Dữ liệu tiện ích cục bộ</strong>", "Trạng thái đa phương tiện của tab trình duyệt đang hoạt động (tên bài hát, nghệ sĩ, trạng thái phát)", "Chỉ trên trình duyệt cục bộ và ứng dụng máy tính", "Hiển thị nội dung phát đa phương tiện trên điện thoại và máy tính. Không bao giờ gửi lên đám mây."],
          ["<strong>Xác minh ứng dụng</strong>", "Tên gói, chứng chỉ ký ứng dụng và kết quả tính toàn vẹn của thiết bị", "Google Play Integrity (Google)", "Xác minh ứng dụng được cài đặt từ Google Play và chạy trên thiết bị đáng tin cậy; ngăn chặn hành vi lạm dụng. Google không chia sẻ dữ liệu này cho bên thứ ba."],
          ["<strong>Báo cáo sự cố (tùy chọn)</strong>", "Phiên bản ứng dụng, mã băm thiết bị, loại và nội dung lỗi, stack trace và dòng nhật ký (email và IP được che dấu)", "Google Cloud Functions và Firestore (Châu Âu); hỗ trợ email qua Google Groups", "Phân tích và khắc phục sự cố. Chỉ gửi khi có sự đồng ý của bạn."]
        ]],
        ["card", [["p", "<strong>Bên kiểm soát dữ liệu:</strong> Kaya Furkan İPEKCİ"], ["p", "<strong>Email liên hệ:</strong> nahideck-support@googlegroups.com"], ["p", "<strong>Trang web:</strong> https://nahideck.github.io"]]],
      ]
    },
    delete: {
      title: "Yêu cầu xóa tài khoản và dữ liệu",
      blocks: [
        ["p", "Nếu bạn muốn xóa vĩnh viễn tài khoản NahiDeck và tất cả dữ liệu liên quan, bạn có thể sử dụng một trong các phương thức dưới đây."],
        ["h", "Phương thức 1: Xóa trong ứng dụng (khuyến nghị)"],
        ["ol", [
          "Mở ứng dụng <strong>NahiDeck</strong> trên thiết bị Android của bạn.",
          "Vào <strong>Cài đặt</strong> từ thanh dock bên cạnh (hoặc menu trên cùng).",
          "Mở mục <strong>Tài khoản</strong>.",
          "Cuộn xuống cuối và nhấn vào <strong>\"Xóa tài khoản của tôi\"</strong>.",
          "Xác nhận trong hộp thoại hiển thị.",
          "Bản ghi người dùng Firebase, các thiết bị đã ghép nối và dữ liệu bản quyền đám mây sẽ bị xóa vĩnh viễn."
        ]],
        ["p", "<em>Vì lý do bảo mật, việc xóa tài khoản yêu cầu bạn đã đăng nhập trong vòng 5 phút gần nhất. Nếu gặp lỗi, hãy đăng xuất, đăng nhập lại và thử lại.</em>"],
        ["p", "<em>Lưu ý: Xóa tài khoản không xóa bản sao lưu ứng dụng trên Google Drive. Bạn cần tự xóa trong phần cài đặt Google Drive (Google Drive > Cài đặt > Quản lý ứng dụng).</em>"],
        ["h", "Phương thức 2: Yêu cầu xóa qua email"],
        ["p", "Nếu bạn không thể truy cập ứng dụng hoặc đã gỡ cài đặt, vui lòng gửi yêu cầu qua email:"],
        ["card", [
          ["p", "<strong>Email hỗ trợ:</strong> nahideck-support@googlegroups.com"],
          ["p", "<strong>Tiêu đề:</strong> <code>Yêu cầu xóa tài khoản và dữ liệu NahiDeck</code>"],
          ["p", "<strong>Thông tin cần thiết:</strong>"],
          ["ul", ["Địa chỉ email tài khoản Google bạn dùng để đăng nhập vào NahiDeck.", "<em>(Tùy chọn)</em> Mã đơn hàng Google Play hoặc mã đăng ký gói RevenueCat."]]
        ]],
        ["p", "Sau khi chúng tôi xác minh danh tính của bạn, tài khoản và các bản ghi đám mây liên quan sẽ được xóa vĩnh viễn trong vòng <strong>7 ngày làm việc</strong>."],
        ["h", "Những gì sẽ bị xóa vĩnh viễn?"],
        ["ul", [
          "Hồ sơ người dùng Firebase Authentication, địa chỉ email và thông tin hồ sơ.",
          "Bản ghi bản quyền Pro trong bộ sưu tập <code>entitlements</code> của Firestore.",
          "Bản ghi các thiết bị điện thoại và máy tính đã ghép nối trong bộ sưu tập <code>devices</code> của Firestore.",
          "Hồ sơ người đăng ký RevenueCat (<code>app_user_id</code>); được xóa nếu khả thi về mặt kỹ thuật. Nếu không thể xóa, vui lòng thông báo cho chúng tôi qua email.",
          "Khóa bản quyền và bản ghi phiên làm việc trong bộ lưu trữ an toàn của thiết bị."
        ]],
        ["h", "Những gì được giữ lại?"],
        ["ul", [
          "<strong>Dữ liệu thanh toán Google Play:</strong> Được Google lưu giữ vì nghĩa vụ thuế và luật người tiêu dùng. NahiDeck không lưu trữ thông tin thanh toán.",
          "<strong>Dữ liệu kiểm toán:</strong> Các bản ghi hoạt động tài khoản và bản quyền chứa mã định danh đã băm không thể liên kết trực tiếp với bạn, và sẽ tự động xóa sau 90 ngày.",
          "<strong>Báo cáo sự cố:</strong> Tự động xóa sau 90 ngày."
        ]],
        ["danger", [
          ["h3", "Quan trọng: hủy gói đăng ký đang hoạt động"],
          ["p", "Xóa tài khoản <strong>không tự động hủy</strong> gói đăng ký bạn đã kích hoạt qua Google Play. Để tránh bị trừ tiền trong tương lai, hãy hủy gói đăng ký trước khi xóa tài khoản:"],
          ["ol", [
            "Mở <strong>Google Play Store</strong> trên thiết bị Android.",
            "Nhấn vào biểu tượng hồ sơ của bạn > <strong>Thanh toán và gói thuê bao</strong> > <strong>Gói thuê bao</strong>.",
            "Chọn <strong>NahiDeck</strong> và nhấn <strong>\"Hủy gói thuê bao\"</strong>."
          ]]
        ]]
      ]
    }
  },

  // AWAITING_NATIVE_SPEAKER_REVIEW
  ja: {
    privacy: {
      title: "NahiDeck プライバシーポリシー",
      updated: "2026年10月25日",
      blocks: [
        ["p", "NahiDeck（以下「当社」、「本アプリ」または「本サービス」）は、ユーザーのプライバシー保護および個人データの保護を重視しています。本ポリシーは、<strong>NahiDeck Androidアプリ</strong>、<strong>NahiDeck Windowsデスクトップクライアント</strong>、および<strong>Webブラウザ拡張機能（NahiDeck Connect）</strong>に適用されます。"],
        ["h", "概要"],
        ["ul", [
          "<strong>収集する情報：</strong>アカウント情報（任意）、Proライセンスおよびデバイスペアリング記録、匿名の利用状況データ（任意）、および送信を選択したクラッシュレポート。",
          "<strong>処理場所：</strong>ヨーロッパ（Firestore、Cloud Functions）。サインイン（Firebase Authentication）および購入検証（RevenueCat）は米国で処理されます。この転送の根拠は下記に記載されています。",
          "<strong>保管期間：</strong>技術ログは30日間、監査およびクラッシュ記録は90日間、匿名レイアウト記録は180日間。アカウントを削除すると、アカウントデータは削除されます。",
          "<strong>お客様の権利：</strong>アクセス、訂正、および削除を要求できます。アカウントはアプリ内またはアカウント削除ページから削除できます。",
          "<strong>クラッシュレポート：</strong>お客様が確認した場合にのみ送信されます。任意のメモおよび連絡先メールアドレスが含まれます。メモは入力された通りに保存され、メールアドレスおよびIPアドレスはマスキングされます。"
        ]],
        ["h", "1. データ管理者および連絡先"],
        ["p", "GDPRおよび適用されるデータ保護法に基づき、データ管理者は以下の通りです："],
        ["h", "2. ローカル通信（クラウド非依存）"],
        ["p", "NahiDeckは、ローカルWi-Fi、USBケーブル、またはBluetooth Low Energy（BLE）を介して、AndroidスマートフォンとWindows PC間で直接動作します："],
        ["ul", [
          "<strong>メディアおよびオーディオコマンド：</strong>キー入力、音量変更、メディアコマンドはローカルネットワーク内を送信され、外部サーバーに送信されることはありません。",
          "<strong>PCマクロ：</strong>ショートカットやカスタムアクションは、お客様のPC上で実行および処理されます。",
          "<strong>暗号化：</strong>ローカル接続は、ローカルで生成されたTLS証明書およびTOFU（初回使用時の信頼）フィンガープリント固定によって保護されます。"
        ]],
        ["h", "3. 収集する情報とその利用目的"],
        ["p", "データカテゴリ、サービスプロバイダー、および利用目的の詳細は、本ページ末尾の別紙Aの表に記載されています。"],
        ["h", "4. クラウドバックアップ（Google ドライブ）"],
        ["p", "オプションのGoogle ドライブバックアップにより、画面レイアウト、プロファイル、設定を保存できます："],
        ["ul", [
          "<strong>保存場所：</strong>お客様ご自身のGoogle ドライブ内にあるアプリ専用フォルダ（drive.appdata）にのみ保存されます。NahiDeckや第三者のサーバーに送信または保存されることはありません。",
          "<strong>バックアップ内容：</strong>画面レイアウト、プロファイル、視覚設定、および任意のPCアクション定義。デバイスシークレット、ペアリングキー、アカウントパスワードが含まれることはありません。",
          "<strong>テレメトリとの完全な分離：</strong>バックアップデータが分析目的で読み取られたり使用されたりすることはありません。"
        ]],
        ["h", "5. 決して収集しない情報"],
        ["ul", [
          "<strong>位置情報：</strong>GPSや位置情報サービスを使用することはありません。AndroidのBluetoothスキャン権限は、近くのデバイスを検出するためにのみ使用されます。",
          "<strong>個人ファイル：</strong>写真、動画、ドキュメント、音声録音にはアクセスしません。",
          "<strong>連絡先：</strong>連絡先リストにはアクセスしません。",
          "<strong>ハードウェア識別子：</strong>IMEI、MACアドレス、ハードウェアシリアル番号は収集しません。代わりにランダムに生成された識別子が使用されます。"
        ]],
        ["h", "6. 保持と削除"],
        ["ul", [
          "<strong>アカウントおよびライセンスデータ：</strong>アプリ内の「設定 > アカウント > アカウントを削除」、または当サイトのアカウント削除ページからのリクエストにより、永久に削除されます。",
          "<strong>テレメトリ：</strong>「設定 > プライバシー」で同意を撤回すると、既存の記録は即座に削除されます。有効な記録は最大180日以内に自動的に有効期限切れ（TTL）となります。",
          "<strong>技術サーバーログ：</strong>インフラストラクチャのリクエストログは最大30日間保持されます。",
          "<strong>ライセンスおよび監査記録：</strong>アカウントおよびライセンス操作の記録には、不可逆ハッシュ化されたユーザーIDが含まれ、最大90日間保持されます。",
          "<strong>クラッシュレポート：</strong>アプリバージョン、デバイスハッシュ、エラーの種類とテキスト、スタックトレース、ログ行が含まれます。ファイルパス内のメールアドレス、IPアドレス、ユーザーフォルダ名は保存前にマスキングされます。最大90日間保持されます。",
          "<strong>国際転送：</strong>Firebase Authenticationは米国のデータセンターからGoogleによって運営されています。購入検証のため、RevenueCatはお客様のデータを米国（AWS）で処理します。この転送は標準契約条項（SCC）によって保護されています。Firestore、Cloud Functions、Cloud KMSのデータはヨーロッパ（europe-west1）のサーバーで処理されます。KVKK第9条に基づくトルコからのデータ転送の法的根拠：[法的根拠：弁護士が記入]。",
          "<strong>サポートメール：</strong>Google Groups（一般消費者向けグループ）を通じて処理され、Googleの<a href='https://policies.google.com/privacy?hl=ja'>プライバシーポリシー</a>および<a href='https://policies.google.com/terms?hl=ja'>利用規約</a>に従います。メッセージはグループのアーカイブに保存されます。"
        ]],
        ["h", "7. お客様の権利（GDPRおよびKVKK）"],
        ["p", "GDPRおよび適用法に基づき、お客様は当社がデータを処理しているかを確認し、アクセスし、訂正し、削除を求める権利を有します。これらの権利を行使するには、nahideck-support@googlegroups.com までお問い合わせください。"],
        ["h", "別紙A：データカテゴリとサービスプロバイダー（技術詳細）"],
        ["table", ["データカテゴリ", "収集する情報", "サービスプロバイダー", "利用目的"], [
          ["<strong>ユーザーアカウント</strong>", "メールアドレス、表示名、FirebaseユーザーID（UID）", "Google Firebase Authentication", "サインインおよびProライセンス所有権の確認。任意であり、無料プランはサインインなしで使用可能です。"],
          ["<strong>ライセンスおよびペアリング</strong>", "ランダム生成されたスマートフォン端末ID、PC ID、UID", "Google Cloud Firestore および Cloud KMS", "「1台のスマホ + 1台のPC」の公平利用ルールの適用およびライセンス署名。"],
          ["<strong>購入およびサブスクリプション</strong>", "Google Play注文/購入トークン、RevenueCat App User ID、エンタイトルメント状態", "Google Play Billing および RevenueCat", "Pro購入および更新の処理と検証。"],
          ["<strong>利用状況およびレイアウトテレメトリ（任意）</strong>", "ランダムなインストールID、グリッドレイアウト（ウィジェット種類、配置、サイズ）、テーマ選択、プラン種別", "Google Cloud Firestore（anonymous_layouts）", "人気のあるウィジェットやレイアウトを分析してUIを改善するため。<strong>個人データ、テキスト、アカウント情報は一切含みません。</strong>"],
          ["<strong>ローカル拡張機能データ</strong>", "アクティブなブラウザタブのメディア状態（曲名、アーティスト、再生状態）", "ローカルブラウザおよびPCアプリのみ", "スマートフォンおよびPC上でウェブメディアを表示するため。クラウドには送信されません。"],
          ["<strong>アプリ検証</strong>", "パッケージ名、アプリ署名証明書、デバイス完全性結果", "Google Play Integrity（Google）", "アプリがGoogle Playからインストールされ、信頼できるデバイスで動作していることを検証し、不正利用を防止するため。Googleはこのデータを第三者と共有しません。"],
          ["<strong>クラッシュレポート（任意）</strong>", "アプリバージョン、デバイスハッシュ、エラーの種類とテキスト、スタックトレース、ログ行（メールアドレスとIPはマスキング）", "Google Cloud Functions および Firestore（ヨーロッパ）；Google Groups経由のサポートメール", "クラッシュの分析と修正。お客様の確認がある場合にのみ送信。"]
        ]],
        ["card", [["p", "<strong>データ管理者：</strong> Kaya Furkan İPEKCİ"], ["p", "<strong>連絡先メールアドレス：</strong> nahideck-support@googlegroups.com"], ["p", "<strong>ウェブサイト：</strong> https://nahideck.github.io"]]],
      ]
    },
    delete: {
      title: "アカウントおよびデータ削除のリクエスト",
      blocks: [
        ["p", "NahiDeckアカウントおよび関連するすべてのデータを永久に削除したい場合は、以下のいずれかの方法をご利用いただけます。"],
        ["h", "方法1：アプリ内で削除（推奨）"],
        ["ol", [
          "Android端末で <strong>NahiDeck</strong> アプリを開きます。",
          "サイドドック（または上部メニュー）から <strong>設定</strong> に移動します。",
          "<strong>アカウント</strong> セクションを開きます。",
          "最下部までスクロールし、<strong>「アカウントを削除」</strong> をタップします。",
          "確認ダイアログで操作を承認します。",
          "Firebaseユーザーレコード、ペアリングされたデバイス、クラウドライセンスレコードが永久に削除されます。"
        ]],
        ["p", "<em>セキュリティ上の理由から、アカウント削除には直近5分以内のサインインが必要です。エラーが発生した場合は、一度サインアウトして再サインイン後、再度お試しください。</em>"],
        ["p", "<em>注：アカウントを削除しても、Google ドライブ内のアプリバックアップは自動削除されません。Google ドライブの設定（Google ドライブ > 設定 > アプリの管理）から手動で削除してください。</em>"],
        ["h", "方法2：メールによる削除リクエスト"],
        ["p", "アプリにアクセスできない場合や既にアンインストールした場合は、メールでリクエストを送信できます："],
        ["card", [
          ["p", "<strong>サポートメール：</strong> nahideck-support@googlegroups.com"],
          ["p", "<strong>件名：</strong> <code>NahiDeck アカウントおよびデータ削除リクエスト</code>"],
          ["p", "<strong>必要な情報：</strong>"],
          ["ul", ["NahiDeckのサインインに使用したGoogleアカウントのメールアドレス。", "<em>（任意）</em> Google Play注文番号またはRevenueCatサブスクリプション参照ID。"]]
        ]],
        ["p", "本人確認の完了後、アカウントおよび関連するクラウド記録は <strong>7営業日以内</strong> に永久削除されます。"],
        ["h", "何が永久に削除されますか？"],
        ["ul", [
          "Firebase Authenticationユーザーレコード、メールアドレス、プロフィール情報。",
          "Firestoreの <code>entitlements</code> コレクション内のProライセンスレコード。",
          "Firestoreの <code>devices</code> コレクション内のペアリングされたスマートフォンおよびPCレコード。",
          "RevenueCat加入者プロファイル（<code>app_user_id</code>）；技術的に可能な場合に削除されます。削除できない場合はメールでお知らせください。",
          "デバイスのセキュアストレージにあるライセンスキーおよびセッション記録。"
        ]],
        ["h", "何が保持されますか？"],
        ["ul", [
          "<strong>Google Play請求記録：</strong>税務および消費者保護法上の要件によりGoogleによって保持されます。NahiDeckは支払い情報を保存しません。",
          "<strong>監査記録：</strong>アカウントおよびライセンス操作の記録には個人を直接特定できないハッシュ化識別子が含まれ、90日以内に自動削除されます。",
          "<strong>クラッシュレポート：</strong>90日以内に自動削除されます。"
        ]],
        ["danger", [
          ["h3", "重要：有効なサブスクリプションを解約してください"],
          ["p", "アカウントを削除しても、Google Playを通じて開始されたサブスクリプションは<strong>自動的に解約されません</strong>。今後の請求を停止するため、アカウント削除前に解約してください："],
          ["ol", [
            "Android端末で <strong>Google Play ストア</strong> を開きます。",
            "プロフィールアイコン > <strong>お支払いと定期購入</strong> > <strong>定期購入</strong> をタップします。",
            "<strong>NahiDeck</strong> を選択し、<strong>「定期購入を解約」</strong> をタップします。"
          ]]
        ]]
      ]
    }
  },

  // AWAITING_NATIVE_SPEAKER_REVIEW
  ko: {
    privacy: {
      title: "NahiDeck 개인정보 처리방침",
      updated: "2026년 10월 25일",
      blocks: [
        ["p", "NahiDeck(\"당사\", \"앱\" 또는 \"서비스\")은 이용자의 개인정보 보호 및 권리 보호를 매우 중요하게 여깁니다. 본 방침은 <strong>NahiDeck Android 앱</strong>, <strong>NahiDeck Windows 데스크톱 클라이언트</strong> 및 <strong>웹 브라우저 확장 프로그램(NahiDeck Connect)</strong>에 적용됩니다."],
        ["h", "요약"],
        ["ul", [
          "<strong>수집 항목:</strong> 계정 정보(선택), Pro 라이선스 및 기기 페어링 기록, 선택적 익명 사용 통계, 사용자가 전송을 선택한 오류 보고서.",
          "<strong>처리 위치:</strong> 유럽(Firestore, Cloud Functions). 로그인(Firebase Authentication) 및 결제 확인(RevenueCat)은 미국에서 처리되며, 해당 국외 이전 근거는 아래에 명시되어 있습니다.",
          "<strong>보관 기간:</strong> 기술 로그 30일, 감사 및 오류 기록 90일, 익명 레이아웃 기록 180일. 계정 삭제 시 계정 데이터는 완전히 삭제됩니다.",
          "<strong>이용자의 권리:</strong> 데이터 열람, 정정 및 삭제를 요청할 수 있습니다. 앱 내 또는 계정 삭제 페이지에서 계정을 직접 삭제할 수 있습니다.",
          "<strong>오류 보고서:</strong> 이용자가 전송을 확인한 경우에만 전달됩니다. 선택적 메모와 연락처 이메일이 포함되며 메모는 작성된 그대로 저장되고 이메일과 IP 주소는 마스킹 처리됩니다."
        ]],
        ["h", "1. 개인정보 처리자 및 연락처"],
        ["p", "GDPR 및 관련 개인정보 보호 법령에 따른 개인정보 처리자는 다음과 같습니다:"],
        ["h", "2. 로컬 통신(클라우드 비의존)"],
        ["p", "NahiDeck은 로컬 Wi-Fi, USB 케이블 또는 저전력 블루투스(BLE)를 통해 Android 스마트폰과 Windows 컴퓨터 간에 직접 작동합니다:"],
        ["ul", [
          "<strong>미디어 및 오디오 명령:</strong> 키 입력, 볼륨 조절 및 미디어 명령은 로컬 네트워크 내에서만 전송되며 외부 서버로 전송되지 않습니다.",
          "<strong>PC 매크로:</strong> 바로가기 및 사용자 지정 동작은 컴퓨터에서 직접 실행 및 처리됩니다.",
          "<strong>암호화:</strong> 로컬 연결은 로컬에서 생성된 TLS 인증서 및 TOFU(Trust On First Use) 지문 고정 방식을 통해 안전하게 보호됩니다."
        ]],
        ["h", "3. 수집하는 정보 및 이용 목적"],
        ["p", "데이터 항목, 서비스 제공자 및 이용 목적은 본 페이지 하단의 부록 A 표에 상세히 설명되어 있습니다."],
        ["h", "4. 클라우드 백업(Google 드라이브)"],
        ["p", "선택적 Google 드라이브 백업 기능을 통해 화면 레이아웃, 프로필 및 환경설정을 저장할 수 있습니다:"],
        ["ul", [
          "<strong>저장 위치:</strong> 이용자 본인의 Google 드라이브 내 앱 전용 비공개 폴더(drive.appdata)에만 저장됩니다. NahiDeck 또는 제3자 서버로 전송되거나 저장되지 않습니다.",
          "<strong>백업 내용:</strong> 화면 레이아웃, 프로필, 시각적 환경설정 및 선택적 PC 동작 정의. 기기 보안 키, 페어링 키 및 계정 비밀번호는 절대 포함되지 않습니다.",
          "<strong>원격 분석과 완전 분리:</strong> 백업 데이터는 분석 목적으로 열람되거나 활용되지 않습니다."
        ]],
        ["h", "5. 절대로 수집하지 않는 정보"],
        ["ul", [
          "<strong>위치 정보:</strong> GPS 및 위치 기반 서비스를 일체 사용하지 않습니다. Android 블루투스 검색 권한은 근처 기기를 탐색하기 위한 용도로만 사용됩니다.",
          "<strong>개인 파일:</strong> 사진, 동영상, 문서 또는 음성 녹음에 접근하지 않습니다.",
          "<strong>연락처:</strong> 주소록 목록에 접근하지 않습니다.",
          "<strong>하드웨어 고유 식별자:</strong> IMEI, MAC 주소 또는 기기 일련번호를 수집하지 않으며, 임의로 생성된 난수 식별자를 사용합니다."
        ]],
        ["h", "6. 보유 및 삭제"],
        ["ul", [
          "<strong>계정 및 라이선스 데이터:</strong> 앱 내 '설정 > 계정 > 계정 삭제' 또는 웹사이트 계정 삭제 페이지의 요청을 통해 영구 삭제됩니다.",
          "<strong>원격 분석 데이터:</strong> '설정 > 개인정보'에서 동의를 철회하면 기존 기록이 즉시 삭제됩니다. 활성 기록은 최대 180일 이내에 자동 만료(TTL)되어 삭제됩니다.",
          "<strong>서버 기술 로그:</strong> 인프라 요청 로그는 최대 30일간 보관됩니다.",
          "<strong>라이선스 및 감사 기록:</strong> 계정 및 라이선스 작업 기록은 일방향 해시 처리된 식별자를 포함하며 최대 90일간 보관됩니다.",
          "<strong>오류 보고서:</strong> 앱 버전, 기기 해시, 오류 유형 및 내용, 스택 추적, 로그 행을 포함합니다. 파일 경로의 이메일 주소, IP 주소 및 사용자 폴더 이름은 저장 전에 마스킹됩니다. 최대 90일간 보관됩니다.",
          "<strong>국외 이전:</strong> Firebase Authentication은 미국 데이터 센터에서 Google에 의해 운영됩니다. 결제 확인을 위해 RevenueCat이 미국(AWS)에서 데이터를 처리하며, 표준계약조항(SCC)을 통해 보호됩니다. Firestore, Cloud Functions 및 Cloud KMS 데이터는 유럽(europe-west1) 서버에서 처리됩니다. KVKK 제9조에 따른 튀르키예 국외 이전 근거: [법적 근거: 법률 대리인 작성 예정].",
          "<strong>지원 이메일:</strong> Google Groups(소비자 그룹)를 통해 처리되며 Google의 <a href='https://policies.google.com/privacy?hl=ko'>개인정보 처리방침</a> 및 <a href='https://policies.google.com/terms?hl=ko'>서비스 약관</a>을 따릅니다. 메시지는 그룹 보관함에 저장됩니다."
        ]],
        ["h", "7. 정보주체의 권리(GDPR 및 KVKK)"],
        ["p", "GDPR 및 관계 법령에 따라 이용자는 개인정보 처리 여부 확인, 열람, 정정 및 삭제를 요구할 권리가 있습니다. 이러한 권리를 행사하려면 nahideck-support@googlegroups.com으로 문의해 주십시오."],
        ["h", "부록 A: 데이터 범주 및 서비스 제공자(기술 세부사항)"],
        ["table", ["데이터 범주", "수집 정보", "서비스 제공자", "이용 목적"], [
          ["<strong>사용자 계정</strong>", "이메일 주소, 표시 이름, Firebase 사용자 ID(UID)", "Google Firebase Authentication", "로그인 및 Pro 라이선스 소유 여부 확인. 선택 사항이며 무료 플랜은 로그인 없이 이용 가능합니다."],
          ["<strong>라이선스 및 페어링</strong>", "임의 생성된 스마트폰 기기 ID, PC ID, UID", "Google Cloud Firestore 및 Cloud KMS", "'스마트폰 1대 + PC 1대' 공정 이용 정책 적용 및 라이선스 토큰 서명."],
          ["<strong>구매 및 구독</strong>", "Google Play 주문/구매 토큰, RevenueCat App User ID, 권한 상태", "Google Play Billing 및 RevenueCat", "Pro 결제 및 구독 갱신 처리와 검증."],
          ["<strong>사용 통계 및 레이아웃(선택)</strong>", "임의 설치 ID, 그리드 레이아웃(위젯 유형, 위치, 크기), 테마 선택, 플랜 등급", "Google Cloud Firestore(anonymous_layouts)", "인기 있는 위젯과 레이아웃을 파악하여 UI 개선. <strong>개인정보, 텍스트 또는 계정 정보는 일체 포함되지 않습니다.</strong>"],
          ["<strong>로컬 확장 프로그램 데이터</strong>", "현재 활성 브라우저 탭의 미디어 재생 정보(곡 제목, 아티스트, 재생 상태)", "로컬 브라우저 및 PC 앱 전용", "스마트폰과 PC에서 웹 미디어를 표시. 클라우드로 절대 전송되지 않습니다."],
          ["<strong>앱 무결성 검증</strong>", "패키지 이름, 앱 서명 인증서 및 기기 무결성 판정 결과", "Google Play Integrity (Google)", "앱이 Google Play에서 정상 설치되었으며 신뢰할 수 있는 기기에서 실행 중인지 검증하고 악용을 방지. Google은 이 데이터를 제3자와 공유하지 않습니다."],
          ["<strong>오류 보고서(선택)</strong>", "앱 버전, 기기 해시, 오류 유형 및 텍스트, 스택 추적 및 로그 행(이메일 및 IP 마스킹)", "Google Cloud Functions 및 Firestore(유럽); Google Groups 지원 이메일", "앱 오류 분석 및 수정. 사용자 동의 시에만 전송됩니다."]
        ]],
        ["card", [["p", "<strong>개인정보 처리자:</strong> Kaya Furkan İPEKCİ"], ["p", "<strong>문의 이메일:</strong> nahideck-support@googlegroups.com"], ["p", "<strong>웹사이트:</strong> https://nahideck.github.io"]]],
      ]
    },
    delete: {
      title: "계정 및 데이터 삭제 요청",
      blocks: [
        ["p", "NahiDeck 계정 및 관련된 모든 데이터를 영구적으로 삭제하려면 아래 방법 중 하나를 이용할 수 있습니다."],
        ["h", "방법 1: 앱 내에서 삭제(권장)"],
        ["ol", [
          "Android 기기에서 <strong>NahiDeck</strong> 앱을 엽니다.",
          "사이드 독(또는 상단 메뉴)에서 <strong>설정</strong>으로 이동합니다.",
          "<strong>계정</strong> 항목을 엽니다.",
          "화면 맨 아래로 스크롤하여 <strong>\"내 계정 삭제\"</strong>를 누릅니다.",
          "표시되는 확인 창에서 삭제를 승인합니다.",
          "Firebase 사용자 기록, 페어링된 기기 및 클라우드 라이선스 기록이 영구적으로 삭제됩니다."
        ]],
        ["p", "<em>보안을 위해 계정 삭제는 최근 5분 이내에 로그인한 상태여야 합니다. 오류가 발생하면 로그아웃 후 다시 로그인하여 시도해 주십시오.</em>"],
        ["p", "<em>참고: 계정을 삭제하더라도 Google 드라이브의 앱 백업은 자동 삭제되지 않습니다. Google 드라이브 설정(Google 드라이브 > 설정 > 앱 관리)에서 직접 삭제해 주셔야 합니다.</em>"],
        ["h", "방법 2: 이메일을 통한 삭제 요청"],
        ["p", "앱에 접근할 수 없거나 앱을 이미 삭제한 경우 이메일로 요청할 수 있습니다:"],
        ["card", [
          ["p", "<strong>지원 이메일:</strong> nahideck-support@googlegroups.com"],
          ["p", "<strong>제목:</strong> <code>NahiDeck 계정 및 데이터 삭제 요청</code>"],
          ["p", "<strong>필수 정보:</strong>"],
          ["ul", ["NahiDeck 로그인에 사용한 Google 계정 이메일 주소.", "<em>(선택)</em> Google Play 주문 번호 또는 RevenueCat 구독 참조 번호."]]
        ]],
        ["p", "본인 확인이 완료되면 계정 및 관련 클라우드 기록은 영업일 기준 <strong>7일 이내</strong>에 영구적으로 삭제됩니다."],
        ["h", "영구 삭제되는 항목은 무엇인가요?"],
        ["ul", [
          "Firebase Authentication 사용자 기록, 이메일 주소 및 프로필 세부정보.",
          "Firestore <code>entitlements</code> 컬렉션의 Pro 라이선스 기록.",
          "Firestore <code>devices</code> 컬렉션의 페어링된 스마트폰 및 PC 기록.",
          "RevenueCat 구독자 프로필(<code>app_user_id</code>); 기술적으로 가능한 경우 삭제됩니다. 삭제가 불가능한 경우 이메일로 안내해 드립니다.",
          "기기 보안 저장소에 보관된 라이선스 키 및 세션 기록."
        ]],
        ["h", "보관되는 항목은 무엇인가요?"],
        ["ul", [
          "<strong>Google Play 결제 기록:</strong> 세법 및 소비자 보호 법령상의 의무로 인해 Google에서 보관합니다. NahiDeck은 결제 세부정보를 저장하지 않습니다.",
          "<strong>감사 기록:</strong> 계정 및 라이선스 작업 기록은 이용자의 신원과 직접 연결할 수 없는 해시 식별자를 포함하며 90일 이내에 자동 삭제됩니다.",
          "<strong>오류 보고서:</strong> 90일 이내에 자동 삭제됩니다."
        ]],
        ["danger", [
          ["h3", "중요: 활성 구독을 먼저 취소하세요"],
          ["p", "계정을 삭제하더라도 Google Play를 통해 결제된 구독은 <strong>자동으로 취소되지 않습니다</strong>. 향후 요금 청구를 방지하려면 계정을 삭제하기 전에 먼저 구독을 취소하세요:"],
          ["ol", [
            "Android 기기에서 <strong>Google Play 스토어</strong>를 엽니다.",
            "프로필 아이콘 > <strong>결제 및 정기 결제</strong> > <strong>정기 결제</strong>를 누릅니다.",
            "<strong>NahiDeck</strong>을 선택하고 <strong>\"정기 결제 취소\"</strong>를 누릅니다."
          ]]
        ]]
      ]
    }
  },

  // AWAITING_NATIVE_SPEAKER_REVIEW
  hi: {
    privacy: {
      title: "NahiDeck गोपनीयता नीति",
      updated: "25 अक्टूबर 2026",
      blocks: [
        ["p", "NahiDeck (\"हम\", \"हमारा\" या \"ऐप\") अपने उपयोगकर्ताओं की गोपनीयता और व्यक्तिगत डेटा की सुरक्षा को अत्यधिक महत्व देता है। यह नीति <strong>NahiDeck Android ऐप</strong>, <strong>NahiDeck Windows डेस्कटॉप क्लाइंट</strong> और <strong>वेब ब्राउज़र एक्सटेंशन (NahiDeck Connect)</strong> को कवर करती है।"],
        ["h", "संक्षेप में"],
        ["ul", [
          "<strong>हम क्या एकत्र करते हैं:</strong> खाता विवरण (वैकल्पिक), Pro लाइसेंस और डिवाइस पेयरिंग रिकॉर्ड, वैकल्पिक अनाम उपयोग डेटा, और क्रैश रिपोर्ट जो आप भेजने का विकल्प चुनते हैं।",
          "<strong>इसे कहाँ प्रोसेस किया जाता है:</strong> यूरोप में (Firestore, Cloud Functions)। साइन-इन (Firebase Authentication) और खरीदारी सत्यापन (RevenueCat) संयुक्त राज्य अमेरिका में प्रोसेस किए जाते हैं; इस स्थानांतरण का आधार नीचे दिया गया है।",
          "<strong>हम इसे कब तक रखते हैं:</strong> तकनीकी लॉग 30 दिन, ऑडिट और क्रैश रिकॉर्ड 90 दिन, अनाम लेआउट रिकॉर्ड 180 दिन। अपना खाता हटाने से आपका खाता डेटा हट जाता है।",
          "<strong>आपके अधिकार:</strong> आप डेटा एक्सेस, सुधार और हटाने का अनुरोध कर सकते हैं। आप ऐप में या खाता हटाने वाले पेज पर अपना खाता हटा सकते हैं।",
          "<strong>क्रैश रिपोर्ट:</strong> केवल आपकी पुष्टि के बाद ही भेजी जाती हैं। आपका वैकल्पिक नोट और संपर्क ईमेल शामिल हैं; नोट को वैसे ही संग्रहीत किया जाता है जैसे लिखा गया है, और ईमेल और आईपी पते छुपा दिए जाते हैं।"
        ]],
        ["h", "1. डेटा नियंत्रक और संपर्क"],
        ["p", "GDPR और लागू डेटा सुरक्षा कानूनों के तहत, डेटा नियंत्रक है:"],
        ["h", "2. स्थानीय संचार (क्लाउड पर कोई निर्भरता नहीं)"],
        ["p", "NahiDeck स्थानीय वाई-फ़ाई, यूएसबी केबल या ब्लूटूथ लो एनर्जी (BLE) के माध्यम से आपके एंड्रॉइड फ़ोन और विंडोज कंप्यूटर के बीच सीधे काम करता है:"],
        ["ul", [
          "<strong>मीडिया और ऑडियो कमांड:</strong> की-प्रेस, वॉल्यूम परिवर्तन और मीडिया कमांड आपके स्थानीय नेटवर्क पर चलते हैं। वे बाहरी सर्वर पर नहीं भेजे जाते हैं।",
          "<strong>कंप्यूटर मैक्रोज़:</strong> शॉर्टकट और कस्टम क्रियाएं आपके कंप्यूटर पर निष्पादित और संसाधित की जाती हैं।",
          "<strong>एन्क्रिप्शन:</strong> स्थानीय कनेक्शन स्थानीय रूप से उत्पन्न टीएलएस प्रमाणपत्रों और टीओएफयू (Trust On First Use) फ़िंगरप्रिंट पिनिंग द्वारा सुरक्षित है।"
        ]],
        ["h", "3. हम क्या एकत्र करते हैं और इसका उपयोग कैसे करते हैं"],
        ["p", "डेटा श्रेणियां, सेवा प्रदाता और उद्देश्य इस पृष्ठ के अंत में अनुलग्नक A में दी गई तालिका में विस्तार से सूचीबद्ध हैं।"],
        ["h", "4. क्लाउड बैकअप (Google Drive)"],
        ["p", "एक वैकल्पिक Google Drive बैकअप आपको अपने स्क्रीन लेआउट, प्रोफाइल और प्राथमिकताएं सहेजने की सुविधा देता है:"],
        ["ul", [
          "<strong>इसे कहाँ संग्रहीत किया जाता है:</strong> केवल आपके अपने Google Drive ऐप डेटा फ़ोल्डर (drive.appdata) में। इसे कभी भी NahiDeck सर्वर या तृतीय-पक्ष सर्वर पर नहीं भेजा या होस्ट नहीं किया जाता है।",
          "<strong>इसमें क्या शामिल है:</strong> स्क्रीन लेआउट, प्रोफाइल, दृश्य प्राथमिकताएं और वैकल्पिक पीसी एक्शन परिभाषाएं। डिवाइस सीक्रेट्स, पेयरिंग कुंजियां और खाता पासवर्ड कभी भी शामिल नहीं होते हैं।",
          "<strong>टेलीमेट्री से पूरी तरह अलग:</strong> बैकअप डेटा को कभी भी विश्लेषण के लिए पढ़ा या उपयोग नहीं किया जाता है।"
        ]],
        ["h", "5. डेटा जो हम कभी एकत्र नहीं करते"],
        ["ul", [
          "<strong>स्थान:</strong> जीपीएस और स्थान सेवाओं का कभी भी उपयोग नहीं किया जाता है। एंड्रॉइड ब्लूटूथ स्कैन अनुमति का उपयोग केवल आस-पास के उपकरणों को खोजने के लिए किया जाता है।",
          "<strong>व्यक्तिगत फ़ाइलें:</strong> हम फ़ोटो, वीडियो, दस्तावेज़ या वॉयस रिकॉर्डिंग तक नहीं पहुंचते हैं।",
          "<strong>संपर्क:</strong> हम आपकी संपर्क सूची तक नहीं पहुंचते हैं।",
          "<strong>हार्डवेयर पहचानकर्ता:</strong> हम IMEI, MAC पते या हार्डवेयर सीरियल नंबर एकत्र नहीं करते हैं। इसके बजाय यादृच्छिक पहचानकर्ताओं का उपयोग किया जाता है।"
        ]],
        ["h", "6. डेटा प्रतिधारण और हटाना"],
        ["ul", [
          "<strong>खाता और लाइसेंस डेटा:</strong> ऐप में सेटिंग्स > खाता > \"खाता हटाएं\" के माध्यम से या हमारी वेबसाइट पर खाता हटाने वाले पेज से अनुरोध पर स्थायी रूप से हटा दिया जाता है।",
          "<strong>टेलीमेट्री:</strong> सेटिंग्स > गोपनीयता में सहमति वापस लेने से आपका मौजूदा रिकॉर्ड तुरंत हट जाता है। सक्रिय रिकॉर्ड अधिकतम 180 दिनों (TTL) के भीतर स्वतः समाप्त हो जाते हैं।",
          "<strong>तकनीकी सर्वर लॉग:</strong> अवसंरचना अनुरोध लॉग अधिकतम 30 दिनों तक रखे जाते हैं।",
          "<strong>लाइसेंस और ऑडिट रिकॉर्ड:</strong> खाता और लाइसेंस संचालन के रिकॉर्ड में आपके उपयोगकर्ता पहचानकर्ता का एकतरफा हैश रूप होता है और इसे अधिकतम 90 दिनों तक रखा जाता है।",
          "<strong>क्रैश रिपोर्ट:</strong> इसमें ऐप संस्करण, डिवाइस हैश, त्रुटि का प्रकार और विवरण, स्टैक ट्रेस और लॉग लाइनें शामिल हैं। फ़ाइल पथों में ईमेल पते, आईपी पते और उपयोगकर्ता फ़ोल्डर नाम संग्रहीत करने से पहले छुपा दिए जाते हैं। अधिकतम 90 दिनों तक रखे जाते हैं।",
          "<strong>अंतर्राष्ट्रीय स्थानांतरण:</strong> Firebase Authentication को Google द्वारा संयुक्त राज्य अमेरिका के डेटा केंद्रों से संचालित किया जाता है। खरीदारी सत्यापन के लिए, RevenueCat संयुक्त राज्य अमेरिका (AWS) में आपके डेटा को प्रोसेस करता है; यह स्थानांतरण मानक संविदात्मक खंडों द्वारा कवर किया गया है। Firestore, Cloud Functions और Cloud KMS डेटा यूरोप (europe-west1) के सर्वरों पर प्रोसेस किया जाता है। KVKK अनुच्छेद 9 के तहत तुर्की से स्थानांतरण का कानूनी आधार: [कानूनी आधार: वकील द्वारा भरा जाएगा]।",
          "<strong>सहायता ईमेल:</strong> Google Groups (उपभोक्ता समूह) के माध्यम से संसाधित किया जाता है और Google की <a href='https://policies.google.com/privacy?hl=hi'>गोपनीयता नीति</a> और <a href='https://policies.google.com/terms?hl=hi'>सेवा की शर्तों</a> के अधीन है। संदेश समूह के संग्रह में रखे जाते हैं।"
        ]],
        ["h", "7. आपके अधिकार (GDPR और KVKK)"],
        ["p", "GDPR और लागू कानून के तहत आपको यह जानने का अधिकार है कि क्या हम आपके डेटा को प्रोसेस करते हैं, इसे एक्सेस करने, इसे ठीक करने और इसे हटाने का अनुरोध करने का अधिकार है। इन अधिकारों का प्रयोग करने के लिए, nahideck-support@googlegroups.com पर ईमेल करें।"],
        ["h", "अनुलग्नक A: डेटा श्रेणियां और सेवा प्रदाता (तकनीकी विवरण)"],
        ["table", ["डेटा श्रेणी", "एकत्रित जानकारी", "सेवा प्रदाता", "उद्देश्य"], [
          ["<strong>उपयोगकर्ता खाता</strong>", "ईमेल पता, नाम, Firebase उपयोगकर्ता आईडी (UID)", "Google Firebase Authentication", "साइन-इन और Pro लाइसेंस स्वामित्व की पुष्टि। वैकल्पिक; मुफ़्त योजना बिना साइन-इन के उपयोग की जा सकती है।"],
          ["<strong>लाइसेंस और पेयरिंग</strong>", "यादृच्छिक रूप से उत्पन्न फ़ोन डिवाइस आईडी, पीसी आईडी, UID", "Google Cloud Firestore और Cloud KMS", "1 फ़ोन + 1 पीसी के उचित उपयोग नियम को लागू करना और लाइसेंस टोकन पर हस्ताक्षर करना।"],
          ["<strong>खरीदारी और सदस्यता</strong>", "Google Play ऑर्डर/खरीद टोकन, RevenueCat App User ID, पात्रता स्थिति", "Google Play Billing और RevenueCat", "Pro खरीदारी और नवीनीकरण का प्रसंस्करण और सत्यापन।"],
          ["<strong>उपयोग और लेआउट टेलीमेट्री (वैकल्पिक)</strong>", "यादृच्छिक इंस्टॉल आईडी, ग्रिड लेआउट (विजेट प्रकार, स्थिति, आकार), थीम विकल्प, योजना स्तर", "Google Cloud Firestore (anonymous_layouts)", "इंटरफ़ेस को बेहतर बनाने के लिए लोकप्रिय विजेट और लेआउट को समझना। <strong>इसमें कोई व्यक्तिगत डेटा, टेक्स्ट या खाता विवरण नहीं है।</strong>"],
          ["<strong>स्थानीय एक्सटेंशन डेटा</strong>", "सक्रिय ब्राउज़र टैब की मीडिया स्थिति (ट्रैक शीर्षक, कलाकार, प्लेबैक स्थिति)", "केवल स्थानीय ब्राउज़र और पीसी ऐप", "फ़ोन और पीसी पर वेब मीडिया दिखाना। कभी भी क्लाउड पर नहीं भेजा जाता।"],
          ["<strong>ऐप सत्यापन</strong>", "पैकेज नाम, ऐप हस्ताक्षर प्रमाणपत्र और डिवाइस अखंडता परिणाम", "Google Play Integrity (Google)", "यह सत्यापित करना कि ऐप Google Play से इंस्टॉल किया गया है और विश्वसनीय डिवाइस पर चल रहा है; दुरुपयोग को रोकना। Google इस डेटा को तीसरे पक्ष के साथ साझा नहीं करता है।"],
          ["<strong>क्रैश रिपोर्ट (वैकल्पिक)</strong>", "ऐप संस्करण, डिवाइस हैश, त्रुटि का प्रकार और विवरण, स्टैक ट्रेस और लॉग लाइनें (ईमेल और आईपी छुपाए गए हैं)", "Google Cloud Functions और Firestore (यूरोप); Google Groups के माध्यम से सहायता ईमेल", "क्रैश का विश्लेषण करना और उन्हें ठीक करना। केवल आपकी पुष्टि के साथ भेजा जाता है।"]
        ]],
        ["card", [["p", "<strong>डेटा नियंत्रक:</strong> Kaya Furkan İPEKCİ"], ["p", "<strong>संपर्क ईमेल:</strong> nahideck-support@googlegroups.com"], ["p", "<strong>वेबसाइट:</strong> https://nahideck.github.io"]]],
      ]
    },
    delete: {
      title: "खाता और डेटा हटाने का अनुरोध",
      blocks: [
        ["p", "यदि आप अपना NahiDeck खाता और सभी संबंधित डेटा स्थायी रूप से हटाना चाहते हैं, तो आप नीचे दिए गए तरीकों में से एक का उपयोग कर सकते हैं।"],
        ["h", "विधि 1: ऐप में हटाएं (अनुशंसित)"],
        ["ol", [
          "अपने एंड्रॉइड डिवाइस पर <strong>NahiDeck</strong> ऐप खोलें।",
          "साइड डॉक (या शीर्ष मेनू) से <strong>सेटिंग्स</strong> पर जाएं।",
          "<strong>खाता</strong> अनुभाग खोलें।",
          "नीचे स्क्रॉल करें और <strong>\"मेरा खाता हटाएं\"</strong> पर टैप करें।",
          "संवाद बॉक्स में पुष्टि करें।",
          "आपका Firebase उपयोगकर्ता रिकॉर्ड, पेयर किए गए डिवाइस और क्लाउड लाइसेंस रिकॉर्ड स्थायी रूप से हटा दिए जाते हैं।"
        ]],
        ["p", "<em>सुरक्षा कारणों से खाता हटाने के लिए पिछले 5 मिनट के भीतर साइन-इन होना आवश्यक है। यदि कोई त्रुटि आती है, तो साइन आउट करें, पुनः साइन इन करें और पुनः प्रयास करें।</em>"],
        ["p", "<em>नोट: अपना खाता हटाने से Google Drive में मौजूद आपका ऐप बैकअप स्वतः नहीं हटता है। इसे Google Drive सेटिंग्स (Google Drive > सेटिंग्स > ऐप्स प्रबंधित करें) से स्वयं हटाएं।</em>"],
        ["h", "विधि 2: ईमेल द्वारा हटाने का अनुरोध करें"],
        ["p", "यदि आप ऐप तक नहीं पहुंच सकते हैं या इसे अनइंस्टॉल कर दिया है, तो अपना अनुरोध ईमेल द्वारा भेजें:"],
        ["card", [
          ["p", "<strong>सहायता ईमेल:</strong> nahideck-support@googlegroups.com"],
          ["p", "<strong>विषय:</strong> <code>NahiDeck खाता और डेटा हटाने का अनुरोध</code>"],
          ["p", "<strong>आवश्यक जानकारी:</strong>"],
          ["ul", ["NahiDeck में साइन इन करने के लिए उपयोग किया जाने वाला Google खाता ईमेल पता।", "<em>(वैकल्पिक)</em> Google Play ऑर्डर नंबर या RevenueCat सदस्यता संदर्भ।"]]
        ]],
        ["p", "आपकी पहचान सत्यापित करने के बाद, आपका खाता और संबंधित क्लाउड रिकॉर्ड <strong>7 कार्य दिवसों</strong> के भीतर स्थायी रूप से हटा दिए जाते हैं।"],
        ["h", "स्थायी रूप से क्या हटाया जाता है?"],
        ["ul", [
          "Firebase Authentication उपयोगकर्ता रिकॉर्ड, ईमेल पता और प्रोफ़ाइल विवरण।",
          "Firestore <code>entitlements</code> संग्रह में Pro लाइसेंस रिकॉर्ड।",
          "Firestore <code>devices</code> संग्रह में पेयर किए गए फ़ोन और पीसी रिकॉर्ड।",
          "RevenueCat ग्राहक प्रोफ़ाइल (<code>app_user_id</code>); जहाँ तकनीकी रूप से संभव हो हटा दिया जाता है। यदि इसे हटाया नहीं जा सकता है, तो हमें ईमेल द्वारा सूचित करें।",
          "आपके डिवाइस के सुरक्षित संग्रहण में लाइसेंस कुंजियां और सत्र रिकॉर्ड।"
        ]],
        ["h", "क्या रखा जाता है?"],
        ["ul", [
          "<strong>Google Play बिलिंग रिकॉर्ड:</strong> कर और उपभोक्ता कानून कारणों से Google इन्हें रखता है। NahiDeck भुगतान विवरण संग्रहीत नहीं करता है।",
          "<strong>ऑडिट रिकॉर्ड:</strong> खाता और लाइसेंस संचालन के रिकॉर्ड में एक हैश किया गया पहचानकर्ता होता है जिसे सीधे आपकी पहचान से नहीं जोड़ा जा सकता है, और यह 90 दिनों के भीतर स्वतः हटा दिया जाता है।",
          "<strong>क्रैश रिपोर्ट:</strong> 90 दिनों के भीतर स्वतः हटा दी जाती हैं।"
        ]],
        ["danger", [
          ["h3", "महत्वपूर्ण: अपनी सक्रिय सदस्यता रद्द करें"],
          ["p", "अपना खाता हटाने से Google Play के माध्यम से शुरू की गई सदस्यता <strong>स्वतः रद्द नहीं होती है</strong>। भविष्य के शुल्कों को रोकने के लिए, अपना खाता हटाने से पहले इसे रद्द करें:"],
          ["ol", [
            "अपने एंड्रॉइड डिवाइस पर <strong>Google Play Store</strong> खोलें।",
            "अपने प्रोफ़ाइल आइकन > <strong>भुगतान और सदस्यताएं</strong> > <strong>सदस्यताएं</strong> पर टैप करें।",
            "<strong>NahiDeck</strong> चुनें और <strong>\"सदस्यता रद्द करें\"</strong> पर टैप करें।"
          ]]
        ]]
      ]
    }
  },

  // AWAITING_NATIVE_SPEAKER_REVIEW
  my: {
    privacy: {
      title: "NahiDeck ကိုယ်ရေးအချက်အလက် လုံခြုံမှုမူဝါဒ",
      updated: "၂၀၂၆ အောက်တိုဘာ ၂၅",
      blocks: [
        ["p", "NahiDeck (\"ကျွန်ုပ်တို့\" သို့မဟုတ် \"အက်ပ်\") သည် အသုံးပြုသူများ၏ ကိုယ်ရေးကိုယ်တာလုံခြုံမှုနှင့် ကိုယ်ရေးအချက်အလက် ကာကွယ်ရေးကို အလွန်အလေးထားပါသည်။ ဤမူဝါဒသည် <strong>NahiDeck Android အက်ပ်</strong>၊ <strong>NahiDeck Windows ဒက်စ်တော့ခ်အက်ပ်</strong> နှင့် <strong>ဝဘ်ဘရောက်ဆာ extension (NahiDeck Connect)</strong> တို့နှင့် သက်ဆိုင်ပါသည်။"],
        ["h", "အကျဉ်းချုပ်"],
        ["ul", [
          "<strong>ကျွန်ုပ်တို့ စုဆောင်းသောအချက်အလက်များ -</strong> အကောင့်အချက်အလက် (ရွေးချယ်နိုင်သည်)၊ Pro လိုင်စင်နှင့် စက်တွဲချိတ်မှုမှတ်တမ်းများ၊ အမည်မဖော်ပြသော အသုံးပြုမှုဒေတာ (ရွေးချယ်နိုင်သည်) နှင့် သင်ပေးပို့ရန် ရွေးချယ်သော ချွတ်ယွင်းမှုအစီရင်ခံစာများ။",
          "<strong>မည်သည့်နေရာတွင် လုပ်ဆောင်သနည်း -</strong> ဥရောပတွင် (Firestore, Cloud Functions)။ အကောင့်ဝင်ရောက်ခြင်း (Firebase Authentication) နှင့် ဝယ်ယူမှုစစ်ဆေးခြင်း (RevenueCat) တို့ကို အမေရိကန်ပြည်ထောင်စုတွင် လုပ်ဆောင်ပြီး ဤလွှဲပြောင်းမှု၏ အခြေခံကို အောက်တွင် ဖော်ပြထားပါသည်။",
          "<strong>မည်မျှကြာကြာ သိမ်းဆည်းသနည်း -</strong> နည်းပညာမှတ်တမ်းများကို ၃၀ ရက်၊ စာရင်းစစ်နှင့် ချွတ်ယွင်းမှုမှတ်တမ်းများကို ၉၀ ရက်၊ အမည်မဖော်ပြသော အပြင်အဆင်မှတ်တမ်းများကို ၁၈၀ ရက် သိမ်းဆည်းပါသည်။ သင့်အကောင့်ကို ဖျက်လိုက်ပါက အကောင့်ဒေတာများအားလုံး ပျက်ပြယ်သွားမည်ဖြစ်ပါသည်။",
          "<strong>သင့်အခွင့်အရေးများ -</strong> သင်၏ဒေတာကို ကြည့်ရှုခွင့်၊ ပြင်ဆင်ခွင့်နှင့် ဖျက်ပစ်ခွင့်တို့ကို တောင်းဆိုနိုင်ပါသည်။ အက်ပ်အတွင်း သို့မဟုတ် အကောင့်ဖျက်ခြင်းစာမျက်နှာမှတစ်ဆင့် သင့်အကောင့်ကို ဖျက်နိုင်ပါသည်။",
          "<strong>ချွတ်ယွင်းမှုအစီရင်ခံစာများ -</strong> သင်အတည်ပြုမှသာ ပေးပို့ပါသည်။ သင်ထည့်သွင်းလိုပါက မှတ်ချက်နှင့် အီးမေးလ်လိပ်စာတို့ ပါဝင်မည်ဖြစ်ပြီး မှတ်ချက်ကို ရေးထားသည့်အတိုင်း သိမ်းဆည်းကာ အီးမေးလ်နှင့် IP လိပ်စာများကို ဖုံးကွယ်ထားမည်ဖြစ်ပါသည်။"
        ]],
        ["h", "1. ဒေတာထိန်းချုပ်သူနှင့် ဆက်သွယ်ရန်"],
        ["p", "GDPR နှင့် သက်ဆိုင်ရာ ဒေတာကာကွယ်ရေးဥပဒေများအရ ဒေတာထိန်းချုပ်သူမှာ -"],
        ["h", "2. ဒေသတွင်းချိတ်ဆက်မှု (Cloud ပေါ်တွင် မှီခိုမှုမရှိပါ)"],
        ["p", "NahiDeck သည် ဒေသတွင်း Wi-Fi၊ USB ကြိုး သို့မဟုတ် Bluetooth Low Energy (BLE) မှတစ်ဆင့် သင့် Android ဖုန်းနှင့် Windows ကွန်ပျူတာကြား တိုက်ရိုက်လုပ်ဆောင်ပါသည် -"],
        ["ul", [
          "<strong>မီဒီယာနှင့် အသံထိန်းချုပ်မှုများ -</strong> ခလုတ်နှိပ်ခြင်း၊ အသံအတိုးအကျယ်ပြောင်းလဲခြင်းနှင့် မီဒီယာအမိန့်များသည် သင့်ဒေသတွင်းကွန်ရက်ပေါ်တွင်သာ ရွေ့လျားပါသည်။ ပြင်ပဆာဗာများသို့ မရောက်ရှိပါ။",
          "<strong>ကွန်ပျူတာဖြတ်လမ်းညွှန်ချက်များ -</strong> ဖြတ်လမ်းများနှင့် စိတ်ကြိုက်လုပ်ဆောင်ချက်များကို သင့်ကွန်ပျူတာပေါ်တွင်သာ စီမံလုပ်ဆောင်ပါသည်။",
          "<strong>ဒေတာကုဒ်ဝှက်ခြင်း -</strong> ဒေသတွင်းချိတ်ဆက်မှုကို စက်တွင်းထုတ်လုပ်သော TLS လက်မှတ်များနှင့် TOFU (ပထမဆုံးအသုံးပြုမှုတွင် ယုံကြည်မှု) လက်ဗွေတွဲချိတ်မှုတို့ဖြင့် ကာကွယ်ထားပါသည်။"
        ]],
        ["h", "3. ကျွန်ုပ်တို့ မည်သည့်ဒေတာကို စုဆောင်းပြီး မည်သို့အသုံးပြုသနည်း"],
        ["p", "ဒေတာအမျိုးအစားများ၊ ဝန်ဆောင်မှုပေးသူများနှင့် ရည်ရွယ်ချက်များကို ဤစာမျက်နှာ၏အဆုံး နောက်ဆက်တွဲ A ရှိ ဇယားတွင် အသေးစိတ်ဖော်ပြထားပါသည်။"],
        ["h", "4. Cloud အရန်သိမ်းဆည်းမှု (Google Drive)"],
        ["p", "ရွေးချယ်နိုင်သော Google Drive အရန်သိမ်းဆည်းမှုစနစ်သည် သင့်စခရင်အပြင်အဆင်များ၊ ပရိုဖိုင်များနှင့် စိတ်ကြိုက်ရွေးချယ်မှုများကို သိမ်းဆည်းပေးပါသည် -"],
        ["ul", [
          "<strong>သိမ်းဆည်းသည့်နေရာ -</strong> သင့်ကိုယ်ပိုင် Google Drive အက်ပ်ဒေတာဖိုဒါ (drive.appdata) တွင်သာ သိမ်းဆည်းပါသည်။ NahiDeck ဆာဗာများ သို့မဟုတ် ပြင်ပဆာဗာများသို့ မည်သည့်အခါမျှ မပို့ဆောင်ပါ။",
          "<strong>ပါဝင်သောအကြောင်းအရာများ -</strong> စခရင်အပြင်အဆင်များ၊ ပရိုဖိုင်များ၊ အသွင်အပြင်စိတ်ကြိုက်ရွေးချယ်မှုများနှင့် ကွန်ပျူတာလုပ်ဆောင်ချက်သတ်မှတ်ချက်များ။ စက်လျှို့ဝှက်ကုဒ်များ၊ တွဲချိတ်မှုကုဒ်များနှင့် အကောင့်စကားဝှက်များကို လုံးဝမထည့်သွင်းပါ။",
          "<strong>အဝေးတိုင်းတာမှုဒေတာနှင့် လုံးဝသီးခြားဖြစ်ခြင်း -</strong> အရန်သိမ်းဆည်းမှုဒေတာများကို ခွဲခြမ်းစိတ်ဖြာခြင်းအတွက် လုံးဝဖတ်ရှုခြင်း သို့မဟုတ် အသုံးမပြုပါ။"
        ]],
        ["h", "5. ကျွန်ုပ်တို့ မည်သည့်အခါမျှ မစုဆောင်းသောဒေတာများ"],
        ["ul", [
          "<strong>တည်နေရာ -</strong> GPS နှင့် တည်နေရာဝန်ဆောင်မှုများကို လုံးဝအသုံးမပြုပါ။ Android Bluetooth စကင်ဖတ်ခွင့်ပြုချက်သည် အနီးရှိစက်ပစ္စည်းများကို ရှာဖွေရန်အတွက်သာ ဖြစ်ပါသည်။",
          "<strong>ကိုယ်ပိုင်ဖိုင်များ -</strong> ဓာတ်ပုံများ၊ ဗီဒီယိုများ၊ စာရွက်စာတမ်းများနှင့် အသံဖမ်းယူမှုများကို ကျွန်ုပ်တို့ ဝင်ရောက်ရယူခြင်း မရှိပါ။",
          "<strong>အဆက်အသွယ်များ -</strong> သင့်ဖုန်းစာအုပ်စာရင်းကို ကျွန်ုပ်တို့ ရယူခြင်း မရှိပါ။",
          "<strong>စက်ပစ္စည်းသတ်မှတ်ချက်အမှတ်အသားများ -</strong> IMEI၊ MAC လိပ်စာ သို့မဟုတ် စက်ပစ္စည်းနံပါတ်များကို မစုဆောင်းပါ။ ၎င်းတို့အစား ကျပန်းထုတ်လုပ်ထားသော အမှတ်အသားများကို အသုံးပြုပါသည်။"
        ]],
        ["h", "6. ထိန်းသိမ်းခြင်းနှင့် ဖျက်ပစ်ခြင်း"],
        ["ul", [
          "<strong>အကောင့်နှင့် လိုင်စင်ဒေတာ -</strong> အက်ပ်ရှိ ဆက်တင်များ > အကောင့် > \"အကောင့်ဖျက်ရန်\" မှတစ်ဆင့် သို့မဟုတ် ဝဘ်ဆိုက်ရှိ အကောင့်ဖျက်ခြင်းစာမျက်နှာမှ တောင်းဆိုမှုအရ အပြီးတိုင် ဖျက်ပစ်ပါသည်။",
          "<strong>အဝေးတိုင်းတာမှုဒေတာ -</strong> ဆက်တင်များ > ကိုယ်ရေးလုံခြုံမှု မှ သဘောတူညီချက်ကို ရုပ်သိမ်းပါက ရှိပြီးသားမှတ်တမ်းကို ချက်ချင်း ဖျက်ပစ်ပါသည်။ လက်ရှိမှတ်တမ်းများသည် ရက်ပေါင်း ၁၈၀ (TTL) အတွင်း အလိုအလျောက် သက်တမ်းကုန်ဆုံးပါသည်။",
          "<strong>နည်းပညာဆာဗာမှတ်တမ်းများ -</strong> အခြေခံအဆောက်အအုံတောင်းဆိုမှုမှတ်တမ်းများကို အများဆုံး ၃၀ ရက်အထိ ထိန်းသိမ်းထားပါသည်။",
          "<strong>လိုင်စင်နှင့် စာရင်းစစ်မှတ်တမ်းများ -</strong> အကောင့်နှင့် လိုင်စင်လုပ်ဆောင်မှုမှတ်တမ်းများတွင် ပြန်ပြောင်း၍မရသော hash ကုဒ်ပါဝင်ပြီး အများဆုံး ၉၀ ရက်အထိ ထိန်းသိမ်းထားပါသည်။",
          "<strong>ချွတ်ယွင်းမှုအစီရင်ခံစာများ -</strong> အက်ပ်ဗားရှင်း၊ စက်ပစ္စည်း hash၊ အမှားအမျိုးအစားနှင့် ဖော်ပြချက်၊ stack trace နှင့် မှတ်တမ်းလိုင်းများ ပါဝင်ပါသည်။ သိမ်းဆည်းခြင်းမပြုမီ အီးမေးလ်လိပ်စာများ၊ IP လိပ်စာများနှင့် ဖိုင်လမ်းကြောင်းရှိ အသုံးပြုသူဖိုဒါအမည်များကို ဖုံးကွယ်ထားပါသည်။ အများဆုံး ၉၀ ရက်အထိ ထိန်းသိမ်းထားပါသည်။",
          "<strong>နိုင်ငံတကာသို့ လွှဲပြောင်းမှုများ -</strong> Firebase Authentication ကို အမေရိကန်ပြည်ထောင်စုရှိ ဒေတာစင်တာများမှတစ်ဆင့် Google က လည်ပတ်ပါသည်။ ဝယ်ယူမှုစစ်ဆေးရန်အတွက် RevenueCat သည် အမေရိကန်ပြည်ထောင်စု (AWS) တွင် သင့်ဒေတာကို လုပ်ဆောင်ပြီး ဤလွှဲပြောင်းမှုကို စံသတ်မှတ်ချက်ဆိုင်ရာ စာချုပ်စာတမ်းများဖြင့် အကာအကွယ်ပေးထားပါသည်။ Firestore, Cloud Functions နှင့် Cloud KMS ဒေတာများကို ဥရောပ (europe-west1) ရှိ ဆာဗာများတွင် လုပ်ဆောင်ပါသည်။ KVKK ပုဒ်မ ၉ အရ တူရကီမှ လွှဲပြောင်းမှုများအတွက် ဥပဒေဆိုင်ရာ အခြေခံ - [ဥပဒေဆိုင်ရာ အခြေခံ - ရှေ့နေမှ ဖြည့်စွက်ရန်]။",
          "<strong>အကူအညီပေးရေး အီးမေးလ် -</strong> Google Groups မှတစ်ဆင့် စီမံလုပ်ဆောင်ပြီး Google ၏ <a href='https://policies.google.com/privacy?hl=my'>ကိုယ်ရေးလုံခြုံမှုမူဝါဒ</a> နှင့် <a href='https://policies.google.com/terms?hl=my'>ဝန်ဆောင်မှုစည်းမျဉ်းများ</a> နှင့် သက်ဆိုင်ပါသည်။ မက်ဆေ့ဂျ်များကို အဖွဲ့၏ မော်ကွန်းတိုက်တွင် သိမ်းဆည်းထားပါသည်။"
        ]],
        ["h", "7. သင့်အခွင့်အရေးများ (GDPR နှင့် KVKK)"],
        ["p", "GDPR နှင့် သက်ဆိုင်ရာ ဥပဒေများအရ ကျွန်ုပ်တို့သည် သင့်ဒေတာကို စီမံဆောင်ရွက်ခြင်းရှိမရှိ သိရှိခွင့်၊ ဝင်ရောက်ကြည့်ရှုခွင့်၊ ပြင်ဆင်ခွင့်နှင့် ဖျက်ပစ်ခွင့်တို့ကို တောင်းဆိုပိုင်ခွင့်ရှိပါသည်။ ဤအခွင့်အရေးများကို ကျင့်သုံးရန် nahideck-support@googlegroups.com သို့ အီးမေးလ်ပေးပို့ပါ။"],
        ["h", "နောက်ဆက်တွဲ A: ဒေတာအမျိုးအစားများနှင့် ဝန်ဆောင်မှုပေးသူများ (နည်းပညာအသေးစိတ်)"],
        ["table", ["ဒေတာအမျိုးအစား", "စုဆောင်းသောအချက်အလက်", "ဝန်ဆောင်မှုပေးသူ", "ရည်ရွယ်ချက်"], [
          ["<strong>အသုံးပြုသူအကောင့်</strong>", "အီးမေးလ်လိပ်စာ၊ အမည်၊ Firebase အသုံးပြုသူ ID (UID)", "Google Firebase Authentication", "အကောင့်ဝင်ရောက်ခြင်းနှင့် Pro လိုင်စင်ပိုင်ဆိုင်မှုကို စစ်ဆေးခြင်း။ ရွေးချယ်နိုင်သည်၊ အခမဲ့အစီအစဉ်ကို အကောင့်မဝင်ဘဲ သုံးနိုင်ပါသည်။"],
          ["<strong>လိုင်စင်နှင့် တွဲချိတ်မှု</strong>", "ကျပန်းထုတ်လုပ်ထားသော ဖုန်း ID၊ PC ID၊ UID", "Google Cloud Firestore နှင့် Cloud KMS", "ဖုန်း ၁ လုံး + PC ၁ လုံး သာတူညီမျှအသုံးပြုမှုစည်းမျဉ်းကို ကျင့်သုံးခြင်းနှင့် လိုင်စင်တိုကင်များ လက်မှတ်ရေးထိုးခြင်း။"],
          ["<strong>ဝယ်ယူမှုများနှင့် စာရင်းသွင်းမှုများ</strong>", "Google Play အမှာစာ/ဝယ်ယူမှုတိုကင်၊ RevenueCat App User ID၊ ရပိုင်ခွင့်အခြေအနေ", "Google Play Billing နှင့် RevenueCat", "Pro ဝယ်ယူမှုများနှင့် သက်တမ်းတိုးမှုများကို စစ်ဆေးလုပ်ဆောင်ခြင်း။"],
          ["<strong>အသုံးပြုမှုနှင့် အပြင်အဆင်အဝေးတိုင်းတာမှု (ရွေးချယ်နိုင်သည်)</strong>", "ကျပန်းတပ်ဆင်မှု ID၊ ဇယားကွက်အပြင်အဆင် (ဝစ်ဂျက်အမျိုးအစား၊ နေရာ၊ အရွယ်အစား)၊ သီးသန့်ပုံစံရွေးချယ်မှု၊ အစီအစဉ်အဆင့်", "Google Cloud Firestore (anonymous_layouts)", "မျက်နှာပြင်ဒီဇိုင်းကို မြှင့်တင်ရန် လူကြိုက်များသော ဝစ်ဂျက်များနှင့် အပြင်အဆင်များကို လေ့လာခြင်း။ <strong>ကိုယ်ရေးကိုယ်တာဒေတာ၊ စာသား သို့မဟုတ် အကောင့်အချက်အလက်များ လုံးဝမပါဝင်ပါ။</strong>"],
          ["<strong>ဒေသတွင်း extension ဒေတာ</strong>", "ဖွင့်ထားသော ဘရောက်ဆာ tab ၏ မီဒီယာအခြေအနေ (သီချင်းအမည်၊ အဆိုတော်၊ ဖွင့်လက်စအခြေအနေ)", "ဒေသတွင်း ဘရောက်ဆာနှင့် PC အက်ပ်တွင်သာ", "ဝဘ်မီဒီယာကို ဖုန်းနှင့် PC တွင် ပြသရန်။ Cloud သို့ မည်သည့်အခါမျှ မပို့ဆောင်ပါ။"],
          ["<strong>အက်ပ်စစ်မှန်ကြောင်း အတည်ပြုခြင်း</strong>", "ပက်ကေ့ဂျ်အမည်၊ အက်ပ်လက်မှတ်နှင့် စက်ပစ္စည်းစစ်မှန်မှုရလဒ်", "Google Play Integrity (Google)", "အက်ပ်ကို Google Play မှ တပ်ဆင်ထားကြောင်းနှင့် စိတ်ချရသောစက်တွင် အလုပ်လုပ်နေကြောင်း အတည်ပြုခြင်း၊ အလွဲသုံးစားလုပ်မှုကို တားဆီးခြင်း။ Google သည် ဤဒေတာကို အခြားသူများနှင့် မျှဝေခြင်းမရှိပါ။"],
          ["<strong>ချွတ်ယွင်းမှုအစီရင်ခံစာ (ရွေးချယ်နိုင်သည်)</strong>", "အက်ပ်ဗားရှင်း၊ စက်ပစ္စည်း hash၊ အမှားအမျိုးအစားနှင့် ဖော်ပြချက်၊ stack trace နှင့် မှတ်တမ်းလိုင်းများ (အီးမေးလ်နှင့် IP ကို ဖုံးကွယ်ထားသည်)", "Google Cloud Functions နှင့် Firestore (ဥရောပ); Google Groups မှတစ်ဆင့် အကူအညီပေးရေး အီးမေးလ်", "ချွတ်ယွင်းမှုများကို လေ့လာဆန်းစစ်ပြီး ပြုပြင်ရန်။ သင်အတည်ပြုမှသာ ပေးပို့ပါသည်။"]
        ]],
        ["card", [["p", "<strong>ဒေတာထိန်းချုပ်သူ -</strong> Kaya Furkan İPEKCİ"], ["p", "<strong>ဆက်သွယ်ရန် အီးမေးလ် -</strong> nahideck-support@googlegroups.com"], ["p", "<strong>ဝဘ်ဆိုက် -</strong> https://nahideck.github.io"]]],
      ]
    },
    delete: {
      title: "အကောင့်နှင့် ဒေတာဖျက်ပစ်ရန် တောင်းဆိုချက်",
      blocks: [
        ["p", "သင့် NahiDeck အကောင့်နှင့် သက်ဆိုင်ရာ ဒေတာအားလုံးကို အပြီးတိုင် ဖျက်ပစ်လိုပါက အောက်ပါနည်းလမ်းများထဲမှ တစ်ခုကို အသုံးပြုနိုင်ပါသည်။"],
        ["h", "နည်းလမ်း ၁ - အက်ပ်အတွင်းမှ ဖျက်ပစ်ခြင်း (အကြံပြုထားသည်)"],
        ["ol", [
          "သင့် Android စက်တွင် <strong>NahiDeck</strong> အက်ပ်ကို ဖွင့်ပါ။",
          "ဘေးဘက်ဒေါ့ခ် (သို့မဟုတ် ထိပ်တန်းမီနူး) မှတစ်ဆင့် <strong>ဆက်တင်များ</strong> သို့ သွားပါ။",
          "<strong>အကောင့်</strong> ကဏ္ဍကို ဖွင့်ပါ။",
          "အောက်ဆုံးသို့ ဆွဲချပြီး <strong>\"ကျွန်ုပ်၏အကောင့်ကို ဖျက်ရန်\"</strong> ကို နှိပ်ပါ။",
          "ပေါ်လာသော အတည်ပြုချက်ဝင်းဒိုးတွင် အတည်ပြုပါ။",
          "သင့် Firebase အသုံးပြုသူမှတ်တမ်း၊ ချိတ်ဆက်ထားသော စက်များနှင့် cloud လိုင်စင်မှတ်တမ်းများကို အပြီးတိုင် ဖျက်ပစ်ပါမည်။"
        ]],
        ["p", "<em>လုံခြုံရေးအရ အကောင့်ဖျက်ခြင်းအတွက် လွန်ခဲ့သော ၅ မိနစ်အတွင်း အကောင့်ဝင်ရောက်ထားရန် လိုအပ်ပါသည်။ အမှားတစ်ခုခုပြပါက အကောင့်ထွက်ပြီး ပြန်ဝင်ကာ ထပ်မံကြိုးစားပါ။</em>"],
        ["p", "<em>မှတ်ချက် - အကောင့်ဖျက်လိုက်သော်လည်း Google Drive ပေါ်ရှိ အက်ပ်အရန်ဒေတာများ အလိုအလျောက် ပျက်ပြယ်မည်မဟုတ်ပါ။ Google Drive ဆက်တင်များ (Google Drive > ဆက်တင်များ > အက်ပ်များကို စီမံခန့်ခွဲရန်) မှတစ်ဆင့် ကိုယ်တိုင် ဖျက်ပစ်ရပါမည်။</em>"],
        ["h", "နည်းလမ်း ၂ - အီးမေးလ်ဖြင့် ဖျက်ရန်တောင်းဆိုခြင်း"],
        ["p", "အက်ပ်ကို ဝင်ရောက်၍မရတော့ပါက သို့မဟုတ် အက်ပ်ကို ဖျက်လိုက်ပါက အီးမေးလ်ဖြင့် တောင်းဆိုနိုင်ပါသည် -"],
        ["card", [
          ["p", "<strong>အကူအညီပေးရေး အီးမေးလ် -</strong> nahideck-support@googlegroups.com"],
          ["p", "<strong>အကြောင်းအရာ -</strong> <code>NahiDeck အကောင့်နှင့် ဒေတာဖျက်ပစ်ရန် တောင်းဆိုချက်</code>"],
          ["p", "<strong>လိုအပ်သောအချက်အလက်များ -</strong>"],
          ["ul", ["NahiDeck သို့ ဝင်ရောက်ရန် အသုံးပြုခဲ့သော Google အကောင့် အီးမေးလ်လိပ်စာ။", "<em>(ရွေးချယ်နိုင်သည်)</em> Google Play အမှာစာနံပါတ် သို့မဟုတ် RevenueCat စာရင်းသွင်းမှုအညွှန်း။"]]
        ]],
        ["p", "သင့်မည်သူမည်ဝါဖြစ်ကြောင်း အတည်ပြုပြီးနောက် သင့်အကောင့်နှင့် ဆက်စပ် cloud မှတ်တမ်းများကို ရုံးဖွင့်ရက် <strong>၇ ရက်အတွင်း</strong> အပြီးတိုင် ဖျက်ပစ်ပါမည်။"],
        ["h", "မည်သည့်အရာများကို အပြီးတိုင် ဖျက်ပစ်မည်နည်း။"],
        ["ul", [
          "Firebase Authentication အသုံးပြုသူမှတ်တမ်း၊ အီးမေးလ်လိပ်စာနှင့် ပရိုဖိုင်အချက်အလက်များ။",
          "Firestore <code>entitlements</code> ကဏ္ဍရှိ Pro လိုင်စင်မှတ်တမ်း။",
          "Firestore <code>devices</code> ကဏ္ဍရှိ တွဲချိတ်ထားသော ဖုန်းနှင့် PC မှတ်တမ်းများ။",
          "RevenueCat စာရင်းသွင်းသူပရိုဖိုင် (<code>app_user_id</code>)၊ နည်းပညာအရ ဖြစ်နိုင်ပါက ဖျက်ပစ်ပါမည်။ ဖျက်၍မရပါက ကျွန်ုပ်တို့ထံ အီးမေးလ်ဖြင့် ဆက်သွယ်ပါ။",
          "စက်ပစ္စည်း၏ လုံခြုံသောသိုလှောင်မှုအတွင်းရှိ လိုင်စင်ကုဒ်များနှင့် အသုံးပြုမှုမှတ်တမ်းများ။"
        ]],
        ["h", "မည်သည့်အရာများကို ထိန်းသိမ်းထားမည်နည်း။"],
        ["ul", [
          "<strong>Google Play ငွေတောင်းခံလွှာမှတ်တမ်းများ -</strong> အခွန်နှင့် စားသုံးသူဥပဒေအရ Google က ထိန်းသိမ်းထားပါသည်။ NahiDeck သည် ငွေပေးချေမှုအချက်အလက်များကို သိမ်းဆည်းခြင်းမရှိပါ။",
          "<strong>စာရင်းစစ်မှတ်တမ်းများ -</strong> အကောင့်နှင့် လိုင်စင်လုပ်ဆောင်မှုမှတ်တမ်းများတွင် သင့်အား တိုက်ရိုက်ဖော်ပြခြင်းမပြုနိုင်သော hash အမှတ်အသားပါဝင်ပြီး ရက်ပေါင်း ၉၀ အတွင်း အလိုအလျောက် ပျက်ပြယ်ပါသည်။",
          "<strong>ချွတ်ယွင်းမှုအစီရင်ခံစာများ -</strong> ရက်ပေါင်း ၉၀ အတွင်း အလိုအလျောက် ပျက်ပြယ်ပါသည်။"
        ]],
        ["danger", [
          ["h3", "အရေးကြီးသည် - သင့်စာရင်းသွင်းမှုကို ပယ်ဖျက်ပါ"],
          ["p", "သင့်အကောင့်ကို ဖျက်လိုက်ရုံဖြင့် Google Play မှတစ်ဆင့် စတင်ခဲ့သော စာရင်းသွင်းမှုမှာ <strong>အလိုအလျောက် ပယ်ဖျက်သွားမည် မဟုတ်ပါ</strong>။ နောင်တွင် ငွေဖြတ်တောက်မှု မဖြစ်စေရန် အကောင့်မဖျက်မီ ၎င်းကို ဦးစွာ ပယ်ဖျက်ပါ -"],
          ["ol", [
            "သင့် Android စက်တွင် <strong>Google Play Store</strong> ကို ဖွင့်ပါ။",
            "ပရိုဖိုင်အိုင်ကွန် > <strong>ငွေပေးချေမှုများနှင့် စာရင်းသွင်းမှုများ</strong> > <strong>စာရင်းသွင်းမှုများ</strong> ကို နှိပ်ပါ။",
            "<strong>NahiDeck</strong> ကို ရွေးချယ်ပြီး <strong>\"စာရင်းသွင်းမှု ပယ်ဖျက်ရန်\"</strong> ကို နှိပ်ပါ။"
          ]]
        ]]
      ]
    }
  },

  // AWAITING_NATIVE_SPEAKER_REVIEW
  ar: {
    privacy: {
      title: "سياسة خصوصية NahiDeck",
      updated: "٢٥ أكتوبر ٢٠٢٦",
      blocks: [
        ["p", "يولي NahiDeck (\"نحن\" أو \"التطبيق\" أو \"الخدمة\") أهمية قصوى لخصوصية مستخدميه وحماية البيانات الشخصية. تنطبق هذه السياسة على <strong>تطبيق NahiDeck لنظام Android</strong> و<strong>عميل NahiDeck لنظام Windows</strong> و<strong>إضافة متصفح الويب (NahiDeck Connect)</strong>."],
        ["h", "باختصار"],
        ["ul", [
          "<strong>ما نجمعه:</strong> معلومات الحساب (اختياري)، وسجلات ترخيص Pro واقتران الأجهزة، وبيانات الاستخدام المجهولة الاختيارية، وتقارير الأعطال التي تختار إرسالها.",
          "<strong>أين تتم معالجة البيانات:</strong> في أوروبا (Firestore و Cloud Functions). تتم معالجة تسجيل الدخول (Firebase Authentication) والتحقق من عمليات الشراء (RevenueCat) في الولايات المتحدة؛ الأساس القانوني لهذا النقل موضح أدناه.",
          "<strong>مدة الاحتفاظ بالبيانات:</strong> السجلات التقنية لمدة 30 يومًا، وسجلات التدقيق والأعطال لمدة 90 يومًا، وسجلات التخطيط المجهولة لمدة 180 يومًا. يؤدي حذف حسابك إلى إزالة كافة بيانات حسابك.",
          "<strong>حقوقك:</strong> يمكنك طلب الوصول إلى بياناتك وتصحيحها وحذفها. يمكنك حذف حسابك من داخل التطبيق أو من صفحة حذف الحساب.",
          "<strong>تقارير الأعطال:</strong> لا تُرسل إلا بعد تأكيدك. يتم تضمين ملاحظتك الاختيارية والبريد الإلكتروني للتواصل؛ وتُحفظ الملاحظة كما هي، بينما يتم حجب عناوين البريد الإلكتروني و IP."
        ]],
        ["h", "1. مراقب البيانات والتواصل"],
        ["p", "وفقًا للائحة العامة لحماية البيانات (GDPR) وقوانين حماية البيانات المعمول بها، فإن مراقب البيانات هو:"],
        ["h", "2. الاتصال المحلي (لا يوجد اعتماد على السحابة)"],
        ["p", "يعمل NahiDeck مباشرة بين هاتف Android وجهاز الكمبيوتر بنظام Windows عبر شبكة Wi-Fi المحلية أو كابل USB أو تقنية Bluetooth Low Energy (BLE):"],
        ["ul", [
          "<strong>أوامر الوسائط والصوت:</strong> يتم نقل ضغطات المفاتيح وتعديلات الصوت وأوامر الوسائط عبر شبكتك المحلية فقط، ولا تُرسل إلى خوادم خارجية.",
          "<strong>وحدات ماكرو الكمبيوتر:</strong> يتم تنفيذ ومعالجة الاختصارات والإجراءات المخصصة على جهاز الكمبيوتر الخاص بك.",
          "<strong>التشفير:</strong> الاتصال المحلي محمي بشهادات TLS يتم إنشاؤها محليًا وتثبيت بصمة شهادة TOFU (الثقة عند الاستخدام الأول)."
        ]],
        ["h", "3. ما نجمعه وكيف نستخدمه"],
        ["p", "فئات البيانات وموفرو الخدمات وأغراض الاستخدام مفصلة في الجدول الوارد في الملحق (أ) في أسفل هذه الصفحة."],
        ["h", "4. النسخ الاحتياطي السحابي (Google Drive)"],
        ["p", "يتيح لك النسخ الاحتياطي الاختياري على Google Drive حفظ تخطيطات الشاشة وملفات التعريف والتفضيلات:"],
        ["ul", [
          "<strong>مكان التخزين:</strong> في مجلد بيانات التطبيق الخاص على Google Drive الخاص بك فقط (drive.appdata). ولا يتم إرساله أو استضافته مطلقًا على خوادم NahiDeck أو خوادم جهات خارجية.",
          "<strong>محتويات النسخة الاحتياطية:</strong> تخطيطات الشاشة وملفات التعريف والتفضيلات المرئية وتعريفات إجراءات الكمبيوتر الاختيارية. لا يتم تضمين أسرار الأجهزة ومفاتيح الاقتران وكلمات مرور الحسابات إطلاقًا.",
          "<strong>منفصل تمامًا عن بيانات القياس عن بُعد:</strong> لا تتم قراءة بيانات النسخ الاحتياطي أو استخدامها لأغراض التحليلات أبدًا."
        ]],
        ["h", "5. بيانات لا نجمعها إطلاقًا"],
        ["ul", [
          "<strong>الموقع الجغرافي:</strong> لا يتم استخدام خدمات GPS أو الموقع أبدًا. يتم استخدام إذن فحص البلوتوث في Android فقط للعثور على الأجهزة المجاورة.",
          "<strong>الملفات الشخصية:</strong> لا نصل إلى الصور أو مقاطع الفيديو أو المستندات أو التسجيلات الصوتية.",
          "<strong>جهات الاتصال:</strong> لا نصل إلى قائمة جهات الاتصال الخاصة بك.",
          "<strong>معرفات العتاد:</strong> لا نجمع أرقام IMEI أو عناوين MAC أو الأرقام التسلسلية للأجهزة، بل تُستخدم معرفات يتم إنشاؤها عشوائيًا."
        ]],
        ["h", "6. الاحتفاظ بالبيانات وحذفها"],
        ["ul", [
          "<strong>بيانات الحساب والترخيص:</strong> تُحذف نهائيًا بناءً على طلبك، عبر الإعدادات > الحساب > \"حذف حسابي\" في التطبيق، أو عبر صفحة حذف الحساب على موقعنا الإلكتروني.",
          "<strong>بيانات القياس عن بُعد:</strong> يؤدي سحب الموافقة في الإعدادات > الخصوصية إلى حذف السجل الحالي فورًا. تنتهي صلاحية السجلات النشطة تلقائيًا في غضون 180 يومًا (TTL).",
          "<strong>سجلات الخادم التقنية:</strong> يتم الاحتفاظ بسجلات طلبات البنية التحتية لمدة تصل إلى 30 يومًا.",
          "<strong>سجلات الترخيص والتدقيق:</strong> تحتوي سجلات عمليات الحساب والترخيص على صيغة تجزئة أحادية الاتجاه لمعرف المستخدم الخاص بك، ويتم الاحتفاظ بها لمدة تصل إلى 90 يومًا.",
          "<strong>تقارير الأعطال:</strong> تتضمن إصدار التطبيق، وتجزئة الجهاز، ونوع الخطأ ونصه، والتتبع التراكمي، وأسطر السجل. يتم حجب عناوين البريد الإلكتروني وعناوين IP وأسماء مجلدات المستخدمين في مسارات الملفات قبل الحفظ. يتم الاحتفاظ بها لمدة تصل إلى 90 يومًا.",
          "<strong>عمليات النقل الدولي:</strong> تُدار خدمة Firebase Authentication بواسطة Google من مراكز بيانات داخل الولايات المتحدة. وللتحقق من المشتريات، تعالج RevenueCat بياناتك في الولايات المتحدة (AWS)؛ وهذا النقل مغطى بالبنود التعاقدية القياسية. وتتم معالجة بيانات Firestore و Cloud Functions و Cloud KMS على خوادم في أوروبا (europe-west1). الأساس القانوني للنقل من تركيا بموجب المادة 9 من قانون KVKK: [الأساس القانوني: سيتم تعبئته بواسطة المستشار القانوني].",
          "<strong>البريد الإلكتروني للدعم:</strong> تتم معالجته عبر مجموعات Google Groups (مجموعة مستهلكين) ويخضع لـ <a href='https://policies.google.com/privacy?hl=ar'>سياسة خصوصية Google</a> و<a href='https://policies.google.com/terms?hl=ar'>شروط الخدمة</a>. وتُحفظ الرسائل في أرشيف المجموعة."
        ]],
        ["h", "7. حقوقك (GDPR و KVKK)"],
        ["p", "بموجب اللائحة العامة لحماية البيانات (GDPR) والقوانين المعمول بها، يحق لك معرفة ما إذا كنا نعالج بياناتك، والوصول إليها، وتصحيحها، والمطالبة بحذفها. لممارسة هذه الحقوق، تواصل معنا عبر البريد الإلكتروني nahideck-support@googlegroups.com."],
        ["h", "الملحق (أ): فئات البيانات وموفرو الخدمات (تفاصيل تقنية)"],
        ["table", ["فئة البيانات", "المعلومات المجمعة", "موفر الخدمة", "الغرض من الاستخدام"], [
          ["<strong>حساب المستخدم</strong>", "عنوان البريد الإلكتروني، الاسم المعروض، معرف مستخدم Firebase (UID)", "Google Firebase Authentication", "تسجيل الدخول والتحقق من ملكية ترخيص Pro. اختياري؛ يمكن استخدام الخطة المجانية دون تسجيل الدخول."],
          ["<strong>الترخيص والاقتران</strong>", "معرف الهاتف العشوائي، معرف الكمبيوتر، UID", "Google Cloud Firestore و Cloud KMS", "تطبيق سياسة الاستخدام العادل (هاتف واحد + جهاز كمبيوتر واحد) وتوقيع رموز الترخيص."],
          ["<strong>المشتريات والاشتراكات</strong>", "رمز طلب/شراء Google Play، معرف مستخدم RevenueCat App User ID، حالة الاستحقاق", "Google Play Billing و RevenueCat", "معالجة مشتريات وتجديدات Pro والتحقق منها."],
          ["<strong>القياس عن بُعد للاستخدام والتخطيط (اختياري)</strong>", "معرف تثبيت عشوائي، تخطيط الشبكة (أنواع الأدوات، المواضع، الأحجام)، السمة المختارة، فئة الخطة", "Google Cloud Firestore (anonymous_layouts)", "فهم الأدوات والتخطيطات الشائعة لتحسين الواجهة. <strong>لا يحتوي على أي بيانات شخصية أو نصوص أو تفاصيل حساب.</strong>"],
          ["<strong>بيانات الإضافة المحلية</strong>", "حالة الوسائط في علامة تبويب المتصفح النشطة (اسم المقطع، الفنان، حالة التشغيل)", "المتصفح المحلي وتطبيق الكمبيوتر فقط", "عرض وسائط الويب على الهاتف والكمبيوتر. لا تُرسل إلى السحابة مطلقًا."],
          ["<strong>التحقق من سلامة التطبيق</strong>", "اسم الحزمة، وشهادة توقيع التطبيق، ونتيجة سلامة الجهاز", "Google Play Integrity (Google)", "التحقق من تثبيت التطبيق عبر Google Play وتشغيله على جهاز موثوق لمنع إساءة الاستخدام. لا تشارك Google هذه البيانات مع جهات خارجية."],
          ["<strong>تقارير الأعطال (اختياري)</strong>", "إصدار التطبيق، وتجزئة الجهاز، ونوع الخطأ ونصه، والتتبع التراكمي وأسطر السجل (تُحجب عناوين البريد الإلكتروني و IP)", "Google Cloud Functions و Firestore (أوروبا)؛ بريد الدعم عبر Google Groups", "تحليل الأعطال وإصلاحها. لا يُرسل إلا بموافقتك."]
        ]],
        ["card", [["p", "<strong>مراقب البيانات:</strong> Kaya Furkan İPEKCİ"], ["p", "<strong>البريد الإلكتروني للتواصل:</strong> nahideck-support@googlegroups.com"], ["p", "<strong>الموقع الإلكتروني:</strong> https://nahideck.github.io"]]],
      ]
    },
    delete: {
      title: "طلب حذف الحساب والبيانات",
      blocks: [
        ["p", "إذا كنت ترغب في حذف حسابك في NahiDeck وجميع البيانات المرتبطة به نهائيًا، يمكنك استخدام إحدى الطرق التالية."],
        ["h", "الطريقة 1: الحذف من داخل التطبيق (موصى بها)"],
        ["ol", [
          "افتح تطبيق <strong>NahiDeck</strong> على جهاز Android الخاص بك.",
          "انتقل إلى <strong>الإعدادات</strong> من الشريط الجانبي (أو القائمة العلوية).",
          "افتح قسم <strong>الحساب</strong>.",
          "مرر إلى أسفل الشاشة واضغط على <strong>\"حذف حسابي\"</strong>.",
          "قم بتأكيد الإجراء في نافذة الحوار.",
          "سيتم حذف سجل مستخدم Firebase والأجهزة المقترنة وسجلات الترخيص السحابية نهائيًا."
        ]],
        ["p", "<em>لأسباب أمنية، يتطلب حذف الحساب أن تكون قد قمت بتسجيل الدخول خلال آخر 5 دقائق. إذا ظهر خطأ، سجّل الخروج ثم سجّل الدخول مرة أخرى وأعد المحاولة.</em>"],
        ["p", "<em>ملاحظة: حذف حسابك لا يؤدي إلى إزالة النسخة الاحتياطية للتطبيق من Google Drive تلقائيًا. يجب حذفها يدويًا من إعدادات Google Drive (Google Drive > الإعدادات > إدارة التطبيقات).</em>"],
        ["h", "الطريقة 2: طلب الحذف عبر البريد الإلكتروني"],
        ["p", "إذا لم تتمكن من الوصول إلى التطبيق أو قمت بإلغاء تثبيته، يمكنك إرسال طلبك عبر البريد الإلكتروني:"],
        ["card", [
          ["p", "<strong>البريد الإلكتروني للدعم:</strong> nahideck-support@googlegroups.com"],
          ["p", "<strong>الموضوع:</strong> <code>NahiDeck طلب حذف الحساب والبيانات</code>"],
          ["p", "<strong>المعلومات المطلوبة:</strong>"],
          ["ul", ["عنوان البريد الإلكتروني لحساب Google المستخدم لتسجيل الدخول إلى NahiDeck.", "<em>(اختياري)</em> رقم طلب Google Play أو مرجع اشتراك RevenueCat."]]
        ]],
        ["p", "بعد التحقق من هويتك، سيتم حذف حسابك والسجلات السحابية المرتبطة به نهائيًا في غضون <strong>7 أيام عمل</strong>."],
        ["h", "ما الذي يتم حذفه نهائيًا؟"],
        ["ul", [
          "سجل مستخدم Firebase Authentication وعنوان البريد الإلكتروني وتفاصيل الملف الشخصي.",
          "سجل ترخيص Pro في مجموعة <code>entitlements</code> على Firestore.",
          "سجلات الهواتف وأجهزة الكمبيوتر المقترنة في مجموعة <code>devices</code> على Firestore.",
          "الملف الشخصي للمشترك في RevenueCat (<code>app_user_id</code>)؛ يُحذف حيثما كان ذلك ممكنًا تقنيًا. إذا تعذر حذفه، يرجى إبلاغنا عبر البريد الإلكتروني.",
          "مفاتيح الترخيص وسجلات الجلسات المخزنة بأمان على جهازك."
        ]],
        ["h", "ما الذي يتم الاحتفاظ به؟"],
        ["ul", [
          "<strong>سجلات فواتير Google Play:</strong> تحتفظ بها Google لأسباب ضريبية وامتثالًا لقوانين حماية المستهلك. لا يخزن NahiDeck تفاصيل الدفع.",
          "<strong>سجلات التدقيق:</strong> تحتوي سجلات عمليات الحساب والترخيص على معرف مجزأ لا يمكن ربطه مباشرة بهويتك، وتُحذف تلقائيًا في غضون 90 يومًا.",
          "<strong>تقارير الأعطال:</strong> تُحذف تلقائيًا في غضون 90 يومًا."
        ]],
        ["danger", [
          ["h3", "هام: قم بإلغاء اشتراكك النشط"],
          ["p", "حذف حسابك <strong>لا يؤدي تلقائيًا إلى إلغاء</strong> الاشتراك الذي بدأته عبر Google Play. لتجنب أي رسوم مستقبلية، قم بإلغاء الاشتراك قبل حذف حسابك:"],
          ["ol", [
            "افتح <strong>متجر Google Play</strong> على جهاز Android الخاص بك.",
            "اضغط على أيقونة ملفك الشخصي > <strong>الدفعات والاشتراكات</strong> > <strong>الاشتراكات</strong>.",
            "حدد <strong>NahiDeck</strong> ثم اضغط على <strong>\"إلغاء الاشتراك\"</strong>."
          ]]
        ]]
      ]
    }
  },

  // AWAITING_NATIVE_SPEAKER_REVIEW
  fa: {
    privacy: {
      title: "سیاست حفظ حریم خصوصی NahiDeck",
      updated: "۲۵ اکتبر ۲۰۲۶",
      blocks: [
        ["p", "برنامه NahiDeck («ما»، «برنامه» یا «سرویس») به حفظ حریم خصوصی کاربران و حفاظت از داده‌های شخصی اهمیت ویژه‌ای می‌دهد. این سیاست‌نامه شامل <strong>برنامه Android برنامه NahiDeck</strong>، <strong>کلاینت دسکتاپ Windows برنامه NahiDeck</strong> و <strong>افزونه مرورگر وب (NahiDeck Connect)</strong> می‌باشد."],
        ["h", "به طور خلاصه"],
        ["ul", [
          "<strong>آنچه جمع‌آوری می‌کنیم:</strong> اطلاعات حساب کاربری (اختیاری)، سوابق مجوز Pro و جفت‌سازی دستگاه‌ها، داده‌های اختیاری و ناشناس استفاده از برنامه، و گزارش‌های خرابی که خودتان ارسال می‌کنید.",
          "<strong>محل پردازش داده‌ها:</strong> در اروپا (Firestore و Cloud Functions). ورود به سیستم (Firebase Authentication) و تأیید خرید (RevenueCat) در ایالات متحده پردازش می‌شوند؛ مبنای قانونی این انتقال در ادامه توضیح داده شده است.",
          "<strong>مدت زمان نگهداری:</strong> لاگ‌های فنی به مدت ۳۰ روز، سوابق حسابرسی و خرابی‌ها به مدت ۹۰ روز، و سوابق ناشناس چیدمان به مدت ۱۸۰ روز. با حذف حساب کاربری، تمام داده‌های حساب شما حذف خواهند شد.",
          "<strong>حقوق شما:</strong> شما می‌توانید درخواست دسترسی، تصحیح و حذف داده‌های خود را داشته باشید. می‌توانید حساب خود را از داخل برنامه یا از طریق صفحه حذف حساب کاربری پاک کنید.",
          "<strong>گزارش‌های خرابی:</strong> تنها پس از تأیید شما ارسال می‌شوند. یادداشت اختیاری و ایمیل تماس شما ارسال می‌شود؛ یادداشت همان‌گونه که نوشته شده ذخیره شده و ایمیل و آدرس‌های IP ماسک می‌شوند."
        ]],
        ["h", "1. کنترل‌کننده داده و اطلاعات تماس"],
        ["p", "بر اساس مقررات عمومی حفاظت از داده‌ها (GDPR) و قوانین جاری، کنترل‌کننده داده‌ها عبارت است از:"],
        ["h", "2. ارتباط محلی (بدون وابستگی به فضای ابری)"],
        ["p", "برنامه NahiDeck مستقیماً بین گوشی Android و رایانه Windows شما از طریق شبکه محلی Wi-Fi، کابل USB یا بلوتوث کم‌مصرف (BLE) ارتباط برقرار می‌کند:"],
        ["ul", [
          "<strong>دستورات رسانه و صدا:</strong> فشردن کلیدها، تغییرات صدا و دستورات پخش رسانه فقط در شبکه محلی شما منتقل می‌شوند و به هیچ سرور خارجی ارسال نمی‌گردند.",
          "<strong>ماکروهای رایانه:</strong> میانبرها و اقدامات سفارشی مستقیماً روی رایانه شما اجرا و پردازش می‌شوند.",
          "<strong>رمزگذاری:</strong> اتصال محلی با گواهی‌های TLS تولیدشده به صورت محلی و پین‌کردن اثر انگشت گواهی بر پایه TOFU (اعتماد در اولین استفاده) محافظت می‌شود."
        ]],
        ["h", "3. چه داده‌هایی را جمع‌آوری می‌کنیم و چگونه استفاده می‌کنیم"],
        ["p", "دسته‌بندی‌های داده، ارائه‌دهندگان سرویس و اهداف استفاده به صورت دقیق در جدول پیوست الف در انتهای این صفحه آمده است."],
        ["h", "4. پشتیبان‌گیری ابری (Google Drive)"],
        ["p", "پشتیبان‌گیری اختیاری در Google Drive به شما اجازه می‌دهد چیدمان صفحات، نمایه‌ها و تنظیمات برگزیده خود را ذخیره کنید:"],
        ["ul", [
          "<strong>محل ذخیره‌سازی:</strong> تنها در پوشه خصوصی برنامه در حساب Google Drive خودتان (drive.appdata). این داده‌ها هرگز به سرورهای NahiDeck یا شخص ثالث ارسال یا میزبانی نمی‌شوند.",
          "<strong>محتوای نسخه پشتیبان:</strong> چیدمان صفحات، نمایه‌ها، تنظیمات ظاهری و تعریف اختیاری دستورات رایانه. کلیدهای امنیتی دستگاه، کدهای جفت‌سازی و رمز عبور حساب کاربری هرگز در نسخه پشتیبان قرار نمی‌گیرند.",
          "<strong>کاملاً مجزا از داده‌های تله‌متری:</strong> داده‌های پشتیبان هرگز خوانده نشده و برای مقاصد آماری استفاده نمی‌شوند."
        ]],
        ["h", "5. داده‌هایی که هرگز جمع‌آوری نمی‌کنیم"],
        ["ul", [
          "<strong>موقعیت مکانی:</strong> سرویس‌های موقعیت مکانی و GPS هرگز استفاده نمی‌شوند. مجوز اسکن بلوتوث در Android صرفاً جهت شناسایی دستگاه‌های نزدیک است.",
          "<strong>فایل‌های شخصی:</strong> ما به عکس‌ها، ویدیوها، اسناد یا صداهای ضبط‌شده دسترسی نداریم.",
          "<strong>مخاطبین:</strong> ما به فهرست مخاطبین شما دسترسی نداریم.",
          "<strong>شناسه‌های سخت‌افزاری:</strong> ما کد IMEI، آدرس‌های MAC یا شماره سریال دستگاه را جمع‌آوری نمی‌کنیم؛ به جای آن از شناسه‌های تصادفی استفاده می‌شود."
        ]],
        ["h", "6. نگهداری و حذف داده‌ها"],
        ["ul", [
          "<strong>داده‌های حساب و مجوز:</strong> بر اساس درخواست شما، از طریق «تنظیمات > حساب کاربری > حذف حساب کاربری من» در برنامه یا از طریق صفحه حذف حساب در وب‌سایت به صورت دائمی حذف می‌شوند.",
          "<strong>داده‌های تله‌متری:</strong> با لغو موافقت در «تنظیمات > حریم خصوصی»، سوابق موجود بلافاصله حذف می‌شوند. سوابق فعال حداکثر ظرف مدت ۱۸۰ روز (TTL) به صورت خودکار منقضی و حذف می‌گردند.",
          "<strong>لاگ‌های فنی سرور:</strong> سوابق درخواست‌های زیرساختی حداکثر تا ۳۰ روز نگهداری می‌شوند.",
          "<strong>سوابق مجوز و حسابرسی:</strong> سوابق عملیات حساب و مجوز حاوی شناسه کاربری هش‌شده شما هستند و حداکثر تا ۹۰ روز نگهداری می‌شوند.",
          "<strong>گزارش‌های خرابی:</strong> شامل نسخه برنامه، هش دستگاه، نوع و متن خطا، ردگیری پشته و خطوط لاگ هستند. ایمیل، آدرس‌های IP و نام پوشه کاربری در مسیر فایل‌ها پیش از ذخیره ماسک می‌شوند. حداکثر تا ۹۰ روز نگهداری می‌شوند.",
          "<strong>انتقال‌های بین‌المللی:</strong> سرویس Firebase Authentication توسط Google از مراکز داده در ایالات متحده مدیریت می‌شود. جهت بررسی خرید، RevenueCat داده‌های شما را در ایالات متحده (AWS) پردازش می‌کند؛ این انتقال بر اساس بندهای استاندارد قراردادی محافظت می‌شود. داده‌های Firestore، Cloud Functions و Cloud KMS بر روی سرورهایی در اروپا (europe-west1) پردازش می‌شوند. مبنای قانونی انتقال از ترکیه طبق ماده ۹ قانون KVKK: [مبنای قانونی: توسط وکیل تکمیل خواهد شد].",
          "<strong>ایمیل پشتیبانی:</strong> از طریق Google Groups پردازش شده و مشمول <a href='https://policies.google.com/privacy?hl=fa'>سیاست حفظ حریم خصوصی</a> و <a href='https://policies.google.com/terms?hl=fa'>شرایط خدمات</a> Google است. پیام‌ها در آرشیو گروه باقی می‌مانند."
        ]],
        ["h", "7. حقوق شما (GDPR و KVKK)"],
        ["p", "طبق GDPR و قوانین حاکم، شما حق دارید بدانید داده‌های شما پردازش می‌شوند یا خیر، به آنها دسترسی داشته باشید، تصحیح کنید و درخواست حذف نمایید. برای اعمال این حقوق، به nahideck-support@googlegroups.com ایمیل بزنید."],
        ["h", "پیوست الف: دسته‌بندی داده‌ها و ارائه‌دهندگان سرویس (جزئیات فنی)"],
        ["table", ["دسته‌بندی داده‌ها", "اطلاعات جمع‌آوری‌شده", "ارائه‌دهنده سرویس", "هدف استفاده"], [
          ["<strong>حساب کاربری</strong>", "آدرس ایمیل، نام نمایشی، شناسه کاربری Firebase (UID)", "Google Firebase Authentication", "ورود به سیستم و بررسی مالکیت مجوز Pro. اختیاری؛ نسخه رایگان بدون ورود قابل استفاده است."],
          ["<strong>مجوز و جفت‌سازی</strong>", "شناسه تصادفی گوشی، شناسه رایانه، UID", "Google Cloud Firestore و Cloud KMS", "اجرای قانون استفاده منصفانه (۱ گوشی + ۱ رایانه) و امضای توکن‌های مجوز."],
          ["<strong>خریدها و اشتراک‌ها</strong>", "توکن سفارش/خرید Google Play، شناسه کاربر RevenueCat App User ID، وضعیت دسترسی", "Google Play Billing و RevenueCat", "پردازش و اعتبارسنجی خریدها و تمدید اشتراک Pro."],
          ["<strong>تله‌متری استفاده و چیدمان (اختیاری)</strong>", "شناسه نصب تصادفی، چیدمان شبکه (نوع ویجت‌ها، موقعیت، ابعاد)، انتخاب پوسته، نوع پلن", "Google Cloud Firestore (anonymous_layouts)", "شناسایی ویجت‌ها و چیدمان‌های پرطرفدار برای بهبود رابط کاربری. <strong>حاوی هیچ داده شخصی، متن یا اطلاعات حساب کاربری نیست.</strong>"],
          ["<strong>داده‌های افزونه محلی</strong>", "وضعیت رسانه در تب فعال مرورگر (نام قطعه، هنرمند، وضعیت پخش)", "فقط مرورگر محلی و برنامه رایانه", "نمایش رسانه‌های وب روی گوشی و رایانه. هرگز به فضای ابری ارسال نمی‌شود."],
          ["<strong>بررسی اصالت برنامه</strong>", "نام بسته، گواهی امضای برنامه و نتیجه بررسی سلامت دستگاه", "Google Play Integrity (Google)", "بررسی نصب قانونی برنامه از طریق Google Play و اجرا بر روی دستگاه قابل اعتماد؛ پیشگیری از سوءاستفاده. Google این داده‌ها را با اشخاص ثالث به اشتراک نمی‌گذارد."],
          ["<strong>گزارش‌های خرابی (اختیاری)</strong>", "نسخه برنامه، هش دستگاه، نوع و متن خطا، ردگیری پشته و خطوط لاگ (ایمیل‌ها و IPها ماسک می‌شوند)", "Google Cloud Functions و Firestore (اروپا)؛ ایمیل پشتیبانی از طریق Google Groups", "تحلیل و رفع خرابی‌ها. تنها با تأیید شما ارسال می‌شود."]
        ]],
        ["card", [["p", "<strong>کنترل‌کننده داده:</strong> Kaya Furkan İPEKCİ"], ["p", "<strong>ایمیل تماس:</strong> nahideck-support@googlegroups.com"], ["p", "<strong>وب‌سایت:</strong> https://nahideck.github.io"]]],
      ]
    },
    delete: {
      title: "درخواست حذف حساب کاربری و داده‌ها",
      blocks: [
        ["p", "اگر مایل هستید حساب کاربری NahiDeck و تمام داده‌های مربوط به آن را برای همیشه حذف کنید، می‌توانید از یکی از روش‌های زیر استفاده نمایید."],
        ["h", "روش ۱: حذف از داخل برنامه (پیشنهادی)"],
        ["ol", [
          "برنامه <strong>NahiDeck</strong> را روی دستگاه Android خود باز کنید.",
          "از طریق داک کناری (یا منوی بالا) به بخش <strong>تنظیمات</strong> بروید.",
          "بخش <strong>حساب کاربری</strong> را باز کنید.",
          "به پایین صفحه رفته و گزینه <strong>«حذف حساب کاربری من»</strong> را لمس کنید.",
          "عملیات را در پنجره بازشده تأیید کنید.",
          "سوابق کاربری Firebase، دستگاه‌های جفت‌شده و سوابق مجوز ابری شما برای همیشه حذف خواهند شد."
        ]],
        ["p", "<em>به دلایل امنیتی، حذف حساب کاربری مستلزم آن است که طی ۵ دقیقه گذشته وارد حساب شده باشید. در صورت بروز خطا، از حساب خارج شده، دوباره وارد شوید و مجدداً تلاش کنید.</em>"],
        ["p", "<em>نکته: حذف حساب کاربری باعث حذف خودکار نسخه پشتیبان برنامه در Google Drive نمی‌شود. باید خودتان آن را از طریق تنظیمات Google Drive (Google Drive > تنظیمات > مدیریت برنامه‌ها) حذف کنید.</em>"],
        ["h", "روش ۲: درخواست حذف از طریق ایمیل"],
        ["p", "اگر به برنامه دسترسی ندارید یا آن را حذف کرده‌اید، درخواست خود را از طریق ایمیل ارسال کنید:"],
        ["card", [
          ["p", "<strong>ایمیل پشتیبانی:</strong> nahideck-support@googlegroups.com"],
          ["p", "<strong>موضوع:</strong> <code>درخواست حذف حساب کاربری و داده‌های NahiDeck</code>"],
          ["p", "<strong>اطلاعات لازم:</strong>"],
          ["ul", ["آدرس ایمیل حساب Google که با آن وارد NahiDeck شده‌اید.", "<em>(اختیاری)</em> شماره سفارش Google Play یا شناسه اشتراک RevenueCat."]]
        ]],
        ["p", "پس از تأیید هویت شما، حساب کاربری و تمام سوابق ابری مرتبط ظرف مدت <strong>۷ روز کاری</strong> به صورت دائمی حذف خواهند شد."],
        ["h", "چه مواردی برای همیشه حذف می‌شوند؟"],
        ["ul", [
          "سوابق کاربری در Firebase Authentication، آدرس ایمیل و اطلاعات نمایه کاربری.",
          "سوابق مجوز Pro در کالکشن <code>entitlements</code> در Firestore.",
          "سوابق گوشی و رایانه‌های جفت‌شده در کالکشن <code>devices</code> در Firestore.",
          "نمایه مشترک در RevenueCat (<code>app_user_id</code>)؛ در صورت امکان فنی حذف می‌شود. اگر امکان حذف نبود، از طریق ایمیل به ما اطلاع دهید.",
          "کلیدهای مجوز و سوابق نشست‌های ذخیره‌شده در حافظه امن دستگاه شما."
        ]],
        ["h", "چه مواردی نگهداری می‌شوند؟"],
        ["ul", [
          "<strong>سوابق مالی Google Play:</strong> به دلایل مالیاتی و قوانین مصرف‌کننده توسط Google نگهداری می‌شوند. NahiDeck هیچ اطلاعات پرداختی را ذخیره نمی‌کند.",
          "<strong>سوابق حسابرسی:</strong> سوابق عملیات حساب و مجوز حاوی شناسه‌های هش‌شده هستند که امکان اتصال مستقیم به هویت شما را ندارند و ظرف ۹۰ روز به صورت خودکار حذف می‌شوند.",
          "<strong>گزارش‌های خرابی:</strong> ظرف ۹۰ روز به صورت خودکار حذف می‌شوند."
        ]],
        ["danger", [
          ["h3", "مهم: اشتراک فعال خود را لغو کنید"],
          ["p", "حذف حساب کاربری باعث <strong>لغو خودکار</strong> اشتراک خریداری‌شده از طریق Google Play نمی‌شود. جهت جلوگیری از کسر هزینه در دوره‌های بعدی، پیش از حذف حساب کاربری اشتراک خود را لغو کنید:"],
          ["ol", [
            "برنامه <strong>Google Play Store</strong> را در دستگاه Android خود باز کنید.",
            "روی نماد نمایه خود ضربه بزنید > <strong>پرداخت‌ها و اشتراک‌ها</strong> > <strong>اشتراک‌ها</strong>.",
            "برنامه <strong>NahiDeck</strong> را انتخاب کرده و <strong>«لغو اشتراک»</strong> را لمس کنید."
          ]]
        ]]
      ]
    }
  }
};
