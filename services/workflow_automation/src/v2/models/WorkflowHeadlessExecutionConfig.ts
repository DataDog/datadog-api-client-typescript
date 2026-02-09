import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WorkflowHeadlessExecutionConnection } from "./WorkflowHeadlessExecutionConnection";

export class WorkflowHeadlessExecutionConfig {
  /**
   * List of connections to use for the workflow execution
   */
  "connections": Array<WorkflowHeadlessExecutionConnection>;
  /**
   * Input parameters for the workflow execution
   */
  "inputs": { [key: string]: any };
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
    connections: {
      baseName: "connections",
      type: "Array<WorkflowHeadlessExecutionConnection>",
      required: true,
    },
    inputs: {
      baseName: "inputs",
      type: "{ [key: string]: any; }",
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
    return WorkflowHeadlessExecutionConfig.attributeTypeMap;
  }

  public constructor() {}
}
