import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Response for bulk deleting security monitoring rules.
 */
export class SecurityMonitoringRuleBulkDeleteResponse {
  /**
   * List of successfully deleted rule IDs.
   */
  "deletedRules"?: Array<string>;
  /**
   * List of rule IDs that could not be deleted.
   */
  "failedRules"?: Array<string>;
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
    deletedRules: {
      baseName: "deletedRules",
      type: "Array<string>",
    },
    failedRules: {
      baseName: "failedRules",
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
    return SecurityMonitoringRuleBulkDeleteResponse.attributeTypeMap;
  }

  public constructor() {}
}
