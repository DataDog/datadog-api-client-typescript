import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Optional metadata associated to the response.
 */
export class SecurityFilterMeta {
  /**
   * A warning message.
   */
  "warning"?: string;
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
    warning: {
      baseName: "warning",
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
    return SecurityFilterMeta.attributeTypeMap;
  }

  public constructor() {}
}
