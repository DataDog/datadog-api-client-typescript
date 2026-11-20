import { UnparsedObject } from "@datadog/datadog-api-client";

import { ContextMenuLink } from "./ContextMenuLink";
import { UserDefinedLink } from "./UserDefinedLink";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type WidgetCustomLink =
  | ContextMenuLink
  | UserDefinedLink
  | UnparsedObject;
