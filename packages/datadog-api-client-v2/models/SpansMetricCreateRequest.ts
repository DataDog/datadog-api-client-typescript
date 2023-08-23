/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SpansMetricCreateData } from "./SpansMetricCreateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The new span-based metric body.
 */
export class SpansMetricCreateRequest {
  /**
   * The new span-based metric properties.
   */
  "data": SpansMetricCreateData;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      type: "SpansMetricCreateData",
      required: true,
    },
  };
}
