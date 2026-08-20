/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsJourneyScalarResponseType } from "./ProductAnalyticsJourneyScalarResponseType";
import { ProductAnalyticsScalarResponseAttributes } from "./ProductAnalyticsScalarResponseAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The single JSON:API resource holding journey scalar results. Its attributes contain one value
 * per group, suitable for a query value or top list widget.
 */
export class ProductAnalyticsJourneyScalarResponseData {
  /**
   * Attributes of a scalar analytics response, containing the result columns.
   */
  "attributes": ProductAnalyticsScalarResponseAttributes;
  /**
   * Identifier of this result.
   */
  "id": string;
  /**
   * The resource type identifier for a journey scalar response.
   */
  "type": ProductAnalyticsJourneyScalarResponseType;

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
      type: "ProductAnalyticsScalarResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsJourneyScalarResponseType",
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
    return ProductAnalyticsJourneyScalarResponseData.attributeTypeMap;
  }

  public constructor() {}
}
