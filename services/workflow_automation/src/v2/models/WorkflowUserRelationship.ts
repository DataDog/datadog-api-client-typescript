import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WorkflowUserRelationshipData } from "./WorkflowUserRelationshipData";

/**
 * The definition of `WorkflowUserRelationship` object.
 */
export class WorkflowUserRelationship {
  /**
   * The definition of `WorkflowUserRelationshipData` object.
   */
  "data"?: WorkflowUserRelationshipData;
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
      type: "WorkflowUserRelationshipData",
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
    return WorkflowUserRelationship.attributeTypeMap;
  }

  public constructor() {}
}
