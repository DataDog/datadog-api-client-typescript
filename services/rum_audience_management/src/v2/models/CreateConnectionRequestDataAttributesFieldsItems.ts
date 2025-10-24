import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class CreateConnectionRequestDataAttributesFieldsItems {
  "description"?: string;
  "displayName"?: string;
  "groups"?: Array<string>;
  "id": string;
  "sourceName": string;
  "type": string;
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
    description: {
      baseName: "description",
      type: "string",
    },
    displayName: {
      baseName: "display_name",
      type: "string",
    },
    groups: {
      baseName: "groups",
      type: "Array<string>",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    sourceName: {
      baseName: "source_name",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
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
    return CreateConnectionRequestDataAttributesFieldsItems.attributeTypeMap;
  }

  public constructor() {}
}
