import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { LaunchDarklyAPIKey } from "./LaunchDarklyAPIKey";

/**
 * The definition of the `LaunchDarklyCredentials` object.
 */
export type LaunchDarklyCredentials = LaunchDarklyAPIKey | UnparsedObject;
