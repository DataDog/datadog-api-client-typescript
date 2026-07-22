import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GovernanceControlDetectionAssignmentSource } from "./GovernanceControlDetectionAssignmentSource";
import { GovernanceControlDetectionState } from "./GovernanceControlDetectionState";

/**
 * The attributes of a governance control detection.
 */
export class GovernanceControlDetectionAttributes {
  /**
   * The identifier of the team the detection is assigned to, if any.
   */
  "assignedTeam"?: string;
  /**
   * The identifier of the user the detection is assigned to, if any.
   */
  "assignedTo"?: string;
  /**
   * How the detection's current assignment was determined. Possible values are `auto_resolved`, `manual`, `reassigned`, and `cleared`.
   */
  "assignmentSource": GovernanceControlDetectionAssignmentSource;
  /**
   * The unique identifier of the control that produced this detection.
   */
  "controlId": string;
  /**
   * The date and time when the detection was created.
   */
  "createdAt": Date;
  /**
   * The type of detection, which determines what condition was detected.
   */
  "detectionType": string;
  /**
   * The human-readable name of the detected resource.
   */
  "displayName": string;
  /**
   * The date and time when the detection was marked as an exception, if applicable.
   */
  "exceptionAt"?: Date;
  /**
   * The identifier of the user who marked the detection as an exception, if applicable.
   */
  "exceptionBy"?: string;
  /**
   * Free-form metadata associated with the detection.
   */
  "metadata"?: any;
  /**
   * The date and time after which the detection is scheduled to be mitigated, if applicable.
   */
  "mitigateAfter"?: Date;
  /**
   * The date and time when the detection was mitigated, if applicable.
   */
  "mitigatedAt"?: Date;
  /**
   * The priority of the detection, if set.
   */
  "priority": number;
  /**
   * The identifier of the resource the detection applies to.
   */
  "resourceId": string;
  /**
   * A link to the detected resource in Datadog.
   */
  "resourceUrl": string;
  /**
   * The current state of the detection. Possible values are `active`, `exception`, `mitigated`, `inactive`, `obsolete`, `resolved_externally`, and `mitigation_in_progress`.
   */
  "state": GovernanceControlDetectionState;
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
    assignmentSource: {
      baseName: "assignment_source",
      type: "GovernanceControlDetectionAssignmentSource",
      required: true,
    },
    controlId: {
      baseName: "control_id",
      type: "string",
      required: true,
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    detectionType: {
      baseName: "detection_type",
      type: "string",
      required: true,
    },
    displayName: {
      baseName: "display_name",
      type: "string",
      required: true,
    },
    exceptionAt: {
      baseName: "exception_at",
      type: "Date",
      format: "date-time",
    },
    exceptionBy: {
      baseName: "exception_by",
      type: "string",
    },
    metadata: {
      baseName: "metadata",
      type: "any",
    },
    mitigateAfter: {
      baseName: "mitigate_after",
      type: "Date",
      format: "date-time",
    },
    mitigatedAt: {
      baseName: "mitigated_at",
      type: "Date",
      format: "date-time",
    },
    priority: {
      baseName: "priority",
      type: "number",
      required: true,
      format: "int64",
    },
    resourceId: {
      baseName: "resource_id",
      type: "string",
      required: true,
    },
    resourceUrl: {
      baseName: "resource_url",
      type: "string",
      required: true,
    },
    state: {
      baseName: "state",
      type: "GovernanceControlDetectionState",
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
    return GovernanceControlDetectionAttributes.attributeTypeMap;
  }

  public constructor() {}
}
