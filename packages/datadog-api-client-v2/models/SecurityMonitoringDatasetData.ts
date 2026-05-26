/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringDatasetAttributesResponse } from "./SecurityMonitoringDatasetAttributesResponse";
import { SecurityMonitoringDatasetType } from "./SecurityMonitoringDatasetType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The data wrapper of a dataset response.
 */
export class SecurityMonitoringDatasetData {
  /**
   * The attributes of a Cloud SIEM dataset.
   */
  "attributes": SecurityMonitoringDatasetAttributesResponse;
  /**
   * The UUID of the dataset.
   */
  "id": string;
  /**
   * The type of resource for a dataset response.
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
    return SecurityMonitoringDatasetData.attributeTypeMap;
  }

  public constructor() {}
}
