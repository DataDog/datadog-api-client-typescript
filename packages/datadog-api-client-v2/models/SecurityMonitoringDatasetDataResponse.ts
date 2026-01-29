/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringDatasetAttributesResponse } from "./SecurityMonitoringDatasetAttributesResponse";
import { SecurityMonitoringDatasetType } from "./SecurityMonitoringDatasetType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A security monitoring dataset.
 */
export class SecurityMonitoringDatasetDataResponse {
  /**
   * Attributes of a security monitoring dataset.
   */
  "attributes": SecurityMonitoringDatasetAttributesResponse;
  /**
   * The unique identifier of the dataset.
   */
  "id": string;
  /**
   * Type for security monitoring dataset objects.
   */
  "type": SecurityMonitoringDatasetType;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

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
      type: "SecurityMonitoringDatasetAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringDatasetType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringDatasetDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
