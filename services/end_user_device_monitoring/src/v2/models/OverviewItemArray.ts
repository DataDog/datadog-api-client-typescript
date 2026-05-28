import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OverviewItemData } from "./OverviewItemData";

/**
 * Response body for the overview endpoint, returning the tiles shown on the
 * End User Device Monitoring overview dashboard.
 */
export class OverviewItemArray {
  /**
   * List of overview tiles.
   */
  "data": Array<OverviewItemData>;
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
      type: "Array<OverviewItemData>",
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
    return OverviewItemArray.attributeTypeMap;
  }

  public constructor() {}
}
