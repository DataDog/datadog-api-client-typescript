/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TicketCreationRuleType } from "./TicketCreationRuleType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A reference to a ticket creation rule used for reordering.
 */
export class TicketCreationRuleReorderItem {
  /**
   * The ID of the automation rule.
   */
  "id": string;
  /**
   * The JSON:API type for ticket creation rules.
   */
  "type": TicketCreationRuleType;

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
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "TicketCreationRuleType",
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
    return TicketCreationRuleReorderItem.attributeTypeMap;
  }

  public constructor() {}
}
