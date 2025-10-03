import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PatchTableRequestDataAttributes } from "./PatchTableRequestDataAttributes";
import { PatchTableRequestDataType } from "./PatchTableRequestDataType";

/**
 * The definition of `PatchTableRequestData` object.
 */
export class PatchTableRequestData {
  /**
   * The definition of `PatchTableRequestDataAttributes` object.
   */
  "attributes"?: PatchTableRequestDataAttributes;
  /**
   * The ID of the reference table.
   */
  "id"?: string;
  /**
   * Reference table resource type.
   */
  "type": PatchTableRequestDataType;
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
      type: "PatchTableRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "PatchTableRequestDataType",
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
    return PatchTableRequestData.attributeTypeMap;
  }

  public constructor() {}
}
