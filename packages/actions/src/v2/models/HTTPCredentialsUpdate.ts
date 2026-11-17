import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { HTTPTokenAuthUpdate } from "./HTTPTokenAuthUpdate";

/**
 * The definition of `HTTPCredentialsUpdate` object.
 */
export type HTTPCredentialsUpdate = HTTPTokenAuthUpdate | UnparsedObject;
