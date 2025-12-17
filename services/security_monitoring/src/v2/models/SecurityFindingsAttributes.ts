import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The JSON object containing all attributes of the security finding.
 */
export class SecurityFindingsAttributes {
  /**
   * The custom attributes of the security finding.
   */
  "attributes"?: { [key: string]: any };
  /**
   * List of tags associated with the security finding.
   */
  "tags"?: Array<string>;
  /**
   * The Unix timestamp at which the detection changed for the resource. Same value as @detection_changed_at.
   */
  "timestamp"?: number;
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
    attributes: {
      baseName: "attributes",
      type: "{ [key: string]: any; }",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    timestamp: {
      baseName: "timestamp",
      type: "number",
      format: "int64",
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
    return SecurityFindingsAttributes.attributeTypeMap;
  }

  public constructor() {}
}
