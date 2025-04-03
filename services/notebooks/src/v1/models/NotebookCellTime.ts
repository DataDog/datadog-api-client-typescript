import { UnparsedObject } from "@datadog/datadog-api-client";

import { NotebookAbsoluteTime } from "./NotebookAbsoluteTime";
import { NotebookRelativeTime } from "./NotebookRelativeTime";

/**
 * Timeframe for the notebook cell. When 'null', the notebook global time is used.
 */
export type NotebookCellTime =
  | NotebookRelativeTime
  | NotebookAbsoluteTime
  | UnparsedObject;
