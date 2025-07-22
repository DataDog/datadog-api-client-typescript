import { UnparsedObject } from "@datadog/datadog-api-client";

import { SplitAPIKey } from "./SplitAPIKey";

/**
 * The definition of the `SplitCredentials` object.
 */
export type SplitCredentials = SplitAPIKey | UnparsedObject;
