/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamsOwnershipRuleResponseAttributes } from "./TeamsOwnershipRuleResponseAttributes";
import { TeamsOwnershipRuleType } from "./TeamsOwnershipRuleType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The JSON:API data envelope for a teams ownership rule.
 */
export class TeamsOwnershipRuleResponseData {
  /**
   * The attributes of a teams ownership rule.
   */
  "attributes": TeamsOwnershipRuleResponseAttributes;
  /**
   * A deterministic identifier derived from the rule's grouping key.
   * This ID cannot be used to delete the rule directly; delete individual mappings
   * using the `mapping_id` under `teams` instead.
   */
  "id": string;
  /**
   * The type of the resource. The value should always be teams_ownership_grouped_mappings.
   */
  "type": TeamsOwnershipRuleType;

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
    attributes: {
      baseName: "attributes",
      type: "TeamsOwnershipRuleResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TeamsOwnershipRuleType",
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
    return TeamsOwnershipRuleResponseData.attributeTypeMap;
  }

  public constructor() {}
}
