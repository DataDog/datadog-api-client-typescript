/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMEventProcessingScale } from "./RUMEventProcessingScale";
import { RUMProductAnalyticsRetentionScale } from "./RUMProductAnalyticsRetentionScale";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Product Scales configuration for the RUM application.
 */
export class RUMProductScales {
  /**
   * Product Analytics retention scale configuration.
   */
  "productAnalyticsRetentionScale"?: RUMProductAnalyticsRetentionScale;
  /**
   * RUM event processing scale configuration.
   */
  "rumEventProcessingScale"?: RUMEventProcessingScale;

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
    productAnalyticsRetentionScale: {
      baseName: "product_analytics_retention_scale",
      type: "RUMProductAnalyticsRetentionScale",
    },
    rumEventProcessingScale: {
      baseName: "rum_event_processing_scale",
      type: "RUMEventProcessingScale",
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
    return RUMProductScales.attributeTypeMap;
  }

  public constructor() {}
}
