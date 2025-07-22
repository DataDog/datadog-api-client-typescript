import { UnparsedObject } from "@datadog/datadog-api-client";

import { ClickupAPIKeyUpdate } from "./ClickupAPIKeyUpdate";

/**
 * The definition of the `ClickupCredentialsUpdate` object.
 */
export type ClickupCredentialsUpdate = ClickupAPIKeyUpdate | UnparsedObject;
