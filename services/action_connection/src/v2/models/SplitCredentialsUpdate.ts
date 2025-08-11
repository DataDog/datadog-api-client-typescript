import { UnparsedObject } from "@datadog/datadog-api-client";

import { SplitAPIKeyUpdate } from "./SplitAPIKeyUpdate";

/**
 * The definition of the `SplitCredentialsUpdate` object.
 */
export type SplitCredentialsUpdate = SplitAPIKeyUpdate | UnparsedObject;
