/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonthlyResource } from "./MonthlyResource";
import { MonthlyResourcesMetadata } from "./MonthlyResourcesMetadata";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Monthly usage for host and non-host resources.
 */
export class MonthlyResourcesResponse {
  /**
   * Resource usage records. Empty when no matching resources are available.
   */
  "data"?: Array<MonthlyResource>;
  /**
   * Metadata for monthly resource usage.
   */
  "meta"?: MonthlyResourcesMetadata;

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
      type: "Array<MonthlyResource>",
    },
    meta: {
      baseName: "meta",
      type: "MonthlyResourcesMetadata",
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
    return MonthlyResourcesResponse.attributeTypeMap;
  }

  public constructor() {}
}
