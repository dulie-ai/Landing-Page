# Legal publication and production follow-up

The public policies describe current local operation, effective 17 September 2026. Operator: Wang Rui Duan, Singapore. Contact: dulie.business@gmail.com, monitored by Rui Duan. The website remains on GitHub Pages; the bot/backend run manually on team computers. No production cloud host is asserted.

Public paths: `/Landing-Page/privacy/` and `/Landing-Page/terms/`. Enter the HTTPS URLs in Google Auth Platform → Branding → App Domain after deployment. Saving URLs is not Google verification or permission to launch. Keep OAuth testing arrangements until the application is ready for the applicable verification and production requirements. Verify the website domain through Search Console as required.

The public policies disclose archival deletion and manual handling of privacy requests. They contain no numerical retention or backup promises, no unverified encryption claims, and no arbitrary monetary liability cap. Terms use Singapore law/courts while preserving mandatory consumer rights. Publication does not establish enforceable assent or certify compliance.

## Internal implementation targets — not current public promises

- Conversation history and routine logs: 30 days.
- Deleted items and associated embeddings: purge within 24 hours, preserving ten-minute undo.
- Used/expired OAuth and undo records, resolved/superseded pending records: purge within 24 hours. Unanswered pending requests: 30 days.
- Verified account erasure: live data within 30 days; backup expiry within a further 30 days, subject to an implemented and tested process.
- Inactive accounts: review after 24 months without user activity, give 30 days' notice, and exclude accounts with future scheduled items.

These are design targets only. Do not represent them as deployed until implementation and provider configuration are verified.

## Before wider production access

- Choose actual backend/database providers and regions; document backup and diagnostic storage, access restrictions, encryption, and provider contracts. Update public notices before changed processing begins.
- Source defaults to OpenAI directly for parsing and embeddings; deployment endpoint overrides and API account data-sharing settings must be checked by the operator.
- Establish a manual, authenticated deletion process now: identify the correct account, cover every linked table and retained copy, stop reminders, document exceptions, and prevent deleted data reappearing after restore. An inbox alone is not this process.
- Backend routes currently accept caller-supplied user IDs without application authentication. Keep them isolated and implement authentication/authorization before exposing them. Protect the bot send endpoint. Redact OAuth callback query parameters in logs.
- Implement in-bot policy links, clear AI and Calendar/Tasks disclosures, terms acceptance/version records, and appropriate age acknowledgement. The policy's 18+ eligibility does not establish age assurance.
- Google disconnection deletes local tokens; users also need Google Account connections to revoke authorization. Consider server-side revocation.
- Have local counsel review legal terms and privacy practices; assess jurisdictions actually served. Listing Rui Duan as the privacy contact does not independently establish formal DPO appointment.

## Evidence and release

Review was based on backend `dulie-development` at `6e87224`: `config/config.go`, `services/parser.go`, `services/embedder.go`, `services/app_similarity.go`, `services/google_oauth.go`, `database/items_repository.go`, `database/conversations_repository.go`, and `handlers/routes.go`.

Website changes to `main` trigger `.github/workflows/deploy.yml`. Run `npm run check`, verify the Pages subpath build, and confirm both public URLs return HTTP 200 with the final policy content.

References: [Google branding requirements](https://support.google.com/cloud/answer/15549049?hl=en), [Google API user data policy](https://developers.google.com/terms/api-services-user-data-policy), [Workspace user data policy](https://developers.google.com/workspace/workspace-api-user-data-developer-policy), [Singapore PDPC](https://www.pdpc.gov.sg/).
