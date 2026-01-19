import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { JiraAccountData } from "./JiraAccountData";
import { JiraAccountsMeta } from "./JiraAccountsMeta";

/**
 * Response containing Jira accounts
 */
export class JiraAccountsResponse {
  /**
   * Array of Jira account data objects
   */
  "data": Array<JiraAccountData>;
  /**
   * Metadata for Jira accounts response
   */
  "meta"?: JiraAccountsMeta;
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
      type: "Array<JiraAccountData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "JiraAccountsMeta",
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
    return JiraAccountsResponse.attributeTypeMap;
  }

  public constructor() {}
}
