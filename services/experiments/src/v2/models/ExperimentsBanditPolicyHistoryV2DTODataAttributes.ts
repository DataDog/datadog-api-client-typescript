import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsBanditPolicyKind } from "./ExperimentsBanditPolicyKind";
import { ExperimentsBanditPolicyReason } from "./ExperimentsBanditPolicyReason";
import { ExperimentsBanditPolicyVariantV2 } from "./ExperimentsBanditPolicyVariantV2";

/**
 * A traffic split the bandit served, with the same fields as `active_policy`.
 */
export class ExperimentsBanditPolicyHistoryV2DTODataAttributes {
  /**
   * When the policy was saved. SDKs pick it up on their next configuration fetch.
   */
  "appliedAt": Date;
  /**
   * The configuration version the policy was made for.
   */
  "configVersion": number;
  /**
   * Whether this is the policy the bandit serves now, the one Get bandit returns as `active_policy`. A paused bandit keeps serving it, and an ended bandit serves its fallback.
   */
  "isActive": boolean;
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
   * Each variant's share of traffic. The probabilities add up to 1. A variant served as an arm keeps the key the arm had, even if the arm was removed later.
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
    isActive: {
      baseName: "is_active",
      type: "boolean",
      required: true,
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
    return ExperimentsBanditPolicyHistoryV2DTODataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
