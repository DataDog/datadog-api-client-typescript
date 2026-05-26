/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringDatasetDependentsAttributes } from "./SecurityMonitoringDatasetDependentsAttributes";
import { SecurityMonitoringDatasetDependentsType } from "./SecurityMonitoringDatasetDependentsType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A single entry describing the dependents of one dataset.
 */
export class SecurityMonitoringDatasetDependentsData {
  /**
   * The attributes of a dataset dependents entry.
   */
  "attributes": SecurityMonitoringDatasetDependentsAttributes;
  /**
   * The UUID of the dataset.
   */
  "id": string;
  /**
   * The type of resource for a dataset dependents entry.
   */
  "type": SecurityMonitoringDatasetDependentsType;

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
      type: "SecurityMonitoringDatasetDependentsAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringDatasetDependentsType",
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
    return SecurityMonitoringDatasetDependentsData.attributeTypeMap;
  }

  public constructor() {}
}
