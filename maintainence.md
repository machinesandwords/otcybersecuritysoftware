# MAINTENANCE.md
# otcybersecuritysoftware.com — Annual Update Tracker
# Review every January. Sources publish Q1.

---

## STATS TO UPDATE ANNUALLY

### /why/index.html — "The threat picture, by the numbers"

| Stat | Current value | Year | Source | URL |
|------|--------------|------|---------|-----|
| Industrial sites disrupted by cyberattacks | 1,015 | 2024 | Waterfall Security / ICS STRIVE OT Cyber Threat Report | https://waterfall-security.com/ot-insights/ot-cyber-threat-report/ |
| YOY increase in disruptions | 146% | 2024 vs 2023 | Same | Same |
| Prior year baseline | 412 | 2023 | Same | Same |
| CISA ICS advisories issued | 500+ | 2025 | CISA ICS advisories | https://www.cisa.gov/topics/industrial-control-systems |
| % of advisories rated high or critical | 82% | 2025 | Same | Same |
| % of attacks causing physical impact indirectly (via IT/cloud) | ~90% | 2024 | Waterfall Security / ICS STRIVE | Same as above |

**Update process:**
1. Check Waterfall/ICS STRIVE for new annual report (usually February)
2. Check CISA ICS advisory annual recap (usually January/February)
3. Update stat-block numbers and year tags in /why/index.html
4. Update references section at bottom of /why/index.html with new report URLs
5. Commit with message "Update annual stats [year]"

---

## REGULATORY DEADLINES — ANNUAL REVIEW

Review every January. Update /landscape/regulatory-map/index.html with any changes.

| Framework | Deadline / Event | Status | Notes |
|-----------|-----------------|--------|-------|
| NERC CIP-015 | 2026 enforcement | Active | Internal network security monitoring requirement. Verify vendor compliance claims have been tested post-enforcement. Update "Active" flag to reflect current status. |
| EU Cyber Resilience Act | 2027 full enforcement | Upcoming | Connected device manufacturers must demonstrate CRA compliance. Update vendor qualification guidance in regulatory map. Check IEC 62443 harmonized standard status. |
| EU NIS2 | Transposition complete | Active | Member state implementation varies. Check for enforcement actions and clarifications annually. Update NIS2 section with any significant rulings. |
| TSA Security Directives | Updated periodically | Active | Check https://www.tsa.gov/for-industry/surface-cybersecurity for current directive versions before each annual review. |
| UK PSTI Act | 2024 enforcement | Active | Product Security and Telecommunications Infrastructure Act. Check for updates to connected device requirements. |
| Australia SOCI Act | Active | Active | Check for amendments to risk management program requirements. |
| IEC 62443 | Part 2-1 revised 2024 | Active | Monitor for further part revisions. Check ISASecure certification body for updated certification schemes. |

**Update process for regulatory map:**
1. Review each framework's official source for changes
2. Update deadline flags (Active / Upcoming / year) in /landscape/regulatory-map/index.html
3. Update framework interactions table if requirements have changed
4. Update vendor compliance tags in /landscape/vendors/index.html if vendor certifications have changed
5. Update vendors.json compliance arrays if vendor framework coverage has changed
6. Commit with message "Update regulatory map [year]"

**Official sources:**
- NERC CIP: https://www.nerc.com/pa/Stand/Pages/CIPStandards.aspx
- IEC 62443: https://www.isa.org/standards-and-publications/isa-standards/isa-iec-62443-series-of-standards
- EU NIS2: https://digital-strategy.ec.europa.eu/en/policies/nis2-directive
- EU CRA: https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act
- TSA Surface: https://www.tsa.gov/for-industry/surface-cybersecurity
- Australia SOCI: https://www.homeaffairs.gov.au/nat-security/Pages/protecting-critical-infrastructure.aspx

---

## VENDOR WATCH LIST

Vendors flagged for monitoring due to acquisition risk, product trajectory concerns,
or market position uncertainty. Review before each annual update.

### High watch — acquisition or sunset risk

| Vendor | Risk | Notes |
|--------|------|-------|
| Darktrace (OT) | Acquisition target | OT module is a thin land-grab, not a genuine product commitment. Small OT customer base limits feedback loop for improvement. If acquired by Palo Alto, Microsoft, or similar, OT module either gets investment or gets sunset — either outcome changes the recommendation. Check for M&A activity annually. |
| Stellar Cyber | Funding/acquisition | Challenger-tier XDR with OT coverage. Watch for funding rounds, acquisition, or pivot away from OT focus. |
| PacketViper | Viability | Smaller challenger. Confirm still actively maintained and selling before each update. |

### Watch — product trajectory

| Vendor | Watch item | Notes |
|--------|-----------|-------|
| Microsoft Defender for IoT | OT protocol depth | Coverage has expanded but remains narrower than pure-play OT platforms. Check annually whether the gap has closed. |
| Radiflow | Market expansion | Doubled sales H1 2025. Watch whether growth leads to enterprise upmarket move or stays mid-market focused. |
| Phosphorus | Category definition | Proactive IoT/OT device security is still an emerging category. Watch for consolidation or commoditization. |
| Elisity | Adoption | Identity-based microsegmentation without network redesign is a strong concept. Watch for reference customer growth and competitive response from established vendors. |

### Watch — regulatory alignment changes

