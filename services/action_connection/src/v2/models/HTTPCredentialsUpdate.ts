import { UnparsedObject } from "@datadog/datadog-api-client";

import { HTTPBasicAuthUpdate } from "./HTTPBasicAuthUpdate";
import { HTTPMtlsAuthUpdate } from "./HTTPMtlsAuthUpdate";
import { HTTPTokenAuthUpdate } from "./HTTPTokenAuthUpdate";

/**
 * The definition of the `HTTPCredentialsUpdate` object.
 */
export type HTTPCredentialsUpdate =
  | HTTPTokenAuthUpdate
  | HTTPBasicAuthUpdate
  | HTTPMtlsAuthUpdate
  | UnparsedObject;
