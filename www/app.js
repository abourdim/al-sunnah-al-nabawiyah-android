/* السنة النبوية بين أهل الفقه وأهل الحديث — app.js */
/* Based on the book by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'السنة النبوية',
    splashSub: 'بين أهل الفقه وأهل الحديث',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة الحشر ٥٩: ٧',
    tabHome: 'الرئيسية', tabCards: 'البطاقات', tabReflections: 'تأملات',
    tabHabits: 'العادات', tabQuiz: 'اختبار', tabAbout: 'الكتاب',
    cardsTitle: 'بطاقات الحديث والفقه',
    cardsDesc: '٩ فصول من الكتاب: شروط الصحة، نماذج الرأي والرواية، المرأة، الغناء، العبادات والعادات، المسّ، فقه الكتاب، أحاديث الفتن، الوسائل والغايات، القدر',
    reflectionsTitle: 'تأملات في فهم السنة',
    reflectionsDesc: 'كيف نفهم السنة النبوية في سياقها الصحيح',
    habitsTitle: 'عاداتي اليومية',
    habitsDesc: 'عادات مستوحاة من السنة — تتبّع تقدمك يومياً',
    quizTitle: 'اختبر فهمك',
    quizDesc: 'هل تفهم السنة كما ينبغي؟ أجب بصدق',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية من السنة',
    resetBtn: 'إعادة تعيين اليوم',
    submitQuiz: 'اعرف النتيجة',
    dailyLabel: '✨ فكرة اليوم',
    quizAgain: 'أعد الاختبار',
    yes: 'نعم', no: 'لا', sometimes: 'أحياناً',
    share: 'مشاركة',
    searchPlaceholder: 'ابحث في البطاقات...',
    streakMsg: 'يوم متتالي!',
    allDone: 'أحسنت! أكملت جميع العادات!',
    problem: '⚠️ الفهم الخاطئ',
    solution: '✅ الفهم الصحيح',
    fiqh: 'يوضح الغزالي: الفقه',
    hadith: 'الحديث',
    splashFeatures: [
      '٢٠ بطاقة عن فهم السنة النبوية',
      'تأملات في العلاقة بين الحديث والفقه',
      'عادات يومية من السنة',
      'اختبار ذاتي + أدعية نبوية'
    ],
  },
  en: {
    appTitle: 'Prophetic Sunnah',
    splashSub: 'Between Jurists and Hadith Scholars',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Al-Hashr 59:7',
    tabHome: 'Home', tabCards: 'Cards', tabReflections: 'Reflections',
    tabHabits: 'Habits', tabQuiz: 'Quiz', tabAbout: 'Book',
    cardsTitle: 'Hadith & Fiqh Cards',
    cardsDesc: '20 cards combining hadith understanding with jurisprudential application — in simple language for everyone',
    reflectionsTitle: 'Reflections on Understanding Sunnah',
    reflectionsDesc: 'How to understand the Prophetic Sunnah in its proper context',
    habitsTitle: 'My Daily Habits',
    habitsDesc: 'Habits inspired by the Sunnah — track your daily progress',
    quizTitle: 'Test Your Understanding',
    quizDesc: 'Do you understand the Sunnah properly? Answer honestly',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas from the Sunnah',
    resetBtn: 'Reset Today',
    submitQuiz: 'See Results',
    dailyLabel: '✨ Today\'s Insight',
    quizAgain: 'Retake Quiz',
    yes: 'Yes', no: 'No', sometimes: 'Sometimes',
    share: 'Share',
    searchPlaceholder: 'Search cards...',
    streakMsg: 'day streak!',
    allDone: 'Well done! All habits completed!',
    problem: '⚠️ Common Misunderstanding',
    solution: '✅ Correct Understanding',
    fiqh: 'Al-Ghazali clarifies: Fiqh',
    hadith: 'Hadith',
    splashFeatures: [
      '20 cards on understanding the Prophetic Sunnah',
      'Reflections on the relationship between hadith and fiqh',
      'Daily Sunnah-based habits with tracking',
      'Self-quiz + Prophetic duas'
    ],
  },
  fr: {
    appTitle: 'La Sunna Prophétique',
    splashSub: 'Entre juristes et spécialistes du Hadith',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Al-Hashr 59:7',
    tabHome: 'Accueil', tabCards: 'Cartes', tabReflections: 'Réflexions',
    tabHabits: 'Habitudes', tabQuiz: 'Quiz', tabAbout: 'Livre',
    cardsTitle: 'Cartes Hadith et Fiqh',
    cardsDesc: '20 cartes combinant compréhension du hadith et application juridique — en langage simple pour tous',
    reflectionsTitle: 'Réflexions sur la Compréhension de la Sunna',
    reflectionsDesc: 'Comment comprendre la Sunna prophétique dans son contexte approprié',
    habitsTitle: 'Mes Habitudes Quotidiennes',
    habitsDesc: 'Habitudes inspirées de la Sunna — suivez vos progrès',
    quizTitle: 'Testez Votre Compréhension',
    quizDesc: 'Comprenez-vous la Sunna correctement ? Répondez honnêtement',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas de la Sunna',
    resetBtn: 'Réinitialiser',
    submitQuiz: 'Voir les Résultats',
    dailyLabel: '✨ Pensée du Jour',
    quizAgain: 'Refaire le Quiz',
    yes: 'Oui', no: 'Non', sometimes: 'Parfois',
    share: 'Partager',
    searchPlaceholder: 'Rechercher les cartes...',
    streakMsg: 'jours consécutifs !',
    allDone: 'Bravo ! Toutes les habitudes accomplies !',
    problem: '⚠️ Malentendu Courant',
    solution: '✅ Compréhension Correcte',
    fiqh: 'Al-Ghazali clarifie: Fiqh',
    hadith: 'Hadith',
    splashFeatures: [
      '20 cartes sur la compréhension de la Sunna',
      'Réflexions sur la relation hadith-fiqh',
      'Habitudes quotidiennes avec suivi',
      'Quiz + duas prophétiques'
    ],
  }
};

// ═══════════════ CARDS DATA (20 cards) ═══════════════
const CARDS = [
  {
    id:1, emoji:'📖',
    ar:{title:'شروط صحة الحديث',desc:'يضع الغزالي ٥ شروط لقبول الحديث: ثلاثة للسند (راوٍ ضابط، مستقيم الدين، اتصال السلسلة) واثنان للمتن (ألا يكون شاذاً وألا يكون فيه علة خفية). يرى أن شرطي المتن أُهملا تاريخياً.',hadith:'شروط البخاري ومسلم في الرواة لا تغني عن فحص المتن',fiqh:'يوضح الغزالي: نقد المتن لا يقل أهمية عن نقد السند — وهذا ما أهمله كثيرون',action:'عندما تسمع حديثاً، لا تكتفِ بصحة السند — افحص المضمون أيضاً'},
    en:{title:'Conditions for Hadith Authenticity',desc:'Al-Ghazali sets 5 conditions for accepting hadith: 3 for the chain (careful narrator, moral uprightness, chain continuity) and 2 for the content (no irregularity, no hidden defect). He argues content conditions have been historically neglected.',hadith:'Bukhari and Muslims narrator conditions do not suffice without examining the content',fiqh:'Al-Ghazali clarifies: Content criticism is no less important than chain criticism — yet many have neglected it',action:'When you hear a hadith, don\'t just check the chain — examine the content too'},
    fr:{title:'Conditions d\'Authenticité du Hadith',desc:'Al-Ghazali pose 5 conditions pour accepter un hadith : 3 pour la chaîne (narrateur attentif, droiture morale, continuité) et 2 pour le contenu (pas d\'irrégularité, pas de défaut caché). Il argumente que les conditions du contenu ont été historiquement négligées.',hadith:'Les conditions de Bukhari et Muslim pour les narrateurs ne suffisent pas sans examiner le contenu',fiqh:'Al-Ghazali clarifie: La critique du contenu n\'est pas moins importante que celle de la chaîne',action:'Quand vous entendez un hadith, ne vérifiez pas seulement la chaîne — examinez aussi le contenu'}
  },
  {
    id:2, emoji:'⚖️',
    ar:{title:'نماذج من الرأي والرواية',desc:'يناقش الغزالي أحاديث قبلها المحدّثون لكن الفقهاء رفضوا العمل بظاهرها: هل يُعذّب الميت ببكاء أهله؟ أنكرت عائشة ذلك مستدلة بالقرآن: ولا تزر وازرة وزر أخرى.',hadith:'حديث "إن الميت يُعذّب ببكاء أهله" — ردّته عائشة بالقرآن',fiqh:'عائشة ضربت مثالاً على نقد المتن بالقرآن — وهو منهج الغزالي',action:'لا تقبل حديثاً يعارض صريح القرآن — تحقّق من السياق'},
    en:{title:'Examples of Opinion vs Narration',desc:'Al-Ghazali discusses hadith accepted by hadith scholars but rejected by jurists: Is the dead punished by family weeping? Aisha rejected this citing the Quran: no bearer of burdens shall bear another\'s burden.',hadith:'The hadith "the dead is punished by family weeping" — Aisha rejected it using the Quran',fiqh:'Aisha set the example of critiquing content via Quran — this is Al-Ghazali\'s methodology',action:'Don\'t accept a hadith that contradicts the clear Quran — verify the context'},
    fr:{title:'Exemples d\'Opinion vs Narration',desc:'Al-Ghazali discute des hadiths acceptés par les traditionnistes mais rejetés par les juristes : le mort est-il puni par les pleurs de sa famille ? Aïcha l\'a rejeté en citant le Coran.',hadith:'Le hadith « le mort est puni par les pleurs de sa famille » — Aïcha l\'a rejeté par le Coran',fiqh:'Al-Ghazali clarifie: Aïcha a donné l\'exemple de la critique du contenu par le Coran — c\'est la méthodologie d\'Al-Ghazali',action:'N\'acceptez pas un hadith qui contredit le Coran clair — vérifiez le contexte'}
  },
  {
    id:3, emoji:'👩',
    ar:{title:'المرأة في الإسلام',desc:'يرى الغزالي أن النقاب ليس فريضة بل عادة ثقافية. المرأة المسلمة يمكنها تولي الوظائف العامة. ينتقد إقصاء المرأة من المساجد ويرفض إكراه الفتاة على الزواج ممن تكره.',hadith:'ناقش أحاديث عن شهادة المرأة وحقوقها في النكاح والخلع',fiqh:'الغزالي يميز بين ما هو ثقافي وما هو ديني في أحكام المرأة',action:'افصل بين العادة والعبادة في فهمك لأحكام المرأة'},
    en:{title:'Women in Islam',desc:'Al-Ghazali argues niqab is not obligatory but cultural. Muslim women can hold public positions. He critiques excluding women from mosques and rejects forcing girls into unwanted marriages.',hadith:'He discusses hadith about women\'s testimony and their rights in marriage and divorce',fiqh:'Al-Ghazali distinguishes between cultural and religious rulings regarding women',action:'Separate cultural custom from religious obligation in your understanding of women\'s rulings'},
    fr:{title:'La Femme en Islam',desc:'Al-Ghazali soutient que le niqab n\'est pas obligatoire mais culturel. Les femmes musulmanes peuvent occuper des fonctions publiques. Il critique l\'exclusion des femmes des mosquées et rejette le mariage forcé.',hadith:'Il discute les hadiths sur le témoignage des femmes et leurs droits dans le mariage',fiqh:'Al-Ghazali distingue entre le culturel et le religieux dans les règles concernant les femmes',action:'Séparez la coutume culturelle de l\'obligation religieuse dans votre compréhension des règles sur les femmes'}
  },
  {
    id:4, emoji:'🎵',
    ar:{title:'حكم الغناء',desc:'يرى الغزالي أن الغناء مباح في أصله، متبعاً قاعدة أن الأصل في الأشياء الإباحة. يُضعّف حديث تحريم المعازف تبعاً لابن حزم، ويفرّق بين الغناء الشريف وبيئات الفن الفاسدة.',hadith:'حديث المعازف في البخاري — أضعفه ابن حزم لعلة في السند',fiqh:'يوضح الغزالي: التطرف في التحريم نزعة غير إسلامية — والأصل في الأشياء الإباحة',action:'لا تتسرع في تحريم ما لم يحرّمه الله — ابحث عن الدليل الصحيح'},
    en:{title:'The Ruling on Music',desc:'Al-Ghazali considers music and singing fundamentally permissible, following the principle that the default for things is permissibility. He weakens the hadith forbidding instruments (following Ibn Hazm) and distinguishes between decent singing and corrupt entertainment.',hadith:'The hadith on musical instruments in Bukhari — Ibn Hazm weakened it due to a chain issue',fiqh:'Al-Ghazali clarifies: Extremism in prohibition is un-Islamic — the default ruling for things is permissibility',action:'Don\'t rush to prohibit what God hasn\'t prohibited — seek sound evidence'},
    fr:{title:'Le Jugement sur la Musique',desc:'Al-Ghazali considère la musique fondamentalement permise, suivant le principe que le défaut pour les choses est la permission. Il affaiblit le hadith interdisant les instruments (suivant Ibn Hazm).',hadith:'Le hadith sur les instruments de musique dans Bukhari — Ibn Hazm l\'a affaibli pour un défaut de chaîne',fiqh:'Al-Ghazali clarifie: L\'extrémisme dans l\'interdiction est non-islamique — le défaut pour les choses est la permission',action:'Ne vous précipitez pas à interdire ce que Dieu n\'a pas interdit — cherchez la preuve valide'}
  },
  {
    id:5, emoji:'👔',
    ar:{title:'العبادات والعادات',desc:'يفرّق الغزالي بين ما فعله النبي ﷺ عبادةً (وهو ملزم) وما فعله عادةً ثقافية (وهو غير ملزم). ينتقد من يرفع العادات العربية إلى مرتبة الفرائض الدينية.',hadith:'ناقش آداب الطعام والملبس والمسكن — أيها عبادة وأيها عادة؟',fiqh:'يوضح الغزالي: ليس كل ما فعله النبي تشريعاً — بعضه عادات بيئته وزمانه',action:'ميّز بين سنة العبادة وعادة الزمان — لا ترفع العادة لمرتبة الفرض'},
    en:{title:'Worship vs Custom',desc:'Al-Ghazali distinguishes between what the Prophet did as worship (binding) and what he did as cultural custom (not binding). He criticizes elevating Arabian customs to the level of religious obligations.',hadith:'He discusses dining, clothing, and housing etiquette — which is worship and which is custom?',fiqh:'Al-Ghazali clarifies: Not everything the Prophet did is legislation — some was the custom of his environment and time',action:'Distinguish between the Sunnah of worship and the custom of the era — don\'t elevate custom to obligation'},
    fr:{title:'Culte vs Coutume',desc:'Al-Ghazali distingue entre ce que le Prophète a fait comme culte (obligatoire) et ce qu\'il a fait comme coutume culturelle (non obligatoire). Il critique l\'élévation des coutumes arabes au rang d\'obligations religieuses.',hadith:'Il discute l\'étiquette de la table, du vêtement et du logement — lequel est culte et lequel est coutume ?',fiqh:'Al-Ghazali clarifie: Tout ce que le Prophète a fait n\'est pas législation — certaines choses étaient des coutumes de son environnement',action:'Distinguez entre la Sunna de culte et la coutume de l\'époque'}
  },
  {
    id:6, emoji:'👻',
    ar:{title:'المسّ الشيطاني',desc:'ينكر الغزالي أن الجن يدخل جسد الإنسان فعلياً. يفسّر آية "كالذي يتخبطه الشيطان من المس" على أنها تشبيه لا حقيقة حرفية. من أكثر مواقفه إثارة للجدل.',hadith:'ناقش أحاديث المسّ وبيّن أنها لا تدل على دخول الجن للجسد',fiqh:'يوضح الغزالي: التفسير المجازي للآية أقرب للعقل — والمرض النفسي يحتاج طبيباً لا راقياً',action:'لا تخلط بين الإيمان بالجن وبين ادعاء أنهم يسكنون الأجساد'},
    en:{title:'Demonic Possession',desc:'Al-Ghazali denies that jinn can literally enter and possess the human body. He interprets the verse "like one touched by Satan" as a metaphor, not literal possession. One of his most controversial positions.',hadith:'He discusses possession hadith and argues they don\'t prove jinn literally entering bodies',fiqh:'Al-Ghazali clarifies: The metaphorical interpretation is closer to reason — mental illness needs a doctor not an exorcist',action:'Don\'t confuse belief in jinn with claiming they inhabit human bodies'},
    fr:{title:'La Possession Démoniaque',desc:'Al-Ghazali nie que les djinns puissent littéralement entrer et posséder le corps humain. Il interprète le verset « comme celui touché par Satan » comme une métaphore. L\'une de ses positions les plus controversées.',hadith:'Il discute les hadiths de possession et argumente qu\'ils ne prouvent pas l\'entrée des djinns dans les corps',fiqh:'Al-Ghazali clarifie: L\'interprétation métaphorique est plus proche de la raison — la maladie mentale nécessite un médecin',action:'Ne confondez pas la croyance aux djinns avec l\'affirmation qu\'ils habitent les corps humains'}
  },
  {
    id:7, emoji:'📜',
    ar:{title:'فقه الكتاب أولاً',desc:'يبيّن الغزالي في "السنة النبوية": القرآن هو المعيار الأعلى لتقييم الحديث. إذا تعارض حديث مع صريح القرآن يُردّ أو يُعاد تفسيره مهما كانت قوة سنده. فهم القرآن عميقاً شرط لفهم السنة.',hadith:'ناقش أحاديث رفضها لمعارضتها القرآن الصريح',fiqh:'يوضح الغزالي: لا سنة بدون فقه — والقرآن حاكم على كل ما سواه',action:'قبل أن تحكم بحديث، تأكد من موافقته لروح القرآن ومقاصده'},
    en:{title:'Understanding the Quran First',desc:'Al-Ghazali in "The Prophetic Sunnah" explains: The Quran is the supreme criterion for evaluating hadith. If a hadith contradicts the clear Quran, it should be rejected or reinterpreted regardless of chain strength. Deep Quran understanding is prerequisite for understanding Sunnah.',hadith:'He discusses hadith he rejected for contradicting the clear Quran',fiqh:'Al-Ghazali clarifies: No Sunnah without Fiqh — and the Quran is sovereign over everything else',action:'Before ruling by a hadith, ensure it agrees with the spirit and objectives of the Quran'},
    fr:{title:'Comprendre le Coran d\'Abord',desc:'Al-Ghazali dans "La Sunna Prophétique" explique: Le Coran est le critère suprême pour évaluer le hadith. Si un hadith contredit le Coran clair, il doit être rejeté ou réinterprété. La compréhension profonde du Coran est un prérequis pour comprendre la Sunna.',hadith:'Il discute des hadiths qu\'il a rejetés pour avoir contredit le Coran clair',fiqh:'Al-Ghazali clarifie: Pas de Sunna sans Fiqh — et le Coran est souverain sur tout le reste',action:'Avant de juger par un hadith, assurez-vous qu\'il s\'accorde avec l\'esprit et les objectifs du Coran'}
  },
  {
    id:8, emoji:'⏳',
    ar:{title:'أحاديث الفتن',desc:'يفحص الغزالي أحاديث الدجال والمهدي ونزول عيسى فحصاً نقدياً. يشكك في كثير من التفاصيل الواردة ويرى أن بعضها مبالغات أو متناقضات أو مختلقات، دون أن ينكر كل أحاديث الآخرة.',hadith:'أحاديث الدجال والمهدي — بعضها فيه مبالغات تحتاج تمحيصاً',fiqh:'النقد لا يعني الإنكار — بل التمييز بين الصحيح والمختلق',action:'كن ناقداً حكيماً: لا تقبل كل ما يُروى عن الآخرة بلا تمحيص'},
    en:{title:'End-Times Hadith',desc:'Al-Ghazali critically examines narrations about the Dajjal, Mahdi, and descent of Jesus. He questions many detailed descriptions, suggesting some contain exaggerations, contradictions, or fabrications — without denying all end-times narrations.',hadith:'Dajjal and Mahdi hadith — some contain exaggerations requiring scrutiny',fiqh:'Criticism doesn\'t mean denial — it means distinguishing between authentic and fabricated',action:'Be a wise critic: don\'t accept everything narrated about the end times without scrutiny'},
    fr:{title:'Les Hadiths des Épreuves',desc:'Al-Ghazali examine de manière critique les narrations sur le Dajjal, le Mahdi et la descente de Jésus. Il remet en question de nombreuses descriptions détaillées, suggérant que certaines contiennent des exagérations ou des contradictions.',hadith:'Les hadiths du Dajjal et du Mahdi — certains contiennent des exagérations nécessitant un examen',fiqh:'La critique ne signifie pas le déni — elle distingue entre l\'authentique et le fabriqué',action:'Soyez un critique sage : n\'acceptez pas tout ce qui est rapporté sur la fin des temps sans examen'}
  },
  {
    id:9, emoji:'🎯',
    ar:{title:'الوسائل والغايات',desc:'مقاصد الشريعة يجب أن توجّه فهم الأحكام التفصيلية. يناقش الغزالي الجهاد والشورى والغنائم، ويرى أن أشكال هذه المؤسسات قد تتطور بينما تبقى أهدافها ثابتة.',hadith:'الوسائل تتغير بتغير الزمان والمكان — والغايات ثابتة',fiqh:'الشريعة لها مقاصد كبرى — والأحكام الجزئية تخدم تلك المقاصد',action:'ميّز بين الثابت والمتغير في الشريعة — المقاصد ثابتة والوسائل متغيرة'},
    en:{title:'Means and Ends',desc:'The objectives of Sharia should guide understanding of detailed rulings. Al-Ghazali discusses jihad, shura, and war spoils, arguing that forms of these institutions can evolve while their underlying objectives remain constant.',hadith:'Means change with time and place — but ends remain fixed',fiqh:'Sharia has overarching objectives — and detailed rulings serve those objectives',action:'Distinguish between the fixed and the changeable in Sharia — objectives are fixed, means are changeable'},
    fr:{title:'Moyens et Fins',desc:'Les objectifs de la Charia doivent guider la compréhension des règles détaillées. Al-Ghazali discute le jihad, la choura et le butin, arguant que les formes de ces institutions peuvent évoluer tandis que leurs objectifs restent constants.',hadith:'Les moyens changent avec le temps et le lieu — mais les fins restent fixes',fiqh:'La Charia a des objectifs globaux — et les règles détaillées servent ces objectifs',action:'Distinguez entre le fixe et le changeant dans la Charia — les objectifs sont fixes, les moyens changent'}
  },
  {
    id:10, emoji:'🔓',
    ar:{title:'القدر والجبر',desc:'يرفض الغزالي عقيدة الجبر (أن الإنسان مُسيَّر لا مخيّر). يؤكد أن الإسلام يعلّم حرية الإرادة والمسؤولية الأخلاقية. ينتقد أحاديث تبدو وكأنها تروّج للجبرية لأنها تناقض تأكيد القرآن على حرية الاختيار.',hadith:'ينتقد أحاديث الجبر التي تعارض حرية الاختيار القرآنية',fiqh:'الإنسان حر مختار مسؤول — والقدر لا يعني الإجبار',action:'لا تستخدم القدر عذراً للكسل — أنت حر ومسؤول عن اختياراتك'},
    en:{title:'Decree vs Compulsion',desc:'Al-Ghazali refutes the doctrine of jabr (fatalistic compulsion). He affirms Islam teaches free will and moral responsibility. He criticizes hadith narrations that seem to promote fatalism as they contradict the Quran\'s emphasis on human agency.',hadith:'He critiques fatalistic hadith that contradict Quranic free will',fiqh:'Humans are free, choosing, and responsible — divine decree does not mean compulsion',action:'Don\'t use destiny as an excuse for laziness — you are free and responsible for your choices'},
    fr:{title:'Décret vs Contrainte',desc:'Al-Ghazali réfute la doctrine du jabr (contrainte fataliste). Il affirme que l\'Islam enseigne le libre arbitre et la responsabilité morale. Il critique les hadiths qui semblent promouvoir le fatalisme car ils contredisent l\'accent coranique sur l\'agence humaine.',hadith:'Il critique les hadiths fatalistes qui contredisent le libre arbitre coranique',fiqh:'Les humains sont libres, choisissants et responsables — le décret divin ne signifie pas contrainte',action:'N\'utilisez pas le destin comme excuse pour la paresse — vous êtes libre et responsable de vos choix'}
  },
  {
    id:11, emoji:'🤝',
    ar:{title:'لا سنة بدون فقه',desc:'عمل المحدّث يكمله عمل الفقيه. المحدّث الذي يتحقق من السند دون أن يفهم السياق القرآني والفقهي يقوم بنصف المهمة. يقول الغزالي: أعرف الرجال بالحق لا الحق بالرجال.',hadith:'الحق لا يُعرف بالرجال — بل الرجال يُعرفون بالحق',fiqh:'لا سنة من غير فقه — فهم السنة يحتاج علماً بالقرآن والمقاصد',action:'لا تحكم بحديث قبل أن تفهم سياقه الفقهي والقرآني'},
    en:{title:'No Sunnah Without Understanding',desc:'The hadith scholar\'s work is completed by the jurist\'s work. A hadith scholar who verifies the chain without understanding the Quranic and legal context does only half the job. Al-Ghazali says: I know men by truth, not truth by men.',hadith:'Truth is not known by men — men are known by truth',fiqh:'No Sunnah without Fiqh — understanding the Sunnah requires knowledge of Quran and objectives',action:'Don\'t rule by a hadith before understanding its juristic and Quranic context'},
    fr:{title:'Pas de Sunna Sans Compréhension',desc:'Le travail du traditionniste est complété par celui du juriste. Un traditionniste qui vérifie la chaîne sans comprendre le contexte coranique et juridique ne fait que la moitié du travail.',hadith:'La vérité ne se connaît pas par les hommes — les hommes se connaissent par la vérité',fiqh:'Pas de Sunna sans Fiqh — comprendre la Sunna nécessite la connaissance du Coran et des objectifs',action:'Ne jugez pas par un hadith avant de comprendre son contexte juridique et coranique'}
  },
  {
    id:12, emoji:'🔍',
    ar:{title:'حديث الآحاد',desc:'حديث الآحاد (رواية فرد واحد أو سلسلة واحدة) يفيد الظن لا اليقين. لا يمكن لحديث آحاد أن ينسخ القرآن أو يعارض العقل السليم أو الواقع المحسوس.',hadith:'حديث الآحاد ظني الدلالة — لا يرقى لمرتبة القرآن في القطعية',fiqh:'الأحاديث المتواترة قطعية — والآحاد ظنية تحتاج لتمحيص إضافي',action:'ميّز بين المتواتر والآحاد — ولا تبنِ عقيدة على حديث آحاد'},
    en:{title:'Single-Chain Hadith',desc:'Ahad hadith (single-chain narrations) yield probability not certainty. A single-chain hadith cannot override the Quran or contradict sound reason or observable reality.',hadith:'Ahad hadith are probabilistic — they don\'t reach the level of Quranic certainty',fiqh:'Mutawatir hadith are definitive — ahad are probabilistic and need additional scrutiny',action:'Distinguish between mutawatir and ahad — don\'t build creed on single-chain hadith alone'},
    fr:{title:'Le Hadith à Chaîne Unique',desc:'Les hadiths ahad (narrations à chaîne unique) produisent la probabilité pas la certitude. Un hadith ahad ne peut pas remplacer le Coran ou contredire la raison saine.',hadith:'Les hadiths ahad sont probabilistes — ils n\'atteignent pas le niveau de certitude coranique',fiqh:'Les hadiths mutawatir sont définitifs — les ahad sont probabilistes et nécessitent un examen supplémentaire',action:'Distinguez entre mutawatir et ahad — ne construisez pas une croyance sur un hadith ahad seul'}
  }
];

const REFLECTIONS = [
  {emoji:'📖',ar:{title:'الحفظ ليس كافياً',problem:'كثيرون يحفظون الأحاديث دون فهمها أو ربطها بالواقع.',solution:'الفهم والتدبر أهم من مجرد الحفظ. احفظ بفهم وطبّق بوعي.',verse:'أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ أَمْ عَلَىٰ قُلُوبٍ أَقْفَالُهَا',verseRef:'محمد ٤٧: ٢٤'},en:{title:'Memorization Is Not Enough',problem:'Many memorize hadiths without understanding or connecting them to reality.',solution:'Understanding and reflection are more important than mere memorization. Memorize with understanding and apply with awareness.',verse:'Do they not reflect upon the Quran, or are there locks upon their hearts?',verseRef:'Muhammad 47:24'},fr:{title:'La Mémorisation Ne Suffit Pas',problem:'Beaucoup mémorisent les hadiths sans les comprendre ni les relier à la réalité.',solution:'La compréhension et la réflexion sont plus importantes que la simple mémorisation.',verse:'Ne méditent-ils pas sur le Coran, ou y a-t-il des verrous sur leurs coeurs ?',verseRef:'Muhammad 47:24'}},
  {emoji:'⚖️',ar:{title:'بين الغلو والتفريط',problem:'البعض يغالي في تطبيق الأحاديث والبعض يفرّط فيها تماماً.',solution:'الوسطية هي منهج الإسلام: لا إفراط ولا تفريط.',verse:'وَكَذَٰلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا',verseRef:'البقرة ٢: ١٤٣'},en:{title:'Between Extremism and Negligence',problem:'Some people are extreme in applying hadiths while others neglect them entirely.',solution:'Moderation is the Islamic way: neither excess nor neglect.',verse:'And thus We have made you a moderate nation',verseRef:'Al-Baqarah 2:143'},fr:{title:'Entre Excès et Négligence',problem:'Certains sont extrêmes dans l\'application des hadiths, d\'autres les négligent entièrement.',solution:'La modération est la voie islamique : ni excès ni négligence.',verse:'Et ainsi Nous avons fait de vous une communauté modérée',verseRef:'Al-Baqarah 2:143'}},
  {emoji:'🌍',ar:{title:'السنة للعالم كله',problem:'البعض يعامل السنة كأنها خاصة بثقافة معينة أو زمن محدد.',solution:'السنة رسالة عالمية ومبادئها صالحة لكل البشر في كل العصور.',verse:'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ',verseRef:'الأنبياء ٢١: ١٠٧'},en:{title:'The Sunnah Is for All of Humanity',problem:'Some treat the Sunnah as if it belongs to a specific culture or time.',solution:'The Sunnah is a universal message and its principles are valid for all people in all ages.',verse:'And We have not sent you except as a mercy to the worlds',verseRef:'Al-Anbiya 21:107'},fr:{title:'La Sunna Est pour Toute l\'Humanité',problem:'Certains traitent la Sunna comme si elle appartenait à une culture ou une époque spécifique.',solution:'La Sunna est un message universel et ses principes sont valides pour tous les peuples à toutes les époques.',verse:'Et Nous ne t\'avons envoyé qu\'en miséricorde pour les mondes',verseRef:'Al-Anbiya 21:107'}},
  {emoji:'🔬',ar:{title:'العلم والسنة',problem:'البعض يرى تعارضاً بين العلم الحديث وبعض الأحاديث.',solution:'لا تعارض حقيقي بين العلم الصحيح والسنة الصحيحة. التعارض يكون في الفهم القاصر.',verse:'سَنُرِيهِمْ آيَاتِنَا فِي الْآفَاقِ وَفِي أَنفُسِهِمْ',verseRef:'فصلت ٤١: ٥٣'},en:{title:'Science and the Sunnah',problem:'Some see a contradiction between modern science and some hadiths.',solution:'There is no real contradiction between sound science and authentic Sunnah. The contradiction is in limited understanding.',verse:'We will show them Our signs in the horizons and within themselves',verseRef:'Fussilat 41:53'},fr:{title:'La Science et la Sunna',problem:'Certains voient une contradiction entre la science moderne et certains hadiths.',solution:'Il n\'y a pas de réelle contradiction entre la science saine et la Sunna authentique.',verse:'Nous leur montrerons Nos signes dans les horizons et en eux-mêmes',verseRef:'Fussilat 41:53'}},
  {emoji:'👥',ar:{title:'المرأة في السنة',problem:'البعض يسيء فهم أحاديث المرأة ويقتطعها من سياقها لتبرير التمييز.',solution:'السنة كرّمت المرأة وأعطتها حقوقها كاملة. الفهم الصحيح يحتاج نظرة شاملة لكل الأحاديث.',verse:'وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ',verseRef:'البقرة ٢: ٢٢٨'},en:{title:'Women in the Sunnah',problem:'Some misunderstand hadiths about women and take them out of context to justify discrimination.',solution:'The Sunnah honored women and gave them their full rights. Correct understanding requires looking at all hadiths together.',verse:'And women have rights similar to those over them in fairness',verseRef:'Al-Baqarah 2:228'},fr:{title:'La Femme dans la Sunna',problem:'Certains comprennent mal les hadiths sur les femmes et les sortent de leur contexte pour justifier la discrimination.',solution:'La Sunna a honoré la femme et lui a donné ses pleins droits. La bonne compréhension nécessite une vision globale.',verse:'Et elles ont des droits semblables à ceux qu\'elles doivent, selon le convenable',verseRef:'Al-Baqarah 2:228'}},
  {emoji:'📢',ar:{title:'نشر الحديث بمسؤولية',problem:'وسائل التواصل أصبحت تنشر أحاديث ضعيفة وموضوعة بكثرة.',solution:'تحقق من صحة الحديث قبل نشره واسأل أهل العلم عما تشك فيه.',verse:'فَاسْأَلُوا أَهْلَ الذِّكْرِ إِن كُنتُمْ لَا تَعْلَمُونَ',verseRef:'النحل ١٦: ٤٣'},en:{title:'Sharing Hadiths Responsibly',problem:'Social media has become a platform for spreading weak and fabricated hadiths.',solution:'Verify the authenticity of a hadith before sharing it and consult scholars about what you doubt.',verse:'So ask the people of knowledge if you do not know',verseRef:'An-Nahl 16:43'},fr:{title:'Partager les Hadiths avec Responsabilité',problem:'Les réseaux sociaux sont devenus une plateforme pour répandre des hadiths faibles et fabriqués.',solution:'Vérifiez l\'authenticité d\'un hadith avant de le partager et consultez les savants sur ce dont vous doutez.',verse:'Demandez aux gens du savoir si vous ne savez pas',verseRef:'An-Nahl 16:43'}},
  {emoji:'🏫',ar:{title:'تعليم السنة للأطفال',problem:'كثير من الأطفال ينشأون دون معرفة حقيقية بالسنة أو مع فهم سطحي.',solution:'علّم الأطفال السنة بأسلوب محبب يربط بين الحديث وحياتهم اليومية.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا قُوا أَنفُسَكُمْ وَأَهْلِيكُمْ نَارًا',verseRef:'التحريم ٦٦: ٦'},en:{title:'Teaching the Sunnah to Children',problem:'Many children grow up without real knowledge of the Sunnah or with a superficial understanding.',solution:'Teach children the Sunnah in an engaging way that connects hadiths to their daily lives.',verse:'O you who believe, protect yourselves and your families from a Fire',verseRef:'At-Tahrim 66:6'},fr:{title:'Enseigner la Sunna aux Enfants',problem:'Beaucoup d\'enfants grandissent sans connaissance réelle de la Sunna ou avec une compréhension superficielle.',solution:'Enseignez la Sunna aux enfants de manière engageante en reliant les hadiths à leur vie quotidienne.',verse:'O vous qui croyez, préservez vos personnes et vos familles d\'un Feu',verseRef:'At-Tahrim 66:6'}},
  {emoji:'🕌',ar:{title:'السنة حياة لا نظرية',problem:'البعض يدرس السنة كنظرية أكاديمية دون تطبيق عملي.',solution:'السنة منهج حياة يُعاش لا مجرد معلومات تُحفظ. طبّقها في يومك.',verse:'لَّقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ',verseRef:'الأحزاب ٣٣: ٢١'},en:{title:'The Sunnah Is Life, Not Theory',problem:'Some study the Sunnah as an academic theory without practical application.',solution:'The Sunnah is a way of life to be lived, not just information to be memorized. Apply it in your daily life.',verse:'There has certainly been for you in the Messenger of God an excellent example',verseRef:'Al-Ahzab 33:21'},fr:{title:'La Sunna Est une Vie, Pas une Théorie',problem:'Certains étudient la Sunna comme une théorie académique sans application pratique.',solution:'La Sunna est un mode de vie à vivre, pas seulement des informations à mémoriser. Appliquez-la au quotidien.',verse:'Vous avez certes dans le Messager de Dieu un excellent exemple',verseRef:'Al-Ahzab 33:21'}},
  {emoji:'🔗',ar:{title:'السند المتصل',problem:'كثير من الناس لا يعرفون أهمية السند في التحقق من الحديث.',solution:'السند المتصل هو ما يميز أمة الإسلام. كل رواية لها سلسلة من الرواة يمكن فحصها.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا إِن جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا',verseRef:'الحجرات ٤٩: ٦'},en:{title:'The Connected Chain',problem:'Many people do not understand the importance of the chain of narration in verifying hadith.',solution:'The connected chain of narration is what distinguishes the Islamic nation. Every narration has a chain of narrators that can be examined.',verse:'O you who believe, if there comes to you a disobedient one with information, investigate',verseRef:'Al-Hujurat 49:6'},fr:{title:'La Chaîne Connectée',problem:'Beaucoup de gens ne comprennent pas l\'importance de la chaîne de narration dans la vérification du hadith.',solution:'La chaîne de narration connectée est ce qui distingue la nation islamique. Chaque narration a une chaîne de narrateurs examinable.',verse:'Ô vous qui croyez, si un pervers vous apporte une nouvelle, vérifiez',verseRef:'Al-Hujurat 49:6'}},
  {emoji:'⚙️',ar:{title:'التطبيق بفهم',problem:'البعض يطبق الأحاديث حرفياً بلا فهم للمقصد والحكمة.',solution:'فهم المقاصد والحكم وراء الأحاديث ضروري لتطبيقها بشكل صحيح في كل عصر.',verse:'كِتَابٌ أَنزَلْنَاهُ إِلَيْكَ مُبَارَكٌ لِّيَدَّبَّرُوا آيَاتِهِ',verseRef:'ص ٣٨: ٢٩'},en:{title:'Application with Understanding',problem:'Some apply hadiths literally without understanding purpose and wisdom.',solution:'Understanding the objectives and wisdom behind hadiths is essential for correct application in every era.',verse:'A blessed Book which We have revealed to you that they might reflect upon its verses',verseRef:'Sad 38:29'},fr:{title:'L\'Application avec Compréhension',problem:'Certains appliquent les hadiths littéralement sans comprendre leur objectif et sagesse.',solution:'Comprendre les objectifs et la sagesse derrière les hadiths est essentiel pour une application correcte à chaque époque.',verse:'Un Livre béni que Nous t\'avons révélé afin qu\'ils méditent sur ses versets',verseRef:'Sad 38:29'}},
  {emoji:'🌐',ar:{title:'السنة والحوار الحضاري',problem:'البعض يعزل السنة عن الحوار مع الحضارات الأخرى.',solution:'السنة النبوية فتحت باب الحوار مع كل الأمم. رسائل النبي ﷺ للملوك نموذج للحوار الحضاري.',verse:'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا',verseRef:'الحجرات ٤٩: ١٣'},en:{title:'Sunnah and Civilizational Dialogue',problem:'Some isolate the Sunnah from dialogue with other civilizations.',solution:'The Prophetic Sunnah opened the door for dialogue with all nations. The Prophet\'s letters to kings are a model of civilizational exchange.',verse:'O mankind, We have created you from male and female and made you peoples and tribes that you may know one another',verseRef:'Al-Hujurat 49:13'},fr:{title:'La Sunna et le Dialogue Civilisationnel',problem:'Certains isolent la Sunna du dialogue avec les autres civilisations.',solution:'La Sunna prophétique a ouvert la porte du dialogue avec toutes les nations. Les lettres du Prophète aux rois sont un modèle d\'échange civilisationnel.',verse:'Ô humanité, Nous vous avons créés d\'un mâle et d\'une femelle et vous avons répartis en peuples et tribus pour que vous vous entre-connaissiez',verseRef:'Al-Hujurat 49:13'}},
  {emoji:'💡',ar:{title:'الابتكار في ضوء السنة',problem:'البعض يظن أن اتباع السنة يعني رفض كل جديد.',solution:'السنة تشجع الابتكار والتطوير. النبي ﷺ قبل مشورة سلمان في حفر الخندق وهي فكرة فارسية.',verse:'قُلْ سِيرُوا فِي الْأَرْضِ فَانظُرُوا كَيْفَ بَدَأَ الْخَلْقَ',verseRef:'العنكبوت ٢٩: ٢٠'},en:{title:'Innovation in Light of the Sunnah',problem:'Some think following the Sunnah means rejecting everything new.',solution:'The Sunnah encourages innovation and development. The Prophet accepted Salman\'s advice to dig the trench — a Persian idea.',verse:'Say: Travel through the land and observe how He began creation',verseRef:'Al-Ankabut 29:20'},fr:{title:'L\'Innovation à la Lumière de la Sunna',problem:'Certains pensent que suivre la Sunna signifie rejeter tout ce qui est nouveau.',solution:'La Sunna encourage l\'innovation et le développement. Le Prophète a accepté le conseil de Salman de creuser le fossé — une idée perse.',verse:'Dis : Parcourez la terre et observez comment Il a commencé la création',verseRef:'Al-Ankabut 29:20'}},
  {emoji:'🩺',ar:{title:'السنة والصحة',problem:'كثيرون يجهلون ما في السنة من إرشادات صحية مذهلة.',solution:'السنة تحتوي على إرشادات صحية سبقت الطب الحديث: النظافة، الاعتدال في الأكل، الحجر الصحي.',verse:'وَكُلُوا وَاشْرَبُوا وَلَا تُسْرِفُوا',verseRef:'الأعراف ٧: ٣١'},en:{title:'The Sunnah and Health',problem:'Many are unaware of the remarkable health guidance in the Sunnah.',solution:'The Sunnah contains health guidance that preceded modern medicine: hygiene, moderation in eating, quarantine.',verse:'And eat and drink, but be not excessive',verseRef:'Al-A\'raf 7:31'},fr:{title:'La Sunna et la Santé',problem:'Beaucoup ignorent les remarquables conseils de santé dans la Sunna.',solution:'La Sunna contient des conseils de santé qui ont précédé la médecine moderne : hygiène, modération alimentaire, quarantaine.',verse:'Et mangez et buvez, mais ne soyez pas excessifs',verseRef:'Al-A\'raf 7:31'}},
  {emoji:'🤲',ar:{title:'السنة والرحمة بالحيوان',problem:'البعض يتعامل مع الحيوانات بقسوة متجاهلاً السنة.',solution:'النبي ﷺ نهى عن تعذيب الحيوانات وأخبر أن امرأة دخلت النار في هرة وأن رجلاً دخل الجنة بسقيا كلب.',verse:'وَمَا مِن دَابَّةٍ فِي الْأَرْضِ وَلَا طَائِرٍ يَطِيرُ بِجَنَاحَيْهِ إِلَّا أُمَمٌ أَمْثَالُكُم',verseRef:'الأنعام ٦: ٣٨'},en:{title:'The Sunnah and Mercy to Animals',problem:'Some treat animals cruelly, ignoring the Sunnah.',solution:'The Prophet forbade torturing animals. He told of a woman who entered Hell because of a cat and a man who entered Paradise for giving water to a dog.',verse:'There is no creature on earth, nor a bird flying with its wings, but they are communities like you',verseRef:'Al-An\'am 6:38'},fr:{title:'La Sunna et la Miséricorde envers les Animaux',problem:'Certains traitent les animaux cruellement, ignorant la Sunna.',solution:'Le Prophète a interdit de torturer les animaux. Il a raconté qu\'une femme est entrée en Enfer à cause d\'un chat et qu\'un homme est entré au Paradis pour avoir abreuvé un chien.',verse:'Nulle bête sur terre ni oiseau volant de ses ailes qui ne soit en communauté comme vous',verseRef:'Al-An\'am 6:38'}},
  {emoji:'💰',ar:{title:'السنة والاقتصاد',problem:'كثير من المسلمين يجهلون الأحكام الاقتصادية في السنة.',solution:'السنة وضعت أسس اقتصاد عادل: تحريم الربا، الزكاة، النهي عن الاحتكار والغش في البيع.',verse:'وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا',verseRef:'البقرة ٢: ٢٧٥'},en:{title:'The Sunnah and Economics',problem:'Many Muslims are unaware of economic rulings in the Sunnah.',solution:'The Sunnah established the foundations of a just economy: prohibition of usury, zakat, forbidding monopoly and fraud in trade.',verse:'And God has permitted trade and has forbidden interest',verseRef:'Al-Baqarah 2:275'},fr:{title:'La Sunna et l\'Économie',problem:'Beaucoup de musulmans ignorent les règles économiques dans la Sunna.',solution:'La Sunna a établi les fondements d\'une économie juste : interdiction de l\'usure, zakat, interdiction du monopole et de la fraude.',verse:'Et Dieu a permis le commerce et a interdit l\'usure',verseRef:'Al-Baqarah 2:275'}},
  {emoji:'🏡',ar:{title:'السنة والجار',problem:'كثيرون أهملوا حقوق الجار التي أوصت بها السنة.',solution:'النبي ﷺ قال: "ما زال جبريل يوصيني بالجار حتى ظننت أنه سيورثه." حق الجار عظيم في الإسلام.',verse:'وَالْجَارِ ذِي الْقُرْبَىٰ وَالْجَارِ الْجُنُبِ',verseRef:'النساء ٤: ٣٦'},en:{title:'The Sunnah and the Neighbor',problem:'Many have neglected the rights of neighbors that the Sunnah emphasized.',solution:'The Prophet said: "Gabriel kept advising me about the neighbor until I thought he would make him an heir." The neighbor\'s right is great in Islam.',verse:'And the neighbor who is near of kin and the neighbor who is a stranger',verseRef:'An-Nisa 4:36'},fr:{title:'La Sunna et le Voisin',problem:'Beaucoup ont négligé les droits du voisin que la Sunna a soulignés.',solution:'Le Prophète a dit : « Gabriel n\'a cessé de me recommander le voisin jusqu\'à ce que je pense qu\'il en ferait un héritier. »',verse:'Et le voisin proche et le voisin éloigné',verseRef:'An-Nisa 4:36'}},
  {emoji:'⏰',ar:{title:'السنة وإدارة الوقت',problem:'كثير من المسلمين يضيعون أوقاتهم رغم تحذير السنة.',solution:'النبي ﷺ قال: "نعمتان مغبون فيهما كثير من الناس: الصحة والفراغ." الوقت أمانة يُسأل عنها يوم القيامة.',verse:'وَالْعَصْرِ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ',verseRef:'العصر ١٠٣: ١-٢'},en:{title:'The Sunnah and Time Management',problem:'Many Muslims waste their time despite the Sunnah\'s warning.',solution:'The Prophet said: "Two blessings which many people squander: health and free time." Time is a trust one will be asked about on Judgment Day.',verse:'By time, indeed mankind is in loss',verseRef:'Al-Asr 103:1-2'},fr:{title:'La Sunna et la Gestion du Temps',problem:'Beaucoup de musulmans gaspillent leur temps malgré l\'avertissement de la Sunna.',solution:'Le Prophète a dit : « Deux bienfaits dont beaucoup de gens sont dupés : la santé et le temps libre. »',verse:'Par le temps, l\'homme est certes en perdition',verseRef:'Al-Asr 103:1-2'}},
  {emoji:'����',ar:{title:'السنة والصداقة',problem:'البعض لا يختار أصدقاءه وفق معايير السنة.',solution:'النبي ﷺ قال: "المرء على دين خليله فلينظر أحدكم من يخالل." الصداقة الصالحة من أسباب الثبات.',verse:'يَا لَيْتَنِي اتَّخَذْتُ مَعَ الرَّسُولِ سَبِيلًا',verseRef:'الفرقان ٢٥: ٢٧'},en:{title:'The Sunnah and Friendship',problem:'Some do not choose their friends according to the Sunnah\'s criteria.',solution:'The Prophet said: "A person is upon the religion of their close friend, so let each of you look at whom they befriend." Righteous friendship is a cause of steadfastness.',verse:'Oh, I wish I had taken with the Messenger a way',verseRef:'Al-Furqan 25:27'},fr:{title:'La Sunna et l\'Amitié',problem:'Certains ne choisissent pas leurs amis selon les critères de la Sunna.',solution:'Le Prophète a dit : « L\'homme suit la religion de son ami intime, que chacun regarde qui il fréquente. »',verse:'Oh, si seulement j\'avais pris avec le Messager un chemin',verseRef:'Al-Furqan 25:27'}},
  {emoji:'🌙',ar:{title:'السنة وقيام الليل',problem:'قيام الليل سنة مهجورة عند كثير من المسلمين.',solution:'قيام الليل شرف المؤمن ووقت الإجابة. ولو ركعتين قبل الفجر تكفي.',verse:'وَمِنَ اللَّيْلِ فَتَهَجَّدْ بِهِ نَافِلَةً لَّكَ',verseRef:'الإسراء ١٧: ٧٩'},en:{title:'The Sunnah and Night Prayer',problem:'Night prayer is an abandoned Sunnah for many Muslims.',solution:'Night prayer is the honor of the believer and the time of answered prayers. Even two units before Fajr are sufficient.',verse:'And from part of the night, pray with it as additional worship for you',verseRef:'Al-Isra 17:79'},fr:{title:'La Sunna et la Prière Nocturne',problem:'La prière nocturne est une Sunna abandonnée par beaucoup de musulmans.',solution:'La prière nocturne est l\'honneur du croyant et le temps des prières exaucées. Même deux unités avant Fajr suffisent.',verse:'Et durant la nuit, prie avec lui en prière supplémentaire pour toi',verseRef:'Al-Isra 17:79'}},
  {emoji:'📝',ar:{title:'السنة والتدوين',problem:'تاريخ تدوين السنة غير معروف لكثير من المسلمين.',solution:'بدأ تدوين السنة في عهد عمر بن عبد العزيز وتطور حتى صار علماً دقيقاً بقواعد فريدة.',verse:'إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ',verseRef:'الحجر ١٥: ٩'},en:{title:'The Sunnah and Documentation',problem:'The history of documenting the Sunnah is unknown to many Muslims.',solution:'The documentation of the Sunnah began in the era of Umar ibn Abd al-Aziz and developed into a precise science with unique rules.',verse:'Indeed, it is We who sent down the reminder and indeed, We will be its guardians',verseRef:'Al-Hijr 15:9'},fr:{title:'La Sunna et la Documentation',problem:'L\'histoire de la documentation de la Sunna est inconnue de beaucoup de musulmans.',solution:'La documentation de la Sunna a commencé à l\'époque d\'Umar ibn Abd al-Aziz et s\'est développée en une science précise.',verse:'C\'est Nous qui avons fait descendre le rappel et c\'est Nous qui en sommes gardiens',verseRef:'Al-Hijr 15:9'}}
];

// ═══════════════ HABITS DATA ═══════════════
const HABITS = [
  {emoji:'📖',ar:{label:'قراءة حديث بتدبر',source:'التدبر خير من كثرة القراءة'},en:{label:'Read a hadith with reflection',source:'Reflection is better than much reading'},fr:{label:'Lire un hadith avec réflexion',source:'La réflexion vaut mieux que beaucoup de lecture'}},
  {emoji:'🔍',ar:{label:'التحقق من حديث قبل نشره',source:'من كذب عليّ متعمداً...'},en:{label:'Verify a hadith before sharing',source:'Whoever deliberately lies about me...'},fr:{label:'Vérifier un hadith avant de le partager',source:'Quiconque ment délibérément à mon sujet...'}},
  {emoji:'🤲',ar:{label:'الدعاء بدعاء نبوي',source:'من أذكار الصباح والمساء'},en:{label:'Make a Prophetic dua',source:'From morning and evening remembrances'},fr:{label:'Faire une dua prophétique',source:'Des invocations du matin et du soir'}},
  {emoji:'😊',ar:{label:'الابتسامة في وجه الآخرين',source:'تبسمك في وجه أخيك صدقة'},en:{label:'Smile at others',source:'Your smile at your brother is charity'},fr:{label:'Sourire aux autres',source:'Votre sourire à votre frère est une aumône'}},
  {emoji:'🤝',ar:{label:'إفشاء السلام',source:'أفشوا السلام بينكم'},en:{label:'Spread greetings of peace',source:'Spread peace among yourselves'},fr:{label:'Répandre les salutations de paix',source:'Répandez la paix entre vous'}},
  {emoji:'💧',ar:{label:'الوضوء والصلاة في وقتها',source:'أحب الأعمال إلى الله الصلاة على وقتها'},en:{label:'Wudu and prayer on time',source:'The most beloved deeds to God: prayer on time'},fr:{label:'Ablutions et prière à l\'heure',source:'Les actes les plus aimés de Dieu : la prière à l\'heure'}},
  {emoji:'📚',ar:{label:'تعلّم شيء جديد عن السنة',source:'من سلك طريقاً يلتمس فيه علماً...'},en:{label:'Learn something new about the Sunnah',source:'Whoever follows a path seeking knowledge...'},fr:{label:'Apprendre quelque chose de nouveau sur la Sunna',source:'Quiconque emprunte un chemin cherchant le savoir...'}},
  {emoji:'🍽️',ar:{label:'أكل بسنة النبي ﷺ',source:'ما ملأ ابن آدم وعاءً شراً من بطنه'},en:{label:'Eat following Prophetic manner',source:'No person fills a vessel worse than their stomach'},fr:{label:'Manger selon la manière prophétique',source:'Nul ne remplit un récipient pire que son estomac'}}
];

// ═══════════════ QUIZ DATA ═══════════════
const QUIZ = [
  {ar:'هل تتحقق من صحة الحديث قبل نشره؟',en:'Do you verify the authenticity of a hadith before sharing it?',fr:'Vérifiez-vous l\'authenticité d\'un hadith avant de le partager ?'},
  {ar:'هل تأخذ الأحاديث بحرفيتها دون فهم السياق؟',en:'Do you take hadiths literally without understanding context?',fr:'Prenez-vous les hadiths littéralement sans comprendre le contexte ?'},
  {ar:'هل تقرأ شروح الحديث لفهمه بشكل صحيح؟',en:'Do you read hadith commentaries for proper understanding?',fr:'Lisez-vous les commentaires du hadith pour une bonne compréhension ?'},
  {ar:'هل تستخدم الحديث لتبرير موقفك الشخصي فقط؟',en:'Do you use hadith only to justify your personal stance?',fr:'Utilisez-vous le hadith uniquement pour justifier votre position personnelle ?'},
  {ar:'هل تعرف الفرق بين الحديث الصحيح والضعيف؟',en:'Do you know the difference between authentic and weak hadiths?',fr:'Connaissez-vous la différence entre un hadith authentique et faible ?'},
  {ar:'هل تحترم اختلاف المذاهب الفقهية في فهم السنة؟',en:'Do you respect the differences between jurisprudential schools?',fr:'Respectez-vous les différences entre les écoles juridiques ?'},
  {ar:'هل تربط بين الحديث والقرآن في فهمك للدين؟',en:'Do you connect hadith with Quran in understanding religion?',fr:'Reliez-vous le hadith au Coran dans votre compréhension de la religion ?'},
  {ar:'هل تطبق ما تعلمته من السنة في حياتك اليومية؟',en:'Do you apply what you learn from the Sunnah in daily life?',fr:'Appliquez-vous ce que vous apprenez de la Sunna dans votre vie quotidienne ?'},
  {ar:'هل تعرف منهج المحدثين في التحقق من صحة الأحاديث؟',en:'Do you know the methodology of hadith scholars in verifying authenticity?',fr:'Connaissez-vous la méthodologie des savants du hadith pour vérifier l\'authenticité ?'},
  {ar:'هل تميّز بين السنة التشريعية والسنة العادية؟',en:'Do you distinguish between legislative Sunnah and habitual Sunnah?',fr:'Distinguez-vous entre la Sunna législative et la Sunna habituelle ?'},
  {ar:'هل تطبق أخلاق النبي ﷺ في تعاملاتك مع غير المسلمين؟',en:'Do you apply the Prophet\'s ethics in your dealings with non-Muslims?',fr:'Appliquez-vous l\'éthique du Prophète dans vos relations avec les non-musulmans ?'},
  {ar:'هل تعرف سنن النوم والاستيقاظ وتطبقها يومياً؟',en:'Do you know and apply the Sunnahs of sleeping and waking daily?',fr:'Connaissez-vous et appliquez-vous les Sunnas du sommeil et du réveil quotidiennement ?'},
  {ar:'هل تحرص على إحياء السنن المهجورة في حياتك؟',en:'Do you strive to revive abandoned Sunnahs in your life?',fr:'Vous efforcez-vous de raviver les Sunnas abandonnées dans votre vie ?'},
  {ar:'هل تتأمل في مخلوقات الله كسنة التفكر؟',en:'Do you contemplate God\'s creations as the Sunnah of reflection?',fr:'Contemplez-vous les créations de Dieu comme la Sunna de la réflexion ?'},
  {ar:'هل تحسن معاملة جيرانك تطبيقاً لسنة حسن الجوار؟',en:'Do you treat your neighbors well, applying the Sunnah of good neighborliness?',fr:'Traitez-vous bien vos voisins en appliquant la Sunna du bon voisinage ?'},
  {ar:'هل تحرص على الصلح بين المتخاصمين كما أمرت السنة؟',en:'Do you strive to reconcile between disputing people as the Sunnah commands?',fr:'Vous efforcez-vous de réconcilier les gens en conflit comme la Sunna l\'ordonne ?'}
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  {ar:{label:'دعاء طلب العلم',text:'اللهم إني أسألك علماً نافعاً ورزقاً طيباً وعملاً متقبلاً',tr:'O God, I ask You for beneficial knowledge, good provision, and accepted deeds'},en:{label:'Dua for Knowledge',text:'اللهم إني أسألك علماً نافعاً ورزقاً طيباً وعملاً متقبلاً',tr:'O God, I ask You for beneficial knowledge, good provision, and accepted deeds'},fr:{label:'Dua pour le Savoir',text:'اللهم إني أسألك علماً نافعاً ورزقاً طيباً وعملاً متقبلاً',tr:'O Dieu, je Te demande un savoir bénéfique, une bonne subsistance et des actes acceptés'}},
  {ar:{label:'دعاء الفهم',text:'رب اشرح لي صدري ويسر لي أمري واحلل عقدة من لساني يفقهوا قولي',tr:'My Lord, expand my chest, ease my task, and remove the impediment from my speech'},en:{label:'Dua for Understanding',text:'رب اشرح لي صدري ويسر لي أمري واحلل عقدة من لساني يفقهوا قولي',tr:'My Lord, expand my chest, ease my task, and remove the impediment from my speech'},fr:{label:'Dua pour la Compréhension',text:'رب اشرح لي صدري ويسر لي أمري واحلل عقدة من لساني يفقهوا قولي',tr:'Mon Seigneur, ouvre-moi la poitrine, facilite ma tâche, et dénoue le noeud de ma langue'}},
  {ar:{label:'دعاء الهداية',text:'اللهم أرنا الحق حقاً وارزقنا اتباعه وأرنا الباطل باطلاً وارزقنا اجتنابه',tr:'O God, show us truth as truth and grant us to follow it, show us falsehood as falsehood and grant us to avoid it'},en:{label:'Dua for Guidance',text:'اللهم أرنا الحق حقاً وارزقنا اتباعه وأرنا الباطل باطلاً وارزقنا اجتنابه',tr:'O God, show us truth as truth and grant us to follow it, show us falsehood as falsehood and grant us to avoid it'},fr:{label:'Dua pour la Guidance',text:'اللهم أرنا الحق حقاً وارزقنا اتباعه وأرنا الباطل باطلاً وارزقنا اجتنابه',tr:'O Dieu, montre-nous la vérité comme vérité et accorde-nous de la suivre'}},
  {ar:{label:'دعاء الحكمة',text:'اللهم آتنا حكمة وعلماً وفهماً',tr:'O God, grant us wisdom, knowledge, and understanding'},en:{label:'Dua for Wisdom',text:'اللهم آتنا حكمة وعلماً وفهماً',tr:'O God, grant us wisdom, knowledge, and understanding'},fr:{label:'Dua pour la Sagesse',text:'اللهم آتنا حكمة وعلماً وفهماً',tr:'O Dieu, accorde-nous sagesse, savoir et compréhension'}},
  {ar:{label:'دعاء التوفيق',text:'اللهم وفقنا لما تحبه وترضاه',tr:'O God, guide us to what You love and are pleased with'},en:{label:'Dua for Success',text:'اللهم وفقنا لما تحبه وترضاه',tr:'O God, guide us to what You love and are pleased with'},fr:{label:'Dua pour le Succès',text:'اللهم وفقنا لما تحبه وترضاه',tr:'O Dieu, guide-nous vers ce que Tu aimes et ce qui Te plaît'}},
  {ar:{label:'دعاء الصبر',text:'ربنا أفرغ علينا صبراً وتوفنا مسلمين',tr:'Our Lord, pour upon us patience and let us die as Muslims'},en:{label:'Dua for Patience',text:'ربنا أفرغ علينا صبراً وتوفنا مسلمين',tr:'Our Lord, pour upon us patience and let us die as Muslims'},fr:{label:'Dua pour la Patience',text:'ربنا أفرغ علينا صبراً وتوفنا مسلمين',tr:'Notre Seigneur, déverse sur nous la patience et fais-nous mourir en musulmans'}},
  {ar:{label:'دعاء البصيرة',text:'اللهم أرنا الأشياء كما هي ولا تجعل الدنيا أكبر همنا',tr:'O God, show us things as they truly are and do not make worldly life our greatest concern'},en:{label:'Dua for Insight',text:'اللهم أرنا الأشياء كما هي ولا تجعل الدنيا أكبر همنا',tr:'O God, show us things as they truly are and do not make worldly life our greatest concern'},fr:{label:'Dua pour la Clairvoyance',text:'اللهم أرنا الأشياء كما هي ولا تجعل الدنيا أكبر همنا',tr:'O Dieu, montre-nous les choses telles qu\'elles sont et ne fais pas de la vie mondaine notre plus grand souci'}},
  {ar:{label:'دعاء الثبات على السنة',text:'اللهم ثبتنا على سنة نبيك ﷺ ولا تزغ قلوبنا بعد إذ هديتنا',tr:'O God, keep us firm upon the Sunnah of Your Prophet and do not let our hearts deviate after You have guided us'},en:{label:'Dua for Firmness on the Sunnah',text:'اللهم ثبتنا على سنة نبيك ﷺ ولا تزغ قلوبنا بعد إذ هديتنا',tr:'O God, keep us firm upon the Sunnah of Your Prophet and do not let our hearts deviate after You have guided us'},fr:{label:'Dua pour la Fermeté sur la Sunna',text:'اللهم ثبتنا على سنة نبيك ﷺ ولا تزغ قلوبنا بعد إذ هديتنا',tr:'O Dieu, affermis-nous sur la Sunna de Ton Prophète et ne laisse pas nos coeurs dévier après nous avoir guidés'}},
  {ar:{label:'دعاء حسن الخاتمة',text:'اللهم اجعل خير أعمالنا خواتمها وخير أيامنا يوم نلقاك',tr:'O God, make the best of our deeds our last, and the best of our days the day we meet You'},en:{label:'Dua for a Good End',text:'اللهم اجعل خير أعمالنا خواتمها وخير أيامنا يوم نلقاك',tr:'O God, make the best of our deeds our last, and the best of our days the day we meet You'},fr:{label:'Dua pour une Bonne Fin',text:'اللهم اجعل خير أعمالنا خواتمها وخير أيامنا يوم نلقاك',tr:'O Dieu, fais que les meilleurs de nos actes soient les derniers et le meilleur de nos jours celui où nous Te rencontrons'}},
  {ar:{label:'دعاء العفو',text:'اللهم إنك عفو تحب العفو فاعف عني',tr:'O God, You are the Pardoner who loves to pardon, so pardon me'},en:{label:'Dua for Pardon',text:'اللهم إنك عفو تحب العفو فاعف عني',tr:'O God, You are the Pardoner who loves to pardon, so pardon me'},fr:{label:'Dua pour le Pardon',text:'اللهم إنك عفو تحب العفو فاعف عني',tr:'O Dieu, Tu es le Pardonneur qui aime pardonner, alors pardonne-moi'}}
];

// ═══════════════ APP STATE ═══════════════
let lang = localStorage.getItem('sn-lang') || 'ar';
let theme = localStorage.getItem('sn-theme') || 'teal';
const themes = ['teal','night','ocean'];
const themeIcons = ['🌿','🌙','🌊'];
const themeNames = {teal:'🌿 Teal',night:'🌙 Night',ocean:'🌊 Ocean'};
let currentCardIdx = -1;

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  setTheme(theme);
  setLang(lang);
  initTabs();
  initSplash();
  initScrollTop();
  renderHome();
  renderCards();
  renderReflections();
  renderHabits();
  renderQuiz();
  renderAbout();
  renderHelp();
  renderDuas();
  initScrollReveal();
  initKeyboardNav();
});

// ═══════════════ SPLASH ═══════════════
function initSplash() {
  let count = 5;
  const el = document.getElementById('splashCount');
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
  const interval = setInterval(() => {
    count--;
    if (el) el.textContent = count;
    if (count <= 0) { dismissSplash(); clearInterval(interval); }
  }, 1000);
}
function dismissSplash() {
  const s = document.getElementById('splash');
  if (s) { s.classList.add('hidden'); setTimeout(() => s.style.display = 'none', 500); }
  playSound('click');
}

// ═══════════════ LANGUAGE ═══════════════
function setLang(l) {
  lang = l;
  localStorage.setItem('sn-lang', l);
  const isRTL = l === 'ar';
  document.documentElement.lang = l;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.body.dir = isRTL ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  const t = T[l];
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('appTitle', t.appTitle); set('splashSub', t.splashSub); set('splashHint', t.splashHint);
  set('tabHome', t.tabHome); set('tabCards', t.tabCards); set('tabReflections', t.tabReflections);
  set('tabHabits', t.tabHabits); set('tabQuiz', t.tabQuiz); set('tabAbout', t.tabAbout);
  set('cardsTitle', t.cardsTitle); set('cardsDesc', t.cardsDesc);
  set('reflectionsTitle', t.reflectionsTitle); set('reflectionsDesc', t.reflectionsDesc);
  set('habitsTitle', t.habitsTitle); set('habitsDesc', t.habitsDesc);
  set('quizTitle', t.quizTitle); set('quizDesc', t.quizDesc);
  set('helpTitle', t.helpTitle); set('duaPanelTitle', t.duaPanelTitle);
  set('habitsReset', t.resetBtn);
  renderHome(); renderCards(); renderReflections(); renderHabits(); renderQuiz(); renderAbout(); renderHelp(); renderDuas();
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[l].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
}

// ═══════════════ THEME ═══════════════
function setTheme(t) {
  theme = t;
  document.documentElement.dataset.theme = t;
  localStorage.setItem('sn-theme', t);
  const idx = themes.indexOf(t);
  const el = document.getElementById('themeIcon');
  if (el) el.textContent = themeIcons[idx];
}
function cycleTheme() {
  const idx = (themes.indexOf(theme) + 1) % themes.length;
  setTheme(themes[idx]);
  showToast(themeNames[themes[idx]]);
  playSound('theme');
}

// ═══════════════ TABS ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('panel-' + tab.dataset.tab);
      if (panel) panel.classList.add('active');
      window.scrollTo({top: 0, behavior: 'smooth'});
      playSound('click');
    });
  });
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % CARDS.length;
  const c = CARDS[dayIdx];
  const cd = c[lang];
  (document.getElementById('dailyCard')||{}).innerHTML= `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${cd.title}</div>
    <div class="daily-body">${cd.desc}</div>
    <div class="daily-action" onclick="document.querySelector('[data-tab=cards]').click()">${t.tabCards} &#8594;</div>
  `;
  const sections = [
    {icon:'📜',tab:'cards',title:t.tabCards,desc:lang==='ar'?'٢٠ بطاقة للفهم':lang==='fr'?'20 cartes':'20 cards'},
    {icon:'💡',tab:'reflections',title:t.tabReflections,desc:lang==='ar'?'تأملات في السنة':lang==='fr'?'Réflexions':'Reflections'},
    {icon:'📋',tab:'habits',title:t.tabHabits,desc:lang==='ar'?'تتبع يومي':lang==='fr'?'Suivi quotidien':'Daily tracking'},
    {icon:'🤔',tab:'quiz',title:t.tabQuiz,desc:lang==='ar'?'اختبر فهمك':lang==='fr'?'Testez-vous':'Test yourself'},
    {icon:'📖',tab:'about',title:t.tabAbout,desc:lang==='ar'?'عن الكتاب':lang==='fr'?'Le livre':'The book'},
  ];
  (document.getElementById('homeGrid')||{}).innerHTML= sections.map(s => `
    <div class="home-card" onclick="document.querySelector('[data-tab=${s.tab}]').click()">
      <span class="hc-icon">${s.icon}</span>
      <div class="hc-title">${s.title}</div>
      <div class="hc-desc">${s.desc}</div>
    </div>
  `).join('');
}

// ═══════════════ RENDER: CARDS ═══════════════
function renderCards() {
  const t = T[lang];
  const searchBar = `<div class="search-bar"><input type="text" id="cardsSearch" class="search-input" placeholder="${t.searchPlaceholder}" oninput="filterCards(this.value)"><span class="search-icon">🔍</span></div>`;
  const cards = CARDS.map((c, i) => {
    const d = c[lang];
    return `
    <div class="principle-card scroll-reveal" id="card-${c.id}" data-search="${d.title.toLowerCase()}">
      <div class="principle-head" onclick="toggleCard('card-${c.id}')">
        <span class="principle-num">${c.id}</span>
        <span class="principle-emoji">${c.emoji}</span>
        <span class="principle-title">${d.title}</span>
        <span class="principle-chev">&#9660;</span>
      </div>
      <div class="principle-body">
        <div class="principle-inner">
          <p class="principle-desc">${d.desc}</p>
          <div class="comparison-box">
            <div class="comparison-side carnegie-side">
              <div class="comp-label">📜 ${t.hadith}</div>
              <div class="comp-text">${d.hadith}</div>
            </div>
            <div class="comparison-side ghazali-side">
              <div class="comp-label">⚖️ ${t.fiqh}</div>
              <div class="comp-text">${d.fiqh}</div>
            </div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="event.stopPropagation();shareCard(${i})">
            <span class="share-icon">&#128279;</span> ${t.share}
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
  (document.getElementById('cardsContainer')||{}).innerHTML= searchBar + cards;
}

function filterCards(query) {
  const q = query.toLowerCase().trim();
  document.querySelectorAll('.principle-card').forEach(card => {
    const searchText = card.dataset.search || '';
    const title = card.querySelector('.principle-title');
    const titleText = title ? title.textContent.toLowerCase() : '';
    const match = !q || searchText.includes(q) || titleText.includes(q);
    card.style.display = match ? '' : 'none';
  });
}

async function shareCard(idx) {
  const c = CARDS[idx];
  const d = c[lang];
  const text = `${c.emoji} ${d.title}\n\n${d.desc}\n\n💡 ${d.action}\n\n— السنة النبوية | Prophetic Sunnah`;
  if (navigator.share) {
    try { await navigator.share({ title: d.title, text }); } catch(e) {}
  } else {
    try {
      await navigator.clipboard.writeText(text);
      showToast(lang === 'ar' ? 'تم النسخ!' : lang === 'fr' ? 'Copié !' : 'Copied!');
    } catch(e) { showToast('Could not copy'); }
  }
}

// ═══════════════ RENDER: REFLECTIONS ═══════════════
function renderReflections() {
  const t = T[lang];
  (document.getElementById('reflectionsContainer')||{}).innerHTML= REFLECTIONS.map(r => {
    const d = r[lang];
    return `
    <div class="anxiety-card scroll-reveal">
      <div class="anxiety-header">
        <span class="anxiety-emoji">${r.emoji}</span>
        <span class="anxiety-title">${d.title}</span>
      </div>
      <div class="anxiety-problem">
        <span class="anxiety-label">${t.problem}</span>
        ${d.problem}
      </div>
      <div class="anxiety-solution">
        <span class="anxiety-label">${t.solution}</span>
        ${d.solution}
      </div>
      <div class="verse-box">
        <div class="verse-arabic">${d.verse}</div>
        <div class="verse-ref">${d.verseRef}</div>
      </div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: HABITS ═══════════════
function renderHabits() {
  const today = new Date().toDateString();
  let habitsState = JSON.parse(localStorage.getItem('sn-habits') || '{}');
  if (habitsState.date !== today) {
    updateStreak(habitsState);
    habitsState = { date: today, done: [] };
    localStorage.setItem('sn-habits', JSON.stringify(habitsState));
  }
  const streak = getStreak();
  const streakHTML = streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${T[lang].streakMsg}</div>` : '';
  (document.getElementById('habitsContainer')||{}).innerHTML= HABITS.map((h, i) => {
    const d = h[lang];
    const isDone = habitsState.done.includes(i);
    return `
    <div class="habit-item ${isDone ? 'done' : ''}" onclick="toggleHabit(${i})">
      <span class="habit-check">${isDone ? '&#10003;' : ''}</span>
      <span class="habit-emoji">${h.emoji}</span>
      <div>
        <div class="habit-label">${d.label}</div>
        <div class="habit-source">${d.source}</div>
      </div>
    </div>`;
  }).join('');
  const streakEl = document.getElementById('streakBadge');
  if (streakEl) streakEl.innerHTML = streakHTML;
  updateHabitsProgress(habitsState);
}

function toggleHabit(i) {
  const today = new Date().toDateString();
  let hs = JSON.parse(localStorage.getItem('sn-habits') || '{}');
  if (hs.date !== today) hs = { date: today, done: [] };
  const idx = hs.done.indexOf(i);
  if (idx > -1) hs.done.splice(idx, 1); else hs.done.push(i);
  localStorage.setItem('sn-habits', JSON.stringify(hs));
  renderHabits();
  playSound(idx > -1 ? 'click' : 'success');
  if (hs.done.length === HABITS.length) {
    launchConfetti();
    showToast(T[lang].allDone);
  }
}

function resetHabits() {
  localStorage.setItem('sn-habits', JSON.stringify({ date: new Date().toDateString(), done: [] }));
  renderHabits();
  showToast(lang === 'ar' ? 'تم إعادة التعيين' : lang === 'fr' ? 'Réinitialisé' : 'Reset');
}

function updateHabitsProgress(hs) {
  const done = hs.done.length;
  const total = HABITS.length;
  const pct = total > 0 ? (done / total * 100) : 0;
  const fill = document.getElementById('habitsFill');
  const txt = document.getElementById('habitsText');
  if (fill) fill.style.width = pct + '%';
  if (txt) txt.textContent = `${done}/${total}`;
}

function updateStreak(prevState) {
  let streakData = JSON.parse(localStorage.getItem('sn-streak') || '{"count":0,"lastDate":""}');
  if (prevState && prevState.done && prevState.done.length === HABITS.length && prevState.date) {
    const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
    if (prevState.date === yesterday.toDateString()) streakData.count++;
    else if (prevState.date !== new Date().toDateString()) streakData.count = prevState.done.length === HABITS.length ? 1 : 0;
    streakData.lastDate = prevState.date;
  } else if (prevState && prevState.date) {
    streakData.count = 0; streakData.lastDate = prevState.date;
  }
  localStorage.setItem('sn-streak', JSON.stringify(streakData));
}

function getStreak() {
  return JSON.parse(localStorage.getItem('sn-streak') || '{"count":0}').count;
}

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#00695C','#4DB6AC','#80CBC4','#E0F2F1','#FFD54F','#26A69A','#B2DFDB'];
  for (let i = 0; i < 120; i++) {
    particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height-canvas.height,w:Math.random()*10+5,h:Math.random()*6+3,color:colors[Math.floor(Math.random()*colors.length)],vx:(Math.random()-.5)*4,vy:Math.random()*3+2,rot:Math.random()*360,rotSpeed:(Math.random()-.5)*10});
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; }
  }
  draw();
}

// ═══════════════ RENDER: QUIZ ═══════════════
function renderQuiz() {
  const t = T[lang];
  (document.getElementById('quizContainer')||{}).innerHTML= QUIZ.map((q, i) => `
    <div class="quiz-question scroll-reveal" id="quiz-q-${i}">
      <div class="quiz-q-text">${i+1}. ${q[lang]}</div>
      <div class="quiz-options">
        <button class="quiz-opt" onclick="selectQuizOpt(${i},2)">${t.yes}</button>
        <button class="quiz-opt" onclick="selectQuizOpt(${i},1)">${t.sometimes}</button>
        <button class="quiz-opt" onclick="selectQuizOpt(${i},0)">${t.no}</button>
      </div>
    </div>
  `).join('') + `<button class="quiz-submit" onclick="submitQuiz()">${t.submitQuiz}</button>`;
  document.getElementById('quizResult').classList.add('hidden');
  window._quizAnswers = {};
}

function selectQuizOpt(qi, val) {
  window._quizAnswers[qi] = val;
  document.querySelectorAll(`#quiz-q-${qi} .quiz-opt`).forEach((o, oi) => {
    o.classList.toggle('selected', [2,1,0][oi] === val);
  });
  playSound('click');
}

function submitQuiz() {
  const answers = window._quizAnswers || {};
  if (Object.keys(answers).length < QUIZ.length) {
    showToast(lang === 'ar' ? 'أجب على جميع الأسئلة' : lang === 'fr' ? 'Répondez à toutes les questions' : 'Answer all questions');
    return;
  }
  const invertedQs = [1, 3];
  let score = 0;
  Object.entries(answers).forEach(([qi, v]) => {
    score += invertedQs.includes(parseInt(qi)) ? (2 - v) : v;
  });
  const max = QUIZ.length * 2;
  const pct = Math.round(score / max * 100);
  let emoji, title, desc;
  if (pct >= 75) {
    emoji = '🌟'; title = lang==='ar'?'ممتاز!':lang==='fr'?'Excellent !':'Excellent!';
    desc = lang==='ar'?'فهمك للسنة متين ومتوازن. استمر في التعلم!':lang==='fr'?'Votre compréhension de la Sunna est solide. Continuez !':'Your understanding of the Sunnah is solid. Keep learning!';
  } else if (pct >= 50) {
    emoji = '📖'; title = lang==='ar'?'جيد':lang==='fr'?'Bien':'Good';
    desc = lang==='ar'?'أنت على الطريق الصحيح لكن هناك مجال للتعمق أكثر.':lang==='fr'?'Vous êtes sur la bonne voie mais il y a place pour approfondir.':'You\'re on the right track but there\'s room to go deeper.';
  } else {
    emoji = '🔍'; title = lang==='ar'?'حان وقت التعلم':lang==='fr'?'Il est temps d\'apprendre':'Time to Learn';
    desc = lang==='ar'?'فهمك للسنة يحتاج تعمّق. ابدأ بقراءة الكتاب وتعلّم أساسيات علم الحديث.':lang==='fr'?'Votre compréhension a besoin d\'approfondissement. Commencez par lire le livre.':'Your understanding needs deepening. Start by reading the book.';
  }
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  result.innerHTML = `
    <div class="qr-emoji">${emoji}</div>
    <div class="qr-score">${pct}%</div>
    <div class="qr-title">${title}</div>
    <div class="qr-desc">${desc}</div>
    <button class="quiz-submit" onclick="renderQuiz()" style="margin-top:16px">${T[lang].quizAgain}</button>
  `;
  result.scrollIntoView({ behavior: 'smooth' });
  playSound('success');
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. قد تحتوي على تبسيط لأفكار المؤلف. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري. ألّف أكثر من ٩٤ كتاباً في الفكر الإسلامي. درس في الأزهر ودرّس في جامعات عربية عديدة. عُرف بمنهجه الوسطي والتجديدي.',
      bookTitle: 'عن الكتاب',
      bookDesc: '"السنة النبوية بين أهل الفقه وأهل الحديث" كتاب يعالج الفجوة بين المحدثين والفقهاء. يدعو الغزالي إلى فهم السنة في إطار مقاصد الشريعة وربطها بالقرآن والعقل، محذراً من الحرفية الجامدة والتطبيق المنفصل عن الواقع.',
      sourcesTitle: 'المصادر',
      sources: ['"السنة النبوية بين أهل الفقه وأهل الحديث" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','كتب أصول الفقه المعتمدة'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker. Author of 94+ books on Islamic thought. Studied at Al-Azhar and taught at many Arab universities. Known for his moderate and reformist approach.',
      bookTitle: 'About the Book',
      bookDesc: '"The Prophetic Sunnah Between Jurists and Hadith Scholars" addresses the gap between hadith specialists and jurists. Al-Ghazali calls for understanding the Sunnah within the framework of Islamic objectives and connecting it to the Quran and reason, warning against rigid literalism and application disconnected from reality.',
      sourcesTitle: 'Sources',
      sources: ['"The Prophetic Sunnah Between Jurists and Hadith Scholars" — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Established Usul al-Fiqh works'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tiré du livre et de sources islamiques fiables.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique égyptien. Auteur de plus de 94 livres sur la pensée islamique. Diplômé d\'Al-Azhar, enseignant dans de nombreuses universités arabes. Connu pour son approche modérée et réformiste.',
      bookTitle: 'À Propos du Livre',
      bookDesc: '« La Sunna Prophétique entre Juristes et Spécialistes du Hadith » traite du fossé entre les spécialistes du hadith et les juristes. Al-Ghazali appelle à comprendre la Sunna dans le cadre des objectifs islamiques, en la reliant au Coran et à la raison.',
      sourcesTitle: 'Sources',
      sources: ['« La Sunna Prophétique entre Juristes et Spécialistes du Hadith » — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','Ouvrages de référence d\'Usul al-Fiqh'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  (document.getElementById('aboutContainer')||{}).innerHTML= `
    <div class="about-disclaimer"><div class="about-disclaimer-title">${a.disclaimerTitle}</div><p>${a.disclaimer}</p></div>
    <div class="about-author"><span class="about-author-icon">📚</span><div class="about-author-info"><div class="about-author-name">${a.authorName}</div><div class="about-author-dates">${a.authorDates}</div><div class="about-author-bio">${a.authorBio}</div></div></div>
    <div class="about-section"><div class="about-section-title">${a.bookTitle}</div><p class="about-text">${a.bookDesc}</p></div>
    <div class="about-section"><div class="about-section-title">${a.sourcesTitle}</div>${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}</div>
    <div class="about-section"><p class="about-text">${a.contact}</p></div>
  `;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب "السنة النبوية بين أهل الفقه وأهل الحديث" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},
      {title:'✨ المميزات',body:'ثلاث لغات، ٣ أنماط، ٢٠ بطاقة، ٨ تأملات، تتبع العادات، اختبار ذاتي، أدعية نبوية.'},
      {title:'⌨️ اختصارات',body:'استخدم الأسهم للتنقل بين البطاقات. اضغط Escape لإغلاق اللوحات.'},
    ],
    en: [
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},
      {title:'📚 Sources',body:'"The Prophetic Sunnah Between Jurists and Hadith Scholars" by Sheikh al-Ghazali, the Holy Quran, Prophetic Sunnah.'},
      {title:'✨ Features',body:'Three languages, 3 themes, 20 cards, 8 reflections, habit tracker, self-quiz, Prophetic duas.'},
      {title:'⌨️ Shortcuts',body:'Use arrow keys to navigate between cards. Press Escape to close panels.'},
    ],
    fr: [
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},
      {title:'📚 Sources',body:'« La Sunna Prophétique » par Sheikh al-Ghazali, le Saint Coran, la Sunna Prophétique.'},
      {title:'✨ Fonctionnalités',body:'Trois langues, 3 thèmes, 20 cartes, 8 réflexions, suivi habitudes, quiz, duas prophétiques.'},
      {title:'⌨️ Raccourcis',body:'Utilisez les flèches pour naviguer entre les cartes. Échap pour fermer les panneaux.'},
    ]
  };
  (document.getElementById('helpBody')||{}).innerHTML= help[lang].map(h => `
    <div class="help-item"><div class="help-item-title">${h.title}</div><div>${h.body}</div></div>
  `).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  (document.getElementById('duaPanelContent')||{}).innerHTML= DUAS.map(d => {
    const dd = d[lang];
    return `<div class="dua-item"><div class="dua-item-label">${dd.label}</div><div class="dua-item-ar">${dd.text}</div><div class="dua-item-tr">${dd.tr}</div></div>`;
  }).join('');
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  function observeAll() { document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => observer.observe(el)); }
  observeAll();
  document.querySelectorAll('.tab').forEach(tab => { tab.addEventListener('click', () => setTimeout(observeAll, 100)); });
}

// ═══════════════ KEYBOARD ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const helpPanel = document.getElementById('helpPanel');
      if (!helpPanel.classList.contains('hidden')) { toggleHelp(); return; }
      const duaPanel = document.getElementById('duaPanel');
      if (!duaPanel.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.principle-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const cardsPanel = document.getElementById('panel-cards');
      if (!cardsPanel || !cardsPanel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'cardsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.principle-card')).filter(c => c.style.display !== 'none');
      if (cards.length === 0) return;
      if (currentCardIdx >= 0 && currentCardIdx < cards.length) cards[currentCardIdx].classList.remove('open');
      const dir = (document.documentElement.dir === 'rtl') ? (e.key === 'ArrowRight' ? -1 : 1) : (e.key === 'ArrowRight' ? 1 : -1);
      currentCardIdx = Math.max(0, Math.min(cards.length - 1, currentCardIdx + dir));
      cards[currentCardIdx].classList.add('open');
      cards[currentCardIdx].scrollIntoView({ behavior: 'smooth', block: 'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) { const card = document.getElementById(id); if (card) { card.classList.toggle('open'); playSound('click'); } }
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) { const t = document.getElementById('toast'); const m = document.getElementById('toastMsg'); if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); } }
function initScrollTop() { const btn = document.getElementById('scrollTop'); window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); }); }

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type === 'click') { osc.frequency.value = 800; osc.type = 'sine'; gain.gain.value = 0.04; }
    else if (type === 'success') { osc.frequency.value = 523; osc.type = 'sine'; gain.gain.value = 0.06; }
    else if (type === 'theme') { osc.frequency.value = 440; osc.type = 'triangle'; gain.gain.value = 0.05; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}


// ═══════════════ TICKER ═══════════════
function renderTicker() {
  const tips = {
    ar: ['📖 السنة النبوية — الشيخ محمد الغزالي','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ الدعاء','⭐ اكتشف كنوز الكتاب'],
    en: ['📖 The Prophetic Sunnah — Sheikh Mohammed Al-Ghazali','🏆 Earn points and badges','🌟 Try the Young Explorer mode','🤲 Remember to make dua','⭐ Discover the book\'s treasures'],
    fr: ['📖 La Sunna Prophétique — Cheikh Mohammed Al-Ghazali','🏆 Gagnez des points et des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas le dua','⭐ Découvrez les trésors du livre']
  };
  const curLang = (typeof lang !== 'undefined' && lang) || document.documentElement.lang || 'ar';
  const items = tips[curLang] || tips.ar;
  const doubled = [...items, ...items];
  const ticker = document.getElementById('tickerText');
  if (!ticker) return;
  ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join('');
  ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`;
}

// Auto-start ticker
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderTicker);
} else {
  renderTicker();
}
