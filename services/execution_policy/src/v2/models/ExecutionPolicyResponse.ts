import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExecutionPolicyResponseData } from "./ExecutionPolicyResponseData";

/**
 * Response object that includes a single execution policy.
 */
export class ExecutionPolicyResponse {
  /**
   * Object for a single execution policy.
   */
  "data": ExecutionPolicyResponseData;
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
      type: "ExecutionPolicyResponseData",
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
    return ExecutionPolicyResponse.attributeTypeMap;
  }

  public constructor() {}
}
