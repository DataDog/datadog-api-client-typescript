import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatusPagesComponentGroupAttributesComponentsItemsType } from "./StatusPagesComponentGroupAttributesComponentsItemsType";

export class CreateComponentRequestDataAttributesComponentsItems {
  "name": string;
  "position": number;
  "type": StatusPagesComponentGroupAttributesComponentsItemsType;
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
      required: true,
    },
    position: {
      baseName: "position",
      type: "number",
      required: true,
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "StatusPagesComponentGroupAttributesComponentsItemsType",
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
    return CreateComponentRequestDataAttributesComponentsItems.attributeTypeMap;
  }

  public constructor() {}
}
