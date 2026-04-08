import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CampaignStatus } from "./CampaignStatus";

/**
 * Attributes for creating a new campaign.
 */
export class CreateCampaignRequestAttributes {
  /**
   * The description of the campaign.
   */
  "description"?: string;
  /**
   * The due date of the campaign.
   */
  "dueDate"?: Date;
  /**
   * Entity scope query to filter entities for this campaign.
   */
  "entityScope"?: string;
  /**
   * Guidance for the campaign.
   */
  "guidance"?: string;
  /**
   * The unique key for the campaign.
   */
  "key": string;
  /**
   * The name of the campaign.
   */
  "name": string;
  /**
   * The UUID of the campaign owner.
   */
  "ownerId": string;
  /**
   * Array of rule IDs associated with this campaign.
   */
  "ruleIds": Array<string>;
  /**
   * The start date of the campaign.
   */
  "startDate": Date;
  /**
   * The status of the campaign.
   */
  "status"?: CampaignStatus;
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
    description: {
      baseName: "description",
      type: "string",
    },
    dueDate: {
      baseName: "due_date",
      type: "Date",
      format: "date-time",
    },
    entityScope: {
      baseName: "entity_scope",
      type: "string",
    },
    guidance: {
      baseName: "guidance",
      type: "string",
    },
    key: {
      baseName: "key",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    ownerId: {
      baseName: "owner_id",
      type: "string",
      required: true,
    },
    ruleIds: {
      baseName: "rule_ids",
      type: "Array<string>",
      required: true,
    },
    startDate: {
      baseName: "start_date",
      type: "Date",
      required: true,
      format: "date-time",
    },
    status: {
      baseName: "status",
      type: "CampaignStatus",
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
    return CreateCampaignRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
