/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentIntegrationMetadataAttributes } from "./IncidentIntegrationMetadataAttributes";
import { IncidentIntegrationMetadataType } from "./IncidentIntegrationMetadataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Incident integration metadata from a response.
 */
export class IncidentIntegrationMetadataResponseData {
  /**
   * Incident integration metadata's attributes for a create request.
   */
  "attributes"?: IncidentIntegrationMetadataAttributes;
  /**
   * The incident integration metadata's ID.
   */
  "id": string;
  /**
   * Integration metadata resource type.
   */
  "type": IncidentIntegrationMetadataType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "IncidentIntegrationMetadataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentIntegrationMetadataType",
      required: true,
    },
  };
}
