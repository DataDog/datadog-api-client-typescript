import { UnparsedObject } from "@datadog/datadog-api-client";

import { AWSAuthConfigKeys } from "./AWSAuthConfigKeys";
import { AWSAuthConfigRole } from "./AWSAuthConfigRole";

/**
 * AWS Authentication config.
 */
export type AWSAuthConfig =
  | AWSAuthConfigKeys
  | AWSAuthConfigRole
  | UnparsedObject;
