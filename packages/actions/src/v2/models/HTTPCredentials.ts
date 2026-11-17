import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { HTTPTokenAuth } from "./HTTPTokenAuth";

/**
 * The definition of `HTTPCredentials` object.
 */
export type HTTPCredentials = HTTPTokenAuth | UnparsedObject;
