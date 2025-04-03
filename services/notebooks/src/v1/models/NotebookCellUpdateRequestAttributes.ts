import { UnparsedObject } from "@datadog/datadog-api-client";

import { NotebookDistributionCellAttributes } from "./NotebookDistributionCellAttributes";
import { NotebookHeatMapCellAttributes } from "./NotebookHeatMapCellAttributes";
import { NotebookLogStreamCellAttributes } from "./NotebookLogStreamCellAttributes";
import { NotebookMarkdownCellAttributes } from "./NotebookMarkdownCellAttributes";
import { NotebookTimeseriesCellAttributes } from "./NotebookTimeseriesCellAttributes";
import { NotebookToplistCellAttributes } from "./NotebookToplistCellAttributes";

/**
 * The attributes of a notebook cell in update cell request. Valid cell types are `markdown`, `timeseries`, `toplist`, `heatmap`, `distribution`,
 * `log_stream`. [More information on each graph visualization type.](https://docs.datadoghq.com/dashboards/widgets/)
 */
export type NotebookCellUpdateRequestAttributes =
  | NotebookMarkdownCellAttributes
  | NotebookTimeseriesCellAttributes
  | NotebookToplistCellAttributes
  | NotebookHeatMapCellAttributes
  | NotebookDistributionCellAttributes
  | NotebookLogStreamCellAttributes
  | UnparsedObject;
