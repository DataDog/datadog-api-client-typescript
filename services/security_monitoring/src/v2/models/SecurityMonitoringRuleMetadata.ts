import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Metadata associated with the rule.
 */
export class SecurityMonitoringRuleMetadata {
  /**
   * Entities associated with the rule, or null when metadata is not requested.
   */
  "entities"?: Array<any>;
  /**
   * Sources associated with the rule, or null when metadata is not requested.
   */
  "sources"?: Array<string>;
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
    entities: {
      baseName: "entities",
      type: "Array<any>",
    },
    sources: {
      baseName: "sources",
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
    return SecurityMonitoringRuleMetadata.attributeTypeMap;
  }

  public constructor() {}
}
