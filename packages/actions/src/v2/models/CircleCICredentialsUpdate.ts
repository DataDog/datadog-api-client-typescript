import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { CircleCIAPIKeyUpdate } from "./CircleCIAPIKeyUpdate";

/**
 * The definition of the `CircleCICredentialsUpdate` object.
 */
export type CircleCICredentialsUpdate = CircleCIAPIKeyUpdate | UnparsedObject;
