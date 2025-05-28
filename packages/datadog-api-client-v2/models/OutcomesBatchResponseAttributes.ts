/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { State } from "./State";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The JSON:API attributes for an outcome.
*/
export class OutcomesBatchResponseAttributes {
  /**
   * Creation time of the rule outcome.
  */
  "createdAt"?: Date;
  /**
   * Time of last rule outcome modification.
  */
  "modifiedAt"?: Date;
  /**
   * Any remarks regarding the scorecard rule's evaluation, and supports HTML hyperlinks.
  */
  "remarks"?: string;
  /**
   * The unique name for a service in the catalog.
  */
  "serviceName"?: string;
  /**
   * The state of the rule evaluation.
  */
  "state"?: State;

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
    "createdAt": {
      "baseName": "created_at",
      "type": "Date",
      "format": "date-time",
    },
    "modifiedAt": {
      "baseName": "modified_at",
      "type": "Date",
      "format": "date-time",
    },
    "remarks": {
      "baseName": "remarks",
      "type": "string",
    },
    "serviceName": {
      "baseName": "service_name",
      "type": "string",
    },
    "state": {
      "baseName": "state",
      "type": "State",
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




    return OutcomesBatchResponseAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









