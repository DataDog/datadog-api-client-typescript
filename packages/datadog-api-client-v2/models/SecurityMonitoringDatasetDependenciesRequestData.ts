/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringDatasetDependenciesRequestAttributes } from "./SecurityMonitoringDatasetDependenciesRequestAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The data wrapper of a dataset dependencies request.
 */
export class SecurityMonitoringDatasetDependenciesRequestData {
  /**
   * The attributes of a dataset dependencies request.
   */
  "attributes": SecurityMonitoringDatasetDependenciesRequestAttributes;

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
      type: "SecurityMonitoringDatasetDependenciesRequestAttributes",
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
    return SecurityMonitoringDatasetDependenciesRequestData.attributeTypeMap;
  }

  public constructor() {}
}
