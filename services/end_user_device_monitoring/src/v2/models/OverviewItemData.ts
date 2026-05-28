import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OverviewItemDataAttributes } from "./OverviewItemDataAttributes";
import { OverviewItemDataType } from "./OverviewItemDataType";

/**
 * A single tile entry in the End User Device Monitoring overview response.
 */
export class OverviewItemData {
  /**
   * Attributes of a single tile in the End User Device Monitoring overview dashboard.
   */
  "attributes"?: OverviewItemDataAttributes;
  /**
   * Unique identifier of the overview tile.
   */
  "id": string;
  /**
   * Overview items resource type.
   */
  "type": OverviewItemDataType;
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
      type: "OverviewItemDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OverviewItemDataType",
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
    return OverviewItemData.attributeTypeMap;
  }

  public constructor() {}
}
