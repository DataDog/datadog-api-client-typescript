import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ToplistWidgetFlat } from "./ToplistWidgetFlat";
import { ToplistWidgetStacked } from "./ToplistWidgetStacked";

/**
 * Top list widget display options.
 */
export type ToplistWidgetDisplay =
  | ToplistWidgetStacked
  | ToplistWidgetFlat
  | UnparsedObject;
