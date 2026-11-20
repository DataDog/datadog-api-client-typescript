/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { BarChartBackendRequestAnyOfAnyOfItemRequestType4443922944 } from "./BarChartBackendRequestAnyOfAnyOfItemRequestType4443922944";
import { BarChartBackendRequestAnyOfAnyOfItemResponseFormat4443923264 } from "./BarChartBackendRequestAnyOfAnyOfItemResponseFormat4443923264";
import { ThresholdFormattingRule } from "./ThresholdFormattingRule";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class BarChartBackendRequest20270101OneOf4454435552 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "conditionalFormats"?: Array<ThresholdFormattingRule>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "ddsqlQuery": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requestType": BarChartBackendRequestAnyOfAnyOfItemRequestType4443922944;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": BarChartBackendRequestAnyOfAnyOfItemResponseFormat4443923264;

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
    ddsqlQuery: {
      baseName: "ddsql_query",
      type: "string",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "BarChartBackendRequestAnyOfAnyOfItemRequestType4443922944",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "BarChartBackendRequestAnyOfAnyOfItemResponseFormat4443923264",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return BarChartBackendRequest20270101OneOf4454435552.attributeTypeMap;
  }

  public constructor() {}
}
