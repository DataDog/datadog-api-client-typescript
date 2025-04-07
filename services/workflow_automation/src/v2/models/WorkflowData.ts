import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WorkflowDataAttributes } from "./WorkflowDataAttributes";
import { WorkflowDataRelationships } from "./WorkflowDataRelationships";
import { WorkflowDataType } from "./WorkflowDataType";

/**
 * Data related to the workflow.
 */
export class WorkflowData {
  /**
   * The definition of `WorkflowDataAttributes` object.
   */
  "attributes": WorkflowDataAttributes;
  /**
   * The workflow identifier
   */
  "id"?: string;
  /**
   * The definition of `WorkflowDataRelationships` object.
   */
  "relationships"?: WorkflowDataRelationships;
  /**
   * The definition of `WorkflowDataType` object.
   */
  "type": WorkflowDataType;
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
      type: "WorkflowDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "WorkflowDataRelationships",
    },
    type: {
      baseName: "type",
      type: "WorkflowDataType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return WorkflowData.attributeTypeMap;
  }

  public constructor() {}
}
