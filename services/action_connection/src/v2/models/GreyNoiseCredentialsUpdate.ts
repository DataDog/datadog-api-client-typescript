import { UnparsedObject } from "@datadog/datadog-api-client";

import { GreyNoiseAPIKeyUpdate } from "./GreyNoiseAPIKeyUpdate";

/**
 * The definition of the `GreyNoiseCredentialsUpdate` object.
 */
export type GreyNoiseCredentialsUpdate = GreyNoiseAPIKeyUpdate | UnparsedObject;
