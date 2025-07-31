import { UnparsedObject } from "@datadog/datadog-api-client";

import { LaunchDarklyAPIKeyUpdate } from "./LaunchDarklyAPIKeyUpdate";

/**
 * The definition of the `LaunchDarklyCredentialsUpdate` object.
 */
export type LaunchDarklyCredentialsUpdate =
  | LaunchDarklyAPIKeyUpdate
  | UnparsedObject;
