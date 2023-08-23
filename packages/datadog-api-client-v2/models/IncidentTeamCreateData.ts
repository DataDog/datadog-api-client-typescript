/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentTeamCreateAttributes } from "./IncidentTeamCreateAttributes";
import { IncidentTeamRelationships } from "./IncidentTeamRelationships";
import { IncidentTeamType } from "./IncidentTeamType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Incident Team data for a create request.
 */
export class IncidentTeamCreateData {
  /**
   * The incident team's attributes for a create request.
   */
  "attributes"?: IncidentTeamCreateAttributes;
  /**
   * The incident team's relationships.
   */
  "relationships"?: IncidentTeamRelationships;
  /**
   * Incident Team resource type.
   */
  "type": IncidentTeamType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      type: "IncidentTeamCreateAttributes",
    },
    relationships: {
      type: "IncidentTeamRelationships",
    },
    type: {
      type: "IncidentTeamType",
      required: true,
    },
  };
}
