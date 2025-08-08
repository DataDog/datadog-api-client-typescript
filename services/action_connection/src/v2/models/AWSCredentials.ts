import { UnparsedObject } from "@datadog/datadog-api-client";

import { AWSAssumeRole } from "./AWSAssumeRole";

/**
 * The definition of the `AWSCredentials` object.
 */
export type AWSCredentials = AWSAssumeRole | UnparsedObject;
