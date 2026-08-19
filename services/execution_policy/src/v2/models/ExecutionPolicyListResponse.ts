import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExecutionPolicyListResponseMeta } from "./ExecutionPolicyListResponseMeta";
import { ExecutionPolicyResponseData } from "./ExecutionPolicyResponseData";

/**
 * Response object that includes a list of execution policies.
 */
export class ExecutionPolicyListResponse {
  /**
   * The execution policies.
   */
  "data": Array<ExecutionPolicyResponseData>;
  /**
   * Pagination metadata for the list of execution policies.
   */
  "meta": ExecutionPolicyListResponseMeta;
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
      type: "Array<ExecutionPolicyResponseData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "ExecutionPolicyListResponseMeta",
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
    return ExecutionPolicyListResponse.attributeTypeMap;
  }

  public constructor() {}
}
