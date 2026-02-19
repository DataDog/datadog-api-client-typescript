import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChangeRequestChangeType } from "./ChangeRequestChangeType";
import { ChangeRequestRiskLevel } from "./ChangeRequestRiskLevel";

/**
 * Attributes for creating a change request.
 */
export class ChangeRequestCreateAttributes {
  /**
   * The UUID of an incident to link to the change request.
   */
  "changeRequestLinkedIncidentUuid"?: string;
  /**
   * The maintenance window query for the change request.
   */
  "changeRequestMaintenanceWindowQuery"?: string;
  /**
   * The plan associated with the change request.
   */
  "changeRequestPlan"?: string;
  /**
   * The risk level of the change request.
   */
  "changeRequestRisk"?: ChangeRequestRiskLevel;
  /**
   * The type of the change request.
   */
  "changeRequestType"?: ChangeRequestChangeType;
  /**
   * The description of the change request.
   */
  "description"?: string;
  /**
   * The planned end date of the change request.
   */
  "endDate"?: Date;
  /**
   * The project UUID to associate with the change request.
   */
  "projectId"?: string;
  /**
   * A list of team handles to request decisions from.
   */
  "requestedTeams"?: Array<string>;
  /**
   * The planned start date of the change request.
   */
  "startDate"?: Date;
  /**
   * The title of the change request.
   */
  "title": string;
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
    changeRequestLinkedIncidentUuid: {
      baseName: "change_request_linked_incident_uuid",
      type: "string",
    },
    changeRequestMaintenanceWindowQuery: {
      baseName: "change_request_maintenance_window_query",
      type: "string",
    },
    changeRequestPlan: {
      baseName: "change_request_plan",
      type: "string",
    },
    changeRequestRisk: {
      baseName: "change_request_risk",
      type: "ChangeRequestRiskLevel",
    },
    changeRequestType: {
      baseName: "change_request_type",
      type: "ChangeRequestChangeType",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    endDate: {
      baseName: "end_date",
      type: "Date",
      format: "date-time",
    },
    projectId: {
      baseName: "project_id",
      type: "string",
    },
    requestedTeams: {
      baseName: "requested_teams",
      type: "Array<string>",
    },
    startDate: {
      baseName: "start_date",
      type: "Date",
      format: "date-time",
    },
    title: {
      baseName: "title",
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
    return ChangeRequestCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
