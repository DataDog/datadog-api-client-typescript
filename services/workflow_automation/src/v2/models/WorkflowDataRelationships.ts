import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WorkflowUserRelationship } from "./WorkflowUserRelationship";

/**
 * The definition of `WorkflowDataRelationships` object.
 */
export class WorkflowDataRelationships {
  /**
   * The definition of `WorkflowUserRelationship` object.
   */
  "creator"?: WorkflowUserRelationship;
  /**
   * The definition of `WorkflowUserRelationship` object.
   */
  "owner"?: WorkflowUserRelationship;
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
    creator: {
      baseName: "creator",
      type: "WorkflowUserRelationship",
    },
    owner: {
      baseName: "owner",
      type: "WorkflowUserRelationship",
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
    return WorkflowDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
