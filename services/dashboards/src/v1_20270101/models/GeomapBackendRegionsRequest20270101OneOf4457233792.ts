import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GeomapBackendRegionsRequestAnyOfAnyOfItemRequestType } from "./GeomapBackendRegionsRequestAnyOfAnyOfItemRequestType";
import { GeomapBackendRegionsRequestAnyOfAnyOfItemResponseFormat4447008416 } from "./GeomapBackendRegionsRequestAnyOfAnyOfItemResponseFormat4447008416";
import { GeomapRequestStyle } from "./GeomapRequestStyle";
import { ThresholdFormattingRule } from "./ThresholdFormattingRule";

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
