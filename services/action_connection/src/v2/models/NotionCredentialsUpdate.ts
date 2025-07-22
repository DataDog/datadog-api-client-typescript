import { UnparsedObject } from "@datadog/datadog-api-client";

import { NotionAPIKeyUpdate } from "./NotionAPIKeyUpdate";

/**
 * The definition of the `NotionCredentialsUpdate` object.
 */
export type NotionCredentialsUpdate = NotionAPIKeyUpdate | UnparsedObject;