| Framework | Next review date | Notes |
|-----------|-----------------|-------|
| NERC CIP-015 | 2026 effective | Internal network security monitoring requirement. Check whether vendor compliance claims have been validated post-enforcement. |
| EU CRA | 2027 enforcement | Cyber Resilience Act enforcement begins. Check vendor compliance positioning, particularly for Phosphorus, TXOne, and Armis. |
| TSA Security Directives | Ongoing | Pipeline and rail directives updated periodically. Check CISA/TSA site for revisions. |

---

## VENDOR INDEX — ANNUAL REVIEW CHECKLIST

For each vendor, confirm before publishing annual update:

- [ ] Still independently operating (not acquired, not sunset)
- [ ] Website URL still valid
- [ ] Pricing tier still accurate (major funding or enterprise pivot can shift this)
- [ ] Compliance certifications still current
- [ ] Deployment model unchanged
- [ ] "Best fit" description still accurate given product evolution

### Vendors most likely to change year-over-year

1. Darktrace — acquisition watch
2. Stellar Cyber — funding/pivot watch
3. Microsoft Defender for IoT — rapid product evolution
4. Claroty — product consolidation (CTD + xDome roadmap)
5. Any challenger with <50 employees — viability check

---

## SOURCES TO CHECK ANNUALLY

| Source | What it covers | Publishes | URL |
|--------|---------------|-----------|-----|
| Waterfall Security / ICS STRIVE OT Cyber Threat Report | Physical disruption stats, attack trends | February | https://waterfall-security.com/ot-insights/ot-cyber-threat-report/ |
| CISA ICS Advisory year-in-review | Advisory volume, severity trends | January/February | https://www.cisa.gov/topics/industrial-control-systems |
| IBM X-Force Threat Intelligence Index | OT breach costs, attack trends | February | https://www.ibm.com/reports/threat-intelligence |
| Forescout OT Security Report | Device vulnerability trends | Q1 | https://www.forescout.com/research-labs/ |
| Verizon DBIR | Broader breach data with OT context | April/May | https://www.verizon.com/business/resources/reports/dbir/ |
| PwC Global Digital Trust Insights | OT geopolitical risk | January | https://www.pwc.com/gx/en/issues/cybersecurity |
| Gartner MQ for CPS Protection Platforms | Vendor positioning | February (first published Feb 2025, annual thereafter) | https://www.gartner.com/en/documents/cyber-physical-systems |

---

## COMPARISON PAGES — CONTENT ACCURACY

When updating comparison pages, re-verify:
- Deployment options (vendors add cloud or on-prem options regularly)
- Protocol support lists (expands with product updates)
- Integration claims (SIEM/SOAR connectors change)
- Pricing tier (funding events and market positioning shifts affect this)

---

## NOTES FOR FUTURE COMPARISON PAGES

### Darktrace vs purpose-built OT platforms
When writing this comparison, address directly:
- Darktrace OT module ICS protocol coverage is thin vs. Claroty/Nozomi/Dragos
- The real question is whether it is a genuine second choice or a checkbox for existing Darktrace customers
- Acquisition scenario: if acquired, OT module gets investment or gets sunset — state this risk explicitly

### Claroty vs Dragos
Key differentiator to address:
- Claroty: breadth across cyber-physical systems, strong in healthcare + manufacturing
- Dragos: threat intelligence depth, practitioner-built, stronger for mature security programs
- Gartner 2025 MQ: Claroty positioned highest for execution and vision — worth noting but not leading with

### Established vs challenger comparison framing
Key editorial position established in landscape page:
- Most organizations end up with 2-3 tools, not one platform
- Platform provides visibility baseline, specialist fills the gap
- Risk profile of challengers is real — some will be acquired, some will not survive

---

*Last updated: June 2026*
*Next review: January 2027*

---

## NEWSLETTER WORKER — TECHNICAL NOTES

### Worker configuration
- Worker name: `newsletter-otcybersecuritysoftware`
- Worker URL: `https://newsletter-otcybersecuritysoftware.whereismy328.workers.dev`
- Custom domain `newsletter.otcybersecuritysoftware.com` configured via Workers Routes on the domain (not via Worker Domains UI)
- Required secrets: `MAILERLITE_API_KEY`, `NEWSLETTER_GROUP_ID`

### MailerLite groups
| Group | ID | Purpose |
|-------|----|---------|
| OT Cybersecurity Newsletter | 189192920775002053 | Newsletter signups via newsletter.js |
| OT Security RFP Kit | 189440205919356679 | RFP kit gate page downloads |

### How the Worker routes to groups
The Worker accepts an optional `group_id` in the POST body. If not provided, falls back to `NEWSLETTER_GROUP_ID` environment variable. The gate page passes the RFP Kit group ID explicitly.

### Known issues
- Cloudflare "Add Domain" UI in the Worker shows "No zones found" even for domains in the same account. Use the domain's Workers Routes page instead (Cloudflare → domain → Compute → Workers Routes → Add route).
- CNAME pointing to workers.dev URL causes Error 522. Delete any manual CNAME and use Workers Routes instead.
- workers.dev URL works as a direct endpoint and is used in newsletter.js and the gate page as a fallback.

---

## CLOUDFLARE CACHING

### Development Mode
Enable Development Mode during active build sprints to bypass Cloudflare's cache and see changes immediately.
Cloudflare → domain → Caching → Development Mode → toggle on (auto-disables after 3 hours).

### HTML caching issue
Cloudflare aggressively caches HTML files. After pushing updates, hard refresh (Ctrl+Shift+R) or enable Development Mode to see changes on the live site.

*Last updated: June 2026*