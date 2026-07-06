import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AttachLinearIssueRequestData } from "./AttachLinearIssueRequestData";

/**
 * Request for attaching security findings to a Linear issue.
 */
export class AttachLinearIssueRequest {
  /**
   * Data of the Linear issue to attach security findings to.
   */
  "data": AttachLinearIssueRequestData;
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
      type: "AttachLinearIssueRequestData",
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
    return AttachLinearIssueRequest.attributeTypeMap;
  }

  public constructor() {}
}
