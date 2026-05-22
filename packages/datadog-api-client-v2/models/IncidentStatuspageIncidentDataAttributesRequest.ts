/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for creating or updating a Statuspage incident.
 */
export class IncidentStatuspageIncidentDataAttributesRequest {
  /**
   * The body text of the Statuspage incident.
   */
  "body"?: string;
  /**
   * Map of component identifiers to their status.
   */
  "components"?: { [key: string]: string };
  /**
   * Whether to deliver notifications.
   */
  "deliverNotifications"?: boolean;
  /**
   * The impact level of the incident.
   */
  "impact"?: string;
  /**
   * The name of the Statuspage incident.
   */
  "name"?: string;
  /**
   * The Statuspage page identifier.
   */
  "pageId"?: string;
  /**
   * The status of the Statuspage incident.
   */
  "status"?: string;

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
    body: {
      baseName: "body",
      type: "string",
    },
    components: {
      baseName: "components",
      type: "{ [key: string]: string; }",
    },
    deliverNotifications: {
      baseName: "deliver_notifications",
      type: "boolean",
    },
    impact: {
      baseName: "impact",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    pageId: {
      baseName: "page_id",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "string",
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
    return IncidentStatuspageIncidentDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
