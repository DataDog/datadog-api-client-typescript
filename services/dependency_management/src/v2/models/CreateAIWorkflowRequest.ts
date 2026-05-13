import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Entity } from "./Entity";

/**
 * Request body for creating a new AI workflow.
 */
export class CreateAIWorkflowRequest {
  /**
   * A list of entity groups. Each group is processed in a separate workflow execution.
   */
  "entities": Array<Array<Entity>>;
  /**
   * Arbitrary filtering criteria used to select entities for the workflow.
   */
  "filteringLogic": any;
  /**
   * The logic used to group entities into batches for execution.
   */
  "groupingLogic": string;
  /**
   * The IDP campaign ID associated with this workflow.
   */
  "idpCampaignId": string;
  /**
   * Maximum number of entities allowed per execution session.
   */
  "maxNumberOfEntitiesPerSession": number;
  /**
   * The AI prompt used to guide the dependency upgrade automation.
   */
  "prompt": string;
  /**
   * The target repository in owner/repo format.
   */
  "repository": string;
  /**
   * The username of the user initiating the workflow.
   */
  "user": string;
  /**
   * A human-readable name for the workflow.
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
    user: {
      baseName: "user",
      type: "string",
      required: true,
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
    return CreateAIWorkflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
