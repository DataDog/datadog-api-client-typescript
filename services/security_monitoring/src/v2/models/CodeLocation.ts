import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Code vulnerability location.
 */
export class CodeLocation {
  /**
   * Vulnerability location file path.
   */
  "filePath"?: string;
  /**
   * Vulnerability extracted location.
   */
  "location": string;
  /**
   * Vulnerability location method.
   */
  "method"?: string;
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
    filePath: {
      baseName: "file_path",
      type: "string",
    },
    location: {
      baseName: "location",
      type: "string",
      required: true,
    },
    method: {
      baseName: "method",
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
    return CodeLocation.attributeTypeMap;
  }

  public constructor() {}
}
