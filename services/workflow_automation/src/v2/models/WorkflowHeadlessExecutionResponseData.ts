import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WorkflowHeadlessExecutionResponseAttributes } from "./WorkflowHeadlessExecutionResponseAttributes";
import { WorkflowHeadlessExecutionResponseType } from "./WorkflowHeadlessExecutionResponseType";

export class WorkflowHeadlessExecutionResponseData {
  "attributes": WorkflowHeadlessExecutionResponseAttributes;
  /**
   * The ID of the parent workflow
   */
  "id": string;
  /**
   * The type for workflow headless execution response
   */
  "type": WorkflowHeadlessExecutionResponseType;
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
      type: "WorkflowHeadlessExecutionResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "WorkflowHeadlessExecutionResponseType",
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
    return WorkflowHeadlessExecutionResponseData.attributeTypeMap;
  }

  public constructor() {}
}
