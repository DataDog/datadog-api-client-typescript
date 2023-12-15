/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ActiveBillingDimensionsAttributes } from "./ActiveBillingDimensionsAttributes";
import { ActiveBillingDimensionsType } from "./ActiveBillingDimensionsType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Active billing dimensions data.
 */
export class ActiveBillingDimensionsBody {
  /**
   * List of active billing dimensions.
   */
  "attributes"?: ActiveBillingDimensionsAttributes;
  /**
   * Unique ID of the response.
   */
  "id"?: string;
  /**
   * Type of active billing dimensions data.
   */
  "type"?: ActiveBillingDimensionsType;

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
      type: "ActiveBillingDimensionsAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ActiveBillingDimensionsType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ActiveBillingDimensionsBody.attributeTypeMap;
  }

  public constructor() {}
}
