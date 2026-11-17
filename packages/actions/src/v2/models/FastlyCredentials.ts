import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { FastlyAPIKey } from "./FastlyAPIKey";

/**
 * The definition of the `FastlyCredentials` object.
 */
export type FastlyCredentials = FastlyAPIKey | UnparsedObject;
