/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MuteReason } from "./MuteReason";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Action of the mute rule
 */
export class ActionMute {
  /**
   * End date of the mute rule (null means mute forever)
   */
  "expireAt"?: number;
  /**
   * Reason for muting a vulnerability
   */
  "reason": MuteReason;
  /**
   * Free text to add a reason description.
   */
  "reasonDescription"?: string;

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
    expireAt: {
      baseName: "expire_at",
      type: "number",
      format: "int64",
    },
    reason: {
      baseName: "reason",
      type: "MuteReason",
      required: true,
    },
    reasonDescription: {
      baseName: "reason_description",
      type: "string",
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
    return ActionMute.attributeTypeMap;
  }

  public constructor() {}
}
