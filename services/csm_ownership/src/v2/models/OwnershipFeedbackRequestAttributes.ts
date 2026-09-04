import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OwnershipFeedbackAction } from "./OwnershipFeedbackAction";

/**
 * The attributes of an ownership feedback request.
 */
export class OwnershipFeedbackRequestAttributes {
  /**
   * The feedback action to apply to an inference.
   */
  "action": OwnershipFeedbackAction;
  /**
   * The corrected owner handle. Required when `action` is `correct`.
   */
  "correctedOwnerHandle"?: string;
  /**
   * The corrected owner type. Required when `action` is `correct`.
   */
  "correctedOwnerType"?: string;
  /**
   * The checksum of the inference being acted upon. Must match the current inference checksum or the request returns a conflict.
   */
  "inferenceChecksum": string;
  /**
   * An optional free-form reason explaining the feedback.
   */
  "reason"?: string;
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
    action: {
      baseName: "action",
      type: "OwnershipFeedbackAction",
      required: true,
    },
    correctedOwnerHandle: {
      baseName: "corrected_owner_handle",
      type: "string",
    },
    correctedOwnerType: {
      baseName: "corrected_owner_type",
      type: "string",
    },
    inferenceChecksum: {
      baseName: "inference_checksum",
      type: "string",
      required: true,
    },
    reason: {
      baseName: "reason",
      type: "string",
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
    return OwnershipFeedbackRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
