/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TicketCreationRuleAttributesResponse } from "./TicketCreationRuleAttributesResponse";
import { TicketCreationRuleType } from "./TicketCreationRuleType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The data object for a ticket creation rule returned by the API.
*/
export class TicketCreationRuleDataResponse {
  /**
   * Attributes of a ticket creation rule returned by the API.
  */
  "attributes": TicketCreationRuleAttributesResponse;
  /**
   * The ID of the ticket creation rule.
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
  "additionalProperties"?: { [key: string]: any; };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "attributes": {
      "baseName": "attributes",
      "type": "TicketCreationRuleAttributesResponse",
      "required": true,
    },
    "id": {
      "baseName": "id",
      "type": "string",
      "required": true,
      "format": "uuid",
    },
    "type": {
      "baseName": "type",
      "type": "TicketCreationRuleType",
      "required": true,
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




    return TicketCreationRuleDataResponse.attributeTypeMap;

  }

  public constructor() {











  }
}









