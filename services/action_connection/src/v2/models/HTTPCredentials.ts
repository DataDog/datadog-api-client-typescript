import { UnparsedObject } from "@datadog/datadog-api-client";

import { HTTPBasicAuth } from "./HTTPBasicAuth";
import { HTTPMtlsAuth } from "./HTTPMtlsAuth";
import { HTTPTokenAuth } from "./HTTPTokenAuth";

/**
 * The definition of the `HTTPCredentials` object.
 */
export type HTTPCredentials =
  | HTTPTokenAuth
  | HTTPBasicAuth
  | HTTPMtlsAuth
  | UnparsedObject;
