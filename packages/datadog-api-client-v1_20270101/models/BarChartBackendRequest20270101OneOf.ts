/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AdvancedQueryDataset } from "./AdvancedQueryDataset";
import { BarChartBackendRequestAnyOfAnyOfItemRequestType } from "./BarChartBackendRequestAnyOfAnyOfItemRequestType";
import { BarChartBackendRequestAnyOfAnyOfItemResponseFormat } from "./BarChartBackendRequestAnyOfAnyOfItemResponseFormat";
import { TabularProjection } from "./TabularProjection";
import { ThresholdFormattingRule } from "./ThresholdFormattingRule";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class BarChartBackendRequest20270101OneOf {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "conditionalFormats"?: Array<ThresholdFormattingRule>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "datasetToQuery": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "datasets": Array<AdvancedQueryDataset>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "limit"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "projection"?: TabularProjection;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requestType": BarChartBackendRequestAnyOfAnyOfItemRequestType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": BarChartBackendRequestAnyOfAnyOfItemResponseFormat;

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
    datasetToQuery: {
      baseName: "dataset_to_query",
      type: "string",
      required: true,
    },
    datasets: {
      baseName: "datasets",
      type: "Array<AdvancedQueryDataset>",
      required: true,
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "double",
    },
    projection: {
      baseName: "projection",
      type: "TabularProjection",
    },
    requestType: {
      baseName: "request_type",
      type: "BarChartBackendRequestAnyOfAnyOfItemRequestType",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "BarChartBackendRequestAnyOfAnyOfItemResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return BarChartBackendRequest20270101OneOf.attributeTypeMap;
  }

  public constructor() {}
}
