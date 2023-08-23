/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentIntegrationMetadataResponseData } from "./IncidentIntegrationMetadataResponseData";
import { IncidentIntegrationMetadataResponseIncludedItem } from "./IncidentIntegrationMetadataResponseIncludedItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response with an incident integration metadata.
 */
export class IncidentIntegrationMetadataResponse {
  /**
   * Incident integration metadata from a response.
   */
  "data": IncidentIntegrationMetadataResponseData;
  /**
   * Included related resources that the user requested.
   */
  "included"?: Array<IncidentIntegrationMetadataResponseIncludedItem>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      type: "IncidentIntegrationMetadataResponseData",
      required: true,
    },
    included: {
      type: "Array<IncidentIntegrationMetadataResponseIncludedItem>",
    },
  };
}
