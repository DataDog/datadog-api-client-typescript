import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Advisory.
 */
export class Advisory {
  /**
   * Advisory base severity.
   */
  "baseSeverity": string;
  /**
   * Advisory id.
   */
  "id": string;
  /**
   * Advisory Datadog severity.
   */
  "severity"?: string;
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
    baseSeverity: {
      baseName: "base_severity",
      type: "string",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    severity: {
      baseName: "severity",
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
    return Advisory.attributeTypeMap;
  }

  public constructor() {}
}
