/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AllocationDataType } from "./AllocationDataType";
import { UpsertAllocationRequest } from "./UpsertAllocationRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data wrapper for allocation request payloads.
 */
export class AllocationDataRequest {
  /**
   * Request to create or update a targeting rule (allocation) for a feature flag environment.
   */
  "attributes": UpsertAllocationRequest;
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
      type: "UpsertAllocationRequest",
      required: true,
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
    return AllocationDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
