import { UnparsedObject } from "@datadog/datadog-api-client";

import { User } from "./User";

/**
 * An object related to an incident integration metadata that is included in the response.
 */
export type IncidentIntegrationMetadataResponseIncludedItem =
  | User
  | UnparsedObject;
