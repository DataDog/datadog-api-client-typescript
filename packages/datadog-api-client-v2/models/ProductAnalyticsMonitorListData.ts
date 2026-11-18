/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsMonitorListAttributes } from "./ProductAnalyticsMonitorListAttributes";
import { ProductAnalyticsMonitorListType } from "./ProductAnalyticsMonitorListType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data of a Product Analytics monitor list.
 */
export class ProductAnalyticsMonitorListData {
  /**
   * A list of Product Analytics monitors.
   */
  "attributes": ProductAnalyticsMonitorListAttributes;
  /**
   * ID of the list resource. Always `list`.
   */
  "id": string;
  /**
   * Product Analytics monitor list resource type.
   */
  "type": ProductAnalyticsMonitorListType;

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
      type: "ProductAnalyticsMonitorListAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsMonitorListType",
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
    return ProductAnalyticsMonitorListData.attributeTypeMap;
  }

  public constructor() {}
}
