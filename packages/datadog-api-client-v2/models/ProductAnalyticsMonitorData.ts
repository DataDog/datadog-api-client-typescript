/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsMonitorAttributes } from "./ProductAnalyticsMonitorAttributes";
import { ProductAnalyticsMonitorType } from "./ProductAnalyticsMonitorType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A Product Analytics monitor.
 */
export class ProductAnalyticsMonitorData {
  /**
   * Attributes of a Product Analytics monitor.
   */
  "attributes": ProductAnalyticsMonitorAttributes;
  /**
   * ID of the monitor.
   */
  "id": string;
  /**
   * Product Analytics monitor resource type.
   */
  "type": ProductAnalyticsMonitorType;

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
      type: "ProductAnalyticsMonitorAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsMonitorType",
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
    return ProductAnalyticsMonitorData.attributeTypeMap;
  }

  public constructor() {}
}
