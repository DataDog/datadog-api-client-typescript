import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of `UrlParamUpdate` object.
 */
export class UrlParamUpdate {
  /**
   * Should the header be deleted.
   */
  "deleted"?: boolean;
  /**
   * Name for tokens.
   */
  "name": string;
  /**
   * The `UrlParamUpdate` `value`.
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
    return UrlParamUpdate.attributeTypeMap;
  }

  public constructor() {}
}
