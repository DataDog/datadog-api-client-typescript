import { UnparsedObject } from "@datadog/datadog-api-client";

import { CircleCIAPIKey } from "./CircleCIAPIKey";

/**
 * The definition of the `CircleCICredentials` object.
 */
export type CircleCICredentials = CircleCIAPIKey | UnparsedObject;
