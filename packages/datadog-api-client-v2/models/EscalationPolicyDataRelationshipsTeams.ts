/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EscalationPolicyDataRelationshipsTeamsDataItems } from "./EscalationPolicyDataRelationshipsTeamsDataItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Defines the relationship to a collection of teams within an escalation policy. Contains an array of team data references.
 */
export class EscalationPolicyDataRelationshipsTeams {
  /**
   * An array of references to the teams associated with this escalation policy.
   */
  "data"?: Array<EscalationPolicyDataRelationshipsTeamsDataItems>;

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
    data: {
      baseName: "data",
      type: "Array<EscalationPolicyDataRelationshipsTeamsDataItems>",
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
    return EscalationPolicyDataRelationshipsTeams.attributeTypeMap;
  }

  public constructor() {}
}
