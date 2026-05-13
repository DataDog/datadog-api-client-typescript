import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Entity } from "./Entity";

/**
 * Request body for updating an existing AI workflow. All fields are optional.
 */
export class UpdateAIWorkflowRequest {
  /**
   * Timestamp marking when the workflow completed.
   */
  "completedAt"?: Date;
  /**
   * A list of entity groups. Each group is processed in a separate workflow execution.
   */
  "entities"?: Array<Array<Entity>>;
  /**
   * Arbitrary filtering criteria used to select entities for the workflow.
   */
  "filteringLogic"?: any;
  /**
   * Updated entity grouping logic.
   */
  "groupingLogic"?: string;
  /**
   * Updated maximum number of entities per execution session.
   */
  "maxNumberOfEntitiesPerSession"?: number;
  /**
   * Updated AI prompt for the workflow.
   */
  "prompt"?: string;
  /**
   * Updated target repository in owner/repo format.
   */
  "repository"?: string;
  /**
   * Updated name for the workflow.
   */
  "workflowName"?: string;
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
    completedAt: {
      baseName: "completed_at",
      type: "Date",
      format: "date-time",
    },
    entities: {
      baseName: "entities",
      type: "Array<Array<Entity>>",
    },
    filteringLogic: {
      baseName: "filtering_logic",
      type: "any",
    },
    groupingLogic: {
      baseName: "grouping_logic",
      type: "string",
    },
    maxNumberOfEntitiesPerSession: {
      baseName: "max_number_of_entities_per_session",
      type: "number",
      format: "int64",
    },
    prompt: {
      baseName: "prompt",
      type: "string",
    },
    repository: {
      baseName: "repository",
      type: "string",
    },
    workflowName: {
      baseName: "workflow_name",
      type: "string",
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
    return UpdateAIWorkflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
