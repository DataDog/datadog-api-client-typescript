import { UnparsedObject } from "@datadog/datadog-api-client";

import { User } from "./User";

/**
 * An object related to an attachment that is included in the response.
 */
export type IncidentAttachmentsResponseIncludedItem = User | UnparsedObject;
