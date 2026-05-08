import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ReplayAnalysisIssueSessionDataAttributes } from "./ReplayAnalysisIssueSessionDataAttributes";
import { ReplayAnalysisIssueSessionDataType } from "./ReplayAnalysisIssueSessionDataType";

/**
 * Data object representing a session related to a RUM replay analysis issue.
 */
export class ReplayAnalysisIssueSessionData {
  /**
   * Attributes of a session related to a RUM replay analysis issue.
   */
  "attributes": ReplayAnalysisIssueSessionDataAttributes;
  /**
   * Unique identifier of the session.
   */
  "id": string;
  /**
   * RUM replay analysis issue session resource type.
   */
  "type": ReplayAnalysisIssueSessionDataType;
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
      type: "ReplayAnalysisIssueSessionDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ReplayAnalysisIssueSessionDataType",
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
    return ReplayAnalysisIssueSessionData.attributeTypeMap;
  }

  public constructor() {}
}
