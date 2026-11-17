import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { SplitAPIKeyUpdate } from "./SplitAPIKeyUpdate";

/**
 * The definition of the `SplitCredentialsUpdate` object.
 */
export type SplitCredentialsUpdate = SplitAPIKeyUpdate | UnparsedObject;
