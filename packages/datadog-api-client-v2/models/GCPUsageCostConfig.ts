/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GCPUsageCostConfigAttributes } from "./GCPUsageCostConfigAttributes";
import { GCPUsageCostConfigType } from "./GCPUsageCostConfigType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * GCP Usage Cost config.
 */
export class GCPUsageCostConfig {
  /**
   * Attributes for a GCP Usage Cost config.
   */
  "attributes": GCPUsageCostConfigAttributes;
  /**
   * The ID of the GCP Usage Cost config.
   */
  "id"?: number;
  /**
   * Type of GCP Usage Cost config.
   */
  "type": GCPUsageCostConfigType;

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
      type: "GCPUsageCostConfigAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "number",
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "GCPUsageCostConfigType",
      required: true,
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
    return GCPUsageCostConfig.attributeTypeMap;
  }

  public constructor() {}
}
