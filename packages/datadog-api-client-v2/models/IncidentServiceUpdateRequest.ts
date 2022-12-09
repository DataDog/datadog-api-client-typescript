/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentServiceUpdateData } from "./IncidentServiceUpdateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Update request with an incident service payload.
 */
export class IncidentServiceUpdateRequest {
  /**
   * Incident Service payload for update requests.
   */
  "data": IncidentServiceUpdateData;

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
      type: "IncidentServiceUpdateData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentServiceUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
