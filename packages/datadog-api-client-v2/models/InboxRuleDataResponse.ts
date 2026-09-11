/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { InboxRuleAttributesResponse } from "./InboxRuleAttributesResponse";
import { InboxRuleType } from "./InboxRuleType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The data object for an inbox rule returned by the API.
 */
export class InboxRuleDataResponse {
  /**
   * Attributes of an inbox rule returned by the API.
   */
  "attributes": InboxRuleAttributesResponse;
  /**
   * The ID of the inbox rule.
   */
  "id": string;
  /**
   * The JSON:API type for inbox rules.
   */
  "type": InboxRuleType;

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
      type: "InboxRuleAttributesResponse",
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
      type: "InboxRuleType",
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
    return InboxRuleDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
