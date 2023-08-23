/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentServiceCreateData } from "./IncidentServiceCreateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Create request with an incident service payload.
 */
export class IncidentServiceCreateRequest {
  /**
   * Incident Service payload for create requests.
   */
  "data": IncidentServiceCreateData;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      type: "IncidentServiceCreateData",
      required: true,
    },
  };
}
