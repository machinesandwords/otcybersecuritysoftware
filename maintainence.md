# MAINTENANCE.md
# otcybersecuritysoftware.com
# Last updated: June 2026

---

## PURPOSE

This file tracks all time-sensitive content on the site — statistics, regulatory deadlines, vendor watch items, and comparison page positions that will need updating as the market evolves. Review every January. Sources publish Q1.

---

## NAV.JS — CURRENT STATE

Current pages in nav:

**Landscape**
- /landscape/ — Market overview
- /landscape/vendors/ — Vendor index
- /landscape/cps-ot-ics-scada/ — Market direction
- /landscape/regulatory-map/ — Regulatory map

**Tools**
- /tools/vendor-comparison/ — Vendor comparison tool
- /tools/rfp-evaluation-kit/ — RFP Evaluation Kit
- /tools/asset-scoping-tool/ — Asset Scoping Decision Tool
- /tools/firewall-vs-diode-tco/ — Firewall vs. Data Diode TCO Calculator
- /tools/ot-soc-scorecard/ — OT SOC Integration Health Scorecard

**Comparisons**
- /comparisons/dragos-vs-claroty/
- /comparisons/nozomi-vs-claroty/
- /comparisons/dragos-vs-nozomi/
- /comparisons/claroty-vs-armis/
- /comparisons/dragos-vs-industrial-defender/
- /comparisons/otorio-vs-claroty/
- /comparisons/verve-vs-claroty/

**Guides**
- /guides/security-platform-evaluation/
- /guides/nis2-nerc-cip-audit-readiness/
- /guides/oem-remote-access/
- /guides/patching-vs-microsegmentation/
- /guides/firewalls-vs-data-diodes/
- /guides/it-ot-soc-integration/
- /guides/ot-zero-trust-blueprint/

**Guides not yet built (in queue)**
- /guides/secure-ai-ot/ — hold, search demand not yet mature

---

## URL CORRECTIONS — KNOWN ISSUES

| Issue | Correct URL | Status |
|---|---|---|
| Guide was originally linked as /guides/ot-security-platform-evaluation/ | Correct path is /guides/security-platform-evaluation/ | Fixed in nav.js and rfp-evaluation-kit index.html |

---

## REGULATORY DEADLINES

| Framework | Deadline / Date | Notes | Source |
|---|---|---|---|
| NIS2 | October 17, 2024 | EU member state transposition deadline. Enforcement varies by member state. | EUR-Lex |
| NERC CIP-015 | July 1, 2026 | Internal Network Security Monitoring (INSM) effective date for High and Medium impact BES Cyber Systems | NERC |
| NIS2 early warning | 24 hours from awareness | Early warning window for significant incidents to national CSIRT or competent authority | NIS2 Article 23 |
| NIS2 incident notification | 72 hours from awareness | Full incident notification deadline | NIS2 Article 23 |
| NIS2 final report | 1 month from notification | Final incident report deadline | NIS2 Article 23 |

**Review trigger:** Check NERC Standards Development and EUR-Lex quarterly for changes to enforcement dates or new implementing acts.

---

## STATISTICS IN USE

| Statistic | Value | Source | Page | Year | Review by |
|---|---|---|---|---|---|
| OT vulnerabilities with no patch at disclosure | ~30% | Dragos ICS/OT Cybersecurity Year in Review | /guides/patching-vs-microsegmentation/ | 2025 | Jan 2027 |
| NERC CIP max penalty | USD 1 million per violation per day | NERC | /guides/nis2-nerc-cip-audit-readiness/ | Current | Jan 2027 |
| NIS2 max fine (essential entities) | EUR 10 million or 2% global turnover | NIS2 Article 34 | /guides/nis2-nerc-cip-audit-readiness/ | Current | Review if NIS2 amended |
| NIS2 max fine (important entities) | EUR 7 million or 1.4% global turnover | NIS2 Article 34 | /guides/nis2-nerc-cip-audit-readiness/ | Current | Review if NIS2 amended |
| Firewall break-even crossover | 18–36 months typical | Internal estimate based on default TCO inputs | /guides/firewalls-vs-data-diodes/ | 2026 | Jan 2027 |

---

## VENDOR WATCH LIST

These items require active monitoring. Check quarterly.

