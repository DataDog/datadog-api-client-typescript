import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Schema for a Workflow-based trigger.
 */
export class WorkflowTriggerWrapper {
  /**
   * A list of steps that run first after a trigger fires.
   */
  "startStepNames"?: Array<string>;
  /**
   * Trigger a workflow from the Datadog UI. Only required if no other trigger exists.
   */
  "workflowTrigger": any;
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
    startStepNames: {
      baseName: "startStepNames",
      type: "Array<string>",
    },
    workflowTrigger: {
      baseName: "workflowTrigger",
      type: "any",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return WorkflowTriggerWrapper.attributeTypeMap;
  }

  public constructor() {}
}
