import { UnparsedObject } from "@datadog/datadog-api-client";

import { AWSAssumeRoleUpdate } from "./AWSAssumeRoleUpdate";

/**
 * The definition of `AWSCredentialsUpdate` object.
 */
export type AWSCredentialsUpdate = AWSAssumeRoleUpdate | UnparsedObject;
