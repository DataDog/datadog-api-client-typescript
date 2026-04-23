import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A Git user (author or committer).
 */
export class SyntheticsTestResultGitUser {
  /**
   * Timestamp of the commit action for this user.
   */
  "date"?: string;
  /**
   * Email address of the Git user.
   */
  "email"?: string;
  /**
   * Name of the Git user.
   */
  "name"?: string;
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
    date: {
      baseName: "date",
      type: "string",
    },
    email: {
      baseName: "email",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
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
    return SyntheticsTestResultGitUser.attributeTypeMap;
  }

  public constructor() {}
}
