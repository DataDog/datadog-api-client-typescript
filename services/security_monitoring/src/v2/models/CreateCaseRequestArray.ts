import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateCaseRequestData } from "./CreateCaseRequestData";

/**
 * List of requests to create cases for security findings.
 */
export class CreateCaseRequestArray {
  "data": Array<CreateCaseRequestData>;
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
      type: "Array<CreateCaseRequestData>",
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
    return CreateCaseRequestArray.attributeTypeMap;
  }

  public constructor() {}
}
