/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PowerpacksResponseMetaPagination } from "./PowerpacksResponseMetaPagination";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Powerpack response metadata.
 */
export class PowerpacksResponseMeta {
  /**
   * Powerpack response pagination metadata.
   */
  "pagination"?: PowerpacksResponseMetaPagination;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    pagination: {
      baseName: "pagination",
      type: "PowerpacksResponseMetaPagination",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return PowerpacksResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}