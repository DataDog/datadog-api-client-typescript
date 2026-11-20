/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GeomapBackendPointsRequestAnyOfAnyOfItemColumnsItems4446863200 } from "./GeomapBackendPointsRequestAnyOfAnyOfItemColumnsItems4446863200";
import { GeomapBackendPointsRequestAnyOfAnyOfItemResponseFormat4446995936 } from "./GeomapBackendPointsRequestAnyOfAnyOfItemResponseFormat4446995936";
import { GeomapRequestStyle } from "./GeomapRequestStyle";
import { RumStreamQuery } from "./RumStreamQuery";
import { TextFormattingRule } from "./TextFormattingRule";
import { ThresholdFormattingRule } from "./ThresholdFormattingRule";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class GeomapBackendPointsRequest20270101OneOf4457225472 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<GeomapBackendPointsRequestAnyOfAnyOfItemColumnsItems4446863200>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "conditionalFormats"?: Array<ThresholdFormattingRule>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": RumStreamQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": GeomapBackendPointsRequestAnyOfAnyOfItemResponseFormat4446995936;
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
      type: "Array<GeomapBackendPointsRequestAnyOfAnyOfItemColumnsItems4446863200>",
      required: true,
    },
    conditionalFormats: {
      baseName: "conditional_formats",
      type: "Array<ThresholdFormattingRule>",
    },
    query: {
      baseName: "query",
      type: "RumStreamQuery",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "GeomapBackendPointsRequestAnyOfAnyOfItemResponseFormat4446995936",
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
    return GeomapBackendPointsRequest20270101OneOf4457225472.attributeTypeMap;
  }

  public constructor() {}
}
