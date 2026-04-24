import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsTestResultRelationships } from "./SyntheticsTestResultRelationships";
import { SyntheticsTestResultSummaryAttributes } from "./SyntheticsTestResultSummaryAttributes";
import { SyntheticsTestResultSummaryType } from "./SyntheticsTestResultSummaryType";

/**
 * Wrapper object for a Synthetic test result summary.
 */
export class SyntheticsTestResultSummaryData {
  /**
   * Attributes of a Synthetic test result summary.
   */
  "attributes"?: SyntheticsTestResultSummaryAttributes;
  /**
   * The result ID.
   */
  "id"?: string;
  /**
   * Relationships for a Synthetic test result.
   */
  "relationships"?: SyntheticsTestResultRelationships;
  /**
   * Type of the Synthetic test result summary resource, `result_summary`.
   */
  "type"?: SyntheticsTestResultSummaryType;
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
      type: "SyntheticsTestResultSummaryAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "SyntheticsTestResultRelationships",
    },
    type: {
      baseName: "type",
      type: "SyntheticsTestResultSummaryType",
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
    return SyntheticsTestResultSummaryData.attributeTypeMap;
  }

  public constructor() {}
}
