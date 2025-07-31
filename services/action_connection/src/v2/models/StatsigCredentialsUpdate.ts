import { UnparsedObject } from "@datadog/datadog-api-client";

import { StatsigAPIKeyUpdate } from "./StatsigAPIKeyUpdate";

/**
 * The definition of the `StatsigCredentialsUpdate` object.
 */
export type StatsigCredentialsUpdate = StatsigAPIKeyUpdate | UnparsedObject;
