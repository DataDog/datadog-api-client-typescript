import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ListWorkflowsResponseMeta } from "./ListWorkflowsResponseMeta";
import { WorkflowListItem } from "./WorkflowListItem";

/**
 * The response object after listing workflows.
 */
export class ListWorkflowsResponse {
  /**
   * A list of workflows.
   */
  "data"?: Array<WorkflowListItem>;
  /**
   * Metadata about the list workflows response.
   */
  "meta"?: ListWorkflowsResponseMeta;
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
    data: {
      baseName: "data",
      type: "Array<WorkflowListItem>",
    },
    meta: {
      baseName: "meta",
      type: "ListWorkflowsResponseMeta",
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
    return ListWorkflowsResponse.attributeTypeMap;
  }

  public constructor() {}
}
