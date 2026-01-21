import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The supported attributes for updating a component.
 */
export class PatchComponentRequestDataAttributes {
  /**
   * The name of the component.
   */
  "name"?: string;
  /**
   * The position of the component. If the component belongs to a group, the position is relative to the other components in the group.
   */
  "position"?: number;
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
    name: {
      baseName: "name",
      type: "string",
    },
    position: {
      baseName: "position",
      type: "number",
      format: "int64",
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
    return PatchComponentRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
