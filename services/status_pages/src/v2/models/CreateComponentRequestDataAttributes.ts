import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateComponentRequestDataAttributesComponentsItems } from "./CreateComponentRequestDataAttributesComponentsItems";
import { CreateComponentRequestDataAttributesType } from "./CreateComponentRequestDataAttributesType";

export class CreateComponentRequestDataAttributes {
  "components"?: Array<CreateComponentRequestDataAttributesComponentsItems>;
  "name": string;
  "position": number;
  "type": CreateComponentRequestDataAttributesType;
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
    components: {
      baseName: "components",
      type: "Array<CreateComponentRequestDataAttributesComponentsItems>",
    },
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
      type: "CreateComponentRequestDataAttributesType",
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
    return CreateComponentRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
