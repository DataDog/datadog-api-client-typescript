import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ListWorkflowsResponseMetaPage } from "./ListWorkflowsResponseMetaPage";

/**
 * Metadata about the list workflows response.
 */
export class ListWorkflowsResponseMeta {
  /**
   * Page information for the list workflows response.
   */
  "page"?: ListWorkflowsResponseMetaPage;
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
    page: {
      baseName: "page",
      type: "ListWorkflowsResponseMetaPage",
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
    return ListWorkflowsResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
