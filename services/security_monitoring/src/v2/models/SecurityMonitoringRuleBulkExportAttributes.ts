import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for bulk exporting security monitoring rules.
 */
export class SecurityMonitoringRuleBulkExportAttributes {
  /**
   * List of rule IDs to export. Each rule will be included in the resulting ZIP file
   * as a separate JSON file.
   */
  "ruleIds": Array<string>;
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
    ruleIds: {
      baseName: "ruleIds",
      type: "Array<string>",
      required: true,
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
    return SecurityMonitoringRuleBulkExportAttributes.attributeTypeMap;
  }

  public constructor() {}
}
