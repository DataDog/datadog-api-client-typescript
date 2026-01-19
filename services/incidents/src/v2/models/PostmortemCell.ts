import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PostmortemCellAttributes } from "./PostmortemCellAttributes";
import { PostmortemCellType } from "./PostmortemCellType";

/**
 * A cell in the postmortem
 */
export class PostmortemCell {
  /**
   * Attributes of a postmortem cell
   */
  "attributes"?: PostmortemCellAttributes;
  /**
   * The unique identifier of the cell
   */
  "id"?: string;
  /**
   * The postmortem cell resource type.
   */
  "type"?: PostmortemCellType;
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
      type: "PostmortemCellAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "PostmortemCellType",
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
    return PostmortemCell.attributeTypeMap;
  }

  public constructor() {}
}
