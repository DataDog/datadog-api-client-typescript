import { UnparsedObject } from "@datadog/datadog-api-client";

import { StatsigAPIKey } from "./StatsigAPIKey";

/**
 * The definition of the `StatsigCredentials` object.
 */
export type StatsigCredentials = StatsigAPIKey | UnparsedObject;
