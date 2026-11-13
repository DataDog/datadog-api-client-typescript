/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsBanditPolicyKind } from "./ExperimentsBanditPolicyKind";
import { ExperimentsBanditPolicyReason } from "./ExperimentsBanditPolicyReason";
import { ExperimentsBanditPolicyVariantV2 } from "./ExperimentsBanditPolicyVariantV2";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * The policy the bandit serves. Null until the bandit starts.
 */
export class ExperimentsBanditPolicyV2 {
  /**
   * When the policy started being served.
   */
  "appliedAt": Date;
  /**
   * The configuration version the policy was made for.
   */
  "configVersion": Int64;
  /**
   * The policy ID. Each exposure logs it as `bandit.policy_id`.
   */
  "id": string;
  /**
   * WARMUP serves the arms equally. ADAPTIVE serves the initial split or a split from a refresh. FALLBACK serves one variant after the bandit ends.
   */
  "kind": ExperimentsBanditPolicyKind;
  /**
   * Why the policy was applied.
   */
  "reason": ExperimentsBanditPolicyReason;
  /**
   * Each variant's share of traffic. The probabilities add up to 1.
   */
  "variants": Array<ExperimentsBanditPolicyVariantV2>;

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
    appliedAt: {
      baseName: "applied_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    configVersion: {
      baseName: "config_version",
      type: "number",
      required: true,
      format: "int64",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    kind: {
      baseName: "kind",
      type: "ExperimentsBanditPolicyKind",
      required: true,
    },
    reason: {
      baseName: "reason",
      type: "ExperimentsBanditPolicyReason",
      required: true,
    },
    variants: {
      baseName: "variants",
      type: "Array<ExperimentsBanditPolicyVariantV2>",
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
    return ExperimentsBanditPolicyV2.attributeTypeMap;
  }

  public constructor() {}
}
