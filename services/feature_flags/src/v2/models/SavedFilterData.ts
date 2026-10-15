import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SavedFilterAttributes } from "./SavedFilterAttributes";
import { SavedFilterDataType } from "./SavedFilterDataType";

/**
 * A saved filter resource.
 */
export class SavedFilterData {
  /**
   * Saved filter details, including the full targeting rules and conditions.
   */
  "attributes": SavedFilterAttributes;
  /**
   * The ID of the saved filter.
   */
  "id": string;
  /**
   * The saved filter resource type.
   */
  "type": SavedFilterDataType;
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
      type: "SavedFilterAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "SavedFilterDataType",
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
    return SavedFilterData.attributeTypeMap;
  }

  public constructor() {}
}
