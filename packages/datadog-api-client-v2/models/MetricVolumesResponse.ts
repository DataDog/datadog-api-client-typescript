/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricVolumes } from "./MetricVolumes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response object which includes a single metric's volume.
 */
export class MetricVolumesResponse {
  /**
   * Possible response objects for a metric's volume.
   */
  "data"?: MetricVolumes;

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
      type: "MetricVolumes",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricVolumesResponse.attributeTypeMap;
  }

  public constructor() {}
}
