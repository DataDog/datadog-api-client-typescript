import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { StatsigAPIKey } from "./StatsigAPIKey";

/**
 * The definition of the `StatsigCredentials` object.
 */
export type StatsigCredentials = StatsigAPIKey | UnparsedObject;
