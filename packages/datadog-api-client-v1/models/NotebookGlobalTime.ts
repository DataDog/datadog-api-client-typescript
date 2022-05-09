/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NotebookAbsoluteTime } from "./NotebookAbsoluteTime";
import { NotebookRelativeTime } from "./NotebookRelativeTime";

import { UnparsedObject } from "../util";

/**
 * Notebook global timeframe.
 */

export type NotebookGlobalTime =
  | NotebookRelativeTime
  | NotebookAbsoluteTime
  | UnparsedObject;
