import { UnparsedObject } from "@datadog/datadog-api-client";

import { AzureTenant } from "./AzureTenant";

/**
 * The definition of the `AzureCredentials` object.
 */
export type AzureCredentials = AzureTenant | UnparsedObject;
