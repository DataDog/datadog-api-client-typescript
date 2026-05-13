import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WorkflowInstanceSummaryAttributes } from "./WorkflowInstanceSummaryAttributes";
import { WorkflowInstanceSummaryDataType } from "./WorkflowInstanceSummaryDataType";

/**
 * A summary of a single workflow instance.
 */
export class WorkflowInstanceSummaryData {
  /**
   * Attributes of a workflow instance summary.
   */
  "attributes": WorkflowInstanceSummaryAttributes;
  /**
   * The unique identifier of the workflow instance.
   */
  "id": string;
  /**
   * The resource type for workflow instances.
   */
  "type": WorkflowInstanceSummaryDataType;
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
      type: "WorkflowInstanceSummaryAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "WorkflowInstanceSummaryDataType",
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
    return WorkflowInstanceSummaryData.attributeTypeMap;
  }

  public constructor() {}
}
