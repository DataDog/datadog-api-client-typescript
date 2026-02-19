import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChangeRequestChangeType } from "./ChangeRequestChangeType";
import { ChangeRequestRiskLevel } from "./ChangeRequestRiskLevel";

/**
 * Attributes for updating a change request.
 */
export class ChangeRequestUpdateAttributes {
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
   * The planned end date of the change request.
   */
  "endDate"?: Date;
  /**
   * The identifier of the change request to update.
   */
  "id"?: string;
  /**
   * The planned start date of the change request.
   */
  "startDate"?: Date;
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
    endDate: {
      baseName: "end_date",
      type: "Date",
      format: "date-time",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    startDate: {
      baseName: "start_date",
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
    return ChangeRequestUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
