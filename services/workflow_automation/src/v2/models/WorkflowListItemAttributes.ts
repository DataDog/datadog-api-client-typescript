import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Spec } from "./Spec";

/**
 * Attributes of a workflow returned in a list response.
 */
export class WorkflowListItemAttributes {
  /**
   * When the workflow was created.
   */
  "createdAt"?: Date;
  /**
   * Description of the workflow.
   */
  "description"?: string;
  /**
   * Name of the workflow.
   */
  "name": string;
  /**
   * Whether the workflow is published. Unpublished workflows can only be run manually. Automatic triggers such as Schedule do not fire until the workflow is published.
   */
  "published"?: boolean;
  /**
   * The spec defines what the workflow does.
   */
  "spec"?: Spec;
  /**
   * Tags of the workflow.
   */
  "tags"?: Array<string>;
  /**
   * When the workflow was last updated.
   */
  "updatedAt"?: Date;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    createdAt: {
      baseName: "createdAt",
      type: "Date",
      format: "date-time",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    published: {
      baseName: "published",
      type: "boolean",
    },
    spec: {
      baseName: "spec",
      type: "Spec",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    updatedAt: {
      baseName: "updatedAt",
      type: "Date",
      format: "date-time",
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
    return WorkflowListItemAttributes.attributeTypeMap;
  }

  public constructor() {}
}
