import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsJourneyPathTargetType } from "./ProductAnalyticsJourneyPathTargetType";

/**
 * A reference to the range of steps between two nodes of the journey.
 */
export class ProductAnalyticsJourneyPathTarget {
  /**
   * Alias of the node the path ends at.
   */
  "end": string;
  /**
   * Alias of the node the path starts at.
   */
  "start": string;
  /**
   * The discriminator identifying a target that references a range of steps.
   */
  "type": ProductAnalyticsJourneyPathTargetType;
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
    end: {
      baseName: "end",
      type: "string",
      required: true,
    },
    start: {
      baseName: "start",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsJourneyPathTargetType",
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
    return ProductAnalyticsJourneyPathTarget.attributeTypeMap;
  }

  public constructor() {}
}
