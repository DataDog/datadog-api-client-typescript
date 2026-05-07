import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostSettingDataAttributes } from "./CostSettingDataAttributes";
import { CostSettingType } from "./CostSettingType";

/**
 * Cost setting data object.
 */
export class CostSettingData {
  /**
   * Attributes for a cost setting.
   */
  "attributes": CostSettingDataAttributes;
  /**
   * The unique identifier of the setting.
   */
  "id": string;
  /**
   * Cost setting resource type.
   */
  "type": CostSettingType;
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
      type: "CostSettingDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CostSettingType",
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
    return CostSettingData.attributeTypeMap;
  }

  public constructor() {}
}
