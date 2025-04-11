import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Data about the created workflow instance.
 */
export class WorkflowInstanceCreateResponseData {
  /**
   * The ID of the workflow execution. It can be used to fetch the execution status.
   */
  "id"?: string;
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
    id: {
      baseName: "id",
      type: "string",
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
    return WorkflowInstanceCreateResponseData.attributeTypeMap;
  }

  public constructor() {}
}
