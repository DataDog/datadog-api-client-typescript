import { UnparsedObject } from "@datadog/datadog-api-client";

import { OktaAPITokenUpdate } from "./OktaAPITokenUpdate";

/**
 * The definition of the `OktaCredentialsUpdate` object.
 */
export type OktaCredentialsUpdate = OktaAPITokenUpdate | UnparsedObject;
