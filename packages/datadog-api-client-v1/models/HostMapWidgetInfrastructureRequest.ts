/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HostMapWidgetGroupBy } from "./HostMapWidgetGroupBy";
import { HostMapWidgetInfrastructureRequestLeaf } from "./HostMapWidgetInfrastructureRequestLeaf";
import { HostMapWidgetInfrastructureRequestRequestType } from "./HostMapWidgetInfrastructureRequestRequestType";
import { HostMapWidgetInfrastructureStyle } from "./HostMapWidgetInfrastructureStyle";
import { HostMapWidgetNodeType } from "./HostMapWidgetNodeType";
import { HostMapWidgetScalarRequest } from "./HostMapWidgetScalarRequest";
import { WidgetConditionalFormat } from "./WidgetConditionalFormat";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Infrastructure-backed request for the host map widget. Supports entity-based
 * visualization with metric query enrichments, tag-based filtering, flexible grouping,
 * and hierarchical views.
 */
export class HostMapWidgetInfrastructureRequest {
  /**
   * Infrastructure-backed host map child request (leaf node, no further nesting supported).
   */
  "child"?: HostMapWidgetInfrastructureRequestLeaf;
  /**
   * List of conditional formatting rules applied to fill values.
   */
  "conditionalFormats"?: Array<WidgetConditionalFormat>;
  /**
   * Metric or event queries joined to the entity set. Each formula specifies a visual dimension.
   */
  "enrichments": Array<HostMapWidgetScalarRequest>;
  /**
   * Filter string for the entity set in tag format (for example, `env:prod`).
   */
  "filter"?: string;
  /**
   * Defines how entities are grouped into tiles. The ordering of entries implies
   * the grouping hierarchy.
   */
  "groupBy"?: Array<HostMapWidgetGroupBy>;
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
  "nodeType": HostMapWidgetNodeType;
  /**
   * Identifies this as an infrastructure-backed host map request.
   */
  "requestType": HostMapWidgetInfrastructureRequestRequestType;
  /**
   * Style configuration for the infrastructure host map.
   */
  "style"?: HostMapWidgetInfrastructureStyle;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

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
      type: "HostMapWidgetInfrastructureRequestLeaf",
    },
    conditionalFormats: {
      baseName: "conditional_formats",
      type: "Array<WidgetConditionalFormat>",
    },
    enrichments: {
      baseName: "enrichments",
      type: "Array<HostMapWidgetScalarRequest>",
      required: true,
    },
    filter: {
      baseName: "filter",
      type: "string",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<HostMapWidgetGroupBy>",
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
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "HostMapWidgetInfrastructureRequestRequestType",
      required: true,
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
    return HostMapWidgetInfrastructureRequest.attributeTypeMap;
  }

  public constructor() {}
}
