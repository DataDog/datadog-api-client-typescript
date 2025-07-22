import { UnparsedObject } from "@datadog/datadog-api-client";

import { NotionAPIKey } from "./NotionAPIKey";

/**
 * The definition of the `NotionCredentials` object.
 */
export type NotionCredentials = NotionAPIKey | UnparsedObject;
