import { UnparsedObject } from "@datadog/datadog-api-client";

import { User } from "./User";

/**
 * An object related to an incident team which is present in the included payload.
 */
export type IncidentTeamIncludedItems = User | UnparsedObject;
