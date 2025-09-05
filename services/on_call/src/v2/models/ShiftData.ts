import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ShiftDataAttributes } from "./ShiftDataAttributes";
import { ShiftDataRelationships } from "./ShiftDataRelationships";
import { ShiftDataType } from "./ShiftDataType";

/**
 * Data for an on-call shift.
 */
export class ShiftData {
  /**
   * Attributes for an on-call shift.
   */
  "attributes"?: ShiftDataAttributes;
  /**
   * The `ShiftData` `id`.
   */
  "id"?: string;
  /**
   * Relationships for an on-call shift.
   */
  "relationships"?: ShiftDataRelationships;
  /**
   * Indicates that the resource is of type 'shifts'.
   */
  "type": ShiftDataType;
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
      type: "ShiftDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "ShiftDataRelationships",
    },
    type: {
      baseName: "type",
      type: "ShiftDataType",
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
    return ShiftData.attributeTypeMap;
  }

  public constructor() {}
}
