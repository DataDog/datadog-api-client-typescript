/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { InboxRuleDataUpdate } from "./InboxRuleDataUpdate";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The body of an inbox rule update request.
 */
export class InboxRuleUpdateRequest {
  /**
   * The data object for an inbox rule update request. The `id` must match the `rule_id` path parameter.
   */
  "data": InboxRuleDataUpdate;

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
      type: "InboxRuleDataUpdate",
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
    return InboxRuleUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
