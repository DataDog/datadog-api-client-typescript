import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Creator of the object.
 */
export class Creator {
  /**
   * Email of the creator.
   */
  "email"?: string;
  /**
   * Handle of the creator.
   */
  "handle"?: string;
  /**
   * Name of the creator.
   */
  "name"?: string;
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
    email: {
      baseName: "email",
      type: "string",
    },
    handle: {
      baseName: "handle",
      type: "string",
    },
    name: {
      baseName: "name",
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
    return Creator.attributeTypeMap;
  }

  public constructor() {}
}
