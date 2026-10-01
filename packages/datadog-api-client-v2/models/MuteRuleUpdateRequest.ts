/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MuteRuleDataUpdate } from "./MuteRuleDataUpdate";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The body of a mute rule update request.
 */
export class MuteRuleUpdateRequest {
  /**
   * The data object for a mute rule update request. The `id` must match the `rule_id` path parameter.
   */
  "data": MuteRuleDataUpdate;

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
      type: "MuteRuleDataUpdate",
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
    return MuteRuleUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
