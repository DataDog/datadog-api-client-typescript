/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsJourneyFunnelResponseAttributes } from "./ProductAnalyticsJourneyFunnelResponseAttributes";
import { ProductAnalyticsJourneyFunnelResponseType } from "./ProductAnalyticsJourneyFunnelResponseType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The single JSON:API resource holding a computed funnel. Its attributes contain the number of
 * entities that entered, the end-to-end conversion, and one entry per funnel step.
 */
export class ProductAnalyticsJourneyFunnelResponseData {
  /**
   * Attributes of a journey funnel response.
   */
  "attributes": ProductAnalyticsJourneyFunnelResponseAttributes;
  /**
   * Identifier of this result.
   */
  "id": string;
  /**
   * The resource type identifier for a journey funnel response.
   */
  "type": ProductAnalyticsJourneyFunnelResponseType;

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
      type: "ProductAnalyticsJourneyFunnelResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsJourneyFunnelResponseType",
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
    return ProductAnalyticsJourneyFunnelResponseData.attributeTypeMap;
  }

  public constructor() {}
}
