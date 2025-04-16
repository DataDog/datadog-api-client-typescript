/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EscalationPolicyUpdateRequestDataRelationshipsTeams } from "./EscalationPolicyUpdateRequestDataRelationshipsTeams";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Represents relationships in an escalation policy update request, including references to teams.
 */
export class EscalationPolicyUpdateRequestDataRelationships {
  /**
   * Defines the relationship to teams within an escalation policy update request, referencing the teams to be associated with or removed from the policy.
   */
  "teams"?: EscalationPolicyUpdateRequestDataRelationshipsTeams;

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
    teams: {
      baseName: "teams",
      type: "EscalationPolicyUpdateRequestDataRelationshipsTeams",
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
    return EscalationPolicyUpdateRequestDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
