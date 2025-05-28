/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTriggerCITestLocation } from "./SyntheticsTriggerCITestLocation";
import { SyntheticsTriggerCITestRunResult } from "./SyntheticsTriggerCITestRunResult";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Object containing information about the tests triggered.
*/
export class SyntheticsTriggerCITestsResponse {
  /**
   * The public ID of the batch triggered.
  */
  "batchId"?: string;
  /**
   * List of Synthetic locations.
  */
  "locations"?: Array<SyntheticsTriggerCITestLocation>;
  /**
   * Information about the tests runs.
  */
  "results"?: Array<SyntheticsTriggerCITestRunResult>;
  /**
   * The public IDs of the Synthetic test triggered.
  */
  "triggeredCheckIds"?: Array<string>;

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
    "batchId": {
      "baseName": "batch_id",
      "type": "string",
    },
    "locations": {
      "baseName": "locations",
      "type": "Array<SyntheticsTriggerCITestLocation>",
    },
    "results": {
      "baseName": "results",
      "type": "Array<SyntheticsTriggerCITestRunResult>",
    },
    "triggeredCheckIds": {
      "baseName": "triggered_check_ids",
      "type": "Array<string>",
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




    return SyntheticsTriggerCITestsResponse.attributeTypeMap;

  }

  public constructor() {











  }
}









