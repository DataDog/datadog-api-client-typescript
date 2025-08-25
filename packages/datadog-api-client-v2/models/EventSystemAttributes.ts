/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EventSystemAttributesCategory } from "./EventSystemAttributesCategory";
import { EventSystemAttributesIntegrationId } from "./EventSystemAttributesIntegrationId";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * JSON object of event system attributes.
*/
export class EventSystemAttributes {
  /**
   * Event category identifying the type of event.
  */
  "category"?: EventSystemAttributesCategory;
  /**
   * Event identifier. This field is deprecated and will be removed in a future version. Use the `uid` field instead.
  */
  "id"?: string;
  /**
   * Integration ID sourced from integration manifests.
  */
  "integrationId"?: EventSystemAttributesIntegrationId;
  /**
   * The source type ID of the event.
  */
  "sourceId"?: number;
  /**
   * A unique identifier for the event. You can use this identifier to query or reference the event.
  */
  "uid"?: string;

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
    "category": {
      "baseName": "category",
      "type": "EventSystemAttributesCategory",
    },
    "id": {
      "baseName": "id",
      "type": "string",
    },
    "integrationId": {
      "baseName": "integration_id",
      "type": "EventSystemAttributesIntegrationId",
    },
    "sourceId": {
      "baseName": "source_id",
      "type": "number",
      "format": "int64",
    },
    "uid": {
      "baseName": "uid",
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




    return EventSystemAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









