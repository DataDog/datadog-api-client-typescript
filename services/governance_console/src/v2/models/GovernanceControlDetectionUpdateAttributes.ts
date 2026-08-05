import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GovernanceControlDetectionUpdateState } from "./GovernanceControlDetectionUpdateState";

/**
 * The attributes of a governance control detection that can be updated. Only the attributes present in the request are modified.
 */
export class GovernanceControlDetectionUpdateAttributes {
  /**
   * The handle of the team the detection is assigned to. Set to an empty string to clear the assignment.
   */
  "assignedTeam"?: string;
  /**
   * The UUID of the user the detection is assigned to. Set to an empty string to clear the assignment.
   */
  "assignedTo"?: string;
  /**
   * The timestamp after which the detection becomes eligible for mitigation. Used to defer mitigation to a later time.
   */
  "mitigateAfter"?: Date;
  /**
   * The new state to set for the detection. Set to `exception` to acknowledge the detection and exclude it from active counts, or `active` to reopen it.
   */
  "state"?: GovernanceControlDetectionUpdateState;
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
    assignedTeam: {
      baseName: "assigned_team",
      type: "string",
    },
    assignedTo: {
      baseName: "assigned_to",
      type: "string",
    },
    mitigateAfter: {
      baseName: "mitigate_after",
      type: "Date",
      format: "date-time",
    },
    state: {
      baseName: "state",
      type: "GovernanceControlDetectionUpdateState",
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
    return GovernanceControlDetectionUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
