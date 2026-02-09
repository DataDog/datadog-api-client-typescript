import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WorkflowHeadlessExecutionConfig } from "./WorkflowHeadlessExecutionConfig";

export class WorkflowHeadlessExecutionRequestAttributes {
  "config": WorkflowHeadlessExecutionConfig;
  /**
   * The ID of the workflow template to execute
   */
  "templateId": string;
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
    config: {
      baseName: "config",
      type: "WorkflowHeadlessExecutionConfig",
      required: true,
    },
    templateId: {
      baseName: "template_id",
      type: "string",
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
    return WorkflowHeadlessExecutionRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
