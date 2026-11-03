/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsJourneyFunnelQuery } from "./ProductAnalyticsJourneyFunnelQuery";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a journey funnel request.
 */
export class ProductAnalyticsJourneyFunnelRequestAttributes {
  /**
   * Whether to exclude sessions that are not tied to an identified user.
   */
  "excludeAnonymousTraffic"?: boolean;
  /**
   * Start of the query window, in epoch milliseconds.
   */
  "from": number;
  /**
   * Query definition for a journey funnel request.
   */
  "query": ProductAnalyticsJourneyFunnelQuery;
  /**
   * End of the query window, in epoch milliseconds.
   */
  "to": number;

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
    excludeAnonymousTraffic: {
      baseName: "exclude_anonymous_traffic",
      type: "boolean",
    },
    from: {
      baseName: "from",
      type: "number",
      required: true,
      format: "int64",
    },
    query: {
      baseName: "query",
      type: "ProductAnalyticsJourneyFunnelQuery",
      required: true,
    },
    to: {
      baseName: "to",
      type: "number",
      required: true,
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
    return ProductAnalyticsJourneyFunnelRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
