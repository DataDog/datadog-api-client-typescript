/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DataProjectionQuery } from "./DataProjectionQuery";
import { GeomapBackendPointsRequestAnyOfAnyOfItemRequestType4447003616 } from "./GeomapBackendPointsRequestAnyOfAnyOfItemRequestType4447003616";
import { GeomapBackendPointsRequestAnyOfAnyOfItemStyle } from "./GeomapBackendPointsRequestAnyOfAnyOfItemStyle";
import { GeomapPointsProjection } from "./GeomapPointsProjection";
import { TextFormattingRule } from "./TextFormattingRule";
import { ThresholdFormattingRule } from "./ThresholdFormattingRule";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class GeomapBackendPointsRequest20270101OneOf4457230272 {
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
  "projection": GeomapPointsProjection;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": DataProjectionQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requestType": GeomapBackendPointsRequestAnyOfAnyOfItemRequestType4447003616;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "style"?: GeomapBackendPointsRequestAnyOfAnyOfItemStyle;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "textFormats"?: Array<TextFormattingRule>;

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
    projection: {
      baseName: "projection",
      type: "GeomapPointsProjection",
      required: true,
    },
    query: {
      baseName: "query",
      type: "DataProjectionQuery",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "GeomapBackendPointsRequestAnyOfAnyOfItemRequestType4447003616",
      required: true,
    },
    style: {
      baseName: "style",
      type: "GeomapBackendPointsRequestAnyOfAnyOfItemStyle",
    },
    textFormats: {
      baseName: "text_formats",
      type: "Array<TextFormattingRule>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GeomapBackendPointsRequest20270101OneOf4457230272.attributeTypeMap;
  }

  public constructor() {}
}
