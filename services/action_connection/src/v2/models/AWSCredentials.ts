import { UnparsedObject } from "@datadog/datadog-api-client";

import { AWSAssumeRole } from "./AWSAssumeRole";

/**
 * The definition of `AWSCredentials` object.
 */
export type AWSCredentials = AWSAssumeRole | UnparsedObject;
