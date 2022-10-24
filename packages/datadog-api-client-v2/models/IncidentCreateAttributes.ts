/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentFieldAttributes } from "./IncidentFieldAttributes";
import { IncidentNotificationHandle } from "./IncidentNotificationHandle";
import { IncidentTimelineCellCreateAttributes } from "./IncidentTimelineCellCreateAttributes";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * The incident's attributes for a create request.
 */
export class IncidentCreateAttributes {
  /**
   * A flag indicating whether the incident caused customer impact.
   */
  "customerImpacted": boolean;
  /**
   * A condensed view of the user-defined fields for which to create initial selections.
   */
  "fields"?: { [key: string]: IncidentFieldAttributes };
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
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    customerImpacted: {
      baseName: "customer_impacted",
      type: "boolean",
      required: true,
    },
    fields: {
      baseName: "fields",
      type: "{ [key: string]: IncidentFieldAttributes; }",
    },
    initialCells: {
      baseName: "initial_cells",
      type: "Array<IncidentTimelineCellCreateAttributes>",
    },
    notificationHandles: {
      baseName: "notification_handles",
      type: "Array<IncidentNotificationHandle>",
    },
    title: {
      baseName: "title",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
