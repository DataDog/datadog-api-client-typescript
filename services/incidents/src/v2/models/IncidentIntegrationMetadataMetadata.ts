import { UnparsedObject } from "@datadog/datadog-api-client";

import { JiraIntegrationMetadata } from "./JiraIntegrationMetadata";
import { MSTeamsIntegrationMetadata } from "./MSTeamsIntegrationMetadata";
import { SlackIntegrationMetadata } from "./SlackIntegrationMetadata";

/**
 * Incident integration metadata's metadata attribute.
 */
export type IncidentIntegrationMetadataMetadata =
  | SlackIntegrationMetadata
  | JiraIntegrationMetadata
  | MSTeamsIntegrationMetadata
  | UnparsedObject;
