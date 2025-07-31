import { UnparsedObject } from "@datadog/datadog-api-client";

import { FastlyAPIKey } from "./FastlyAPIKey";

/**
 * The definition of the `FastlyCredentials` object.
 */
export type FastlyCredentials = FastlyAPIKey | UnparsedObject;
