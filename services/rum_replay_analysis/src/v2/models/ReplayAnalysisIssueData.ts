import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ReplayAnalysisIssueDataAttributes } from "./ReplayAnalysisIssueDataAttributes";
import { ReplayAnalysisIssueDataType } from "./ReplayAnalysisIssueDataType";

/**
 * Data object representing a RUM replay analysis issue.
 */
export class ReplayAnalysisIssueData {
  /**
   * Attributes of a RUM replay analysis issue.
   */
  "attributes": ReplayAnalysisIssueDataAttributes;
  /**
   * Unique identifier of the issue.
   */
  "id": string;
  /**
   * RUM replay analysis issue resource type.
   */
  "type": ReplayAnalysisIssueDataType;
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
      type: "ReplayAnalysisIssueDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ReplayAnalysisIssueDataType",
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
    return ReplayAnalysisIssueData.attributeTypeMap;
  }

  public constructor() {}
}
