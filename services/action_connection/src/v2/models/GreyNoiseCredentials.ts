import { UnparsedObject } from "@datadog/datadog-api-client";

import { GreyNoiseAPIKey } from "./GreyNoiseAPIKey";

/**
 * The definition of the `GreyNoiseCredentials` object.
 */
export type GreyNoiseCredentials = GreyNoiseAPIKey | UnparsedObject;
