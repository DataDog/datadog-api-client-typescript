import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Status page component resource type.
 */
export type StatusPageComponentType =
  | typeof STATUS_PAGE_COMPONENTS
  | UnparsedObject;
export const STATUS_PAGE_COMPONENTS = "status_page_components";
