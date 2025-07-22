import { UnparsedObject } from "@datadog/datadog-api-client";

import { CircleCIAPIKeyUpdate } from "./CircleCIAPIKeyUpdate";

/**
 * The definition of the `CircleCICredentialsUpdate` object.
 */
export type CircleCICredentialsUpdate = CircleCIAPIKeyUpdate | UnparsedObject;
