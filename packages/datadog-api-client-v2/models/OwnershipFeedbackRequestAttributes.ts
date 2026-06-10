/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OwnershipFeedbackAction } from "./OwnershipFeedbackAction";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes of an ownership feedback request.
 */
export class OwnershipFeedbackRequestAttributes {
  /**
   * The feedback action to apply to an inference.
   */
  "action": OwnershipFeedbackAction;
  /**
   * The handle of the actor submitting the feedback.
   */
  "actorHandle": string;
  /**
   * The type of actor submitting the feedback, for example `user` or `service`.
   */
  "actorType": string;
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
    actorHandle: {
      baseName: "actor_handle",
      type: "string",
      required: true,
    },
    actorType: {
      baseName: "actor_type",
      type: "string",
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
