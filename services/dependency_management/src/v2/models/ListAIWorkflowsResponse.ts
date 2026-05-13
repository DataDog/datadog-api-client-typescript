import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AIWorkflowData } from "./AIWorkflowData";
import { AIWorkflowListMeta } from "./AIWorkflowListMeta";

/**
 * Response containing a list of AI workflows.
 */
export class ListAIWorkflowsResponse {
  /**
   * List of AI workflow resources.
   */
  "data": Array<AIWorkflowData>;
  /**
   * Metadata for the list AI workflows response.
   */
  "meta": AIWorkflowListMeta;
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
      type: "Array<AIWorkflowData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "AIWorkflowListMeta",
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
    return ListAIWorkflowsResponse.attributeTypeMap;
  }

  public constructor() {}
}
