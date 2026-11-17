import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ConfigCatSDKKey } from "./ConfigCatSDKKey";

/**
 * The definition of the `ConfigCatCredentials` object.
 */
export type ConfigCatCredentials = ConfigCatSDKKey | UnparsedObject;
