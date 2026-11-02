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
  }
};
