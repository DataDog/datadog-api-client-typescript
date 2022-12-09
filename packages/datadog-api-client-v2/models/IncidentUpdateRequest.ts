/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentUpdateData } from "./IncidentUpdateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Update request for an incident.
 */
export class IncidentUpdateRequest {
  /**
   * Incident data for an update request.
   */
  "data": IncidentUpdateData;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "IncidentUpdateData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
