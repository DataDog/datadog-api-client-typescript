import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssuePullRequestAttributes } from "./IssuePullRequestAttributes";
import { IssuePullRequestType } from "./IssuePullRequestType";

/**
 * A pull request linked to an issue.
 */
export class IssuePullRequest {
  /**
   * Object containing the information of a pull request linked to an issue.
   */
  "attributes": IssuePullRequestAttributes;
  /**
   * Pull request link identifier.
   */
  "id": string;
  /**
   * Type of the object.
   */
  "type": IssuePullRequestType;
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
      type: "IssuePullRequestAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IssuePullRequestType",
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
    return IssuePullRequest.attributeTypeMap;
  }

  public constructor() {}
}
