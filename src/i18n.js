import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          part0: 'Abu Dhabi Open Data',
          part1: 'Agriculture',
          part2: 'Economy',
          part3: 'Energy',
          part4: 'Business',
          part5: 'Transport',
          part6: 'Environment',
          part7: 'Society',
          part8: 'Education',
          part9: 'Health',
          part10: 'Tourism',
          part11: 'Technology',
          part12: 'Safety & \n Security',
          part13: 'Abu Dhabi Data Insights',
          part14: 'Hospitals',
          part15: 'Medical Centers',
          part16: 'Clinics',
          part17: 'Pharmacies',
          part18: 'Public Schools',
          part19: 'Private Schools',
          part20: 'Charter Schools',
          part21: 'Hotels',
          part22: 'Scholarship Dist. by Degree',
          part23: 'Livestock and Holding By Region',
          part24: 'Recycled Water Reused',
          part25: 'Currency Issued by \n Central Bank',
          part26: 'Blood Bank Statistics',
          part27: 'Renewable Energy Share',
          part28: 'Private School by Curriculum \n 2019',
          part29: 'Private School Students \n 2013-2020',
          part30: 'Hotel Index prices- relative \n changes Feb.20 vs Feb.19',
          part31: 'Hotel Monthly Occupancy Rate \n 2018 vs 2019',
          part32: 'Registered New Business License 2006 - 2019',
          part33: 'Health Facilities by Sector \n 2011-2020',
          part34: 'Datasets',
          part35: 'Resources',
          part36: 'APIs ',
          part37: 'Government Entities',
          part38: 'Dataset Viewed     ',
          part39: 'Downloaded',
          part40: 'Contact us',
          part41: 'Your name',
          part42: 'Your e-mail address',
          part43: 'Subject',
          part44: 'Message',
          part45: 'CAPTCHA',
          part46:
            'This question is for testing whether or not you are a human visitor and to prevent automated spam submissions.',
          part47: 'What code is in the image? ',
          part48: 'Enter the characters shown in the image.',
          part49: 'Send message',
          part50: 'Home',
          part51: 'Datasets',
          part52: 'Publisher',
          part53: 'About Us',
          part54: 'Developers',
          part55: 'Abu Dhabi Open Data',
          part56: 'Search',
          part57:
            'Welcome to Abu Dhabi Open Data Platform, you can search all' +
            ' Abu Dhabi Open Datasets',
          part58: 'View All Datasets',
          part59: 'Need immediate assistance?',
          part60: 'Emergency Numbers',
          part61: 'Powered By',
          part62: 'Police',
          part63: 'Ambulance',
          part64: 'Civil Defence',
          part65: 'Electricity',
          part66: 'About the Platform',
          part67: 'Open Data Sites',
          part68: 'Find us on',
          part69: 'DataManagers',
          part70: 'FAQs',
          part71: 'About the Program',
          part72: 'Terms of use',
          part73: ` ${new Date().getFullYear()} Abu Dhabi Government. All rights reserved`,
          part74: 'Log in',
          part75: 'Project Open Data',
          part76: 'DCAT',
          part77: 'Drupal',
          part78: 'Open Source Open',
          part79: 'Data',
          part80: 'Recently Added Datasets',
          part81: 'Top 5 most viewed datasets',
          part82: 'more',
          part83: 'Abu Dhabi Government Data Management Program',
          part84:
            'The goal and thus the scope of the Abu Dhabi Government Data Management Program is first to acknowledge that data is a key asset of the Abu Dhabi Government, and then to improve both the data management functions and the data stored within the Abu Dhabi Government to accelerate and maximize value realization from data.',
          part85:
            'The benefit of owning and using high quality data is that it becomes a strategic enabler for the Abu Dhabi Government in its journey to become a leading data-driven government that benefit the well-being of Abu Dhabi citizens and boost the economy of the emirate.',
          part86:
            'Data Management best practice means that data must first be appropriately governed; only then can the supporting data management principles below, be applied to enable successful data management:',
          part87: 'Data ownership',
          part88: 'Clearly described and discoverable data',
          part89: 'Measured and improvable data quality',
          part90: 'Availability and integration of data',
          part91:
            'Management of supporting tools to maintain, analyze, and report on the data',
          part92: 'References:',
          part93: 'Abu Dhabi Government Data Management Standards (v1.0)',
          part94: 'Abu Dhabi Government Data Management Policy (v1.0)',
          part95: '(PDF)',
          part96: 'UAE Open Data Portal - Bayanat',
          part97: 'Health DOH',
          part98: 'Judiciary ADJD',
          part99: 'Tourism DCT',
          part100: 'Police ADPolice',
          part101: 'OSHAD',
          part102: 'What is a Dataset?',
          part103:
            'Datasets are described as containers; they group related pieces of data as Resources (data files). Grouping Resources together in Datasets gives the data a common summary description, and a unique URL to easily share the dataset directly.\ne.g. An example of a dataset could be “Police Stations” with one or more resources listed below it. Examples of resources could be “Police Stations” as a CSV file, “Police Stations” as JSON file, and “Police Stations” as an API file.',
          part104: 'What is a Resource?',
          part105:
            'Resources represent the actual files that can be viewed and downloaded by site visitors, and datasets can contain one or more file formats such as csv, xls, json, xlsx, tsv, geojson, xml, etc.',
          part106: 'How are Datasets categorized?',
          part107:
            'Datasets in Abu Dhabi Open Data Portal are categorized using three methods:',
          part108:
            'Abu Dhabi Government Entity (ADGEs/Groups) datasets are grouped by their respective publishers.\ne.g. Department of Health, Police, Environment Agency.',
          part109:
            'Tags are additional free keywords assigned by these publishers to describe their specific datasets and make them searchable, allowing site visitors to find datasets by typing tag names into a search box.\ne.g. Births 2019, GDP2019, CPI 2018.',
          part110:
            'Topics are assigned by publishers from predefined lists to organize datasets when a dataset is created. Topics add an additional facet to the search/datasets page; initially there are eight (8) predefined topics in the portal.\ne.g. Economy, Education, Environment, Heath, Infrastructure, Society, Technology, Transport.',
          part111: 'How can I find a Dataset?',
          part112:
            'On the home page, you can search for datasets by typing keywords in the search box. Keywords include dataset, resource, title, description, tag, topic, publisher and format.',
          part113:
            'Terms and conditions for using "Abu Dhabi Open Data" platform:',
          part114:
            "All data are available on the Abu Dhabi Data platform it open data services (Public) so its published as is.\nAbu Dhabi Digital Authority seek to ensure that all published data are accurate. The platform does not provide any warranty and responsibility of the content accuracy or appropriate timing and completeness of any specific purpose or use. The Authority or the available data aren't responsibility for:",
          part115:
            "The owner of the data is responsible of data accuracy, therefore the Abu Dhabi Digital Authority isn't responsible of any errors because of the inaccuracy of the data presented on the Abu Dhabi Open Data Platform regardless of the reason.",
          part116:
            'Any decision or action taken by anyone who uses or relies on this data.',
          part117:
            'Any expense, loss or damage etc.. , direct or indirect loss or damage, or any expense, loss or damage of any kind from the use of the data through the portal.',
          part118:
            'Any other specific action in any disclaimers or compensation clause.',
          part119:
            'Abu Dhabi Digital Authority have the right to stop any available content on the platform at any time and for any reason. If published all or part of the datasets on the platform was not accurate or misleadingly, Abu Dhabi Open Data Platform team will correct this data or remove it from the platform without prior notice. The Authority will not be responsible of any loss or damage of using datasets. In addition, the Authority will not be responsible for the accuracy, usefulness, or availability of any data in the datasets.',
          part120:
            'The Authority have the right to amend the website, datasets or any means to access or using datasets or APIs at any time or from time to time without prior notice to the users.',
          part121:
            'The Authority have the right under any circumstances, for any reason or without reason and with or without prior notice to terminate your access to datasets or any means to access the datasets or the API or use it.',
          part122:
            'As a user of the data available on the platform can’t be declare or imply the participation of the authority, sponsorship, or approved method or purpose of your use or reproduction of the datasets. The Authority have the right to judge to extent permitted by law, any use of datasets in a way that counterfeits, misrepresents, detracts or uses fraudulent materials.',
          description: {},
          part123: 'Real Time APIs',
          part124: 'Your name field is required.',
          part125: 'Your  e-mail field is required.',
          part126: 'Subject field is required.',
          part127: 'Message field is required.',
          part128: 'What code is in the image ? field is required.',
          part129: 'Analytical Applications',
          part130: 'Abu Dhabi on COVID-19',
          part131: 'COVID-19 Dashboard',
          part132: 'Health Explorer',
          part133:
            '\nHealth Explorer is an interactive map that will provide you with all the Health Facilities information and a powerful set of tools with a Geo-enabled Viewer where you can search for facilities by name or type or areas of Abu Dhabi Emirate',
          part134: 'Virtual Doctor for Covid-19',
          part135:
            '\nVirtual Doctor for Covid-19 is an assessment tool by MOHAP Ministry of Health and Prevention which helps you through Coronavirus Covid-19',
          part136: 'COVID-19 Dashboard by World Health Organization WHO',
          part137:
            '\nWorld Health Organization Coronavirus disease situation dashboard presents official daily counts of COVID-19 cases and deaths worldwide',
          part138: 'Welcome to the Abu Dhabi Open Data Applications',
          part139:
            '\nAbu Dhabi data powers software applications that help people make informed decisions – Below are just a few examples of government, community, and business tools that uses the power of Abu Dhabi open data that is accessible, vetted, and available; and are, for the majority, free and do not require registration to use, you can find here as well applications published by Abu Dhabi government entities to help build products and services',
          part140: 'Urban Fabric Evolution',
          part141:
            '\nAbu Dhabi island urban fabric evolution paced up in a high growth scenario, where as you can see that the city grew 10 times its original size from 1970. Moreover the building heights in the city climbed from 8 m for the highest building in 1970 to more than 320 m in 2018.',
          part142: 'Abu Dhabi in Motion',
          part143:
            "\nAbu Dhabi's evolution has been evident in the way its leaders have planned its growth over the past 50 years. The country has transformed itself from a quiet desert city to a commercial hub - and now under the Abu Dhabi Economic Vision 2030, Abu Dhabi strives to set an example for development projects that steer the emirate and the country from an oil-based economy to a knowledge-driven economy.",
          part144: 'Radar Network',
          part145:
            '\nWelcome to National Center for Meteorology Radar Network where you can find all required information about the to  regional exchange of weather radar data',
          part146: 'Al Bahar',
          part147:
            '\nThe application shows Marine Meteorological Services from the National Center of Meteorology such as Sea Conditions, Warnings, Marine Monitoring, Radar and Satellites, Tropical Cyclones and Maritime Bulletin',
          part148: 'Open Data Dashboards',
          part149:
            "\nThe Open Data Dashboards, the first-of-its-kind online portal that will relay the Emirate's most up-to-date health statistics in a visual and engaging manner. Users will be able to interact with the dashboards in a multitude of ways including interactive filters, which will help users to visualise the data provided over a selected time period in addition to displaying trends and related changes within the Abu Dhabi healthcare system. Moreover, users will be able to compare selected statistics with international benchmarks on the same parameters.",
          part150: 'Darb',
          part151:
            '\nDARB is an interactive map that will provide you with all the information you may require about your itinerary whether by Air, Land or Sea, throughout the Abu Dhabi Emirate',
          part152: 'Islamic Finder',
          part153:
            '\nThe aim of this site is to help you discover Islamic Facilities in Abu Dhabi by providing a set of tools with a Geo-enabled Viewer (Islamic Facilities Explorer) where you can search for facilities by name, type and services provided. Another tool is the Islamic Chatbot where you can chat with the Bot and get answers on your queries.',
          part154: "Investor's Compass",
          part155:
            "\nAn interactive electronic platform that provides an integrated database and smart digital services for business sector in Abu Dhabi, which in turn promotes the emirate's competitiveness regionally and internationally respecting the ease of doing business. As this platform is considered as an important tool or instrument that assists investors and businessmen to study projects feasibility, make appropriate decisions, as well as to encourage and motivate them to set up and initiate their investment projects in Abu Dhabi, supported by real-time data of the economic facilities locations, and the occupational, industrial and commercial activities. In addition to contact information of the registered facilities and approximate data about the average of lease contracts for businesses and display of Made in Abu Dhabi products",
          part156: 'Abu Dhabi Spatial Data Infrastructure',
          part157:
            '\nThe Abu Dhabi Spatial Data Infrastructure (AD-SDI) is a program of the Government of Abu Dhabi, administered within the Abu Dhabi Digital Authority (ADDA) Digital Government program to facilitate the sharing of geospatial data among government agencies and other stakeholders, and working on raising the GeoMaturity of the Emirate of Abu Dhabi.\n\nWe are dedicated to promote, facilitate, coordinate, and support the development of dynamic, entrepreneurial, and flexible geospatial enabling environment to meet Government’s aspirations and society’s needs, while progressing towards Geo-Mature Abu Dhabi',
          part158: 'Applications',
        },
      },
      ar: {
        translation: {
          part0: 'بيانات أبوظبي',
          part1: 'الزراعة',
          part2: 'الاقتصاد',
          part3: 'الطاقة',
          part4: 'الاعمال',
          part5: 'المواصلات',
          part6: 'البيئة',
          part7: 'المجتمع',
          part8: 'التعليم',
          part9: 'الصحة',
          part10: 'السياحة',
          part11: 'التكنولوجيا',
          part12: ' الامن \n والسلامة',
          part13: 'لمحة عن بيانات أبوظبي',
          part14: 'مستشفى',
          part15: 'مركز طبي',
          part16: 'عيادة',
          part17: 'صيدلية',
          part18: 'مدرسة حكومية',
          part19: 'مدرسة خاصة',
          part20: 'مدرسة الشراكات',
          part21: 'فندق',
          part22: 'قسم الابتعاث حسب الدرجة',
          part23: 'الثروة الحيوانية والحيازة حسب\n المنطقة',
          part24: 'إعادة استخدام المياه المعاد\nتدويرها',
          part25: 'العملة الصادرة عن البنك المركزي',
          part26: 'إحصائيات بنك الدم',
          part27: 'حصة الطاقة المتجددة',
          part28: 'المدارس الخاصة حسب المناهج 2019',
          part29: 'اعداد طلاب المدارس الخاصة\n 2013-2020',
          part30: ' لارقام القياسية لأسعار\n  الفنادق شهر فبراير 2020',
          part31: 'معدلات الإشغال بالفنادق شهريا 2018-2019',
          part32: 'الرخص التجارية الجديد المسجلة 2006 - 2019',
          part33: 'المرافق الصحية\n2011-2020',
          part34: 'مجموعة موارد',
          part35: 'واجهات برمجة التطبيق',
          part36: 'عدد الجهات الحكومية',
          part37: 'مشاهدة بيانات',
          part38: 'تحميل',
          part39: 'تحميل',
          part40: 'اقترح بيانات',
          part41: 'اسمك',
          part42: 'البريد الالكتروني',
          part43: 'الموضوع',
          part44: 'الرسالة',
          part45: 'كلمة التحقق',
          part46:
            'هذا السؤال لاختبار ما إذا كنت زائرًا بشريًا أم لا ولمنع عمليات إرسال البريد العشوائي الآلية',
          part47: 'ما هو الرمز في الصورة؟ ',
          part48: 'أدخل الرموز التي تظهر في الصورة..',
          part49: 'إرسال',
          part50: 'الرئيسية',
          part51: 'البيانات',
          part52: 'الناشرين',
          part53: 'من نحن',
          part54: 'المطورين',
          part55: 'بيانات أبوظبي',
          part56: 'بحث',
          part57:
         '.مرحبًا بك في بيانات أبوظبي. يمكنك البحث في جميع مجموعات بيانات أبوظبي المفتوحة',
          part58: 'عرض كل مجموعة البيانات          ',
          part59: 'هل تحتاج إلى مساعدة فورية؟',
          part60: 'أرقام الطوارئ',
          part61: 'مشغل بواسطة',
          part62: 'شرطة',
          part63: 'سياره اسعاف',
          part64: 'الدفاع المدني',
          part65: 'كهرباء',
          part66: 'عن المنصة',
          part67: 'مواقع البيانات',
          part68: 'تابعونا على',
          part69: 'مدير البيانات',
          part70: 'أسئلة مكررة',
          part71: 'عن البرنامج',
          part72: 'شروط الاستخدام',
          part73: '2022 حكومة أبوظبي جميع الحقوق محفوظة.',
          part74: 'تسجيل الدخول',
          part75: 'مشروع البيانات المفتوحة',
          part76: 'المفتوح',
          part77: 'دروبال',
          part78: 'مفتوح المصدر مفتوح',
          part79: 'بيانات',
          part80: 'مجموعة البيانات المضافة حديثًا',
          part81: 'أعلى 5 مجموعة بيانات الأكثر مشاهدة',
          part82: 'أكثر',
          part83: 'برنامج إدارة البيانات لحكومة أبوظبي',
          part84:
            'إن الغاية الأساسية من نطاق عمل برنامج إدارة البيانات لحكومة أبوظبي يتمثل أولاً في الإقرار بكون البيانات واحدة من الأصول المهمة التي تمتلكها حكومة أبوظبي، ومن ثم العمل على تحسين كل من إجراءات إدارة البيانات والبيانات التي يتم تداولها وحفظها من قبل الحكومة لتحقيق وتعظيم القيمة المضافة من البيانات',
          part85:
            'كما يعتبر امتلاك بيانات عالية الجودة إحدى الممكنات الاستراتيجية لحكومة أبوظبي نحو تحقيق رؤيتها كحكومة رائدة تعتمد على البيانات، وتساهم في الارتقاء بنمط حياة الأفراد وتعزيز النمو الاقتصادي بالإمارة.',
          part86:
            'إن أفضل الممارسات في إدارة البيانات تقتضي وبشكل أساسي الحكومة المناسبة والسليمة للبيانات، وعندها فقط يكون بالإمكان دعم تطبيق مبادئ إدارة البيانات المذكورة أدناه، والتي تودي بدورها إلى تحقيق الإدارة السليمة والمتكاملة للبيانات.',
          part87: 'ملكية البيانات',
          part88: 'بيانات موصوفة بشكل واضح وقابلة للفهم',
          part89: 'قياس جودة البيانات وإمكانية تحسينها',
          part90: 'توفر وتكامل البيانات',
          part91:
            'إدارة الأدوات الداعمة لتحديث وتحليل البيانات وإنشاء التقارير',
          part92: 'المراجع:',
          part93: 'سياسة إدارة البيانات لحكومة أبوظبي (الإصدار الأول) ',
          part94: 'معايير إدارة البيانات لحكومة أبوظبي (الإصدار الأول) ',
          part95: '(PDF)',
          part96: 'بوابة البيانات المفتوحة لدولة الامارات – بيانات',
          part97: 'دائرة الصحة',
          part98: 'دائرة القضاء',
          part99: 'دائرة الثقافة والسياحة',
          part100: 'القيادة العامة لشرطة أبوظبي',
          part101: 'مركز أبوظبي للسلامة والصحة المهنية',
          part102: 'ما هي مجموعة البيانات؟',
          part103:
            "توصف مجموعات البيانات بأنها حاويات تجمع أجزاء البيانات ذات الصلة كمصادر (ملفات البيانات)، إذ أن تقسيم الموارد كمجموعات مع بعض يمنحها وصفًا موجزًا ورابطاً فريداً 'URL' لمشاركة مجموعة البيانات بسهولة.\nعلى سبيل المثال: مجموعة البيانات المتعلقة 'بمراكز الشرطة' ممكن إدراجها على شكل 'مراكز الشرطة' كملف CSV، وملف JSON وكملف API.",
          part104: 'كيف يتم تصنيف مجموعات البيانات؟',
          part105: '',
          part106: '',
          part107:
            ':يتم تصنيف مجموعات البيانات على منصة أبوظبي للبيانات المفتوحة باستخدام ثلاث طرق',
          part108:
            'يتم تجميع مجموعات بيانات الجهات الحكومية في إمارة أبوظبي من قبل الناشرين المعنيين، على سبيل المثال وزارة الصحة والشرطة وهيئة البيئة وغيرها.',
          part109:
            'العلامات هي كلمات مفتاحية إضافية يتم تعيينها من قبل الناشرين لوصف مجموعات البيانات الخاصة بهم وجعلها قابلة للبحث، مما يسمح لزوار الموقع بالعثور على مجموعات البيانات عن طريق كتابة أسماء العلامات في مربع البحث.\nعلى سبيل المثال مواليد 2019، الناتج المحلي الإجمالي 2019، مؤشر أسعار المستهلكين 2018.',
          part110:
            'يتم تخصيص المواضيع من قبل الناشرين من قوائم محددة ومعرفة مسبقًا لتنظيم مجموعات البيانات عند إنشاء مجموعة بيانات. المواضيع تضيف جانبا إضافيا لصفحة البحث/ مجموعات البيانات. وهناك مبدئياً ثمانية (8) موضوعات محددة مسبقًا في البوابة من قبيل الاقتصاد، والتعليم، والبيئة، والصحة، والبنية التحتية، والمجتمع، والتكنولوجيا والنقل.',
          part111: 'كيف يمكنني العثور على مجموعة بيانات؟',
          part112:
            'في الصفحة الرئيسية، يمكنك البحث عن مجموعات البيانات عن طريق كتابة الكلمات المفتاحية في مربع البحث، حيث تتضمن الكلمات الرئيسية مجموعة البيانات، والمصدر، والعنوان، والوصف، والكلمة المفتاحية، والموضوع، والناشر، وصيغة الملف.',
          part113: 'شروط وأحكام استخدام منصة "أبو ظبي للبيانات المفتوحة":',
          part114:
            'جميع البيانات المتاحة في منصة أبو ظبي للبيانات المفتوحة هي خدمات بيانات مفتوحة (عامة) وبالتالي يتم نشرها على أساس "كما هي". كما تسعى هيئة أبو ظبي الرقمية لضمان دقة جميع البيانات المنشورة، لا تقدم المنصة أي ضمان ولا يتحمل أية مسؤولية فيما يتعلق بالمحتوى أو الدقة أو التوقيت المناسب أو الاكتمال لأي غرض أو استخدام محدد. لا تتحمل الهيئة أو البيانات المتوفرة أية مسؤولية عن:',
          part115:
            'الجهة المالكة للبيانات هي الجهة المسؤولة عن دقتها لذلك هيئة أبوظبي الرقمية لا تتحمل أية أخطاء ناجمة عن عدم دقة في البيانات المقدمة على منصة أبو ظبي للبيانات المفتوحة بغض النظر عن السبب.',
          part116:
            'أي قرار أو إجراء تم اتخاذه أو لم يتم اتخاذه بواسطة أي شخص يستخدم هذه البيانات أو يعتمد عليه.',
          part117:
            ' أي نفقة أو خسارة أو ضرر بما في ذلك، على سبيل المثال لا الحصر، الخسارة أو الضرر غير المباشر أو التبعي، أو أي نفقة أو خسارة أو ضرر من أي نوع ينشأ عن استخدام البيانات عبر البوابة.',
          part118: 'أي عمل آخر محدد في أي إخلاء مسؤولية أو شرط تعويض',
          part119:
            'تحتفظ هيئة أبو ظبي الرقمية بالحق في إيقاف إتاحة المحتوى على المنصة في أي وقت ولأي سبب كان. في حال نشر أي مجموعة بيانات أو جزء منها على منصة البيانات المفتوحة بشكل غير دقيق أو مضلل، فسوف يقوم فريق عمل منصة أبوظبي للبيانات المفتوحة بتصحيح هذه البيانات أو إزالتها من المنصة دون إشعار مسبق. لن تكون الهيئة مسؤولة عن أي خسارة أو ضرر من أي نوع تتكبده فيما يتعلق باستخدامك مجموعات البيانات. كما أنه لن تكون الهيئة مسؤولاً عن دقة أو فائدة أو توفر أي بيانات في مجموعات البيانات.',
          part120:
            'تحتفظ الهيئة بالحق في أي وقت ومن وقت لآخر في تعديل هذا الموقع أو مجموعات البيانات أو أي وسيلة للوصول أو استخدام مجموعات البيانات أو واجهة برمجة التطبيقات، وفقًا لتقديرنا الخاص مع أو بدون سابق إشعار للمستخدمين.',
          part121:
            'يجوز للهيئة، وفقًا لتقديرنا الخاص، تحت أي ظرف من الظروف، لأي سبب أو بدون سبب على الإطلاق وبإشعار مسبق لك أو بدونه، إنهاء وصولك إلى مجموعات البيانات أو أي وسيلة للوصول إلى مجموعات البيانات أو API أو استخدامها.',
          part122:
            'بصفتك مستخدماً للبيانات المتاحة على المنصة لا يجوز الإعلان أو الإشارة ضمنيًا بمشاركة الهيئة ، أو رعاية، أو تمت الموافقة على طريقة أو غرض استخدامك أو إعادة إنتاج مجموعات البيانات. يجوز للهيئة أن تحاكم، إلى أقصى حد يسمح به القانون، أي استخدام لمجموعات البيانات بطريقة تزييف المواد أو تحريفها أو تنتقص منها أو تستخدم بطريقة احتيالية.',
          part123: 'الربط الآني',
          part124: 'حقل عنوان اسمك مطلوب.',
          part125: 'حقل عنوان البريد الإلكتروني الخاص بك مطلوب.',
          part126: 'حقل الموضوع مطلوب.',
          part127: 'حقل الرسالة مطلوب',
          part128: 'ما هو الرمز في الصورة ؟ الحقل مطلوب.',
          part129: 'تطبيقات تحليلية',
          part130: 'آخر المستجدات عن كوفيد-19',
          part131: 'شاشة مراقبة تطور الحالات لفيروس كورونا',
          part132: 'مستكشف المرافق الصحية',
          part133:
            '\nتضم إمارة أبوظبي عدداً من المستشفيات، والعيادات، ومراكز الرعاية الأولية التي تقوم بتزويد الخدمات الصحية والعلاجية، بالإضافة إلى عدد وفير من فروع المستشفيات الدولية. حيث يتيح هذا التطبيق الذي تم تطويره بواسطة دائرة الصحة- أبوظبي تزويد المستخدمين بجميع المعلومات المفتوحة الخاصة بالمرافق الصحية ومجموعة قوية من الأدوات مع عارض مُمكّن جغرافيًا حيث يمكنك البحث عن المرافق حسب الاسم أو النوع أو مناطق إمارة أبوظبي',
          part134: 'طبيب افتراضي لـفيروس كورونا كوفيد-19',
          part135:
            '\nيساعد التطبيق المطور من قبل وزارة الصحة ووقاية المجتمع، على اجراء التقييم الأولي حال التعرض لأي أعراض مشابهة للإصابة بفيروس كورونا ( كوفيد -١٩ ) مع ملاحظة أنه ليس بديلا عن استشارة الطاقم الطبي المختص  \n فإذا كنت تعاني من أعراض طارئة تهدد الحياة اتصل بالرقم ٨٠٠١١١١١',
          part136:
            'لوحة معلومات فيروس كورونا كوفيد-19بواسطة منظمة الصحة العالمية WHO',
          part137:
            '\nتعرض لوحة المعلومات التابعة لمنظمة الصحة العالمية حالة مرض فيروس كورونا والتعدادات اليومية الرسمية لحالات الإصابة والتعافي الوفيات في جميع أنحاء العالم',
          part138: 'مرحبا بك',
          part139:
            '\nفيما يلي بعض الأمثلة على هذه التطبيقات التي تم تطويرها من قبل الشركاء من الجهات الحكومية في مختلف القطاعات لإتاحة المعلومات، التي تسهم في تطوير الخدمات ومشاركة البيانات المفتوحة مع المستفيدين لرفع الوعي بالخدمات المقدمة\nتدعم بوابة البيانات المفتوحة لإمارة أبوظبي التطبيقات التحليلية، التي تعتمد على توفر البيانات في كافة القطاعات، والتي تساعد على تزويد صانعي القرار بالمعلومات اللازمة، ما يمكنهم من اتخاذ قرارات سليمة بالوقت المناسب',
          part140: 'تطور النسيج العمراني لمدينة أبوظبي',
          part141:
            '\nيظهر هذا التطبيق التطور الهائل للنسيج العمراني لجزيرة أبوظبي، والذي نما بخطى سريعة خلال فترة الثلاثين عام الماضية، حيث يوضح هذا التطبيق للمستخدمين التطور والنمو الأفقي للمدينة، والذي تضاعف بحوالي 10 أضعاف حجمها الأصلي منذ عام 1970. وبالتوازي مع ذلك، فقد شهدت أبوظبي نمواً في الاتجاه الرأسي أيضاً، حيث زادت ارتفاعات المباني في المدينة من 8 أمتار لأعلى مبنى في عام 1970 إلى أكثر من 320 م في العام 2018 .\n',
          part142: 'أبوظبي التفاعلية',
          part143:
            '\nشهدت إمارة أبوظبي تطوراً لافتاً على مدار الخمسين عامًا الماضية، حيث تحولت الإمارة من منطقة صحراوية هادئة إلى واحدة من أهم المراكز التجارية والاقتصادية على المستوى الإقليمي والعالمي. وفي الوقت الحالي، تسعى إمارة أبوظبي لتكريس مكانتها الريادية من خلال تبني وإطلاق العديد من المشاريع التنموية الكبرى التي تهدف إلى بناء اقتصاد المعرفة، وذلك وفقا لرؤية أبوظبي الاقتصادية لعام 2030. يوضح التطبيق قصة هذا التطور من خلال استعراض مجموعة من الخرائط التفاعلية لتحليل بيانات التخطيط العمراني والمرافق المجتمعية مثل المدراس ودور العبادة، ووسائل المواصلات العامة الحالية والمستقبلية بالإمارة',
          part144: 'شبكة رادار المركز الوطني للأرصاد الجوية',
          part145:
            '\nمرحبًا بكم في شبكة رادار المركز الوطني للأرصاد الجوية حيث يمكنك العثور على جميع المعلومات المطلوبة حول التبادل الإقليمي لبيانات الطقس',
          part146: 'البحَّار',
          part147:
            '\nيعرض التطبيق خدمات الأرصاد البحرية من المركز الوطني للأرصاد‎ مثل حالة البحر، التحذيرات‎ ،الرصد البحري ،الرادار و الأقمار ، الأعاصير المدارية والنشرة البحرية',
          part148: 'لوحة البيانات المفتوحة',
          part149:
            '\nتقدم لوحة البيانات المفتوحة الرقمية الجديدة، المنصة الرقمية الأولى من نوعها ملخصاً لأبرز الإحصائيات الصحية ونظرة شاملة حول قطاع الرعاية الصحية في أبوظبي بطريقة مرئية ومميزة، حيث يمكن للمستخدمين التفاعل مع اللوحة بعدة طرق بما في ذلك تخصيص البحث عبر "الفلاتر" التفاعلية المتوفرة، والتي تمكن المستخدم من استعراض بيانات ضمن فترة زمنية محددة، وكذلك إمكانية استعراض التوجهات والتغييرات المتعلقة بنظام الرعاية الصحية في أبوظبي. بالإضافة إلى ذلك، يمكن للمستخدم مقارنة إحصائيات محلية مختارة مع الأرقام العالمية ضمن العنصر نفسه.',
          part150: 'درب',
          part151:
            '\nدرب هو تطبيق إلكتروني يحتوي على خرائط تفاعلية توفِّر لك كل المعلومات التي تحتاجها لتحديد مسار رحلتك واتجاهات وإرشادات القيادة، سواء كانت عن طريق البر أو البحر أو الجو في جميع أنحاء إمارة أبوظبي',
          part152: 'مستكشف المرافق الإسلامية',
          part153:
            '\nيساعد التطبيق على اكتشاف المرافق الإسلامية في إمارة أبوظبي من خلال توفير مجموعة من الأدوات مع عارض مُمكّن جغرافيًا حيث يمكن للمستخدم البحث عن المرافق حسب الاسم والنوع والخدمات المقدمة. كما يدعم التطبيق تقديم المساعدة من خلال المساعد الالكتروني الافتراضي Chatbot حيث يمكنك الدردشة مع الروبوت والحصول على إجابات على استفساراتك.',
          part154: 'بوصلة المستثمر',
          part155:
            '\nمنصة الكترونية تفاعلية تقدم قاعدة بيانات متكاملة وخدمات رقمية ذكية بشأن قطاع الاعمال في إمارة أبوظبي بما يعزز من تنافسية الإمارة إقليميا ودوليا في سهولة ممارسة الاعمال وذلك باعتبارها أداة أو وسيلة هامة تساعد المستثمرين ورجال الاعمال على دراسة جدوى المشاريع واتخاذ القرارات الصائبة وتشجيعهم وتحفيزهم لتأسيس وبدء أعمالهم الاستثمارية من أبوظبي مدعومين ببيانات لحظية لمواقع المنشآت الاقتصادية والأنشطة التجارية والصناعية والمهنية ، ومعلومات التواصل للمنشآت المسجلة، وبيانات تقريبية لمتوسط عقود الإيجار للأعمال وعرض منتجات صنع في أبوظبي)',
          part156: 'البنية التحتية للبيانات المكانية في أبوظبي',
          part157:
            '\nملتزمون بتشجيع، تسهيل، تنسيق، ودعم تطوير بيئة عمل مرنة تساعد على التمكين المكاني و ذلك لتحقيق تطلعات الحكومة و احتياجات المجتمع نحو أبوظبي ناضجة مكانيا\n\nتعد البنية التحتية للبيانات المكانية في أبوظبي البرنامج ا لحكومي الذي يتم إدارته في إطار برنامج حكومة أبوظبي الرقمية لهيئة أبوظبي الرقمية والذي يهدف لتسهيل تبادل البيانات المكانية بين الجهات الأعضاء، والعمل على رفع النضج الجيومكاني للإمارة',
          part158: 'التطبيقات',
        },
      },
    },
  })

export default i18n
