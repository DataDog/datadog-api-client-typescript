import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WorkflowRunAsOwnerType } from "./WorkflowRunAsOwnerType";

/**
 * Run the workflow as its owner.
 */
export class WorkflowRunAsOwner {
  /**
   * The owner run-as type.
   */
  "type": WorkflowRunAsOwnerType;
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
      type: "WorkflowRunAsOwnerType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return WorkflowRunAsOwner.attributeTypeMap;
  }

  public constructor() {}
}
