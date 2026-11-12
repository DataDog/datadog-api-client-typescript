import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomCostsFileUpdateAttributes } from "./CustomCostsFileUpdateAttributes";
import { CustomCostsFileUpdateType } from "./CustomCostsFileUpdateType";

/**
 * Custom Costs file to update.
 */
export class CustomCostsFileUpdateData {
  /**
   * Attributes of a Custom Costs file that can be updated.
   */
  "attributes": CustomCostsFileUpdateAttributes;
  /**
   * ID of the Custom Costs file.
   */
  "id": string;
  /**
   * Type of the Custom Costs file resource.
   */
  "type": CustomCostsFileUpdateType;
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
      type: "CustomCostsFileUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CustomCostsFileUpdateType",
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
    return CustomCostsFileUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
