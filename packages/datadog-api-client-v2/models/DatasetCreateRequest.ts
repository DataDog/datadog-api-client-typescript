/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Dataset } from "./Dataset";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Create request for a dataset.
 */
export class DatasetCreateRequest {
  /**
   * Dataset object.
   *
   * ### Datasets Constraints
   * - **Tag Limit per Dataset**:
   *   - Each restricted dataset supports a maximum of 10 key:value pairs per product.
   *
   * - **Tag Key Rules per Telemetry Type**:
   *   - Only one tag key or attribute may be used to define access within a single telemetry type.
   *   - The same or different tag key may be used across different telemetry types.
   *
   * - **Tag Value Uniqueness**:
   *   - Tag values must be unique within a single dataset.
   *   - A tag value used in one dataset cannot be reused in another dataset of the same telemetry type.
   */
  "data": Dataset;

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
      type: "Dataset",
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
    return DatasetCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
