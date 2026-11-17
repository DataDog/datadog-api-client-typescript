import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { SplitAPIKey } from "./SplitAPIKey";

/**
 * The definition of the `SplitCredentials` object.
 */
export type SplitCredentials = SplitAPIKey | UnparsedObject;
