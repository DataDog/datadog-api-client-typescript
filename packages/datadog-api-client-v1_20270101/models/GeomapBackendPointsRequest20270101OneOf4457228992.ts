/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GeomapBackendPointsRequestAnyOfAnyOfItemQuery } from "./GeomapBackendPointsRequestAnyOfAnyOfItemQuery";
import { GeomapBackendPointsRequestAnyOfAnyOfItemRequestType } from "./GeomapBackendPointsRequestAnyOfAnyOfItemRequestType";
import { GeomapBackendPointsRequestAnyOfAnyOfItemResponseFormat4447001376 } from "./GeomapBackendPointsRequestAnyOfAnyOfItemResponseFormat4447001376";
import { GeomapRequestStyle } from "./GeomapRequestStyle";
import { TextFormattingRule } from "./TextFormattingRule";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class GeomapBackendPointsRequest20270101OneOf4457228992 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": GeomapBackendPointsRequestAnyOfAnyOfItemQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requestType": GeomapBackendPointsRequestAnyOfAnyOfItemRequestType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": GeomapBackendPointsRequestAnyOfAnyOfItemResponseFormat4447001376;
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
    query: {
      baseName: "query",
      type: "GeomapBackendPointsRequestAnyOfAnyOfItemQuery",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "GeomapBackendPointsRequestAnyOfAnyOfItemRequestType",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "GeomapBackendPointsRequestAnyOfAnyOfItemResponseFormat4447001376",
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
    return GeomapBackendPointsRequest20270101OneOf4457228992.attributeTypeMap;
  }

  public constructor() {}
}