| Vendor | Watch item | Action if triggered |
|---|---|---|
| Claroty | CTD/xDome product consolidation ongoing. CTD support timeline unclear. | Update comparison pages (dragos-vs-claroty, nozomi-vs-claroty, claroty-vs-armis) and vendor index entry. If CTD is EOL'd, update all references. |
| Radiflow | Doubling sales in 2025 — possible upmarket move. | Review vendor index entry and pricing tier if positioning changes. |
| PacketViper | Smaller challenger — confirm actively maintained. | Remove from vendor index if product becomes unmaintained. |
| Phosphorus | Emerging category — watch for consolidation or commoditization. | Update category description if acquired or if category consolidates into broader platforms. |
| Elisity | Watch for reference customer growth and competitive response from established vendors. | Update vendor index entry if market position strengthens significantly. |

---

## COMPARISON PAGES — EDITORIAL POSITIONS

Positions established at time of writing. Update when vendor capabilities materially change.

| Page | Key position | Last verified |
|---|---|---|
| dragos-vs-claroty | Dragos wins for pure OT threat intelligence; Claroty wins for converged CPS | June 2026 |
| nozomi-vs-claroty | Nozomi wins for distributed scale and wireless; Claroty wins for healthcare and SaaS | June 2026 |
| dragos-vs-nozomi | Dragos wins for adversary intelligence; Nozomi wins for AI analytics and multi-site scale | June 2026 |
| claroty-vs-armis | Claroty wins for OT-origin depth and NERC CIP; Armis wins for full IT/OT/IoT/healthcare convergence | June 2026 |
| dragos-vs-industrial-defender | Dragos wins for threat detection; Industrial Defender wins for NERC CIP automation | June 2026 |
| otorio-vs-claroty | OTORIO wins for mid-market risk prioritization; Claroty wins for enterprise CPS scope | June 2026 |
| verve-vs-claroty | Verve wins for active remediation; Claroty wins for passive CPS visibility breadth | June 2026 |

---

## RFP EVALUATION KIT

Current version: 1.0 — June 2026
Stored at: /tools/rfp-evaluation-kit/OT-Security-RFP-Evaluation-Kit.pdf
Annual review: June 2027
Notify subscribers: Yes — gate form privacy note states version update notification

---

## SEO INFRASTRUCTURE

| File | Location | Last updated | Notes |
|---|---|---|---|
| sitemap.xml | /sitemap.xml | June 2026 | Update when new pages are added |
| robots.txt | /robots.txt | June 2026 | No restrictions — update only if crawl issues arise |
| llms.txt | /llms.txt | June 2026 | Update content index when new guides or comparisons are added |

**IndexNow:** Not yet configured. Set up after remaining guides are built and indexed. Requires generating an IndexNow key and deploying a Cloudflare Worker. Model on 3dprintshopsoftware.com implementation.

---

## CONTENT ROADMAP

Pages planned but not yet built:

| Page | URL | Priority | Notes |
|---|---|---|---|
| Zero Trust Blueprint | /guides/ot-zero-trust-blueprint/ | High | Draft content in progress |
| Secure AI in OT | /guides/secure-ai-ot/ | Low | Hold — search demand not yet mature |
| Guides index | /guides/ | Medium | Directory page listing all guides |
| Comparisons index | /comparisons/ | Medium | Directory page listing all comparisons |
| Tools index | /tools/ | Medium | Directory page listing all tools |
| OTORIO vs. Claroty | /comparisons/otorio-vs-claroty/ | Medium | Mid-market comparison |
| Verve vs. Claroty | /comparisons/verve-vs-claroty/ | Medium | Active remediation vs. passive visibility |

---

## ANNUAL REVIEW CHECKLIST

Run every January:

- [ ] Verify all regulatory deadlines against official sources
- [ ] Check NERC Standards Development for new or revised standards
- [ ] Check EUR-Lex and ENISA for NIS2 implementing acts
- [ ] Review NERC violation notice database for new enforcement patterns
- [ ] Verify vendor watch list items — acquisitions, EOL announcements, repositioning
- [ ] Check all comparison page positions against current vendor documentation
- [ ] Update statistics with current year values
- [ ] Review RFP Evaluation Kit for accuracy — update if frameworks have changed
- [ ] Update sitemap.xml and llms.txt with any new pages
- [ ] Verify all external links are still active