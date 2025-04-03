import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Datadog API key.
 */
export class ApiKey {
  /**
   * Date of creation of the API key.
   */
  "created"?: string;
  /**
   * Datadog user handle that created the API key.
   */
  "createdBy"?: string;
  /**
   * API key.
   */
  "key"?: string;
  /**
   * Name of your API key.
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
    created: {
      baseName: "created",
      type: "string",
    },
    createdBy: {
      baseName: "created_by",
      type: "string",
    },
    key: {
      baseName: "key",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
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
    return ApiKey.attributeTypeMap;
  }

  public constructor() {}
}
