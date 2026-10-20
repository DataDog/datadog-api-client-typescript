/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TemporaryGrantRequestDecision } from "./TemporaryGrantRequestDecision";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Binary decision. Overrides, reason fields, and unknown attributes are rejected, including null values.
 */
export class TemporaryGrantRequestDecisionAttributes {
  /**
   * Approve the exact submitted total and expiry, or deny the request.
   */
  "decision": TemporaryGrantRequestDecision;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    decision: {
      baseName: "decision",
      type: "TemporaryGrantRequestDecision",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TemporaryGrantRequestDecisionAttributes.attributeTypeMap;
  }

  public constructor() {}
}
