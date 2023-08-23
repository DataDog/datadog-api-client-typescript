/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentTeamUpdateData } from "./IncidentTeamUpdateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Update request with an incident team payload.
 */
export class IncidentTeamUpdateRequest {
  /**
   * Incident Team data for an update request.
   */
  "data": IncidentTeamUpdateData;

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
      type: "IncidentTeamUpdateData",
      required: true,
    },
  };
}
