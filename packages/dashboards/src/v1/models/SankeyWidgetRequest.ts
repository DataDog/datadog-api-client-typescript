import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { SankeyNetworkRequest } from "./SankeyNetworkRequest";
import { SankeyRumRequest } from "./SankeyRumRequest";

/**
 * Request definition for Sankey widget.
 */
export type SankeyWidgetRequest =
  | SankeyRumRequest
  | SankeyNetworkRequest
  | UnparsedObject;
