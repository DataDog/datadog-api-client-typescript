/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NotebookDistributionCellAttributes } from "./NotebookDistributionCellAttributes";
import { NotebookHeatMapCellAttributes } from "./NotebookHeatMapCellAttributes";
import { NotebookLogStreamCellAttributes } from "./NotebookLogStreamCellAttributes";
import { NotebookMarkdownCellAttributes } from "./NotebookMarkdownCellAttributes";
import { NotebookTimeseriesCellAttributes } from "./NotebookTimeseriesCellAttributes";
import { NotebookToplistCellAttributes } from "./NotebookToplistCellAttributes";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The attributes of a notebook cell response. Valid cell types are `markdown`, `timeseries`, `toplist`, `heatmap`, `distribution`,
 * `log_stream`. [More information on each graph visualization type.](https://docs.datadoghq.com/dashboards/widgets/)
 */

export type NotebookCellResponseAttributes =
  | NotebookMarkdownCellAttributes
  | NotebookTimeseriesCellAttributes
  | NotebookToplistCellAttributes
  | NotebookHeatMapCellAttributes
  | NotebookDistributionCellAttributes
  | NotebookLogStreamCellAttributes
  | UnparsedObject;
