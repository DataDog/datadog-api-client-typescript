import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueImpactEndpoint } from "./IssueImpactEndpoint";

/**
 * Endpoints whose traces have the issue's errors, identified by each trace's root span.
 */
export class IssueImpactEndpoints {
  /**
   * Number of distinct endpoints affected by the issue in the time window.
   */
  "distinctCount": number;
  /**
   * Up to five endpoints with the most errors, most affected first.
   */
  "top": Array<IssueImpactEndpoint>;
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
    distinctCount: {
      baseName: "distinct_count",
      type: "number",
      required: true,
      format: "int64",
    },
    top: {
      baseName: "top",
      type: "Array<IssueImpactEndpoint>",
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
    return IssueImpactEndpoints.attributeTypeMap;
  }

  public constructor() {}
}
