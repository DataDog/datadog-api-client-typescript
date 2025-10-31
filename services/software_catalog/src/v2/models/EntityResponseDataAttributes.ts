import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class EntityResponseDataAttributes {
  "apiVersion"?: string;
  "description"?: string;
  "displayName"?: string;
  "kind"?: string;
  "name"?: string;
  "namespace"?: string;
  "owner"?: string;
  "properties"?: { [key: string]: any };
  "tags"?: Array<string>;
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
    apiVersion: {
      baseName: "apiVersion",
      type: "string",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    displayName: {
      baseName: "displayName",
      type: "string",
    },
    kind: {
      baseName: "kind",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    namespace: {
      baseName: "namespace",
      type: "string",
    },
    owner: {
      baseName: "owner",
      type: "string",
    },
    properties: {
      baseName: "properties",
      type: "{ [key: string]: any; }",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
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
    return EntityResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
