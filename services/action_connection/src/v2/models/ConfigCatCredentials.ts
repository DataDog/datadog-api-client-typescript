import { UnparsedObject } from "@datadog/datadog-api-client";

import { ConfigCatSDKKey } from "./ConfigCatSDKKey";

/**
 * The definition of the `ConfigCatCredentials` object.
 */
export type ConfigCatCredentials = ConfigCatSDKKey | UnparsedObject;
