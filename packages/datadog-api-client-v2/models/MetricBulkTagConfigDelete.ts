/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricBulkConfigureTagsType } from "./MetricBulkConfigureTagsType";
import { MetricBulkTagConfigDeleteAttributes } from "./MetricBulkTagConfigDeleteAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request object to bulk delete all tag configurations for metrics matching the given prefix.
 */
export class MetricBulkTagConfigDelete {
  /**
   * Optional parameters for bulk deleting metric tag configurations.
   */
  "attributes"?: MetricBulkTagConfigDeleteAttributes;
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
      type: "MetricBulkTagConfigDeleteAttributes",
    },
    id: {
      type: "string",
      required: true,
    },
    type: {
      type: "MetricBulkConfigureTagsType",
      required: true,
    },
  };
}
