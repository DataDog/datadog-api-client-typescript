import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Issue } from "./Issue";
import { IssueIncluded } from "./IssueIncluded";

/**
 * Response containing error tracking issue data.
 */
export class IssueResponse {
  /**
   * The issue matching the request.
   */
  "data"?: Issue;
  /**
   * Array of resources related to the issue.
   */
  "included"?: Array<IssueIncluded>;
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
      type: "Issue",
    },
    included: {
      baseName: "included",
      type: "Array<IssueIncluded>",
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
    return IssueResponse.attributeTypeMap;
  }

  public constructor() {}
}
