import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatasetListQuery } from "./DatasetListQuery";
import { HostMapRequest } from "./HostMapRequest";
import { HostMapWidgetDefinitionRequestType } from "./HostMapWidgetDefinitionRequestType";
import { HostMapWidgetGroupBy } from "./HostMapWidgetGroupBy";
import { HostMapWidgetInfrastructureRequest } from "./HostMapWidgetInfrastructureRequest";
import { HostMapWidgetInfrastructureStyle } from "./HostMapWidgetInfrastructureStyle";
import { HostMapWidgetNodeType } from "./HostMapWidgetNodeType";
import { HostMapWidgetProjection } from "./HostMapWidgetProjection";
import { HostMapWidgetScalarRequest } from "./HostMapWidgetScalarRequest";
import { WidgetConditionalFormat } from "./WidgetConditionalFormat";

/**
 * Query definition for the host map widget. Supports three mutually exclusive formats distinguished by `request_type`: the deprecated legacy metric-based format (`fill`/`size`, no `request_type`), the infrastructure-backed format (`request_type: infrastructure_hostmap`), and the DDSQL published-dataset format (`request_type: data_projection`).
 */
export class HostMapWidgetDefinitionRequests {
  /**
   * Infrastructure-backed request for the host map widget. Supports entity-based
   * visualization with metric query enrichments, tag-based filtering, flexible grouping,
   * and hierarchical views.
   */
  "child"?: HostMapWidgetInfrastructureRequest;
  /**
   * List of conditional formatting rules applied to fill values.
   */
  "conditionalFormats"?: Array<WidgetConditionalFormat>;
  /**
   * Metric or event queries joined to the entity set. Each formula specifies a visual dimension. Only used by the infrastructure-backed format.
   */
  "enrichments"?: Array<HostMapWidgetScalarRequest>;
  /**
   * Deprecated - Legacy metric-based host map request. Use the infrastructure-backed (`request_type: infrastructure_hostmap`) or DDSQL (`request_type: data_projection`) format instead.
   */
  "fill"?: HostMapRequest;
  /**
   * Filter string for the entity set in tag format (for example, `env:prod`). Only used by the infrastructure-backed format.
   */
  "filter"?: string;
  /**
   * Defines how entities are grouped into tiles. The ordering of entries implies
   * the grouping hierarchy. Only used by the infrastructure-backed format.
   */
  "groupBy"?: Array<HostMapWidgetGroupBy>;
  /**
   * Maximum number of rows to return from the dataset query. Only used by the DDSQL format.
   */
  "limit"?: number;
  /**
   * Whether to hide entities that have no group assignment.
   */
  "noGroupHosts"?: boolean;
  /**
   * Whether to hide entities that have no enrichment data.
   */
  "noMetricHosts"?: boolean;
  /**
   * Which type of infrastructure entity to visualize in the host map.
   */
  "nodeType"?: HostMapWidgetNodeType;
  /**
   * Projection for the DDSQL host map request. Maps dataset columns to map dimensions: `node` identifies the entity, repeated `group` entries define the grouping hierarchy (outermost first), and `fill`/`size` drive the tile color and size.
   */
  "projection"?: HostMapWidgetProjection;
  /**
   * Query that lists the rows of a published dataset (a DDSQL query) without aggregation.
   */
  "query"?: DatasetListQuery;
  /**
   * Identifies which host map request format the sibling fields on `HostMapWidgetDefinitionRequests` describe: an infrastructure-backed request or a DDSQL published-dataset request.
   */
  "requestType"?: HostMapWidgetDefinitionRequestType;
  /**
   * Deprecated - Legacy metric-based host map request. Use the infrastructure-backed (`request_type: infrastructure_hostmap`) or DDSQL (`request_type: data_projection`) format instead.
   */
  "size"?: HostMapRequest;
  /**
   * Style configuration for the infrastructure host map.
   */
  "style"?: HostMapWidgetInfrastructureStyle;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    child: {
      baseName: "child",
      type: "HostMapWidgetInfrastructureRequest",
    },
    conditionalFormats: {
      baseName: "conditional_formats",
      type: "Array<WidgetConditionalFormat>",
    },
    enrichments: {
      baseName: "enrichments",
      type: "Array<HostMapWidgetScalarRequest>",
    },
    fill: {
      baseName: "fill",
      type: "HostMapRequest",
    },
    filter: {
      baseName: "filter",
      type: "string",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<HostMapWidgetGroupBy>",
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "int64",
    },
    noGroupHosts: {
      baseName: "no_group_hosts",
      type: "boolean",
    },
    noMetricHosts: {
      baseName: "no_metric_hosts",
      type: "boolean",
    },
    nodeType: {
      baseName: "node_type",
      type: "HostMapWidgetNodeType",
    },
    projection: {
      baseName: "projection",
      type: "HostMapWidgetProjection",
    },
    query: {
      baseName: "query",
      type: "DatasetListQuery",
    },
    requestType: {
      baseName: "request_type",
      type: "HostMapWidgetDefinitionRequestType",
    },
    size: {
      baseName: "size",
      type: "HostMapRequest",
    },
    style: {
      baseName: "style",
      type: "HostMapWidgetInfrastructureStyle",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HostMapWidgetDefinitionRequests.attributeTypeMap;
  }

  public constructor() {}
}
