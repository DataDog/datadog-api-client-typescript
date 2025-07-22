import { UnparsedObject } from "@datadog/datadog-api-client";

import { AzureTenantUpdate } from "./AzureTenantUpdate";

/**
 * The definition of the `AzureCredentialsUpdate` object.
 */
export type AzureCredentialsUpdate = AzureTenantUpdate | UnparsedObject;
