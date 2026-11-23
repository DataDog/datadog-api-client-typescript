import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Metadata reporting that the cost data lacks the unused costs of some commitments, as with Azure exports
 * scoped below the billing profile. Utilization is then overstated, and realized savings and effective
 * savings rate are upper bounds. Omitted when the unused costs are available.
 */
export class CommitmentsUnusedCostMeta {
  /**
   * Whether the cost data lacks the unused costs of some commitments.
   */
  "unusedCostUnavailable"?: boolean;
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
    unusedCostUnavailable: {
      baseName: "unused_cost_unavailable",
      type: "boolean",
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
    return CommitmentsUnusedCostMeta.attributeTypeMap;
  }

  public constructor() {}
}
