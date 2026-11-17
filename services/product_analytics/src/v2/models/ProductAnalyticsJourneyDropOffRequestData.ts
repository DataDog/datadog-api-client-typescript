import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsJourneyDropOffRequestAttributes } from "./ProductAnalyticsJourneyDropOffRequestAttributes";
import { ProductAnalyticsJourneyDropOffRequestType } from "./ProductAnalyticsJourneyDropOffRequestType";

/**
 * The definition of a journey drop-off analysis request body.
 */
export class ProductAnalyticsJourneyDropOffRequestData {
  /**
   * Attributes of a journey drop-off analysis request.
   */
  "attributes": ProductAnalyticsJourneyDropOffRequestAttributes;
  /**
   * The resource type identifier for a journey drop-off analysis request.
   */
  "type": ProductAnalyticsJourneyDropOffRequestType;
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
      type: "ProductAnalyticsJourneyDropOffRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsJourneyDropOffRequestType",
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
    return ProductAnalyticsJourneyDropOffRequestData.attributeTypeMap;
  }

  public constructor() {}
}
