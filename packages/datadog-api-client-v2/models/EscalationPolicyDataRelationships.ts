/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DataRelationshipsTeams } from "./DataRelationshipsTeams";
import { EscalationPolicyDataRelationshipsSteps } from "./EscalationPolicyDataRelationshipsSteps";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Represents the relationships for an escalation policy, including references to steps and teams.
 */
export class EscalationPolicyDataRelationships {
  /**
   * Defines the relationship to a collection of steps within an escalation policy. Contains an array of step data references.
   */
  "steps": EscalationPolicyDataRelationshipsSteps;
  /**
   * Associates teams with this schedule in a data structure.
   */
  "teams"?: DataRelationshipsTeams;

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
    steps: {
      baseName: "steps",
      type: "EscalationPolicyDataRelationshipsSteps",
      required: true,
    },
    teams: {
      baseName: "teams",
      type: "DataRelationshipsTeams",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EscalationPolicyDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
