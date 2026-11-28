/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GeomapBackendPointsRequestAnyOfAnyOfItemColumnsItems4446997856 } from "./GeomapBackendPointsRequestAnyOfAnyOfItemColumnsItems4446997856";
import { GeomapBackendPointsRequestAnyOfAnyOfItemResponseFormat4446999456 } from "./GeomapBackendPointsRequestAnyOfAnyOfItemResponseFormat4446999456";
import { GeomapRequestStyle } from "./GeomapRequestStyle";
import { ProductAnalyticsStreamQuery } from "./ProductAnalyticsStreamQuery";
import { TextFormattingRule } from "./TextFormattingRule";
import { ThresholdFormattingRule } from "./ThresholdFormattingRule";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class GeomapBackendPointsRequest20270101OneOf4457227232 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<GeomapBackendPointsRequestAnyOfAnyOfItemColumnsItems4446997856>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "conditionalFormats"?: Array<ThresholdFormattingRule>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": ProductAnalyticsStreamQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": GeomapBackendPointsRequestAnyOfAnyOfItemResponseFormat4446999456;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "style"?: GeomapRequestStyle;
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
    columns: {
      baseName: "columns",
      type: "Array<GeomapBackendPointsRequestAnyOfAnyOfItemColumnsItems4446997856>",
      required: true,
    },
    conditionalFormats: {
      baseName: "conditional_formats",
      type: "Array<ThresholdFormattingRule>",
    },
    query: {
      baseName: "query",
      type: "ProductAnalyticsStreamQuery",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "GeomapBackendPointsRequestAnyOfAnyOfItemResponseFormat4446999456",
      required: true,
    },
    style: {
      baseName: "style",
      type: "GeomapRequestStyle",
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
    return GeomapBackendPointsRequest20270101OneOf4457227232.attributeTypeMap;
  }

  public constructor() {}
}
