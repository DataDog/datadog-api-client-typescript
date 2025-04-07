import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a partial application key.
 */
export class PartialApplicationKeyAttributes {
  /**
   * Creation date of the application key.
   */
  "createdAt"?: string;
  /**
   * The last four characters of the application key.
   */
  "last4"?: string;
  /**
   * Name of the application key.
   */
  "name"?: string;
  /**
   * Array of scopes to grant the application key.
   */
  "scopes"?: Array<string>;
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
    createdAt: {
      baseName: "created_at",
      type: "string",
    },
    last4: {
      baseName: "last4",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    scopes: {
      baseName: "scopes",
      type: "Array<string>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return PartialApplicationKeyAttributes.attributeTypeMap;
  }

  public constructor() {}
}
