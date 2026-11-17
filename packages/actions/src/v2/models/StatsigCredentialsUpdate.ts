import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { StatsigAPIKeyUpdate } from "./StatsigAPIKeyUpdate";

/**
 * The definition of the `StatsigCredentialsUpdate` object.
 */
export type StatsigCredentialsUpdate = StatsigAPIKeyUpdate | UnparsedObject;
