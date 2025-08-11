import { UnparsedObject } from "@datadog/datadog-api-client";

import { LaunchDarklyAPIKey } from "./LaunchDarklyAPIKey";

/**
 * The definition of the `LaunchDarklyCredentials` object.
 */
export type LaunchDarklyCredentials = LaunchDarklyAPIKey | UnparsedObject;
