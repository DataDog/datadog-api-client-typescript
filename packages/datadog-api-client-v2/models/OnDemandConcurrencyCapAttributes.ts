/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * On-demand concurrency cap attributes.
 */
export class OnDemandConcurrencyCapAttributes {
  /**
   * Value of the on-demand concurrency cap.
   */
  "onDemandConcurrencyCap"?: number;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    onDemandConcurrencyCap: {
      baseName: "on_demand_concurrency_cap",
      type: "number",
      format: "double",
    },
  };
}
