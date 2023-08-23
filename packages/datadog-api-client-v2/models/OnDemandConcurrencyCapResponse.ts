/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OnDemandConcurrencyCap } from "./OnDemandConcurrencyCap";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * On-demand concurrency cap response.
 */
export class OnDemandConcurrencyCapResponse {
  /**
   * On-demand concurrency cap.
   */
  "data"?: OnDemandConcurrencyCap;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      type: "OnDemandConcurrencyCap",
    },
  };
}
