import { UnparsedObject } from "@datadog/datadog-api-client";

import { FastlyAPIKeyUpdate } from "./FastlyAPIKeyUpdate";

/**
 * The definition of the `FastlyCredentialsUpdate` object.
 */
export type FastlyCredentialsUpdate = FastlyAPIKeyUpdate | UnparsedObject;
