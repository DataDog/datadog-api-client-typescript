/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HostmapGroupBy } from "./HostmapGroupBy";
import { HostmapInfrastructureRequestRequestType } from "./HostmapInfrastructureRequestRequestType";
import { HostmapNodeType } from "./HostmapNodeType";
import { HostmapScalarFormulaRequest } from "./HostmapScalarFormulaRequest";
import { HostmapStyle } from "./HostmapStyle";
import { ThresholdFormattingRule } from "./ThresholdFormattingRule";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class HostmapInfrastructureRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "child"?: HostmapInfrastructureRequest;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "conditionalFormats"?: Array<ThresholdFormattingRule>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "enrichments": Array<HostmapScalarFormulaRequest>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "filter"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "groupBy"?: Array<HostmapGroupBy>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "noGroupHosts"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "noMetricHosts"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "nodeType": HostmapNodeType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requestType": HostmapInfrastructureRequestRequestType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "style"?: HostmapStyle;

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
      type: "HostmapInfrastructureRequest",
    },
    conditionalFormats: {
      baseName: "conditional_formats",
      type: "Array<ThresholdFormattingRule>",
    },
    enrichments: {
      baseName: "enrichments",
      type: "Array<HostmapScalarFormulaRequest>",
      required: true,
    },
    filter: {
      baseName: "filter",
      type: "string",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<HostmapGroupBy>",
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
      type: "HostmapNodeType",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "HostmapInfrastructureRequestRequestType",
      required: true,
    },
    style: {
      baseName: "style",
      type: "HostmapStyle",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HostmapInfrastructureRequest.attributeTypeMap;
  }

  public constructor() {}
}
