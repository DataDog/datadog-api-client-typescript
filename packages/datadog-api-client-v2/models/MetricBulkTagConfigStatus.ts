/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricBulkConfigureTagsType } from "./MetricBulkConfigureTagsType";
import { MetricBulkTagConfigStatusAttributes } from "./MetricBulkTagConfigStatusAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The status of a request to bulk configure metric tags.
 * It contains the fields from the original request for reference.
 */
export class MetricBulkTagConfigStatus {
  /**
   * Optional attributes for the status of a bulk tag configuration request.
   */
  "attributes"?: MetricBulkTagConfigStatusAttributes;
  /**
   * A text prefix to match against metric names.
   */
  "id": string;
  /**
   * The metric bulk configure tags resource.
   */
  "type": MetricBulkConfigureTagsType;

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
      type: "MetricBulkTagConfigStatusAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "MetricBulkConfigureTagsType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricBulkTagConfigStatus.attributeTypeMap;
  }

  public constructor() {}
}
