# Connect site.dulie.app

Public website URLs:

- Homepage: https://site.dulie.app/
- Privacy: https://site.dulie.app/privacy/
- Terms: https://site.dulie.app/terms/
- Future preview: https://site.dulie.app/future/

## 1. GitHub

Commit and push the prepared repository changes. In https://github.com/dulie-ai/Landing-Page/settings/pages keep GitHub Actions as the publishing source and save `site.dulie.app` as the custom domain. If available, first verify `dulie.app` in the organization's Pages settings using the TXT record GitHub provides.

This repository deploys with GitHub Actions: a CNAME file does not configure the domain. The Pages setting is required. The workflow reads `actions/configure-pages`'s base_path output, so assets and policy links work at either the old project path or the custom domain root.

After saving the custom domain, open Actions → Deploy GitHub Pages → Run workflow on main. Wait for deployment to succeed.

## 2. Cloudflare

The active website uses only the `site` subdomain. In Cloudflare, dulie.app → DNS → Records has:

| Type  | Name | Target             |
| ----- | ---- | ------------------ |
| CNAME | site | dulie-ai.github.io |

Use DNS only (grey cloud) and Auto TTL. No root (`@`) A records or `www` record are needed for this setup. Preserve existing root-domain, email and verification records.

GitHub Pages must use `site.dulie.app` as its custom domain with Enforce HTTPS enabled. Check the homepage, privacy and terms URLs above after deployment.

## 3. Google ownership verification

If you already have verified ownership of the `dulie.app` Domain property, keep that verification and do not create duplicate records. Confirm the verified Google account is an Owner or Editor of the OAuth Cloud project. Otherwise, using a Google account with Owner or Editor access to the OAuth Cloud project, open Google Search Console and add a Domain property for `dulie.app` (no https:// or www). Copy Google's TXT value into a Cloudflare TXT record with Name @. Keep the record after verification. Click Verify in Search Console.

GitHub domain verification and Google Search Console verification are separate; completing one does not complete the other.

## 4. OAuth review

In the existing project's Google Auth Platform → Branding, set the homepage, privacy and terms URLs listed above. Add `dulie.app` under Authorized domains. Confirm that the public homepage links to the same privacy URL. These website changes do not require changing the app's OAuth callback/redirect URI.

After all pages work publicly over HTTPS and ownership is verified, resubmit the verification request and reply to the existing reviewer thread with the new homepage and privacy URLs. Do not claim ownership is verified until Search Console confirms it.

## References

- [GitHub custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Cloudflare DNS records](https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/)
- [Google homepage requirements](https://support.google.com/cloud/answer/13807376)
- [Google verification requirements](https://support.google.com/cloud/answer/13464321?hl=en)
