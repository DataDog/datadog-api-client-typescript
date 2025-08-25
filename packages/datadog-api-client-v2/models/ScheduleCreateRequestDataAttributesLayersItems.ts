/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LayerAttributesInterval } from "./LayerAttributesInterval";
import { ScheduleRequestDataAttributesLayersItemsMembersItems } from "./ScheduleRequestDataAttributesLayersItemsMembersItems";
import { TimeRestriction } from "./TimeRestriction";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Describes a schedule layer, including rotation intervals, members, restrictions, and timeline settings.
*/
export class ScheduleCreateRequestDataAttributesLayersItems {
  /**
   * The date/time when this layer becomes active (in ISO 8601).
  */
  "effectiveDate": Date;
  /**
   * The date/time after which this layer no longer applies (in ISO 8601).
  */
  "endDate"?: Date;
  /**
   * Defines how often the rotation repeats, using a combination of days and optional seconds. Should be at least 1 hour.
  */
  "interval": LayerAttributesInterval;
  /**
   * A list of members who participate in this layer's rotation.
  */
  "members": Array<ScheduleRequestDataAttributesLayersItemsMembersItems>;
  /**
   * The name of this layer.
  */
  "name": string;
  /**
   * Zero or more time-based restrictions (for example, only weekdays, during business hours).
  */
  "restrictions"?: Array<TimeRestriction>;
  /**
   * The date/time when the rotation for this layer starts (in ISO 8601).
  */
  "rotationStart": Date;

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
    "effectiveDate": {
      "baseName": "effective_date",
      "type": "Date",
      "required": true,
      "format": "date-time",
    },
    "endDate": {
      "baseName": "end_date",
      "type": "Date",
      "format": "date-time",
    },
    "interval": {
      "baseName": "interval",
      "type": "LayerAttributesInterval",
      "required": true,
    },
    "members": {
      "baseName": "members",
      "type": "Array<ScheduleRequestDataAttributesLayersItemsMembersItems>",
      "required": true,
    },
    "name": {
      "baseName": "name",
      "type": "string",
      "required": true,
    },
    "restrictions": {
      "baseName": "restrictions",
      "type": "Array<TimeRestriction>",
    },
    "rotationStart": {
      "baseName": "rotation_start",
      "type": "Date",
      "required": true,
      "format": "date-time",
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




    return ScheduleCreateRequestDataAttributesLayersItems.attributeTypeMap;

  }

  public constructor() {











  }
}









