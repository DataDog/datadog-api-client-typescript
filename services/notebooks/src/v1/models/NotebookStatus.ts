import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Publication status of the notebook. For now, always "published".
 */
export type NotebookStatus = typeof PUBLISHED | UnparsedObject;
export const PUBLISHED = "published";
