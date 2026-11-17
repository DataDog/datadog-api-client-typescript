import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { CustomDestinationResponseHttpDestinationAuthBasic } from "./CustomDestinationResponseHttpDestinationAuthBasic";
import { CustomDestinationResponseHttpDestinationAuthCustomHeader } from "./CustomDestinationResponseHttpDestinationAuthCustomHeader";

/**
 * Authentication method of the HTTP requests.
 */
export type CustomDestinationResponseHttpDestinationAuth =
  | CustomDestinationResponseHttpDestinationAuthBasic
  | CustomDestinationResponseHttpDestinationAuthCustomHeader
  | UnparsedObject;
