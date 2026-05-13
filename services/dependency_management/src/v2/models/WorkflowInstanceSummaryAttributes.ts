import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Entity } from "./Entity";

/**
 * Attributes of a workflow instance summary.
 */
export class WorkflowInstanceSummaryAttributes {
  /**
   * Timestamp when the workflow instance was created.
   */
  "createdAt": Date;
  /**
   * The entities being processed by this workflow instance.
   */
  "entities": Array<Entity>;
  "status": any;
  /**
   * A human-readable display name for the current status.
   */
  "statusDisplay": string;
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    entities: {
      baseName: "entities",
      type: "Array<Entity>",
      required: true,
    },
    status: {
      baseName: "status",
      type: "any",
      required: true,
    },
    statusDisplay: {
      baseName: "status_display",
      type: "string",
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
    return WorkflowInstanceSummaryAttributes.attributeTypeMap;
  }

  public constructor() {}
}
