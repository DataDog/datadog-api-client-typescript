/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsMonitorRequestType } from "./ProductAnalyticsMonitorRequestType";
import { ProductAnalyticsMonitorUpdateAttributes } from "./ProductAnalyticsMonitorUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data of the Product Analytics monitor update.
 */
export class ProductAnalyticsMonitorUpdateData {
  /**
   * Attributes to update on a Product Analytics monitor. Fields that are not set are left unchanged.
   * When set, `options` or `tags` replaces the stored value.
   */
  "attributes": ProductAnalyticsMonitorUpdateAttributes;
  /**
   * Product Analytics monitor request resource type.
   */
  "type": ProductAnalyticsMonitorRequestType;

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
    attributes: {
      baseName: "attributes",
      type: "ProductAnalyticsMonitorUpdateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsMonitorRequestType",
      required: true,
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
    return ProductAnalyticsMonitorUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
