import { UnparsedObject } from "@datadog/datadog-api-client";

import { OktaAPIToken } from "./OktaAPIToken";

/**
 * The definition of the `OktaCredentials` object.
 */
export type OktaCredentials = OktaAPIToken | UnparsedObject;
