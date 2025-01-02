/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GCPUsageCostConfig } from "./GCPUsageCostConfig";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response of GCP Usage Cost config.
 */
export class GCPUsageCostConfigResponse {
  /**
   * GCP Usage Cost config.
   */
  "data"?: GCPUsageCostConfig;

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
    data: {
      baseName: "data",
      type: "GCPUsageCostConfig",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GCPUsageCostConfigResponse.attributeTypeMap;
  }

  public constructor() {}
}
