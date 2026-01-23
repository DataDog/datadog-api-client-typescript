import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Dynamic fields associated with the handle
 */
export class IncidentHandleAttributesFields {
  /**
   * Severity levels associated with the handle
   */
  "severity"?: Array<string>;
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
    severity: {
      baseName: "severity",
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
    return IncidentHandleAttributesFields.attributeTypeMap;
  }

  public constructor() {}
}
