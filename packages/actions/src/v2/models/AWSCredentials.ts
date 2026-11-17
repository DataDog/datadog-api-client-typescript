import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { AWSAssumeRole } from "./AWSAssumeRole";

/**
 * The definition of `AWSCredentials` object.
 */
export type AWSCredentials = AWSAssumeRole | UnparsedObject;
