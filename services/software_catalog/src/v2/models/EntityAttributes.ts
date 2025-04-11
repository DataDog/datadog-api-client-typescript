import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Entity attributes.
 */
export class EntityAttributes {
  /**
   * The API version.
   */
  "apiVersion"?: string;
  /**
   * The description.
   */
  "description"?: string;
  /**
   * The display name.
   */
  "displayName"?: string;
  /**
   * The kind.
   */
  "kind"?: string;
  /**
   * The name.
   */
  "name"?: string;
  /**
   * The namespace.
   */
  "namespace"?: string;
  /**
   * The owner.
   */
  "owner"?: string;
  /**
   * The tags.
   */
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
    return EntityAttributes.attributeTypeMap;
  }

  public constructor() {}
}
