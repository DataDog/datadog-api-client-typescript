/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsJourneyDropOffResponseAttributes } from "./ProductAnalyticsJourneyDropOffResponseAttributes";
import { ProductAnalyticsJourneyDropOffResponseType } from "./ProductAnalyticsJourneyDropOffResponseType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The journey drop-off analysis results.
 */
export class ProductAnalyticsJourneyDropOffResponseData {
  /**
   * Attributes of a journey drop-off analysis response.
   */
  "attributes": ProductAnalyticsJourneyDropOffResponseAttributes;
  /**
   * Identifier of this result.
   */
  "id": string;
  /**
   * The resource type identifier for a journey drop-off analysis response.
   */
  "type": ProductAnalyticsJourneyDropOffResponseType;

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
      type: "ProductAnalyticsJourneyDropOffResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsJourneyDropOffResponseType",
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
    return ProductAnalyticsJourneyDropOffResponseData.attributeTypeMap;
  }

  public constructor() {}
}
