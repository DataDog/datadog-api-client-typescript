/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricIngestedIndexedVolumeAttributes } from "./MetricIngestedIndexedVolumeAttributes";
import { MetricIngestedIndexedVolumeType } from "./MetricIngestedIndexedVolumeType";

import { UnparsedObject } from "../../datadog-api-client-common/util";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object for a single metric's ingested and indexed volume.
 */
export class MetricIngestedIndexedVolume {
  /**
   * Object containing the definition of a metric's ingested and indexed volume.
   */
  "attributes"?: MetricIngestedIndexedVolumeAttributes;
  /**
   * The metric name for this resource.
   */
  "id"?: string;
  /**
   * The metric ingested and indexed volume type.
   */
  "type"?: MetricIngestedIndexedVolumeType;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "MetricIngestedIndexedVolumeAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "MetricIngestedIndexedVolumeType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricIngestedIndexedVolume.attributeTypeMap;
  }

  public constructor() {}
}
