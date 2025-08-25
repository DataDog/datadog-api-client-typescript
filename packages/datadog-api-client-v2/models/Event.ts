/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The metadata associated with a request.
*/
export class Event {
  /**
   * Event ID.
  */
  "id"?: string;
  /**
   * The event name.
  */
  "name"?: string;
  /**
   * Event source ID.
  */
  "sourceId"?: number;
  /**
   * Event type.
  */
  "type"?: string;

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
    "id": {
      "baseName": "id",
      "type": "string",
    },
    "name": {
      "baseName": "name",
      "type": "string",
    },
    "sourceId": {
      "baseName": "source_id",
      "type": "number",
      "format": "int64",
    },
    "type": {
      "baseName": "type",
      "type": "string",
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




    return Event.attributeTypeMap;

  }

  public constructor() {











  }
}









