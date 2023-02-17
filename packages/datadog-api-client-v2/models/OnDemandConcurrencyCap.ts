/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OnDemandConcurrencyCapAttributes } from "./OnDemandConcurrencyCapAttributes";

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
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "OnDemandConcurrencyCapAttributes",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OnDemandConcurrencyCap.attributeTypeMap;
  }

  public constructor() {}
}
