import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { FreshserviceAPIKey } from "./FreshserviceAPIKey";

/**
 * The definition of the `FreshserviceCredentials` object.
 */
export type FreshserviceCredentials = FreshserviceAPIKey | UnparsedObject;
