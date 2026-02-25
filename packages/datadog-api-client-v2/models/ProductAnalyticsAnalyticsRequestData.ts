/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsAnalyticsRequestAttributes } from "./ProductAnalyticsAnalyticsRequestAttributes";
import { ProductAnalyticsAnalyticsRequestType } from "./ProductAnalyticsAnalyticsRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for an analytics request.
 */
export class ProductAnalyticsAnalyticsRequestData {
  /**
   * Attributes for an analytics request.
   */
  "attributes": ProductAnalyticsAnalyticsRequestAttributes;
  /**
   * The resource type for analytics requests.
   */
  "type": ProductAnalyticsAnalyticsRequestType;

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
      type: "ProductAnalyticsAnalyticsRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsAnalyticsRequestType",
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
    return ProductAnalyticsAnalyticsRequestData.attributeTypeMap;
  }

  public constructor() {}
}
