---
title: Connecting Knock to your Datadog account
description: Learn more about how to connect Knock with your Datadog account.
layout: integrations
tags: ["datadog", "extensions"]
section: Integrations > Extensions
---

You can use the Knock + Datadog integration to stream workflow, channel, and message metrics from your Knock account to your Datadog account.

- Setup custom Datadog monitors and dashboards to track your Knock workflows & channels
- Get up-to-the-minute data on messages being sent, opened, and archived
- Monitor event ingestion from event platforms like [Segment](/integrations/sources/segment) and [Rudderstack](/integrations/sources/rudderstack)

## What this integration does

This integration will send a stream of metrics as they happen from your Knock account to your Datadog account. Metrics are prefixed `knock.*` and include success and failure codes. Metrics are tagged (where applicable) by:

- Environment
- Workflow key
- Channel type
- Integration source type

Please refer to your Datadog pricing agreement for information on how custom metrics sent to Datadog are priced for your account.

At this time there is no way to selectively enable specific metrics, however metrics will only be emitted to Datadog for features that you are actively using in Knock.

## Installing the integration

1. Visit the integrations page in your Knock dashboard, and click the "Extensions" tab.
2. Click "Configure Datadog".
3. Enter a Datadog API Key from Datadog's [API Keys](https://app.datadoghq.com/organization-settings/api-keys) page (we recommend creating a dedicated key just for Knock).
4. Pick the correct site for your Datadog account (visit [Datadog's docs](https://docs.datadoghq.com/getting_started/site/) for more information).
5. Click "Connect".

## Uninstalling the integration

1. Visit the integrations page in your Knock dashboard, and click the "Extensions" tab.
2. Click the "Disconnect" button for the Datadog extension, and then click "Confirm".
3. If you created a dedicated Datadog API key for Knock, you can now delete the key from Datadog's [API Keys](https://app.datadoghq.com/organization-settings/api-keys) page.