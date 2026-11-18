/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsJourneyConversionType } from "./ProductAnalyticsJourneyConversionType";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Selects the users who converted or dropped off in a funnel.
 */
export class SegmentJourneyBlock {
  /**
   * Whether to return the entities that converted at the target step, or those that dropped off.
   */
  "conversionType"?: ProductAnalyticsJourneyConversionType;
  /**
   * Whether to leave out anonymous users.
   */
  "excludeAnonymousTraffic"?: boolean;
  /**
   * Start of the time range, in epoch milliseconds.
   */
  "from"?: Int64;
  /**
   * Group-by definitions of the funnel query.
   */
  "groupBy"?: Array<{ [key: string]: any }>;
  /**
   * Name of the block, used in `combination`.
   */
  "name"?: string;
  /**
   * Funnel search, with the same shape as the `search` of a Product Analytics journey query.
   */
  "search"?: { [key: string]: any };
  /**
   * Funnel step or step range to evaluate.
   */
  "target"?: { [key: string]: any };
  /**
   * End of the time range, in epoch milliseconds.
   */
  "to"?: Int64;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    conversionType: {
      baseName: "conversion_type",
      type: "ProductAnalyticsJourneyConversionType",
    },
    excludeAnonymousTraffic: {
      baseName: "exclude_anonymous_traffic",
      type: "boolean",
    },
    from: {
      baseName: "from",
      type: "number",
      format: "int64",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<{ [key: string]: any; }>",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    search: {
      baseName: "search",
      type: "{ [key: string]: any; }",
    },
    target: {
      baseName: "target",
      type: "{ [key: string]: any; }",
    },
    to: {
      baseName: "to",
      type: "number",
      format: "int64",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SegmentJourneyBlock.attributeTypeMap;
  }

  public constructor() {}
}
