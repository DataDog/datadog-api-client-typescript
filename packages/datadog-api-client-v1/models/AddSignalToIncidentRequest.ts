/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes describing which incident to add the signal to.
 */
export class AddSignalToIncidentRequest {
  /**
   * Whether to post the signal on the incident timeline.
   */
  "addToSignalTimeline"?: boolean;
  /**
   * Public ID attribute of the incident to which the signal will be added.
   */
  "incidentId": number;
  /**
   * Version of the updated signal. If server side version is higher, update will be rejected.
   */
  "version"?: number;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    addToSignalTimeline: {
      baseName: "add_to_signal_timeline",
      type: "boolean",
    },
    incidentId: {
      baseName: "incident_id",
      type: "number",
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
    return AddSignalToIncidentRequest.attributeTypeMap;
  }

  public constructor() {}
}
