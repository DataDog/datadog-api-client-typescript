/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsAnalyticsListResponseAttributes } from "./ProductAnalyticsAnalyticsListResponseAttributes";
import { ProductAnalyticsAnalyticsListResponseType } from "./ProductAnalyticsAnalyticsListResponseType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for an analytics list response.
 */
export class ProductAnalyticsAnalyticsListResponseData {
  /**
   * Attributes of an analytics list response, containing the matching event rows.
   */
  "attributes": ProductAnalyticsAnalyticsListResponseAttributes;
  /**
   * Unique identifier for this response data object.
   */
  "id": string;
  /**
   * The resource type identifier for an analytics list response.
   */
  "type": ProductAnalyticsAnalyticsListResponseType;

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
      type: "ProductAnalyticsAnalyticsListResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsAnalyticsListResponseType",
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
    return ProductAnalyticsAnalyticsListResponseData.attributeTypeMap;
  }

  public constructor() {}
}
