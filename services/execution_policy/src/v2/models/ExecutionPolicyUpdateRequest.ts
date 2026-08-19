import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExecutionPolicyUpdateRequestData } from "./ExecutionPolicyUpdateRequestData";

/**
 * Request object that includes the execution policy to update.
 */
export class ExecutionPolicyUpdateRequest {
  /**
   * Object for a single execution policy.
   */
  "data": ExecutionPolicyUpdateRequestData;
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
      type: "ExecutionPolicyUpdateRequestData",
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
    return ExecutionPolicyUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
