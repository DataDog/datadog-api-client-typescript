/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsBanditPolicyHistoryV2DTODataAttributes } from "./ExperimentsBanditPolicyHistoryV2DTODataAttributes";
import { ExperimentsBanditPolicyHistoryV2DTODataType } from "./ExperimentsBanditPolicyHistoryV2DTODataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * JSON:API resource containing a policy the bandit served.
 */
export class ExperimentsBanditPolicyHistoryV2DTOData {
  /**
   * A traffic split the bandit served, with the same fields as `active_policy`.
   */
  "attributes": ExperimentsBanditPolicyHistoryV2DTODataAttributes;
  /**
   * The policy ID. Each exposure logs it as `bandit.policy_id`, except exposures logged after the bandit ends.
   */
  "id": string;
  /**
   * Bandit policy resource type.
   */
  "type": ExperimentsBanditPolicyHistoryV2DTODataType;

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
      type: "ExperimentsBanditPolicyHistoryV2DTODataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "ExperimentsBanditPolicyHistoryV2DTODataType",
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
    return ExperimentsBanditPolicyHistoryV2DTOData.attributeTypeMap;
  }

  public constructor() {}
}
