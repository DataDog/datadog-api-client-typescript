import { AttributeTypeMap } from "@datadog/datadog-api-client-core";

/**
 * Hash file specified by the field attribute
 */
export class CloudWorkloadSecurityAgentRuleActionHash {
  /**
   * The field of the hash action
   */
  "field"?: string;
  /**
   * The maximum size of the files to hash, in bytes.
   */
  "maxFileSize"?: number;
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
    field: {
      baseName: "field",
      type: "string",
    },
    maxFileSize: {
      baseName: "max_file_size",
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
    return CloudWorkloadSecurityAgentRuleActionHash.attributeTypeMap;
  }

  public constructor() {}
}
