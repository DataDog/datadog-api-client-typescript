import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExecutionPolicyListResponsePage } from "./ExecutionPolicyListResponsePage";

/**
 * Pagination metadata for the list of execution policies.
 */
export class ExecutionPolicyListResponseMeta {
  /**
   * Pagination details.
   */
  "page": ExecutionPolicyListResponsePage;
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
    page: {
      baseName: "page",
      type: "ExecutionPolicyListResponsePage",
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
    return ExecutionPolicyListResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
