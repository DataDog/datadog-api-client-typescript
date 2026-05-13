import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Entity } from "./Entity";

/**
 * Attributes of an AI workflow.
 */
export class AIWorkflowAttributes {
  /**
   * Timestamp when the workflow completed. Null if not yet completed.
   */
  "completedAt"?: Date;
  /**
   * Timestamp when the workflow was created.
   */
  "createdAt": Date;
  /**
   * A list of entity groups. Each group is processed in a separate workflow execution.
   */
  "entities": Array<Array<Entity>>;
  /**
   * Arbitrary filtering criteria used to select entities for the workflow.
   */
  "filteringLogic": any;
  /**
   * The logic used to group entities into execution batches.
   */
  "groupingLogic": string;
  /**
   * The IDP campaign ID associated with this workflow.
   */
  "idpCampaignId": string;
  /**
   * Maximum number of entities processed in a single execution session.
   */
  "maxNumberOfEntitiesPerSession": number;
  /**
   * The AI prompt guiding the dependency upgrade automation.
   */
  "prompt": string;
  /**
   * The target repository in owner/repo format.
   */
  "repository": string;
  /**
   * Timestamp when the workflow was last updated.
   */
  "updatedAt": Date;
  /**
   * The username of the user who created the workflow.
   */
  "user": string;
  /**
   * The UUID of the underlying Datadog Workflow Automation workflow.
   */
  "workflowId": string;
  /**
   * The human-readable name of the workflow.
   */
  "workflowName": string;
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    entities: {
      baseName: "entities",
      type: "Array<Array<Entity>>",
      required: true,
    },
    filteringLogic: {
      baseName: "filtering_logic",
      type: "any",
      required: true,
    },
    groupingLogic: {
      baseName: "grouping_logic",
      type: "string",
      required: true,
    },
    idpCampaignId: {
      baseName: "idp_campaign_id",
      type: "string",
      required: true,
    },
    maxNumberOfEntitiesPerSession: {
      baseName: "max_number_of_entities_per_session",
      type: "number",
      required: true,
      format: "int64",
    },
    prompt: {
      baseName: "prompt",
      type: "string",
      required: true,
    },
    repository: {
      baseName: "repository",
      type: "string",
      required: true,
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    user: {
      baseName: "user",
      type: "string",
      required: true,
    },
    workflowId: {
      baseName: "workflow_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    workflowName: {
      baseName: "workflow_name",
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
    return AIWorkflowAttributes.attributeTypeMap;
  }

  public constructor() {}
}
