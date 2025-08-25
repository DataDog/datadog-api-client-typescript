/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorUserTemplateResourceType } from "./MonitorUserTemplateResourceType";
import { MonitorUserTemplateResponseAttributes } from "./MonitorUserTemplateResponseAttributes";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Monitor user template list response data.
*/
export class MonitorUserTemplateResponseData {
  /**
   * Attributes for a monitor user template.
  */
  "attributes"?: MonitorUserTemplateResponseAttributes;
  /**
   * The unique identifier.
  */
  "id"?: string;
  /**
   * Monitor user template resource type.
  */
  "type"?: MonitorUserTemplateResourceType;

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
      "type": "MonitorUserTemplateResponseAttributes",
    },
    "id": {
      "baseName": "id",
      "type": "string",
    },
    "type": {
      "baseName": "type",
      "type": "MonitorUserTemplateResourceType",
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




    return MonitorUserTemplateResponseData.attributeTypeMap;

  }

  public constructor() {











  }
}









