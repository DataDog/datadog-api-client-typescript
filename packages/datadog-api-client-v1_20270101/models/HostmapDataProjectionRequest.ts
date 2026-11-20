/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DatasetListQuery } from "./DatasetListQuery";
import { HostmapDataProjectionRequestRequestType } from "./HostmapDataProjectionRequestRequestType";
import { HostmapProjection } from "./HostmapProjection";
import { HostmapStyle } from "./HostmapStyle";
import { ThresholdFormattingRule } from "./ThresholdFormattingRule";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class HostmapDataProjectionRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "conditionalFormats"?: Array<ThresholdFormattingRule>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "limit"?: number;
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
  "projection": HostmapProjection;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": DatasetListQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requestType": HostmapDataProjectionRequestRequestType;
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
    conditionalFormats: {
      baseName: "conditional_formats",
      type: "Array<ThresholdFormattingRule>",
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "double",
    },
    noGroupHosts: {
      baseName: "no_group_hosts",
      type: "boolean",
    },
    noMetricHosts: {
      baseName: "no_metric_hosts",
      type: "boolean",
    },
    projection: {
      baseName: "projection",
      type: "HostmapProjection",
      required: true,
    },
    query: {
      baseName: "query",
      type: "DatasetListQuery",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "HostmapDataProjectionRequestRequestType",
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
    return HostmapDataProjectionRequest.attributeTypeMap;
  }

  public constructor() {}
}
