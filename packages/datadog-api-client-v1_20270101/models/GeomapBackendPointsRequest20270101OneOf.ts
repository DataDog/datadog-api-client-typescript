/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GeomapBackendPointsRequestAnyOfAnyOfItemColumnsItems } from "./GeomapBackendPointsRequestAnyOfAnyOfItemColumnsItems";
import { GeomapBackendPointsRequestAnyOfAnyOfItemResponseFormat } from "./GeomapBackendPointsRequestAnyOfAnyOfItemResponseFormat";
import { GeomapRequestStyle } from "./GeomapRequestStyle";
import { LogsStreamQuery } from "./LogsStreamQuery";
import { TextFormattingRule } from "./TextFormattingRule";
import { ThresholdFormattingRule } from "./ThresholdFormattingRule";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class GeomapBackendPointsRequest20270101OneOf {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<GeomapBackendPointsRequestAnyOfAnyOfItemColumnsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "conditionalFormats"?: Array<ThresholdFormattingRule>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": LogsStreamQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": GeomapBackendPointsRequestAnyOfAnyOfItemResponseFormat;
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
      type: "Array<GeomapBackendPointsRequestAnyOfAnyOfItemColumnsItems>",
      required: true,
    },
    conditionalFormats: {
      baseName: "conditional_formats",
      type: "Array<ThresholdFormattingRule>",
    },
    query: {
      baseName: "query",
      type: "LogsStreamQuery",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "GeomapBackendPointsRequestAnyOfAnyOfItemResponseFormat",
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
    return GeomapBackendPointsRequest20270101OneOf.attributeTypeMap;
  }

  public constructor() {}
}
