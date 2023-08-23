/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OnDemandConcurrencyCapAttributes } from "./OnDemandConcurrencyCapAttributes";
import { OnDemandConcurrencyCapType } from "./OnDemandConcurrencyCapType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * On-demand concurrency cap.
 */
export class OnDemandConcurrencyCap {
  /**
   * On-demand concurrency cap attributes.
   */
  "attributes"?: OnDemandConcurrencyCapAttributes;
  /**
   * On-demand concurrency cap type.
   */
  "type"?: OnDemandConcurrencyCapType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      type: "OnDemandConcurrencyCapAttributes",
    },
    type: {
      type: "OnDemandConcurrencyCapType",
    },
  };
}
