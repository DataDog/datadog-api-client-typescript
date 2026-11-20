import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RemediationGroupFindingsBySeverity } from "./RemediationGroupFindingsBySeverity";

/**
 * Counts of the group's open findings. The counts include every finding in the group, including findings that
 * don't match `filter[query]`.
 */
export class RemediationGroupFindings {
  /**
   * Number of the group's findings for each value of their `@severity` attribute. The response includes every
   * level, including levels with a count of zero.
   */
  "bySeverity": RemediationGroupFindingsBySeverity;
  /**
   * Number of open findings in the group.
   */
  "total": number;
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
    bySeverity: {
      baseName: "by_severity",
      type: "RemediationGroupFindingsBySeverity",
      required: true,
    },
    total: {
      baseName: "total",
      type: "number",
      required: true,
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
    return RemediationGroupFindings.attributeTypeMap;
  }

  public constructor() {}
}
