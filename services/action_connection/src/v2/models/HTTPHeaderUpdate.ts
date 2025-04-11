import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of `HTTPHeaderUpdate` object.
 */
export class HTTPHeaderUpdate {
  /**
   * Should the header be deleted.
   */
  "deleted"?: boolean;
  /**
   * The `HTTPHeaderUpdate` `name`.
   */
  "name": string;
  /**
   * The `HTTPHeaderUpdate` `value`.
   */
  "value"?: string;
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
    deleted: {
      baseName: "deleted",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    value: {
      baseName: "value",
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
    return HTTPHeaderUpdate.attributeTypeMap;
  }

  public constructor() {}
}
