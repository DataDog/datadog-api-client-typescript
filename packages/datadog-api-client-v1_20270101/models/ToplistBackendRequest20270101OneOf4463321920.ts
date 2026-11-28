/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TabularProjection } from "./TabularProjection";
import { ThresholdFormattingRule } from "./ThresholdFormattingRule";
import { ToplistBackendRequest20270101OneOfQuery } from "./ToplistBackendRequest20270101OneOfQuery";
import { ToplistBackendRequestAnyOfAnyOfItemRequestType4453036448 } from "./ToplistBackendRequestAnyOfAnyOfItemRequestType4453036448";
import { ToplistBackendRequestAnyOfAnyOfItemResponseFormat4453036768 } from "./ToplistBackendRequestAnyOfAnyOfItemResponseFormat4453036768";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ToplistBackendRequest20270101OneOf4463321920 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "conditionalFormats"?: Array<ThresholdFormattingRule>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "projection"?: TabularProjection;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": ToplistBackendRequest20270101OneOfQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requestType": ToplistBackendRequestAnyOfAnyOfItemRequestType4453036448;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": ToplistBackendRequestAnyOfAnyOfItemResponseFormat4453036768;

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
    projection: {
      baseName: "projection",
      type: "TabularProjection",
    },
    query: {
      baseName: "query",
      type: "ToplistBackendRequest20270101OneOfQuery",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "ToplistBackendRequestAnyOfAnyOfItemRequestType4453036448",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "ToplistBackendRequestAnyOfAnyOfItemResponseFormat4453036768",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ToplistBackendRequest20270101OneOf4463321920.attributeTypeMap;
  }

  public constructor() {}
}
