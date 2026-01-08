import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateDegradationRequestDataAttributesComponentsAffectedItems } from "./CreateDegradationRequestDataAttributesComponentsAffectedItems";

export class CreateDegradationRequestDataAttributes {
  "componentsAffected": Array<CreateDegradationRequestDataAttributesComponentsAffectedItems>;
  "description"?: string;
  "status": string;
  "title": string;
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
    componentsAffected: {
      baseName: "components_affected",
      type: "Array<CreateDegradationRequestDataAttributesComponentsAffectedItems>",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "string",
      required: true,
    },
    title: {
      baseName: "title",
      type: "string",
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
    return CreateDegradationRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
