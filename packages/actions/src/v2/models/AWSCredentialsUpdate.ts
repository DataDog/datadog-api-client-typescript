import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { AWSAssumeRoleUpdate } from "./AWSAssumeRoleUpdate";

/**
 * The definition of `AWSCredentialsUpdate` object.
 */
export type AWSCredentialsUpdate = AWSAssumeRoleUpdate | UnparsedObject;
