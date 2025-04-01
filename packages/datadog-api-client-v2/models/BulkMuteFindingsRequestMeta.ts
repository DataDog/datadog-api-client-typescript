/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { BulkMuteFindingsRequestMetaFindings } from "./BulkMuteFindingsRequestMetaFindings";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Meta object containing the findings to be updated.
*/
export class BulkMuteFindingsRequestMeta {
  /**
   * Array of findings.
  */
  "findings"?: Array<BulkMuteFindingsRequestMetaFindings>;

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
    "findings": {
      "baseName": "findings",
      "type": "Array<BulkMuteFindingsRequestMetaFindings>",
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




    return BulkMuteFindingsRequestMeta.attributeTypeMap;

  }

  public constructor() {











  }
}









