/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EventCreateResponse } from "./EventCreateResponse";
import { EventCreateResponsePayloadLinks } from "./EventCreateResponsePayloadLinks";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Event creation response.
*/
export class EventCreateResponsePayload {
  /**
   * Event object.
  */
  "data"?: EventCreateResponse;
  /**
   * Links to the event.
  */
  "links"?: EventCreateResponsePayloadLinks;

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
    "data": {
      "baseName": "data",
      "type": "EventCreateResponse",
    },
    "links": {
      "baseName": "links",
      "type": "EventCreateResponsePayloadLinks",
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return EventCreateResponsePayload.attributeTypeMap;

  }

  public constructor() {











  }
}









