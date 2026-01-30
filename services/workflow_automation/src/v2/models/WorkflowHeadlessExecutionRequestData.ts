import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WorkflowHeadlessExecutionRequestAttributes } from "./WorkflowHeadlessExecutionRequestAttributes";
import { WorkflowHeadlessExecutionRequestType } from "./WorkflowHeadlessExecutionRequestType";

export class WorkflowHeadlessExecutionRequestData {
  "attributes": WorkflowHeadlessExecutionRequestAttributes;
  /**
   * The ID of the parent workflow
   */
  "id": string;
  /**
   * The type for workflow headless execution request
   */
  "type": WorkflowHeadlessExecutionRequestType;
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
    attributes: {
      baseName: "attributes",
      type: "WorkflowHeadlessExecutionRequestAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "WorkflowHeadlessExecutionRequestType",
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
    return WorkflowHeadlessExecutionRequestData.attributeTypeMap;
  }

  public constructor() {}
}
