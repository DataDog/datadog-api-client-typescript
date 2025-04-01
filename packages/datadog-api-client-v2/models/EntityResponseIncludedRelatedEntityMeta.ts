/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Included related entity meta.
*/
export class EntityResponseIncludedRelatedEntityMeta {
  /**
   * Entity creation time.
  */
  "createdAt"?: Date;
  /**
   * Entity relation defined by.
  */
  "definedBy"?: string;
  /**
   * Entity modification time.
  */
  "modifiedAt"?: Date;
  /**
   * Entity relation source.
  */
  "source"?: string;

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
      "baseName": "createdAt",
      "type": "Date",
      "format": "date-time",
    },
    "definedBy": {
      "baseName": "defined_by",
      "type": "string",
    },
    "modifiedAt": {
      "baseName": "modifiedAt",
      "type": "Date",
      "format": "date-time",
    },
    "source": {
      "baseName": "source",
      "type": "string",
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




    return EntityResponseIncludedRelatedEntityMeta.attributeTypeMap;

  }

  public constructor() {











  }
}









