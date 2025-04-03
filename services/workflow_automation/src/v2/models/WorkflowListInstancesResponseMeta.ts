import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WorkflowListInstancesResponseMetaPage } from "./WorkflowListInstancesResponseMetaPage";

/**
 * Metadata about the instances list
 */
export class WorkflowListInstancesResponseMeta {
  /**
   * Page information for the list instances response.
   */
  "page"?: WorkflowListInstancesResponseMetaPage;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: { [key: string]: any } };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    page: {
      baseName: "page",
      type: "WorkflowListInstancesResponseMetaPage",
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
    return WorkflowListInstancesResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
