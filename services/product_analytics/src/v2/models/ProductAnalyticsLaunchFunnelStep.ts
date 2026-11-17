import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Funnel linked to the launch.
 */
export class ProductAnalyticsLaunchFunnelStep {
  /**
   * Definition of the funnel widget, as a JSON object.
   */
  "funnelTileDef"?: { [key: string]: any };
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
    funnelTileDef: {
      baseName: "funnel_tile_def",
      type: "{ [key: string]: any; }",
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
    return ProductAnalyticsLaunchFunnelStep.attributeTypeMap;
  }

  public constructor() {}
}
