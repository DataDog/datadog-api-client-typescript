import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsBanditPolicyKind } from "./ExperimentsBanditPolicyKind";
import { ExperimentsBanditPolicyReason } from "./ExperimentsBanditPolicyReason";
import { ExperimentsBanditPolicyVariantV2 } from "./ExperimentsBanditPolicyVariantV2";

/**
 * The policy the bandit serves. `null` until the bandit starts.
 */
export class ExperimentsBanditPolicyV2 {
  /**
   * When the policy started being served.
   */
  "appliedAt": Date;
  /**
   * The configuration version the policy was made for.
   */
  "configVersion": number;
  /**
   * The policy ID. Each exposure logs it as `bandit.policy_id`.
   */
  "id": string;
  /**
   * `WARMUP` serves the arms equally. `ADAPTIVE` serves the initial split or a split from a refresh. `FALLBACK` serves one variant after the bandit ends.
   */
  "kind": ExperimentsBanditPolicyKind;
  /**
   * The policy's place in the bandit's policy history. It follows `applied_at` and orders policies saved at the same time.
   */
  "policyNumber": number;
  /**
   * Why the policy was applied.
   */
  "reason": ExperimentsBanditPolicyReason;
  /**
   * The refresh that proposed the policy. `null` for policies no refresh proposed, such as the first split and the policy served after the bandit ends.
   */
  "refreshId": string | null;
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
    policyNumber: {
      baseName: "policy_number",
      type: "number",
      required: true,
      format: "int64",
    },
    reason: {
      baseName: "reason",
      type: "ExperimentsBanditPolicyReason",
      required: true,
    },
    refreshId: {
      baseName: "refresh_id",
      type: "string",
      required: true,
      format: "uuid",
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
