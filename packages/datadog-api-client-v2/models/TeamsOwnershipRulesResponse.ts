/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamsOwnershipRuleResponseData } from "./TeamsOwnershipRuleResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The response body for a list of teams ownership rules.
 */
export class TeamsOwnershipRulesResponse {
  /**
   * A list of teams ownership rules.
   */
  "data": Array<TeamsOwnershipRuleResponseData>;

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
      type: "Array<TeamsOwnershipRuleResponseData>",
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
    return TeamsOwnershipRulesResponse.attributeTypeMap;
  }

  public constructor() {}
}
