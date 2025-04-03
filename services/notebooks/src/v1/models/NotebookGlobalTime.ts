import { UnparsedObject } from "@datadog/datadog-api-client";

import { NotebookAbsoluteTime } from "./NotebookAbsoluteTime";
import { NotebookRelativeTime } from "./NotebookRelativeTime";

/**
 * Notebook global timeframe.
 */
export type NotebookGlobalTime =
  | NotebookRelativeTime
  | NotebookAbsoluteTime
  | UnparsedObject;
