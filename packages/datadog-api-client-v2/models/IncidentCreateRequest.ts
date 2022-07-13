/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentCreateData } from "./IncidentCreateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Create request for an incident.
 */
export class IncidentCreateRequest {
  /**
   * Incident data for a create request.
   */
  "data": IncidentCreateData;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "IncidentCreateData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
