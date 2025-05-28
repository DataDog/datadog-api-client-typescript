/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NotebookAbsoluteTime } from "./NotebookAbsoluteTime";
import { NotebookRelativeTime } from "./NotebookRelativeTime";

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Timeframe for the notebook cell. When 'null', the notebook global time is used.
*/

export type NotebookCellTime = NotebookRelativeTime | NotebookAbsoluteTime | UnparsedObject;