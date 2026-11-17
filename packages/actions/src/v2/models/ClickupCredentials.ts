import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ClickupAPIKey } from "./ClickupAPIKey";

/**
 * The definition of the `ClickupCredentials` object.
 */
export type ClickupCredentials = ClickupAPIKey | UnparsedObject;
