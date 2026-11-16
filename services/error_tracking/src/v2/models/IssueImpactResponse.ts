import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueImpact } from "./IssueImpact";

/**
 * Response containing the impact of an error tracking issue.
 */
export class IssueImpactResponse {
  /**
   * The impact of an issue over the requested time window.
   */
  "data": IssueImpact;
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
    data: {
      baseName: "data",
      type: "IssueImpact",
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
    return IssueImpactResponse.attributeTypeMap;
  }

  public constructor() {}
}
