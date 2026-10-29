/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OnCallPageTeamRoutingRuleRelationshipData } from "./OnCallPageTeamRoutingRuleRelationshipData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The team routing rule that matched the Page.
 */
export class OnCallPageTeamRoutingRuleRelationship {
  /**
   * Reference to a team routing rule.
   */
  "data"?: OnCallPageTeamRoutingRuleRelationshipData;

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
      type: "OnCallPageTeamRoutingRuleRelationshipData",
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
    return OnCallPageTeamRoutingRuleRelationship.attributeTypeMap;
  }

  public constructor() {}
}
