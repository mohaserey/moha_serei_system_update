let currentLang = 'km';
  let activeArchTab = 'layers8';
  let activeCodeTab = 'html';

  const i18n = {
    km: {
      nav_subtitle: 'ប្រព័ន្ធគ្រប់គ្រងទិន្នន័យមហាសិរី MSN (2026–2052)',
      nav_charter: 'ធម្មនុញ្ញ & រដ្ឋធម្មនុញ្ញ',
      nav_ues: 'ម៉ាស៊ីនគណនា UES & HCV',
      nav_coin: 'MSN Coin & ភាគលាភ',
      nav_arch: 'ស្ថាបត្យកម្ម ៨ ស្រទាប់',
      nav_gov: 'អភិបាលកិច្ច & សវនកម្ម',
      nav_roadmap: 'ផែនទី 2026–2052',
      hero_author: 'រៀបចំដោយ៖ ឯកឧត្តម មេណ្ឌ មុនី (H.E. Mend Mony) — អគ្គស្ថាបនិក និងជាប្រធានក្រុមប្រឹក្សាភិបាល',
      hero_kicker: 'ឯកសារស្ថាបនាប្រព័ន្ធគ្រប់គ្រងទិន្នន័យមហាសិរី MSN',
      hero_title: 'Moha Serey Enterprise System Update (2026–2052)',
      hero_desc: 'ប្រព័ន្ធសេដ្ឋកិច្ចឌីជីថលផ្អែកលើការចូលរួម (Participation-Based Economic Ecosystem) ដែលបម្លែងរាល់សកម្មភាពរបស់មនុស្ស ធុរកិច្ច ចំណេះដឹង បណ្តាញ និងសង្គម ទៅជាតម្លៃសេដ្ឋកិច្ចពិតប្រាកដ ក្រោមអភិបាលកិច្ចស្ថាប័ន តម្លាភាព និងសវនកម្ម ១០០%។',
      prin_1_tag: 'គោលការណ៍ទី ១',
      prin_1_title: 'មនុស្សគ្រប់រូបមានតម្លៃសេដ្ឋកិច្ច',
      prin_1_desc: 'សិស្ស កសិករ កម្មករ អាជីវករ អ្នកជំនាញ សុទ្ធតែអាចក្លាយជាម្ចាស់ទ្រព្យសកម្ម។',
      prin_2_tag: 'គោលការណ៍ទី ២',
      prin_2_title: 'MSN មិនលក់ការងារ',
      prin_2_desc: 'បង្កើតឱកាសកសាងតម្លៃ បណ្តាញ ទ្រព្យសកម្ម និងកម្មសិទ្ធិសេដ្ឋកិច្ចរួម។',
      prin_3_tag: 'គោលការណ៍ទី ៣',
      prin_3_title: 'ការចូលរួមទាំងអស់មានតម្លៃ',
      prin_3_desc: 'ទិញ លក់ សន្សំ វិនិយោគ បង្រៀន រៀន ស្ម័គ្រចិត្ត ត្រូវបម្លែងជា UES។',
      cta_simulator: 'សាកល្បងគណនា UES & Human Capital',
      cta_blueprint: 'មើលស្ថាបត្យកម្ម ៨ ស្រទាប់ (MSN-EAB-001)',
      kpi_panel_title: 'ទិសដៅយុទ្ធសាស្ត្រជាតិ MSN ឆ្នាំ ២០៥២',
      kpi_members: 'សមាជិកសរុប (Members)',
      kpi_members_sub: 'គ្របដណ្តប់ទូទាំងប្រទេស',
      kpi_partners: 'ដៃគូអាជីវកម្ម (Partners)',
      kpi_partners_sub: 'ហាង កសិករ រោងចក្រ SMEs',
      kpi_layers: 'ស្រទាប់ស្ថាបត្យកម្ម',
      kpi_hierarchy: 'ឋានានុក្រមឯកសារកំពូល',
      sim_heading: 'ម៉ាស៊ីនគណនាតម្លៃសេដ្ឋកិច្ចសកល (UES) និងមូលធនមនុស្ស (HCV)',
      sim_sub: 'កែតម្រូវសកម្មភាពចូលរួមទាំង ៥ ប្រភេទខាងក្រោម ដើម្បីមើលការគណនាពិន្ទុស្វ័យប្រវត្តិ តំណែងដឹកនាំ (Career Rank) កម្រិតអត្ថប្រយោជន៍ និងចំណែកកម្មសិទ្ធិសេដ្ឋកិច្ចរបស់សមាជិក។',
      cat_fin: '១. ហិរញ្ញធន & ធនអាជីវកម្ម (Financial & Business Activity)',
      lbl_savings: 'ប្រាក់សន្សំ ($1 = 1 pt)',
      lbl_purchase: 'ការទិញទំនិញ ($1 = 1 pt)',
      lbl_revenue: 'ការលក់/អាជីវកម្ម ($1 = 2 pts)',
      lbl_invest: 'ការវិនិយោគ ($1 = 3 pts)',
      cat_know: '២. ធនចំណេះដឹង (Knowledge & MSN Academy)',
      lbl_train: 'រៀនវគ្គបណ្តុះបណ្តាល (20pts/hr)',
      lbl_teach: 'បង្រៀន/ណែនាំ (30pts/hr)',
      lbl_content: 'បង្កើតមាតិកាចំណេះដឹង (50pts)',
      cat_netsoc: '៣. ធនបណ្តាញ & ធនសង្គម (Network & Social Capital)',
      lbl_newmem: 'ណែនាំសមាជិកថ្មី (100pts/នាក់)',
      lbl_actmem: 'សមាជិកសកម្មក្នុងក្រុម (50pts/នាក់)',
      lbl_leadact: 'ដឹកនាំសកម្មភាព/គម្រោង (200pts)',
      lbl_csr: 'ការងារស្ម័គ្រចិត្ត & CSR (100pts)',
      passport_title: 'លិខិតឆ្លងដែនសេដ្ឋកិច្ចសមាជិក',
      ues_total_lbl: 'ពិន្ទុសេដ្ឋកិច្ចសកល (Universal Economic Score)',
      rank_lbl: 'តំណែងស្វ័យប្រវត្តិ៖',
      next_rank_lbl: 'វឌ្ឍនភាពទៅកាន់តំណែងបន្ទាប់៖',
      hcv_lbl: 'តម្លៃមូលធនមនុស្ស (HCV)',
      reward_share_lbl: 'ចំណែកភាគលាភប៉ាន់ស្មាន',
      reward_pool_note: 'ពី Reward Pool $100,000',
      benefits_unlocked_lbl: 'សិទ្ធិ និងអត្ថប្រយោជន៍ដែលទទួលបាន (MSN-BEN-001):',
      coin_heading: 'ម៉ាស៊ីនគណនាតម្លៃកាក់ MSN ថាមវន្ត និងការបែងចែកផលចំណេញ',
      coin_sub: 'តម្លៃកាក់ MSN មិនកំណត់ដោយបុគ្គលឬ Admin ទេ ប៉ុន្តែគណនាដោយស្វ័យប្រវត្តិពីទ្រព្យសកម្មបម្រុងពិតប្រាកដ ÷ ចំនួនកាក់ផ្គត់ផ្គង់សរុប។',
      coin_calc_title: 'ការគណនាតម្លៃ MSN Coin ផ្ទាល់ (Real-Time Valuation)',
      lbl_asset_res: 'ទ្រព្យសកម្មបម្រុង (Asset Reserve)',
      lbl_cash_res: 'សាច់ប្រាក់បម្រុង (Cash Reserve)',
      lbl_inv_res: 'មូលនិធិវិនិយោគបម្រុង (Investment Reserve)',
      lbl_coin_supply: 'ការផ្គត់ផ្គង់កាក់សរុប (Total Coin Supply)',
      coin_price_lbl: 'តម្លៃ 1 MSN Coin បច្ចុប្បន្ន',
      total_res_lbl: 'ទ្រព្យបម្រុងសរុប៖',
      alloc_title: 'គោលនយោបាយបែងចែកប្រាក់ចំណេញសុទ្ធ (Value Allocation)',
      alloc_desc: 'រាល់ប្រាក់ចំណេញសុទ្ធដែលប្រព័ន្ធបង្កើតបាន ត្រូវបានបែងចែកដោយស្វ័យប្រវត្តិតាមរូបមន្តតម្លាភាព ៦ ចំណែក៖',
      alloc_1: 'មូលនិធិពង្រីកអាជីវកម្ម',
      alloc_2: 'មូលនិធិចែកជូនសមាជិក',
      alloc_3: 'មូលនិធិបម្រុងយុទ្ធសាស្ត្រ',
      alloc_4: 'មូលនិធិបច្ចេកវិទ្យា',
      alloc_5: 'មូលនិធិអភិវឌ្ឍធនធានមនុស្ស',
      alloc_6: 'មូលនិធិអភិវឌ្ឍសហគមន៍',
      sec_agri: 'កសិកម្ម & កសិ-ឧស្សាហកម្ម',
      sec_ret: 'ពាណិជ្ជកម្ម & ដឹកជញ្ជូន',
      sec_mfg: 'ផលិតកម្ម & កែច្នៃ',
      sec_tech: 'បច្ចេកវិទ្យា & FinTech',
      sec_re: 'អចលនទ្រព្យ & ថាមពលបៃតង',
      arch_heading: 'ស្ថាបត្យកម្មសហគ្រាស ៨ ស្រទាប់ និងប្រព័ន្ធកម្មវិធីកំពូល',
      arch_sub: 'គ្មាន Module ណាមួយត្រូវបានអនុញ្ញាតឱ្យអភិវឌ្ឍ ឬដាក់ឱ្យប្រើប្រាស់ឡើយ ប្រសិនបើមិនស្របតាម MSN Enterprise Blueprint និង MSN Master Charter។',
      tab_8layers: 'ស្ថាបត្យកម្ម ៨ ស្រទាប់ (8 Enterprise Layers)',
      tab_superapp: 'MSN Super App & 6 Application Tiers',
      tab_hierarchy: 'ឋានានុក្រមឯកសារកំពូល ១០ កម្រិត',
      gov_heading: 'អភិបាលកិច្ចថ្នាក់ជាតិ ប្រព័ន្ធតំណាង ៨ កម្រិត និងសវនកម្ម ៥ ស្រទាប់',
      gov_sub: 'MSN ត្រូវគ្រប់គ្រងដោយប្រព័ន្ធ អភិបាលកិច្ច និងគោលការណ៍ មិនមែនពឹងផ្អែកលើបុគ្គលណាម្នាក់ឡើយ ជាមួយវិធាន Zero Tolerance ចំពោះការក្លែងបន្លំ និងទំនាស់ផលប្រយោជន៍។',
      rep_title: 'រចនាសម្ព័ន្ធតំណាងពីមូលដ្ឋានដល់ថ្នាក់ជាតិ (MSN-GOV-002)',
      bodies_title: 'ស្ថាប័នអភិបាលកិច្ចកំពូលទាំង ៨ (MSN-GOV-001)',
      control_title: 'ប្រព័ន្ធត្រួតពិនិត្យផ្ទៃក្នុង និងសវនកម្ម ៥ ស្រទាប់ (MSN-CONTROL-001)',
      ctrl_1: 'សមាជិក',
      ctrl_2: 'អ្នកគ្រប់គ្រង',
      ctrl_3: 'Software & AI',
      ctrl_4: 'សវនកម្មផ្ទៃក្នុង',
      ctrl_5: 'សវនកម្មឯករាជ្យ',
      road_heading: 'ផែនទីបង្ហាញផ្លូវយុទ្ធសាស្ត្រ ៥ ដំណាក់កាល (២០២៦ – ២០៥២)',
      road_sub: 'ដំណើរវិវត្តន៍ជាប្រព័ន្ធពីការកសាងគ្រឹះស្ថាប័ន រហូតដល់ប្រព័ន្ធអេកូឡូស៊ីសេដ្ឋកិច្ចឌីជីថលថ្នាក់ជាតិដែលមានសមាជិកជាង ១០ លាននាក់។',
      footer_quote: '«មនុស្សគ្រប់រូបមានតម្លៃ។ រាល់ការចូលរួមមានតម្លៃ។» — រៀបចំដោយ ឯកឧត្តម មេណ្ឌ មុនី',
    },
    en: {
      nav_subtitle: 'Moha Serey Enterprise System (2026–2052)',
      nav_charter: 'Charter & Constitution',
      nav_ues: 'UES & HCV Engine',
      nav_coin: 'MSN Coin & Profit Split',
      nav_arch: '8-Layer Architecture',
      nav_gov: 'Governance & Audit',
      nav_roadmap: '2026–2052 Roadmap',
      hero_author: 'Prepared by: H.E. Mend Mony — Founder & Chairman of the Board of Directors',
      hero_kicker: 'MOHASEREI NETWORK (MSN) ENTERPRISE SYSTEM SPECIFICATION',
      hero_title: 'Moha Serey Enterprise System Update (2026–2052)',
      hero_desc: 'A Participation-Based Digital Economic Ecosystem converting human, business, knowledge, network, and social contributions into verifiable economic ownership under 100% institutional governance, transparency, and auditability.',
      prin_1_tag: 'PRINCIPLE 01',
      prin_1_title: 'Every Person Has Economic Value',
      prin_1_desc: 'Students, farmers, workers, merchants, and specialists can all become asset owners.',
      prin_2_tag: 'PRINCIPLE 02',
      prin_2_title: 'MSN Does Not Sell Jobs',
      prin_2_desc: 'Creates opportunities to build value, networks, assets, and shared economic ownership.',
      prin_3_tag: 'PRINCIPLE 03',
      prin_3_title: 'All Participation Has Value',
      prin_3_desc: 'Buying, selling, saving, investing, teaching, learning, and volunteering convert into UES.',
      cta_simulator: 'Simulate UES & Human Capital',
      cta_blueprint: 'Explore 8-Layer Blueprint (MSN-EAB-001)',
      kpi_panel_title: 'MSN National Strategic Targets by 2052',
      kpi_members: 'Total Members',
      kpi_members_sub: 'Nationwide Coverage',
      kpi_partners: 'Business Partners',
      kpi_partners_sub: 'Merchants, Farmers, SMEs',
      kpi_layers: 'Architecture Layers',
      kpi_hierarchy: 'Supreme Doc Hierarchy',
      sim_heading: 'Universal Economic Score (UES) & Human Capital Value (HCV) Simulator',
      sim_sub: 'Adjust the 5 participation capitals below to compute real-time UES, automatic Career Rank promotion, unlocked Benefits Tier, and cooperative reward share.',
      cat_fin: '1. Financial & Business Capital Activity',
      lbl_savings: 'Savings ($1 = 1 pt)',
      lbl_purchase: 'Purchases ($1 = 1 pt)',
      lbl_revenue: 'Sales / Business ($1 = 2 pts)',
      lbl_invest: 'Investment ($1 = 3 pts)',
      cat_know: '2. Knowledge Capital & MSN Academy',
      lbl_train: 'Training Attendance (20pts/hr)',
      lbl_teach: 'Teaching / Mentoring (30pts/hr)',
      lbl_content: 'Knowledge Content Creation (50pts)',
      cat_netsoc: '3. Network & Social Capital Activity',
      lbl_newmem: 'New Member Referral (100pts)',
      lbl_actmem: 'Active Team Members (50pts)',
      lbl_leadact: 'Lead Project / Activity (200pts)',
      lbl_csr: 'Volunteering & CSR Projects (100pts)',
      passport_title: 'Member Digital Economic Passport',
      ues_total_lbl: 'Universal Economic Score (UES)',
      rank_lbl: 'Automatic Rank:',
      next_rank_lbl: 'Progress to Next Rank:',
      hcv_lbl: 'Human Capital Value (HCV)',
      reward_share_lbl: 'Est. Reward Pool Share',
      reward_pool_note: 'From $100,000 Pool',
      benefits_unlocked_lbl: 'Unlocked Membership Benefits (MSN-BEN-001):',
      coin_heading: 'Dynamic MSN Coin Valuation & Net Value Allocation Engine',
      coin_sub: 'MSN Coin value is never fixed by an individual or Admin; it is algorithmically backed by verified Asset, Cash, and Investment Reserves divided by Total Coin Supply.',
      coin_calc_title: 'Real-Time MSN Coin Valuation Calculator',
      lbl_asset_res: 'Asset Reserve',
      lbl_cash_res: 'Cash Reserve',
      lbl_inv_res: 'Investment Reserve',
      lbl_coin_supply: 'Total Coin Supply',
      coin_price_lbl: 'Current 1 MSN Coin Valuation',
      total_res_lbl: 'Total Backing Reserves:',
      alloc_title: 'Net Value Allocation Policy (100% Net Profit)',
      alloc_desc: 'All net value generated by the ecosystem is automatically allocated across 6 transparent funds:',
      alloc_1: 'Business Expansion Fund',
      alloc_2: 'Member Distribution Fund',
      alloc_3: 'Strategic Reserve Fund',
      alloc_4: 'Technology Fund',
      alloc_5: 'Human Capital Fund',
      alloc_6: 'Community Development Fund',
      sec_agri: 'Agriculture & Agro-Industry',
      sec_ret: 'Commerce & Logistics',
      sec_mfg: 'Manufacturing & Processing',
      sec_tech: 'Technology & FinTech',
      sec_re: 'Real Estate & Green Energy',
      arch_heading: '8-Layer Enterprise Architecture & Master System Blueprint',
      arch_sub: 'No software module may be developed, procured, or deployed unless strictly compliant with MSN Enterprise Blueprint (MSN-EAB-001) and MSN Master Charter.',
      tab_8layers: '8 Enterprise Layers (MSN-EAB-001)',
      tab_superapp: 'MSN Super App & 6 Application Tiers',
      tab_hierarchy: '10-Level Supreme Document Hierarchy',
      gov_heading: 'National Governance, 8-Level Representation & 5-Layer Audit Control',
      gov_sub: 'MSN is governed by institutional systems and rules rather than individuals, enforced by Zero Tolerance policies against fraud and conflicts of interest.',
      rep_title: 'Grassroots-to-National Representative Ladder (MSN-GOV-002)',
      bodies_title: '8 Supreme Governance Bodies (MSN-GOV-001)',
      control_title: '5-Layer Internal Control & Audit Framework (MSN-CONTROL-001)',
      ctrl_1: 'Self Control',
      ctrl_2: 'Management',
      ctrl_3: 'Software & AI',
      ctrl_4: 'Internal Audit',
      ctrl_5: 'Independent Audit',
      road_heading: '5-Phase Strategic Roadmap (2026 – 2052)',
      road_sub: 'Systematic evolution from institutional foundation to a nationwide digital cooperative economic infrastructure exceeding 10,000,000 members.',
      footer_quote: '"Every person has value. Every participation has value." — Prepared by H.E. Mend Mony',
      footer_export: 'Export Separate Files (index.html, style.css, script.js)',
      modal_title: 'Separate Project Source Files',
      modal_sub: 'Copy or download each standalone file for your repository'
    }
  };

  const ranksData = [
    { min: 0, name: 'Member', km: 'សមាជិក (Member)', tier: 'BRONZE TIER', benefitsKm: ['កាបូបឌីជីថល E-Wallet', 'កំណត់ត្រា Economic Passport'], benefitsEn: ['Digital E-Wallet Access', 'Economic Passport Ledger'] },
    { min: 1000, name: 'Associate', km: 'សមាជិកប្រតិបត្តិ (Associate)', tier: 'SILVER TIER', benefitsKm: ['កាបូបឌីជីថល E-Wallet', 'ប្រាក់រង្វាន់ & ចំណែកភាគលាភ', 'សិទ្ធិចូលរៀន MSN Academy'], benefitsEn: ['Digital E-Wallet', 'Rewards & Profit Sharing', 'MSN Academy Training Access'] },
    { min: 10000, name: 'Coordinator', km: 'អ្នកសម្របសម្រួល (Coordinator)', tier: 'GOLD TIER', benefitsKm: ['អត្ថប្រយោជន៍ Silver ទាំងអស់', 'សិទ្ធិចូលរួមគម្រោងវិនិយោគ', 'កម្មវិធីអភិវឌ្ឍភាពជាអ្នកដឹកនាំ'], benefitsEn: ['All Silver Benefits', 'Investment Exchange Access', 'Leadership Development Program'] },
    { min: 50000, name: 'Supervisor', km: 'អ្នកត្រួតពិនិត្យ (Supervisor)', tier: 'GOLD TIER', benefitsKm: ['អត្ថប្រយោជន៍ Gold ទាំងអស់', 'សិទ្ធិដឹកនាំក្រុមមូលដ្ឋាន', 'ប្រាក់រង្វាន់ភាពជាអ្នកដឹកនាំ'], benefitsEn: ['All Gold Benefits', 'Local Team Governance Rights', 'Leadership Performance Bonus'] },
    { min: 150000, name: 'Manager', km: 'ប្រធានគ្រប់គ្រង (Manager)', tier: 'PLATINUM TIER', benefitsKm: ['កម្មវិធីថ្នាក់ដឹកនាំប្រតិបត្តិ (Executive)', 'អាទិភាពភាពជាដៃគូអាជីវកម្ម', 'សិទ្ធិបោះឆ្នោតគណៈកម្មាធិការ'], benefitsEn: ['Executive Leadership Program', 'Business Partnership Priority', 'Committee Voting Rights'] },
    { min: 500000, name: 'Director', km: 'នាយកប្រតិបត្តិ (Director)', tier: 'PLATINUM TIER', benefitsKm: ['អត្ថប្រយោជន៍ Platinum ទាំងអស់', 'សិទ្ធិគ្រប់គ្រងមូលនិធិវិនិយោគតំបន់'], benefitsEn: ['All Platinum Benefits', 'Regional Investment Oversight'] },
    { min: 2000000, name: 'Provincial Director', km: 'នាយកខេត្ត (Provincial Director)', tier: 'DIAMOND TIER', benefitsKm: ['សិទ្ធិអភិបាលកិច្ចថ្នាក់ខេត្ត/ជាតិ', 'កម្មវិធីផ្ទេរមរតកទ្រព្យសម្បត្តិ ECO-003'], benefitsEn: ['Provincial & National Governance Rights', 'Generational Wealth Transfer (ECO-003)'] },
    { min: 5000000, name: 'Regional Director', km: 'នាយកតំបន់ (Regional Director)', tier: 'DIAMOND TIER', benefitsKm: ['សមាជិកក្រុមប្រឹក្សាតំណាងតំបន់', 'សិទ្ធិអនុម័តគម្រោងយុទ្ធសាស្ត្រ'], benefitsEn: ['Regional Representative Council Seat', 'Strategic Project Approval Rights'] },
    { min: 20000000, name: 'National Director', km: 'នាយកថ្នាក់ជាតិ (National Director)', tier: 'DIAMOND TIER', benefitsKm: ['សភាតំណាងសមាជិកជាតិកំពូល', 'សិទ្ធិអភិបាលកិច្ចកំពូល MSN-GOV-001'], benefitsEn: ['Supreme National Member Assembly', 'Top-Level Governance Rights (MSN-GOV-001)'] }
  ];

  function recalculateEcosystem() {
    const savings = Number(document.getElementById('in_savings').value);
    const purchase = Number(document.getElementById('in_purchase').value);
    const revenue = Number(document.getElementById('in_revenue').value);
    const invest = Number(document.getElementById('in_invest').value);

    const train = Number(document.getElementById('in_train').value);
    const teach = Number(document.getElementById('in_teach').value);
    const content = Number(document.getElementById('in_content').value);

    const newmem = Number(document.getElementById('in_newmem').value);
    const actmem = Number(document.getElementById('in_actmem').value);
    const leadact = Number(document.getElementById('in_leadact').value);
    const csr = Number(document.getElementById('in_csr').value);

    // Update UI value spans
    document.getElementById('val_savings').textContent = savings.toLocaleString();
    document.getElementById('val_purchase').textContent = purchase.toLocaleString();
    document.getElementById('val_revenue').textContent = revenue.toLocaleString();
    document.getElementById('val_invest').textContent = invest.toLocaleString();
    document.getElementById('val_train').textContent = train;
    document.getElementById('val_teach').textContent = teach;
    document.getElementById('val_content').textContent = content;
    document.getElementById('val_newmem').textContent = newmem;
    document.getElementById('val_actmem').textContent = actmem;
    document.getElementById('val_leadact').textContent = leadact;
    document.getElementById('val_csr').textContent = csr;

    // Calculate Component Scores per MSN-ENG-001
    const finScore = (savings * 1) + (purchase * 1) + (invest * 3);
    const busScore = (revenue * 2);
    const knowScore = (train * 20) + (teach * 30) + (content * 50);
    const netScore = (newmem * 100) + (actmem * 50);
    const leadScore = (leadact * 200);
    const socScore = (csr * 100);

    const uesTotal = finScore + busScore + knowScore + netScore + leadScore + socScore;
    const hcvScore = Math.round((finScore * 0.25) + (busScore * 0.25) + (knowScore * 0.20) + ((netScore + leadScore) * 0.20) + (socScore * 0.10));

    document.getElementById('finPointsBadge').textContent = (finScore + busScore).toLocaleString() + ' pts';
    document.getElementById('knowPointsBadge').textContent = knowScore.toLocaleString() + ' pts';
    document.getElementById('netSocPointsBadge').textContent = (netScore + leadScore + socScore).toLocaleString() + ' pts';

    document.getElementById('uesTotalDisplay').textContent = uesTotal.toLocaleString();
    document.getElementById('hcvScoreDisplay').textContent = hcvScore.toLocaleString();

    // Determine Current & Next Rank
    let currentRank = ranksData[0];
    let nextRank = ranksData[1];
    for (let i = 0; i < ranksData.length; i++) {
      if (uesTotal >= ranksData[i].min) {
        currentRank = ranksData[i];
        nextRank = ranksData[i + 1] || null;
      }
    }

    document.getElementById('careerRankDisplay').textContent = currentLang === 'km' ? currentRank.km : currentRank.name;
    document.getElementById('benefitTierBadge').textContent = currentRank.tier;

    if (nextRank) {
      const pct = Math.min(100, Math.max(5, Math.round(((uesTotal - currentRank.min) / (nextRank.min - currentRank.min)) * 100)));
      document.getElementById('rankProgressBar').style.width = pct + '%';
      document.getElementById('nextRankTargetText').textContent = `${nextRank.min.toLocaleString()} pts (${nextRank.name})`;
    } else {
      document.getElementById('rankProgressBar').style.width = '100%';
      document.getElementById('nextRankTargetText').textContent = 'MAX RANK ACHIEVED';
    }

    // Estimated Reward Pool Share (Assuming Network Total UES = 10,000,000 & Pool = $100,000)
    const estShare = (uesTotal / 10000000) * 100000;
    document.getElementById('rewardShareDisplay').textContent = '$' + estShare.toFixed(2);

    // Benefits List
    const benefitsArr = currentLang === 'km' ? currentRank.benefitsKm : currentRank.benefitsEn;
    document.getElementById('unlockedBenefitsList').innerHTML = benefitsArr.map(b =>
      `<li class="flex items-center gap-2"><span class="text-emerald-400">✓</span><span>${b}</span></li>`
    ).join('');
  }

  function recalculateCoin() {
    const assetRes = Number(document.getElementById('in_asset_res').value);
    const cashRes = Number(document.getElementById('in_cash_res').value);
    const invRes = Number(document.getElementById('in_inv_res').value);
    const supply = Number(document.getElementById('in_coin_supply').value);

    document.getElementById('val_asset_res').textContent = assetRes.toLocaleString();
    document.getElementById('val_cash_res').textContent = cashRes.toLocaleString();
    document.getElementById('val_inv_res').textContent = invRes.toLocaleString();
    document.getElementById('val_coin_supply').textContent = supply.toLocaleString();

    const totalRes = assetRes + cashRes + invRes;
    const coinPrice = totalRes / supply;

    document.getElementById('totalReserveDisplay').textContent = '$' + totalRes.toLocaleString();
    document.getElementById('coinPriceDisplay').textContent = '$' + coinPrice.toFixed(4);
  }

  function renderArchTab() {
    const container = document.getElementById('archTabContent');
    if (activeArchTab === 'layers8') {
      const layers = [
        { num: 'Layer 1', titleKm: 'ស្ថាបត្យកម្មអភិបាលកិច្ច (Governance Architecture)', titleEn: 'Layer 1: Governance Architecture', desc: 'MSN-GOV-001..007, Board Charter, Ethics Charter, Audit & Compliance' },
        { num: 'Layer 2', titleKm: 'ស្ថាបត្យកម្មសេដ្ឋកិច្ច (Economic Architecture)', titleEn: 'Layer 2: Economic Architecture', desc: 'ENG-001..006, Universal Economic Score (UES), Ownership & Reward Engine' },
        { num: 'Layer 3', titleKm: 'ស្ថាបត្យកម្មធនធានមនុស្ស (Human Capital Architecture)', titleEn: 'Layer 3: Human Capital Architecture', desc: 'MSN-HCE-001, 5 Capitals Registry, Competency & Leadership Ranking' },
        { num: 'Layer 4', titleKm: 'ស្ថាបត្យកម្មធុរកិច្ច (Business Architecture)', titleEn: 'Layer 4: Business Architecture', desc: 'Marketplace, Merchant, Supplier, Distributor & Franchise Networks' },
        { num: 'Layer 5', titleKm: 'ស្ថាបត្យកម្មវិនិយោគ (Investment Architecture)', titleEn: 'Layer 5: Investment Architecture', desc: 'MSN-INV-003, Screening, Risk Rating (A–D), Portfolio & Asset Valuation' },
        { num: 'Layer 6', titleKm: 'ស្ថាបត្យកម្មថ្នាលឌីជីថល (Digital Platform Architecture)', titleEn: 'Layer 6: Digital Platform Architecture', desc: 'MSN Super App, Multi-Pocket Wallet, MSN Coin Engine, Partner Portals' },
        { num: 'Layer 7', titleKm: 'ស្ថាបត្យកម្មទិន្នន័យ និង AI (Data & AI Architecture)', titleEn: 'Layer 7: Data & AI Architecture', desc: 'Master Data Registry (MDR-001..007), AI Risk, Fraud & Economic Advisor' },
        { num: 'Layer 8', titleKm: 'ស្ថាបត្យកម្មផលប៉ះពាល់ជាតិ (National Impact Architecture)', titleEn: 'Layer 8: National Impact Architecture', desc: 'MSN-NAT-001/002, ESG Sustainability, Jobs, SMEs & Farmers Dashboard' }
      ];
      container.innerHTML = `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">` +
        layers.map(l => `
          <div class="bg-[#0a1120] border border-slate-800 hover:border-amber-400/50 rounded-2xl p-4 transition">
            <span class="text-[11px] font-mono-code text-amber-400 font-bold">${l.num}</span>
            <h4 class="font-bold text-white text-sm mt-1">${currentLang === 'km' ? l.titleKm : l.titleEn}</h4>
            <p class="text-xs text-slate-400 mt-2 leading-relaxed">${l.desc}</p>
          </div>
        `).join('') + `</div>`;
    } else if (activeArchTab === 'superapp') {
      const tiers = [
        { tier: 'TIER 1 • CORE SYSTEMS', items: ['IDM-001 Identity Platform', 'GOV-001 Governance Platform', 'HCM-001 Human Capital', 'ECO-001 Economic Engine', 'WAL-001 Multi-Pocket Wallet', 'COIN-001 Digital Asset'] },
        { tier: 'TIER 2 • BUSINESS SYSTEMS', items: ['MSN Marketplace', 'Merchant & POS Network', 'Supplier & Distributor ERP', 'Franchise & Service CRM'] },
        { tier: 'TIER 3 • FINANCIAL SYSTEMS', items: ['FIN-001 Contribution Engine', 'FIN-002 Profit Sharing', 'FIN-003 Investment Mgmt', 'FIN-004 Asset Mgmt', 'FIN-005 Reserve Fund'] },
        { tier: 'TIER 4 • EDUCATION (MSN ACADEMY)', items: ['EDU-001 MSN Academy', 'EDU-002 LMS Platform', 'EDU-003 Certification', 'EDU-004 Leadership Academy'] },
        { tier: 'TIER 5 • ANALYTICS & AI', items: ['AI-001 Economic Intelligence', 'AI-002 Risk Analytics', 'AI-003 Leadership Analytics', 'AI-004 Investment AI', 'AI-005 National Impact'] },
        { tier: 'TIER 6 • STAKEHOLDER PORTALS', items: ['Government Portal', 'Investor Relations Portal', 'Business Partner Portal', 'University & NGO Portals'] }
      ];
      container.innerHTML = `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">` +
        tiers.map(t => `
          <div class="bg-[#0a1120] border border-slate-800 rounded-2xl p-4">
            <p class="text-xs font-mono-code text-cyan-400 font-bold mb-2.5">${t.tier}</p>
            <ul class="space-y-1.5 text-xs text-slate-300">
              ${t.items.map(i => `<li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span><span>${i}</span></li>`).join('')}
            </ul>
          </div>
        `).join('') + `</div>`;
    } else {
      const hierarchy = [
        '1. MSN-CHARTER-001 : Master Charter (ឯកសារកំពូលបំផុត 2026–2052)',
        '2. MSN-EAB-001 : Enterprise Architecture Blueprint (ស្ថាបត្យកម្មសហគ្រាស ៨ ស្រទាប់)',
        '3. MSN-GOV-001 : Master Governance Framework (ក្របខ័ណ្ឌអភិបាលកិច្ចកំពូល)',
        '4. MSN-HCE-001 : Human Capital Economy Framework (សេដ្ឋកិច្ចមូលធនមនុស្ស)',
        '5. MSN-ECO-001 : Universal Economic Value Framework (តម្លៃសេដ្ឋកិច្ចសកល)',
        '6. MSN-POL-001 : Enterprise Policy Manual (សៀវភៅគោលនយោបាយកំពូល ៥ ជំពូក)',
        '7. MSN-SOP-001 : Enterprise SOP Manual (នីតិវិធីប្រតិបត្តិការស្តង់ដារ ១០ ជំហាន)',
        '8. MSN-DATA-001 & MSN-LEGAL-001 : Master Data, Legal, Risk & AI Frameworks',
        '9. MSN-EAM-001 & MSN-BPM-001 : Enterprise Application Map & Business Processes',
        '10. MSN-CONTROL-001 : Internal Control, Audit & Operational Software Modules'
      ];
      container.innerHTML = `<div class="grid grid-cols-1 md:grid-cols-2 gap-3">` +
        hierarchy.map(h => `
          <div class="bg-[#0a1120] border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium text-slate-200 flex items-center gap-3">
            <span class="w-2 h-2 rounded-full bg-amber-400 shrink-0"></span>
            <span>${h}</span>
          </div>
        `).join('') + `</div>`;
    }
  }

  function switchArchTab(tabId) {
    activeArchTab = tabId;
    ['layers8', 'superapp', 'hierarchy'].forEach(id => {
      const btn = document.getElementById('tab-' + id);
      if (id === tabId) btn.classList.add('tab-btn-active');
      else btn.classList.remove('tab-btn-active');
    });
    renderArchTab();
  }

  function renderGovernanceAndRoadmap() {
    const reps = [
      { lvl: 'L1', km: 'ក្រុមសមាជិក (Team Coordinator)', en: 'Member Team Coordinator', count: '30' },
      { lvl: 'L2', km: 'តំណាងភូមិ / អង្គភាព (Village)', en: 'Village Representative', count: '100' },
      { lvl: 'L3', km: 'តំណាងឃុំ / សង្កាត់ (Commune)', en: 'Commune Representative', count: '500' },
      { lvl: 'L4', km: 'តំណាងស្រុក / ខណ្ឌ (District)', en: 'District Representative', count: '3,000' },
      { lvl: 'L5', km: 'តំណាងក្រុង / ស្រុកធំ (City)', en: 'City Representative', count: '10,000' },
      { lvl: 'L6', km: 'តំណាងខេត្ត (Province)', en: 'Provincial Representative', count: '50,000' },
      { lvl: 'L7', km: 'តំណាងតំបន់ (Region)', en: 'Regional Representative', count: '250,000' },
      { lvl: 'L8', km: 'ក្រុមប្រឹក្សាតំណាងថ្នាក់ជាតិ (National)', en: 'National Representative Council', count: '1,000,000+' }
    ];

    document.getElementById('representationList').innerHTML = reps.map(r => `
      <div class="flex items-center justify-between bg-[#0a1120] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs">
        <div class="flex items-center gap-2.5">
          <span class="px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 font-mono-code font-bold">${r.lvl}</span>
          <span class="text-slate-200 font-medium">${currentLang === 'km' ? r.km : r.en}</span>
        </div>
        <span class="font-mono-code text-emerald-400 font-bold">${r.count}</span>
      </div>
    `).join('');

    const bodies = [
      { km: '១. សភាតំណាងសមាជិកជាតិ', en: '1. National Member Assembly' },
      { km: '២. ក្រុមប្រឹក្សាភិបាល (Board)', en: '2. Board of Directors' },
      { km: '៣. គណៈកម្មាធិការវិនិយោគ', en: '3. Investment Committee' },
      { km: '៤. គណៈកម្មាធិការហិរញ្ញវត្ថុ', en: '4. Finance Committee' },
      { km: '៥. គណៈកម្មាធិការហានិភ័យ', en: '5. Risk Committee' },
      { km: '៦. គណៈកម្មាធិការសវនកម្ម', en: '6. Audit Committee' },
      { km: '៧. គណៈកម្មាធិការក្រមសីលធម៌', en: '7. Ethics Committee' },
      { km: '៨. គណៈគ្រប់គ្រងប្រតិបត្តិការ', en: '8. Executive Management' }
    ];

    document.getElementById('governanceBodiesGrid').innerHTML = bodies.map(b => `
      <div class="bg-[#0a1120] border border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-200 font-medium">
        ${currentLang === 'km' ? b.km : b.en}
      </div>
    `).join('');

    const phases = [
      {
        phase: 'PHASE 1 • 2026–2028',
        titleKm: 'គ្រឹះស្ថាប័ន (Foundation)',
        titleEn: 'Foundation Phase',
        target: '100,000 Members',
        itemsKm: ['អភិបាលកិច្ច & ធម្មនុញ្ញ', 'ថ្នាលបច្ចេកវិទ្យាស្នូល', 'សហគមន៍សាកល្បង (Pilot)', 'Human Capital Database'],
        itemsEn: ['Governance & Charter', 'Core Digital Platform', 'Pilot Communities', 'Human Capital Database']
      },
      {
        phase: 'PHASE 2 • 2028–2032',
        titleKm: 'ការធ្វើឱ្យសកម្ម (Activation)',
        titleEn: 'Activation Phase',
        target: '500,000 Members',
        itemsKm: ['MSN Marketplace', 'ប្រព័ន្ធ E-Wallet & Coin', 'បណ្តាញដៃគូអាជីវកម្ម', 'ពង្រីកតាមបណ្តាខេត្ត'],
        itemsEn: ['MSN Marketplace', 'Wallet & Coin Ecosystem', 'Partner Network', 'Provincial Expansion']
      },
      {
        phase: 'PHASE 3 • 2032–2040',
        titleKm: 'ការពង្រីកវិសាលភាព (Scaling)',
        titleEn: 'Scaling Phase',
        target: '5,000,000 Members',
        itemsKm: ['បណ្តាញចែកចាយជាតិ', 'ទីផ្សារមូលធនមនុស្ស', 'ថ្នាលវិនិយោគជាតិ', 'ថ្នាលទ្រព្យសកម្មឌីជីថល'],
        itemsEn: ['National Distribution', 'Human Capital Market', 'Investment Platform', 'Digital Asset Platform']
      },
      {
        phase: 'PHASE 4 • 2040–2045',
        titleKm: 'អេកូឡូស៊ីជាតិ (Ecosystem)',
        titleEn: 'National Ecosystem',
        target: '8,000,000 Members',
        itemsKm: ['បណ្តាញមូលធនមនុស្សជាតិ', 'បណ្តាញធុរកិច្ចជាតិ', 'បណ្តាញវិនិយោគជាតិ', 'អភិបាលកិច្ច AI (AI Gov)'],
        itemsEn: ['National Human Network', 'National Business Network', 'National Investment Net', 'AI Governance Engine']
      },
      {
        phase: 'PHASE 5 • 2045–2052',
        titleKm: 'ស្ថាប័នជាតិ (Institutional)',
        titleEn: 'Institutionalization',
        target: '10,000,000+ Members',
        itemsKm: ['ហេដ្ឋារចនាសម្ព័ន្ធជាតិ', '780,000+ ដៃគូអាជីវកម្ម', 'ប្រព័ន្ធមរតកជំនាន់ក្រោយ', 'សមាហរណកម្មតំបន់'],
        itemsEn: ['National Infrastructure', '780,000+ Business Partners', 'Intergenerational Wealth', 'Regional Integration']
      }
    ];

    document.getElementById('roadmapCardsGrid').innerHTML = phases.map(p => `
      <div class="msn-glass msn-glass-hover rounded-2xl p-5 flex flex-col justify-between">
        <div>
          <span class="text-[11px] font-mono-code text-amber-400 font-bold">${p.phase}</span>
          <h3 class="font-bold text-white text-base mt-1">${currentLang === 'km' ? p.titleKm : p.titleEn}</h3>
          <div class="mt-2 mb-3 inline-block px-2.5 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-mono-code text-xs font-bold">
            ${p.target}
          </div>
          <ul class="space-y-1.5 text-xs text-slate-300">
            ${(currentLang === 'km' ? p.itemsKm : p.itemsEn).map(item => `<li class="flex items-start gap-1.5"><span class="text-amber-400">•</span><span>${item}</span></li>`).join('')}
          </ul>
        </div>
      </div>
    `).join('');
  }

  function toggleLanguage() {
    currentLang = currentLang === 'km' ? 'en' : 'km';
    document.documentElement.lang = currentLang;
    document.getElementById('langBadgeText').textContent = currentLang === 'km' ? 'English' : 'ភាសាខ្មែរ';

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18n[currentLang][key]) {
        el.textContent = i18n[currentLang][key];
      }
    });

    recalculateEcosystem();
    renderArchTab();
    renderGovernanceAndRoadmap();
  }

  /* ================= SEPARATE FILE EXPORTER LOGIC ================= */
  function getExtractedFiles() {
    const fullDoc = document.documentElement.outerHTML;
    const styleMatch = fullDoc.match(/\/\* ================= STYLE\.CSS ================= \*\/([\s\S]*?)\/\* ================= END STYLE\.CSS ================= \*\//);
    const scriptMatch = fullDoc.match(/\/\* ================= SCRIPT\.JS ================= \*\/([\s\S]*?)\/\* ================= END SCRIPT\.JS ================= \*\//);
    const bodyMatch = fullDoc.match(/<!-- ================= INDEX\.HTML ================= -->([\s\S]*?)<!-- ================= END INDEX\.HTML ================= -->/);

    const cssCode = styleMatch ? styleMatch[1].trim() : '';
    const jsCode = scriptMatch ? scriptMatch[1].trim() : '';
    const htmlBody = bodyMatch ? bodyMatch[1].trim() : '';

    const standaloneHtml = `<!DOCTYPE html>
<html lang="km" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Moha Serey System Update (MSN 2026–2052) | ប្រព័ន្ធគ្រប់គ្រងទិន្នន័យមហាសិរី</title>
  <script src="https://cdn.tailwindcss.com"><\/script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&family=Kantumruy+Pro:wght@300;400;500;600;700&family=Moul&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css" />
</head>
<body class="antialiased selection:bg-amber-400/30 selection:text-amber-200">
${htmlBody}
  <script src="script.js"><\/script>
</body>
</html>`;

    return { html: standaloneHtml, css: cssCode, js: jsCode };
  }

  function openSourceModal() {
    document.getElementById('sourceModal').classList.remove('hidden');
    document.getElementById('sourceModal').classList.add('flex');
    selectCodeFile(activeCodeTab);
  }

  function closeSourceModal() {
    document.getElementById('sourceModal').classList.add('hidden');
    document.getElementById('sourceModal').classList.remove('flex');
  }

  function selectCodeFile(type) {
    activeCodeTab = type;
    ['html', 'css', 'js'].forEach(t => {
      const btn = document.getElementById('codeTab-' + t);
      if (t === type) btn.classList.add('tab-btn-active');
      else btn.classList.remove('tab-btn-active');
    });
    const files = getExtractedFiles();
    document.getElementById('codeViewerBox').textContent = files[type];
  }

  function copySelectedCode() {
    const text = document.getElementById('codeViewerBox').textContent;
    const tempArea = document.createElement('textarea');
    tempArea.value = text;
    document.body.appendChild(tempArea);
    tempArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempArea);

    const btn = document.getElementById('copyCodeBtn');
    const orig = btn.textContent;
    btn.textContent = 'Copied!';
    setTimeout(() => { btn.textContent = orig; }, 1800);
  }

  function downloadSelectedCode() {
    const files = getExtractedFiles();
    const filenameMap = { html: 'index.html', css: 'style.css', js: 'script.js' };
    const mimeMap = { html: 'text/html', css: 'text/css', js: 'application/javascript' };

    const blob = new Blob([files[activeCodeTab]], { type: mimeMap[activeCodeTab] });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filenameMap[activeCodeTab];
    a.click();
    URL.revokeObjectURL(url);
  }

  window.addEventListener('DOMContentLoaded', () => {
    recalculateEcosystem();
    recalculateCoin();
    renderArchTab();
    renderGovernanceAndRoadmap();
  });
