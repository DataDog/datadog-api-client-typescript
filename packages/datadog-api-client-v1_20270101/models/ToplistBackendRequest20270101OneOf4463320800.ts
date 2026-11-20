/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ThresholdFormattingRule } from "./ThresholdFormattingRule";
import { ToplistBackendRequestAnyOfAnyOfItemRequestType4453034848 } from "./ToplistBackendRequestAnyOfAnyOfItemRequestType4453034848";
import { ToplistBackendRequestAnyOfAnyOfItemResponseFormat4453035168 } from "./ToplistBackendRequestAnyOfAnyOfItemResponseFormat4453035168";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
