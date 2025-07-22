import { UnparsedObject } from "@datadog/datadog-api-client";

import { GCPServiceAccount } from "./GCPServiceAccount";

/**
 * The definition of the `GCPCredentials` object.
 */
export type GCPCredentials = GCPServiceAccount | UnparsedObject;
