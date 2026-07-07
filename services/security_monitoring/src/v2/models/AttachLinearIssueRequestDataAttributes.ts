import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of the Linear issue to attach security findings to.
 */
export class AttachLinearIssueRequestDataAttributes {
  /**
   * URL of the Linear issue to attach security findings to.
   */
  "linearIssueUrl": string;
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
    linearIssueUrl: {
      baseName: "linear_issue_url",
      type: "string",
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
    return AttachLinearIssueRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
