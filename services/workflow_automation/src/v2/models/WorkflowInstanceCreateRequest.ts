import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WorkflowInstanceCreateMeta } from "./WorkflowInstanceCreateMeta";

/**
 * Request used to create a workflow instance.
 */
export class WorkflowInstanceCreateRequest {
  /**
   * Additional information for creating a workflow instance.
   */
  "meta"?: WorkflowInstanceCreateMeta;
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
    meta: {
      baseName: "meta",
      type: "WorkflowInstanceCreateMeta",
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
    return WorkflowInstanceCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
