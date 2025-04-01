/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentFieldAttributes } from "./IncidentFieldAttributes";
import { IncidentNotificationHandle } from "./IncidentNotificationHandle";
import { IncidentTimelineCellCreateAttributes } from "./IncidentTimelineCellCreateAttributes";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The incident's attributes for a create request.
*/
export class IncidentCreateAttributes {
  /**
   * Required if `customer_impacted:"true"`. A summary of the impact customers experienced during the incident.
  */
  "customerImpactScope"?: string;
  /**
   * A flag indicating whether the incident caused customer impact.
  */
  "customerImpacted": boolean;
  /**
   * A condensed view of the user-defined fields for which to create initial selections.
  */
  "fields"?: { [key: string]: IncidentFieldAttributes; };
  /**
   * A unique identifier that represents an incident type. The default incident type will be used if this property is not provided.
  */
  "incidentTypeUuid"?: string;
  /**
   * An array of initial timeline cells to be placed at the beginning of the incident timeline.
  */
  "initialCells"?: Array<IncidentTimelineCellCreateAttributes>;
  /**
   * Notification handles that will be notified of the incident at creation.
  */
  "notificationHandles"?: Array<IncidentNotificationHandle>;
  /**
   * The title of the incident, which summarizes what happened.
  */
  "title": string;

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
    "customerImpactScope": {
      "baseName": "customer_impact_scope",
      "type": "string",
    },
    "customerImpacted": {
      "baseName": "customer_impacted",
      "type": "boolean",
      "required": true,
    },
    "fields": {
      "baseName": "fields",
      "type": "{ [key: string]: IncidentFieldAttributes; }",
    },
    "incidentTypeUuid": {
      "baseName": "incident_type_uuid",
      "type": "string",
    },
    "initialCells": {
      "baseName": "initial_cells",
      "type": "Array<IncidentTimelineCellCreateAttributes>",
    },
    "notificationHandles": {
      "baseName": "notification_handles",
      "type": "Array<IncidentNotificationHandle>",
    },
    "title": {
      "baseName": "title",
      "type": "string",
      "required": true,
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




    return IncidentCreateAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









