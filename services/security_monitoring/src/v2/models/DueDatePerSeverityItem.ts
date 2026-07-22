import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DueDateSeverity } from "./DueDateSeverity";

/**
 * A mapping of a severity level to the number of days until a finding is due.
 */
export class DueDatePerSeverityItem {
  /**
   * The number of days from the reference point until the finding is due.
   */
  "dueInDays": number;
  /**
   * A severity level used to configure due date thresholds.
   */
  "severity": DueDateSeverity;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    dueInDays: {
      baseName: "due_in_days",
      type: "number",
      required: true,
      format: "int64",
    },
    severity: {
      baseName: "severity",
      type: "DueDateSeverity",
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
    return DueDatePerSeverityItem.attributeTypeMap;
  }

  public constructor() {}
}
