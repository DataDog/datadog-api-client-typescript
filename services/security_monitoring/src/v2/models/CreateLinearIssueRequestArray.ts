import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateLinearIssueRequestData } from "./CreateLinearIssueRequestData";

/**
 * List of requests to create Linear issues for security findings.
 */
export class CreateLinearIssueRequestArray {
  /**
   * Array of Linear issue creation request data objects.
   */
  "data": Array<CreateLinearIssueRequestData>;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "Array<CreateLinearIssueRequestData>",
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
    return CreateLinearIssueRequestArray.attributeTypeMap;
  }

  public constructor() {}
}
