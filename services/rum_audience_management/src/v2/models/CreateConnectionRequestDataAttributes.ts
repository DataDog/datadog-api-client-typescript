import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateConnectionRequestDataAttributesFieldsItems } from "./CreateConnectionRequestDataAttributesFieldsItems";

export class CreateConnectionRequestDataAttributes {
  "fields"?: Array<CreateConnectionRequestDataAttributesFieldsItems>;
  "joinAttribute": string;
  "joinType": string;
  "metadata"?: { [key: string]: string };
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
    fields: {
      baseName: "fields",
      type: "Array<CreateConnectionRequestDataAttributesFieldsItems>",
    },
    joinAttribute: {
      baseName: "join_attribute",
      type: "string",
      required: true,
    },
    joinType: {
      baseName: "join_type",
      type: "string",
      required: true,
    },
    metadata: {
      baseName: "metadata",
      type: "{ [key: string]: string; }",
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
    return CreateConnectionRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
