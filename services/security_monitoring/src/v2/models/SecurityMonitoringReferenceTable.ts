import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Reference tables used in the queries.
 */
export class SecurityMonitoringReferenceTable {
  /**
   * Whether to include or exclude the matched values.
   */
  "checkPresence"?: boolean;
  /**
   * The name of the column in the reference table.
   */
  "columnName"?: string;
  /**
   * The field in the log to match against the reference table.
   */
  "logFieldPath"?: string;
  /**
   * The name of the query to apply the reference table to.
   */
  "ruleQueryName"?: string;
  /**
   * The name of the reference table.
   */
  "tableName"?: string;
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
    checkPresence: {
      baseName: "checkPresence",
      type: "boolean",
    },
    columnName: {
      baseName: "columnName",
      type: "string",
    },
    logFieldPath: {
      baseName: "logFieldPath",
      type: "string",
    },
    ruleQueryName: {
      baseName: "ruleQueryName",
      type: "string",
    },
    tableName: {
      baseName: "tableName",
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
    return SecurityMonitoringReferenceTable.attributeTypeMap;
  }

  public constructor() {}
}
