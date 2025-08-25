/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamRoutingRulesRequestRule } from "./TeamRoutingRulesRequestRule";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Represents the attributes of a request to update or create team routing rules.
 */
export class TeamRoutingRulesRequestDataAttributes {
  /**
   * A list of routing rule items that define how incoming pages should be handled.
   */
  "rules"?: Array<TeamRoutingRulesRequestRule>;

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
    rules: {
      baseName: "rules",
      type: "Array<TeamRoutingRulesRequestRule>",
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
    return TeamRoutingRulesRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
