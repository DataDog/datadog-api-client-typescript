import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PatchDegradationUpdateRequestDataAttributes } from "./PatchDegradationUpdateRequestDataAttributes";
import { PatchDegradationUpdateRequestDataType } from "./PatchDegradationUpdateRequestDataType";

/**
 * The data object for editing a degradation update.
 */
export class PatchDegradationUpdateRequestData {
  /**
   * Attributes for editing a degradation update.
   */
  "attributes"?: PatchDegradationUpdateRequestDataAttributes;
  /**
   * The ID of the degradation update to edit.
   */
  "id"?: string;
  /**
   * Degradation updates resource type.
   */
  "type": PatchDegradationUpdateRequestDataType;
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
      type: "PatchDegradationUpdateRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "PatchDegradationUpdateRequestDataType",
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
    return PatchDegradationUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
