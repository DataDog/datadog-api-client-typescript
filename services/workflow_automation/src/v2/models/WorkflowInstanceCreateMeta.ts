import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Additional information for creating a workflow instance.
 */
export class WorkflowInstanceCreateMeta {
  /**
   * The input parameters to the workflow.
   */
  "payload"?: any;
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
    payload: {
      baseName: "payload",
      type: "any",
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
    return WorkflowInstanceCreateMeta.attributeTypeMap;
  }

  public constructor() {}
}
