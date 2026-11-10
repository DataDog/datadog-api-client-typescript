import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssuePullRequestType } from "./IssuePullRequestType";

/**
 * A pull request linked to the issue.
 */
export class IssuePullRequestReference {
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
    return IssuePullRequestReference.attributeTypeMap;
  }

  public constructor() {}
}
