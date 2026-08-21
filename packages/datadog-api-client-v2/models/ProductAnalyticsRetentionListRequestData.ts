/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsRetentionListRequestAttributes } from "./ProductAnalyticsRetentionListRequestAttributes";
import { ProductAnalyticsRetentionListRequestType } from "./ProductAnalyticsRetentionListRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The single JSON:API resource carrying a retention list query. Its attributes hold the time
 * window, the cell to list, and the columns to return for each entity.
 */
export class ProductAnalyticsRetentionListRequestData {
  /**
   * Attributes of a retention list request.
   */
  "attributes": ProductAnalyticsRetentionListRequestAttributes;
  /**
   * The resource type identifier for a retention list request.
   */
  "type": ProductAnalyticsRetentionListRequestType;

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
      type: "ProductAnalyticsRetentionListRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsRetentionListRequestType",
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
    return ProductAnalyticsRetentionListRequestData.attributeTypeMap;
  }

  public constructor() {}
}
