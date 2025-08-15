/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamRoutingRulesData } from "./TeamRoutingRulesData";
import { TeamRoutingRulesIncluded } from "./TeamRoutingRulesIncluded";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Represents a complete set of team routing rules, including data and optionally included related resources.
 */
export class TeamRoutingRules {
  /**
   * Represents the top-level data object for team routing rules, containing the ID, relationships, and resource type.
   */
  "data"?: TeamRoutingRulesData;
  /**
   * Provides related routing rules or other included resources.
   */
  "included"?: Array<TeamRoutingRulesIncluded>;

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
      type: "TeamRoutingRulesData",
    },
    included: {
      baseName: "included",
      type: "Array<TeamRoutingRulesIncluded>",
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
    return TeamRoutingRules.attributeTypeMap;
  }

  public constructor() {}
}
