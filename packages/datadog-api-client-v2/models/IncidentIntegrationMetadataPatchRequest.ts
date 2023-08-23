/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentIntegrationMetadataPatchData } from "./IncidentIntegrationMetadataPatchData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Patch request for an incident integration metadata.
 */
export class IncidentIntegrationMetadataPatchRequest {
  /**
   * Incident integration metadata data for a patch request.
   */
  "data": IncidentIntegrationMetadataPatchData;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      type: "IncidentIntegrationMetadataPatchData",
      required: true,
    },
  };
}
