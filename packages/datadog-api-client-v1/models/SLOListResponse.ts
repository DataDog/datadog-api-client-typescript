/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ServiceLevelObjective } from "./ServiceLevelObjective";
import { SLOListResponseMetadata } from "./SLOListResponseMetadata";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A response with one or more service level objective.
 */
export class SLOListResponse {
  /**
   * An array of service level objective objects.
   */
  "data"?: Array<ServiceLevelObjective>;
  /**
   * An array of error messages. Each endpoint documents how/whether this field is
   * used.
   */
  "errors"?: Array<string>;
  /**
   * The metadata object containing additional information about the list of SLOs.
   */
  "metadata"?: SLOListResponseMetadata;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "Array<ServiceLevelObjective>",
    },
    errors: {
      baseName: "errors",
      type: "Array<string>",
    },
    metadata: {
      baseName: "metadata",
      type: "SLOListResponseMetadata",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SLOListResponse.attributeTypeMap;
  }

  public constructor() {}
}
