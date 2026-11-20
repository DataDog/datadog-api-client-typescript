import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ThresholdFormattingRule } from "./ThresholdFormattingRule";
import { ToplistBackendRequestAnyOfAnyOfItemRequestType4453034848 } from "./ToplistBackendRequestAnyOfAnyOfItemRequestType4453034848";
import { ToplistBackendRequestAnyOfAnyOfItemResponseFormat4453035168 } from "./ToplistBackendRequestAnyOfAnyOfItemResponseFormat4453035168";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ToplistBackendRequest20270101OneOf4463320800 {
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
  "requestType": ToplistBackendRequestAnyOfAnyOfItemRequestType4453034848;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": ToplistBackendRequestAnyOfAnyOfItemResponseFormat4453035168;
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
      type: "ToplistBackendRequestAnyOfAnyOfItemRequestType4453034848",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "ToplistBackendRequestAnyOfAnyOfItemResponseFormat4453035168",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ToplistBackendRequest20270101OneOf4463320800.attributeTypeMap;
  }

  public constructor() {}
}
