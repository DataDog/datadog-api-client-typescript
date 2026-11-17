import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { CustomDestinationHttpDestinationAuthBasic } from "./CustomDestinationHttpDestinationAuthBasic";
import { CustomDestinationHttpDestinationAuthCustomHeader } from "./CustomDestinationHttpDestinationAuthCustomHeader";

/**
 * Authentication method of the HTTP requests.
 */
export type CustomDestinationHttpDestinationAuth =
  | CustomDestinationHttpDestinationAuthBasic
  | CustomDestinationHttpDestinationAuthCustomHeader
  | UnparsedObject;
