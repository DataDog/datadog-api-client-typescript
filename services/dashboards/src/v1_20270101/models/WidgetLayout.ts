import { UnparsedObject } from "@datadog/datadog-api-client";

import { FreeLayout } from "./FreeLayout";
import { MSLBackendWidgetLayout } from "./MSLBackendWidgetLayout";
import { MSLWidgetLayout } from "./MSLWidgetLayout";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type WidgetLayout =
  | FreeLayout
  | MSLWidgetLayout
  | MSLBackendWidgetLayout
  | UnparsedObject;
