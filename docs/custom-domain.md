# Connect www.dulie.app

Target URLs (not live until the account setup below is completed):

- Homepage: https://www.dulie.app/
- Privacy: https://www.dulie.app/privacy/
- Terms: https://www.dulie.app/terms/
- Future preview: https://www.dulie.app/future/

## 1. GitHub

Commit and push the prepared repository changes. In https://github.com/dulie-ai/Landing-Page/settings/pages keep GitHub Actions as the publishing source and save `www.dulie.app` as the custom domain. If available, first verify `dulie.app` in the organization's Pages settings using the TXT record GitHub provides.

This repository deploys with GitHub Actions: a CNAME file does not configure the domain. The Pages setting is required. The workflow reads `actions/configure-pages`'s base_path output, so assets and policy links work at either the old project path or the custom domain root.

After saving the custom domain, open Actions → Deploy GitHub Pages → Run workflow on main. Wait for deployment to succeed.

## 2. Cloudflare

Open dulie.app → DNS → Records. Configure these website records, using DNS only (grey cloud) and Auto TTL:

| Type  | Name | Target             |
| ----- | ---- | ------------------ |
| CNAME | www  | dulie-ai.github.io |
| A     | @    | 185.199.108.153    |
| A     | @    | 185.199.109.153    |
| A     | @    | 185.199.110.153    |
| A     | @    | 185.199.111.153    |

The CNAME target has no https:// or /Landing-Page/ path. The @ records make dulie.app reach GitHub and redirect to the configured www domain. Check existing records for these same names before replacing conflicting website A/AAAA/CNAME records. Preserve email records and verification TXT records.

DNS propagation and GitHub certificate provisioning can take up to 24 hours. Return to GitHub Pages and enable Enforce HTTPS once available. Check all target URLs and the redirect from https://dulie.app/. The final homepage address must remain https://www.dulie.app/.

## 3. Google ownership verification

Using a Google account with Owner or Editor access to the OAuth Cloud project, open Google Search Console and add a Domain property for `dulie.app` (no https:// or www). Copy Google's TXT value into a Cloudflare TXT record with Name @. Keep the record after verification. Click Verify in Search Console.

GitHub domain verification and Google Search Console verification are separate; completing one does not complete the other.

## 4. OAuth review

In the existing project's Google Auth Platform → Branding, set the homepage, privacy and terms URLs listed above. Add `dulie.app` under Authorized domains. Confirm that the public homepage links to the same privacy URL. These website changes do not require changing the app's OAuth callback/redirect URI.

After all pages work publicly over HTTPS and ownership is verified, resubmit the verification request and reply to the existing reviewer thread with the new homepage and privacy URLs. Do not claim ownership is verified until Search Console confirms it.

## References

- [GitHub custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Cloudflare DNS records](https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/)
- [Google homepage requirements](https://support.google.com/cloud/answer/13807376)
- [Google verification requirements](https://support.google.com/cloud/answer/13464321?hl=en)
