import { UnparsedObject } from "@datadog/datadog-api-client";

import { User } from "./User";

/**
 * An object related to an incident service which is present in the included payload.
 */
export type IncidentServiceIncludedItems = User | UnparsedObject;
