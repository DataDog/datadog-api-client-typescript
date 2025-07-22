import { UnparsedObject } from "@datadog/datadog-api-client";

import { ConfigCatSDKKeyUpdate } from "./ConfigCatSDKKeyUpdate";

/**
 * The definition of the `ConfigCatCredentialsUpdate` object.
 */
export type ConfigCatCredentialsUpdate = ConfigCatSDKKeyUpdate | UnparsedObject;
