/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes describing the new list of related signals for a security signal.
 */
export class SecurityMonitoringSignalIncidentsUpdateAttributes {
  /**
   * Array of incidents that are associated with this signal.
   */
  "incidentIds": Array<number>;
  /**
   * Version of the updated signal. If server side version is higher, update will be rejected.
   */
  "version"?: number;

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
    incidentIds: {
      baseName: "incident_ids",
      type: "Array<number>",
      required: true,
    },
    version: {
      baseName: "version",
      type: "number",
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
    return SecurityMonitoringSignalIncidentsUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
