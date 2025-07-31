import { UnparsedObject } from "@datadog/datadog-api-client";

import { FreshserviceAPIKeyUpdate } from "./FreshserviceAPIKeyUpdate";

/**
 * The definition of the `FreshserviceCredentialsUpdate` object.
 */
export type FreshserviceCredentialsUpdate =
  | FreshserviceAPIKeyUpdate
  | UnparsedObject;
