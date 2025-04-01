/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumMetricUniquenessWhen } from "./RumMetricUniquenessWhen";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The rule to count updatable events. Is only set if `event_type` is `session` or `view`.
*/
export class RumMetricResponseUniqueness {
  /**
   * When to count updatable events. `match` when the event is first seen, or `end` when the event is complete.
  */
  "when"?: RumMetricUniquenessWhen;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "when": {
      "baseName": "when",
      "type": "RumMetricUniquenessWhen",
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return RumMetricResponseUniqueness.attributeTypeMap;

  }

  public constructor() {











  }
}









