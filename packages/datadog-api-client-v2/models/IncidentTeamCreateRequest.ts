/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentTeamCreateData } from "./IncidentTeamCreateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Create request with an incident team payload.
 */
export class IncidentTeamCreateRequest {
  /**
   * Incident Team data for a create request.
   */
  "data": IncidentTeamCreateData;

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
      type: "IncidentTeamCreateData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentTeamCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
