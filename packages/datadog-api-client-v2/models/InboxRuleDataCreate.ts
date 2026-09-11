/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { InboxRuleAttributesCreate } from "./InboxRuleAttributesCreate";
import { InboxRuleType } from "./InboxRuleType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The data object for an inbox rule create request.
 */
export class InboxRuleDataCreate {
  /**
   * Attributes for creating or updating an inbox rule.
   */
  "attributes": InboxRuleAttributesCreate;
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
      type: "InboxRuleAttributesCreate",
      required: true,
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
    return InboxRuleDataCreate.attributeTypeMap;
  }

  public constructor() {}
}
