/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A Statuspage incident entry.
 */
export class IncidentStatuspageIncidentEntry {
  /**
   * The Datadog incident identifier.
   */
  "incidentId": string;
  /**
   * The Statuspage page identifier.
   */
  "pageId": string;
  /**
   * The URL of the Statuspage incident.
   */
  "redirectUrl"?: string;

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
    incidentId: {
      baseName: "incident_id",
      type: "string",
      required: true,
    },
    pageId: {
      baseName: "page_id",
      type: "string",
      required: true,
    },
    redirectUrl: {
      baseName: "redirect_url",
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
    return IncidentStatuspageIncidentEntry.attributeTypeMap;
  }

  public constructor() {}
}
