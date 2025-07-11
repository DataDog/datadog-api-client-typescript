/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GCPUsageCostConfigPatchRequestAttributes } from "./GCPUsageCostConfigPatchRequestAttributes";
import { GCPUsageCostConfigPatchRequestType } from "./GCPUsageCostConfigPatchRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * GCP Usage Cost config patch data.
 */
export class GCPUsageCostConfigPatchData {
  /**
   * Attributes for GCP Usage Cost config patch request.
   */
  "attributes": GCPUsageCostConfigPatchRequestAttributes;
  /**
   * Type of GCP Usage Cost config patch request.
   */
  "type": GCPUsageCostConfigPatchRequestType;

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
      type: "GCPUsageCostConfigPatchRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GCPUsageCostConfigPatchRequestType",
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
    return GCPUsageCostConfigPatchData.attributeTypeMap;
  }

  public constructor() {}
}
