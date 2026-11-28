/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GeomapBackendRegionsRequestAnyOfAnyOfItemRequestType } from "./GeomapBackendRegionsRequestAnyOfAnyOfItemRequestType";
import { GeomapBackendRegionsRequestAnyOfAnyOfItemResponseFormat4447008416 } from "./GeomapBackendRegionsRequestAnyOfAnyOfItemResponseFormat4447008416";
import { GeomapRequestStyle } from "./GeomapRequestStyle";
import { ThresholdFormattingRule } from "./ThresholdFormattingRule";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class GeomapBackendRegionsRequest20270101OneOf4457233792 {
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
  "requestType": GeomapBackendRegionsRequestAnyOfAnyOfItemRequestType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": GeomapBackendRegionsRequestAnyOfAnyOfItemResponseFormat4447008416;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "style"?: GeomapRequestStyle;

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
      type: "GeomapBackendRegionsRequestAnyOfAnyOfItemRequestType",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "GeomapBackendRegionsRequestAnyOfAnyOfItemResponseFormat4447008416",
      required: true,
    },
    style: {
      baseName: "style",
      type: "GeomapRequestStyle",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GeomapBackendRegionsRequest20270101OneOf4457233792.attributeTypeMap;
  }

  public constructor() {}
}
