/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

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
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    incidentIds: {
      baseName: "incident_ids",
      type: "Array<number>",
      required: true,
      format: "int64",
    },
    version: {
      baseName: "version",
      type: "number",
      format: "int64",
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
