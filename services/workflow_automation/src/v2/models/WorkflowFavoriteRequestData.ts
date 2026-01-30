import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WorkflowFavoriteRequestAttributes } from "./WorkflowFavoriteRequestAttributes";
import { WorkflowFavoriteRequestType } from "./WorkflowFavoriteRequestType";

export class WorkflowFavoriteRequestData {
  "attributes": WorkflowFavoriteRequestAttributes;
  /**
   * The type for workflow favorite request
   */
  "type": WorkflowFavoriteRequestType;
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
      type: "WorkflowFavoriteRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "WorkflowFavoriteRequestType",
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
    return WorkflowFavoriteRequestData.attributeTypeMap;
  }

  public constructor() {}
}
