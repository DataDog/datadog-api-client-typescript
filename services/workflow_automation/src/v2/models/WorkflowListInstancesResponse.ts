import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WorkflowInstanceListItem } from "./WorkflowInstanceListItem";
import { WorkflowListInstancesResponseMeta } from "./WorkflowListInstancesResponseMeta";

/**
 * Response returned when listing workflow instances.
 */
export class WorkflowListInstancesResponse {
  /**
   * A list of workflow instances.
   */
  "data"?: Array<WorkflowInstanceListItem>;
  /**
   * Metadata about the instances list
   */
  "meta"?: WorkflowListInstancesResponseMeta;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: { [key: string]: any; } };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "Array<WorkflowInstanceListItem>",
    },
    meta: {
      baseName: "meta",
      type: "WorkflowListInstancesResponseMeta",
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
    return WorkflowListInstancesResponse.attributeTypeMap;
  }

  public constructor() {}
}
