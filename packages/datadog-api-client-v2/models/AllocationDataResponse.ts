/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Allocation } from "./Allocation";
import { AllocationDataType } from "./AllocationDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data wrapper for targeting rule allocation responses.
 */
export class AllocationDataResponse {
  /**
   * Targeting rule (allocation) details for a feature flag environment.
   */
  "attributes": Allocation;
  /**
   * The unique identifier of the targeting rule allocation.
   */
  "id": string;
  /**
   * The resource type.
   */
  "type": AllocationDataType;

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
      type: "Allocation",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "AllocationDataType",
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
    return AllocationDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
