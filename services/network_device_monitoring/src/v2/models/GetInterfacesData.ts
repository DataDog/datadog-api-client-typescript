import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { InterfaceAttributes } from "./InterfaceAttributes";

/**
 * The interfaces list data
 */
export class GetInterfacesData {
  /**
   * The interface attributes
   */
  "attributes"?: InterfaceAttributes;
  /**
   * The interface ID
   */
  "id"?: string;
  /**
   * The type of the resource. The value should always be interface.
   */
  "type"?: string;
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
      type: "InterfaceAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return GetInterfacesData.attributeTypeMap;
  }

  public constructor() {}
}
