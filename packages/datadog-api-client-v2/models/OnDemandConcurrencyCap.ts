/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OnDemandConcurrencyCapAttributes } from "./OnDemandConcurrencyCapAttributes";
import { OnDemandConcurrencyCapType } from "./OnDemandConcurrencyCapType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

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
    "attributes": {
      "baseName": "attributes",
      "type": "OnDemandConcurrencyCapAttributes",
    },
    "type": {
      "baseName": "type",
      "type": "OnDemandConcurrencyCapType",
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




    return OnDemandConcurrencyCap.attributeTypeMap;

  }

  public constructor() {











  }
}









