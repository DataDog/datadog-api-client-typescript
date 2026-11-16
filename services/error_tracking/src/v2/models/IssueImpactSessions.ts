import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueImpactSession } from "./IssueImpactSession";

/**
 * RUM sessions where the issue occurred.
 */
export class IssueImpactSessions {
  /**
   * Number of distinct sessions where the issue occurred in the time window.
   */
  "distinctCount": number;
  /**
   * Up to five sessions with the most errors, most affected first.
   */
  "top": Array<IssueImpactSession>;
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
      type: "Array<IssueImpactSession>",
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
    return IssueImpactSessions.attributeTypeMap;
  }

  public constructor() {}
}
