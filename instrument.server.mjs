import * as Sentry from "@sentry/react-router";

Sentry.init({
 dsn: "https://5490ef8c6bcb638779d99e990baa9a90@o4509212149612544.ingest.de.sentry.io/4509212154658896",

 // Adds request headers and IP for users, for more info visit:
 // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
 sendDefaultPii: true,

 integrations: [],
 tracesSampleRate: 1.0, // Capture 100% of the transactions
 // profilesSampleRate: 1.0, // profile every transaction (disabled due to missing module)
});
