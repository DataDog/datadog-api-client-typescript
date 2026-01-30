import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WorkflowHeadlessExecutionResponseData } from "./WorkflowHeadlessExecutionResponseData";

export class WorkflowHeadlessExecutionResponse {
  "data": WorkflowHeadlessExecutionResponseData;
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
      type: "WorkflowHeadlessExecutionResponseData",
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
    return WorkflowHeadlessExecutionResponse.attributeTypeMap;
  }

  public constructor() {}
}
