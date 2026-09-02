import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WorkflowRunAsInitiatorType } from "./WorkflowRunAsInitiatorType";

/**
 * Run the workflow as the user who initiates the execution.
 */
export class WorkflowRunAsInitiator {
  /**
   * The initiator run-as type.
   */
  "type": WorkflowRunAsInitiatorType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    type: {
      baseName: "type",
      type: "WorkflowRunAsInitiatorType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return WorkflowRunAsInitiator.attributeTypeMap;
  }

  public constructor() {}
}
