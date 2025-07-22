import { UnparsedObject } from "@datadog/datadog-api-client";

import { GCPServiceAccountUpdate } from "./GCPServiceAccountUpdate";

/**
 * The definition of the `GCPCredentialsUpdate` object.
 */
export type GCPCredentialsUpdate = GCPServiceAccountUpdate | UnparsedObject;
