/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsRetentionListResponseData } from "./ProductAnalyticsRetentionListResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response for a retention list query.
 */
export class ProductAnalyticsRetentionListResponse {
  /**
   * The single JSON:API resource holding the entities behind one retention cell. Its attributes
   * contain the entity whose retention was measured and one row per matching entity.
   */
  "data": ProductAnalyticsRetentionListResponseData;

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
    data: {
      baseName: "data",
      type: "ProductAnalyticsRetentionListResponseData",
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
    return ProductAnalyticsRetentionListResponse.attributeTypeMap;
  }

  public constructor() {}
}
